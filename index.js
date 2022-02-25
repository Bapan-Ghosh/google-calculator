let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
           buttonText = e.target.innerText;
           if(buttonText == 'x'){
               buttonText = '*';
               screenValue += buttonText; 
               screen.value = screenValue;
           }
           else
            if(buttonText == 'AC'){
            screenValue = "";   
            screen.value = ""; 
           }
           else
            if(buttonText == '='){
               screen.value = eval(screenValue);
           }
           else
             if(buttonText == "backspace"){
                const newNum = (screenValue).toString().slice(0, -1)
                screenValue = newNum; 
                screen.value = screenValue;   
             }  
           else
           {
             screenValue += buttonText; 
             screen.value = screenValue;
           }
    })
}