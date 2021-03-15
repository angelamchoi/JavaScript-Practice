// Menu data structure (Task 3.0)
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//Menu data structur (Task 5.0)
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


//Task 1.0
//Select and cache the <main> element in a variable named mainEl.
var mainEl = document.querySelector('main');

//Task 1.1
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//Hint: Assign a string that uses the CSS var() function like this:
//'var(--main-bg)'
mainEl.style.backgroundColor = 'var(--main-bg)';

//Task 1.2
//Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//Task 1.3
//Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');

//Task 2.0
////Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
var topMenuEl = document.getElementById('top-menu');

//Task 2.1
//Set the height topMenuEl element to be 100%.
topMenuEl.style.height = '100%'

//Task 2.2
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--topmenu-bg)'

//Task 2.3
//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

//Task 3.0
//Copied the data structure to the top of script.


//Task 3.1
//1. Iterate over the entire menuLinks array and for each "link" object:
//2. Create an <a> element.
//3. On the new element, add an href attribute with its value set to the href property of the "link" object.
//4. Set the new element's content to the value of the text property of the "link" object.
//5. Append the new element to the topMenuEl element.

//SYNTAX
//>array.forEach(function(element) {
    // logic here
    //});

menuLinks.forEach(function(link){
    var linkEl = document.createElement('a');
    linkEl.setAttribute ('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
});

// Task 4.0
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
var SubMenuEl = document.getElementById('sub-menu');

// Task 4.1
//Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%';

// Task 4.2
//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3
//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// Task 4.4
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';

// Task 5.0
// Updated data structure at the top

//  Task 5.1
//  1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
//  2. Declare a global showingSubMenu variable and initialize it to false;
var topMenuLinks = document.querySelector('#top-menu a');
var showingSubMenu = false;
  
//   Task 5.2
//   Attach a delegated 'click' event listener to topMenuEl.
//   1. The first line of code of the event listener function should call the event object's preventDefault() method.
//   2. The second line of code function should immediately return if the element clicked was not an <a> element.
//   3. console.log the content of the <a> to verify the handler is working.

topMenuEl.addEventListener('click',function(event){
  event.preventDefault();
  var link = event.target;
  if (link.tagName !== 'A') return;
  console.log (link.textContent);
}
  
  
//   Task 5.3
//   Next in the event listener, if the clicked <a> link has a class of active:
//   1. Remove the active class from the clicked <a> element.
//   2. Set the showingSubMenu to false.
//   3. Set the CSS top property of subMenuEl to 0.
//   4. return to exit the handler.
if (link.classList.contains('active')) {
  link.classList.remove('active');
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  return;
}

//   Task 5.4
//   Next, the event listener should remove a class name of active from each <a> element in topMenuLinks - whether the active class exists or not.
//   Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

topMenuLinks.forEach(function(link) {
  link.classList.remove('active');
});
  

//   Task 5.5
//   Next, the event listener should add a class name of active to the <a> element that was clicked.
link.classList.remove('active');
  
//   Task 5.6
//   Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
//   Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7
var linkData = menuLinks.find(function(linkObj)) {
  return linkObj.text === link.textContent;
});
  

//   Task 5.7
// 1. If showingSubMenu is true:
// 2. Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
// 3. Set the CSS top property of subMenuEl to 100%.
// 4. Otherwise (showingSubMenu is false):
// 5. Set the CSS top property of subMenuEl to 0.
if (showingSubMenu) {
  buildSubMenu(linkData.subLinks);
  subMenuEl.style.top = '100%';
} else {
  subMenuEl.style.top = '0';
}

// Task 5.8
// Code the buildSubMenu function so that it:

// 1.Clears the contents of subMenuEl.
// 2. Iterates over the subLinks array passed as an argument; and for each "link" object:
// 3. Create an <a> element.
// 4. On the new element, add an href attribute with its value set to the href property of the "link" object.
// 5. Set the new element's content to the value of the text property of the "link" object.
// 6. Append the new element to the subMenuEl element.

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(function(link) {
    var linkEl.setAttribute('href', link.href);
    link.El.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}

// Task 6.0
// 1.Attach a delegated 'click' event listener to subMenuEl.
// 2.The first line of code of the event listener function should call the event object's preventDefault() method.
// 3. The second line of code function should immediately return if the element clicked was not an <a> element.
// 4. console.log the content of the <a> to verify the handler is working.

subMenu.addEventLister('click', function(event) {
  event.preventDefault();
  var link = event.target;
  if (link.tagName !== 'A') return;
  console.log(link.textContent);
}

// Task 6.1
// 1. Set showingSubMenu to false.
// 2. Set the CSS top property of subMenuEl to 0.
showingSubMenu = false;
subMenuEl.style.top = '0';

// Task 6.2
// Remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not.
topMenuLinks.foreach(function(link) {
  link.ClassList.remove('active');
});

// Task 6.3
// Update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.
mainEl.innerHTMl = `<h1>${link.textContent}</h1>`;
});

// Task 6.4
// If the ABOUT link is clicked, an <h1>about</h1> should be displayed.

