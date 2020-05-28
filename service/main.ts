import ffi from 'ffi';
import ref from 'ref';
const int = ref.types.int;

console.log('starting up');


const testPlugin = ffi.Library(
    './lib.dll',
    {
        add: [int, [int, int]],
    },
);

console.log(`calling testPlugin.add(2,2)`);
const result = testPlugin.add(2,2);
console.log(`got back ${result}`);
