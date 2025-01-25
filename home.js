"use strict";

var currency =document.getElementById("currency");
var curr =document.getElementById("curr");
var language =document.getElementById("language");
var lang =document.getElementById("lang");

// function showCurr() {
//     currency.style.display = "block";
// };

// function showLang() {
//     lang.style.display = "block";
// };



// currency.addEventListener("toggle", function() {
//     curr.style.opacity = "1";
// });

// language.addEventListener("toggle", function() {
//     lang.style.opacity = "1";
// });






// Start Sec1






const xhr = new XMLHttpRequest();
xhr.open("GET", "shop.json", true);

xhr.onload = function () {
      if (xhr.status === 200) {
     
        const data = JSON.parse(xhr.responseText);

        const container = document.getElementById("container");

        const selectedIds = [8, 4, 6]; 

        const filteredData = data.filter(item => selectedIds.includes(item.id));

        filteredData.forEach(item => {

            const card = document.createElement("div");
          card.className = "card";

          const img = document.createElement("img");
          img.src = item.image_path; 
          img.alt = item.name;

          const title = document.createElement("h3");
          title.textContent = item.name;

          const para = document.createElement("p");
          
          para.textContent = 'new arrival';

          const a = document.createElement("a");
          a.href = "shoppage.html";
          a.textContent = "Shop Now";

          const contContainer = document.createElement("div");
          
          contContainer.classList = ("content");

          const imgContainer = document.createElement("div");

          imgContainer.classList = ("image");

        contContainer.appendChild(para);
        contContainer.appendChild(title);
        contContainer.appendChild(a);
        card.appendChild(contContainer);

        imgContainer.appendChild(img);
        card.appendChild(imgContainer);

        container.appendChild(card);


        });
      } else {
        console.error("Error", xhr.statusText);
      }
    };

    xhr.onerror = function () {
      console.error("Error");
    };

    xhr.send();





// Slider





const showsPerPage = 4;
let currentPage = 1;
let products = [];


function loadSlider() {
    xhr.onreadystatechange = function () {
        if (this.status === 200) {
            products = JSON.parse(xhr.responseText);
            renderSlider();
        }
    };
    xhr.onerror = function () {
        console.error('There Is Something Rong');
    };
}



function renderSlider() {
    const startIndex = (currentPage - 1) * showsPerPage;
    const endIndex = startIndex + showsPerPage;
    const showsToDisplay = products.slice(startIndex, endIndex);

    const container = document.getElementById('products-container');
    container.innerHTML = '';

    showsToDisplay.forEach(prod => {
        const showDiv = document.createElement('div');
        showDiv.className = 'product';

        showDiv.innerHTML = `
            <div class= "image">
                
                <a href = "shoppage.html">
                    <img src="${prod.image_path}" alt="${prod.name}">
                
                    <div class= "icon">

                        <a class= "wish" href="shoppage.html"><i class="fa-regular fa-heart"></i></a>

                        <a href="shoppage.html"><i class="fa-regular fa-eye"></i></a>
                        
                    </div>    
                </a>

                <div class="addToCart"> <a href= "shoppage.html">Add To Cart</a></div>

            </div>
            <div class="content">
                <p>${prod.name}</p>
                <p>${prod.price}</p>
            </div>
        `;

        container.appendChild(showDiv);
    });

    updateButtons();
}


function updateButtons() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(products.length / showsPerPage);
}


document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderSlider();
    }
});


document.getElementById('next').addEventListener('click', () => {
    if (currentPage < Math.ceil(products.length / showsPerPage)) {
        currentPage++;
        renderSlider();
    }
});


loadSlider();







// Start Sec 3

var outP = 1;
var output = document.getElementById("output");
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");



inc.addEventListener("click", function () {
    outP++;
    output.textContent = outP;
    
 });

dec.addEventListener("click", function () {
    outP--;
    output.textContent = outP;
    
 });






 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
} );

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));






// Select the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
    // Check if the scroll position is more than 300px
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Scroll to top smoothly when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});