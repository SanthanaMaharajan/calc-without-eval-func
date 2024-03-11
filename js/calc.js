let display=document.getElementById("display");
let num1;
let num2;
let operator;
let step=0;
let result=0;


let firstArray=[];
let secondArray=[]

function insert(val){
    if(step==0 || step==1){
        firstArray.push(val);
        step=1;
        num1=Number(firstArray.join(''));
        display.value=num1;
    }else if(step==2){
        secondArray.push(val);
        num2=Number(secondArray.join(''));
        display.value=num1+operator+num2;
    }
}

function operators(op){
    if(step==1||step==0){
        step=2;
        operator=op;
    }else if(step==2){
        calculate();
        step=3;
        operator=op;
    }
    display.value=num1+operator;
}

function deleteChar(){
    if(step==0 || step==1){
        firstArray.pop();
        num1=Number(firstArray.join(''));
        display.value=display.value.slice(0,-1);
        display.value=num1;
    }else if(step==2){
        if(secondArray==[]){
        secondArray.pop();
        num2=Number(secondArray.join(''));
        display.value=display.value.slice(0,-1);
        display.value=num2;
        }else{
            operator=null;
            display.value=num1;
            step=1;
        }
    }
}

function clearAll(){
    display.value=0;
    num1=null;
    num2=null;
    operator=null;
    firstArray=[];
    secondArray=[];
    step=0;
    result=0;
}

function calculate(){
    if (step==2){
        if(operator ==="+"){
            result=num1+num2;
        }else if (operator === "-") {
            result=num1-num2;
        } else if (operator==="/") {
            if(num2===0){ 
                alert("Error! Division by zero");
            }else {
                result = num1/num2;
            }     
        } else if (operator==="*") {
            result=num1*num2;
        }else if  (operator==="%") {
            if(num2===0) {
                alert ("Error! Division by zero");
            } else {
                result=num1%num2;
            }      
        }
        
        display.value=result;
        num1=result;
        num2=null;
        firstArray=[];
        secondArray=[];
        step=0;
        
    }else if(step==3){
        if(operator ==="+"){
            result=num1+num2;
        }else if (operator === "-") {
            result=num1-num2;
        } else if (operator==="/") {
            if(num2===0){ 
                alert("Error! Division by zero");
            }else {
                result = num1/num2;
            }     
        } else if (operator==="*") {
            result=num1*num2;
        }else if  (operator==="%") {
            if(num2===0) {
                alert ("Error! Division by zero");
            } else {
                result=num1%num2;
            }      
        }
        num1=result;
        num2=null;
        firstArray=[];
        secondArray=[];
    }   
}