        // Haalt artikel-ID op uit de URL
        const urlParams = new URLSearchParams(window.location.search);
        const robotId = urlParams.get('id');

        // Artikelen
        const robots = {
            '1': { 
                naam: 'XCR48LM48SP',
                brand: 'Cramer', 
                content: 'Grasmaaier - Aangedreven model - Boost functie voor een hoger toerental van het mes bij hoog gras. Dubbele accuhouder: schakelt automatisch over van 1ste naar 2de accu. 3 in 1: Opvangen / mulchen / zijuitworp. Verstelbaar ergonomisch stuur.',
                price: '\u20AC 999.95',
                motor: 'Borstelloos',
                breedte: '17 cm',
                hoogte: '20 - 60 mm',
                inst: 'Manueel',
                geluid: '58 dB',
                helling: '30%',
                oppTot: '800 m²',
                bl: 'Bluetooth',
                werk: '55 min.',
                laad: '70 min.',
                gewicht: '11kg',
                imgUrl: '../assets/Robotmaaiers/RM800.png',

            },
            '2': { 
                naam: 'XCRRM1000-G',
                brand: 'Cramer', 
                content: 'Grasmaaier - Aangedreven model - Boost functie voor een hoger toerental van het mes bij hoog gras. Dubbele accuhouder: schakelt automatisch over van 1ste naar 2de accu. 3 in 1: Opvangen / mulchen / zijuitworp. Verstelbaar ergonomisch stuur.',
                price: '\u20AC 1199.95',
                motor: 'Borstelloos',
                breedte: '22 cm',
                hoogte: '20 - 60 mm',
                inst: 'Manueel',
                geluid: '58 dB',
                helling: '30%',
                oppTot: '800 m²',
                bl: 'Bluetooth',
                werk: '55 min.',
                laad: '70 min.',
                gewicht: '11kg',
                imgUrl: '../assets/Robotmaaiers/RM1000.png',

            },
        };

        // Toont de gegevens van het geselecteerde artikel op de pagina
        const robot = robots[robotId];
        if (robot) {
            document.getElementById('robot-naam').textContent = robot.naam;
            document.getElementById('robot-brand').textContent = robot.brand;
            document.getElementById('robot-content').textContent = robot.content;
            document.getElementById('robot-price').textContent = robot.price;
            document.getElementById('robot-motor').textContent = robot.motor;
            document.getElementById('robot-inst').textContent = robot.inst;
            document.getElementById('robot-breedte').textContent = robot.breedte;
            document.getElementById('robot-hoogte').textContent = robot.hoogte;
            document.getElementById('robot-geluid').textContent = robot.geluid;
            document.getElementById('robot-helling').textContent = robot.helling;
            document.getElementById('robot-oppTot').textContent = robot.oppTot;
            document.getElementById('robot-bl').textContent = robot.bl;
            document.getElementById('robot-werk').textContent = robot.werk;
            document.getElementById('robot-laad').textContent = robot.laad;
            document.getElementById('robot-gewicht').textContent = robot.gewicht;
            
            const imageElement = document.getElementById('robot-image');
            imageElement.src = robot.imgUrl;
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