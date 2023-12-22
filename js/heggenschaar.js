        // Haalt artikel-ID op uit de URL
        const urlParams = new URLSearchParams(window.location.search);
        const hegId = urlParams.get('id');

        // Artikelen
        const heggenscharen = {
            '1': { 
                naam: 'XCR48HD66',
                brand: 'Cramer', 
                content: 'Draaibaar handvat - Magnesium drijfwerk. Met geïntegreerde neusbeschermer. Achteruitfunctie om de messen los te maken indien ze klem komen te zitten. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 239.95',
                motor: 'Borstelloos',
                vermogen: '300 W',
                volt: '48 V',
                snijLengte: '66 cm',
                pitch: '32 cm',
                handvat: '3 posities',
                gewicht: '3.6 kg',
                snelheid: '4000 sneden/min',
                capaciteit: 'X',
                lengte: '?',
                imgUrl: '../assets/Heggenscharen/XCR48HD66.png'

            },
            '2': { 
                naam: 'XCR82HD62',
                brand: 'Cramer', 
                content: 'Brushless motor - Draaibaar handvat - Magnesium drijfwerk. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 479.95',
                motor: 'Borstelloos',
                vermogen: 'X',
                volt: '82 V',
                snijLengte: '62 cm',
                pitch: 'X',
                handvat: '+/- 90\u00B0',
                gewicht: '3.7 kg',
                snelheid: '2800-3200-4000 sneden/min',
                capaciteit: 'Slag/snijdikte: 40mm / 30mm',
                lengte: '?',
                imgUrl: '../assets/Heggenscharen/XCR82HD62.png'
            },
            '3': { 
                naam: 'XCR82HD75',
                brand: 'Cramer', 
                content: 'Brushless motor - Draaibaar handvat - Magnesium drijfwerk. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 519.95',
                motor: 'Borstelloos',
                vermogen: 'X',
                volt: '82 V',
                snijLengte: '75 cm',
                pitch: 'X',
                handvat: '+/- 90\u00B0',
                gewicht: '4.1 kg',
                snelheid: '2800-3200-4000 sneden/min',
                capaciteit: 'Slag/snijdikte: 40mm / 30mm',
                lengte: '?',
                imgUrl: '../assets/Heggenscharen/XCR82HD62.png'
            },
            '4': { 
                naam: 'XCR82HPH23',
                brand: 'Cramer', 
                content: 'Heggenschaar op steel - Brushless motor - Snijlengte: 61 cm - BasicAssist schouderriem - Draaihoek: -45° tot 90° in zeven standen verstelbaar. Messnelheid instelbaar. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 424.95',
                motor: 'Borstelloos',
                vermogen: 'X',
                volt: '82 V',
                snijLengte: '61 cm',
                pitch: 'X',
                handvat: 'Schouderriem',
                gewicht: '4.5 kg',
                snelheid: '4300 sneden/min',
                capaciteit: 'Slag/snijdikte: 38mm / 30mm',
                lengte: '2.3m',
                imgUrl: '../assets/Heggenscharen/XCR82PH23.png'
            },
            '5': { 
                naam: 'XCR82HPH23',
                brand: 'Cramer', 
                content: 'Heggenschaar op steel - Brushless motor - Snijlengte: 61 cm - BasicAssist schouderriem - Draaihoek: -45° tot 90° in zeven standen verstelbaar. Messnelheid instelbaar. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 424.95',
                motor: 'Borstelloos',
                vermogen: 'X',
                volt: '82 V',
                snijLengte: '61 cm',
                pitch: 'X',
                handvat: 'Schouderriem',
                gewicht: '4.5 kg',
                snelheid: '4300 sneden/min',
                capaciteit: 'Slag/snijdikte: 38mm / 30mm',
                lengte: '2.3m',
                imgUrl: '../assets/Heggenscharen/XCR82PH23.png'
            },
            '6': { 
                naam: 'XCR48PH',
                brand: 'Cramer', 
                content: 'Telescopische heggenschaar op steel - Brushless motor - Snijlengte: 51 cm BasicAssist schouderriem - Draaihoek: -45° tot 90°, in 7 standen verstelbaar. Variabele messnelheid. Omkeerbare snoeirichting om geblokkeerde messen te lossen. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 219.95',
                motor: 'Borstelloos',
                vermogen: 'X',
                volt: '48 V',
                snijLengte: '51 cm',
                pitch: '30 cm',
                handvat: 'Schouderriem',
                gewicht: '4 kg',
                snelheid: '3200 sneden/min',
                capaciteit: 'Slag/snijdikte: 38mm / 30mm',
                lengte: '2.9 m',
                imgUrl: '../assets/Heggenscharen/XCR48PH-Snoeier.png'
            },
        };

        // Toont de gegevens van het geselecteerde artikel op de pagina
        const heg = heggenscharen[hegId];
        if (heg) {
            document.getElementById('heg-naam').textContent = heg.naam;
            document.getElementById('heg-brand').textContent = heg.brand;
            document.getElementById('heg-content').textContent = heg.content;
            document.getElementById('heg-price').textContent = heg.price;
            document.getElementById('heg-motor').textContent = heg.motor;
            document.getElementById('heg-volt').textContent = heg.volt;
            document.getElementById('heg-vermogen').textContent = heg.vermogen;
            document.getElementById('heg-snijLengte').textContent = heg.snijLengte;
            document.getElementById('heg-pitch').textContent = heg.pitch;
            document.getElementById('heg-handvat').textContent = heg.handvat;
            document.getElementById('heg-gewicht').textContent = heg.gewicht;
            document.getElementById('heg-snelheid').textContent = heg.snelheid;
            document.getElementById('heg-capaciteit').textContent = heg.capaciteit;
            document.getElementById('heg-lengte').textContent = heg.lengte;
            
            const imageElement = document.getElementById('heg-image');
            imageElement.src = heg.imgUrl;
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
