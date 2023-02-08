function XF_MAP(xf_parent_map) {
    // initialize
    this._init(xf_parent_map);

    // create internal document object model
    this._dom();

    // process event parameter and set internal event handler
    this._event();
}

XF_MAP.prototype._init = function(xf_parent_map) {
    this.xf_parent_map = xf_parent_map;
    this.is_expired = false;
    this.markers = [];
    this.is_terrain_map = false;
    this.click_listener = null;
    this.map = null;
    this.map_type = 0;
    this.MAP_GOOGLE = 0;
    this.MAP_NAVER = 1;
    this.MAP_DAUM = 2;
    this.xf_object = $('._xf_map');
    this.xf_document = $(document);
    this.xf_prop = this.xf_parent_map.xf_prop;
};

XF_MAP.prototype._dom = function() {
    var map_canvas, map_options;
    var zoom;

    // DOM 높이 조정
    this.on_window_resize();

    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            switch(this.xf_prop.map_type) {
                case 0: this.map_type = google.maps.MapTypeId.ROADMAP; break;
                case 1: this.map_type = google.maps.MapTypeId.SATELLITE; break;
                case 2: this.map_type = google.maps.MapTypeId.HYBRID; break;
                case 3: this.map_type = google.maps.MapTypeId.TERRAIN; break;
            }
            map_canvas = this.xf_object.get(0);
            map_options = {
                center: new google.maps.LatLng(this.xf_prop.latitude, this.xf_prop.longitude),
                zoom: this._get_level_from_percentage(this.xf_prop.zoom_level),
                mapTypeId: this.map_type,
                mapTypeControl: false,
                panControl: false,
                zoomControlOptions: { position:google.maps.ControlPosition.TOP_RIGHT },
                streetViewControl: false
            };

            this.map = new google.maps.Map(map_canvas, map_options);

            break;

        case this.MAP_NAVER: // naver map
            switch(this.xf_prop.map_type) {
                case 0: this.map_type = 0; break;   // normal
                case 1: this.map_type = 2; break;   // satellite
                case 2: this.map_type = 1; break;   // hybrid
                case 3: this.map_type = 3; break;   // terrain
            }

            // nhn.api.map.setDefaultPoint('LatLng');
            // naver.maps.setDefaultPoint('LatLng');

            map_canvas = this.xf_object.get(0);
            map_options = {
                // point : new nhn.api.map.LatLng(this.xf_prop.latitude, this.xf_prop.longitude),
                point : new naver.maps.LatLng(this.xf_prop.latitude, this.xf_prop.longitude),
                zoom : this._get_level_from_percentage(this.xf_prop.zoom_level),
                enableWheelZoom : true,
                enableDragPan : true,
                enableDblClickZoom : false,
                mapMode : this.map_type,
                activateTrafficMap : false,
                activateBicycleMap : false,
                minMaxLevel : [ 1, 14 ]
            };

            // this.map = new nhn.api.map.Map(map_canvas, map_options);
            // this.map = new naver.maps.Map(map_canvas, map_options);

            /*
            map_options = {
                center: new naver.maps.LatLng(37.3595704, 127.105399),
                zoom: 10
            };
            */
            this.map = new naver.maps.Map(map_canvas, map_options);

            // add zoom control
            /*
            zoom = new nhn.api.map.ZoomControl();
            zoom.setPosition({ right:10, top:10 });
            this.map.addControl(zoom);
            */

            var zoomControl = new naver.maps.ZoomControl({
                position: naver.maps.Position.TOP_LEFT
            });

            zoomControl.setMap(this.map);
            break;

        case this.MAP_DAUM: // daum map
            switch(this.xf_prop.map_type) {
                case 0: this.map_type = daum.maps.MapTypeId.ROADMAP; break;
                case 1: this.map_type = daum.maps.MapTypeId.SKYVIEW; break;
                case 2: this.map_type = daum.maps.MapTypeId.HYBRID; break;
                case 3: this.map_type = daum.maps.MapTypeId.ROADMAP; break;
            }

            map_canvas = this.xf_object.get(0);
            map_options = {
                center: new daum.maps.LatLng(this.xf_prop.latitude, this.xf_prop.longitude),
                level: this._get_level_from_percentage(this.xf_prop.zoom_level),
                mapTypeId: this.map_type,
                draggable: true,
                scrollwheel: true
            };

            this.map = new daum.maps.Map(map_canvas, map_options);

            if(3 == this.xf_prop.map_type) {
                this.map.addOverlayMapTypeId(daum.maps.MapTypeId.TERRAIN);
                this.is_terrain_map = true;
            }

            // add zoom control
            var zoom_control = new daum.maps.ZoomControl();
            this.map.addControl(zoom_control, daum.maps.ControlPosition.RIGHT);

            break;
    }
};

XF_MAP.prototype._offevent = function() {
    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            if(this.click_listener) {
                google.maps.event.removeListener(this.click_listener);
                this.click_listener = null;
            }
            break;
        case this.MAP_NAVER: // naver map
            if(this.click_listener) {
                this.map.detach('click', this.click_listener);
                this.click_listener = null;
            }
            break;
        case this.MAP_DAUM: // daum map
            if(this.click_listener) {
                daum.maps.event.removeListener(this.map, 'click', this.click_listener);
                this.click_listener = null;
            }
            break;
    }
};

XF_MAP.prototype._event = function() {
    var xf_window;

    this._offevent();

    xf_window = $(window);
    xf_window.on('resize', $.proxy(this.on_window_resize, this));

    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            this.click_listener = google.maps.event.addListener(this.map, 'click', $.proxy(this.on_object_click, this));
            break;
        case this.MAP_NAVER: // naver map
            this.click_listener = $.proxy(this.on_object_click, this);
            // this.map.attach('click', this.click_listener);
            naver.maps.Event.addListener(this.map, 'click', this.click_listener);
            break;
        case this.MAP_DAUM: // daum map
            this.click_listener = $.proxy(this.on_object_click, this);
            daum.maps.event.addListener(this.map, 'click', this.click_listener);
            break;
    }
};

XF_MAP.prototype.on_window_resize = function(event) {
    this.xf_object.css('height', this.xf_document.innerHeight() + 'px');
};

XF_MAP.prototype._get_level_from_percentage = function(percentage) {
    var zoom_level = 0;

    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            switch (this.map_type) {
                case google.maps.MapTypeId.ROADMAP:
                case google.maps.MapTypeId.HYBRID:
                    zoom_level = Math.round(21 / 100 * percentage);
                    break;
                case google.maps.MapTypeId.SATELLITE:
                    zoom_level = Math.round(19 / 100 * percentage);
                    break;
            }
            break;
        case this.MAP_NAVER: // naver map
            zoom_level = Math.round(13 / 100 * percentage) + 1;
            break;
        case this.MAP_DAUM: // daum
            switch (this.map_type) {
                case daum.maps.MapTypeId.ROADMAP:
                case daum.maps.MapTypeId.HYBRID:
                    zoom_level = Math.round(14 - (13 / 100 * percentage));
                    break;
                case daum.maps.MapTypeId.SKYVIEW:
                    zoom_level = Math.round(15 - (14 / 100 * percentage)) - 1;
                    break;
            }
            break;
    }

    return zoom_level;
};

//////////////////////////////////////////////////////////
// API
//////////////////////////////////////////////////////////

XF_MAP.prototype.getmapkind = function() {
    return this.xf_prop.map_kind;
};

XF_MAP.prototype.setcenter = function(latitude, longitude) {
    latitude = parseFloat(latitude);
    longitude = parseFloat(longitude);

    if (isNaN(latitude) || isNaN(longitude)) { return false; }

    this.xf_prop.latitude = latitude;
    this.xf_prop.longitude = longitude;
    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            this.map.setCenter(new google.maps.LatLng(latitude, longitude));
            break;
        case this.MAP_NAVER: // naver map
            this.map.setCenter(new naver.maps.LatLng(latitude, longitude));      // v3
            break;
        case this.MAP_DAUM: // daum map
            this.map.setCenter(new daum.maps.LatLng(latitude, longitude));
            break;
        default:
            return false;
    }

    return true;

};

XF_MAP.prototype.getcenter = function() {
    var center = [];
    var latlng = null;

    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            latlng = this.map.getCenter();
            center.push(latlng.lat());
            center.push(latlng.lng());
            break;
        case this.MAP_NAVER: // naver map
            latlng = this.map.getCenter();
            center.push(latlng.lat());
            center.push(latlng.lng());
            break;
        case this.MAP_DAUM: // daum map
            latlng = this.map.getCenter();
            center.push(latlng.getLat());
            center.push(latlng.getLng());
            break;
    }

    return center;
};

XF_MAP.prototype.setzoomlevel = function(zoom_level) {
    this.xf_prop.zoom_level = zoom_level;

    var level = this._get_level_from_percentage(zoom_level);
    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            this.map.setZoom(level);
            break;
        case this.MAP_NAVER: // naver map
            this.map.setZoom(level);
            break;
        case this.MAP_DAUM: // daum map
            this.map.setLevel(level);
            break;
    }
};

XF_MAP.prototype.setmaptype = function(map_type) {
    if(this.map_type < 0 || 2 < this.map_type) {
        return;
    }
    this.xf_prop.map_type = map_type;
    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            var google_map_type = google.maps.MapTypeId.ROADMAP;
            switch(map_type) {
                case 0: google_map_type = google.maps.MapTypeId.ROADMAP; break;
                case 1: google_map_type = google.maps.MapTypeId.SATELLITE; break;
                case 2: google_map_type = google.maps.MapTypeId.HYBRID; break;
                case 3: google_map_type = google.maps.MapTypeId.TERRAIN; break;
            }
            this.map.setMapTypeId(google_map_type);
            break;
        case this.MAP_NAVER: // naver map
            var naver_map_type = naver.maps.MapTypeId.NORMAL;
            switch(map_type) {
                case 0: naver_map_type = naver.maps.MapTypeId.NORMAL; break;
                case 1: naver_map_type = naver.maps.MapTypeId.SATELLITE; break; // TERRAIN
                case 2: naver_map_type = naver.maps.MapTypeId.HYBRID; break;        SATELLITE;
                case 3: naver_map_type = naver.maps.MapTypeId.TERRAIN; break;
            }
            this.map.setMapTypeId(naver_map_type);
            break;
        case 2: // daum map
            var daum_map_type = daum.maps.MapTypeId.ROADMAP;
            switch(map_type) {
                case 0: daum_map_type = daum.maps.MapTypeId.ROADMAP; break;
                case 1: daum_map_type = daum.maps.MapTypeId.SKYVIEW; break;
                case 2: daum_map_type = daum.maps.MapTypeId.HYBRID; break;
                case 3: daum_map_type = daum.maps.MapTypeId.ROADMAP; break;
            }
            this.map.setMapTypeId(daum_map_type);
            if(3 == map_type) {
                if(!this.is_terrain_map) {
                    this.map.addOverlayMapTypeId(daum.maps.MapTypeId.TERRAIN);
                }
                this.is_terrain_map = true;
            } else {
                this.map.removeOverlayMapTypeId(daum.maps.MapTypeId.TERRAIN);
                this.is_terrain_map = false;
            }
            break;
    }
};

XF_MAP.prototype.getmaptype = function() {
    var map_type = 0;

    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            switch(this.map.getMapTypeId()) {
                case google.maps.MapTypeId.ROADMAP: map_type = 0; break;
                case google.maps.MapTypeId.SATELLITE: map_type = 1; break;
                case google.maps.MapTypeId.HYBRID: map_type = 2; break;
                case google.maps.MapTypeId.TERRAIN: map_type = 3; break;
            }
            break;
        case this.MAP_NAVER: // naver map
            switch(this.map.getMapTypeId()) {
                case naver.maps.MapTypeId.NORMAL: map_type = 0; break;
                case naver.maps.MapTypeId.SATELLITE: map_type = 1; break;
                case naver.maps.MapTypeId.HYBRID: map_type = 2; break;
                case naver.maps.MapTypeId.TERRAIN: map_type = 3; break;
            }
            break;
        case this.MAP_DAUM: // daum map
            switch(this.map.getMapTypeId()) {
                case daum.maps.MapTypeId.ROADMAP: map_type = 0; break;
                case daum.maps.MapTypeId.SKYVIEW: map_type = 1; break;
                case daum.maps.MapTypeId.HYBRID: map_type = 2; break;
            }
            if(this.is_terrain_map) {
                map_type = 3;
            }
            break;
    }
    return map_type;
};

XF_MAP.prototype.setmarker = function(latitude, longitude, title) {
    var marker = null;

    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(latitude, longitude),
                title: title
            });
            marker.setMap(this.map);
            break;

        case this.MAP_NAVER: // naver map
            marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(latitude, longitude),
                title: title
            });
            marker.setMap(this.map);
            break;

        case this.MAP_DAUM: // daum map
            marker = new daum.maps.Marker({
                position: new daum.maps.LatLng(latitude, longitude),
                title: title
            });
            marker.setMap(this.map);
            break;
    }

    this.markers.push(marker);

    return this.markers.length - 1;
};

XF_MAP.prototype.getmarkercount = function() {
    return this.markers.length;
};

XF_MAP.prototype.getmarker = function(index) {
    var marker_info = [];
    var latlng = null;
    var title = "";

    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            latlng = this.markers[index].getPosition();
            title = this.markers[index].getTitle();
            marker_info.push(latlng.lat());
            marker_info.push(latlng.lng());
            marker_info.push(title);
            break;
        case this.MAP_NAVER: // naver map
            latlng = this.markers[index].getPoint();
            title = this.markers[index].getTitle();
            marker_info.push(latlng.getLat());
            marker_info.push(latlng.getLng());
            marker_info.push(title);
            break;
        case this.MAP_DAUM: // daum map
            latlng = this.markers[index].getPosition();
            title = this.markers[index].getTitle();
            marker_info.push(latlng.getLat());
            marker_info.push(latlng.getLng());
            marker_info.push(title);
            break;
    }

    return marker_info;
};

XF_MAP.prototype.deletemarker = function(index) {
    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
        case this.MAP_DAUM: // daum map
            this.markers[index].setMap(null);
            this.markers.splice(index, 1);
            break;
        case this.MAP_NAVER: // naver map
            this.map.removeOverlay(this.markers[index]);
            this.markers.splice(index, 1);
            break;
    }
};

XF_MAP.prototype.deleteallmarkers = function() {
    for (var i = 0; i < this.markers.length; i++) {
        if(1 == this.xf_prop.map_kind) {    // naver map
            this.map.removeOverlay(this.markers[i]);
        } else {                            // google & daum map
            this.markers[i].setMap(null);
        }
        this.markers[i] = null;
    }
    this.markers = [];
};

XF_MAP.prototype.on_object_click = function(event) {
    switch(this.xf_prop.map_kind) {
        case this.MAP_GOOGLE: // google map
            // window[this.xf_prop.on_click](this, event.latLng.lat(), event.latLng.lng());
            this.xf_parent_map.on_map_click(this, event.latLng.lat(), event.latLng.lng());
            break;
        case this.MAP_NAVER: // naver map
            // window[this.xf_prop.on_click](this, event.point.getLat(), event.point.getLng());
            this.xf_parent_map.on_map_click(this, event.point.getLat(), event.point.getLng());
            break;
        case this.MAP_DAUM: // daum map
            // window[this.xf_prop.on_click](this, event.latLng.getLat(), event.latLng.getLng());
            this.xf_parent_map.on_map_click(this, event.latLng.getLat(), event.latLng.getLng());
            break;
    }
};
