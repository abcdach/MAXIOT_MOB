
var def_SCRIPT =
'\
..	->[w],1\
..  header,1,Main\
..  navbar,1,--Main(page_1)--Options(page_2)--Device(page_3)\
..	<-[w]\
..	->[w],2\
..  header,2,Options\
..  navbar,2,--Main(page_1)--Options(page_2)--Device(page_3)\
..  ->[c],Connection Config\
..  	label,Host Name:\
..  	input_text(IT2_1),http://maxh6/ \
..  	label,Port:\
..  	input_text(IT2_2),3004\
..  	label,Device ID:\
..  	input_text(IT2_3),1655\
..  	label,Device Name:\
..  	input_text(IT2_5),Mob_Test\
..  	##,2 \
..  	button(BU2_1),Save, SYS_LOOP_START(); \
..  	button(BU2_2),Connect, Out_0("OK"); \
..  <-[c]\
..  <-[w]\
';

var ggg = 
'\
..	->[w],1\
..  button(xxBU1),OK, Page_change("page_3");\
..  label,This is a label\
..  ->[c],checkbox\
..  ->[c],checkbox\
..  	checkbox,h,--A(a)--B(b)--C(c)--D(d)--E(e),Out_0(Value);\
..  	checkbox,v,--A(a)--B(b)--C(c)--D(d)--E(e),Out_0(Value);\
..  <-[c]\
..  ->[c],Radio (Theme Change)\
..  	radio,h,--A(a)--B(b)--C(c)--D(d)--E(e),Theme_Change(Value);\
..  	radio,v,--A(a)--B(b)--C(c)--D(d)--E(e),Theme_Change(Value);\
..  <-[c]\
..  ->[p](PAN0_1)\
..  	->[c],Connection Config\
..  		label,Host Name:\
..  		input_text(IT1_1),http://maxh6/ \
..  		label,Port:\
..  		input_text(IT1_2),3004\
..  		label,Device ID:\
..  		input_text(IT1_3),1655\
..  		label,Device Name:\
..  		input_text(IT1_5),Mob_Test\
..  		##,2 \
..  		button(BU1_1),Save, Out_0("OK"); \
..  		button(BU1_2),Connect, Out_0("OK"); \
..  	<-[c]\
..  <-[p]\
..  ->[c],123 \
..  	##,2 \
..  	button(BU1),OK, Out_0("OK"); \
..  	select(SE1),\
--  	მერსედესი(1) --  ტოიოტა  (2) \
--  	ბენტლი  (3) --  ფერარი  (4) \
--  	გოლფი  (5) --  სიტროენი (6) ,Out_0(Value);\
..  	flip(f1),on(1),off(0),Out_0(Value);\
..  	label,This is a slaider\
..  	slider(SL1),0,150,10,Out_0(Value);\
..  <-[c]\
..  ->[c],Input \
..  	input_password(IP1),1234\
..  	##,2 .. input_text(IT1),რაიმე ტექსტი .. input_text(IT2)\
..  	button,input to input, Put_Input("IT2",Get_Input("IT1")); \
..  	button,To OutPut, Out_0(Get_Input("IT1")); \
..  <-[c]\
..  <-[c]\
..  button,panel open, Panel_Open("PAN1"); \
..  ->[p](PAN1)\
..  	label,ეს არის დაგენირებული პანელი\
..  	slider(SL1),0,150,10,Out_0(Value);\
..  <-[p]\
..  ->[c],tab\
..  	->[t](TAB_1),v,--name1(val1)--name2(val2)--name3(val3)\
..  		->[d](val1)\
..				label, \
..  			info,1,სათაური 1,\
MAXIOT სისტემის\ ყველა ძირითადი პროგრამული \
მოდულები დაწერილია ისე, \
რომ სრულფასოვნად გაეშვას ისეთი მიკროკომპიუტერებზე, როგორიც\
..			<-[d]\
..  		->[d](val2)\
..				label, \
..  			info,2,სათაური 2, MAXIOT სისტემის ყველა ძირითადი პროგრამული მოდულები დაწერილია ისე, რომ სრულფასოვნად გაეშვას ისეთი მიკროკომპიუტერებზე, როგორიც\
..			<-[d]\
..  		->[d](val3)\
..				label, \
..  			info,3,სათაური 3, MAXIOT სისტემის ყველა ძირითადი პროგრამული მოდულები დაწერილია ისე, რომ სრულფასოვნად გაეშვას ისეთი მიკროკომპიუტერებზე, როგორიც\
..			<-[d]\
..		<-[t]\
..  <-[c]\
..  <-[w]\
..  ';









//..  ->[w],1\
//..  header,1,text\
//..  navbar,1,--name1(href1)--name2(href2)\


//..  checkbox,v,--name1(val1)--name2(val2)--name3(val3),Out_0(Value);\ 	//.. checkbox,v, .. checkbox,h,
//..  radio,v,--name1(val1)--name2(val2)--name3(val3),Out_0(Value);\ 	//.. radio,v, .. radio,h,
//..  select(SE1),--name1(1)--name2(2),Out_0(Value);\
//..  slider(SL1),0,150,10,Out_0(Value);\									//..  slider(ID),MIN,MAX,STEP,JAVA;
//..  button(BU1),name,Out_0(Value);\
//..  flip(FL1),on(1),off(0),Out_0(Value);\
//..  input_password(IP1),text\
//..  input_text(IT1),text\
//..  label(LB1),text\
//..  ##,2\ ..##,3\	..##,4\	..##,5\								//grid
//..  ->[c],name\												//collapsible start
//..  <-[c]\													//collapsible stop 
//..  ->[p](PAN1)\												//panel start java[ Panel_Open("ID"); ]
//..  <-[p]\													//panel stop
//..  ->[t](TAB_1),v,--name1(val1)--name2(val2)--name3(val3)
//..  <-[t]
//..  ->[d](PAN1)
//..  <-[d]
//..  event,In_0,Out_0(Value);\

//  Put_Input("ID","text");		// input_text, input_password
//  Get_Input("ID");			// input_text, input_password
// 	Put_Slider("ID","text");	// slider
// 	Get_Slider("ID");			// slider
//  Put_Header(1,"Header")		// Put_Header(is_Page,is_Text)
//  Panel_Open("ID");			// ->[p](ID)\
//  Theme_Change(is_Theme);		// is_Theme = a, b, c, d, e
//  Dispatch_Event(is_Name, is_Data)















