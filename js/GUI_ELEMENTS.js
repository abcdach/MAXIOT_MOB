

function Theme_Change(is_Theme){
	var themeClass = is_Theme;
	$( "#page_1" ).removeClass( "ui-page-theme-a ui-page-theme-b ui-page-theme-c ui-page-theme-d ui-page-theme-e" ).addClass( "ui-page-theme-" + themeClass );
	$( "#ui-body-test" ).removeClass( "ui-body-a ui-body-b ui-body-c ui-body-d ui-body-e" ).addClass( "ui-body-" + themeClass );
	$( "#ui-bar-test, #ui-bar-form" ).removeClass( "ui-bar-a ui-bar-b ui-bar-c ui-bar-d ui-bar-e" ).addClass( "ui-bar-" + themeClass );
	$( ".ui-collapsible-content" ).removeClass( "ui-body-a ui-body-b ui-body-c ui-body-d ui-body-e" ).addClass( "ui-body-" + themeClass );
	$( ".theme" ).text( themeClass );
};

function Panel_Open(is_Value){
	$( "#"+is_Value ).panel( "open" );
}
function Put_Header(is_Page,is_Text){
	$("#page_"+is_Page+" h3 #MyHeader_Text").text(is_Text);
}

//##################################
function HTML_Input_Text(is_ID,is_Value) {
	return('<input id="'+is_ID+'" type="text" value="'+is_Value+'"/>');
}
function HTML_Input_Password(is_ID,is_Value) {
	return('<input id="'+is_ID+'" type="password" value="'+is_Value+'"/>');
}
function Put_Input(is_ID,is_Value){ $('#'+is_ID).val(is_Value);}
function Get_Input(is_ID){ return $('#'+is_ID).val();}
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
function Put_Slider(is_ID,is_Value){ $('#'+is_ID).val(is_Value).slider("refresh");}
function Get_Slider(is_ID){ return $('#'+is_ID).val();}
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
 function JAVA_Radio_Change(is_ID,is_Script){
	var SCR = ''
	SCR +='\n'+ '	$( "#'+is_ID+' input" ).on( "change", function( event ) {';
	SCR +='\n'+ '		var Value = $( "#'+is_ID+' input:checked" ).attr( "value" );';
	SCR +='\n'+ '		'+is_Script;
	SCR +='\n'+ '		console.log("Slider_Change('+is_ID+') : Value = " + Value );';
	SCR +='\n'+ '		console.log("Slider_Change('+is_ID+') : '+is_Script+'" );';
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






















