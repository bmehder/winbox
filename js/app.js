const about = document.querySelector('#about')
const travel = document.querySelector('#travel')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const travelContent = document.querySelector('#travel-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('rgba(32,32,32,0.90)')
    },
    onblur: function () {
      this.setBackground('rgba(0,170,0,0.90)')
    },
  })
})

travel.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Travel Me',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: travelContent,
    onfocus: function () {
      this.setBackground('rgba(32,32,32,0.90)')
    },
    onblur: function () {
      this.setBackground('rgba(0,170,0,0.90)')
    },
  })
})

// contact.addEventListener('click', () => {
//   const contactBox = new WinBox({
//     title: 'Contact Me',
//     width: '400px',
//     height: '400px',
//     top: 150,
//     right: 50,
//     bottom: 50,
//     left: 250,
//     mount: contactContent,
//     onfocus: function () {
//       this.setBackground('#00aa00')
//     },
//     onblur: function () {
//       this.setBackground('#767676')
//     },
//   })
// })
