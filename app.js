const equal = document.querySelector('#equal');
const display = document.querySelector('#display');
equal.onclick = function(){
    if(display.value != ""){
        const total = eval(display.value);
        display.value = total;
    }
    else{
        display.value = "";
    }
}