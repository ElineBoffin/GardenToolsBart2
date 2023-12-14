// Haalt artikel-ID op uit de URL
const urlParams = new URLSearchParams(window.location.search);
const bosmaaierId = urlParams.get('id');

// Artikelen
const bosmaaiers = {
    '1': {
        naam: 'XCR82T15',
        brand: 'Cramer',
        content: 'fff',
        price: '\u20AC 339.95',
        vermogen: '1.5 kW',
        volt: '82 V',
        breedte: '40 cm',
        gewicht: '4.3 kg',
        snelheid: '5700 tpm',
        imgUrl: '../assets/Bosmaaiers/82T15.png',

    },

    '2': {
        naam: 'XCR82T20',
        brand: 'Cramer',
        content: 'fff',
        price: '\u20AC 419.95',
        vermogen: '2.0 kW',
        volt: '82 V',
        breedte: '41 cm',
        gewicht: '4.5 kg',
        snelheid: '6500 tpm',
        imgUrl: '../assets/Bosmaaiers/82T20.png',

    },

    '3': {
        naam: 'XCR82TB10',
        brand: 'Cramer',
        content: 'fff',
        price: '\u20AC 425.00',
        vermogen: '1.0 kW',
        volt: '82 V',
        breedte: '40 cm',
        gewicht: '4.5 kg',
        snelheid: '4500 - 5500 - 6000 - 6500 tpm',
        mes: '255 mm',
        imgUrl: '../assets/Bosmaaiers/82TB10.png',

    },

    '4': {
        naam: 'XCR82TB20',
        brand: 'Cramer',
        content: 'fff',
        price: '\u20AC 519.95',
        vermogen: '2.0 kW',
        volt: '82 V',
        breedte: '45 cm',
        gewicht: '4.5 kg',
        snelheid: '6500 tpm',
        mes: '300 mm',
        imgUrl: '../assets/Bosmaaiers/82TB20.png',

    },

    '5': {
        naam: 'XCR82TBX20',
        brand: 'Cramer',
        content: 'fff',
        price: '\u20AC 624.95',
        vermogen: '2.0 kW',
        volt: '82 V',
        breedte: '46 cm',
        gewicht: '6.7 kg',
        snelheid: 'Trimmerdraad 4000 - 5500 tpm / Mes 7000 - 8000 tpm 6500 tpm',
        mes: '300 mm',
        motor: 'Borstelloos',
        imgUrl: '../assets/Bosmaaiers/XCR82TBX20.png',

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
    document.getElementById('bosmaaier-motor').textContent = bosmaaier.motor

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