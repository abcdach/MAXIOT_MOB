/** 
put_input_text 
get_input_text 
put_input_Password  
get_input_Password
Put_Header_Text
Panel_Open
Theme_Change 
Dispatch_Event
Element_Hide
Element_Show
Page_change
Popup_Open
Loader_Show 
Loader_Hide
Write_Memory
Read_Memory
Delete_Memory
Clear_All_Memory
**/

/**
put_input_text('ID','text');
get_input_text('ID');
put_input_Password('ID','text');
get_input_Password('ID');
**/

//-  Create_Page('text')			// Create_Page('MyPage')
//-  Put_Header_Text(1,'text')		// Put_Header_Text(is_Page,is_Text)
//-  Put_Slider('ID','text');		// slider
//-  Get_Slider('ID');				// slider
//-  Panel_Open('ID');				// ->[p](ID)\
//-  Theme_Change('Theme');			// Theme = a, b, c, d, e

//-  Element_Hide('ID');			// 
//-  Element_Show('ID');			// 
//-  Page_change('page_3');			//
//-  Popup_Open('ID');				//"none","pop","fade","flip","turn","flow","slide","slide","slidefade","slidefade","slideup","slidedown"
//-  Loader_Show('Connecting');
//-  Loader_Hide();

//- console.log(text);

//- Write_Memory(memory_name, data); 	// Write_Memory('myCat', 'Tom');
//- Read_Memory(memory_name);			// Read_Memory('myCat');
//- Delete_Memory(memory_name);			// Delete_Memory('myCat');
//- Clear_All_Memory();					// Clear_All_Memory();


	//$('#item3').remove();
	//$('#page1').page();
	//$.mobile.changePage( url, { transition: "slideup" });
	//$('#'+is_ID).animate({left: '250px'});




//##################################
function Write_Memory(is_Name, is_Data){localStorage.setItem(is_Name,is_Data);}
function Read_Memory(is_Name){return localStorage.getItem(is_Name);}
function Delete_Memory(is_Name){localStorage.removeItem(is_Name);}
function Clear_All_Memory(){localStorage.clear();}
//##################################
function Dispatch_Event(is_Name, is_Data){document.body.dispatchEvent(new CustomEvent(is_Name, { detail: {data: is_Data} }));}
//##################################
function Loader_Hide()       {$.mobile.loading( "hide" );}
function Loader_Show(is_Text){$.mobile.loading( 'show', {text: is_Text,textVisible: true,theme: 'b',html: ""});}
//##################################
function Popup_Open(is_ID) {$('#'+is_ID).popup("open",{ transition: "pop" });}
//##################################	
function Element_Hide(is_ID) {$('#'+is_ID).hide();}
function Element_Show(is_ID) {$('#'+is_ID).show();}
//##################################
function put_input_text(is_ID,is_Value)     {$('#'+is_ID).val(is_Value);}
function put_input_Password(is_ID,is_Value) {$('#'+is_ID).val(is_Value);}
function Put_Header_Text(is_Page,is_Text)   {$("#page_"+is_Page+" h1 #MyHeader_Text_"+is_Page).text(is_Text);}

function get_input_text(is_ID){ return $('#'+is_ID).val();}
function get_input_Password(is_ID){ return $('#'+is_ID).val();}
//##################################
function Page_change(is_Value){$.mobile.changePage("#page_"+is_Value);}
function Panel_Open(is_Value){$( "#"+is_Value ).panel( "open" );}


function Theme_Change(is_Theme){
	var themeClass = is_Theme;
	$( "#page_1" ).removeClass( "ui-page-theme-a ui-page-theme-b ui-page-theme-c ui-page-theme-d ui-page-theme-e" ).addClass( "ui-page-theme-" + themeClass );
	$( "#ui-body-test" ).removeClass( "ui-body-a ui-body-b ui-body-c ui-body-d ui-body-e" ).addClass( "ui-body-" + themeClass );
	$( "#ui-bar-test, #ui-bar-form" ).removeClass( "ui-bar-a ui-bar-b ui-bar-c ui-bar-d ui-bar-e" ).addClass( "ui-bar-" + themeClass );
	$( ".ui-collapsible-content" ).removeClass( "ui-body-a ui-body-b ui-body-c ui-body-d ui-body-e" ).addClass( "ui-body-" + themeClass );
	$( ".theme" ).text( themeClass );
};


function Create_Page(PageName){
	
	var SCR = '';
	SCR +='\n'+ '<div data-role="page" id="page_'+PageName+'" data-url="page_'+PageName+'">';
	SCR +='\n'+ '	<div data-role="header" id="header_'+PageName+'">';
	SCR +='\n'+ '		<h1><span id="MyHeader_Text_'+PageName+'"></span></h1>';
	SCR +='\n'+ '		<div data-role="navbar">';
	SCR +='\n'+ '			<div data-role="navbar_'+PageName+'"></div>';
	SCR +='\n'+ '		</div>	';
	SCR +='\n'+ '	</div><!-- /header -->';
	SCR +='\n'+ '	<div data-role="content_'+PageName+'" class="ui-content" role="main"></div>	';
	SCR +='\n'+ '	<div data-role="panel_'+PageName+'"></div>';
	SCR +='\n'+ '	<div data-role="footer" data-position="fixed" data-theme="a">';
	SCR +='\n'+ '		<h1> </h1>';
	SCR +='\n'+ '	</div><!-- /footer -->';
	SCR +='\n'+ '</div>';
	SCR +='\n'+ '<!-- ####################################################################################### -->';

	$('[data-role="IS_HTML_BODY"]').append(SCR);		
}




function Create_XXX(){
	var SCR = '';
	SCR +='\n'+ '<link rel="stylesheet" href="../codemirror/lib/codemirror.css">';
	SCR +='\n'+ '<script src="../codemirror/lib/codemirror.js"></script>';
	SCR +='\n'+ '<script src="../codemirror/addon/mode/simple.js"></script>';
	SCR +='\n'+ '<script src="../codemirror/addon/display/autorefresh.js"></script>';
	SCR +='\n'+ '<link rel="stylesheet" href="../codemirror/theme/001.css">';
	
	SCR +='\n'+ '<script id="modecode" src="../codemirror/theme/001.js"></script>';
	
	
	//SCR +='\n'+ '<script id="modecode">';
	//SCR +='\n'+ 'CodeMirror.defineSimpleMode("simplemode",{';
	//SCR +='\n'+ '  start: [';
	//SCR +='\n'+ '	{regex: /((--\s*\w+\s*(,|\((\s*\w+\s*)|\s*\(\s*)\)?)|(--\s*(.+)))/,token: "islist"},';
	//SCR +='\n'+ '	{regex: /([.]{2}[a-z_]+\s*,)/,token: "keyword"},';
	//SCR +='\n'+ '	{regex: /([.]{2}\[[a-z_].*?\])/,token: "conteiner"},//[w]';
	//SCR +='\n'+ `	{regex: /(\.\.{|\.\.})/,token: "conteiner"},// {}`;
	//SCR +='\n'+ '	{regex: /(<.*>)|\*JavaScript\*/,token: "ishtml"},//	';
	//SCR +='\n'+ '	{regex: /(\(.*?\))/,token: "inn"},//';
	//SCR +='\n'+ '	{regex: /alert|Panel_Open/, token: "java"},';
		
	//SCR +='\n'+ '	{regex: /(\.\.button|\.\.input_text|\.\.##|\.\.checkbox|\.\.radio)/,token: "keyword"},';
	//SCR +='\n'+ '	{regex: /(\.\.select|\.\.slider)|\.\.flip|\.\.listview|\.\.label|\.\.info/,token: "keyword"},';
		
	
	//SCR +='\n'+ '	{regex: /alert|Panel_Open|put_input_text/, token: "java"},';
		
	//SCR +='\n'+ '  ],';
	//SCR +='\n'+ '});';
	//SCR +='\n'+ '</script>';

	
	$('[data-role="IS_HEAD"]').append(SCR);
}














function do_Replace(isText,FromText, ToText){
	for (i = 0; i < 1000; i++) {
		if(isText.indexOf(FromText) === -1)break;
		//console.log("gggggggggggggg "+doo);
		isText = isText.replace(FromText,ToText);
	}
	return isText;
}






//##################################


function Put_Slider(is_ID,is_Value){ $('#'+is_ID).val(is_Value).slider("refresh");}
function Get_Slider(is_ID){ return $('#'+is_ID).val();}
//##################################

//##################################
//##################################
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
function HTML_APPEND(is_Page,is_Html){
	$('[data-role="'+is_Page+'"]').append(is_Html);
}


//##################################



//$("#Password_Button").button('enable');















