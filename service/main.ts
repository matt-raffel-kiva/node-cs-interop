import edge from 'edge-js';


try {
    console.log('Invoke default =>');
    const method = edge.func({
        assemblyFile: '../lib/bin/Debug/netstandard2.0/lib.dll',
        typeName: 'lib.Startup',
    });

    const result = method(undefined, true);
    console.log(`result: ${result}`);
} catch (e) {
    console.log(`exception ${JSON.stringify(e)}`);
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
    const method = edge.func({
        assemblyFile: '../lib/bin/Debug/netstandard2.0/lib.dll',
        typeName: 'lib.Startup',
        methodName: 'ReturnNumbers' // This must be Func<object,Task<object>>
    });

    const result = method(4, true);
    console.log(`result: ${result}`);
} catch (e) {
    console.log(`exception ${JSON.stringify(e)}`);
}

try {
    console.log('Can get json object back =>');
    const method = edge.func<any, string>({
        assemblyFile: '../lib/bin/Debug/netstandard2.0/lib.dll',
        typeName: 'lib.Startup',
        methodName: 'SomeMixedData' // This must be Func<object,Task<object>>
    });

    const result = method({}, true);
    console.log(`result: ${JSON.parse(result).name}`);
} catch (e) {
    console.log(`exception ${JSON.stringify(e)}`);
}
