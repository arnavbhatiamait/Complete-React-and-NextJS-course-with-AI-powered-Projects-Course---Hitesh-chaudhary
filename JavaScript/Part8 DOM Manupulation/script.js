//! Example 1 - Selecting an element by ID and changing its text content
let para1 = document.getElementById('myParagraph')
let paraButton = document.getElementById('changeTextButton')
paraButton.addEventListener('click', function () {
    console.log(this)
    console.log(para1)
    console.log(para1.textContent)
    console.log(para1.innerText)
    console.log(para1.innerHTML)

    para1.innerText = "the paragraph is changed";
})

// ! Example 2 - Selecting the first child of a list and adding a class to it
let highlightButton = document.getElementById('highlightFirstCity');
highlightButton.addEventListener('click', function () {
    let citiesList = document.getElementById('citiesList');
    for (let i = 0; i < citiesList.children.length; i++) {
        console.log(citiesList.children[i])
    }
    console.log(citiesList);
    // citiesList.firstElementChild.classList.add('highlight');
    citiesList.children[0].classList.add('highlight');
})

//! Example 3 - Changing text content and styling of an element
let changeOrderButton = document.getElementById('changeOrder');
changeOrderButton.addEventListener('click', function () {
    let coffeeSpan = document.getElementById('coffeeType');
    coffeeSpan.textContent = "Espresso";
    // coffeeSpan.style.backgroundColor="brown";
    // coffeeSpan.style.padding="5px";
})

//! Example 4 - Adding a new item to a list
let addItemButton = document.getElementById('addNewItem');
addItemButton.addEventListener('click', function () {
    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";
    document.getElementById('shoppingList').appendChild(newItem);
})

// ! Example 5 - Removing the last item from a list
let removeTaskButton = document.getElementById('removeLastTask');
removeTaskButton.addEventListener('click', function () {
    let taskList = document.getElementById('taskList');
    taskList.children[taskList.children.length - 1].remove();
    // taskList.lastElementChild.remove();
})

// ! Example 6 - Toggling a class on an element
let clickMeButton = document.getElementById('clickMeButton');
clickMeButton.addEventListener('click', function () {
    alert("Button was clicked!");
})

// ! Example 7 - click on any tea to select it
// let teaItems = document.querySelectorAll('.teaItem');
// teaItems.forEach(tea=>{
//     tea.addEventListener('click', function(){
//         console.log(this);
//         tea.style.backgroundColor = "lightgreen";
//     })
// })

let teaList = document.getElementById('teaList');
teaList.addEventListener('click', function (event) {
    if (event.target && event.target.matches('.teaItem')) {
        alert("You selected: " + event.target.textContent);
    }
}   )

//! Example 8 - Form handling
let feedBack=document.getElementById('feedbackForm');
feedBack.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event);
    let feedbackInputText=document.getElementById('feedbackInput').value;
    console.log(feedbackInputText);
    document.getElementById('feedbackDisplay').textContent = feedbackInputText;
    // alert("Form submitted!");
})

// ! Example 9 - DOM Content Loaded event
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = "DOM fully loaded";
})       

// ! Example 10 - toggle 
let toggleButton=document.getElementById('toggleHighlight');
toggleButton.addEventListener('click', function(){
    let toggleText = document.getElementById('descriptionText');
    console.log(toggleText);
    toggleText.classList.toggle('highlight');
});