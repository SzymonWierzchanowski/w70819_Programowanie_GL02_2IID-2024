let ksiazka = {
    tytul: "Wiedźmin",
    autor: "Andrzej Sapkowski",
    rokWydania: 1993
};

function informacjeOKsiazce(ksiazka) {
    return `${ksiazka.tytul} - ${ksiazka.autor} (${ksiazka.rokWydania})`;
}

console.log(informacjeOKsiazce(ksiazka)); 


let student = {
    imie: "Szymon",
    nazwisko: "Wierzchanowski",
    numerAlbumu: "70819",
    oceny: {
        matematyka: 4.5,
        fizyka: 3.0,
        informatyka: 5.0
    }
};


function sredniaOcen(student) {
    let sumaOcen = 0;
    let iloscPrzedmiotow = 0;
    
    
    for (let przedmiot in student.oceny) {
        sumaOcen += student.oceny[przedmiot];
        iloscPrzedmiotow++;
    }
    
    
    let srednia = sumaOcen / iloscPrzedmiotow;
    return srednia.toFixed(2); 
}

console.log("Średnia ocen studenta:", sredniaOcen(student));



let samochod = {
    marka: "Toyota",
    model: "Corolla",
    rokProdukcji: 2018,
    kolor: "czerwony",
    predkosc: 0,

    
    przyspiesz: function(wartosc) {
        this.predkosc += wartosc;
    },

    
    zwolnij: function(wartosc) {
        this.predkosc -= wartosc;
        if (this.predkosc < 0) {
            this.predkosc = 0;
        }
    },

    
    informacjeOSamochodzie: function() {
        return `${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
    },

    wiekSamochodu: function() {
        let aktualnyRok = new Date().getFullYear();
        return aktualnyRok - this.rokProdukcji;
    }
};


samochod.przyspiesz(50);
console.log(samochod.informacjeOSamochodzie()); 


samochod.zwolnij(20);
console.log(samochod.informacjeOSamochodzie()); 

console.log("Wiek samochodu:", samochod.wiekSamochodu());




let prostokat = {
    dlugosc: 10,
    szerokosc: 5,

    
    pole: function() {
        return this.dlugosc * this.szerokosc;
    },

    
    obwod: function() {
        return 2 * (this.dlugosc + this.szerokosc);
    },

    
    czyKwadrat: function() {
        return this.dlugosc === this.szerokosc;
    }
};


console.log("Pole prostokąta:", prostokat.pole()); 
console.log("Obwód prostokąta:", prostokat.obwod()); 
console.log("Czy prostokąt jest kwadratem?", prostokat.czyKwadrat());


function utworzProstokat() {
    
    let dlugosc = parseFloat(document.getElementById("dlugosc").value);
    let szerokosc = parseFloat(document.getElementById("szerokosc").value);

    
    let prostokat = {
      dlugosc: dlugosc,
      szerokosc: szerokosc,
      pole: function() {
        return this.dlugosc * this.szerokosc;
      },
      obwod: function() {
        return 2 * (this.dlugosc + this.szerokosc);
      },
      czyKwadrat: function() {
        return this.dlugosc === this.szerokosc;
      },
      informacje: function() {
        return `Długość: ${this.dlugosc}, Szerokość: ${this.szerokosc}, Pole: ${this.pole()}, Obwód: ${this.obwod()}, Czy kwadrat: ${this.czyKwadrat()}`;
      }
    };

    
    let wynikElement = document.getElementById("wynik");
    wynikElement.textContent = prostokat.informacje();
  }



const nameField = document.querySelector("#name");

const nameErrorField = document.querySelector("#name + .error");


nameField.addEventListener('input', () => {
    

     
    if(!requiredValidation(nameField, nameErrorField))
    {
        minLengthValidation(nameField, nameErrorField, 2)
    }
 });


const surnameFiled = document.querySelector('#surname');

const surnameFiledError = document.createElement('span');
surnameFiledError.classList.add('error');
surnameFiled.addEventListener('input', () => {
    if(requiredValidation(surnameFiled, surnameFiledError))
    {
        
        surnameFiled.after(surnameFiledError);
    }
    else {
        
        surnameFiledError.remove();
    }
});


const emailField = document.querySelector("[name='email']");
const emailErrorField = document.querySelector("[name='email'] + .error");
emailField.addEventListener('input', () => {
    emailValidation(emailField, emailErrorField);
});


const passwordFiled = document.querySelector("[name='password']");
const passwrodErrorField = document.querySelector("[name='password'] + .error");


passwordFiled.addEventListener('focusout', () => {
    passwordValidation(passwordFiled, passwrodErrorField);
});



const genderFields = document.getElementsByName('gender');
const genderErrorField = document.getElementById('genderError');

const phoneField = document.querySelector("[name='phone']");
const phoneErrorField = document.querySelector("[name='phone'] + .error");
phoneField.addEventListener('input', () => {
    if(!requiredValidation(phoneField, phoneErrorField))
    {
        if(!minLengthValidation(phoneField, phoneErrorField, 9))
            {
                maxLengthValidation(phoneField, phoneErrorField, 9);
            }
    }
});


phoneField.addEventListener('keypress', (event) => {
    var charCode = (event.which) ? event.which : event.keyCode
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }

    return true;
});


const birthField = document.querySelector("[name='birthDate']");
const birthErrorField = document.querySelector("[name='birthDate'] + .error");
birthField.addEventListener('input', () => {
    if(!requiredValidation(birthField, birthErrorField))
    {
        validAge(birthField, birthErrorField);
    }
});


const confirmPasswordField = document.querySelector("[name='confirm-password']");
const confirmPasswordErrorField = document.querySelector("[name='confirm-password'] + .error");
confirmPasswordField.addEventListener('input', () => {
    validConfirmPassword(confirmPasswordField, passwordFiled,confirmPasswordErrorField);
});

const countyField = document.querySelector("[name='country']");
const countyErrorField = document.querySelector("[name='country'] + .error");


const provinceField = document.querySelector("input[name='province']");
const provinceSelectField = document.querySelector("select[name='province']");
const provinceErrorField = document.getElementById('provinceError')


countyField.addEventListener('change', () => {
    const result = requiredValidation(countyField, countyErrorField);

    if (countyField.value === "Polska") {
        
        provinceField.hidden = true;
        provinceSelectField.hidden = false;
    }
    else {
        provinceField.hidden = false;
        provinceSelectField.hidden = true;
    }

    
    provinceField.disabled = result;
    provinceSelectField.disabled = result;
});

provinceSelectField.addEventListener('change', () => {
    validProvince(provinceSelectField);
});

provinceField.addEventListener('input', () => {
    validProvince(provinceField);

});

const addressField = document.querySelector("[name='address']");
const addressErrorField = document.querySelector("[name='address'] + .error");
const contactAddressField = document.querySelector("[name='contactAddress']");
const contactAddressErrorField = document.querySelector("[name='contactAddress'] + .error");

function validProvince(field) {
    const result = requiredValidation(field, provinceErrorField);
    
    addressField.disabled = result;
    contactAddressField.disabled = result;
}

addressField.addEventListener('input', () => {
    if(!requiredValidation(addressField, addressErrorField)){
        minLengthValidation(addressField,addressErrorField, 3);
    }
});
contactAddressField.addEventListener('input', () => {
    if(!requiredValidation(contactAddressField, contactAddressErrorField))
    {   
        minLengthValidation(contactAddressField, contactAddressErrorField, 3);
    }
});

const checkboxField = document.querySelector("[name='hasSameContactAddress']");
const contactAddress = document.querySelector(".contactAddress");
checkboxField.addEventListener('change', () => {
    
    contactAddress.hidden = checkboxField.checked;
});


const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (validForm()) {
        alert('Sukces');
    }
});

function validForm() {
     if (requiredValidation(nameField, nameErrorField) || minLengthValidation(nameField, nameErrorField, 2) || requiredValidation(surnameFiled, surnameFiledError) ||
        emailValidation(emailField, emailErrorField) || passwordValidation(passwordFiled, passwrodErrorField) || validConfirmPassword(confirmPasswordField, passwordFiled,confirmPasswordErrorField)  || 
        radioRequiredValidation(genderFields, genderErrorField) ||
        requiredValidation(phoneField, phoneErrorField) || 
        minLengthValidation(phoneField, phoneErrorField, 9) || maxLengthValidation(phoneField, phoneErrorField, 9) || requiredValidation(birthField, birthErrorField) || validAge(birthField, birthErrorField) ||
        requiredValidation(countyField, countyErrorField) || ((!provinceSelectField.hidden && requiredValidation(provinceSelectField, provinceErrorField)) || 
        (!provinceField.hidden && requiredValidation(provinceField, provinceErrorField))) || requiredValidation(addressField, addressErrorField) || minLengthValidation(addressField,addressErrorField, 3)
        || 
        (!checkboxField.checked && (requiredValidation(contactAddressField, contactAddressErrorField) ||  minLengthValidation(contactAddressField, contactAddressErrorField, 3)))
    ) {
         return false;
     }

    return true;
}