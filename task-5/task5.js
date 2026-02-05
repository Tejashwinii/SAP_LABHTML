let transactions = [];

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const list = document.getElementById("list");
const error = document.getElementById("error");

function addTransaction() {
    const text = document.getElementById("text").value.trim();
    const amount = Number(document.getElementById("amount").value);

    if (text === "" || isNaN(amount) || amount === 0) {
        error.textContent = "Please enter valid details.";
        return;
    }

    error.textContent = "";

    const transaction = {
        id: Date.now(),
        text,
        amount
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount > 0 ? "+" : "-";
    const item = document.createElement("li");

    item.classList.add(transaction.amount > 0 ? "plus" : "minus");

    item.innerHTML = `
        ${transaction.text}
        <span>${sign}₹${Math.abs(transaction.amount)}</span>
        <button onclick="removeTransaction(${transaction.id})">x</button>
    `;

    list.appendChild(item);
}

function updateValues() {
    const amounts = transactions.map(t => t.amount);

    const total = amounts.reduce((acc, val) => acc + val, 0);
    const income = amounts.filter(a => a > 0).reduce((a, v) => a + v, 0);
    const expense = amounts.filter(a => a < 0).reduce((a, v) => a + v, 0);

    balanceEl.textContent = `₹${total}`;
    incomeEl.textContent = `₹${income}`;
    expenseEl.textContent = `₹${Math.abs(expense)}`;
}

function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    updateValues();
}
