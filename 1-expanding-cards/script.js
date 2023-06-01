const panels = document.querySelectorAll('.panel')

// console.log(panels[0]);

panels.forEach(panel => {
    panel.addEventListener('click', () => { // ecouteur d'evenement au click
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}