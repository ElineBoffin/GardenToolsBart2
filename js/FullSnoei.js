const openFullScreen = (element) => {
    if (element.requestFullScreen) {
      element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      // Chrome, Safari and Opera
      element.webkitRequestFullScreen();
    } else if (element.msRequestFullScreen) {
      // IE / Edge
      element.msRequestFullScreen();
    }
  }
  
  const imageSnoei = document.querySelector('.profile-img-snoei2')

  //Blad
  imageSnoei.addEventListener('click',(e) => {
    const imgH = e.currentTarget;
    openFullScreen(imgH)
  })

  imageSnoei.addEventListener('touchstart',(e) => {
    const imgH = e.currentTarget;
    openFullScreen(imgH)
  })
  
  document.addEventListener('click', () => {
    if (document.fullscreenElement) { 
      document.exitFullscreen()
        .then(() => console.log("Document Exited form Full screen mode"))
        .catch((err) => console.error(err))
    }
  })
  
  document.addEventListener('touchstart', () => {
    if (document.fullscreenElement) { 
      document.exitFullscreen()
        .then(() => console.log("Document Exited form Full screen mode"))
        .catch((err) => console.error(err))
    }
  })