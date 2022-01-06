// data var
const name = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const submit = document.getElementById("submit");
const table = document.getElementById("table");
const noExpenses = document.getElementById("no-expenses")

// eventListeners
submit.addEventListener("click", () =>{
    submitData()
    noExpensesF()
})

table.addEventListener("click",(event)=>{
	if (event.target.tagName === 'BUTTON') {
		const button = event.target;
		const td= button.parentNode;
		const tr = td.parentNode;
		const tbdy = tr.parentNode
		const tbl = tbdy.parentNode;
		if (button.textContent === "x") {
			tbl.removeChild(tbdy);
			noExpensesF()
		}
	}
})




// functions
function submitData(){
	// tomar data
	let nameValue = name.value;
    let dateValue = date.value;
    let amountValue = amount.value;
    
    // meterlos en expenses
    if (nameValue === '' || dateValue ===''  || amountValue === '') {
    	alert("empty data")
    }else{
    	 const dataRow = `<tr>
					<td>${nameValue}</td>
					<td>${dateValue}</td>
					<td>$${amountValue}</td>
					<td><button class="cancel">x</button></td>
				    </tr>`

    table.innerHTML +=dataRow
    }
   
}


function noExpensesF(){
	if (table.hasChildNodes()) {
		noExpenses.style.display ="none";
	}if (table.children.length === 1) {
		noExpenses.style.display ="block";
	}
}