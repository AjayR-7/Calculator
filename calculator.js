//initializing values
let string = "";
let buttons;

//selecting the all the class button(. is defined for button)

buttons = document.querySelectorAll('.button');     
Array.from(buttons).forEach((button)=>{             //using array from buttons and for each loop for button        
  button.addEventListener('click', (e)=>{           //e stands for event                     
    //evaluvating the string(values)
    if(e.target.innerHTML == '='){                   
      string = eval(string);
      document.querySelector('input').value = string;
    }
    //clearing all the values in the display
    else if(e.target.innerHTML == 'AC'){
        string = "";
        document.querySelector('input').value = string;
    }
    //deleating the strings last value
    else if(e.target.innerHTML == 'DE'){
        string = string.substring(0, string.length - 1);
        document.querySelector('input').value  = string;
    }
    //adding the values to the string(input display)
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
    })
})
