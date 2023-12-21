// Haalt artikel-ID op uit de URL
const urlParams = new URLSearchParams(window.location.search);
const kettingId = urlParams.get('id');

// Artikelen
const kettingzagen = {
    '1': {
        naam: 'XCR48CS18',
        brand: 'Cramer',
        content: 'Kettingzaag met zeer hoog koppel en ge\u00EFntegreerde kettingrem.',
        price: '\u20AC 264.95',
        motor: 'Borstelloos',
        volt: '48 V',
        steek: '3/8 inch',
        groef: '1.1 mm',
        bladLengte: '36 cm',
        gewicht: '3.6 kg',
        snelheid: 'kettingsnelheid: 20 m/s',
        tank: '180 ml',
        lengte: 'X',
        vermogen: 'X',
        imgUrl: '../assets/Kettingzagen/XCR48CS18.png'

    },
    '2': {
        naam: 'XCR82TCS15',
        brand: 'Cramer',
        content: 'Lichtgewicht compacte snoeikettingzaag met lage vibraties en een equivalent van een 35 cc benzine motor. Effici\u00EBnt en onderhoudsvrij dankzij de borstelloze motor. Te combineren met het batterijharnas en de heupgordelset. Geleverd met batterijharnas. Geen batterij mogelijk in de machine. Geleverd zonder batterij en lader.',
        price: '\u20AC 489.95',
        motor: 'Borstelloos',
        vermogen: '1.5 kW',
        volt: '82 V',
        steek: '1/4 inch',
        groef: 'X',
        bladLengte: '25 cm',
        gewicht: '2.1 kg',
        snelheid: 'kettingsnelheid: 24 m/s',
        tank: '150 ml',
        lengte: 'X',
        imgUrl: '../assets/Kettingzagen/XCR82TCS15.png'
    },
    '3': {
        naam: 'XCR82CS24',
        brand: 'Cramer',
        content: 'Lichtgewicht professionele kettingzaag met een equivalent van een 45 cc benzinne motor. Effici\u00EBnt en onderhoudsvrij dankzij de borstelloze motor Geleverd zonder batterij en lader. IPX4',
        price: '\u20AC 419.95',
        motor: 'Borstelloos',
        vermogen: '2.4 kW',
        volt: '82 V',
        steek: '3/8 inch',
        groef: '1.1 mm',
        bladLengte: '35 cm',
        gewicht: '3.1 kg',
        snelheid: 'kettingsnelheid: 24 m/s',
        tank: '180 ml',
        lengte: 'X',
        imgUrl: '../assets/Kettingzagen/XCR82CS24.png'
    },
    '4': {
        naam: 'XCR82CS27',
        brand: 'Cramer',
        content: 'Lichtgewicht professionele kettingzaag met een equivalent van een 55 cc benzinne motor. Effici\u00EBnt en onderhoudsvrij dankzij de borstelloze motor Geleverd zonder batterij en lader.',
        price: '\u20AC 479.95',
        motor: 'Borstelloos',
        vermogen: '2.7 kW',
        volt: '82 V',
        steek: '0.32 inch',
        groef: '1.3 mm',
        bladLengte: '38 cm',
        gewicht: '3.6 kg',
        snelheid: 'kettingsnelheid: 24 m/s',
        tank: '250 ml',
        lengte: 'X',
        imgUrl: '../assets/Kettingzagen/XCR82CS27.png'
    },
    '5': {
        naam: 'XCR82CS34',
        brand: 'Cramer',
        content: 'Professionele kettingzaag met magnesium carter. Zeer hoog koppel. Equivalent van een 60 cc benzinne motor. Effici\u00EBnt en onderhoudsvrij dankzij de borstelloze motor Geleverd zonder batterij en lader',
        price: '\u20AC 549.95',
        motor: 'Borstelloos',
        vermogen: '3.4 kW',
        volt: '82 V',
        steek: '0.32 inch',
        groef: '1.3 mm',
        bladLengte: '38 cm',
        gewicht: '4.55 kg',
        snelheid: 'kettingsnelheid: 24 m/s',
        tank: '250 ml',
        lengte: 'X',
        imgUrl: '../assets/Kettingzagen/XCR82CS34.png'
    },
    '6': {
        naam: 'XCR48MCS',
        brand: 'Cramer',
        content: 'Lichtgewicht mini kettingzaag. Geleverd met draagtas Gereedschapsloze kettingspanning Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar',
        price: '\u20AC 134.95',
        motor: 'Borstelloos',
        vermogen: '400 W',
        volt: '48 V',
        steek: '1/4 inch',
        groef: '0.043 inch',
        bladLengte: '15.24 cm',
        gewicht: '1.09 kg',
        snelheid: 'kettingsnelheid: 8 m/s',
        tank: 'Batterij',
        lengte: 'X',
        imgUrl: '../assets/Kettingzagen/XCR48MCS.png'
    },
    '7': {
        naam: 'XCR48CSK2-KIT',
        brand: 'Cramer',
        content: 'Lichtgewicht mini kettingzaag. Geleverd met draagtas en kettingolie vulflesje: 50ml Gereedschapsloze kettingspanning Geleverd met batterij en lader.',
        price: '\u20AC 169.95',
        motor: 'Borstelloos',
        vermogen: '400 W',
        volt: '48 V',
        steek: '1/4 inch',
        groef: '0.043 inch',
        bladLengte: '15.24 cm',
        gewicht: '1.09 kg',
        snelheid: 'kettingsnelheid: 8 m/s',
        tank: 'Batterij',
        lengte: 'X',
        imgUrl: '../assets/Kettingzagen/XCR48MCS-KIT.png'
    },
    '8': {
        naam: 'XCR48PS',
        brand: 'Cramer',
        content: 'Lichtgewicht hoogsnoeier. Geleverd met schouderriem. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar',
        price: '\u20AC 219.95',
        motor: 'Borstelloos',
        vermogen: '550 W',
        volt: '48 V',
        steek: '1/4 inch',
        groef: '0.050 inch',
        bladLengte: '25.4 cm',
        gewicht: '3.85 kg',
        snelheid: 'kettingsnelheid: 14 m/s',
        tank: '80 ml',
        lengte: 'X',
        imgUrl: '../assets/Kettingzagen/XCR48PS.png'
    },
};

// Toont de gegevens van het geselecteerde artikel op de pagina
const kettingzaag = kettingzagen[kettingId];
if (kettingzaag) {
    document.getElementById('kettingzaag-naam').textContent = kettingzaag.naam;
    document.getElementById('kettingzaag-brand').textContent = kettingzaag.brand;
    document.getElementById('kettingzaag-content').textContent = kettingzaag.content;
    document.getElementById('kettingzaag-price').textContent = kettingzaag.price;
    document.getElementById('kettingzaag-motor').textContent = kettingzaag.motor;
    document.getElementById('kettingzaag-volt').textContent = kettingzaag.volt;
    document.getElementById('kettingzaag-steek').textContent = kettingzaag.steek;
    document.getElementById('kettingzaag-groef').textContent = kettingzaag.groef;
    document.getElementById('kettingzaag-gewicht').textContent = kettingzaag.gewicht;
    document.getElementById('kettingzaag-snelheid').textContent = kettingzaag.snelheid;;
    document.getElementById('kettingzaag-bladLengte').textContent = kettingzaag.lengte;
    document.getElementById('kettingzaag-tank').textContent = kettingzaag.tank;
    document.getElementById('kettingzaag-lengte').textContent = kettingzaag.lengte;
    document.getElementById('kettingzaag-vermogen').textContent = kettingzaag.vermogen;

    const imageElement = document.getElementById('kettingzaag-image');
    imageElement.src = kettingzaag.imgUrl;
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
