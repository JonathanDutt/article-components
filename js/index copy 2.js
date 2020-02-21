// DOCUMENT REFERENCES
let $doc = document.documentElement
let $win = window
let $bar = document.querySelector('.bar')
let $prog = document.querySelector('.progress')
let $h1 = document.querySelector('#heading')
let $title = document.querySelector('.title')


// Capture the 'scroll' of the window
$win.addEventListener('scroll', event => {
  // Get the textContent from the <h1>
let titleStr = $h1.textContent

$title.textContent= `${titleStr}`

let posH = 60

let winScroll = $win.scrollY

// Apply opacity 0 to the .h1-copy
// Apply opacity 1 to the .h1-copy
// if (heading is "in view") by checking how much has scrolled
if (posH >= winScroll) {
  $title.style.opacity = 0
} else {
  $title.style.opacity = 1
}
// else (heading is NOT "in view") by checking how much has scrolled
})