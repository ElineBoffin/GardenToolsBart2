// Haalt artikel-ID op uit de URL
const urlParams = new URLSearchParams(window.location.search);
const bladId = urlParams.get('id');

// Artikelen
const bladblazers = {
    '1': {
        naam: 'XCR48B800',
        brand: 'Cramer',
        content: 'Handgedragen bladblazer. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar. Batterijen: XCR48V96, XCR48V192. Laders: XCR48C, XCR48C2."',
        price: '\u20AC 149.95',
        motor: 'Borstelloos',
        vermogen: '800 W',
        boost: 'Ja',
        cruise: 'Ja',
        snelheid: 'Ja',
        luchtVolume: '993 m\u00B3/u',
        luchtSnelh: '62.5 m/s',
        blaaskracht: '10 N',
        gewicht: '2.51 kg',
        opvangzak: 'Nee',
        bladzuiger: 'Nee',
        opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
        imgUrl: '../assets/Bladblazers/XCR48B800.png'

    },
    '2': { /*Bladzuiger*/ 
        naam: 'XCR48BV800',
        brand: 'Cramer',
        content: 'Handgedragen bladblazer/zuiger. 10:1 mulchverhouding. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
        price: '\u20AC 194.95',
        motor: 'Borstelloos',
        vermogen: '800 W',
        boost: 'Ja',
        cruise: 'Ja',
        snelheid: 'Ja',
        luchtVolume: '576 m\u00B3/u',
        luchtSnelh: '86 m/s',
        blaaskracht: '10 N',
        opvangzak: '54 liter',
        gewicht: '2.36 kg',
        bladzuiger: 'Ja',
        opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
        imgUrl: '../assets/Bladblazers/XCR48BV800.png'
    },
};



// Toont de gegevens van het geselecteerde artikel op de pagina
const bladblazer = bladblazers[bladId];
if (bladblazer) {
    document.getElementById('bladblazer-naam').textContent = bladblazer.naam;
    document.getElementById('bladblazer-brand').textContent = bladblazer.brand;
    document.getElementById('bladblazer-content').textContent = bladblazer.content;
    document.getElementById('bladblazer-price').textContent = bladblazer.price;
    document.getElementById('bladblazer-motor').textContent = bladblazer.motor;
    document.getElementById('bladblazer-vermogen').textContent = bladblazer.vermogen;
    document.getElementById('bladblazer-boost').textContent = bladblazer.boost;
    document.getElementById('bladblazer-cruise').textContent = bladblazer.cruise;
    document.getElementById('bladblazer-snelheid').textContent = bladblazer.snelheid;
    document.getElementById('bladblazer-luchtVolume').textContent = bladblazer.luchtVolume;
    document.getElementById('bladblazer-luchtSnelh').textContent = bladblazer.luchtSnelh;
    document.getElementById('bladblazer-blaaskracht').textContent = bladblazer.blaaskracht;
    document.getElementById('bladblazer-opvangzak').textContent = bladblazer.opvangzak;
    document.getElementById('bladblazer-gewicht').textContent = bladblazer.gewicht;
    document.getElementById('bladblazer-bladzuiger').textContent = bladblazer.bladzuiger;
    document.getElementById('opm').textContent = bladblazer.opm;

    const imageElement = document.getElementById('bladblazer-image');
    imageElement.src = bladblazer.imgUrl;
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
