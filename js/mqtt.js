

//#####################################################################

function SYS_LOOP_START(){
	SYS_STEP = 0; setTimeout(SYS_LOOP, 1);
}

var SYS_STEP = 0;
function SYS_LOOP() {
    switch (SYS_STEP) {
    case 0:
		console.log("SYS_LOOP:0");
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
		//console.log(Script_Data);
		GUI_Processor(Script_Data);
		SYS_STEP = 5; setTimeout(SYS_LOOP, 500);		
		break;
    case 5:
		console.log("SYS_LOOP:5");
		SYS_STEP = 5; setTimeout(SYS_LOOP, 500);	
		break;
    default:
        break;
    }
}

//#####################################################################
var client;
var Connect_Status = 0;
var Script_Data = '';

function MQTT_Connect(){
	console.log("MQTT_Connect");
	//client = new Paho.MQTT.Client("68.183.111.57", Number("3004"), "1999@JQ_Test");
	client = new Paho.MQTT.Client("ismaxioth6", Number("4004"), "1999@JQ_Test");
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
function onMessageArrived(message) {
  Script_Data = message.payloadString;
  SYS_STEP ++;
  console.log("onMessageArrived:"+Script_Data);
  console.log("onMessageArrived:"+message.destinationName);
  console.log("onMessageArrived:"+message.topic);
  console.log("onMessageArrived:"+message.qos);
  console.log("onMessageArrived:"+message.retained);
  console.log("onMessageArrived:"+message.duplicate);
}
//#####################################################################
function Out_0(data){
	console.log(data +" ->> Out_0");
	message = new Paho.MQTT.Message(data);
	message.destinationName = "0/0";
	client.send(message);
}
//#####################################################################




