        // Haalt artikel-ID op uit de URL
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');

        // Artikelen
        const articles = {
            '1': { 
                naam: 'XCR48LM48SP',
                brand: 'Cramer', 
                content: 'Aangedreven model - Boost functie voor een hoger toerental van het mes bij hoog gras. Dubbele accuhouder: schakelt automatisch over van 1ste naar 2de accu. 3 in 1: Opvangen / mulchen/zijuitworp. Verstelbaar ergonomisch stuur. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 499.95',
                motor: 'Borstelloos',
                volt: '48V',
                breedte: '48 cm',
                hoogte: '25 - 80 mm',
                inst: 'Centraal, 7 standen',
                gewicht: '31 kg',
                opvang: 'Opvangzak met stofbescherming (55 liter)',
                aandr: 'Aangedreven',
                boost: 'Ja',
                mulch: 'Ja',
                opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
                imgUrl: '../assets/Grasmaaiers/XCR48LM48SP(basic).png',
                duwboom: 'X',
                rijsnelh: 'X'

            },
            '2': { 
                naam: "XCR48LM48SP-KIT",
                brand: 'Cramer', 
                content: 'Aangedreven model- Boost functie voor een hoger toerental van het mes bij hoog gras. Dubbele accuhouder: schakelt automatisch over van 1ste naar 2de accu. 3 in 1: Opvangen / mulchen/zijuitworp. Verstelbaar ergonomisch stuur.',
                price: '\u20AC 624.95',
                motor: 'Borstelloos',
                volt: '48V',
                breedte: '48 cm',
                hoogte: '25 - 80 mm',
                inst: 'Centraal, 7 standen',
                gewicht: '31 kg',
                opvang: 'Opvangzak met stofbescherming (55 liter)',
                aandr: 'Aangedreven',
                boost: 'Ja',
                mulch: 'ja',
                opm: 'Opmerking: Inclusief Lader en laadstation.',
                imgUrl: '../assets/Grasmaaiers/XCR48LM48SP-KIT.png',
                duwboom: 'X',
                rijsnelh: 'X'
            },
            '3': { 
                naam: 'XCR48LM41', 
                brand: 'Cramer', 
                content: 'Duwmodel - Opvouwbaar stuur. 2 in 1: Mulchen en vangen. Verstelbaar ergonomisch stuur. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 469.95',
                motor: 'Borstelloos',
                volt: '48V',
                breedte: '41 cm',
                hoogte: '25 - 80 mm',
                inst: 'Centraal, 6 standen',
                gewicht: '31 kg',
                opvang: 'Opvangzak met stofbescherming (50 liter)',
                aandr: 'Duwmodel',
                mulch: 'Ja',
                opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
                imgUrl: '../assets/Grasmaaiers/48LM41.png',
                boost: 'X',
                duwboom: 'X',
                rijsnelh: 'X'
            },
            '4': { 
                naam: 'XCR48LM41-KIT', 
                brand: 'Cramer', 
                content: 'Duwmodel - Opvouwbaar stuur. 2 in 1: Mulchen en vangen. Verstelbaar ergonomisch stuur. Batterijen en laders optioneel verkrijgbaar. Geleverd met batterij en lader.',
                price: '\u20AC 469.95',
                motor: 'Borstelloos',
                volt: '48V',
                breedte: '41 cm',
                hoogte: '25 - 80 mm',
                inst: 'Centraal, 6 standen',
                gewicht: '31 kg',
                opvang: 'Opvangzak met stofbescherming (50 liter)',
                aandr: 'Duwmodel',
                mulch: 'Ja',
                opm: 'Opmerking: Inclusief lader en laadstation.',
                imgUrl: '../assets/Grasmaaiers/XCR48LM41-KIT.png',
                boost: 'X',
                duwboom: 'X',
                rijsnelh: 'X'
            },
            '5': { 
                naam: 'XCR82LM46SX', 
                brand: 'Cramer', 
                content: 'Aangedreven model (vario) - Brushless motor Dubbele accuhouder: schakelt automatisch over van 1ste naar 2de accu. Automatische boost verhoogt de messnelheid bij dikker of hoger gras. Opvangen/mulchen/zijuitworp. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 664.95',
                motor: 'Borstelloos',
                volt: '82V',
                breedte: '46 cm',
                hoogte: '25 - 80 mm',
                inst: 'Centraal, 7 standen',
                gewicht: '31 kg',
                opvang: 'Opvangzak met stofbescherming (55 liter)',
                aandr: 'Aangedreven',
                mulch: 'Ja',
                imgUrl: '../assets/Grasmaaiers/82LM46SX.png',
                duwboom: 'Instelbaar in 3 standen',
                rijsnelh: '2,16 km/u - 5,4 km/u',
                opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
                boost: 'X'
            },
            '6': { 
                naam: 'XCR82LM51SX', 
                brand: 'Cramer', 
                content: 'Aangedreven model (vario) - Brushless motor Dubbele accuhouder: schakelt automatisch over van 1ste naar 2de accu. Automatische boost verhoogt de messnelheid bij dikker of hoger gras. Opvangen/mulchen/zijuitworp. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 759.95',
                motor: 'Borstelloos',
                volt: '82V',
                vermogen: '2,55 kW',
                gewicht: '',
                breedte: '51 cm',
                hoogte: '25 - 80 mm',
                inst: 'Centraal, 7 standen',
                opvang: 'Opvangzak met stofbescherming (60 liter)',
                aandr: 'Aangedreven',
                imgUrl: '../assets/Grasmaaiers/82LM51SX.png',
                duwboom: 'Instelbaar in 3 standen',
                rijsnelh: '2,16 km/u - 5,4 km/u',
                opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
                boost: 'X',
                mulch: 'X'
            },
            '7': { 
                naam: 'XCR82LM61SX', 
                brand: 'Cramer', 
                content: 'Aangedreven model (vario) - Brushless motor Dubbele accuhouder: schakelt automatisch over van 1ste naar 2de accu. Automatische boost verhoogt de messnelheid bij dikker of hoger gras. Opvangen / mulchen/zijuitworp. Geleverd zonder batterij en lader. Batterijen en laders optioneel verkrijgbaar.',
                price: '\u20AC 1019.95',
                motor: 'Borstelloos',
                volt: '82V',
                vermogen: '1,6 kW',
                breedte: '61 cm (2x 30,5 mm)',
                hoogte: '25 - 80 mm',
                inst: 'Centraal, 7 standen',
                opvang: 'Opvangzak met stofbescherming (65 liter)',
                aandr: 'Aangedreven',
                mulch: 'Ja',
                duwboom: 'Instelbaar in 3 standen',
                rijsnelh: '2,16 km/u - 5,4 km/u',
                imgUrl: '../assets/Grasmaaiers/82LM61SX.png',
                opm: 'Opmerking: Lader en laadstation Niet meegeleverd, apart verkrijgbaar',
            },
            /*'7': { 
                naam: 'XCR48LM41-KIT', 
                content: 'Dit is de inhoud van artikel 7.'
            },
            '8': { 
                naam: 'XCR48LM48SP-KIT', 
                content: 'Dit is de inhoud van artikel 8.'
            },
            '9': { 
                naam: 'XCR82LM46SX', 
                content: 'Dit is de inhoud van artikel 9.'
            },
            '10': { 
                naam: 'XCR82LM51SX', 
                content: 'Dit is de inhoud van artikel 10.'
            }*/
        };

        // Toont de gegevens van het geselecteerde artikel op de pagina
        const article = articles[articleId];
        if (article) {
            document.getElementById('article-naam').textContent = article.naam;
            document.getElementById('article-brand').textContent = article.brand;
            document.getElementById('article-content').textContent = article.content;
            document.getElementById('article-price').textContent = article.price;
            document.getElementById('article-motor').textContent = article.motor;
            document.getElementById('article-volt').textContent = article.volt;
            document.getElementById('article-breedte').textContent = article.breedte;
            document.getElementById('article-hoogte').textContent = article.hoogte;
            document.getElementById('article-inst').textContent = article.inst;
            document.getElementById('article-gewicht').textContent = article.gewicht;
            document.getElementById('article-opvang').textContent = article.opvang;
            document.getElementById('article-aandr').textContent = article.aandr;
            document.getElementById('article-boost').textContent = article.boost;
            document.getElementById('article-mulch').textContent = article.mulch;
            document.getElementById('article-duwboom').textContent = article.duwboom;
            document.getElementById('article-rijsnelh').textContent = article.rijsnelh;
            document.getElementById('opm') .textContent = article.opm;
            
            const imageElement = document.getElementById('article-image');
            imageElement.src = article.imgUrl;
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
    const myElement2 = document.getElementById('myElement2');

    if (myElement.textContent.trim() === 'X' || 'Duwboom') {
        myElement.style.display = 'none';
    } else {
        myElement.style.display = 'block';
    }

    if (myElement2.textContent.trim() === 'X' || 'Rijsnelheid') {
        myElement2.style.display = 'none';
    } else {
        myElement2.style.display = 'block';
    }*/