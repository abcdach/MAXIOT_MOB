

//-----------------------------------------------
//
//
//
//-----------------------------------------------

Blockly.Blocks['xSlider'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Slider");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendValueInput("Min")
        .setCheck("Number")
        .appendField("Min");
    this.appendValueInput("Max")
        .setCheck("Number")
        .appendField("Max");
    this.appendValueInput("Step")
        .setCheck("Number")
        .appendField("Step");
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

Blockly.JavaScript['xSlider'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var value_min = Blockly.JavaScript.valueToCode(block, 'Min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'Max', Blockly.JavaScript.ORDER_ATOMIC);
  var value_step = Blockly.JavaScript.valueToCode(block, 'Step', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_execute = Blockly.JavaScript.statementToCode(block, 'Execute');
  // TODO: Assemble JavaScript into code variable.
  var code = '..slider,'+value_min+','+value_max+','+value_step+','+statements_execute+'\n';
  return code;
};
