// Event Capturing, Event Bubbling and Event Delegation

// console.log("hello world");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Capturing events
// Event capturing is the phase before the actual event target is reached. During this phase, 
// the browser starts from the root of the DOM and moves downward through the nesting hierarchy to reach the target element

// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

// Event Bubbling
// Once the event is triggered on the target element, it "bubbles up" through the nesting hierarchy,
// invoking event handlers on each ancestor element in sequence, all the way up to the root. 

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// Event Delegation
// Event delegation is a technique where you attach a single event listener to a common ancestor
// of multiple elements rather than attaching individual event listeners to each element

// grandparent.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// Event Shadowing
// It is used to prevent the default behavior of Event Capturing and Event bubbling

// parent.addEventListener('click', () => {
//     console.log('Parent clicked');
// });

// child.addEventListener('click', (event) => {
//     console.log('Child clicked');
//     event.stopPropagation(); // Prevent event from further propagation
// });
