



var client;
var Connect_Status = 0;

function MQTT_Connect() {
	console.log("MQTT_Connect");
	//client = new Paho.MQTT.Client("68.183.111.57", Number("3004"), "1990@JQ_Test");
	client = new Paho.MQTT.Client("ismaxioth6", Number("4004"), "1990@JQ_Test");
	client.onConnectionLost = onConnectionLost;
	client.onMessageArrived = onMessageArrived;


	client.connect(
		{
			cleanSession : false, 
			onSuccess : onSuccess, 
			onFailure : onFailure, 
			//keepAliveInterval: 30, 
			//reconnect : true,         // Enable automatic reconnect
			//reconnectInterval: 10     // Reconnect attempt interval : 10 seconds
	   }
	);	
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
  console.log("onMessageArrived:"+message.payloadString);
  console.log("onMessageArrived:"+message.destinationName);
  console.log("onMessageArrived:"+message.topic);
}

