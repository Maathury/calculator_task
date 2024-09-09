const display=document.getElementById("display");

let value=display.value;

document.addEventListener("keydown",function (event){
    if(event.key=="Enter"){
        Evaluation();
    }
    if((event.key<'0'||event.key>'9') && event.key!=="Backspace" && event.key!=="Enter"&& event.key!=='/'&&event.key!=='*'&&event.key!=='-'&&event.key!=='+'&&event.key!=='%'){
        event.preventDefault();
        alert("Only Numbers,Operators are allowed!...")
    }

})

function element(input){
    display.value += input;
}

function DeleteDisplay(){
    display.value = display.value.toString().slice(0,-1);
}

function Clear(){
    display.value = "";
}

function Evaluation(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value= "ERROR" ; 
    }
}