let string ="";
let buttons = document.querySelectorAll('.button1,.button2,.button3,.button4,.button5,.button6');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            string= eval(string);
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML=="%"){
            string= eval(string)/100;
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML=="√"){
            let number = parseFloat(string);
            if (number >= 0) {
                let sqrt = Math.floor(Math.sqrt(number));
                string = sqrt.toString();
                document.querySelector('input').value = string;
            } else {
                string = "Invalid input";
                document.querySelector('input').value = string;
            }
        }

        else if(e.target.innerHTML=="C"){
            string= ""
            document.querySelector('input').value = string;
        }
        else{
            
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })
})


