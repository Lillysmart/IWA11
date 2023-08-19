const root1 = document.querySelector('[data-key="order1"]');
/**
 * the element with the attribute data-biscuits="10"
 */
let biscuits1 = document.querySelector('[data-biscuits="10"]');
/**
 * the value of the attribute  [data-biscuits]  && converted to a number
 */
let biscuits1value = parseInt(biscuits1.getAttribute("data-biscuits")); 
console.log(biscuits1value);

let donuts1 = document.querySelector('[  data-donuts="13" ]');
let donuts1Value = parseInt(donuts1.getAttribute("data-donuts"));
console.log(donuts1Value);

let pancakes1 = document.querySelector('[data-pancakes="0"]');
const pancakes1Value = parseInt(pancakes1.getAttribute("data-pancakes"));

let status1 = document.querySelector("[data-delivered]");
const status1value = status1.getAttribute("data-delivered")
/**
 * converts [data-delivery] value to a boolean
 */
const status1Boolean = status1value==="true";   
console.log (status1Boolean)

  if  (status1Boolean ===false){  console.log (false);
  } else {console.log (true)};
  

console.log (status1va)
let root2 = document.querySelector('[data-key="order2"]');

const biscuits2 = document.querySelector('[data-biscuits="5"]');
const biscuits2Value = parseInt(biscuits2.getAttribute("data-biscuits"));
console.log (biscuits2Value)

const donuts2 = document.querySelector('[data-donuts="0"]');
const donuts2Value = parseInt(donuts2.getAttribute("data-donuts"));

const pancakes2 = document.querySelector('[data-pancakes="2"]');
const pancakes2Value = parseInt(pancakes2.getAttribute("data-pancakes"));

const status2 = document.querySelector(".status");

const root3 = document.querySelector('[data-key="order3"]');

const biscuits3 = document.querySelector('[data-biscuits="12"]');
const biscuits3Value = parseInt(biscuits3.getAttribute("data-biscuits"));

const donuts3 = document.querySelector('[data-donuts="11"]');
const donuts3Value = parseInt(donuts3.getAttribute('data-donuts'));
console.log(donuts3Value);

const pancakes3 = document.querySelector('[data-pancakes="15"]'); 
const pancakes3Value=parseInt( pancakes3.getAttribute ('data-pancakes'))
console.log (pancakes3Value)

const status3 = document.querySelector(".status");
/**element [biscuits] with a child element [count] */
let biscuits1Count = document.querySelector ('.biscuits .count');
 biscuits1Count.textContent = biscuits1value;
console.log (biscuits1Count);

 let donuts1Count = document.querySelector ('.donuts .count');
  donuts1Count.textContent= donuts1Value
console.log(donuts1Count);

 let pancakes1Count = document.querySelector ('.pancakes  .count')
 pancakes1Count.textContent= pancakes1Value
console.log (pancakes1Count)

  status1 = root1.status ? Delivered : Pending;

let biscuits2Count = document.querySelector('.biscuits  .count')
biscuits2Count.textContent = biscuits2Value

  donuts3 = root2.donuts
  pancakes3 = root2.pancakes
  status3 = root2.status ? Delivered : Pending;

(biscuits3 = root3.biscuits),
  (donuts3 = root3.donuts),
  (pancakes3 = root3.pancakes),
  (status3 = root3.status ? Delivered : Pending);
