"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var edge_js_1 = __importDefault(require("edge-js"));
try {
    console.log('Invoke =>');
    var method = edge_js_1.default.func({
        assemblyFile: '/Users/mattraffel/src/temp/node-cs-interop/service/lib.dll',
        typeName: 'lib.Startup',
    });
    var result = method(undefined, true);
    console.log("result: " + result);
}
catch (e) {
    console.log("exception " + JSON.stringify(e));
}
try {
    console.log('Return9 =>');
    var method = edge_js_1.default.func({
        assemblyFile: '/Users/mattraffel/src/temp/node-cs-interop/service/lib.dll',
        typeName: 'lib.Startup',
        methodName: 'Return9' // This must be Func<object,Task<object>>
    });
    var result = method({}, true);
    console.log("result: " + result);
}
catch (e) {
    console.log("exception " + JSON.stringify(e));
}
try {
    console.log('ReturnNumbers =>');
    var method = edge_js_1.default.func({
        assemblyFile: '/Users/mattraffel/src/temp/node-cs-interop/service/lib.dll',
        typeName: 'lib.Startup',
        methodName: 'ReturnNumbers' // This must be Func<object,Task<object>>
    });
    var result = method(4, true);
    // const result = method(4, (error, result) =>  {
    //     console.log(`error is ${error}`);
    //     return result;
    // });
    console.log("result: " + result);
}
catch (e) {
    console.log("exception " + JSON.stringify(e));
}
