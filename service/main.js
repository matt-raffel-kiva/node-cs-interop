"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var edge_js_1 = __importDefault(require("edge-js"));
try {
    console.log('Invoke default =>');
    var method = edge_js_1.default.func({
        assemblyFile: '../lib/bin/Debug/netstandard2.0/lib.dll',
        typeName: 'lib.Startup',
    });
    var result = method(undefined, true);
    console.log("result: " + result);
}
catch (e) {
    console.log("exception " + JSON.stringify(e));
}
// try {
//     console.log('Return9 =>');
//     const method = edge.func({
//         assemblyFile: '/Users/mattraffel/src/temp/node-cs-interop/service/lib.dll',
//         typeName: 'lib.Startup',
//         methodName: 'Return9' // This must be Func<object,Task<object>>
//     });
//
//     const result = method({}, true);
//     console.log(`result: ${result}`);
// } catch (e) {
//     console.log(`exception ${JSON.stringify(e)}`);
// }
//
try {
    console.log('Can pass in data  =>');
    var method = edge_js_1.default.func({
        assemblyFile: '../lib/bin/Debug/netstandard2.0/lib.dll',
        typeName: 'lib.Startup',
        methodName: 'ReturnNumbers' // This must be Func<object,Task<object>>
    });
    var result = method(4, true);
    console.log("result: " + result);
}
catch (e) {
    console.log("exception " + JSON.stringify(e));
}
try {
    console.log('Can get json object back =>');
    var method = edge_js_1.default.func({
        assemblyFile: '../lib/bin/Debug/netstandard2.0/lib.dll',
        typeName: 'lib.Startup',
        methodName: 'SomeMixedData' // This must be Func<object,Task<object>>
    });
    var result = method({}, true);
    console.log("result: " + JSON.parse(result).name);
}
catch (e) {
    console.log("exception " + JSON.stringify(e));
}
