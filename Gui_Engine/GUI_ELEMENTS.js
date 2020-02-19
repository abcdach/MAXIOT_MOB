/** 
put_input_text get_input_text put_input_Password  get_input_Password
Put_Header Panel_Open Theme_Change Dispatch_Event
Element_Hide Element_Show Page_change Popup_Open
Loader_Show Loader_Hide
**/

/**
put_input_text('ID','text');
get_input_text('ID');
put_input_Password('ID','text');
get_input_Password('ID');
**/


//-  Put_Slider('ID','text');		// slider
//-  Get_Slider('ID');				// slider
//-  Put_Header(1,'text')			// Put_Header(is_Page,is_Text)
//-  Panel_Open('ID');				// ->[p](ID)\
//-  Theme_Change('Theme');			// Theme = a, b, c, d, e
//-  Dispatch_Event('Name','Data'); // event,In_0,Out_0(Value);
//-  Element_Hide('ID');				// 
//-  Element_Show('ID');				// 
//-  Page_change('page_3');
//-  Popup_Open('ID');				//"none","pop","fade","flip","turn","flow","slide","slide","slidefade","slidefade","slideup","slidedown"
//-  Loader_Show('Connecting');
//-  Loader_Hide();





//JAVA_Add_Event_Listener(is_Name,is_Script)




	//$('#item3').remove();
	//$('#page1').page();
	//$.mobile.changePage( url, { transition: "slideup" });
	//$('#'+is_ID).animate({left: '250px'});
	
	
function Dispatch_Event(is_Name, is_Data){
	document.body.dispatchEvent(new CustomEvent(is_Name, { detail: {data: is_Data} }));
}




function Loader_Hide() {
	$.mobile.loading( "hide" );
}
function Loader_Show(is_Text) {
	$.mobile.loading( 'show', {
		text: is_Text,
		textVisible: true,
		theme: 'b',
		html: ""
	});
}
	
function Popup_Open(is_ID) {
        $('#'+is_ID).popup("open",{ transition: "pop" }); 
        //setTimeout(function(){  $("#p").popup("close"); }, 5000);
}
	
function Element_Hide(is_ID) {
	$('#'+is_ID).hide();
}
function Element_Show(is_ID) {
	$('#'+is_ID).show();
}
//##################################
function HTML_Input_Text(is_ID,is_Value) {
	return('<input id="'+is_ID+'" type="text" value="'+is_Value+'"/>');
}
function HTML_Input_Password(is_ID,is_Value) {
	return('<input id="'+is_ID+'" type="password" value="'+is_Value+'"/>');
}
function put_input_text(is_ID,is_Value){ $('#'+is_ID).val(is_Value);}
function get_input_text(is_ID){ return $('#'+is_ID).val();}
function put_input_Password(is_ID,is_Value){ $('#'+is_ID).val(is_Value);}
function get_input_Password(is_ID){ return $('#'+is_ID).val();}
//##################################

function JAVA_Button_Click(is_ID,is_Script){
	var SCR = ''
	SCR +='\n'+ '	$("#'+is_ID+'").click(function (e){';
	SCR +='\n'+ '		'+is_Script;
	//SCR +='\n'+ '		console.log("Click('+is_ID+') : '+is_Script+'" );';
	SCR +='\n'+ '	});';	
	return SCR;
}
//##################################


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
	//SCR +='\n'+ '		console.log("Slider_Change('+is_ID+') : Value = " + Value );';
	//SCR +='\n'+ '		console.log("Slider_Change('+is_ID+') : '+is_Script+'" );';
	SCR +='\n'+ '	});';

	return SCR;
}
//##################################
 function JAVA_Add_Event_Listener(is_Name,is_Script){
	var SCR = ''
	SCR +='\n'+ '	document.body.addEventListener("'+is_Name+'", function(event) {';
	SCR +='\n'+ '		var Value = event.detail.data;';
	SCR +='\n'+ '		'+is_Script;
	//SCR +='\n'+ '		console.log("Slider_Change('+is_ID+') : Value = " + Value );';
	//SCR +='\n'+ '		console.log("Slider_Change('+is_ID+') : '+is_Script+'" );';
	SCR +='\n'+ '	});';

	return SCR;
}
  //document.body.addEventListener("In_0", function(event) {
	//var Value = event.detail.data;
	//console.log("Event is called: 222 " + event.detail.data);
  //});
//################################## 
function JAVA_APPEND(is_Page,is_Script){
	var SCR = '';
	SCR +='\n'+ '<script>';
	SCR +='\n'+ '$(document).on("pageinit","#'+is_Page+'",function(){';
	SCR +='\n'+  '	' + is_Script;
	SCR +='\n'+  '	'
	SCR +='\n'+ '});';
	SCR +='\n'+ '</script>';
	$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);
}
//##################################



//$("#Password_Button").button('enable');

function Page_change(is_Value){
	$.mobile.changePage("#"+is_Value);
}

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
	$("#page_"+is_Page+" h1 #MyHeader_Text_"+is_Page).text(is_Text);
}













