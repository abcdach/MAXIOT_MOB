

//-----------------------------------------------
//
//
//
//-----------------------------------------------

Blockly.Blocks['xButton'] = {
  init: function() {
    this.appendValueInput("Name")
        .setCheck("String")
        .appendField("Button");
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

Blockly.JavaScript['xButton'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'Name', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_execute = Blockly.JavaScript.statementToCode(block, 'Execute');
  // TODO: Assemble JavaScript into code variable.
  

  value_name = value_name.slice(1,-1);
  var code = '..button,'+value_name+','+statements_execute+'\n';

  return code;
};







