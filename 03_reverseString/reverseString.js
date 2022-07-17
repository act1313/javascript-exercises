const reverseString = function(string) {
    let returnState = "";
    for (let i = string.length - 1; i >= 0; i--) {
        returnState += string[i];
    }
    return returnState;
};

// Do not edit below this line
module.exports = reverseString;
