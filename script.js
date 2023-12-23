(function(){

    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')
    let Delete = document.querySelector(".btn-remove")
    
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
           if(screen.value==="Please enter"){
            screen.value=""
           }
            let value = e.target.dataset.num;
            screen.value +=value;
            console.log("value  :" +value)
        })
    });

    clear.addEventListener("click",function(e){
        
        screen.value="";
       
    })

    equal.addEventListener("click",function(){
        
        if(screen.value===""){
            screen.value="Please enter";
            
        }else{
            try {
                var ans=eval(screen.value)
                // console.log(ans)
                screen.value=ans
            } catch (error) {
                
                screen.value="Syntax Error"
                console.log("")

            }
           
        }
    })

    Delete.addEventListener("click",function(e){
        let removeone = screen.value;
        screen.value= removeone.slice(0,-1)
    })


})();