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


