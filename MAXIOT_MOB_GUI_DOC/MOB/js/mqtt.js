
var client;
var Connect_Status = 0;

var MQTT_HOST = "";
var MQTT_PORT = "";
var MQTT_DEV_ID = "";
var MQTT_DEV_Name = "";

//#####################################################################

function SYS_LOOP_START(){
	SYS_STEP = 0; setTimeout(SYS_LOOP, 1);
}

var SYS_STEP = 0;
function SYS_LOOP() {
    switch (SYS_STEP) {
    case 0:
		console.log("SYS_LOOP:0");Loader_Show('Connecting');
		//Connect_Status = 0;
		MQTT_Connect();
		SYS_STEP = 1; setTimeout(SYS_LOOP, 1);
        break;
    case 1:
		console.log("SYS_LOOP:1");
		SYS_STEP = 1; setTimeout(SYS_LOOP, 500);		
        break;									
    case 2:
		console.log("SYS_LOOP:2");
		client.subscribe("99");
		SYS_STEP = 3; setTimeout(SYS_LOOP, 1);
		break;		
    case 3:
		console.log("SYS_LOOP:3");
		SYS_STEP = 3; setTimeout(SYS_LOOP, 500);	
		break;
    case 4:
		console.log("SYS_LOOP:4");
		client.subscribe("0");
		SYS_STEP = 5; setTimeout(SYS_LOOP, 500);		
		break;
    case 5:
		console.log("SYS_LOOP:5");
		client.subscribe("1");
		SYS_STEP = 5; setTimeout(SYS_LOOP, 500);		
		break;		
    case 6:
		console.log("SYS_LOOP:6");
		client.subscribe("2");
		SYS_STEP = 5; setTimeout(SYS_LOOP, 500);		
		break;		
    case 7:
		console.log("SYS_LOOP:7");
		client.subscribe("3");
		SYS_STEP = 8; setTimeout(SYS_LOOP, 500);		
		break;		
		
		
    case 8:
		console.log("SYS_LOOP:8");Loader_Hide();
		//SYS_STEP = 5; setTimeout(SYS_LOOP, 500);	
		break;
    default:
        break;
    }
}

//#####################################################################


function MQTT_Connect(){
	console.log("MQTT_Connect");
	
	client = new Paho.MQTT.Client(MQTT_HOST, Number(MQTT_PORT), MQTT_DEV_ID+"@"+MQTT_DEV_Name);
	client.onConnectionLost = onConnectionLost;
	client.onMessageArrived = onMessageArrived;
	client.connect({
		cleanSession : false, 
		onSuccess : onSuccess, 
		onFailure : onFailure, 
		//keepAliveInterval: 30, 
		//reconnect : true,         // Enable automatic reconnect
		//reconnectInterval: 10     // Reconnect attempt interval : 10 seconds
	});	
}
function onConnectionLost(responseObject) {
  Connect_Status = 0;
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}
function onSuccess(resObj) {
	console.log("onSuccess");
	SYS_STEP ++;
}
function onFailure(err) {
	console.log("onFailure : " + err.errorMessage);
}
  
  //let event = new Event("hello", {bubbles: true}); // (2)
  
function onMessageArrived(message) {
	var isData  = message.payloadString;
	var isTopic = message.topic;
	
	console.log('Topic(' +isTopic+ ') = ' + isData);  
	

		switch(isTopic) {
		
			case '99':
				console.log(isData);
				GUI_Processor(isData);
				Page_change("3");
				Connect_Status = 1;
				SYS_STEP ++;
				break;
			
			case '0':
				Dispatch_Event("In_0",isData);
				break;
			case '1':
				Dispatch_Event("In_1",isData);	
				break;
			case '2':
				Dispatch_Event("In_2",isData);	
				break;
			case '3':
				Dispatch_Event("In_3",isData);	
				break;
				
			default:
				break;
		}
		

}

//#####################################################################
function Out_0(data){
	console.log(data +" ->> Out_0");
	message = new Paho.MQTT.Message(data);
	message.destinationName = "0/0";
	client.send(message);
}
function Out_1(data){
	console.log(data +" ->> Out_1");
	message = new Paho.MQTT.Message(data);
	message.destinationName = "1/1";
	client.send(message);
}
//#####################################################################






