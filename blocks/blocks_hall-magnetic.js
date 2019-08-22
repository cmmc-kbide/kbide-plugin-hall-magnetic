Blockly.Blocks['hall_magnetic_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HALL MAGNETIC");
    this.appendValueInput("HALL_MAGNETIC_SENSOR_PIN")
        .setCheck("Number")
        .appendField("SENSOR PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};