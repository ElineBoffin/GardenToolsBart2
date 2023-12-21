        // Haalt artikel-ID op uit de URL
        const urlParams = new URLSearchParams(window.location.search);
        const zitmaaierId = urlParams.get('id');

        // Artikelen
        const zitmaaiers = {
            '1': { 
                naam: 'XCR82LT107',
                brand: 'Cramer', 
                content: 'De 82LT107 is een 82V accu-aangedreven zitmaaier voor huishoudelijk gebruik met een 107 cm stalen mulchdek en dubbele 1,2 kW motoren, voor uitzonderlijke maaiprestaties en productiviteit over grote oppervlakken tot 10.500 m2 op een enkele lading (6 x 8 Ah accu\u0027s). Met ergonomisch ontwerp en uitstekend zicht voor comfort tijdens langdurig gebruik, en hoge wendbaarheid dankzij de kleine draaicirkel.',
                price: '\u20AC 5999.00',
                motor: 'Borstelloos',
                maaidek: 'Staal - 107 cm',
                maaimotoren: '2 motoren met elk 1.2 kW',
                batterij: '1.44 kWh - 3.45 kWh',
                messnelheid: '3000 tpm',
                aantalM: '2',
                hoogte: '38 - 114 mm',
                hoogteRegeling: '7 posities / manueel regelbaar',
                maaisysteem: 'Mulchen als standaard, zijuitworp optioneel verkrijgbaar',
                led: 'vooraan',
                zittig: 'Instelbare stoel',
                parkeerrem: 'Ja, manueel',
                beveiliging: 'Nee',
                snelhV: '0 - 12,8 km/u',
                snelhA: '0 - 4,8 km/u',
                maxOpp: '10.500 m²',
                laadtijd: '86 min.',
                wiel: 'Voor: 15 x 6-6 / Achter: 20 x 10,8',
                gewicht: '187 kg',
                ip: 'IPX4',
                imgUrl: '../assets/Zitmaaiers/82LT107.png',

            },

            '2': { 
                naam: 'XCR82ZT107',
                brand: 'Cramer', 
                content: 'De 82ZT107 is een 82V accu-aangedreven residentiële zero-turn maaier met een 107 cm stalen mulchdek en dubbele 1,2 kW motoren, voor uitzonderlijke maaiprestaties en productiviteit over grote oppervlakken tot 10.500 m2 op een enkele lading (met 6 x 8 Ah accu\u0027s). Met ergonomisch ontwerp en uitstekend zicht voor comfort tijdens langdurig gebruik, en hoge wendbaarheid dankzij de individuele wielmotoren om ter plaatse te draaien.',
                price: '\u20AC 7999.00',
                motor: 'Borstelloos',
                maaidek: 'Staal - 107 cm',
                maaimotoren: '2 motoren met elk 1.2 kW',
                batterij: '2.16 kWh - 3.45 MAX',
                messnelheid: '2400 - 3000 tpm',
                aantalM: '2',
                hoogte: '38 - 114 mm',
                hoogteRegeling: '7 posities / manueel regelbaar',
                maaisysteem: 'Mulchen als standaard, zijuitworp optioneel verkrijgbaar',
                led: 'vooraan',
                zittig: 'Instelbare stoel',
                parkeerrem: 'Ja, manueel',
                beveiliging: 'Nee',
                snelhV: '0 - 12,9 km/u',
                snelhA: '0 - 12,9 km/u',
                maxOpp: '10.500 m²',
                laadtijd: '86 min.',
                wiel: 'Voor: 11 x 4-5 / Achter: 20 x 10-8',
                gewicht: '232 kg',
                ip: 'IPX4',
                imgUrl: '../assets/Zitmaaiers/82LT107.png',

            },

            '3': { 
                naam: 'XCR82ZT132',
                brand: 'Cramer', 
                content: 'De 82-Volt Zero Turn-maaier is ontworpen voor professioneel gazononderhoud en grote grasoppervlaktes. De maaier heeft een stalen maaidek van 132 cm en een batterij van 16 kilowattuur. Hij draait de hele dag en maait tot 4 hectare per lading. Andere kenmerken zijn onder meer een maaidek met voetpedaalbediening voor eenvoudige afstelling van de maaihoogte en een elektrische start waarmee gebruikers aangedreven en niet-aangedreven accessoires kunnen gebruiken. Alle schakelaars, displays en borstelloze motoren zijn IPX4 plenswaterdicht. De 82V accu-aangedreven zitmaaier is een echt milieuvriendelijk alternatief voor benzine aangedreven machines.',
                price: '\u20AC 27849.00',
                motor: 'Borstelloos',
                maaidek: 'Staal - 132 cm',
                maaimotoren: '3 motoren met elk 1.5 kW',
                batterij: '16 kWh',
                messnelheid: '2800 - 3200 tpm',
                aantalM: '3',
                hoogte: '25 - 150 mm',
                hoogteRegeling: '18 posities / manueel regelbaar',
                maaisysteem: 'Mulchen als standaard, zijuitworp optioneel verkrijgbaar',
                led: 'vooraan',
                zittig: 'Geveerde stoel',
                parkeerrem: 'Elektromagnetisch',
                beveiliging: 'Ja',
                snelhV: '0 - 16 km/u',
                snelhA: '0 - 8 km/u',
                maxOpp: '40.000 m² hard / 32.000 m² gemiddeld/ 24.000 m² licht',
                laadtijd: 'standaard 10-12 u / snellader 2-3 u (apart verkrijgbaar).',
                wiel: 'Voor: 13 x 6.5-5 / Achter: 20 x 13.5-12',
                gewicht: '631 kg',
                ip: 'IPX4',
                imgUrl: '../assets/Zitmaaiers/82ZT132(voor).png',

            },
        };

        // Toont de gegevens van het geselecteerde artikel op de pagina
        const zitmaaier = zitmaaiers[zitmaaierId];
        if (zitmaaier) {
            document.getElementById('zitmaaier-naam').textContent = zitmaaier.naam;
            document.getElementById('zitmaaier-brand').textContent = zitmaaier.brand;
            document.getElementById('zitmaaier-content').textContent = zitmaaier.content;
            document.getElementById('zitmaaier-price').textContent = zitmaaier.price;
            document.getElementById('zitmaaier-motor').textContent = zitmaaier.motor;
            document.getElementById('zitmaaier-maaidek').textContent = zitmaaier.maaidek;
            document.getElementById('zitmaaier-maaimotoren').textContent = zitmaaier.maaimotoren;
            document.getElementById('zitmaaier-batterij').textContent = zitmaaier.batterij;
            document.getElementById('zitmaaier-messnelheid').textContent = zitmaaier.messnelheid;
            document.getElementById('zitmaaier-aantalM').textContent = zitmaaier.aantalM;
            document.getElementById('zitmaaier-hoogte').textContent = zitmaaier.hoogte;
            document.getElementById('zitmaaier-hoogteRegeling').textContent = zitmaaier.hoogteRegeling;
            document.getElementById('zitmaaier-maaisysteem').textContent = zitmaaier.maaisysteem;
            document.getElementById('zitmaaier-led').textContent = zitmaaier.led;
            document.getElementById('zitmaaier-zitting').textContent = zitmaaier.zitting;
            document.getElementById('zitmaaier-parkeerrem').textContent = zitmaaier.parkeerrem;
            document.getElementById('zitmaaier-beveiliging').textContent = zitmaaier.beveiliging;
            document.getElementById('zitmaaier-snelhV').textContent = zitmaaier.snelhV;
            document.getElementById('zitmaaier-snelhA').textContent = zitmaaier.snelhA;
            document.getElementById('zitmaaier-maxOpp').textContent = zitmaaier.maxOpp;
            document.getElementById('zitmaaier-laadtijd').textContent = zitmaaier.laadtijd;
            document.getElementById('zitmaaier-wiel').textContent = zitmaaier.wiel;
            document.getElementById('zitmaaier-gewicht').textContent = zitmaaier.gewicht;

            document.getElementById('zitmaaier-ip').textContent = zitmaaier.ip;
            
            const ZitmaaierImageElement = document.getElementById('zitmaaier-image');
            ZitmaaierImageElement.src = zitmaaier.imgUrl;
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