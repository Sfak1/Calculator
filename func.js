
function Time() {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
        document.write('Good morning')
    } else{
        document.write('Good afternoon')
    }
}
Time()
// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function FtoC(){
    var F = document.getElementById("result").value;
    var C=5*(F-32)/9;
    clearScreen();
    display(C);
}

function CtoF(){
    var C = document.getElementById("result").value;
    var F=(C*9)/5+32;
    clearScreen();
    display(F);
}
