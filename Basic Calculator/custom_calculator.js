let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let memory = document.querySelector('.memory');
let operator = document.querySelectorAll('.key--op');
let equal = document.querySelector('#equal');
let ans = document.querySelector('.value');

function equalTo(){
    equal.addEventListener("click",function(){
            let expression = memory.textContent
             .replace(/x/g, '*')   // in case it's small x
            .replace(/×/g, '*')   // in case it's multiplication sign
            .replace(/÷/g, '/')
            .replace(/−/g, '-')
            .trim();

                 try{
                    ans.textContent = eval(expression);
                 }
                 catch(error){
                    ans.textContent = "Error";
                 }
               

        })
    }
    
  function removeLastCharacter(){
    let remove = document.querySelector('#remove');
    remove.addEventListener("click",function(){
       let string = memory.textContent;
       string = string.slice(0, -1);
        memory.textContent = string;
        })
    }

 removeLastCharacter();
keys.forEach(function(key){
    key.addEventListener('click', function(){
        let value = key.textContent.trim();
        if(value == "=")return;
          if (value === "<-")return;
        memory.textContent += value;
        if(value === "C"){
            memory.textContent = "";
            ans.textContent = "0";
            return;
        }
    
       equalTo();
     
    })

})
 

