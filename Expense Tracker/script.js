let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function saveData() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function displayExpenses() {

    const list = document.getElementById("expenseList");
    const total = document.getElementById("total");

    list.innerHTML = "";

    let totalAmount = 0;

    expenses.forEach((expense, index) => {

        totalAmount += expense.amount;

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${expense.name} - ₹${expense.amount}</span>
            <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
        `;

        list.appendChild(li);

    });

    total.textContent = totalAmount;

    saveData();
}

function addExpense() {

    const name = document.getElementById("expenseName").value.trim();
    const amount = Number(document.getElementById("expenseAmount").value);

    if(name === "" || amount <= 0){
        alert("Please enter valid details.");
        return;
    }

    expenses.push({
        name:name,
        amount:amount
    });

    document.getElementById("expenseName").value="";
    document.getElementById("expenseAmount").value="";

    displayExpenses();
}

function deleteExpense(index){

    expenses.splice(index,1);

    displayExpenses();
}

displayExpenses();