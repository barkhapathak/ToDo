
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter your Task Name in the task bar !")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
           
            ${document.querySelector('#newtask input').value}
                
                <button class="delete">X</button>
                
                
            </div>
           

       ` ;
       
        

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }

   


   
   }
