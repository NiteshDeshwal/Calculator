let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""; 
//an empty string to show the result 

let arr= Array.from(buttons); 
//it will create an array of buttons named arr 
// now we can run a loop on these buttons using for each

arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;//the result evaluated will be shown in input field.
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";//sara delete krna hai to string empty show krege
            input.value = string;
        }
        
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
            //885 hai ab 5 ko remove krna hai to length-1 substring function use krege;
        }
        else{
            string +=e.target.innerHTML;
         //if e is not equal button then whatever is pressed add it in string and show it in input.
        input.value = string;
        }
        
    })
})
// whenever we click on a button e will be passed 
// and if e eqal to = button then the string we have created in that
// we will evaluate it whatever is passed in string using eval function eval is inbuilt functino of js.