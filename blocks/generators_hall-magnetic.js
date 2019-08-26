Blockly.JavaScript['hall_magnetic_block'] = function(block) {
  var value_hall_magneti = Blockly.JavaScript.valueToCode(block, 'HALL_MAGNETI', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `analogRead(${value_hall_magneti})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript["adc_pin_dummy_input_esp32"] = function (block) {
  let dropdown_name = block.getFieldValue("PIN");
  let code = `${dropdown_name}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript["adc_pin_dummy_input_arduino"] = function (block) {
  let dropdown_name = block.getFieldValue("PINAR");
  let code = `${dropdown_name}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};