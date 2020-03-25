/**
..iframe ..button ..info ..input_password
..##  ..label ..input_text  ..header ..navbar 
..select ..info ..input_password ..slider ..flip 
..radio ..checkbox ..header ..label ..JustGage ..Dygraph
..header_button
..js
..javascript
..js_pbc
..js_pagebeforecreate
..javascript_pagebeforecreate
..js_pc
..js_pagecreate
..javascript_pagecreate
..js_pi
..js_pageinit
..javascript_pageinit
**/
/**
..[c] ..[p] ..[w] ..[d]  ..[t] ..[pop]
p[Lim-1] = p[Lim-1].replace("<ad1899345>","..");
**/



//-------------------------------------------				//
//..header_text, text										//
//..header_button, text, ui-..., *JavaScript*				//..header_button,name, ui-btn ui-btn-icon-notext ui-corner-all ui-icon-delete, Page_change('page_1');
//..navbar,--name1(page num)--name2(page num)				//..navbar,--page_1(1)--page_2(2)--page_3(3)
//-------------------------------------------				//
//..button(ID),name,*JavaScript*							//..button(ID),name,Out_0("1");
//..checkbox(ID),v,--name1(val1)--name2(val2), *JavaScript*(Value);  		//..checkbox,v, .. checkbox,h,
//..radio(ID),v,--name1(val1)--name2(val2)), *JavaScript*(Value);	//..radio,v, .. radio,h,
//..select(ID),--name1(1)--name2(2), *JavaScript*(Value);			//
//..slider(ID),0,150,10, *JavaScript*(Value);						//..slider(ID),MIN,MAX,STEP,{{Java content}};
//..flip(ID),on(1),off(0), *JavaScript*(Value);				//
//..input_password(ID),text									//
//..input_text(ID),text										//
//..textarea(ID),text										//
//..label(ID),text											//
//..info(ID),1/2/3,text										//
//-------------------------------------------				//

//..[style],parameters  ..{ GUI Content ..}					//..[style],width:400px;..{ GUI Content ..}	

//..##,2 ..##,3 ..##,4 ..##,5								// grid
//..create_page,Page name									// ..create_page,MyPage
//..[w],1     ..{ GUI Content ..}							//
//..[page],1  ..{ GUI Content ..}							//

//..[c],name  ..{ GUI Content ..}							// collapsible
//..[p](PAN1) ..{ GUI Content ..}							//
//..[pop](POP1_2),10px 20px ..{ GUI Content ..}				//
//-------------------------------------------				//panel start java[ Panel_Open("ID"); ]											//panel stop
//..[t](ID),v,--name2(ID_1)--name3(ID_2)
//..{ 														//
//..  [d](ID_1)..{ GUI Content ..}							//
//..  [d](ID_2)..{ GUI Content ..}							//
//..}														//
//-------------------------------------------				//
//..if_event, event_name, *JavaScript*(Value)				//..event,In_0,Out_0(Value);	Dispatch_Event("In_0",isData);
//-------------------------------------------				//
//..js,*JavaScript*
//..javascript
//
//..js_pbc,*JavaScript*
//..js_pagebeforecreate,*JavaScript*
//..javascript_pagebeforecreate,*JavaScript*
//
//..js_pc,*JavaScript*
//..js_pagecreate,*JavaScript*
//..javascript_pagecreate,*JavaScript*
//
//..js_pi,*JavaScript*
//..js_pageinit,*JavaScript*
//..javascript_pageinit,*JavaScript*
//-------------------------------------------				//

var isID_Counter = 0;



var Mark_Pointer   = 0 ;
var Mark_Steck     = ['','','','','','','','','','','','','','','','','','',''];
var Mark_Data      = ['','','','','','','','','','','','','','','','','','',''];
function Save_to_Buffer (is_Value)
{
	Mark_Data[Mark_Pointer] += is_Value;
	//console.log("Mark_Data : "+Mark_Data);
}
function Save_to_Buffer_and_shift (is_Value)
{
	Mark_Data[Mark_Pointer+1] += is_Value;
	Mark_Data[Mark_Pointer]   += Mark_Data[Mark_Pointer+1]; 
	Mark_Data[Mark_Pointer+1]  = "";
	//console.log("Mark_Data : "+Mark_Data);
}

function GUI_Processor(isDATA){
	
	var Current_Mark   = '';

	var Tmp_JAVA       = '';
	var isHTML_PANEL   = '';
	var isHTML_CONTENT = '';
	var isHTML_NAVBAR  = '';
	var isCSS  = '';
	var isHTML = '';
	var isJAVA = '';
	var isPage = '';
	var grid_start = 0;
	var grid_num   = 0;
	var grid_cou   = 0;
	var grid_add   = 0;
	var collapsible_status = 0;
	var panel_status = 0;
	var i,b; 
	var select = ""; var select_id = ""
	var p=['','','','','','','','','','','','','','','','','','',''];
	var isPARA=['','','','','','','','','','','','','','','','','','',''];
	var isPAYLOAD = "";
	//var Append_Status = 0;
	//var Append_Data = 0;
	var Append_Plase = "";
	
	var Conf  = isDATA;
//####################################################################################
	//\\.. simbolos shenacvleba <ad1899345>
	for (i = 0; i < 1000; i++) {
		var doo = Conf.indexOf("\\..");
		if(doo === -1)break;
		console.log("#### \\\\.. "+doo);
		Conf = Conf.replace("\\..","<ad1899345>");
	}
//####################################################################################
	Conf = Conf.split('..');
//####################################################################################	
	var Conf_Len = Conf.length;
	for (i = 0; i < Conf_Len; i++) {
		Conf[i] = Conf[i].trim();
		//Conf[i] = Conf[i].replace(/(")/gm, "'");
	}
//####################################################################################	
	for (i = 0; i < Conf_Len; i++) {
//####################################################################################			
		var Conf_Spl = Conf[i].split(',');
		var Conf_Spl_Len = Conf_Spl.length;
//####################################################################################				
		// ID nomeris amogeba
		var isID  = "E"+isID_Counter; isID_Counter++;
		var isCMD = Conf_Spl[0].trim();
		var isTemp2 = isCMD.split('(');
		if(isTemp2.length > 1){
			var isTemp4 = isTemp2[1].split(')');
			isID  = isTemp4[0].trim();
			isCMD = isTemp2[0].trim();
			isCMD = isCMD.replace(/(\r\n|\n|\r)/gm, "");
			isCMD = isCMD.trim();
		}	
//####################################################################################		
		var p_NUM = 0;  // parametebis raodenoba
		switch(isCMD) {

			case "[page]":			p_NUM = 1; break;
			case "[w]":				p_NUM = 1; break;
			case "##":				p_NUM = 1; break;
			/////////////////////////////////////////
			case "header_text":		p_NUM = 1; break;
			case "header_button":	p_NUM = 3; break;
			/////////////////////////////////////////
			case "create_page":		p_NUM = 1; break;
			/////////////////////////////////////////
			case "flip": 			p_NUM = 3; break;//+
			case "label":			p_NUM = 1; break;//+
			case "info":			p_NUM = 3; break;//+
			case "button":			p_NUM = 2; break;//+
			case "slider":			p_NUM = 4; break;//+
			case "input_text":		p_NUM = 1; break;
			case "input_password":	p_NUM = 1; break;
			case "textarea":		p_NUM = 1; break;
			case "checkbox":		p_NUM = 3; break;//+
			case "radio":			p_NUM = 3; break;//+
			case "select":			p_NUM = 2; break;//+
			case "listview":		p_NUM = 2; break;//+
			/////////////////////////////////////////
			case "[Append]":						p_NUM = 1; break;
			case "html_body":						p_NUM = 1; break;
			case "html_head":						p_NUM = 1; break;
			
			case "css":								p_NUM = 1; break;
			case "js":								p_NUM = 1; break;
			/////////////////////////////////////////
			case "javascript":						p_NUM = 1; break;
			case "js_pbc":							p_NUM = 1; break;
			case "js_pagebeforecreate":				p_NUM = 1; break;
			case "javascript_pagebeforecreate":		p_NUM = 1; break;
			case "js_pc":							p_NUM = 1; break;	
			case "js_pagecreate":					p_NUM = 1; break;	
			case "javascript_pagecreate":			p_NUM = 1; break;		
			case "js_pi":							p_NUM = 1; break;	
			case "js_pageinit":						p_NUM = 1; break;	
			case "javascript_pageinit":				p_NUM = 1; break;
			/////////////////////////////////////////
			case "codemirror": 		p_NUM = 1; break;
			case "codemirror_text": p_NUM = 2; break;
			/////////////////////////////////////////
			case "sidebar": 		p_NUM = 1; break;
			case "[div]": 			p_NUM = 1; break;
			case "[section]": 		p_NUM = 0; break;
			case "nav_obj": 		p_NUM = 2; break;
			case "[nav_objs]": 		p_NUM = 1; break;
			case "[navbar]": 		p_NUM = 2; break;
			/////////////////////////////////////////
			case "click":				p_NUM = 2; break;
			case "html":				p_NUM = 1; break;
			/////////////////////////////////////////
			case "[tab]":				p_NUM = 1; break;
			case "[ac]":				p_NUM = 1; break;
			/////////////////////////////////////////
		}		
		
		isPAYLOAD = "";
		isPARA=['','','','','','','','','','','','','','','','','','',''];
		for (ix = 1; ix < Conf_Spl_Len; ix++) {
			var id = Conf_Spl[ix]
			if(ix < p_NUM){
				isPARA[ix] = id.trim();
			}
			else
			{
				if(isPAYLOAD.length === 0){
					isPAYLOAD = isPAYLOAD + id;
				}else{
					isPAYLOAD = isPAYLOAD +","+ id;
				}
				
			}	
		}
		console.log("#############################");
		if(p_NUM !== 0){	
			for (ix = 1; ix < p_NUM; ix++){			
				isPARA[ix] = do_Replace(isPARA[ix],"<ad1899345>","..")
				console.log("isPARA   : " + isPARA[ix]);
			}
		}		
		if(isPAYLOAD.length !== 0){
			isPAYLOAD = do_Replace(isPAYLOAD,"<ad1899345>","..")
			console.log("isPAYLOAD: " + isPAYLOAD);
		}		
		console.log("#############################");
//####################################################################################
		if(isCMD === "{"){
			if(Current_Mark === 'w')Mark_Pointer = 0;
			Mark_Steck[Mark_Pointer] = Current_Mark;
			Mark_Pointer ++;
			Mark_Data[Mark_Pointer] = "";
			console.log("********   Mark_Steck : "+Mark_Steck);			
		}
		if(isCMD === "}"){
			if(Mark_Pointer > 0){
				Mark_Pointer --;
				Current_Mark = Mark_Steck[Mark_Pointer];
				switch(Current_Mark){
					//case "w": isCMD = "<-[w]"; break;
					//case "c": isCMD = "<-[c]"; break;
					//case "p": isCMD = "<-[p]"; break;
					//case "t": isCMD = "<-[t]"; break;
					
					
					case "navbar": 		isCMD = "<-[navbar]"; break;
					case "nav_objs": 	isCMD = "<-[nav_objs]"; break;
					case "section": 	isCMD = "<-[section]"; break; // vebgverdistvis
					case "div": 		isCMD = "<-[div]"; break;
					case "append": 		isCMD = "<-[append]"; break; // append
					case "tab":    		isCMD = "<-[tab]"; break;
					case "t":      		isCMD = "<-[t]"; break;
					case "accordion":   isCMD = "<-[accordion]"; break;
					case "ac":      	isCMD = "<-[ac]"; break;
					default: break;
				}
			}			
		}
		
//####################################################################################




//####################################################################################
//##	isPAYLOAD
//##	isPARA
//####################################################################################

		switch(isCMD) {
			//##################################################
			case "css":
				isCSS  ='\n'+ '<style>';
				isCSS += isPAYLOAD;
				isCSS +='\n'+ '</style>';
				append ('[data-role="IS_CSS"]', isCSS);
				break;	
				
			//##################################################
			case "html":console.log("html");
				Save_to_Buffer(isPAYLOAD);
				break;
				
			//##################################################
			case "click":
				isJAVA  ='\n'+ '<script>';
				isJAVA +='\n'+ '$(document).ready(function(){';
				isJAVA +='\n'+ '	$("#'+isPARA[1]+'").click(function(){';
				isJAVA += isPAYLOAD;
				isJAVA +='\n'+ '	});';
				isJAVA +='\n'+ '});';
				isJAVA +='\n'+ '</script>';
				$('[data-role="IS_JAVA"]').append(isJAVA);				
				break;		

			//##################################################
			case "[append]":
				Current_Mark = 'append';
				Append_Plase = isPAYLOAD; Mark_Pointer   = 0 ;
				console.log("Append_Plase : "+isPAYLOAD);
				break;
			case "<-[append]":
				console.log("<-[append]");
				console.log("Append_Data : "+Mark_Data[Mark_Pointer+1]);
				append (Append_Plase, Mark_Data[Mark_Pointer+1]);
				//append ('[data-role="'+Append_Plase+'"]', Mark_Data[Mark_Pointer+1]);
				break;

			//##################################################
			case "[tab]":console.log("[tab]");
				Current_Mark = 'tab';
				isHTML  = '<script>$("#'+isID+'").tabs();</script>';
				isHTML += '<div id="'+isID+'">';
				isHTML += '\n<ul>';
				//List
				var pT = isPAYLOAD.split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '\n<li><a href="'+pT1+'">'+pT0+'</a></li>';
						}
					}
				}
				isHTML += '\n</ul>';
				//isHTML += '<script>$("#'+isID+'").tabs();</script>';
				Save_to_Buffer(isHTML);
				//isJAVA = '<script>$("#'+isID+'").tabs();</script>';
				//$('[data-role="IS_JAVA2"]').append('<script>'+isJAVA+'</script>');	
				break;
			case "<-[tab]": console.log("<-[tab]");
				Save_to_Buffer_and_shift('</div>');
				break;
			case "[t]": console.log("[t]");
				Current_Mark = 't';
				Save_to_Buffer('\n<div id="'+isID+'">');
				break;
			case "<-[t]":console.log("<-[t]");
				Save_to_Buffer_and_shift('</div>');
				break;			
			
			//##################################################
			case "[accordion]":console.log("[accordion]");
				Current_Mark = 'accordion';
				//isHTML  = '<script>$( function(){$( "#'+isID+'" ).accordion();});</script>';
				//isHTML  = '<script>$( "#'+isID+'" ).accordion();</script>';
				//isHTML  = '<script>$( "#menu-collapse" ).accordion();</script>';
				//isHTML = '<div id="menu-collapse">';
				//$("#menu-collapse").accordion({header: "h3"});
				isHTML  = '<script>$( "#'+isID+'" ).accordion({header:"h3"});</script>';
				isHTML += '<div id="'+isID+'">';				
				Save_to_Buffer(isHTML);
				break;
			case "<-[accordion]": console.log("<-[accordion]");
				Save_to_Buffer_and_shift('</div>');
				break;									
			case "[ac]": console.log("[ac]");
				Current_Mark = 'ac';
				isHTML  = '\n<div>';
				isHTML += '\n<h3>'+isPAYLOAD+'</h3>';
				isHTML += '\n<div>';
				Save_to_Buffer(isHTML);
				break;
			case "<-[ac]":console.log("<-[ac]");
				Save_to_Buffer_and_shift('</div></div>');
				break;
				
			//##################################################
			case "sidebar":
				isHTML  = '\n<div class="bs-sidebar hidden-print" role="complementary">';
				isHTML += '\n<ul class="nav bs-sidenav">';
				//List
				var pT = isPAYLOAD.split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '\n<li><a href="'+pT1+'"><i class="icon-chevron-right"></i> '+pT0+'</a></li>';
						}
					}
				}
				isHTML += '\n</ul>\n</div>';
				Save_to_Buffer(isHTML);	
				break;

			//##################################################
			case "[div]":
				Current_Mark = 'div';
				isHTML  = '\n<div id="'+isID+'" '+isPAYLOAD+'>';
				Save_to_Buffer(isHTML);
				break;
			case "<-[div]":
				Save_to_Buffer_and_shift('</div>');
				break;
				
			//##################################################
			case "[section]":
				Current_Mark = 'section';
				isHTML  = '\n<section id="'+isID+'">';
				Save_to_Buffer(isHTML);
				break;
			case "<-[section]":
				Save_to_Buffer_and_shift('</section>');
				break;
				
			//##################################################
			case "nav_obj":
				isHTML  = '\n<li><a href="'+isPAYLOAD+'">'+isPARA[1]+'</a></li>';
				Save_to_Buffer(isHTML);
				break;

			case "[nav_objs]":
				Current_Mark = 'nav_objs';
	            isHTML  = '\n<li class="dropdown">';
				isHTML += '\n<a href="#" class="dropdown-toggle" data-toggle="dropdown">'+isPAYLOAD+'<b class="caret"></b></a>';
                isHTML += '\n<ul class="dropdown-menu">';			
				Save_to_Buffer(isHTML);
				break;
			case "<-[nav_objs]":	
				Save_to_Buffer_and_shift('\n</ul>\n</li>');
				break;

			case "[navbar]":
				Current_Mark = 'nav_objs';
				isHTML  = '<header class="navbar navbar-inverse navbar-fixed-top">';
				isHTML += '	<div class="container">';		
				isHTML += '		<div class="navbar-header">';
				isHTML += '			<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="navbar-collapse">';
				isHTML += '				<span class="icon-bar"></span>';
				isHTML += '				<span class="icon-bar"></span>';
				isHTML += '				<span class="icon-bar"></span>';
				isHTML += '			</button>';
				isHTML += '			<a class="navbar-brand" href="'+isPAYLOAD+'">'+isPARA[1]+'</a>';
				isHTML += '		</div>';
				isHTML += '		<nav class="navbar-collapse collapse">';
				isHTML += '			<ul class="nav navbar-nav">';
				Save_to_Buffer(isHTML);
				break;
			case "<-[navbar]":	
				isHTML  = '			</ul>';
				isHTML += '		</nav>';
				isHTML += '	</div>';
				isHTML += '</header>';			
				Save_to_Buffer_and_shift(isHTML);
				break;




//####################################################################################
//##	isPAYLOAD
//##	isPARA
//####################################################################################

















			case "sidebar":
				isHTML  = '\n<div class="bs-sidebar hidden-print" role="complementary">';
				isHTML += '\n<ul class="nav bs-sidenav">';
				//List
				var pT = isPAYLOAD.split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '\n<li><a href="'+pT1+'"><i class="icon-chevron-right"></i>'+pT0+'</a></li>';
						}
					}
				}
				isHTML += '\n</ul>\n</div>';
				Save_to_Buffer(isHTML);	
				break;


			case "[div]":
				Current_Mark = 'div';
				isHTML  = '\n<div id="'+isID+'" '+isPAYLOAD+'>';
				Save_to_Buffer(isHTML);
				break;
			case "<-[div]":
				Save_to_Buffer_and_shift('</div>');
				break;

			case "[section]":
				Current_Mark = 'section';
				isHTML  = '\n<section id="'+isID+'">';
				Save_to_Buffer(isHTML);
				break;
			case "<-[section]":
				Save_to_Buffer_and_shift('</section>');
				break;
	
			
			
			
			
			
			case "flip":
				var pTT=isPARA[1].split('(');
				if(pTT.length === 2){
					var pT0 = pTT[0].trim();
					var pT1 = pTT[1].replace(/(\))/gm, "").trim();
				}
				var pTT=isPARA[2].split('(');
				if(pTT.length === 2){
					var pT2 = pTT[0].trim();
					var pT3 = pTT[1].replace(/(\))/gm, "").trim();
				}				
				isHTML += '<select name="'+isID+'" id="'+isID+'" data-role="slider"><option value="'+pT3+'">'+pT2+'</option><option value="'+pT1+'">'+pT0+'</option></select>';

				isJAVA +='\n'+ '$("#'+isID+'").on( \'change\', function( event )';
				isJAVA +='\n'+ '	{ var Value = $("#'+isID+'").val();';
				isJAVA +='\n'+ '	'+isPAYLOAD;
				isJAVA +='\n'+ '});';
				break;			

			case "codemirror":
				// lineNumbers: true
				// tabSize:4
				// indentUnit:4
				// indentWithTabs:true
				// mode: "simplemode"
				
				isHTML += '<div id="'+isID+'"></div>';
				
				isJAVA +='\n'+ 'var el_'+isID+' = document.getElementById("'+isID+'");';
				isJAVA +='\n'+ 'var  '+isID+' = CodeMirror(el_'+isID+', {';
				isJAVA +='\n'+ isPAYLOAD;
				isJAVA +='\n'+ '});';
				isJAVA +='\n'+ ' '+isID+'.setOption("theme", "duotone-light");';
				break;		
				
			case "codemirror_text":
				isJAVA +='\n'+ ' '+isPARA[1]+'.setValue(`'+isPAYLOAD+'\n`);';
				isJAVA +='\n'+ ' '+isPARA[1]+'.refresh();';	
				break;							
			
			case "[page]":
			case "[w]":
				Current_Mark = 'w';
				if(isPAYLOAD === "")isPAYLOAD="1";
				isPage = isPAYLOAD;
				isHTML = ''
				;isJAVA = ''; 
				isHTML_PANEL   = '';
				isHTML_CONTENT = '';
				break;
			case "<-[w]":
				if(isHTML_CONTENT.length>0)HTML_APPEND("content_"+isPage,isHTML_CONTENT)//$('[data-role="content_'+isPage+'"]').append(isHTML_CONTENT);
				if(isJAVA.length>0)JAVA_APPEND("page_"+isPage,isJAVA);
				isJAVA = ''; isHTML = ''; 
				isHTML_PANEL   = '';  
				isHTML_CONTENT = '';
				break;	

			case "##":
				switch(isPAYLOAD){
					case "2":{isHTML += '<fieldset class="ui-grid-a">';grid_num=2; grid_start=1;break;}
					case "3":{isHTML += '<fieldset class="ui-grid-b">';grid_num=3; grid_start=1;break;}
					case "4":{isHTML += '<fieldset class="ui-grid-c">';grid_num=4; grid_start=1;break;}
					case "5":{isHTML += '<fieldset class="ui-grid-d">';grid_num=5; grid_start=1;break;}
					default: break;
				}
				grid_cou   = 1; grid_add   = 0;			
				break;

			case "header_text":
				$("#page_"+isPage+" h1 #MyHeader_Text_"+isPage).text(isPAYLOAD);
				break;	

			case "create_page":
				if(isPAYLOAD.length > 0)Create_Page(isPAYLOAD);
				break;	

			case "label":			
				isHTML += ('<label>'+isPAYLOAD+'</label>');
				break;

			case "button":
				isHTML += '<input id="'+isID+'" type="button" value="'+isPARA[1]+'"/>';
				isJAVA +='\n'+ '$("#'+isID+'").click(function (e){';
				isJAVA +='\n'+ '	'+isPAYLOAD;
				isJAVA +='\n'+ '});';						
				break;				
				
			//..button_class('ID'),name,ui-btn ui-btn-icon-notext ui-corner-all ui-icon-cloud, 				
			case "header_button":
				var html = '<a onclick="'+isID+'()"  class="'+isPARA[2]+'">'+isPARA[1]+'</a>';
				$('#header_'+isPage).prepend(html);  // dasva sul tavshi 				
				var SCR = ''
				SCR +='\n'+ 'function '+isID+'(){';
				SCR +='\n'+ '	'+isPAYLOAD;
				SCR +='\n'+ '}';
				SCR = '<script>'+SCR+'</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);
				break;
				
			case "js_pbc":		
			case "js_pagebeforecreate":	
			case "javascript_pagebeforecreate":
				var SCR = '';
				SCR +='\n'+ '<script>';
				SCR +='\n'+ '$(document).on("pagebeforecreate","#page_'+isPage+'",function(){';
				SCR +='\n'+ '	' + isPAYLOAD;
				SCR +='\n'+ '});';
				SCR +='\n'+ '</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);				
				break;				
				
			case "js_pc":		
			case "js_pagecreate":	
			case "javascript_pagecreate":
				var SCR = '';
				SCR +='\n'+ '<script>';
				SCR +='\n'+ '$(document).on("pagecreate","#page_'+isPage+'",function(){';
				SCR +='\n'+  '	' + isPAYLOAD;
				SCR +='\n'+ '});';
				SCR +='\n'+ '</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);				
				break;	
				
			case "js_pi":		
			case "js_pageinit":	
			case "javascript_pageinit":
				var SCR = '';
				SCR +='\n'+ '<script>';
				SCR +='\n'+ '$(document).on("pageinit","#page_'+isPage+'",function(){';
				SCR +='\n'+  '	' + isPAYLOAD;
				SCR +='\n'+ '});';
				SCR +='\n'+ '</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);				
				break;
				
			case "slider":
				isHTML += '<input name="'+isID+'" id="'+isID+'" type="range"  min="'+isPARA[1]+'" max="'+isPARA[2]+'" step="'+isPARA[3]+'"  value="'+isPARA[1]+'" />'
				isJAVA +='\n'+ '	$("#'+isID+'").on( \'slidestop\', function( event ){';
				isJAVA +='\n'+ '		var Value = $("#'+isID+'").val();';
				isJAVA +='\n'+ '		'+isPAYLOAD;
				isJAVA +='\n'+ '	})';
				break;		

			case "input_text":
				isHTML += '<input id="'+isID+'" type="text" value="'+isPAYLOAD+'"/>'
				break;
				
			case "textarea":
				isHTML += '<form>';
				isHTML += '<textarea cols="40" rows="4" id="'+isID+'">'+isPAYLOAD+'</textarea>';
				isHTML += '</form>';
				break;					
				
	
				
			case "input_password":			
				isHTML += '<input id="'+isID+'" type="password" value="'+isPAYLOAD+'"/>';
				break;	

			case "js":
			case "javascript":
				var SCR = '<script>'+isPAYLOAD+'</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);
				break;
				
			
			case "html_head":
				$('[data-role="IS_HEAD"]').append(isPAYLOAD);
				break;
			case "html_body":
				$('[data-role="IS_HTML_BODY"]').append(isPAYLOAD);
				break;



			case "select":
				isHTML += '<select name="'+isID+'" id="'+isID+'" data-native-menu="false">';
				//List
				var pT = isPARA[1].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '<option value="'+pT1+'">'+pT0+'</option>';
						}
					}
				}isHTML += '</select>';				

				isJAVA +='\n'+ '$("#'+isID+'").change(function(){';
				isJAVA +='\n'+ '	var Value = $("#'+isID+'").val();';
				isJAVA +='\n'+ '	'+isPAYLOAD;
				isJAVA +='\n'+ '});';
				break;	



			case "radio":
				var isName = "";
				var isDataType = "";
				if(isPARA[1]==='v'){isName = "radio-choice-v-2"; isDataType = '';}
				if(isPARA[1]==='h'){isName = "radio-choice-h-2"; isDataType = 'data-type="horizontal"';}
				
				isHTML += '<fieldset data-role="controlgroup" id="'+isID+'" '+isDataType+'>';
				//List
				var pT = isPARA[2].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '<input type="radio" name="'+isName+'" id="'+isID+'_'+b+'" value="'+pT1+'">';
        					isHTML += '<label for="'+isID+'_'+b+'">'+pT0+'</label>';
						}
					}
				}isHTML += '</fieldset>';			
	
				isJAVA +='\n'+ '$( "#'+isID+' input" ).on( "change", function( event ) {';
				isJAVA +='\n'+ '	var Value = $( "#'+isID+' input:checked" ).attr( "value" );';
				isJAVA +='\n'+ '	'+isPAYLOAD;
				isJAVA +='\n'+ '});';				
				break;
				

			case "checkbox":
				var isName = "";
				var isDataType = "";
				if(isPARA[1]==='v'){isDataType = '';}
				if(isPARA[1]==='h'){isDataType = 'data-type="horizontal"';}

				isHTML += '<fieldset data-role="controlgroup" '+isDataType+'>';
				//List
				var pT = isPARA[2].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '<input type="checkbox" name="'+isID+'_'+b+'" id="'+isID+'_'+b+'" value="'+pT1+'">';
        					isHTML += '<label for="'+isID+'_'+b+'">'+pT0+'</label>';

							isJAVA +='\n'+ '$("#'+isID+'_'+b+'").on("change", function () {';
							isJAVA +='\n'+ '	var Status = $(this).prop("checked");';
							isJAVA +='\n'+ '	var Value  = $(this).val()';
							isJAVA +='\n'+ '	'+isID+'(Status,Value);';
							isJAVA +='\n'+ '});';
						}
					}
				}isHTML += '</fieldset>';			

				isJAVA +='\n'+ 'function '+isID+'(Status,Value){';
				isJAVA +='\n'+ '	'+isPAYLOAD;
				isJAVA +='\n'+ '}';
				break;
				
			case "listview":
				isHTML += '<ul id="'+isID+'" data-role="listview" data-inset="true" data-divider-theme="a">';
				//List
				var pT = isPARA[1].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '<li id="'+pT1+'" ><a>'+pT0+'</a></li>';
							//console.log("[" + pT0 + "]["+ pT1 + "]");
						}else{
							
							isHTML += '<li data-role="list-divider">'+pT[b]+'</li>';
						}
					}
				}isHTML += '</ul>';				
				isJAVA +='\n'+ '$("#'+isID+'").delegate("li", "click", function () {';
				isJAVA +='\n'+ '	var Value = $(this).attr("id")';// $("#'+isID+'").val();';
				isJAVA +='\n'+ '	'+isPAYLOAD;
				isJAVA +='\n'+ '});';				
				break;
				
			case "info":
				switch(isPARA[1]){
					case "1":
						isHTML += '<div id="'+isID+'" class="ui-body ui-body-a ui-corner-all">';
						if(isPARA[2] !== "") isHTML += '<h3>'+isPARA[2]+'</h3>';					
						if(isPAYLOAD !== "") isHTML += '<p>'+isPAYLOAD+'</p>';
						isHTML += '</div>';
						break;
					case "2":
						if(isPARA[2] !== "") isHTML += '<h3 class="ui-bar ui-bar-a ui-corner-all">'+isPARA[2]+'</h3>';
						if(isPAYLOAD !== "") isHTML += '<div class="ui-body ui-body-a ui-corner-all"><p>'+isPAYLOAD+'</p></div>';
						break;
					case "3":
						isHTML += '<div id="'+isID+'" class="ui-corner-all custom-corners">';
						if(isPARA[2] !== "") isHTML += '<div class="ui-bar ui-bar-a"><h3>'+isPARA[2]+'</h3></div>';
						if(isPAYLOAD !== "") isHTML += '<div class="ui-body ui-body-a"><p>'+isPAYLOAD+'</p></div>';
						isHTML += '</div>';
						break;
					default:
						break;
				}					
				break;		
//####################################################################################
//##	isPAYLOAD
//##	isPARA
//##
//####################################################################################	


			case "[panel]":
			case "[p]":
				Current_Mark = 'p';
				isHTML += '<div data-role="panel" id="'+isID+'" data-position="left" data-display="reveal">';
				isHTML_PANEL ='';
				panel_status = 1;
				break;
			case "<-[p]":
				isHTML += '</div>';
				$('[data-role="panel_'+isPage+'"]').append(isHTML_PANEL);
				panel_status = 0;
				break;

			case "[pop]":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="0px 0px";
				Current_Mark = 'pop';
				isHTML += '<div data-role="popup" id="'+isID+'" data-theme="a" class="ui-corner-all  data-transition="flip"">';
				isHTML += '<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>';

				isHTML += '<div style="padding:'+p[1]+';">';
				break;
			case "<-[pop]":
				isHTML += '</div>';
				isHTML += '</div>';
				break;

















		
			case "[ocllaps]":
			case "[col]":
			case "[c]":
				Current_Mark = 'c';
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="collapsible";	//on
				isHTML += '<div data-role="collapsible" class="ui-nodisc-icon ui-alt-icon">';
				isHTML += '<h4>'+p[1]+'</h4>';
				collapsible_status = 1;
				break;
			case "<-[c]":				
				isHTML += '</div>';
				collapsible_status = 0;
				break;



			case "[style]":
			case "[s]":
				Current_Mark = 's';
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="";
				var Lim = 2;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				isHTML += '<div style="'+p[1]+'">';
				break;
			case "<-[s]":				
				isHTML += '</div>';
				break;	


	

				

				
				
				
				
			case "button_class":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="button";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";
				if(Conf_Spl_Len >= 4)p[3]=Conf_Spl[3].trim(); else p[3]="";

				var Lim = 4;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}

				isHTML += '<a onclick="'+isID+'()"  class="'+p[2]+'">'+p[1]+'</a>';
				//$('#header_1').append(html); // matebs boloshi 
				//$('#header_1').html(html);   // saertod gamocvala mteli shigtavsi
				//$('#header_1').prepend(html);  // dasva sul tavshi 				
				var SCR = ''
				SCR +='\n'+ 'function '+isID+'(){';
				SCR +='\n'+ '		'+p[3];
				SCR +='\n'+ '}';
				SCR = '<script>'+SCR+'</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);
				break;				






			case "navbar":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim();else p[1] = '';
				
				isHTML_NAVBAR = '<ul id="'+isID+'" >';					
				//List
				var pT = p[1].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							//isHTML_NAVBAR += '<li><a href="#'+pT1+'" id="'+isID+'_'+b+'">'+pT0+'</a></li>';
							isHTML_NAVBAR += '<li><a href="#page_'+pT1+'" id="'+isID+'_'+b+'">'+pT0+'</a></li>';
						}
					}
				}isHTML_NAVBAR += '</ul>';			
				//$('[data-role="navbar_'+p[1]+'"]').append(isHTML_NAVBAR);
				$('[data-role="navbar_'+isPage+'"]').append(isHTML_NAVBAR);
				break;	


		



						
			case "+>":
				isHTML += '<div class="ui-corner-all custom-corners">';
				break;

			case "<+":
				isHTML += '</div>';
				break;




			case "if_event":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="Event";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";	

				var Lim = 3;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}				
				//-----------------------------------------------------			
					Tmp_JAVA  ='\n'+ '	document.body.addEventListener("'+p[1]+'", function(event) {';
					Tmp_JAVA +='\n'+ '		var Value = event.detail.data;';
					Tmp_JAVA +='\n'+ '		'+p[2];
					//Tmp_JAVA +='\n'+ '		console.log("Slider_Change('+is_ID+') : Value = " + Value );';
					//Tmp_JAVA +='\n'+ '		console.log("Slider_Change('+is_ID+') : '+is_Script+'" );';
					Tmp_JAVA +='\n'+ '	});';				
				//-----------------------------------------------------
				Tmp_JAVA = '<script>'+Tmp_JAVA+'</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(Tmp_JAVA);
				break;	
							
				
				
			case "iframe":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="200";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";
				
				var is_width  = $( window ).width() - 30;
				var is_height = p[1]; //$( window ).height() - 30;
				
				isHTML += '<iframe id="'+isID+'" type="text/html" width="'+is_width+'" height="'+is_height+'"';
				isHTML += 'src="'+p[2]+'"';
				isHTML += 'frameborder="0"></iframe>';			
			
				Tmp_JAVA = '';
				Tmp_JAVA +='\n'+ '$( window ).resize(function(){';
				Tmp_JAVA +='\n'+ '	console.log("*** resize:1 ########################");';
				Tmp_JAVA +='\n'+ '	$( "#'+isID+'" ).attr( "width", $( window ).width() - 30 )';
				Tmp_JAVA +='\n'+ '});';
				Tmp_JAVA = '<script>'+Tmp_JAVA+'</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(Tmp_JAVA);
				break;
				
			case "iframe2":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="100";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="100";
				if(Conf_Spl_Len >= 4)p[3]=Conf_Spl[3].trim(); else p[3]="";
				
				var is_width  = p[2]; //$( window ).width() - 30;
				var is_height = p[1]; //$( window ).height() - 30;
				
				isHTML += '<iframe id="'+isID+'" type="text/html" width="'+is_width+'" height="'+is_height+'"';
				isHTML += 'src="'+p[3]+'"';
				isHTML += 'frameborder="0"></iframe>';			
			
				Tmp_JAVA = '';
				Tmp_JAVA +='\n'+ '$( window ).resize(function(){';
				Tmp_JAVA +='\n'+ '	console.log("*** resize:1 ########################");';
				Tmp_JAVA +='\n'+ '	$( "#'+isID+'" ).attr( "width", $( window ).width() - 30 )';
				Tmp_JAVA +='\n'+ '});';
				Tmp_JAVA = '<script>'+Tmp_JAVA+'</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(Tmp_JAVA);
				break;				
				
			case "JustGage":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="200";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";
								
								
				//isID = 'gauge';
								
				isHTML += '<div id="'+isID+'"></div>';			

				isJAVA +='\n'+ 'var '+isID+' = new JustGage({\n';
				isJAVA +='\n'+ '	id: "'+isID+'",\n';
				isJAVA +='\n'+ '	value: getRandomInt(0, 100),\n';
				isJAVA +='\n'+ '	min: 0,\n';
				isJAVA +='\n'+ '	max: 100,\n';
				isJAVA +='\n'+ '	title: "Big Fella",\n';
				isJAVA +='\n'+ '	label: "pounds"\n';
				isJAVA +='\n'+ '});';
				
				var isSTYLE = '<style>#'+isID+' {width:100px; height:80px; display: inline-block;margin: 1em;}</style>';
				$('[data-role="IS_STYLE"]').append(isSTYLE);
				
				//g1.refresh(55);
				break;				

			//#######################################################################################	
			case "html_element":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="3";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";
				if(Conf_Spl_Len >= 4)p[3]=Conf_Spl[3].trim(); else p[3]="";	
				var Lim = 4;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}					
				isHTML += p[1]+p[3]+p[2];		
				break;
			
			
			
			case "block":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim();else p[1] = '';
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim();else p[2] = '';

				isHTML += '<div class="ui-block-a">';
				isHTML += '<div class="jqm-block-content">';
				isHTML += '<h3>'+p[1]+'</h3>';		

				//List
				var pT = p[2].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '<p><a href="'+pT1+'" data-ajax="false">'+pT0+'</a></p>';
						}
					}
				}

				isHTML += '</div>';
				isHTML += '</div>';
				break;		
			
			
			
			case "[m]":
				Current_Mark = 'm';
				isHTML = '<h1>  </h1>';
				isHTML = '<ul class="jqm-list ui-alt-icon ui-nodisc-icon">';
				isHTML_PANEL ='';
				panel_status = 1;
				break;
			case "<-[m]":
				isHTML += '</ul>';
				$('[data-role="panel_1"]').append(isHTML_PANEL);
				panel_status = 0;
				break;
				
				
				
				
				
			
			
			case "m_objects":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim();else p[1] = '';
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim();else p[2] = '';
				//isHTML_NAVBAR = '<ul id="'+isID+'" >';

				
				isHTML += '<li data-role="collapsible" data-enhanced="true" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-iconpos="right" data-inset="false" class="ui-collapsible ui-collapsible-themed-content ui-collapsible-collapsed">';
				isHTML += '<h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed">';
				isHTML += '<a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-right ui-btn-inherit ui-icon-carat-d">';
				isHTML += p[1]+'<span class="ui-collapsible-heading-status"></span>';
				isHTML += '</a>';
				isHTML += '</h3>';
				isHTML += '<div class="ui-collapsible-content ui-body-inherit ui-collapsible-content-collapsed" aria-hidden="true">';
				isHTML += '<ul>';				

				//List
				var pT = p[2].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '<li><a href="'+pT1+'" data-ajax="false">'+pT0+'</a></li>';
						}
					}
				}

				isHTML += '</ul>';
				isHTML += '</div>';
				isHTML += '</li>';
				break;				

			case "m_object":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";
				isHTML += '<li><a href="'+p[2]+'" data-ajax="false">'+p[1]+'</a></li>';
				break;
				
				
			case "bar":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="3";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";					
				isHTML += '<h'+p[1]+' class="ui-bar ui-bar-a">'+p[2]+'</h'+p[1]+'>'			
				break;
				
				
			default:
				break;
		}
		
	}
}







