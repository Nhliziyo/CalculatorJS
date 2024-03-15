//use count var for brackets odd "nums = ( " and "even nums = )"
let count = 0;
let display = document.querySelector(".display");
function output(button){
    let text = button.textContent;    
    display.innerHTML += text;
}

function clearDisplay() {
    display.innerHTML = '';
}

function brackets() {
    if (count%2 === 0) {
        display.innerHTML += "(";
        count++;
    }
    else {
        display.innerHTML += ")";
        count++;
    }
}

function equalTo() {
    let expression = suitableForm(display.innerHTML);
    if (count%2 !== 0) {
        alert("you're missing a bracket");
        return;
    }
    try{
        const answer = eval(expression);
        display.innerHTML = answer;
    }
    catch {
        alert("you're doing something wrong, try again");
    }
}

function suitableForm(expression) {
    return expression.replaceAll("x", "*").replaceAll("%","*(1/100)*");
}

