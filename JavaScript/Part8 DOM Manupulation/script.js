//! Example 1 - Selecting an element by ID and changing its text content
let para1=document.getElementById('myParagraph')
let paraButton=document.getElementById('changeTextButton')
paraButton.addEventListener('click',function(){
    console.log(this)
    console.log(para1)
    console.log(para1.textContent)
    console.log(para1.innerText)
    console.log(para1.innerHTML)
    
    para1.innerText="the paragraph is changed";
})

// ! Example 2 - Selecting the first child of a list and adding a class to it
let highlightButton=document.getElementById('highlightFirstCity');
highlightButton.addEventListener('click',function(){
    let citiesList=document.getElementById('citiesList');
    for (let i=0;i<citiesList.children.length;i++){
        console.log(citiesList.children[i])
    }
    console.log(citiesList);
    // citiesList.firstElementChild.classList.add('highlight');
    citiesList.children[0].classList.add('highlight');
})

//! Example 3 - Changing text content and styling of an element
let changeOrderButton=document.getElementById('changeOrder');
changeOrderButton.addEventListener('click',function(){
    let coffeeSpan=document.getElementById('coffeeType');
    coffeeSpan.textContent="Espresso";
    // coffeeSpan.style.backgroundColor="brown";
    // coffeeSpan.style.padding="5px";
})

//! Example 4 - Adding a new item to a list
let addItemButton=document.getElementById('addNewItem');
addItemButton.addEventListener('click',function(){
    let newItem=document.createElement('li');
    newItem.textContent="Eggs";
    document.getElementById('shoppingList').appendChild(newItem);
})

// ! Example 5 - Removing the last item from a list
let removeTaskButton=document.getElementById('removeLastTask');
removeTaskButton.addEventListener('click',function(){
    let taskList=document.getElementById('taskList');
    taskList.children[taskList.children.length-1].remove();
    // taskList.lastElementChild.remove();
})
