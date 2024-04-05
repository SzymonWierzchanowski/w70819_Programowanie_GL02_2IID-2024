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


