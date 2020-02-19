



Blockly.Blocks['j_out'] = {
  init: function() {
    this.appendValueInput("Vel")
        .setCheck(null)
        .appendField("OUT")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), "OUT_ID")
        .appendField("=");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['j_out'] = function(block) {
  var dropdown_out_id = block.getFieldValue('OUT_ID');
  var value_vel = Blockly.JavaScript.valueToCode(block, 'Vel', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'OUT_'+dropdown_out_id+'('+value_vel+'); ';
  return code;
};

//#####################################################################
//# 
//#####################################################################
Blockly.Blocks['j_java'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Java");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['j_java'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name;
  return code;
};

//#####################################################################
//# Slider
//#####################################################################

//#####################################################################
//# 
//#####################################################################


