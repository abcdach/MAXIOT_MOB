	//$('[data-role="'+is_DataRole+'"]').append('var message = new Paho.MQTT.Message("1");');
	//$('[data-role="'+is_DataRole+'"]').append('message.destinationName = "0";');
	//$('[data-role="'+is_DataRole+'"]').append('client.send(message);');
//https://demos.jquerymobile.com/1.4.5/collapsible/#&ui-state=dialog



//"text","password","button"
function isGUI_Input(is_DataRole,is_ID,is_Type,is_Value) {
	$('[data-role="'+is_DataRole+'"]').append('<input id="'+is_ID+'" type="'+is_Type+'" value="'+is_Value+'"/>'); 	
}


function isGUI_Input_Text(is_ID,is_Value) {return('<input id="'+is_ID+'" type="text" value="'+is_Value+'"/>');}
function isGUI_Input_Password(is_ID,is_Value) {return('<input id="'+is_ID+'" type="password" value="'+is_Value+'"/>');}
function isGUI_Input_Value(is_ID,is_Value){$('#'+is_ID).val(is_Value);}

//##################################
function HTML_Button(is_ID,is_Value) {return('<input id="'+is_ID+'" type="button" value="'+is_Value+'"/>');}
function JAVA_Button_Click(is_ID,is_Script){
	var SCR = ''
	SCR +='\n'+ '	$("#'+is_ID+'").click(function (e){';
	SCR +='\n'+ '		'+is_Script;
	//SCR +='\n'+ '		console.log("Click('+is_ID+') : '+is_Script+'" );';
	SCR +='\n'+ '	});';	
	return SCR;
}
//##################################
function HTML_Slider(is_ID,is_Min, is_Max, is_Step) {
	return('<input name="'+is_ID+'" id="'+is_ID+'" type="range"  min="'+is_Min+'" max="'+is_Max+'" step="'+is_Step+'"  value="'+is_Min+'" />');
}
function JAVA_Slider_Stop(is_ID,is_Script){
	var SCR = ''

	SCR +='\n'+ '	$("#'+is_ID+'").on( \'slidestop\', function( event ){';
	SCR +='\n'+ '		var Value = $("#'+is_ID+'").val();';
	SCR +='\n'+ '		'+is_Script;
	//SCR +='\n'+ '		console.log("Slider_Stop('+is_ID+') : Value = " + Value );';
	//SCR +='\n'+ '		console.log("Slider_Stop('+is_ID+') : '+is_Script+'" );';
	SCR +='\n'+ '	})';
		
	return SCR;	
	
}

//##################################
function isGUI_flip(is_ID,is_Name1,is_Val1,is_Name2,is_Val2){
	return('<select name="'+is_ID+'" id="'+is_ID+'" data-role="slider"><option value="'+is_Val2+'">'+is_Name2+'</option><option value="'+is_Val1+'">'+is_Name1+'</option></select>');
}	
function JAVA_flip_Change(is_ID,is_Script){
	var SCR = ''
	SCR +='\n'+ '	$("#'+is_ID+'").on( \'change\', function( event )';
	SCR +='\n'+ '		{ var Value = $("#'+is_ID+'").val();';
	SCR +='\n'+ '		'+is_Script;
	//SCR +='\n'+ '		console.log("flip_Change('+is_ID+') : Value = " + Value );';
	//SCR +='\n'+ '		console.log("flip_Change('+is_ID+') : '+is_Script+'" );';
	SCR +='\n'+ '	});';

	return SCR;
}

//##################################

function isGUI_Text(is_Value){
	return('<label><br>'+is_Value+'</label>'); 
}
//##################################
function JAVA_Select_Change(is_ID,is_Script){
	var SCR = ''
	SCR +='\n'+ '	$("#'+is_ID+'").change(function(){';
	SCR +='\n'+ '		var Value = $("#'+is_ID+'").val();';
	SCR +='\n'+ '		'+is_Script;
	//SCR +='\n'+ '		console.log("Slider_Change('+is_ID+') : Value = " + Value );';
	//SCR +='\n'+ '		console.log("Slider_Change('+is_ID+') : '+is_Script+'" );';
	SCR +='\n'+ '	});';

	return SCR;
}





//##################################
 

function JAVA_APPEND(is_Page,is_DataRole,is_Script){

	var SCR = '';
	SCR +='\n'+ '<script>';
	SCR +='\n'+ '$(document).on("pageinit","#'+is_Page+'",function(){';
	SCR +='\n'+  '	' + is_Script;
	SCR +='\n'+  '	'
	SCR +='\n'+ '});';
	SCR +='\n'+ '</script>';
	$('[data-role="content_1"]').append(SCR);
	
}






















