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
  
  const image = document.querySelector('.profile-img')
  
  image.addEventListener('click',(e) => {
    const img = e.currentTarget;
    openFullScreen(img)
  })
  
  image.addEventListener('touchstart',(e) => {
    const img = e.currentTarget;
    openFullScreen(img)
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