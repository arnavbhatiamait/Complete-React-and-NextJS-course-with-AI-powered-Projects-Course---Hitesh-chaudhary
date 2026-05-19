let todoInput=document.getElementById('todo-input');
let addButton=document.getElementById('add-task-btn');
let todoList=document.getElementById('todo-list');
let tasks=[]

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM fully loaded and parsed");

    addButton.addEventListener(
        'click', ()=>{
            const taskText=todoInput.ariaValueMax.trim();
            if(taskText==="") return;
            const newTask={
                id:Date.now(),
                text:taskText,
                completed:false }
            tasks.push(newTask);
            RenderTasks();
            todoInput.value="";
            console.log(tasks);
        }
    )
    
})