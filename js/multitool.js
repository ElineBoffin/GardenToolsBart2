// Haalt artikel-ID op uit de URL
const urlParams = new URLSearchParams(window.location.search);
const multitoolId = urlParams.get('id');

// Artikelen
const multitools = {
    '10': {
        naam: 'XCR48TX10',
        brand: 'Cramer',
        content: 'Borsteloze motor - Loop handle. Geleverd met trimmer opzetstuk. Variabele snelheid. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
        price: '\u20AC 194.95',
        motor: 'Borstelloos',
        volt: '48 V',
        breedte: '40 cm',
        gewicht: '4 kg',
        vermogen: 'X',
        opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
        imgUrl: '../assets/Multitools/XCR48TX10.png',

    },

    '11': {
        naam: 'XCR48TX10-KIT',
        brand: 'Cramer',
        content: 'Borsteloze motor - Loop handle. Geleverd met trimmer opzetstuk. Variabele snelheid.',
        price: '\u20AC 339.95',
        motor: 'Borstelloos',
        volt: '48 V',
        breedte: '40 cm',
        gewicht: '4 kg',
        vermogen: 'X',
        opm: 'Opmerking: Inclusief Lader en laadstation.',
        imgUrl: '../assets/Multitools/XCR48TX10-KIT.png',
    },

    '12': {
        naam: 'XCR82TX10',
        brand: 'Cramer',
        content: 'Brushless motor - Loop handle - BasicAssist schouderriem. Geleverd met trimmer opzetstuk. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
        price: '\u20AC 349.95',
        motor: 'Borstelloos',
        volt: '82 V',
        breedte: 'X',
        gewicht: '4,5 kg',
        vermogen: '1.0 kW',
        opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
        imgUrl: '../assets/Multitools/XCR48TB10-KIT.png',
    },
};

// Toont de gegevens van het geselecteerde artikel op de pagina
const multitool = multitools[multitoolId];
if (multitool) {
    document.getElementById('multitool-naam').textContent = multitool.naam;
    document.getElementById('multitool-brand').textContent = multitool.brand;
    document.getElementById('multitool-content').textContent = multitool.content;
    document.getElementById('multitool-motor').textContent = multitool.motor;
    document.getElementById('multitool-price').textContent = multitool.price;
    document.getElementById('multitool-volt').textContent = multitool.volt;
    document.getElementById('multitool-breedte').textContent = multitool.breedte;
    document.getElementById('multitool-gewicht').textContent = multitool.gewicht;
    document.getElementById('multitool-vermogen').textContent = multitool.vermogen;
    document.getElementById('opm').textContent = multitool.opm;

    const imageElement = document.getElementById('multitool-image');
    imageElement.src = multitool.imgUrl;
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