	//$('[data-role="'+is_DataRole+'"]').append('var message = new Paho.MQTT.Message("1");');
	//$('[data-role="'+is_DataRole+'"]').append('message.destinationName = "0";');
	//$('[data-role="'+is_DataRole+'"]').append('client.send(message);');
//https://demos.jquerymobile.com/1.4.5/collapsible/#&ui-state=dialog



//"text","password","button"
function isGUI_Input(is_DataRole,is_ID,is_Type,is_Value) {
	$('[data-role="'+is_DataRole+'"]').append('<input id="'+is_ID+'" type="'+is_Type+'" value="'+is_Value+'"/>'); 	
}


function isGUI_Input_Text(is_ID,is_Value) {
	return('<input id="'+is_ID+'" type="text" value="'+is_Value+'"/>'); 	
}
function isGUI_Input_Password(is_ID,is_Value) {
	return('<input id="'+is_ID+'" type="password" value="'+is_Value+'"/>'); 	
}
//##################################


function isGUI_Input_Value(is_ID,is_Value){$('#'+is_ID).val(is_Value)}



function isGUI_Button(is_ID,is_Value) {
	return('<input id="'+is_ID+'" type="button" value="'+is_Value+'"/>');
}
function xxxisGUI_Click(is_Page,is_DataRole,is_ID,is_Value1,is_Value2){
	console.log(is_Value1);	
	$('[data-role="'+is_DataRole+'"]').append('<script> \
		$(document).on("pageinit","#'+is_Page+'",function(){ \
		$("#'+is_ID+'").click(function (e){ \
			e.stopImmediatePropagation(); \
			e.preventDefault(); \
			console.log("'+is_ID+' : Out_'+is_Value1+' = '+is_Value2+'"); \
			});});</script>'
	);
}
function isGUI_Click(is_Page,is_DataRole,is_ID,is_Script){
	$('[data-role="'+is_DataRole+'"]').append('<script> \
		$(document).on("pageinit","#'+is_Page+'",function(){ \
		$("#'+is_ID+'").click(function (e){ \
			e.stopImmediatePropagation(); \
			e.preventDefault(); \
			'+is_Script+'\
			console.log("Click('+is_ID+') : '+is_Script+'" ); \
			});});</script>'
	);
}
//##################################
function isGUI_Slider(is_ID,is_Min, is_Max, is_Step) {
	return('<input name="'+is_ID+'" id="'+is_ID+'" type="range"  min="'+is_Min+'" max="'+is_Max+'" step="'+is_Step+'"  value="'+is_Min+'" />');
}

function isGUI_Slider_Stop(is_Page,is_DataRole,is_ID,is_OutPut){
	$('[data-role="'+is_DataRole+'"]').append('<script> \
		$(document).on("pageinit","#'+is_Page+'",function(){ \
		$("#'+is_ID+'").on( \'slidestop\', function( event ) \
		{ var Value = $("#'+is_ID+'").val(); \
		console.log("'+is_ID+' : Out_'+is_OutPut+' = " + Value ); \
		});});</script>'
	);
}

//##################################
function isGUI_flip(is_ID,is_Name1,is_Val1,is_Name2,is_Val2){
	return('<select name="'+is_ID+'" id="'+is_ID+'" data-role="slider"><option value="'+is_Val2+'">'+is_Name2+'</option><option value="'+is_Val1+'">'+is_Name1+'</option></select>');
}	
function isGUI_flip_Change(is_Page,is_DataRole,is_ID,is_OutPut){
	$('[data-role="'+is_DataRole+'"]').append('<script> \
		$(document).on("pageinit","#'+is_Page+'",function(){ \
		$("#'+is_ID+'").on( \'change\', function( event ) \
		{ var Value = $("#'+is_ID+'").val(); \
		console.log("'+is_ID+' : Out_'+is_OutPut+' = " + Value ); \
		});});</script>'
	);
}
//##################################

function isGUI_Text(is_Value){
	return('<label><br>'+is_Value+'</label>'); 
}
//##################################
function isGUI_Select_Change(is_Page,is_DataRole,is_ID,is_OutPut){
	$('[data-role="'+is_DataRole+'"]').append('<script> \
		$(document).on("pageinit","#'+is_Page+'",function(){ \
		$("#'+is_ID+'").change(function(){\
		var Value = $("#'+is_ID+'").val();\
		console.log("'+is_ID+' : Out_'+is_OutPut+' = " + Value ); \
		});});</script>'
	);	
}
//##################################
 
























