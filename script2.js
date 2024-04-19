function silnia(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    else {
        let wynik = 1;
        for (let i = 2; i <= n; i++) {
            wynik *= i;
        }
        return wynik;
    }
}

console.log(silnia(4)); 


function changeColor(clickedButton) {
   
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    clickedButton.classList.add('active');
}



function toggleVisibility(imageId) {
    const image = document.getElementById(imageId);
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}

function addItemToList() {
    const textInput = document.getElementById('textInput');
    const value = textInput.value.trim(); 

    if (value !== '') {
        const itemList = document.getElementById('itemList');
        const li = document.createElement('li');
        li.textContent = value;
        itemList.appendChild(li);
        textInput.value = ''; 
    } else {
        alert('Pole tekstowe jest puste. Wpisz wartość, którą chcesz dodać do listy.');
    }
}


function addItemToTable() {
    const firstNameInput = document.getElementById('firstNameInput');
    const lastNameInput = document.getElementById('lastNameInput');
    const firstName = firstNameInput.value.trim(); 
    const lastName = lastNameInput.value.trim(); 

    if (firstName !== '' && lastName !== '') {
        const table = document.getElementById('dataTable');
        const newRow = table.insertRow(-1); 
        const cell1 = newRow.insertCell(0); 
        const cell2 = newRow.insertCell(1); 
        cell1.textContent = firstName;
        cell2.textContent = lastName;
        firstNameInput.value = ''; 
        lastNameInput.value = ''; 
    } else {
        alert('Pola tekstowe są puste. Wpisz imię i nazwisko, które chcesz dodać do tabeli.');
    }
}