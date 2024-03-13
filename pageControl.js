//use count var for brackets odd "nums = ( " and "even nums = )"
let count = 0;
function output(button){
    let text = button.textContent;    
    document.querySelector(".display").innerHTML += text;
}

function brackets() {
    if (count%2 === 0) {
        document.querySelector(".display").innerHTML += "(";
        count++;
    }
    else {
        document.querySelector(".display").innerHTML += ")";
        count++;
    }
}

function equalTo() {
    let expression = document.querySelector(".display").innerHTML;
    if (count%2 !== 0) {
        alert("you're missing a bracket");
        return;
    }
    try{
        const answer = eval(expression);
        document.querySelector(".display").innerHTML = answer;
    }
    catch {
        alert("you're doing something wrong, try again");
    }
}

function suitableForm(expression) {
    return expression.replace()
}