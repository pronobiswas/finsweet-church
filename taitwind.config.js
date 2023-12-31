tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
          bg: '#0D0D0D',
          btnbg: '#FFD2A4'
        },
        fontFamily: {
          roboto: 'Roboto Condensed'
          
        },
        backgroundImage: {
            'bannerbg': "url('./images/banner-bg.jpg')",
            'footer-texture': "url('/img/footer-texture.png')",
            'overlay': 'linear-gradient(40deg, rgba(6, 6, 6, 0.76) 16.68%, rgba(0, 0, 0, 0.07) 96.44%);',
            'text-clip': ' linear-gradient(110deg, #A50E2B -53.83%, #DC6853 62.61%);',
            'urlbg': "url('./images/save.jpg')",
          }
    
      }
    }
  }