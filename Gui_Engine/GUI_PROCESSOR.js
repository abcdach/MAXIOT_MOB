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
**/
//..header_text, text										//
//..header_button, text, ui-..., *JavaScript*				//..header_button,name, ui-btn ui-btn-icon-notext ui-corner-all ui-icon-delete, Page_change('page_1');
//..navbar,--name1(page num)--name2(page num)				//..navbar,--page_1(1)--page_2(2)--page_3(3)

//..button(ID),name,*JavaScript*							//..button(ID),name,Out_0("1");

//..checkbox(ID),v,--name1(val1)--name2(val2), *JavaScript*(Value);  		//..checkbox,v, .. checkbox,h,
//..radio(ID),v,--name1(val1)--name2(val2)), *JavaScript*(Value);	//..radio,v, .. radio,h,
//..select(ID),--name1(1)--name2(2), *JavaScript*(Value);			//
//..slider(ID),0,150,10, *JavaScript*(Value);						//..slider(ID),MIN,MAX,STEP,{{Java content}};

//..flip(ID),on(1),off(0), *JavaScript*(Value);						//
//..input_password(ID),text									//
//..input_text(ID),text										//
//..label(ID),text											//
//..##,2 ..##,3 ..##,4 ..##,5								// grid
//..[w],1     ..{ GUI Content ..}							//
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

function GUI_Processor(isDATA){
	
	var Current_Mark   = '';
	var Mark_Pointer   = 0 ;
	var Mark_Steck     = ['','','','','','','','','','','','','','','','','','',''];
	var Tmp_JAVA       = '';
	var isHTML_PANEL   = '';
	var isHTML_CONTENT = '';
	var isHTML_NAVBAR  = '';
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

	var Conf = isDATA.split('..');
	var Conf_Len = Conf.length;
	for (i = 0; i < Conf_Len; i++) {
		Conf[i] = Conf[i].trim();
		//Conf[i] = Conf[i].replace(/(\r\n|\n|\r)/gm, "");
		Conf[i] = Conf[i].replace(/(")/gm, "'");
		//Conf[i] = Conf[i].trim();
	}console.log(Conf);
	for (i = 0; i < Conf_Len; i++) {
		
		
		var Conf_Spl = Conf[i].split(',');
		var Conf_Spl_Len = Conf_Spl.length;
			
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
		
		
		
		
		
		console.log("CMD : "+isCMD+"("+isID+")");
		
		
		if(isCMD === "{"){
			if(Current_Mark === 'w')Mark_Pointer = 0;
			Mark_Steck[Mark_Pointer] = Current_Mark;
			Mark_Pointer ++;
			//console.log("********   Current_Mark : "+Current_Mark);
			//console.log("********   Mark_Pointer : "+Mark_Pointer);
			console.log("********   Mark_Steck : "+Mark_Steck);			
		}

		if(isCMD === "}"){
			if(Mark_Pointer > 0){
				Mark_Pointer --;
				Current_Mark = Mark_Steck[Mark_Pointer];
				switch(Current_Mark){
					case "w": isCMD = "<-[w]"; break;
					case "c": isCMD = "<-[c]"; break;
					case "p": isCMD = "<-[p]"; break;
					case "t": isCMD = "<-[t]"; break;
					case "d": isCMD = "<-[d]"; break;
					case "pop": isCMD = "<-[pop]"; break;
					case "m": isCMD = "<-[m]"; break; // vebgverdistvis
					default: break;
				}
			}			
		}
		

		isHTML = '';

		if(grid_start===1){		
			if(grid_cou === 1){isHTML += '<div class="ui-block-a">'; grid_add = 1;}
			if(grid_cou === 2){isHTML += '<div class="ui-block-b">'; grid_add = 1;}
			if(grid_cou === 3){isHTML += '<div class="ui-block-c">'; grid_add = 1;}
			if(grid_cou === 4){isHTML += '<div class="ui-block-d">'; grid_add = 1;}
			if(grid_cou === 5){isHTML += '<div class="ui-block-e">'; grid_add = 1;}
		}

		switch(isCMD) {
			

			case "[w]":
				Current_Mark = 'w';
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="1";
				isPage = p[1];

				isJAVA = ''; 
				isHTML = ''; 
				isHTML_PANEL   = '';  
				isHTML_CONTENT = '';
				break;	
			case "<-[w]":
				if(isHTML_CONTENT.length>0)$('[data-role="content_'+isPage+'"]').append(isHTML_CONTENT);
				if(isJAVA.length>0)JAVA_APPEND("page_"+isPage,isJAVA);
				isJAVA = ''; 
				isHTML = ''; 
				isHTML_PANEL   = '';  
				isHTML_CONTENT = '';
				break;
				
			case "header_text":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="";
				//if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";

				$("#page_"+isPage+" h1 #MyHeader_Text_"+isPage).text(p[1]);
				break;	
				
			case "##":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="2";	
				if(p[1]==="2"){isHTML += '<fieldset class="ui-grid-a">';grid_num=2; grid_start=1;}
				if(p[1]==="3"){isHTML += '<fieldset class="ui-grid-b">';grid_num=3; grid_start=1;}
				if(p[1]==="4"){isHTML += '<fieldset class="ui-grid-c">';grid_num=4; grid_start=1;}
				if(p[1]==="5"){isHTML += '<fieldset class="ui-grid-d">';grid_num=5; grid_start=1;}
				grid_cou   = 1;
				grid_add   = 0;			
				break;				

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

			case "label":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="";				
				isHTML += ('<label>'+p[1]+'</label>');
				break;

			case "bar":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="3";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";					
				isHTML += '<h'+p[1]+' class="ui-bar ui-bar-a">'+p[2]+'</h'+p[1]+'>'			
				break;
			
			case "button":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="button";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";	//SCRIPT	

				var Lim = 3;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				
				isHTML += '<input id="'+isID+'" type="button" value="'+p[1]+'"/>';
				isJAVA += JAVA_Button_Click(isID,p[2]);
				break;
				
				
				
				
				
				
			//..button_class('ID'),name,ui-btn ui-btn-icon-notext ui-corner-all ui-icon-cloud, 
				
			case "header_button":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="button";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";
				if(Conf_Spl_Len >= 4)p[3]=Conf_Spl[3].trim(); else p[3]="";


				var Lim = 4;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}

				var html = '<a onclick="'+isID+'()"  class="'+p[2]+'">'+p[1]+'</a>';
				//$('#header_1').append(html); // matebs boloshi 
				//$('#header_1').html(html);   // saertod gamocvala mteli shigtavsi
				$('#header_'+isPage).prepend(html);  // dasva sul tavshi 				

				var SCR = ''
				SCR +='\n'+ 'function '+isID+'(){';
				SCR +='\n'+ '		'+p[3];
				SCR +='\n'+ '}';
				SCR = '<script>'+SCR+'</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);
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

			case "js":
			case "javascript":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="";

				var Lim = 2;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				var SCR = '<script>'+p[1]+'</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);
				break;
				
				
			case "js_pbc":		
			case "js_pagebeforecreate":	
			case "javascript_pagebeforecreate":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="1";

				var Lim = 2;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				
				var SCR = '';
				SCR +='\n'+ '<script>';
				SCR +='\n'+ '$(document).on("pagebeforecreate","#page_'+isPage+'",function(){';
				SCR +='\n'+  '	' + p[1];
				SCR +='\n'+  '	'
				SCR +='\n'+ '});';
				SCR +='\n'+ '</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);				
				break;				
				
			case "js_pc":		
			case "js_pagecreate":	
			case "javascript_pagecreate":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="1";

				var Lim = 2;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				
				var SCR = '';
				SCR +='\n'+ '<script>';
				SCR +='\n'+ '$(document).on("pagecreate","#page_'+isPage+'",function(){';
				SCR +='\n'+  '	' + p[1];
				SCR +='\n'+  '	'
				SCR +='\n'+ '});';
				SCR +='\n'+ '</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);				
				break;	
				
			case "js_pi":		
			case "js_pageinit":	
			case "javascript_pageinit":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="1";

				var Lim = 2;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				
				var SCR = '';
				SCR +='\n'+ '<script>';
				SCR +='\n'+ '$(document).on("pageinit","#page_'+isPage+'",function(){';
				SCR +='\n'+  '	' + p[1];
				SCR +='\n'+  '	'
				SCR +='\n'+ '});';
				SCR +='\n'+ '</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(SCR);				
				break;					
				
				
				
				




			case "slider":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="0";	//min
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="100";	//max		
				if(Conf_Spl_Len >= 4)p[3]=Conf_Spl[3].trim(); else p[3]="1";	//step
				if(Conf_Spl_Len >= 5)p[4]=Conf_Spl[4].trim(); else p[4]="";	//OutPut
				
				var Lim = 5;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				
				isHTML += HTML_Slider(isID,p[1],p[2],p[3]);	
				isJAVA += JAVA_Slider_Stop(isID,p[4]);
				break;
			
			
			case "flip":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="on(1)";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="off(0)";
				if(Conf_Spl_Len >= 4)p[3]=Conf_Spl[3].trim(); else p[3]="Out_0(Value);";

				var pTT=p[1].split('(');
				if(pTT.length === 2){
					var pT0 = pTT[0].trim();
					var pT1 = pTT[1].replace(/(\))/gm, "").trim();
				}
				var pTT=p[2].split('(');
				if(pTT.length === 2){
					var pT2 = pTT[0].trim();
					var pT3 = pTT[1].replace(/(\))/gm, "").trim();
				}				
				isHTML += isGUI_flip(isID,pT0,pT1,pT2,pT3);
				
				var Lim = 4;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				isJAVA += JAVA_flip_Change(isID,p[3]);			
				break;
			
			case "input_text":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="";
				isHTML += HTML_Input_Text(isID,p[1]);
				break;
						
			case "input_password":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="";			
				isHTML += HTML_Input_Password(isID,p[1]);
				break;			
			
			
			case "select":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim();
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim();
				
				isHTML += '<select name="'+isID+'" id="'+isID+'" data-native-menu="false">';
				//List
				var pT = p[1].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '<option value="'+pT1+'">'+pT0+'</option>';
							//console.log("[" + pT0 + "]["+ pT1 + "]");
						}
					}
				}isHTML += '</select>';				

				//java Script
				var Lim = 3;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				isJAVA += JAVA_Select_Change(isID,p[2]);
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


			case "radio":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="v";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="--name1(val1)--name2(val2)--name3(val3)";
				if(Conf_Spl_Len >= 4)p[3]=Conf_Spl[3].trim(); else p[3]="Out_0(Value);";
				
				var isName = "";
				var isDataType = "";
				if(p[1]==='v'){isName = "radio-choice-v-2"; isDataType = '';}
				if(p[1]==='h'){isName = "radio-choice-h-2"; isDataType = 'data-type="horizontal"';}
				
				isHTML += '<fieldset data-role="controlgroup" id="'+isID+'" '+isDataType+'>';
				//List
				var pT = p[2].split('--');
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

				//java Script
				var Lim = 4;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				isJAVA += JAVA_Radio_Change(isID,p[3]);
				break;
				

			case "checkbox":
			
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="v";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="--name1(val1)--name2(val2)--name3(val3)";
				if(Conf_Spl_Len >= 4)p[3]=Conf_Spl[3].trim(); else p[3]="Out_0(Value);";
				
				var isName = "";
				var isDataType = "";
				if(p[1]==='v'){isName = isID+'_'+b; isDataType = '';}
				if(p[1]==='h'){isName = isID+'_'+b; isDataType = 'data-type="horizontal"';}
				
				isHTML += '<fieldset data-role="controlgroup" id="'+isID+'" '+isDataType+'>';
				//List
				var pT = p[2].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML += '<input type="checkbox" name="'+isName+'" id="'+isID+'_'+b+'" value="'+pT1+'">';
        					isHTML += '<label for="'+isID+'_'+b+'">'+pT0+'</label>';
						}
					}
				}isHTML += '</fieldset>';			
				//java Script
				var Lim = 4;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				isJAVA += JAVA_Radio_Change(isID,p[3]);
				break;


			case "[t]":
				Current_Mark = 't';
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="v";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="--name1(val1)--name2(val2)--name3(val3)";

				isHTML += '<div data-role="tabs" id="'+isID+'" data-type="horizontal">';
				isHTML += '<div data-role="navbar">';
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
							isHTML += '<li><a href="#'+pT1+'" data-ajax="false">'+pT0+'</a></li>';
						}
					}
				}isHTML += '</ul></div>';	
				break;

			case "[d]":
				Current_Mark = 'd';
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="";
				isHTML += '<div id="'+isID+'" '+p[1]+'>';
				break;
			case "<-[d]":
				isHTML += '</div>';
				break;

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

						
			case "+>":
				isHTML += '<div class="ui-corner-all custom-corners">';
				break;

			case "<+":
				isHTML += '</div>';
				break;

			case "info":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";
				if(Conf_Spl_Len >= 4)p[3]=Conf_Spl[3].trim(); else p[3]="";

				var Lim = 4;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				if(p[1]==="1"){
					isHTML += '<div id="'+isID+'" class="ui-body ui-body-a ui-corner-all">';
					if(p[2] !== "") isHTML += '<h3>'+p[2]+'</h3>';					
					if(p[3] !== "") isHTML += '<p>'+p[3]+'</p>';
					isHTML += '</div>';
				}
				if(p[1]==="2"){
					if(p[2] !== "") isHTML += '<h3 class="ui-bar ui-bar-a ui-corner-all">'+p[2]+'</h3>';
					if(p[3] !== "") isHTML += '<div class="ui-body ui-body-a ui-corner-all"><p>'+p[3]+'</p></div>';
				}
				if(p[1]==="3"){
					
					isHTML += '<div id="'+isID+'" class="ui-corner-all custom-corners">';
					if(p[2] !== "") isHTML += '<div class="ui-bar ui-bar-a"><h3>'+p[2]+'</h3></div>';
					if(p[3] !== "") isHTML += '<div class="ui-body ui-body-a"><p>'+p[3]+'</p></div>';

					isHTML += '</div>';
				}
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

		 
			case "Dygraph":
				//if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="200";
				//if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";
								
								
				//isID = 'gauge';
								
				//isHTML += '<div id="'+isID+'"></div>';	
				//isHTML += '<div id="graph"></div>';				
				var w = $( window ).width() - 80;
				isHTML += '<div id="graph" style="height: 200px; width: '+w+'px;"></div>';


				//isJAVA +='\n'+ 'var '+isID+' = new JustGage({\n';
				//isJAVA +='\n'+ '	id: "'+isID+'",\n';
				//isJAVA +='\n'+ '	value: getRandomInt(0, 100),\n';
				//isJAVA +='\n'+ '	min: 0,\n';
				//isJAVA +='\n'+ '	max: 100,\n';
				//isJAVA +='\n'+ '	title: "Big Fella",\n';
				//isJAVA +='\n'+ '	label: "pounds"\n';
				//isJAVA +='\n'+ '});';
				
				//var isSTYLE = '<style>#'+isID+' {width:100px; height:80px; display: inline-block;margin: 1em;}</style>';
				//$('[data-role="IS_STYLE"]').append(isSTYLE);
				
				//g1.refresh(55);
				break;			 
		 
		 
		 
	
				
				
				
				
				
			//#######################################################################################
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
				
				
			default:
				break;
		}
		
		

		if( grid_add === 1){	
			grid_cou ++;
			grid_add = 0;
			isHTML += '</div>';
			if(grid_cou > grid_num){
				grid_start = 0;
				isHTML += '</fieldset>';
			}
		}

		
		if( panel_status === 1){ 
			isHTML_PANEL += isHTML;
		}
		else{
			isHTML_CONTENT += isHTML;
		}
		

		
		
	}
//#--------------------------------------------	

}
