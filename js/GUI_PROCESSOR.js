



function GUI_Processor(isDATA){

	var isCODE = isDATA.replace(/(\r\n|\n|\r)/gm, "");
		isCODE = isDATA.replace(/(")/gm, "'");
		isCODE = isCODE.split('..')
		

	console.log(isCODE);	
		
		
	var Conf = isCODE;

	
	var Conf_Len = Conf.length;
	
	
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
	
	
	
	var isDataRole = 'content_1'
	
	var i,b; 
	var select = ""; var select_id = ""
	var p=['','','','','','','','','','','','','','','','','','',''];
	
	
	for (i = 0; i < Conf_Len; i++) {
		var Conf_Spl = Conf[i].split(',');
		var Conf_Spl_Len = Conf_Spl.length;
		
		//console.log("Conf_Spl -> " + Conf_Spl);
		//console.log("[0] : " + Conf_Spl[0]);
		//console.log("[0] : " + Conf_Spl[1]);
		//console.log("[0] : " + Conf_Spl[2]);
		//console.log("[0] : " + Conf_Spl[3]);
		
		
		var isID  = "E"+i;
		var isCMD = Conf_Spl[0].trim();
		var isTemp2 = isCMD.split('(');
		if(isTemp2.length > 1){
			isCMD = isTemp2[0].trim();
			var isTemp4 = isTemp2[1].split(')');
			isID = isTemp4[0].trim();
		}
		
		console.log("CMD : "+isCMD+"("+isID+")");

		isHTML = '';

		if(grid_start===1){		
			if(grid_cou === 1){isHTML += '<div class="ui-block-a">'; grid_add = 1;}
			if(grid_cou === 2){isHTML += '<div class="ui-block-b">'; grid_add = 1;}
			if(grid_cou === 3){isHTML += '<div class="ui-block-c">'; grid_add = 1;}
			if(grid_cou === 4){isHTML += '<div class="ui-block-d">'; grid_add = 1;}
			if(grid_cou === 5){isHTML += '<div class="ui-block-e">'; grid_add = 1;}
		}

		switch(isCMD) {
		
		
		
			case "page":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="1";
				isPage = p[1];
				break;	

			case "header":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="Header"+isPage;
				$("#page_"+isPage+" h3 #MyHeader_Text").text(p[1]);
				
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

		
			case ">>":
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim(); else p[1]="collapsible";	//on
				isHTML += '<div data-role="collapsible" class="ui-nodisc-icon ui-alt-icon">';
				isHTML += '<h4>'+p[1]+'</h4>';
				collapsible_status = 1;
				break;				
			case "<<":
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
			
				isHTML_NAVBAR = '<ul>';
				
				if(Conf_Spl_Len >= 2)p[1]=Conf_Spl[1].trim();
				//if(Conf_Spl_Len >= 3)p[2]=Conf_Spl[2].trim();
				
				//List
				var pT = p[1].split('--');
				for (b = 0; b < pT.length; b++){
					pT[b] = pT[b].trim();
					if(pT[b]!==""){
						var pTT=pT[b].split('(');
						if(pTT.length === 2){
							var pT0 = pTT[0].trim();
							var pT1 = pTT[1].replace(/(\))/gm, "").trim();
							isHTML_NAVBAR += '<li><a href="#'+pT1+'" id="'+isID+'_'+b+'">'+pT0+'</a></li>';
							//isHTML += '<option value="'+pT1+'">'+pT0+'</option>';
							//console.log("[" + pT0 + "]["+ pT1 + "]");
						}
					}
				}isHTML_NAVBAR += '</ul>';			
				$('[data-role="navbar_'+isPage+'"]').append(isHTML_NAVBAR);
				//console.log(isHTML_NAVBAR);
				//java Script
				//var Lim = 3;
				//if(Conf_Spl_Len > Lim){
					//for (b = Lim; b < Conf_Spl_Len; b++){
						//p[Lim-1]+=','+Conf_Spl[b];
					//}
				//}
				//isJAVA += JAVA_Select_Change(isID,p[2]);
				break;	


			case "[>]":
				isHTML += '<div data-role="panel" id="'+isID+'" data-position="left" data-display="reveal">';
				panel_status = 1;
				break;

			case "[<]":
				isHTML += '</div>';
				panel_status = 0;
				break;
						
			case "+>":
				isHTML += '<div class="ui-corner-all custom-corners">';
				break;

			case "<+":
				isHTML += '</div>';
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

		
		if( panel_status === 1)
		{ 
			isHTML_PANEL += isHTML;
		}
		else
		{
			isHTML_CONTENT += isHTML;
		}
		isHTML='';

	}
	
	
	
	var HHH = '<div data-role="header">';
	 HHH += '\n'+ '<h3><span id="MyHeader_Text">შუშაბანდის განათების მართვა</span></h3>'; 
		 HHH += '\n'+ '<div data-role="navbar">';
			 HHH += '\n'+ '<ul>';
				 HHH += '\n'+ '<li><a href="#" id="start_page2">საწყისი</a></li>';
				 HHH += '\n'+ '<li><a href="#" id="server_Disconnect">.</a></li>';
				 HHH += '\n'+ '<li><a href="#" id="theme_Day" >.</a></li>';
				 HHH += '\n'+ '<li><a href="#" id="theme_Night" >.</a></li>';
				 HHH += '\n'+ '<li><a href="#" id="theme_Night" >.</a></li>';
			 HHH += '\n'+ '</ul>';
		 HHH += '\n'+ '</div>';
	 HHH += '\n'+ '</div><!-- /header -->';
	
	
	//isHTML = HHH + isHTML;
	
	$('[data-role="content_'+isPage+'"]').append(isHTML_CONTENT);
	$('[data-role="panel_'+isPage+'"]').append(isHTML_PANEL);
	
	
	JAVA_APPEND("page_"+isPage,"content_"+isPage,isJAVA);
//#--------------------------------------------	

}