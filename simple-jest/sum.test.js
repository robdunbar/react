const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Test Name', () => {
    expect(sum(undefined, null).toBe(undefined));
})