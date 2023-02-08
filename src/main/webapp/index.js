/**
 * xFrame Engine 실행 환경 정보 및 xFrame Application에서 사용하는 전역 변수 설정
 * 화면에서는 factory.gethtmlparam 함수를 통해서 값을 구할 수 있음
 */
var _xf_param = {
    DBMS_CHARSET: 'UTF-8',              // 데이터 문자셋(기본: EUC-KR, UTF-8/EUC-KR, ...)
    ENGINEVER: '2.0.0.20150710',
    ENGINEURL: './xf5',                 // ENGINE 파일 기본 URL
    ENGINEHTMLURL: './xframe5.do',      // ENGINE 파일 기본 HTML
    ENGINEMODE: 'RELEASE',              // ENGINE 실행 모드(RELEASE/DEBUG/DEVELOP) (기본값: RELEASE)
    APPNAME: 'xframe5',
    USE_CACHE: false,
    SHOW_LOADSTATUS: false,             // 화면 로딩 상태 표시 여부 (기본값: false), 화면의 show_loadstatus 속성과 관련성 있음
                                        // 화면 show_loadstatus 속성이 0(inherit)인 경우, SHOW_LOADSTATUS(true/false) 값을 기준으로 표시/숨김 처리
                                        // 화면 show_loadstatus 속성이 1(show)인 경우, SHOW_LOADSTATUS 값과 상관없이 표시 처리
                                        // 화면 show_loadstatus 속성이 2(hide)인 경우, SHOW_LOADSTATUS 값과 상관없이 숨김 처리
    SHOW_LOADSTATUS_ICON: false,         // 화면 로딩 상태 표싱용 아이콘 표시 여부 (기본값: true)
    
    MAINFRAMESCREEN: '/xdataset5UpdateSample',
    
    
    SCREENBASEURL: './project/screen',
    IMAGEBASEURL: './image',
    PICKLISTBASEURL: './picklist',
    MENUBASEURL: './menu',
    STYLEBASEURL: './project/style',    
    COMMONMODULEBASEURL: './project/screen/common_module',
    COMMONXDATASETBASEURL: './project/screen/common_xdataset',
    XDATASET_BASEURL : './',             	// 데이터셋 통신 기본 경로

    XTRAN_COMPRESS: true,                                               // XDataSet 데이터 압축 여부
    XTRAN_TIMEOUT: 1000 * 60 * 60,                                      // XDataSet 통신 기본 타임아웃(10분)
    XTRAN_DATAFORMAT: 'json',                                           // XDataSet 통신 데이터 형식 (json/xml)
    XTRAN_SENDDATAKEY: 'XDATASET5',                                     // XDataSet 송신 데이터 파라미터 키
    XTRAN_URLENCODING: true,                                            // XDataSet 송신 데이터 URL Encoding 여부 (기본값: true)
    XTRAN_XMLSENDDATAFUNC: 'XTRAN_XMLSENDDATAFUNC',                     // XDataSet 송신 XML 데이터 변환 사용자 함수
    XTRAN_XMLRECVDATAFUNC: 'XTRAN_XMLRECVDATAFUNC',                     // XDataSet 수신 XML 데이터 변환 사용자 함수

    XFRAME5BROWSER_MODALESS_POPUP_WIDTH_GAP: 0,
	XFRAME5BROWSER_MODALESS_POPUP_HEIGHT_GAP: 0,
	XFRAME5BROWSER_BROWSER_WIDTH_GAP: 0,
	XFRAME5BROWSER_BROWSER_HEIGHT_GAP: 0,
	
    BACKCOLOR_FOCUS: [255,255,255],             // 포커스 필드 배경 색상
    BORDERCOLOR_FOCUS: [180,180,180],           // 포커스 필드 보더 색상

    // OPTIONALCOLOR: [255,255,255],               // 선택 필드 배경 색상
    // MANDATORYCOLOR: [14,255,198],               // 필수 필드 배경 색상
    // DISABLECOLOR : [255,255,255],               // 잠금 필드 배경 색상

	CHECK_SCREENURL: false,                     // 화면 로드전 화면 URL 검사 처리 여부
	PROTECT_COPY: false,             			// 필드 복사 금지 처리 여부
    EVENTFIRE_BEFORE_SCREENONLOAD: false,    	// 화면의 on_load 이벤트 발생전 컴포넌트 이벤트 발생 처리 여부
                                                // false로 설정하면 화면 on_load 이벤트 이전에, 다른 컴포넌트의 이벤트가 발생하는 것을 방지함.
    EVENTFIRE_SYNC_SCREENONLOAD: true,     		// 화면의 on_laod 이벤트 동기식 발생시켰는지 여부
                                                // true로 설정한 경우, 화면내 다른 화면이 링크되어 있은 경우, 링크된 모든 화면이 로드가 완료된 상태에
                                                // 화면의 on_load 이벤트가 발생함
												
    SHOW_CONSOLETRACE: false,                   // 콘솔창 표시 여부
    POPUP_CONSOLETRACE: false,                  // 콘솔창 팝업으로 표시 여부
    CONSOLETRACE_SHOWEVENT: true,               // 콘솔창 이벤트 표시 여부
    CONSOLETRACE_SHOWEVENTPARAM: true,          // 콘솔창 파라미터 표시 여부
    CONSOLETRACE_SHOWTRAN: true,                // 콘솔창 이벤트 표시 여부
    CONSOLETRACE_SHOWXDATASETINNERCOLUMN: true, // 콘솔창 데이터 셋 내부 칼럼 표시 여부 (기본값: false)
    CONSOLETRACE_SHOWXDATASETMAXROW: 100,       // 콘솔창 데이터 셋 표시 최대행 갯수 (기본값: 100)

	/**
     * KEY DEFINE
     */
    KEYMAP_DUP_FIELD: [145,119],        // SCROLLLOCK, F8
    // KEYMAP_FOCUS_NEXT: [13],         // ENTER(13)
    KEYMAP_FOCUS_NEXT: [],              // ENTER(13)
    KEYMAP_FOCUS_PREV: [],           	// NUM +(107)
    KEYMAP_TRIPLE_ZERO: [],          	// NUM SPOT(110)
	KEYMAP_BUTTON_CLICK: [20],			// 버튼 클릭 효과 키 코드
	
    /**
     * OPTIONAL SCREEN GLOBAL PROPERTY
     * 화면에서 protect_image, protect_timeout, protect_xbutton 속성을 변경하지 않는 경우, 적용될 설정값을 지정함.
     */
    SCREEN_PROTECT_IMAGE: '',               // 화면 Protect 표시용 이미지 URL (화면 protect_image 속성)
    SCREEN_PROTECT_TIMEOUT: 30000,          // 화면 Protect 표시 타임아웃(ms) (화면 protect_timeout 속성)
    SCREEN_PROTECT_XBUTTON: false,          // 화면 Protect 닫기 버튼 표시 여부 (화면 protect_xbutton 속성)

    /**
     * EXTENDED PROPERTY
     */
    XUTIL_BASEURL: 'http://127.0.0.1:8080/xframe5/jsp/xframe5util.jsp',     // 서버에서 부가 기능 제공을 위한 URL
    XEXCEL_UPLOAD_URL: './XExcelUpload',        // 엑셀 업로드 URL
    XEXCEL_DOWNLOAD_URL: './XExcelDownload',    // 엑셀 다운로드 URL

    MAINSCREEN_CENTER: true,                // 메인 화면 수평 센터 정렬 여부
    GRID_VSCROLL_REALTIME_SYNC: true,       // 그리드 수직 스크롤 실시간 동기화 여부
    IS_DEV_MODE: false,                     // 엔진 개발 모드 여부
    HTML_READY_MODE: false,                 // HTML READY 모드 여부
    SHAPE_IS_COMPONENT: false,              // Shape 형식의 컴포넌트를 일반 컴포넌트 형식으로 처리 여부
    DATE_CALENDAR_SIZE: 2,                  // 날짜 필드 기본 달력 크기 (0:small, 1:medium, 2:large, 3:xlarge)

    /**
     * GRID
     */
    GRID_DBLCLICKEDIT: false,           	// 그리드 더블클릭시 편집 모드 처리
	GRID_MOUSEWHEEL_ACTIVEALWAYS: false,	// false: on focus, true: always
    GRID_EDITBOX_MULTILINE_NEWLINE: 0,      // 0: ALT + ENTER(EXCEL), 1: SHIFT ENTER, 2: ENTER
    GRID_FILELOAD_DATA_VALIDATION: 0,       // 0: No Valid, 1: Valid Number Type
    GRID_FILELOAD_ERROR_SHOWALERT: true,
    GRID_EXCELDOWNLOAD_ITEMSTYLE: true,     // 그리드 엑셀 다운로드시 아이템 스타일 처리 기능 표시 여부
    GRID_EXCELDOWNLOAD_FORECOLOR: true,     // 그리드 엑셀 다운로드시 전격 색상 처리 기능 표시 여부
    GRID_EXCELDOWNLOAD_ITEMMERGE: true,     // 그리드 엑셀 다운로드시 아이템 병합 처리 기능 표시 여부
	GRID_COPY_DATA_TYPE: 2,                 // 그리드 복사시 패턴 처리된 데이터 복사 처리 여부 (1:value(기본값),2:display-text)
	GRID_HORZSCROLL_MOVEMODE : 0,
			
    CONTEXT_MENU: {
        GRID: {
			// 아래의 메뉴 정보를 사용하기 위해서는 __default -> _default로 변경해서 사용해야 함.
            __default: {
                menu_width: 110,
                menu_arr: [
                    /*
                    {
                        type: 'menu',                   // 메뉴 유형 ('menu'/'separator')
                        id: '',                         // 메뉴 구분 ID
                        icon: 'bars',                   // 메뉴 아이콘 표시를 위한 이름
                        label: '',                      // 메뉴 표시용 텍스트
                        is_enable: true,                // 메뉴 활성화 여부
                        is_hidden: false,               // 메뉴 숨김 여부
                        callback: '',                   // 메뉴 클릭 콜백 함수
                        width: 200,                     // 서브 메뉴 아이템 표시용 박스 너비

                        sub_menu_width: 200,            // 서브 메뉴 아이템 표시용 박스 너비
                        sub_menu_arr: []                // 서브 메뉴 아이템 정보를 저장할 배열
                    }
                    */
                    /*
                    // 사용자 정의 메뉴 시작
                    { id: 'custom_menu_0', icon: 'move', label: '메뉴 0', callback: '' },
                    { id: 'custom_menu_1', icon: 'move', label: '메뉴 1', sub_menu_width: 110, sub_menu_arr: [
                        { id: 'custom_menu_1_1',  icon: 'move', label: '메뉴 1_1', callback: '' },
                        { type: 'separator' },
                        { id: 'custom_menu_1_2', icon: 'move', label: '메뉴 1_2', callback: '' },
                        { id: 'custom_menu_1_3', icon: 'move', label: '메뉴 1_3', callback: '' }]},
                    { id: 'custom_menu_2', icon: 'move', label: '메뉴 2', callback: '' },
                    { type: 'separator' },
                    // 사용자 정의 메뉴 끝
                    */

                    { id: 'search', icon: 'search', label: '검색' },
                    { id: 'sort', icon: 'sortmulti', label: '정렬', sub_menu_width: 110, sub_menu_arr: [
                        { id: 'multi_sort', icon: 'sortmulti', label: '다중정렬' },
                        { type: 'separator' },
                        { id: 'sort_up', icon: 'sortup', label: '오름차순정렬' },
                        { id: 'sort_down', icon: 'sortdown', label: '내림차순정렬' }]},
                    { id: 'cell_merge', icon: 'mergeapply', label: '병합' },
                    { id: 'cell_merge_clear', icon: 'mergecancel', label: '병합해제'},
                    { type: 'separator' },
                    { id: 'filter', icon: 'filtermulti', label: '필터', sub_menu_width: 110, sub_menu_arr: [
                        { id: 'multi_filter', icon: 'filtermulti', label: '다중필터' },
                        { type: 'separator' },
                        { id: 'apply_filter', icon: 'filterapply', label: '필터적용' },
                        { id: 'release_filter', icon: 'filtercancel', label: '필터해제'}] },
                    { id: 'fixbar', icon: 'fixbar', label: '고정바', sub_menu_width: 110, sub_menu_arr: [
                        { id: 'fix_bar', icon: 'fixbar', label: '고정바' },
                        { type: 'separator'},
                        { id: 'fix_bar_show', icon: 'fixbarshow', label: '고정바 보기' },
                        { id: 'fix_bar_hide', icon: 'fixbarhide', label: '고정바 숨김' }]},
                    { id: 'copy', icon: 'copy', label: '복사', sub_menu_width: 110, sub_menu_arr: [
                        { id: 'copy_cell', icon: 'copy', label: '셀 복사' },
                        { id: 'cut_cell', icon: 'copy', label: '셀 잘라내기' },
                        { id: 'paste_cell', icon: 'copy', label: '셀 붙여넣기' },
                        { id: 'copy_row', icon: 'copy', label: '행 복사' },
                        { id: 'copy_all', icon: 'copy', label: '전체 복사' }]},
                    { type: 'separator'},
                    { id: 'excel', icon: 'excelload', label: '엑셀', sub_menu_width: 110, sub_menu_arr: [
                        { id: 'excel_load', icon: 'excelload', label: '엑셀 불러오기' },
                        { id: 'excel_save', icon: 'excelsave', label: '엑셀 저장' }]},
                    { id: 'csv', icon: 'csvload', label: 'CSV', sub_menu_width: 110, sub_menu_arr: [
                        { id: 'csv_load', icon: 'csvload', label: 'CSV 불러오기' },
                        { id: 'csv_save', icon: 'csvsave', label: 'CSV 저장' }]},
                    { type: 'separator'},
                    { id: 'close', icon: 'close', label: '취소' }
                ]
            },
            'MENU_ID_1': {
                menu_width: 110,
                menu_arr: []
            },
            'MENU_ID_2': {
                menu_width: 110,
                menu_arr: []
            }
        }
    }, 

    /**
     * Application에서 사용하는 파라미터 정의
     * 업무 화면 스크립트에서 factory.gethtmlparam 함수를 이용해서 값울 구함
     */
    PICKLISTBASEURL_ko: './project/sample/picklist',
    PICKLISTBASEURL_en: './project/sample/picklist_en',

    META_RESOURCE_URL_ko: '',
    META_RESOURCE_URL_en: './project/sample/meta/meta_en.txt',

    /**
     * xFrame5 엔진에서 다국어 처리를 위해 사용될 메타 데이터 URL 정보
     * xFrame5 메인 화면 로딩시 한번만 로딩 처리됨 (HTTP GET 방식 사용)
     * 메타 리소스 파일 데이터 형식 : 메타ID=메타값 (공백 없음)
     * 메타 데이터 라인 구분 : \r\n
     */
    META_RESOURCE_URL: '',
    VALUE_THOUSANDS_SEPARATOR: ',',             // 값 저장 기준 천단위 구분자
    VALUE_DECIMAL_SEPARATOR: '.',               // 값 저장 기준 소수점 구분자

    SCREEN_LANGUAGE: 'ko',                      // 화면 개발 기준 언어
    SCREEN_COUNTRY: 'kr',                       // 화면 개발 기준 국가
    SCREEN_THOUSANDS_SEPARATOR: ',',            // 화면 개발 기준 천단위 구분자
    SCREEN_DECIMAL_SEPARATOR: '.',              // 화면 개발 기준 소수점 구분자
    SCREEN_FONT: ['맑은 고딕',9,0,0,0,0],         // 화면 개발 기준 폰트 정보 (xframe5.css 설정 필요)

    USER_LANGUAGE: 'ko',                        // 사용자 언어('ko'/'en'), 파라미터에 의해서 동적 변경
    USER_COUNTRY: 'kr',                         // 사용자 국가('kr'/'us'), 파라미터에 의해서 동적 변경
    USER_THOUSANDS_SEPARATOR: ',',              // 사용자 언어 기준 천단위 구분자
    USER_DECIMAL_SEPARATOR: '.',                // 사용자 언어 기준 소수점 구분자
    // USER_THOUSANDS_SEPARATOR: '.',           // 사용자 언어 기준 천단위 구분자
    // USER_DECIMAL_SEPARATOR: ',',             // 사용자 언어 기준 천단위 구분자

    HOLIDAY_COLOR: [236,109,97],                // 달력 휴일 색상
    SUNDAY_COLOR: [236,109,97],                 // 달력 일요일 색상
    SATURDAY_COLOR: [104,169,219],              // 달력 토요일 색상
    WEEKDAY_COLOR: [102,102,102],               // 달력 평일 색상

    // 휴일/기념일 정보 오브젝트(휴일/기념일 일자, 휴일/기념일 이름, 공휴일 여부)배열 설정
    HOLIDAY_LIST: [
        { date: '****0101', title: '양력설', is_holiday: true },
        { date: '****0301', title: '3.1절', is_holiday: true },
        { date: '****0505', title: '어린이날', is_holiday: true },
        { date: '****0606', title: '현충일', is_holiday: true },
        { date: '****0815', title: '광복절', is_holiday: true },
        { date: '****1003', title: '개천절', is_holiday: true },
        { date: '****1009', title: '한글날', is_holiday: true },
        { date: '****1225', title: '기독탄신일', is_holiday: true }
    ],

    // 요일, 월 이름 정보 배열 설정
    FIRSTDAY_OF_WEEK: 0,    // 0: sunday, 1:monday
    DAYNAME_OF_WEEK: ['일','월','화','수','목','금','토'],
    FULL_DAYNAME_OF_WEEK: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    MONTHNAME_OF_YEAR: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    FULL_MONTHNAME_OF_YEAR: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	SCHEDULE_DAYNAME_OF_WEEK: ['일[Sun]','월[Mon]','화[Tue]','수[Wed]','목[Thu]','금[Fri]','토[Sat]']

    /*
     // 휴일/기념일 정보 오브젝트(휴일/기념일 일자, 휴일/기념일 이름, 공휴일 여부)배열 설정
     HOLIDAY_LIST: [
     { date: '****0101', title: 'New Year Day', is_holiday: true },
     { date: '****0301', title: 'Independence Movement Day', is_holiday: true },
     { date: '****0505', title: 'Children Day', is_holiday: true },
     { date: '****0606', title: 'Memorial Day', is_holiday: true },
     { date: '****0815', title: 'National Liberation Day', is_holiday: true },
     { date: '****1003', title: 'National Foundation Day', is_holiday: true },
     { date: '****1009', title: 'Hangul Proclamation Day', is_holiday: true },
     { date: '****1225', title: 'Christmas', is_holiday: true }
     ],

     // 요일, 월 이름 정보 배열 설정
     FIRSTDAY_OF_WEEK: 1,    // 0: sunday, 1:monday
     DAYNAME_OF_WEEK: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
     FULL_DAYNAME_OF_WEEK: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
     MONTHNAME_OF_YEAR: ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'],
     FULL_MONTHNAME_OF_YEAR: ['January','February','March','April','May','June','July','August','September','October','November','December']
     */
};

/**
 * 화면을 로드하기 이전에 호출되는 함수로 사이트별로 커스트마이징 대상임
 * @returns {boolean} 화면 로드 진행 여부
 * @private
 */
function _xf_beforeloadscreen() {
    /**
     * 국제화 정보 오브젝트의 언어 값이 화면 개발 기준 언어와 다른 경우,
     * xFrame5 엔진에서 메타 다국어 처리를 위한 리소스 경로(META_RESOURCE_URL)를 설정 하는 것에 대한 예시입니다.
     * _xf_param.META_RESOURCE_URL 값이 공백 문자열인 경우,
     * 엔진에서 리소스를 로딩하여 화면 자동 변환 작업을 하지 않습니다.
     */
    _xf_param.META_RESOURCE_URL = _xf_param['META_RESOURCE_URL' + '_' + _xf_param.USER_LANGUAGE];

    /**
     * 국제화 정보 오브젝트의 언어 값이 화면 개발 기준 언어와 다른 경우,
     * 코드 파일이 언어별로 디렉토리를 구분하여 생성되어 있는 경우
     * 코드 파일을 로딩하기 위한 기본 URL 정보 변경 처리를 수행하는 것에 대한 예시입니다.
     */
    _xf_param.PICKLISTBASEURL = _xf_param['PICKLISTBASEURL' + '_' + _xf_param.USER_LANGUAGE];
}

/**
 * 화면 DOM을 생성하기 이전에 호출되는 함수로 사이트별로 커스트마이징 대상임
 * @param xf_prop 화면 생성 속성 오브젝트
 * @private
 */
function _xf_beforecreatescreen(xf_prop) {
    return;
}

/**
 * 문서가 로딩 완료 이벤트 처리
 */
$(document).ready(function() {
    var screen_load_info, screen_url;
    var _xf_menu_btn = $('#_xf_menu_btn');
    var _xf_loader_box = $('#_xf_loader_box');
    var _xf_console_btn = $('#_xf_console_btn');
    var _xf_load_btn = $('#_xf_load_btn');
    var _xf_screen_url = $('#_xf_screen_url');
    var _xf_screen_url_select = $('#_xf_screen_url_select');
    var _xf_language_select = $('#_xf_language_select');
    var _xf_country_select = $('#_xf_country_select');

    // alert('document ready');

    ////////////////////////////////////////////////////////////////////////////////////
    // index.html 이벤트 처리부
    ////////////////////////////////////////////////////////////////////////////////////

    // 메뉴 버튼 클릭 이벤트 처리
    _xf_menu_btn.on('click', function(event) {
        if(_xf_menu_btn.text() == '>') {
            _xf_menu_btn.text('<');
            _xf_loader_box.animate({width: '100%'}, 200);
            _xf_loader_box.css({ borderRight: '0px none' });
        }
        else {
            _xf_menu_btn.text('>');
            _xf_loader_box.animate({width: '40px'}, 200);
            _xf_loader_box.css({ borderRight: '1px dotted darkgray' });
        }
    });

    // 콘솔 표시 버튼 클릭 이벤트 처리
    _xf_console_btn.on('click', function(event) {
        if(window['factory'] !== undefined) {
            window['factory'].showconsoletrace(true);
        }
    });

    // 화면 로드 버튼 클릭 이벤트 처리
    _xf_load_btn.on('click', function(event) {
        // 화면 URL INPUT에서 화면 URL(예:'/SYS/WinMain')에 해당하는 값을 읽어옴
        // 화면 URL INPUT에 값이 없는 경우, 화면 URL SELECT에서 선택된 값을 사용
        screen_url = _xf_screen_url.val();
        if(screen_url.length == 0) {
            screen_url = _xf_screen_url_select.val();
        }

        // 화면 URL 길이 검증
        if(screen_url.length == 0) {
            alert('screen url length is 0');
            _xf_screen_url.focus();
            return;
        }

        _xf_param.USER_LANGUAGE = _xf_language_select.val();
        _xf_param.USER_COUNTRY = _xf_country_select.val();

        _xf_param.SHOW_CONSOLETRACE = screen_load_info.console;          // 콘솔 미리보기 옵션 체크여부
        _xf_param.CONSOLETRACE_SHOWEVENT = screen_load_info.event;       // 콘솔창 이벤트 표시 여부
        _xf_param.CONSOLETRACE_SHOWEVENTPARAM = screen_load_info.param;  // 콘솔창 파라미터 표시 여부

        _xf_beforeloadscreen();

        _xfl_loadscreen(screen_url, screen_load_info.prototype_mode);
    });

    ////////////////////////////////////////////////////////////////////////////////////
    // index.html 이벤트 처리부 끝
    ////////////////////////////////////////////////////////////////////////////////////

    // xf_lib, xf_lib_grid, xf_lib_ext 오브젝트 Prototype 확장
    _xfl_initlib();

    // URL Search 정보를 이용해서 로딩할 화면 정보 오브젝트를 구함
    screen_load_info = _xfl_getscreenloadinfo();

    // URL Search 정보를 기준으로 언어 SELECT 값 설정
    _xf_language_select.val(screen_load_info.language);
    _xf_country_select.val(screen_load_info.country);

    // 화면 경로가 있는 경우, 화면 경로 INPUT에 값을 설정하고,
    // 화면 로그 박스를 숨기고, 화면 로드 버튼 클릭 이벤트 트리거하여 화면 로드 작업 수행
    if(screen_load_info.screen_url.length > 0) {
        _xf_screen_url.val(screen_load_info.screen_url);
        _xf_loader_box.hide();
        _xf_load_btn.trigger('click');
    }
    else {
        _xf_loader_box.show();
    }
	
    _xfl_sethtmlready(true);	
});
