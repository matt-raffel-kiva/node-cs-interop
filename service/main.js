"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ffi_1 = __importDefault(require("ffi"));
var ref_1 = __importDefault(require("ref"));
var int = ref_1.default.types.int;
console.log('starting up');
var testPlugin = ffi_1.default.Library('./lib.dll', {
    add: [int, [int, int]],
});
console.log("calling testPlugin.add(2,2)");
var result = testPlugin.add(2, 2);
console.log("got back " + result);
