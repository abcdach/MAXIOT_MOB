
var def_SCRIPT =
'\
..	page,1\
..  header,is header 1\
..  navbar,--საწყისი(popupLogin)--2(xx1)--3(PAN1)--ტესტ(PAN_0)\
..  [>](PAN_0)\
..  >>,Connection Config\
..  label,Host Name:\
..  input_text(IT0_1),http://maxh6/ \
..  label, Port:\
..  input_text(IT0_2),3004\
..  label,Device ID:\
..  input_text(IT0_3),1655\
..  label,Device Name:\
..  input_text(IT0_5),Mob_Test\
..  ##,2 \
..  button(BU0_1),Save, Out_0("OK"); \
..  button(BU0_2),Connect, Out_0("OK"); \
..  <<\
..  [<]\
';

var ggg = 
'\
..	page,1\
..  label,This is a label\
..  >>,123 \
..  ##,2 \
..  button(BU1),OK, Out_0("OK"); \
..  select(SE1),\
--  მერსედესი(1) --  ტოიოტა  (2) \
--  ბენტლი  (3) --  ფერარი  (4) \
--  გოლფი  (5) --  სიტროენი (6) ,Out_0(Value);\
..  flip(f1),on(1),off(0),Out_0(Value);\
..  <<\
..  #label,This is a slaider\
..  #slider(SL1),0,150,10,Out_0(Value);\
..  >>,Input \
..  input_password(IP1),1234\
..  ##,2 .. input_text(IT1),რაიმე ტექსტი .. input_text(IT2)\
..  button,input to input, Put_Input("IT2",Get_Input("IT1")); \
..  button,To OutPut, Out_0(Get_Input("IT1")); \
..  <<\
..  button,panel open, Panel_Open("PAN1"); \
..  [>](PAN1)\
..  label,ეს არის დაგენირებული პანელი\
..  slider(SL1),0,150,10,Out_0(Value);\
..  [<]\
..  +>\
..  button,ნინო\
..  button,ნინო\
..  +>\
..  ';



//..  page,1\
//..  header,text\
//..  navbar,--name1(href1)--name2(href2)\
//..  select(SE1),--name1(1)--name2(2),Out_0(Value);\
//..  slider(SL1),0,150,10,Out_0(Value);\					//..  slider(ID),MIN,MAX,STEP,JAVA;
//..  button(BU1),name,Out_0(Value);\
//..  flip(FL1),on(1),off(0),Out_0(Value);\
//..  input_password(IP1),text\
//..  input_text(IT1),text\
//..  label(LB1),text\
//..  ##,2\ ..##,3\	..##,4\	..##,5\		//grid
//..  >>,name\							//collapsible start
//..  <<\								//collapsible stop 
//..  [>](PAN1)\						//panel start java[ Panel_Open("ID"); ]
//..  [<]\								//panel stop

//  Put_Input("ID","text");		// input_text, input_password
//  Get_Input("ID");			// input_text, input_password
// 	Put_Slider("ID","text");	// slider
// 	Get_Slider("ID");			// slider
//  Put_Header(1,"Header")		// Put_Header(is_Page,is_Text)
//  Panel_Open("ID");			// [>]

















