


//..header,1,text											//
//..navbar,1,--name1(ID_1)--name2(ID_1)						//
//..checkbox(ID),v,--name1(val1)--name2(val2),Out_0(Value); //.. checkbox,v, .. checkbox,h,
//..radio(ID),v,--name1(val1)--name2(val2)),Out_0(Value);	//.. radio,v, .. radio,h,
//..select(ID),--name1(1)--name2(2),Out_0(Value);			//
//..slider(ID),0,150,10,Out_0(Value);						//.. slider(ID),MIN,MAX,STEP,{{Java content}};
//..button(ID),name,Out_0(Value);							//
//..flip(ID),on(1),off(0),Out_0(Value);						//
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
//..  event,In_0,Out_0(Value);								//




var isID_Counter = 0;

function GUI_Processor(isDATA){
	
	var Current_Mark = '';
	var Mark_Pointer =  0;
	var Mark_Steck   = ['','','','','','','','','','','','','','','','','','',''];

	var isHTML_PANEL = '';
	var isHTML_CONTENT = '';
	var isHTML_NAVBAR = '';
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
				
			case "header":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]=isPage;
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";
				
				//var isHeader += '<h1><span id="MyHeader_Text"></span>'+p[2]+'</h1>'; 
				//$('[data-role="content_'+p[1]+'"]').append(isHeader);
				$("#page_"+p[1]+" h1 #MyHeader_Text_"+p[1]).text(p[2]);
				//console.log('');
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
			
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="label";				
				isHTML += ('<label>'+p[1]+'</label>'); 			
				break;

			case "bar":
			
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="3";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";					
				isHTML += '<h'+p[1]+' class="ui-bar ui-bar-a">'+p[2]+'</h'+p[1]+'>'			
				break;
			
			case "button":

				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="button";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="Out_0('OK');";	//SCRIPT	

				var Lim = 3;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}
				
				isHTML += HTML_Button(isID,p[1]);				
				isJAVA += JAVA_Button_Click(isID,p[2]);
				break;
				
			
			
			case "slider":
			
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="0";	//min
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="100";	//max		
				if(Conf_Spl_Len >= 4)p[3]=Conf_Spl[3].trim(); else p[3]="1";	//step
				if(Conf_Spl_Len >= 5)p[4]=Conf_Spl[4].trim(); else p[4]="Out_0('OK');";	//OutPut
				
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
			
				isHTML += '<select name="'+isID+'" id="'+isID+'" data-native-menu="false">';
				
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim();
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim();
				
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
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim();else p[1] = isID;
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim();else p[2] = '';
				
				isHTML_NAVBAR = '<ul id="'+isID+'" >';					
				//List
				var pT = p[2].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML_NAVBAR += '<li><a href="#'+pT1+'" id="'+isID+'_'+b+'">'+pT0+'</a></li>';
						}
					}
				}isHTML_NAVBAR += '</ul>';			
				$('[data-role="navbar_'+p[1]+'"]').append(isHTML_NAVBAR);
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

			case "event":

				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="Event";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";	

				var Lim = 3;
				if(Conf_Spl_Len > Lim){
					for (b = Lim; b < Conf_Spl_Len; b++){
						p[Lim-1]+=','+Conf_Spl[b];
					}
				}				
				var is_JAVA = JAVA_Add_Event_Listener(p[1],p[2]);
				is_JAVA = '<script>'+is_JAVA+'</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(is_JAVA);
				break;	
				
				
			case "iframe":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="200";
				if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim(); else p[2]="";
				
				var is_width  = $( window ).width() - 30;
				var is_height = p[1]; //$( window ).height() - 30;
				
				isHTML += '<iframe id="'+isID+'" type="text/html" width="'+is_width+'" height="'+is_height+'"';
				isHTML += 'src="'+p[2]+'"';
				isHTML += 'frameborder="0"></iframe>';			
			
				is_JAVA = '';
				is_JAVA +='\n'+ '$( window ).resize(function(){';
				is_JAVA +='\n'+ '	console.log("*** resize:1 ########################");';
				is_JAVA +='\n'+ '	$( "#'+isID+'" ).attr( "width", $( window ).width() - 30 )';
				is_JAVA +='\n'+ '});';
				is_JAVA = '<script>'+is_JAVA+'</script>';
				$('[data-role="IS_JAVA_SCRIPT"]').append(is_JAVA);
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
		
		//pop_status = 0;
		
		
		
		
		
	}
//#--------------------------------------------	

}
