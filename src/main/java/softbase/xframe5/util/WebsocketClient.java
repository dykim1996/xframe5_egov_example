package softbase.xframe5.util;

import java.net.URI;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.drafts.Draft_17;
import org.java_websocket.handshake.ServerHandshake;

public class WebsocketClient {

	public void connect(String wsUri, final String strParam) throws Exception {
		System.out.println("wsUri : " + wsUri);
		WebSocketClient webSocketClient = new WebSocketClient(new URI(wsUri), new Draft_17()) {

		    @Override
		    public void onOpen(ServerHandshake serverHandshake) {
		        // WebSocket 서버 연결 후 동작 정의, 아래는 Hello 메시지 발송
		    	System.out.println("OPEN ");
		    	System.out.println("strParam : " + strParam);
		        this.send(strParam);
		    }

		    @Override
		    public void onMessage(String message) {
		        // WebSocket 서버에서 메시지 수신시 동작 정의, 아래는 Hello 메시지 수신시 연결 종료
		        if (message.equals("Hello")) {
		            this.close();
		        }
		    }

		    @Override
		    public void onClose(int code, String reason, boolean remote) {
		        // 서버 연결 종료 후 동작 정의
		    }

		    @Override
		    public void onError(Exception ex) {
		        // 예외 발생시 동작 정의
		    }

		};
		
		// 앞서 정의한 WebSocket 서버에 연결한다.
		webSocketClient.connect();
		
	}
	
}
