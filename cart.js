
        var xhr = new XMLHttpRequest();
        var div = document.getElementById('saved-items');

        xhr.open('GET', './shop.json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var getdata = JSON.parse(xhr.response);
                var savedIds = JSON.parse(localStorage.getItem('savedProductIds'));

                
                var savedProducts = getdata.filter(product => savedIds.includes(product.id.toString()));
     
                var sum = 1; 
                var productDiv = document.querySelector('table tbody');
                
                savedProducts.forEach((product, index) => {
                    productDiv.innerHTML += `
                    <tr>
                        <td class='cartLocal'>
                            <img class='imgs' src="${product.image_path}" alt="${product.name}" />
                            <p class='imgName'> ${product.name}</p>
                        </td>
                        <td>
                            <p class='imgPrice'> $${product.price}</p>
                        </td>
                        <td class='padQuan'>
                            <button class="sub btn">-</button>
                            <span class="quantity">${sum}</span>
                            <button class="add btn">+</button>
                        </td>
                        <td class="total imgPrice">$${(product.price * sum)}
                        <i class="fa-solid fa-trash-can delete"></i></td>
                        
                    </tr>

                    
                    `;
                });
            
                document.querySelectorAll('.delete').forEach((deleteBtn) => {
                    deleteBtn.addEventListener('click', (event) => {
        
                        const row = event.target.closest('tr');
                        if (row) {
                            row.remove(); 
                        }
                    });
                });
                document.querySelectorAll('.sub').forEach((button, index) => {
                    button.addEventListener('click', (e) => {
                        let quantitySpan = e.target.nextElementSibling; 
                        let totalCell = e.target.closest('tr').querySelector('.total'); 
                        let price = savedProducts[index].price; 
                
                        if (sum > 0) {
                            sum -= 1;
                        } else {
                            sum = 0;
                        }
                
                        quantitySpan.textContent = sum;
                        totalCell.textContent = `$${(price * sum).toFixed(2)}`; 
                    });
                });
                document.querySelectorAll('.add').forEach((button, index) => {
                    button.addEventListener('click', (e) => {
                        let quantitySpan = e.target.previousElementSibling;  
                        let totalCell = e.target.closest('tr').querySelector('.total');  
                        let price = savedProducts[index].price; 
                
                        sum += 1; 
                        quantitySpan.textContent = sum; 
                        totalCell.textContent = `$${(price * sum)}`;
                    });
                });
                




                if (savedProducts.length === 0) {
                    div.innerHTML = `<p>No saved items found.</p>`;
                }
            }
        };

        xhr.send();
        const scrollToTop = document.getElementById("scrollToTop");


        window.addEventListener("scroll", () => {
        
            if (window.scrollY > 300) {
                scrollToTop.style.display = "block";
            } else {
                scrollToTop.style.display = "none";
            }
        });

