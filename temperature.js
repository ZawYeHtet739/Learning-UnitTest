function getTempFromServer(path) {
    return null;
}

function getTemp() {
    return getTempFromServer("/path/to/api");
}

function testTemp() {
    var temp = getTemp();
    // debug log (test code)
    if (temp.degc > 32) print("Warning: High Temperature");
}

// Sub
function getTempSub() {
    console.log("Working with stub: getTemp()");
    return {
        degc: 24,
        degf: 45
    }
}

// Mock
function getTempMock(degc) {
    console.log("Working with mock: getTemp()");
    return {
        degc: degc,
        degf: Math.round((degc * (5 / 9) + 32))
    }
}