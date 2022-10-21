
document.addEventListener("DOMContentLoaded", ()=>{
    const submit = document.querySelector('input[type=submit]')
  submit.addEventListener('click', (e)=>{ 
    if(document.querySelector('#new-task-description').value.length == 0){
    alert("Please Enter a Task")
     }

    else{
      const tasks = document.getElementById('tasks')
      const li = document.createElement("li");
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText ='X';
      deleteBtn.style.marginLeft = '50px';
    
      li.textContent = document.querySelector('#new-task-description').value;
      tasks.appendChild(li); 
      li.appendChild(deleteBtn);
      document.querySelector('#new-task-description').value = '';
      e.preventDefault(); 

      deleteBtn.addEventListener("click",(e)=>{
         function del(element){
           // element.parentNode.removeChild(element);
             element.style.textDecoration = 'line-through' //I think to do textDecoration is better than removing the task because sometimes we need to check what we did throug the day
          }
       del(li);
  
        e.preventDefault();
      });
    };
  });
});

 

  
    


