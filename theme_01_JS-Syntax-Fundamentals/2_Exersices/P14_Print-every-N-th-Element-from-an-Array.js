function solve(array, step) {
    let result = [];
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }

    // console.log(`[${result.join('\n')}]`);
    return result;
}



solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);

// solve(['dsa',
//     'asd',
//     'test',
//     'tset'],
//     2
// );

// solve(['1',
//     '2',
//     '3',
//     '4',
//     '5'],
//     6
// );