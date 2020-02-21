


// - Can I select an element by id?
let $goto = document.querySelector('#javascript')

// - Can I confirm an element exists?
if ($goto) {
  // Yes, an element was found
  console.log('found')
} else {
  // No, an element was NOT found
  console.log('was NOT found')
}
// - How far from the top of the document is an element?
$goto.offsetTop
// - How far from the top of the viewport is an element?
$goto.getBoundingClientRect().top
// - How tall is the document?
document.documentElement.scrollHeight
document.querySelector('html')
// - How tall is the window?
document.documentElement.clientHeight

// - How much has the window currently been scrolled?
window.scrollY

// - Can I scroll to a particular element?
$goto.scrollIntoView({ behavior:'smooth' })

// - Can I scroll to a particular px position?
window.scrollTo({left:0, top:0, behavior:'smooth'})

// - What is the height(s) of any obstruction(s)?
$goto.getBoundingClientRect().height

// - Can I capture when an element has triggered a `click` event?


// - Where is the anchor pointing?


// - Can I capture window events, like: `scroll`, `resize`, `hashchange`?
window.addEventListener('scroll', event => { console.log('scroll') })
window.addEventListener('resize', event => { console.log('resize') })
window.addEventListener('hashchange', event => { console.log('hashchange') })
