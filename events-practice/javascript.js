// Cached Selectors
const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/**
 * element.addEventListener(<event-name>, <callback>, <use-capture>);
 *
 * callback is the function we want executed when the event happens. When called by the JS engine, it will be passed an { event object } as an argument.
 */
// Event Handlers
function handleBtnClick(event) {
  // get the element (target) with the keyword `this`
  // ONLY WORKS INSIDE THE EVENT LISTENER!!!
  // 1- we need to create a new list item whenever a user wants to add a comment
  // event.stopPropagation();
  // '     hello  there     '
  if (input.value.trim()) {
    const li = document.createElement('li');
    li.textContent = input.value;
    // adds whatever el, we pass in to the end of a list
    ul.appendChild(li);
    // clear the input
    return (input.value = '');
  }
  console.log('ooops its empty');
}
function handleUlClicked(event) {
    const li = event.target;
    if(li.style.color !== 'red') {
        li.style.color = 'red';  
    } else {
    li.style.color = 'black';

    }
  console.dir('target', event.target);
}

//  Event Listeners
btn.addEventListener('click', handleBtnClick);
ul.addEventListener('click', handleUlClicked);


// document.querySelectorAll('li').forEach(function (li) {
//   li.addEventListener('click', function (e) {
//     console.log(e.target);
//   });
// });
// NOT DELEGATION
// 1.) page loads
// single li is present
// 2.) JS file gets loaded
// - we attach the event to all li's
// 1 event on 1 li -> this code above has finished runnin
// 3. ) now add a new li -->