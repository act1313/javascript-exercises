const sumAll = function(num1, num2) {
    let num = 0;
    if (Math.sign(num1) == -1 || Math.sign(num2) == -1) {
        return "ERROR";
    }
    else if (typeof(num1) == "number" && typeof(num2) == "number") {
        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                num += i;
            }
            return num;
        }
        else {
            for (let i = num2; i <= num1; i++) {
                num += i;
            }
            return num;
        }
    }
    else {
        return "ERROR";
    }   
};

// Do not edit below this line
module.exports = sumAll;
