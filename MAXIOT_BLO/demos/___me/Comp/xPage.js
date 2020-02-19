

//-----------------------------------------------
//
//
//
//-----------------------------------------------
Blockly.Blocks['xpage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Page")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "NAME");
    this.appendStatementInput("Script")
        .setCheck(null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['xpage'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_script = Blockly.JavaScript.statementToCode(block, 'Script');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
