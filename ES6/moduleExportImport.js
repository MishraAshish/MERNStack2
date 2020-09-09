//A Module is set of JavaScript functions written in a javasript file, and ultimately exported from there.

//Named Export
// exports a function declared earlier 
export { myFunction }; 
// exports a constant export 
const sqrt2 = Math.sqrt(2);

//Default Export
//Default exports (function):
export default function() {}

//Default exports (class):
export default class {}


//Imports

import defaultExport from "module-name or file2"; // -- Importing Default Object
import * as name from "module-name"; // -- Importing all sets as an Alias , //name.getUserName(), name.getUserAge()
import { class1, function1 } from "module-name";  //-- Importing a specific function
import { class1 as class1New } from "module-name";  //-- Importing Specific Function as Alias
import { class1 , class2,  function1,  function2 } from "module-name";  //-- Importing Multiple Functions