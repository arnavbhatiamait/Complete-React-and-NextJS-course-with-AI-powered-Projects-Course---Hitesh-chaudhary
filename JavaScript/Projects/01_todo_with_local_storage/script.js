
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM fully loaded and parsed");
    let todoInput=document.getElementById('todo-input');
    let addButton=document.getElementById('add-task-btn');
    let todoList=document.getElementById('todo-list');
    let tasks=localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

    tasks.forEach(element => {
        RenderTasks(element);
    });

    addButton.addEventListener(
        'click', ()=>{
            const taskText=todoInput.value.trim();
            if(taskText==="") return;
            const newTask={
                id:Date.now(),
                text:taskText,
                completed:false }
            tasks.push(newTask);
            RenderTasks(newTask);
            saveTasks(tasks);
            todoInput.value="";
            console.log(tasks);
        }
    );
    function saveTasks(){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    function RenderTasks(tasks){

    }   
})