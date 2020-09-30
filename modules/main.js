import {un, PI} from "./moduleOne.js";
import * as module2 from "./moduleTwo.js";

un();
console.log(PI);

module2.quatres();
let obj = new module2.UneClasse("Sasuke");
console.log(obj);