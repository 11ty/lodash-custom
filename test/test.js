const test = require("ava");
const lodash = require("../")

test("get", t => {
	t.is(lodash.get({ mine: 1 }, "mine"), 1);
});

test("set", t => {
	let obj = { mine: 1 };
	lodash.set(obj, "mine", 2)
	t.is(obj.mine, 2);
});

test("chunk", t => {
	// taken from the docs https://lodash.com/docs/4.17.15#chunk
	t.deepEqual(lodash.chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]);
});