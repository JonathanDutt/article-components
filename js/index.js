let $doc = document.documentElement
let $lnk = document.querySelector('.slide-from')
let $bar = document.querySelector('.bar')

// how tall is the document?
$doc.scrollHeight

// how tall is the window?
$doc.clientHeight

// capture some key window events that might be involved
window.addEventListener('scroll', event => { console.log('scrolled') })
window.addEventListener('resize', event => { console.log('resized') })
window.addEventListener('hashchange', event => { console.log('hash change') })

//    how much have you scrolled?
window.scrollY

// capture when a link is clicked
$lnk.addEventListener('click', event => { console.log('clicked') })

//    where is the anchor pointing?
$lnk.getAttribute('href')

// which item am i trying to slide to? 
let $goto = document.querySelector('#document')

// does that element/section exist?
if ($goto) {
  // The element exists
} else {
  // The element does not exist
}

// how far is this element from the top of the document?
$goto.offsetTop

// how far is this element from the top of the viewport?
$goto.getBoundingClientRect().top

// scroll to an element
$goto.scrollIntoView()
$goto.scrollIntoView({ block:'start', behavior:'smooth' })

// scroll to a position
window.scrollTo(0, 0);
window.scrollTo({ top:0, left:0, behavior:'smooth' });

// are there any obstructions, if so, what size are they?
$bar.getBoundingClientRect().height


// use the browser's animation framerate to do something over and over again
let count = 0;  // optional counter
const loop = () => {

  // Check a condition (here, a max number of times it should run: 10)
  // If the limit was hit, escape immediately
  if (++count > 10) return   // "return" quits the function

  // Do whatever the actions is
  console.log(`Iteration number: ${count}`)

  // Loop again if we got this far!
  window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop) // The first loop!



// Select all matching elements
let navAnchors = document.querySelectorAll('nav a')
// Iterate over each found element once, referring to each one as $a
navAnchors.forEach($a => { 

  $a.addEventListener('click', event => { console.log($a.getAttribute('href')) }) 

})


// scrollTo