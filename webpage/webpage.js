// Hamburger

// Hamburger menu displays and closes when clicking on the menu icon and closes also while clicking on the close icon.

// Function for hamburger menu icon

let hamburger_check = document.getElementById("hamburger_id");
let nav_check = document.getElementById("nav_responsive");
hamburger_check.addEventListener("click",() => {
  console.log("sdvsd");
  hamburger_check.classList.toggle("active");
  nav_check.classList.toggle("active");
});

// Function for close icon

function close_hamburger() {
  let hamburger_check = document.getElementById("hamburger_id");
  // document.getElementById("nav_responsive").style.display = "none";
  hamburger_check.classList.toggle("active");
  nav_check.classList.toggle("active");
}

// Email Verification

let email_input = document.getElementById("email_check");
let button_input = document.getElementById("button_check");
button_input.addEventListener("click", () => {

  console.log("oneeeee");
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email_input.value.match(validRegex)) {
    alert("Valid email address!");
    console.log("valid");
    return true;
  }
  else {
    alert("Invalid email address!");
    console.log("invalid");
    return false;
  }
});

// Accordian Footer

// Same implementation as the hamburger menu

let first_plus = document.getElementById("drop1");
let first_drop = document.getElementById("accordian_one");

// let plus = document.querySelectorAll(".plus");
// ///////////////////////
// plus.forEach(function(ind_plus) {
//   let drop = document.querySelectorAll(".section_drop");
//   ind_plus.addEventListener("click", () => {
//     for(let i=0;i<drop.length;i++)
//     drop[i].classList.toggle("active");
//   })
// })


// let drop = document.getElementsByClassName("drop_down");
// for(i=0;i<drop.length;i++)
// {
//   drop[i].addEventListener("click",() => {
//     this.classList.toggle("active");
//   })
// }

first_plus.addEventListener("click", () => {
  
  first_plus.classList.toggle("active");
  first_drop.classList.toggle("active");
  if(first_plus.classList.contains("active")){
    first_plus.innerHTML = " - ";
  }
  else first_plus.innerHTML = " + ";
});

let second_plus = document.getElementById("drop2");
let second_drop = document.getElementById("accordian_two");
second_plus.addEventListener("click", () => {
  
  second_plus.classList.toggle("active");
  second_drop.classList.toggle("active");
  if(second_plus.classList.contains("active")){
    second_plus.innerHTML = " - ";
  }
  else second_plus.innerHTML = " + ";
});

let third_plus = document.getElementById("drop3");
let third_drop = document.getElementById("accordian_three");
third_plus.addEventListener("click", () => {
  
  third_plus.classList.toggle("active");
  third_drop.classList.toggle("active");
  if(third_plus.classList.contains("active")){
    third_plus.innerHTML = " - ";
  }
  else third_plus.innerHTML = " + ";
});




//////////////////////////////////////////////////////////////////////





// Printing product details

let betty = document.getElementById("Betty_main");
betty.addEventListener("click", () => {
  let betty_details = document.getElementsByClassName("betty_details");
  for(let i=0;i<betty_details.length;i++)
  {
    console.log(betty_details[i].innerHTML);
  }
})

let baldwin = document.getElementById("Baldwin_main");
baldwin.addEventListener("click", () => {
  let baldwin_details = document.getElementsByClassName("baldwin_details");
  for(let i=0;i<baldwin_details.length;i++)
  {
    console.log(baldwin_details[i].innerHTML);
  }
})

let sofia = document.getElementById("Sofia_main");
sofia.addEventListener("click", () => {
  let sofia_details = document.getElementsByClassName("sofia_details");
  for(let i=0;i<sofia_details.length;i++)
  {
    console.log(sofia_details[i].innerHTML);
  }
})

let beacon = document.getElementById("Beacon_main");
beacon.addEventListener("click", () => {
  let beacon_details = document.getElementsByClassName("beacon_details");
  for(let i=0;i<beacon_details.length;i++)
  {
    console.log(beacon_details[i].innerHTML);
  }
})

/////////////////////////////////////////////////////////////////////////////////


// let same = document.querySelectorAll(".same");
// same.forEach(function(view_detail) {
//   view_detail.addEventListener("click", () => {
//     console.log("hii");
//     let details = document.querySelectorAll(".shoe_font");
//     details.forEach(each_detail => console.log(each_detail));
//   })
// })



// Button Colour Change

let buttons = document.querySelectorAll(".button_same");

buttons.forEach(function(button) {
  let count = 0;

  button.addEventListener("click", () => {
    count++;
    console.log("working");
    if(count==1)
    {button.style.backgroundColor = 'red'}
    else if(count == 2)
    {button.style.backgroundColor = 'blue'}
    else
    {button.style.backgroundColor = 'white'
      count=0;}
  })
})


// Product Slider 

document.getElementById("button_right").onclick = () => {
  document.getElementById("shoes_id").scrollLeft += 315;
}
document.getElementById("button_left").onclick = () => {
  document.getElementById("shoes_id").scrollLeft -= 315;
}



// Banner slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner2");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}