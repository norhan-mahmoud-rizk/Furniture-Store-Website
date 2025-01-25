var form2 = document.getElementById('form2');
var form1 = document.getElementById('form1')

form2.style.display='none'
var input = document.getElementById('input')
input.addEventListener('focus',()=>{
    input.style.outline='none'
    input.style.border='1px solid gray'
})
input.addEventListener('blur',()=>{
 input.style.border='none'
})
var input2 = document.getElementById('input2')
input2.addEventListener('focus',()=>{
    input2.style.outline='none'
    input2.style.border='1px solid gray'
})
input2.addEventListener('blur',()=>{
 input2.style.border='none'
})
var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
link1.addEventListener('click',()=>{
    form2.style.display='none'
    form1.style.display='block'
})
link2.addEventListener('click',()=>{
    form2.style.display='block';
    form1.style.display='none';
})

function saveCred(event) {
    event.preventDefault();


    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;


    if (rememberMe) {
        localStorage.setItem('userName', userName);
        localStorage.setItem('password', password);
    }
}