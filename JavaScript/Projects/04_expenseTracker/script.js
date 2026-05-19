document.addEventListener("DOMContentLoaded", () => {
    const expenses=[]
    const expenseForm=document.getElementById('expense-name');
    const expenseAmountInput=document.getElementById('expense-amount');
    const submitBtn=document.querySelector('button');
    const expenseList=document.getElementById('expense-list');
    const totalAmountDisplay=document.getElementById('total-amount');

    

    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        const name=expenseForm.value.trim();
        const amount=parseFloat(expenseAmountInput.value.trim());
        if(name!=="" && !isNaN(amount) && amount>0){
            const newExpense={
                id:Date.now(),
                name:name,
                amount:amount
            };
            expenses.push(newExpense);
            renderExpenses();
            updateTotal();}});
    function renderExpenses(){
        expenseList.innerHTML="";
        expenses.forEach(expense=>{
            const li=document.createElement('li');
            li.innerHTML=`
            ${expense.name} - $${expense.amount}
            <button data-id="${expense.id}">Delete</button>
            `;
            expenseList.appendChild(li);
        });
    }
    function updateTotal(){
        const totalAmount=expenses.reduce((sum, expense)=>sum+expense.amount, 0);
        totalAmountDisplay.textContent=totalAmount.toFixed(2);
     }
    expenseList.addEventListener('click', (e)=>{
        if(e.target.tagName==="BUTTON"){
            const expenseId=parseInt(e.target.getAttribute("data-id"));
            const index=expenses.findIndex(expense=>expense.id===expenseId);
            if(index!==-1){
                expenses.splice(index, 1);
                renderExpenses();
                updateTotal();
            }
        }
    })
});