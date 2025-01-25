var xhr = new XMLHttpRequest();

xhr.open("GET", "./shop.json", true);

var parent = document.getElementById("productContainer");
var firstbutton = document.getElementById("firstDesign");
var secondbutton = document.getElementById("secondDesign");

console.log(parent);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = xhr.response;
        console.log(data);
        var dataAfterParse = JSON.parse(data);
        console.log(dataAfterParse);
              
        for (let i of dataAfterParse) {
            
            var div = document.createElement("div");
            div.classList.add("product");
            
            div.innerHTML = `
            <div class="imageHover" >
            <img src="${i.image_path}" alt="" >
                    <div class="hoverContent" >
                      <div class="icons">
                                
        <a href="#"><button ><i class="fa-regular fa-heart"></i></button></a>
        <a href="./details.html?id=${i.id}">
             <button ><i class="fa-regular fa-eye"></i></button></a>
             </div>
              <div class="addCard" >
                <!-- for you febe -->
            <button class="save-btn" data-id="${i.id}">
            <p >
              <i class="fa-solid fa-cart-shopping"></i> add to card</p>
              </button>
              </div>
              </div>
           </div>
        </a>
                  <div class="underImage">
                 <a href="#">  
                   <p>${i.name}</p>
                  </a>
                    <span class="before">26.56%</span><span class="after">${i.price}$</span>
                  </div>
            `;

            
            parent.appendChild(div);
        
// the animation for the default design when i scroll
       let parent1 = document.querySelector(".productContainer");
            const products = document.querySelectorAll(".product");
            
            window.onscroll = function () {
                if (window.scrollY >= parent1.offsetTop - 150) {
                    console.log("ddd");
                    for (let i = 0; i < products.length; i++) {
                        products[i].style.animation = "appear 1s ease-in-out forwards";
                        products[i].style.visibility = "visible";
                    }
                }
            };
            

        }
          
    //   the event for the first design
        firstbutton.addEventListener("click", function () {
            this.style = "background-color: transparent; border: 1px solid black;";
            secondbutton.style = "none";

            parent.innerHTML = ""; 
            for (let i of dataAfterParse) {
                var div = document.createElement("div");
                div.classList.add("product");
              

                div.innerHTML = `
                <div class="imageHover" >
                <img src="${i.image_path}" alt="" >
                        <div class="hoverContent" >
                        <div class="icons">
                                
                        <a href="#"><button ><i class="fa-regular fa-heart"></i></button></a>
                        <a href="./details.html?id=${i.id}">
                             <button ><i class="fa-regular fa-eye"></i></button></a></div>
                  <div class="addCard" >
                  
                    <!-- for you febe -->
                    <button class="save-btn" data-id="${i.id}">
                    <p >
                      <i class="fa-solid fa-cart-shopping"></i> add to card</p>
                      </button>
                  </div>
                  </div>
               </div>
            </a>
                      <div class="underImage">
                     <a href="#">  
                       <p>${i.name}</p>
                      </a>
                        <span class="before">26.56%</span><span class="after">${i.price}$</span>
                      </div>
                `;
                parent.appendChild(div);

                // the animation first button

                let parent1 = document.querySelector(".productContainer");
                const products = document.querySelectorAll(".product");
                 for (let i = 0; i < products.length; i++) {
                            products[i].style.animation = "appear 1s ease-in-out forwards";
                            products[i].style.visibility = "visible";
                        }
                 

            }
        });
    //   the event for the second design
        secondbutton.addEventListener("click", function () {
            this.style = "background-color: transparent; border: 1px solid black;";
            firstbutton.style = "none";

            parent.innerHTML = ""; 
            for (let i of dataAfterParse) {
                var div = document.createElement("div");
                div.classList.add("anotherDesginContainer");
                div.innerHTML = `
                 

                <div class="leftSide">
              
                <a href="./details.html?id=${i.id}">  <img src="${i.image_path}" alt=""></a>
            </div>
                    <div class="rightSide">
                        <p class="title">${i.name}</p>
                        <span class="before">234.474$</span>
                        <span class="after">${i.price}$</span>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="description">
                            <p>${i.description}</p>
                        </div>
                        
      <div class="buttons" >

      <button title="add to card" class="save-btn" data-id="${i.id}"><i class="fa-solid fa-cart-shopping"></i></button>
 
      <button title="wishlist" ><i class="fa-regular fa-heart"></i></button>
 
      <button title="compare" ><i class="fa-solid fa-shuffle"></i></button>
 
    </div>
                    </div>
                `;
                parent.appendChild(div);
                // its animation in css file
            }
        });
// the febe part 
        var buttons = document.querySelectorAll('.save-btn');
                buttons.forEach(button => {
                    button.addEventListener('click', function () {
                        
                        var productId = this.getAttribute('data-id');
                        var savedIds = JSON.parse(localStorage.getItem('savedProductIds')) || [] ;
                        if (!savedIds.includes(productId)) {
                            savedIds.push(productId); 
                            localStorage.setItem('savedProductIds', JSON.stringify(savedIds));
                        
                        } 
                    });
                });
     
        
    }
};

xhr.send();


// the button to the top

const scrollToTop = document.getElementById("scrollToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
});

scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
