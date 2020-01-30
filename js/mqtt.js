

function Disconnect() {
      console.log("client is disconnecting..");
      window.client.disconnect();
	  SYS_INIT();
}

// This function is called when the initial connect request is successful.
function onConnectSuccess(resObj) {
	console.log("Initial connect request succeeded.");
	Connect_Status = 1;
}


// This function is called when the intial connect request failed.
function onFailedConnect(err) {
	console.log("Initial connect request failed. Error message : " + err.errorMessage);
	Connect_Status = 2;
}


function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
  SYS_INIT();
}

function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}