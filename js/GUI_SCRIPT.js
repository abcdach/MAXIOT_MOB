

var ggg = 
'\
..  header,This is a header\
..  >>,123 \
..  ##,2 \
..  button(BU1),OK, Out_0("OK"); \
..  select(SE1),\
--  მერსედესი(1) --  ტოიოტა  (2) \
--  ბენტლი  (3) --  ფერარი  (4) \
--  გოლფი  (5) --  სიტროენი (6) ,Out_0(Value);\
..  flip(f1),on(1),off(0),Out_0(Value);\
..  <<\
..  #header,This is a slaider\
..  #slider(SL1),0,150,10,Out_0(Value);\
..  >>,Input \
..  input_password(IP1),1234\
..  ##,2 \
..  input_text(IT1),რაიმე ტექსტი\
..  input_text(IT2)\
..  button,input to input, Put_Input("IT2",Get_Input("IT1")); \
..  button,To OutPut, Out_0(Get_Input("IT1")); \
..  <<'