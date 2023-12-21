// Haalt artikel-ID op uit de URL
const urlParams = new URLSearchParams(window.location.search);
const bladId = urlParams.get('id');

// Artikelen
const bladblazersTWee = {
    '3': {
        naam: 'XCR82B22',
        brand: 'Cramer',
        content: 'Handgedragen bladblazer - Brushless motor - Metalen slijtring. Equivalent van 30 cc benzine motor. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar. IPX4',
        price: '\u20AC 269.95',
        motor: 'Borstelloos',
        luchtVolume: '1286 m\u00B3/u',
        luchtSnelh: '62 m/s',
        blaaskracht: '21.9 N',
        gewicht: '2.5 kg',
        bladzuiger: 'Nee',
        volt: '82 V',
        imgUrl: '../assets/Bladblazers/XCR82B22.png'

    },
    '4': {
        naam: 'XCR82B20',
        brand: 'Cramer',
        content: 'Handgedragen bladblazer - Brushless motor - Metalen slijtring. Te combineren met de batterij-backpack en de heupgordelset. Geen batterij mogelijk in de machine. Equivalent van 25 cc benzine motor. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
        price: '\u20AC 299.95',
        motor: 'Borstelloos',
        luchtVolume: '1084 m\u00B3/u',
        luchtSnelh: '82 m/s',
        blaaskracht: '19.8 N',
        gewicht: '2.1 kg',
        bladzuiger: 'Nee',
        volt: '82 V',
        imgUrl: '../assets/Bladblazers/XCR82B20.png'
    },

    '5': {
        naam: 'XCR82B26',
        brand: 'Cramer',
        content: 'Ruggedragen bladblazer - Brushless motor. Rugzakaccu veelzijdig te gebruiken. Gewoon bladblazerbuis verwijderen en met de accu-adapter en kabel elk Cramer 82V-accugereedschap gebruiken. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
        price: '\u20AC 479.95',
        motor: 'Borstelloos',
        luchtVolume: '1172 m\u00B3/u',
        luchtSnelh: '86.9 m/s',
        blaaskracht: '26 N',
        gewicht: '6.7 kg',
        bladzuiger: 'Nee',
        volt: '82 V',
        imgUrl: '../assets/Bladblazers/XCR82B26.png'
    },
};




// Toont de gegevens van het geselecteerde artikel op de pagina
const blad = bladblazersTWee[bladId];
if (blad) {
    document.getElementById('blad-naam').textContent = blad.naam;
    document.getElementById('blad-brand').textContent = blad.brand;
    document.getElementById('blad-content').textContent = blad.content;
    document.getElementById('blad-price').textContent = blad.price;
    document.getElementById('blad-motor').textContent = blad.motor;
    document.getElementById('blad-luchtVolume').textContent = blad.luchtVolume;
    document.getElementById('blad-luchtSnelh').textContent = blad.luchtSnelh;
    document.getElementById('blad-blaaskracht').textContent = blad.blaaskracht;
    document.getElementById('blad-gewicht').textContent = blad.gewicht;
    document.getElementById('blad-bladzuiger').textContent = blad.bladzuiger;
    document.getElementById('blad-volt').textContent = blad.volt;

    const imageElement = document.getElementById('blad-image');
    imageElement.src = blad.imgUrl;
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
