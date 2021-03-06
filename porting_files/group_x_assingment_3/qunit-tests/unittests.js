/**
 *  unittests.js
 *
 *  Unit tests without QUnit.
 *
 *  We will test that the emulator is initialized with the correct values
 *  and that applications are able to map their own keys and add
 *  game objects correctly.
 *
 *  Authors: [[REDACTED]]
 *
 *
 *  Version: 1.0.0
 *  Language: JavaScript
 *  Dependencies: jQuery version 1.11.1
 *
 *
 * */

/**
 * totalResults records the total number of tests
 * and total number of test failures.
 * */
var totalResults = {
    total : 0,
    bad : 0
}

/**
 * Records the number of correct key presses
 * */
var keyPressedResults = {
    total: 0,
    bad : 0
}

/**
 * Records the number of successfully initialized GameObjects
 * */
var gameObjectResults = {
    total : 0,
    bad : 0
}


// create a key event
var keyboardEvent = document.createEvent("KeyboardEvent");
 Object.defineProperty(keyboardEvent, 'keyCode', {
        get : function() {
          return this.keyCodeVal;
        }
      });

      Object.defineProperty(keyboardEvent, 'which', {
        get : function() {
          return this.keyCodeVal;
        }
      });

var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
 keyboardEvent[initMethod](
        "keydown", // event type : keydown, keyup, keypress
        true, // bubbles
        true, // cancelable
        window, // viewArg: should be window
        false, // ctrlKeyArg
        false, // altKeyArg
        false, // shiftKeyArg
        false, // metaKeyArg
        0, // keyCodeArg : unsigned long the virtual key code, else 0
        0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
    );

var KEY_FLAG = false; // indicates a key press
// make a mock key handling function
// updates mock game object's position
// sets KEY_FLAG to true if successful
function keyLogic() {
    KEY_FLAG = true;
    if (RIGHT_KEY) {
        mock.x++;
    }
    if (LEFT_KEY) {
        mock.x--;
    }
    if (UP_KEY) {
        mock.y++;
    }
    if (DOWN_KEY) {
        mock.y--;
    }
    // console.log("STATES: right: " + RIGHT_KEY 
    //     + " left: " + LEFT_KEY 
    //     + " up: " + UP_KEY 
    //     + " down: " + DOWN_KEY);
    // console.log(mock);
    resetKeys();
}
// setup emulator
initialize(keyLogic);
// make a mock gameObject to test keyLogic()
var mock = addResource("mock", 0, 0, "mock.png");


/**
 * Testing key maps that aren't directional buttons or the spacebar.
 * Checks if custom key has been added to the keymap.
 * */
function customKeyMappingTest (keyName, keyCode) {
    keyPressedResults.total++;
    var mappedKey = mapKey(keyName, keyCode);
    if (keymap[keyName] != mappedKey) {
        console.log("Failed to map " + keyName + " to " + keyCode + " key code" );
        console.log(keymap[keyName] + " is not " + mappedKey);
        keyPressedResults.bad++;
    } else {
        console.log("Passed: " + keyName + " mapped to " + keyCode + " key code" );
    }
}

/**
 * Testing custom directional buttons, and spacebar.
 * Checks if the keymap reflects new keycode.
 * */
function defaultKeyRemapTest (keyName, keyCode, expectedCode) {
    keyPressedResults.total++;
    mapKey(keyName, keyCode);
    if (keymap[keyName].code != expectedCode){
        console.log("Failed to remap " + keyName + " to " + keyCode + " key code" );
        console.log(keymap[keyName].code + " is not " + keyCode + " key code");
        keyPressedResults.bad++;
    } else {
        console.log("Passed: " + keyName + " mapped to " + keyCode + " key code" );
    }
}

/**
 * Checks the key presses are using user mapped key logic.
 * */
function keyPressedTest (keyName) {
    keyPressedResults.total++;
    // simulate a key press
    keyboardEvent.keyCodeVal = keymap[keyName].code; 
    document.dispatchEvent(keyboardEvent);
    // event listener should switch on one of the keys so check them all
    keymap.forEach(function (kObj) {
        if (kObj.pressed) {
            KEY_FLAG = true;
        }
    });
    if (!KEY_FLAG) {
        console.log("Failed to raise key event when pressing " + keyName);
        console.log("Code: " + keyboardEvent.keyCode);
        keyPressedResults.bad++;
    } else {
        console.log("Passed: raised key event " + KEY_FLAG);
    }
    KEY_FLAG = false; // turn off the flag
    resetKeys();
}

/**
 * Checks that the application and emulator hold references to the same game object.
 * */
function gameObjectInitializationTest (objName, objX, objY, objFile) {
    gameObjectResults.total++;
    var testObj = addResource(objName, objX, objY, objFile);
    if (testObj != images[objName]) {
        gameObjectResults.bad++;
        console.log("Failed to add " + objName + " emulator resources");
        console.log("Emulator images: " + images);
    } else {
        console.log("Passed: Initialized " + objName);
    }
}

/**
 * Check that game objects respond to user-mapped key handling logic
 * */
function gameObjectMovementTest(dir, expectedX, expectedY) {
    // simulate a keyPress
    keyPressedResults.total++;
   // simulate a key press
    keyboardEvent.keyCodeVal = keymap[dir].code;
    
    document.dispatchEvent(keyboardEvent);

    gameObjectResults.total++;
    if (mock.x != expectedX || mock.y != expectedY){
        gameObjectResults.bad++;
        console.log(keyboardEvent + " " + keyboardEvent.which);
        console.log("mock: " + mock);
        console.log("Failed to register movement in the " + dir + " direction");
        console.log("Mock object x-coordinate  " + mock.x + " is expected to be " + expectedX);
        console.log("Mock object y-coordinate  " + mock.y + " is expected to be " + expectedY);
    } else {
        console.log("Passed: movement to " + dir);
    }
    // reset the mock object
    mock.x = 0;
    mock.y = 0;
    resetImages();
}


/**
*
*  UNIT TESTS
*
* */

// test keymaps upon emulator construction
console.log("Testing key input");
console.log();
console.log("Testing default key remapping");
console.log("-----------------------------");
defaultKeyRemapTest("left", 1, 1);
defaultKeyRemapTest("right", 1, 1);
defaultKeyRemapTest("down", 1, 1);
defaultKeyRemapTest("up", 1, 1);
defaultKeyRemapTest("spacebar", 1, 1);


console.log();
console.log("Testing custom key mapping");
console.log("-----------------------------");
customKeyMappingTest("shoot", 65);
customKeyMappingTest("specialMove", 67);
customKeyMappingTest("hide", 68);
customKeyMappingTest("crouch", 69);
resetEmulator();

console.log();
console.log("Testing key presses");
console.log("-----------------------------");
// test key presses
keyPressedTest("left");
keyPressedTest("right");
keyPressedTest("down");
keyPressedTest("up");
keyPressedTest("spacebar");

console.log("\n")
console.log("Testing game objects");
console.log("Testing game object movement");
console.log("-----------------------------");
// test game object movement
resetKeys();
resetImages();
gameObjectMovementTest("left", -1, 0);
gameObjectMovementTest("right", 1, 0);
gameObjectMovementTest("up", 0, 1);
gameObjectMovementTest("down", 0, -1);

console.log();
console.log("Testing game object initialization");
console.log("-----------------------------");
// test game object initialization
gameObjectInitializationTest("sora", 0, 0, "mock.png");
gameObjectInitializationTest("riku", 10, 10, "mock.png");
gameObjectInitializationTest("kairi", 300, 300, "mock.png");


console.log("Results summary");
console.log("-----------------------------");
// total results
totalResults.total = keyPressedResults.total + gameObjectResults.total;
totalResults.bad = keyPressedResults.bad + gameObjectResults.bad;

// Display all results
console.log("Of " + keyPressedResults.total + " KeyObject tests, "  +
(keyPressedResults.total - keyPressedResults.bad) + " passed, " + + keyPressedResults.bad + " failed. ");
console.log("Of " + gameObjectResults.total + " GameObject tests, " +
(gameObjectResults.total - gameObjectResults.bad) + " passed, " + + gameObjectResults.bad + " failed.");
console.log("Of " + totalResults.total + " total Emulator tests, " +
(totalResults.total - totalResults.bad) + " passed, " + totalResults.bad + " failed.");
