const display = document.getElementById("display");

function appendToDisplay(Input){
    display.value +=Input;
}

function clearDisplay(){
    display.value=''
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error!";
    }
    if(display.value==1/0){
        display.value= "Can't"
    }
}
