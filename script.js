//1 display number in textbox
function display(num){
    scrn.value += num
}

//2 AC- Clear the textbox
function clearbox(){
    scrn.value ="";
}

//3 evaluate the expresion(solve the string in display)
function solve(){
    string= scrn.value
    scrn.value=eval(string)
}

//4 do the backspace
function back(){
    scrn.value= scrn.value.slice(0,-1)
}









// // 1 - Display number in text box

// function display(num){

//     result.value += num;

// }



// // 2 - Clear text box

// function clearBox(){

//     result.value ="";

// }



// // 3 - Evaluate expression

// function evaluateExp(){

//     //method 1
//     exp = result.value;
//     output = eval(exp);
//     result.value = output;

//     //method 2
//     //result.value = eval(result.value)

// }



// // 4 - Remove last item from text box

// function removeLast(){

//     currentExp = result.value;
//     result.value = currentExp.slice(0, -1);
    
// }