

//-----------------------------------------------
//
//
//
//-----------------------------------------------

Blockly.Blocks['xbutton'] = {
  init: function() {
    this.appendValueInput("ID")
        .setCheck("String")
        .appendField("Button    ID");
    this.appendValueInput("Name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Text");
    this.appendStatementInput("Execute")
        .setCheck(null)
        .appendField("Execute");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['xbutton'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'Name', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_execute = Blockly.JavaScript.statementToCode(block, 'Execute');
  // TODO: Assemble JavaScript into code variable.
  if(value_id!==""){value_id = '('+value_id.slice(1,-1)+')';}else{value_id = "";}
  value_name = value_name.slice(1,-1);
  var code = '..button'+value_id+','+value_name+','+statements_execute+'\n';
  return code;
};








