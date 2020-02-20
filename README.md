# Article Components

## Problem solving: step-by-step

Problem solving process for browser-based interaction design:

1. Writing a paragraph to outline the solution as you understand it
2. Prototype with the "Element" tab (Chrome Developer Tools Panel) if relevant
3. Break the paragraph into a series of single **tasks** that are not at all connected to each other
4. (Optional) Store references to all document elements that you may interact with
5. Write *one* line of code for each **task** you identified above
6. Test each line's job individually using static values to simplify (where necessary)
7. Determine all of the interactions ("Events") necessary to run the actions
8. Match the tasks with the necessary interaction ("event listeners") to solve
9. Test the entire application, including all conceivable scenarios a user may find themselves in

## Challenges

### Part 1: Scroll progress indicator

**Goal:** Create a visual progress indicator to show a user how much progress has been made for a given article.

#### Prototype (HTML/CSS)
1. Add a `<div>` element with a `.progress-bar` class to the HTML document to build the component UI
1. Style the element to be `fixed` to the `top` & `left` with a specified `height` (ie, not `auto`) and a `background-color` of your choice
2. Test a few `width` value to see how the progress bar might behave and as a way to prototype the UI behaviour for the solution

#### Solve (JavaScript)
1. `if` the `document`'s `height` is less than the height of the window, the progress bar should not be on `display` at all (because no scrolling will be possible)
2. *Listen* for the `window`'s `scroll` Event, then calculate the percentage that the `window` has scrolled at that point, relative to the total possible amount that can possibly be scrolled
   1. Translate that computed value (a percentage) to the `width` of the `.progress-bar`

### Part 2: Progress title

**Goal:** Put the document's `<h1>` into the fixed top `.bar` when the heading has been scrolled off the page.

#### Prototype (HTML/CSS)
1. Modify the `.progress-bar` HTML to create an outer `<div>` with class `.bar` and an inner `<div>` with class `.progress`
1. `.bar` should remain `fixed` as before
1. `.progress` can be `absolute` or remain `static` (but should not be `fixed`) to stay within its `.bar` parent
1. The `.bar` should be the full width of the window and have a translucent `background-color` to always be present, but not block content below it
1. When the `.bar` is in the `:hover` state, the bar's `background-color` should become fully opaque
1. The scroll-progress percentage should now be applied to the `.progress` element to grow its `width` within the parent `.bar`
1. Create a new `<div>` element and apply a style that allows it to sit in the `.bar` above the `.progress` (making it `absolute` makes it easy to layer the `position`)

#### Solve (JavaScript)
1. Copy `textContent` from the article's `<h1>` is copied into the `bar` so the user knows that the name of the article that the progress is tracking
1. Apply `opacity: 0` to the new heading and fade it back in only `if` the window has scrolled enough `px` such that the actual `<h1>` is no longer within view of the document
   1. Look for a property of the `<h1>` that would indicate where it is relative to the window when you would consider it no longer visible
   2. Check if the `<h1>` is either "in view" or not. If so, fade out the heading "copy" element; If not, fade it in.

#### Combine Part 1 & Part 2
1. Combine the work from Part 1 with the work from Part 2 into a single scroll listener
1. To turn this into a practical plugin component that can be added to any page, the HTML (and ideally even the CSS) must be created exclusively with Javascript. 
   1. Use `createElement()` and `appendChild()` to dynamically create the `div`, assign it its appropriate `className` and any necessary `innerHTML` for the sub elements

### Part 3: Word count

**Goal:** Count the total number of words in the article. Determine the number of words per minute that you read. Combine these values to show the user how many minutes this article might take to read. "5 minutes". 

Solve this by determining the number of words in the `<article>` by getting all of its `textContent` and counting the spaces (or using comparable techniques).

### Part 4: Scroll to

**Goal:** When an internal navigation anchor is clicked, the browser scrolls the `window` to a specific element in the document. Rather than making a direct jump to the element (the browser's "default" behaviour), improve the user experience by animating the scroll of the window to the correct part of the document. Ensure you account for any known obstructions (elements `fixed` to the top of the `window`).

Analyze how an internal `#id` anchor behaves. Consider what your goal is. Ask yourself some relevant questions to help with a solution:

- Can I capture when an element has triggered a `click` event?
- Can I apply that same functionality to many elements?
- Where is the anchor pointing?
- Can I select an element using a dynamic selector string?
- Can I confirm an element exists?
- How far from the top of the document is an element?
- How far from the top of the viewport is an element?
- How tall is the document?
- How tall is the window?
- How much has the window currently been scrolled?
- Can I scroll to a particular element?
- Can I scroll to a particular px position?
- What is the height(s) of any obstruction(s)?
- Can I capture window events, like: `scroll`, `resize`, `hashchange`?
- Can I animate using the browser's framerate?
