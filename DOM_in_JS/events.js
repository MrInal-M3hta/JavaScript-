/*

 * @file events.js
 * @description This file contains various event listeners for handling user interactions
 *              with HTML elements such as buttons, inputs, selects, and more.
 * 
 * Event Listeners:
 * 
 * 1. Click Event: Logs a message when a button is clicked.
 * 2. Input Event: Logs the current value of an input field as the user types.
 * 3. Change Event: Logs the selected value of a dropdown when it changes.
 * 4. Mouse Events: Logs messages when the mouse enters or leaves a specified box.
 * 5. Keyboard Events: Logs the key pressed or released by the user.
 * 6. Form Events: Prevents the default form submission and logs a message when submitted.
 * 7. Focus/Blur Events: Logs messages when an input field gains or loses focus.
 * 8. Window Events: Logs messages when the window is resized or scrolled.
 * 9. Load Event: Logs a message when the page is fully loaded.
 * 10. Unload Event: Logs a message before the page is unloaded.
 * 11. Drag Events: Logs messages for drag-and-drop interactions.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget} for more information on event targets.
 * 
 * @typedef {Event} Event
 * @property {HTMLElement} target - The target property of the event object refers to the 
 *                                  element that triggered the event. It allows access to 
 *                                  the element's properties and methods.
 
 */

// 1. Click Event
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
});

// 2. Input Event
const input = document.getElementById('myInput');
input.addEventListener('input', function(event) {
    console.log('Input value:', event.target.value);
});

// 3. Change Event
const select = document.getElementById('mySelect');
select.addEventListener('change', function(event) {
    console.log('Selected:', event.target.value);
});

// 4. Mouse Events
const box = document.getElementById('myBox');
box.addEventListener('mouseover', function() {
    console.log('Mouse over');
});

box.addEventListener('mouseout', function() {
    console.log('Mouse out');
});

// 5. Keyboard Events
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

document.addEventListener('keyup', function(event) {
    console.log('Key released:', event.key);
});

// 6. Form Events
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
});

// 7. Focus/Blur Events
input.addEventListener('focus', function() {
    console.log('Input focused');
});

input.addEventListener('blur', function() {
    console.log('Input lost focus');
});

// 8. Window Events
window.addEventListener('resize', function() {
    console.log('Window resized');
});

window.addEventListener('scroll', function() {
    console.log('Window scrolled');
});

// 9. Load Event
window.addEventListener('load', function() {
    console.log('Page fully loaded');
});

// 10. Unload Event
window.addEventListener('beforeunload', function(event) {
    console.log('Page is about to be unloaded');
}); 

// 11. Drag Events
const draggable = document.getElementById('myDraggable');

draggable.addEventListener('dragstart', function(event) {
    console.log('Drag started');
    event.dataTransfer.effectAllowed = 'move';
});

draggable.addEventListener('drag', function(event) {
    console.log('Dragging');
});

draggable.addEventListener('dragend', function(event) {
    console.log('Drag ended');
});

const dropZone = document.getElementById('myDropZone');

dropZone.addEventListener('dragover', function(event) {
    event.preventDefault();
    console.log('Dragging over');
});

dropZone.addEventListener('drop', function(event) {
    event.preventDefault();
    console.log('Item dropped');
});


/*

You can customize the element IDs and add corresponding HTML elements to test these events.

Example HTML elements for testing:
<button id="myButton">Click Me</button>
<input id="myInput" type="text" />
<select id="mySelect">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
<div id="myBox" style="width:100px; height:100px; background-color:lightblue;"></div>
<form id="myForm">
  <input type="text" name="name" />
  <button type="submit">Submit</button>
</form>  
Note: The unload event may not work as expected in some browsers due to security reasons.
// 1. Click Event
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
});

// 2. Input Event
const input = document.getElementById('myInput');
input.addEventListener('input', function(event) {
    console.log('Input value:', event.target.value);
});

// 3. Change Event
const select = document.getElementById('mySelect');
select.addEventListener('change', function(event) {
    console.log('Selected:', event.target.value);
});

// 4. Mouse Events
const box = document.getElementById('myBox');
box.addEventListener('mouseover', function() {
    console.log('Mouse over');
});

box.addEventListener('mouseout', function() {
    console.log('Mouse out');
});

// 5. Keyboard Events
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

document.addEventListener('keyup', function(event) {
    console.log('Key released:', event.key);
});

// 6. Form Events
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
});

// 7. Focus/Blur Events
input.addEventListener('focus', function() {
    console.log('Input focused');
});

input.addEventListener('blur', function() {
    console.log('Input lost focus');
});

// 8. Window Events
window.addEventListener('resize', function() {
    console.log('Window resized');
});

window.addEventListener('scroll', function() {
    console.log('Window scrolled');
});

// 9. Load Event
window.addEventListener('load', function() {
    console.log('Page fully loaded');
});

// 10. Unload Event
window.addEventListener('beforeunload', function(event) {
    console.log('Page is about to be unloaded');
}); 

*/