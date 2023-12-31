        // Haalt artikel-ID op uit de URL
        const urlParams = new URLSearchParams(window.location.search);
        const robotId = urlParams.get('id');

        // Artikelen
        const robots = {
            '1': { 
                naam: 'XCR48LM48SP',
                brand: 'Cramer', 
                content: 'Geschikt voor oppervlaktes tot 800 m2. Eenvoudig, effici\u00EBnt en met volledige functionaliteit. Volledige controle met app: Statusinstellingen, Software updates. Bluetooth connectiviteit. Verwijderbare behuizing en eenvoudige reiniging met een tuinslang (IPX5 sproeidicht). Effici\u00EBnt en onderhoudsvrij dankzij borstelloze motoren. Messenschijf met haarscherpe dubbel geslepen pivoterende messen.',
                price: '\u20AC 999.95',
                motor: 'Borstelloos',
                breedte: '17 cm',
                hoogte: '20 - 60 mm',
                inst: 'Manueel',
                geluid: '58 dB',
                helling: '30%',
                oppTot: '800  m\u00B2',
                bl: 'Bluetooth',
                werk: '55 min.',
                laad: '70 min.',
                gewicht: '7,2kg',
                gps: 'X',
                regen: 'X',
                vorst: 'X',
                batterij: 'n.v.t',
                imgUrl: '../assets/Robotmaaiers/RM800.png',

            },
            '2': { 
                naam: 'XCRRM1000-G',
                brand: 'Cramer', 
                content: 'Robotmaaier met nieuwe 2P batterij 4Ah. Geschikt voor oppervlaktes tot 1.000 m2. Eenvoudig, effici\u00EBnt en met volledige functionaliteit. Mobiele GSM-communicatiemodule voor GPS-positionering en app-verbinding. Vorst- en regensensoren om uw gazon te beschermen Afstandsbediening via app: antidiefstalbeveiliging, apparaatstatus en aangepaste instellingen. Verwijderbare behuizing en eenvoudige reiniging met een tuinslang (IPX5 sproeidicht). Effici\u00EBnt en onderhoudsvrij dankzij borstelloze motoren - Messenschijf met haarscherpe dubbel geslepen pivoterende messen.',
                price: '\u20AC 1199.95',
                motor: 'Borstelloos',
                breedte: '22 cm',
                hoogte: '20 - 60 mm',
                inst: 'Manueel',
                geluid: '57 dB',
                helling: '35% / 20\u00B0',
                oppTot: '1000 m\u00B2',
                bl: 'Bluetooth',
                werk: '55 min.',
                laad: '140 min.',
                gewicht: '11kg',
                gps: 'Ja',
                regen: 'Ja',
                vorst: 'Ja',
                batterij: '2100 mAh',
                imgUrl: '../assets/Robotmaaiers/RM1000.png',
            },
            '3': { 
                naam: 'XCRRM1500-G',
                brand: 'Cramer', 
                content: 'Robotmaaier met nieuwe 2P batterij 4Ah. Geschikt voor oppervlaktes tot 1.500 m2. Eenvoudig, effici\u00EBnt en met volledige functionaliteit. Mobiele GSM-communicatiemodule voor GPS-positionering en app-verbinding. Vorst- en regensensoren om uw gazon te beschermen Afstandsbediening via app: antidiefstalbeveiliging, apparaatstatus en aangepaste instellingen. Verwijderbare behuizing en eenvoudige reiniging met een tuinslang (IPX5 sproeidicht). Effici\u00EBnt en onderhoudsvrij dankzij borstelloze motoren - Messenschijf met haarscherpe dubbel geslepen pivoterende messen.',
                price: '\u20AC 1499.95',
                motor: 'Borstelloos',
                breedte: '22 cm',
                hoogte: '20 - 60 mm',
                inst: 'Manueel',
                geluid: '57 dB',
                helling: '35% / 20\u00B0',
                oppTot: '1500 m\u00B2',
                bl: 'Bluetooth',
                werk: '70 min.',
                laad: '70 min.',
                gewicht: '11kg',
                gps: 'Ja',
                regen: 'Ja',
                vorst: 'Ja',
                batterij: '2100 mAh',
                imgUrl: '../assets/Robotmaaiers/RM1000.png',
            },
            '4': { 
                naam: 'XCRRM2000-G',
                brand: 'Cramer', 
                content: 'Robotmaaier met nieuwe 2P batterij 4Ah. Geschikt voor oppervlaktes tot 2.000 m\u00B2. Eenvoudig, effici\u00EBnt en met volledige functionaliteit. Mobiele GSM-communicatiemodule voor GPS-positionering en app-verbinding. Vorst- en regensensoren om uw gazon te beschermen Afstandsbediening via app: antidiefstalbeveiliging, apparaatstatus en aangepaste instellingen. Verwijderbare behuizing en eenvoudige reiniging met een tuinslang (IPX5 sproeidicht). Effici\u00EBnt en onderhoudsvrij dankzij borstelloze motoren - Messenschijf met haarscherpe dubbel geslepen pivoterende messen.',
                price: '\u20AC 1699.95',
                motor: 'Borstelloos',
                breedte: '22 cm',
                hoogte: '20 - 60 mm',
                inst: 'Manueel',
                geluid: '57 dB',
                helling: '35% / 20\u00B0',
                oppTot: '2000 m\u00B2',
                bl: 'Bluetooth',
                werk: '70 min.',
                laad: '40 min.',
                gewicht: '11kg',
                gps: 'Ja',
                regen: 'Ja',
                vorst: 'Ja',
                batterij: '2100 mAh',
                imgUrl: '../assets/Robotmaaiers/RM1000.png',

            },
            '5': { 
                naam: 'XCRRM2700-G',
                brand: 'Cramer', 
                content: 'Robotmaaier met nieuwe 2P batterij 4Ah. Geschikt voor oppervlaktes tot 2.700 m\u00B2. Eenvoudig, effici\u00EBnt en met volledige functionaliteit. Mobiele GSM-communicatiemodule voor GPS-positionering en app-verbinding. Vorst- en regensensoren om uw gazon te beschermen Afstandsbediening via app: antidiefstalbeveiliging, apparaatstatus en aangepaste instellingen. Verwijderbare behuizing en eenvoudige reiniging met een tuinslang (IPX5 sproeidicht). Effici\u00EBnt en onderhoudsvrij dankzij borstelloze motoren - Messenschijf met haarscherpe dubbel geslepen pivoterende messen.',
                price: '\u20AC 1899.95',
                motor: 'Borstelloos',
                breedte: '22 cm',
                hoogte: '20 - 60 mm',
                inst: 'Manueel',
                geluid: '57 dB',
                helling: '35% / 20\u00B0',
                oppTot: '2700 m\u00B2',
                bl: 'Bluetooth',
                werk: '140 min.',
                laad: '70 min.',
                gewicht: '11kg',
                gps: 'Ja',
                regen: 'Ja',
                vorst: 'Ja',
                batterij: '2100 mAh',
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
            document.getElementById('robot-gps').textContent = robot.gps;
            document.getElementById('robot-regen').textContent = robot.regen;
            document.getElementById('robot-vorst').textContent = robot.vorst;
            document.getElementById('robot-batterij').textContent = robot.batterij;

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