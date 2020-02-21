
// - Can I select an element by id?
let $section = document.querySelector('#javascript')
​
// - Can I confirm an element exists?
if ($section) {
  // Yes, an element was found
  console.log('found')
} else {
  // No, an element was NOT found
  console.log('not found')
}
​
// - How far from the top of the document is an element?
$section.offsetTop
​
// - How far from the top of the viewport is an element?
$section.getBoundingClientRect().top
​
// - How tall is the document?
document.documentElement.scrollHeight
​
// - How tall is the window?
document.documentElement.clientHeight
​
// - How much has the window currently been scrolled?
window.scrollY
​
// - Can I scroll to a particular element?
$section.scrollIntoView({ behavior:'smooth' })
​
// - Can I scroll to a particular px position?
window.scrollTo({left:0, top:0, behavior:'smooth'})
​
// - What is the height(s) of any obstruction(s)?
$section.getBoundingClientRect().height
​
// - Can I capture when an element has triggered a `click` event?
let $link = document.querySelector('.scroll-to')
$link.addEventListener('click', event => { console.log('click') })
​
// - Where is the anchor pointing?
$link.getAttribute('href')
​
​
// - Can I capture window events, like: `scroll`, `resize`, `hashchange`?
window.addEventListener('scroll', event => { console.log('scroll') })
window.addEventListener('resize', event => { console.log('resize') })
window.addEventListener('hashchange', event => { console.log('hashchange') })
Collapse








