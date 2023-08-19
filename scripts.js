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
  
let root2 = document.querySelector('[data-key="order2"]');

const biscuits2 = document.querySelector('[data-biscuits="5"]');
const biscuits2Value = parseInt(biscuits2.getAttribute("data-biscuits"));
console.log (biscuits2Value)

const donuts2 = document.querySelector('[data-donuts="0"]');
const donuts2Value = parseInt(donuts2.getAttribute("data-donuts"));

const pancakes2 = document.querySelector('[data-pancakes="2"]');
const pancakes2Value = parseInt(pancakes2.getAttribute("data-pancakes"));

let status2 = document.querySelector("[data-delivered]");
const status2value = status2.getAttribute("data-delivered")

const status2Boolean = status2value==="true"
console.log (status2Boolean)
 if (status1Boolean===false){ console.log (false)}
 else {console.log (true)}

const root3 = document.querySelector('[data-key="order3"]');

const biscuits3 = document.querySelector('[data-biscuits="12"]');
const biscuits3Value = parseInt(biscuits3.getAttribute("data-biscuits"));

const donuts3 = document.querySelector('[data-donuts="11"]');
const donuts3Value = parseInt(donuts3.getAttribute('data-donuts'));
console.log(donuts3Value);

const pancakes3 = document.querySelector('[data-pancakes="15"]'); 
const pancakes3Value=parseInt( pancakes3.getAttribute ('data-pancakes'))
console.log (pancakes3Value)

let status3 = document.querySelector("[ data-delivered]");
const status3value = status3.getAttribute("data-delivered")
const status3Boolean =( status3value === "true")
console.log (status3Boolean)
if (status3Boolean ===true ){console.log (true)}
else {console.log(false)}

/**take element [biscuits] with a child element [count] from HTML */
let biscuits1Count = document.querySelector ('.biscuits .count');
 biscuits1Count.textContent = biscuits1value;
console.log (biscuits1Count);

 let donuts1Count = document.querySelector ('.donuts .count');
  donuts1Count.textContent= donuts1Value
console.log(donuts1Count);

 let pancakes1Count = document.querySelector ('.pancakes  .count')
 pancakes1Count.textContent= pancakes1Value
console.log (pancakes1Count)
/**
 * take the child element {dd} under parent element {.statys}
 */
const status1Update= document.querySelector('.status dd');
console.log (status1Update)

  if (status1Boolean===true) {status1Update.textContent = 'Delivered'}
  else{status1Update.textContent='Pending' }
//status1 = root1.status ? Delivered : Pending;

let biscuits2Count = document.querySelector('[data-key="order2"]  .biscuits  .count')
biscuits2Count.textContent = biscuits2Value
console.log (biscuits2Count)
  
 let donuts2Count = document.querySelector ('[data-key="order2"]  .donuts .count');
 donuts2Count.textContent= donuts2Value
console.log(donuts1Count);


let pancakes2Count = document.querySelector ('[data-key="order2"]  .pancakes  .count')
pancakes2Count.textContent= pancakes2Value
console.log (pancakes2Count)


  pancakes3 = root2.pancakes
  status3 = root2.status ? Delivered : Pending;

(biscuits3 = root3.biscuits),
  (donuts3 = root3.donuts),
  (pancakes3 = root3.pancakes),
  (status3 = root3.status ? Delivered : Pending);
