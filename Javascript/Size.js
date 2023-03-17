(function () {
    const div = document.querySelector('.bg-image'),
      src = div.getAttribute('data-bg').split(','), // Exctracts URLs from data-bg to an array
      html = document.documentElement; // A reference to <html> element
    html.style.setProperty('--bg-desktop', `url(${src[0]})`);
    html.style.setProperty('--bg-mobile', `url(${src[1]})`);  
  }());