const input = document.getElementById("output")
document.getElementById("zero").addEventListener("click", function(){
    input.value += "0";
})
document.getElementById("one").addEventListener("click", function(){
    input.value += "1";
})
document.getElementById("two").addEventListener("click", function(){
    input.value += "2";
})
document.getElementById("three").addEventListener("click", function(){
    input.value += "3";
})
document.getElementById("four").addEventListener("click", function(){
    input.value += "4";
})
document.getElementById("five").addEventListener("click", function(){
    input.value += "5";
})
document.getElementById("six").addEventListener("click", function(){
    input.value += "6";
})
document.getElementById("seven").addEventListener("click", function(){
    input.value += "7";
})
document.getElementById("eight").addEventListener("click", function(){
    input.value += "8";
})
document.getElementById("nine").addEventListener("click", function(){
    input.value += "9";
})
document.getElementById("divide").addEventListener("click", function(){
    input.value += "/";
})
document.getElementById("multiply").addEventListener("click", function(){
    input.value += "*";
})
document.getElementById("subtract").addEventListener("click", function(){
    input.value += "-";
})
document.getElementById("add").addEventListener("click", function(){
    input.value += "+";
})
document.getElementById("clear").addEventListener("click", function(){
    input.value = "";
})
document.getElementById("decimal").addEventListener("click", function(){
    input.value += ".";
})
function display(num) {
    input.value += num;
}
document.getElementById("backspace").addEventListener("click", function(){
    input.value = input.value.substring(0, input.value.length - 1)
})
document.getElementById("equals").addEventListener("click", function(){
    input.value = eval(input.value)
})