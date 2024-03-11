let display=document.getElementById("display");


function insert(val) { 
    if (display.value==="0"){
        display.value=val;
    }else{
        if(display.value==="Error"){
            display.value=""
        }
        display.value+=val;
    }    
}

function clearAll(){
    display.value="";
}

function deleteChar(){
    display.value=display.value.slice(0,-1);
}


function evaluate(string){
    return new Function( "return "+ string )();  
}

function calculate() {
    var input = display.value;
    try {
      var solution =evaluate(input);
      if(isNaN(solution)){
          display.value ="Error"
      }else{
          display.value = solution;
      }
      
    } catch (error) {
        display.value = "Error";
    }
}