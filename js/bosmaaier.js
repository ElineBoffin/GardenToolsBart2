// Haalt artikel-ID op uit de URL
const urlParams = new URLSearchParams(window.location.search);
const bosmaaierId = urlParams.get('id');

// Artikelen
const bosmaaiers = {
    '1': {
        naam: 'XCR82T15',
        brand: 'Cramer',
        content: 'Borstelloze motor - U-stuur Met Tecomec Tap-N-Go maaikop & bosmaaiermes. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
        price: '\u20AC 339.95',
        vermogen: '1.5 kW',
        volt: '82 V',
        breedte: '40 cm',
        gewicht: '4.3 kg',
        snelheid: '5700 tpm',
        mes: 'X',
        motor: 'Borstelloos',
        opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
        imgUrl: '../assets/Bosmaaiers/82T15.png',

    },

    '2': {
        naam: 'XCR82T20',
        brand: 'Cramer',
        content: 'Brushless motor - Loop handle - BasicAssist schouderriem. Geleverd met Tap & Go maaikop. Achteruitfunctie om gras dat rond de trimmerkop is gewikkeld los te maken. 2-staps snelheidsregelaar om het maximale toerental in te stellen aangepast aan het werk, waardoor u looptijd bespaard. Geleverd zonder batterij en lader.',
        price: '\u20AC 419.95',
        vermogen: '2.0 kW',
        volt: '82 V',
        breedte: '41 cm',
        gewicht: '4.5 kg',
        snelheid: '6500 tpm',
        mes: 'X',
        motor: 'Borstelloos',
        opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
        imgUrl: '../assets/Bosmaaiers/82T20.png',

    },

    '3': { /*2024 ???*/
        naam: 'XCR82TB10',
        brand: 'Cramer',
        content: 'Brushless motor - Loop handle- Basic Assist schouderriem. Geleverd met Tap & Go maaikop met een maaibreedte van 41 cm. 3-tandsmes (Ø 300 mm) optioneel verkrijgbaar als kit. Achteruitfunctie om gras dat rond de trimmerkop is gewikkeld los te maken. 2-staps snelheidsregelaar om het maximale toerental in te stellen aangepast aan het werk, waardoor u looptijd bespaard. Geleverd zonder batterij en lader.',
        price: '\u20AC 425.00',
        vermogen: '1.0 kW',
        volt: '82 V',
        breedte: '40 cm',
        gewicht: '4.5 kg',
        snelheid: '4500 - 5500 - 6000 - 6500 tpm',
        mes: '255 mm',
        motor: 'X',
        opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
        imgUrl: '../assets/Bosmaaiers/82TB10.png',

    },

    '4': {
        naam: 'XCR82TB20',
        brand: 'Cramer',
        content: 'Brushless motor - U-stuur. Geleverd met Tap & Go maaikop met een maaibreedte van 45 cm, 3-tandsmes (Ø 300 mm) en een ergonomisch harnas. Achteruitfunctie om gras dat rond de trimmerkop is gewikkeld los te maken. 2-staps snelheidsregelaar om het maximale toerental in te stellen aangepast aan het werk, waardoor u looptijd bespaard. Geleverd zonder batterij en lader.',
        price: '\u20AC 519.95',
        vermogen: '2.0 kW',
        volt: '82 V',
        breedte: '45 cm',
        gewicht: '4.5 kg',
        snelheid: '6500 tpm',
        mes: '300 mm',
        motor: 'Borstelloos',
        opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
        imgUrl: '../assets/Bosmaaiers/82TB20.png',

    },

    '5': {
        naam: 'XCR82TBX20',
        brand: 'Cramer',
        content: 'Met U stuur, vergelijkbaar met een 40 cm3 benzinemotor-3 in 1: geleverd met maaikop, maaimes, cirkelzaag,drie verschillende beschermkappen en ergonomisch harnas. Achteruitfunctie om gras dat rond de trimmerkop is gewikkeld los te maken. 4-staps snelheidsregelaar om het maximale toerental in te stellen aangepast aan het werk, waardoor u looptijd bespaard. Geleverd zonder batterij en lader.',
        price: '\u20AC 624.95',
        vermogen: '2.0 kW',
        volt: '82 V',
        breedte: '46 cm',
        gewicht: '6.7 kg',
        snelheid: 'Trimmerdraad 4000 - 5500 tpm / Mes 7000 - 8000 tpm 6500 tpm',
        mes: '300 mm',
        motor: 'Borstelloos',
        opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
        imgUrl: '../assets/Bosmaaiers/XCR82TBX20.png',

    },

    '6': {
        naam: 'XCR48TB10',
        brand: 'Cramer',
        content: 'Brushless motor - U-stuur - ErgoAssist harnas 4-traps toerentalregeling - Geleverd met Tap & Go maaikop en 3-tands mes Ø 25,5 cm. Geleverd zonder batterij en lader.',
        price: '\u20AC 239.95',
        vermogen: '1.0 kW',
        volt: '48 V',
        breedte: '40 cm',
        gewicht: '4.5 kg',
        snelheid: '6300 tpm',
        mes: 'X',
        motor: 'Borstelloos',
        opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
        imgUrl: '../assets/Bosmaaiers/48TB10.png',

    },
};

// Toont de gegevens van het geselecteerde artikel op de pagina
const bosmaaier = bosmaaiers[bosmaaierId];
if (bosmaaier) {
    document.getElementById('bosmaaier-naam').textContent = bosmaaier.naam;
    document.getElementById('bosmaaier-brand').textContent = bosmaaier.brand;
    document.getElementById('bosmaaier-content').textContent = bosmaaier.content;
    document.getElementById('bosmaaier-price').textContent = bosmaaier.price;
    document.getElementById('bosmaaier-vermogen').textContent = bosmaaier.vermogen;
    document.getElementById('bosmaaier-volt').textContent = bosmaaier.volt;
    document.getElementById('bosmaaier-breedte').textContent = bosmaaier.breedte;
    document.getElementById('bosmaaier-gewicht').textContent = bosmaaier.gewicht;
    document.getElementById('bosmaaier-snelheid').textContent = bosmaaier.snelheid;
    document.getElementById('bosmaaier-mes').textContent = bosmaaier.mes;
    document.getElementById('bosmaaier-motor').textContent = bosmaaier.motor;
    document.getElementById('opm').textContent = bosmaaier.opm;

    const imageElement = document.getElementById('bosmaaier-image');
    imageElement.src = bosmaaier.imgUrl;
}

// navigation hamburger responsive
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*const myElement = document.getElementById('myElement');

if (myElement.textContent.trim() === '' || 'Duwboom' || 'Rijsnelheid') {
    myElement.style.display = 'none';
} else {
    myElement.style.display = 'block';
}*/