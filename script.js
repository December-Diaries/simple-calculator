function add(a,b){
    return a+b;
};

function subtract(a,b){
    return a-b;
};

function multiply(a,b){
    return a*b;
};

function divide(a,b){
    return a/b;
};

function operate(n1,op,n2){
    n1=Number(n1);
    n2=Number(n2);
    switch(op){
        case '+':
            return add(n1,n2);
            break;
        case '-':
            return subtract(n1,n2);
            break;
        case '/':
            return divide(n1,n2);
            break;
        case '*':
            return multiply(n1,n2);
            break;

    }   
};

//console.log(operate((operate(5,'*',2)),'/',3));


let display = document.querySelector('#display');
let keypad = document.querySelector('#keypad');

let n1=null;
let op=null;
let n2=null;



keypad.addEventListener('click', (e)=>{
    
    if (e.target.tagName ==='BUTTON'){
        const value =e.target.textContent;

        if (e.target.id ==='clear'){
            display.textContent="0";
            n1=null,op=null,n2=null;
            
        }
        
        else{
            if (!isNaN(value)){
                // display.textContent=(value);
                if(n1===null){
                    n1=(value);
                    console.log(n1);
                    display.textContent=n1;    
                }
                else{
                    if(n2===null){
                        if(op!==null){
                            n2=value;
                            console.log(n2);
                            display.textContent=n2;
                        }
                        else{
                            n1+=value;
                            console.log(n1);
                            display.textContent=n1;
                        }  
                    }
                    else{
                        n2+=value;
                        console.log(n2);
                        display.textContent=n2; 
                    }

                }
                
            }
            else{

                if(value!=='='){
                    //display.textContent(operate(n1,op,n2));
                    console.log(value);
                    op=value;
                }
                else{
                    display.textContent=n1=operate(n1,op,n2);
                    n2=null;
                    op=null;
                    console.log(n1);    
                }
            }
            
            
        }
    }
})


