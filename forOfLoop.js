const map = new Map([
    [65, 'a'],
    [78, 'b'],
    [89, 'c']
]);

for (const pair of map) {
    console.log(pair);
    const [key, value] = pair;
    console.log(key, value);
}