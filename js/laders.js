        // Haalt artikel-ID op uit de URL
        const urlParams = new URLSearchParams(window.location.search);
        const laderId = urlParams.get('id');

        // Artikelen
        const laders = {
            /*Laders en laadstations 48 V*/ 
            '1': { 
                naam: 'XCR48V96',
                price: '\u20AC 149.95',
                volt: '48 V',
                imgUrl: '../assets/laders/XCR48V96.png',

            },

            '2': { 
                naam: 'XCR48V192',
                price: '\u20AC 209.95',
                volt: '48 V',
                imgUrl: '../assets/laders/XCR48V192.png',

            },

            '3': { 
                naam: 'XCR48C',
                price: '\u20AC 74.95',
                volt: '48 V',
                imgUrl: '../assets/laders/XCR48C.png',

            },
            '4': { 
                naam: 'XCR48C2',
                price: '\u20AC 119.95',
                volt: '48 V',
                imgUrl: '../assets/laders/XCR48C2.png',
            },

            '5': { 
                naam: 'XCR48SK96',
                price: '\u20AC 179.95',
                volt: '48 V',
                imgUrl: '../assets/laders/XCR48SK96.png',
            },

            '6': { 
                naam: 'XCR48SK192',
                price: '\u20AC 239.95',
                volt: '48 V',
                imgUrl: '../assets/laders/XCR48SK192.png',
            },

             /*Laders en laadstations 82 V*/ 
             '7': { 
                naam: 'XCR82V180',
                price: '\u20AC 209.95',
                volt: '82 V',
                imgUrl: '../assets/laders/XCR82V180.png',
            },

            '8': { 
                naam: 'XCR82V290P',
                price: '\u20AC 329.95',
                volt: '82 V',
                imgUrl: '../assets/laders/XCR82V290P.png',
            },

            '9': { 
                naam: 'XCR82V360',
                price: '\u20AC 359.95',
                volt: '82 V',
                imgUrl: '../assets/laders/XCR82V360.png',
            },

            '10': { 
                naam: 'XCR82V580P',
                price: '\u20AC 509.95',
                volt: '82 V',
                imgUrl: '../assets/laders/XCR82V580P.png',
            },

            '11': { 
                naam: 'XCR82V430X',
                price: '\u20AC 539.95',
                volt: '82 V',
                imgUrl: '../assets/laders/XCR82V430X.png',
            },

            '12': { 
                naam: 'XCR82C1G',
                price: '\u20AC 104.95',
                volt: '82 V',
                imgUrl: '../assets/laders/XCR82C1G.png',
            },

            '13': { 
                naam: 'XCR82C2',
                price: '\u20AC 169.95',
                volt: '82 V',
                imgUrl: '../assets/laders/XCR82C2.png',
            },
        };

        // Toont de gegevens van het geselecteerde artikel op de pagina
        const lader = laders[laderId];
        if (lader) {
            document.getElementById('lader-naam').textContent = lader.naam;
            document.getElementById('lader-price').textContent = lader.price;
            document.getElementById('lader-volt').textContent = lader.volt;

            const imageElement = document.getElementById('lader-image');
            imageElement.src = lader.imgUrl;
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