/* Tests for 345 Assignment: Rory Mearns (ID.3928873) */

test("New queue is empty", function() {
	ok(Queue, "Queue function exists");
	var testQueue = new Queue();
	ok(testQueue.isEmpty(), "A new queue is empty");
})

test("New queue has length of 0", function() {
	var testQueue = new Queue();
	equal(testQueue.length(), 0, "A new queue will have a length of 0");
})

test("A queue is 'not empty' after enqueue", function() {
	var testQueue = new Queue();
	testQueue.enqueue("bananas");
	notOk(testQueue.isEmpty(), "A queue is not empty after an item is enqueued");
})

test("A queue with 1 item has a 'length' of 1", function() {
	var testQueue = new Queue();
	testQueue.enqueue("bananas");
	equal(testQueue.length(), 1, "A queue with 1 item has a length of 1");
})

test("Queue peeking returns the head of the queue", function() {
	var testQueue = new Queue();
	testQueue.enqueue("bananas");
	testQueue.enqueue("apples");
	ok(testQueue.peek() === "bananas", "Peeking returns item in head of queue");
})

test("Dequeue returns the head of a queue", function() {
	var testQueue = new Queue();
	testQueue.enqueue("bananas");
	testQueue.enqueue("apples");
	ok(testQueue.dequeue() === "bananas", "Dequeue returns item at head of queue");
})

test("A queue is empty after the last item has been dequeued", function() {
	var testQueue = new Queue();
	testQueue.enqueue("bananas");
	testQueue.enqueue("apples");
	testQueue.dequeue();
	testQueue.dequeue();
	ok(testQueue.isEmpty(), "Queue is empty after last item is dequeued");
})

test("New Queue has length of 0", function() {
	var testQueue = new Queue();
	ok(testQueue.dequeue() === undefined, "Trying to dequeue an empty queue returns 'undefined'")
})

test("Day Shortener Function Tests", function() {
	ok(shortenDay("tuesday") === "Tues", "'tuesday' shortened to 'Tues'");
	ok(shortenDay("Tuesday") === "Tues", "'Tuesday' shortened to 'Tues'");
	ok(shortenDay("TUESDAY") === "Tues", "'TUESDAY' shortened to 'Tues'");
})

test("Day Shortener Function Tests", function() {
	ok(shortenDay(days[2]) === "Tues", "'days[1]' is shortened to 'Tues'");
})

test("Sail Size Setter", function() {
	equal(sailSizeSetter(24,30), 4.2, "Given the wind range of 24-30 the sail size should be 4.2");
})

test("Day Compressor", function() {
	var day0 = dayCompress(0);
	ok(Object.prototype.toString.call(day0) === '[object Array]', "dayCompress function returns an array");
})

test("Capitalize First Letter", function(assert) {
	assert.deepEqual(capitalizeFirstLetter("tuesday"), "Tuesday", "The first letter is capitalized");
})

test("Time advancing feature", function(assert) {
	assert.deepEqual(timePlusX, 0, "At the beginning timePlusX is 0");
	main();
	assert.deepEqual(daysFastFoward, 0, "At the beginning daysFastFoward is 0");
})

test("Raw weather data is paarsed into the local weather object", function(assert) {
	main();
	ok(weather.day0.windLower != '', "Some value has been assigned to windLower");
	ok(weather.day0.windUpper != '', "Some value has been assigned to windUpper");
	ok(weather.day0.windDir != '', "Some value has been assigned to windDir");
	ok(weather.day0.temp != '', "Some value has been assigned to temp");
	ok(weather.day0.sailSize != '', "Some value has been assigned to sailSize");
	ok(weather.day0.outlook != '', "Some value has been assigned to outlook");
	ok(weather.day0.icon != '', "Some value has been assigned to icon");
	ok(weather.day0.dname != '', "Some value has been assigned to dname");
})

