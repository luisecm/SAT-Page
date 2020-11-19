/*color: rgb(84, 84, 84); background-color: white; border-width: 1px; border-style: solid; height: 70px; width: 14%; padding-left: 5px; font-size: small;
Exito compa + TR: 3 TD: 1
color: rgb(84, 84, 84); background-color: white; border-width: 1px; border-style: solid; height: 70px; width: 14%; padding-left: 5px; font-size: small;
Exito compa + TR: 4 TD: 2
color: rgb(84, 84, 84); background-color: white; border-width: 1px; border-style: solid; height: 70px; width: 14%; padding-left: 5px; font-size: small;
Exito compa + TR: 5 TD: 3
color: rgb(84, 84, 84); background-color: rgb(242, 222, 222); border-color: rgb(208, 2, 27); border-width: 2px; border-style: solid; height: 70px; width: 14%; padding-left: 5px; font-size: small;
Exito compa + TR: 6 TD: 4
color: rgb(84, 84, 84); background-color: rgb(242, 222, 222); border-color: rgb(208, 2, 27); border-width: 2px; border-style: solid; height: 70px; width: 14%; padding-left: 5px; font-size: small;
Exito compa + TR: 7 TD: 5
Days available0
Days NOT available0*/

var tr_value = 3; //valores de TR van del 3 al 8 (uno y dos son únicamente elementos sin información)
var td_value = 1;

for (tr_value = 3; tr_value <= 8; tr_value++) {
  for (td_value = 1; td_value <= 7; td_value++) {
    console.log("Exito compa + TR: " + tr_value + " TD: " + td_value);
  };
};
