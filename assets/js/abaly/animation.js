// document.addEventListener("DOMContentLoaded", 
window.onload = function() 
{
    console.log("DOM fully loaded and parsed");
    const boxs = document.querySelectorAll('.animation');
  
    const options = {
        threshold: 0.2 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, options);
  
    boxs.forEach(box => {
        observer.observe(box);
    });
  };
