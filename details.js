
console.log(window.location.search);
var params = window.location.search.substring(1).split('&'); 
console.log(params)
var id = params[0].split('=')[1];
console.log(id);
var parent = document.getElementById("details");

var xhr = new XMLHttpRequest();
xhr.open("GET", "./shop.json", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data = xhr.response;
        var dataAfterParse = JSON.parse(data);
        var details = dataAfterParse.find(i => i.id == id);

    console.log(details);

        parent.innerHTML = `
                    
    
        <div class="detailsContainer">

<div class="imgPart">
    <button onclick="dialog.showModal()"><i class="fa-solid fa-magnifying-glass"></i></button>

    <dialog id="dialog" class="dialog" >
        <button onclick="dialog.close()" class="cancel">X</button>
         
         
               <img src="${details.image_path}" alt="" >

                 
            
            
           </dialog>
    <img src="${details.image_path}" alt="" >
</div>
<div class="detailsPart">
    


    <p class="title">${details.name}</p>
 <span class="before">234.474$</span>
 <span class="after">${details.price}$</span>
 <div class="rating">
    <div class="stars">
        <i class="fa fa-star "></i>
        <i class="fa fa-star "></i>
        <i class="fa fa-star "></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
    </div>
    <div class="customReview">( ${details.reviews_count} Customer Review )</div>


</div>
<div class="colorName" style="margin-top: 3%;">
<span style="font-size: 20px; margin-right: 20px;">Color: </span>
<span style="display: inline-block;height: 25px;width:25px; background-color: black; margin-right: 10px;"></span>
<span style="display: inline-block;height: 25px;width: 25px; background-color: palevioletred;margin-right: 10px;"></span>
<span style="display: inline-block;height: 25px;width: 25px; background-color: burlywood;margin-right: 10px;"></span>


</div>

<div class="buttons">
<input type="number" value="1" ><a href="./details.html?id=${details.id}" ><button class="save-btn" data-id="${details.id}">add to card</button></a>


</div>
<div class="lastPart">
<p><span>SKU:</span>Ch-256xl</p>
<p><span>Category:</span>${details.style}</p>
<p><span>Popularity:</span>${details.popularity}</p>

</div>

<div class="iconsPart">
<button><i class="fa-brands fa-facebook-f"></i></button>
<button><i class="fa-brands fa-instagram"></i></button>
<button><i class="fa-brands fa-whatsapp"></i></button>
<button><i class="fa-brands fa-youtube"></i></button>
<button><i class="fa-brands fa-twitter"></i></button>

</div>
</div>

</div>



<div class="descrtionHeader" >
<div class="desInfoHeader">
<button id="Descriptipn">Descriptipn</button>
<button id="information">information</button>
<button id="review">review</button>


</div>
<div id="changeContent" >
  <p class="desp">${details.description}.</p>



  </div>
</div>   
            `;
// Define variables after displaying them from innerHTNL
                   var descriptionbutton=document.getElementById("Descriptipn");
                    var informationbutton=document.getElementById("information");
                    var changeContent=document.getElementById("changeContent");
                    var review=document.getElementById("review");
                    console.log(descriptionbutton)
                    console.log(informationbutton)
                    console.log(changeContent)

// change the default of changeContent when click the button to descripyion
            descriptionbutton.addEventListener("click",function(){
              descriptionbutton.style.color="#e97730";
              review.style.color="";

              informationbutton.style.color="";
                changeContent.innerHTML="";
                changeContent.innerHTML=`

                <p>${details.description}.</p>


`;

            })
// change the default of changeContent when click the button to review
            review.addEventListener("click",function(){
                review.style.color="#e97730";
                descriptionbutton.style.color="";

               informationbutton.style.color="";
               changeContent.innerHTML="";
               changeContent.innerHTML=`   <div class="review" >
      <h3 >${details.reviews_count} review for ${details.name}</h3>
        <i class="fa fa-star "></i>
        <i class="fa fa-star "></i>
        <i class="fa fa-star "></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
    </div>
      <div class="reviewContent" >
 <div  class="leftSide">
<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUVFRUVEBcVFRUVFRUQFRIWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODYtNygtLisBCgoKDg0OGxAQGi0fHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADoQAAEDAwMCBAMHBAEDBQAAAAEAAhEDBCEFEjFBUQYiYXETgZEUMkKhscHwFVLR4fEzYrIHI0Nygv/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EACcRAAICAgICAwABBQEAAAAAAAABAhEDIRIxBBMiQVEyFGFxgaFS/9oADAMBAAIRAxEAPwD15rlJKylvqzgRPC0Flehw5TAMSShLakB1Jc2riAHwlC4CntQByF2E6F2EAM2pFikhdhAEGxchEbUtiAIAE4KT4aQYgBj2A4KyniHQmPOBlauuCBIWT1fUS05Skk1sDIX/AIWc0SD7KifYVRPl4wVt62tTiEVp1am5vSeqoeKEtIDztjHcEIgWwhWmvU9tSWjCE2yFyvIThLXRNAOwyuOoFEVSGoGreJRU3tC0deIUVNslQvqmZKJp8YVr0hEjHBhlcvtUL4EnHdD1aLjlD/AxKtWRpdgOY2VzZHVDNqOBhPNf1VbjN9sdk7aYn9URUt5iDkqufcJ+n3m14PYoha/ktAPvbBwEOkHp2UFvRI5V1qWpNeAB3kqO4e0tkEf6Vk+PH4gArqDqXAkrqp9LHZ6mFPa3RYcIcJwXaIGjs9ZBwVc0LgO6rDBF2945vBQBtAF3aqjTdVBEO5VmLtvdADyxdaFxlw09VOEANAXYTkoQByF2F1KEAchKE5JAHIShdSQBwhY/xRZuedrBkrYoevbg5jKTV6A8/PhiGy8klVG80n7f07La6vUcfKHADO49cdvVZ+pd06UlrZOS5zoceJx24/NVSw2/joAc0jU5YYieChb2xH4PyUdXVqjgZnPIzEnofkqq51R27zPiOA08COp6fqlLxYS/kSQ2taOJjHKCr2RBy3rhGN1VpO3aO5IGB3z3K5Vv9rt0tcOgIB/56Jf0yS0SpA9CyBGQpzRDUdaX7Kg2wA7p0/P5IetTBkA8cg4I+SwZvFkn3oKK26rgYQQq4Rj9NLj19EbQ8OOLCfoprA+kQszzjPCgfQdyVbv04056xyiKNuCMpqLjoRnKtE4KGfM4Wjv7YBpVPTICbXEZ11QkARkqahQcWmTHZH6eGuKkujtMBSlxSAzFWk6Skrh1IJKr2odG/ZXRDKyBapGldUgWDagUzVWNKJpVEDD2IinUPdAU6qmFRAFpTuFZ2d+cSs42qntuCmBt6dQFSLHUNSe1Et1t3ZIDUJLN/wBcPZPZrZ7IA0KSpGa4OyZU1YnhAF2+qB1XG1geqz7qxPVJlQjgoA0kqh8R642iCySHEfe6Nnj5rp1AtBJ4Akrzu6a+6ruMyHOJdmYE4HHZMaVskr6q55MEnj/Y/T81A2m9046ZnvGVpLPSWsbELl3RAaQBkqDmao4V9nnepXmwwJxyfl+qpnXh7Z+eOPqSvQW+H2uMu6qg8R6AGDyDHWe6SyfRGWFrZnKNxiCR6E5M+n+laUKwDYJmeODJjpIyVmbrczAEfn+qF+2uiHZj+R+SnZQaV9wGZZDc4Ijg+x/Yq1F3vaHs++xvrBHYtAyFgDfg9OP19hEK70PUWj7z27ZM5492wJ+f5o77HZt9I1KnUG9uC0w9pwWu9QtRb3jCyJH7rx6jrLad2C0lzHGHHDZacdhEL0OhUDDgzKrS4v8AsQl+ldqxLXEHqZQ1lcjgx6qbU2mpU7Dqhrui1gGVnbqV/Qia9py2Qs46iJKtTfDbtCqrmR81Vkkn0MI07HCh1O9+qjoVdoTmWfxnKMYcpBZVG6ckrR+jEGISVvpf4FnoATwoabwVMxalNCJGtUrQmNUwKnyQDmqZhUIKka5OwJgU8KIFPa5FoCUJwCYHpwcmA4BPCZK7uQA4JwTQUkhk7KiIZUQS6akIArvF17FL4beahDefw8n3/wBp/h+gKbJPJVJcv+NfBs4pMJPES49u/C0jGYhVTlWjXghqwl9wEKXglJ9OFCZVXJmtRQTICq9VLSCCAp60gKg1WsQq5TLIwRi/EFEAmB9FkapM4wFstWpEgn0WJu2GTyr8U70YfIx8XYLV56/NTWlbb6+7Qf1UDnJrakK8yBlV4L5Ek8/28Le0tVcWUyerGz64z+a8+FcyCT7e3Za61pj4bCD0Ej2/5WbyHSslWi6/qI+arb25c85OAmtYSYhEvscLHzvsiR2oHVSVqW5D0rc7so8gNCok5ctEilr0yDCN0++DE15klDstDMrTDM4LZEtn6hJXFX/DKSXtl+gaihVKPoVlW0ip2OW2UGytMtWVFL8RV1KopjUVaUuiVhzXp4ehaVTC6Xqa5MegttRP3oCSpW1E1GSFYUKqcK6DD0iU7dhYeKy78dV++E4VE6kKw8XCe2ugA5I1U7kGiz+Oo6tbCBFVNe4ocpUMq9Fc2jc3dWrIDiwMMyXTuc6OwEgKzHiu3mN+33BE+xQOoVKTGhz2tLnSZe7a0BuCSfp9Qslq97bERFLkA/DL2uBOfxNAOM8qpu/o3Y7UVtHpLL1rhIII7hcN2Asj4VILIY7c3olr925oIWdy2bopONl9datTH42/UKrrVmVPxt+oXn9e1BO59R2eAJJPoAEbS0xrW7//AHgO5Aj6DKnxiyr2TTpJF/rNp5ZGR3CwWq23JCtqj3jNOruB/kFduKBc3dHPPukvi7TCfzVNGMcExWup2u3IVZuWyMuSs5k4OLomtaZK3dpApU28mJPv7rMeHdPfWcAym5+Ru2tLoB6mFs2WcEY4xHaFm8qaSoPoJptaAuGqFI2kmQ1ctS2BBVcBlB3deREoq7AOAq66o9lfFK7FZBavgwVb2zJEoKxs8yUfWqBohLJLl8UCIHPbKSrKhMlJR9S/Qs2FFinDEPSeiBUXVfKyvQ4IyjSlAtR9nUVnERKKMJpCtW0ZCArMyp0OiNNaE5oTkuhDSm711xTCEJAOa5SQoFKChoGOBTCVwpqaBIka5OdUwowVypUELB5PkpfFE4q9kmraMypQp1C0l7fM0gEx5tw8vXgYXnt/o3xqznFlQueQSGsLRIEfiGOO69vtQ1tNoP8AaP8AxCrbu/pNc1oy5xhoHJKs5NJKzowxRktoo/B2gig0yCJyQYMSBjHsq/xNah74jHX6rfNphrZOJWbutpqEAFxGXQMQq8iZoxNf6PPNQ0kB+8lzW9Ybgj1cDICodX0yXmpSc1oMYBMCGgYPPSY9V7DaGlUkCMYIPI9wmXPha1fl1Jk//UJxnJIhkwxbPG9NtKznwIdPMfuVrbbTHNbtdyfoCtmNJpUhFNjW+wCq7x0cquU7ZZDFxR594ps9ox81mrW3DnAH5+i13iuvgDrKoqNuRH/d/wCK0QnUTJkxqWQu9OvHsY0UyWsnMSJM8mFqBUJEuMnIJ6mOCfWD+Sqbez2253DLSAPUk4VsaZPA9VgyQc2aPIpYa/xRz4uFWPkuwiagI54U1KkCQVVSx7OXQJ9lcutt1buAhV5fBRGUpIKBK79qrLiqXFWOoku4CawtjpKti+P0RAW0SuokuCSkIuKbXdkfb2zncAlWFvaA9FcaZQDei6zJeplIzS6o/AVPRsXj8JW0t7mnxIRdKgx/ZSI8aKKztyW8IO6sHzwtzb2DWhKtat5hAGBbp9To1MdplWfulbOpc024JAQ/2ynPKXQ1Ey39IqdQuDRavZa43tNcOo0x1RaCjJ/0Wr2Sfpb2jK07NYpHqqbWdaZw3KrnljBWxUVT7eOqhfhJ1/PRR1HSuR5fmSb4x0SUUDV66BdcHup7ikgQ2TCohHl2NmmudZii108tH1Ag/os/4bunvuvj8lshg6AEQT9Cpbq0L6BYDkTHz/hVNpOr/Yy3fTc74jtu4fda44grdFNu0dTHkXrRrNX8RvaDJiJn0+SyzPGz2bgKbvN1JDZ+XKufELBVHnoOx12uB5IwWniQVmP6bTYRFMycgHcSfrlTaV7LE5Vqg7Tbiq+a5cQ8mQOm3o1aS01rc3OD1HqshW1QMaJY5ojBjBA7IL+rGZYZ9lXJMmpJdm4r6r6qqrXe8lU1a4PXlNpXEKMVslJ6KnWnbqsfyVotL8Psy9zHPq7MN3Q1oAxA/wArF6jdH4u4dHA/QrRM8akNjYS4Dy+YgAkQcTBx34lanCTqjCskFdh+saiKVMFwDD/8bJlxqEfff2AHAUnh/WvjUy0iYOTj7wwsHe13VHuq1nSTw1pMATwD0R/h6+24bgebGM4mSe6vhi4xpmbLn5y10butSkSPdDvdtQFHUw4u25bDXD0cSB+f+Urq8Aj5LBmw7KpEle/28oKreEZnCjvSCFFt3ACfdJQVEC5057agj6pmq2u0EMGf3ROlUqVFszkoWpWcXEgcrB7JSyNw6X/S3VbKI06qStajXT0+i6tSyy/EV0jbWtzDURQ1KOVUUq3lhO+NK6rywTonyZd07sEyEba6uaZH5rNUaq66so/1CQmz1zT75tRoMqHWbnawlYDRtUe0gArQXN98RsFTjlUiFGcuLsucXSk2+cm3rA0oQVQoPNeh7QdTunEo0VgRlVFG4HVPdV7KE8sYq2HYrutBwqupUJKsjTlCVLczhYXng2DTHWw6pXdSBhE0qUBPNDcuZmzY+XKRNIozckptGiSZCta1mB0XbemGq5eZBQ5xE4sjotI5+aKsNPY4Oa9oc0mYK694RejPDi5vXlXeD5ftnTVGnDPj8QmvVIaQHsf0h3lI9z1VVeXdQeYU6flaQJf3jAIGBj5qXVtFqOdupuLSqC80m4/G6R7re3vo6EY42iq1a5dWAa8taA1zSKYndujgn7vHqgre0YwiBAGf356lHusiJJCrr25DQc+iVtqhNRTuiCrXkkqrvb+OFDeXsAwqZ9QuPp3VuLFbtmXNnrSO3FeSo6bXE89VKLb0Of0R1Kk1oH9xnBnEYiAti0c97ISymMEkk89PkOUXYUJMRAMhscx3yprosEDaHSA4ESYBHzyu21yGumBwA2RgOyP0JQFBungbi1rhHXHAZMZ+aJrNn2aYn/SFtqbp3AfeknuDwY+qs3UTt75+sDBWfKTa0Vl1nEoG5uSzAR1alHmBVM9pc9VQX6VsudMLnQXErRsrAiAFU2NCGBXNrQIZwsHkKL7JRbIw/wBElz4TuxXFWooYYLhSNrKqdXhNN2tvqbI2XgqpjqqrqVwSpGPkq2Ef0Vl5p1eCCr+nfCMfNZOnXACkbelUSyyT0hlhqFVzjyq74xHKnbXnlC3zZEhTxZrdSEyZj54KMouhUdlXM5Vp8SQrPJx8oUCZYNrBPbWaFTvqEKMOJPK4j8N09k+RoDdNKgq3O1ADHVR1LgLPHxdcXtD5BD74TlQ17zGEMACV24IAVywQUqSFbGMvpMIu2vDTcHtPH5jqs/UrebCm+OYWyHj001oSlRoLzxO7oCh3+IwWy4e6z9S5hWFgPjUKjfxNO5veCP8ARWyrN2HynJ8Wir1nX9wIbhZG+1AlF39EhxCqbillacUERzZZMHJLjlTNeB6do7KP8+3dPa4+47eq0oxBFOs44Az68lSmnnJaOQYQZqQFH8UphZZUaffke8Ae6a8idxMwcR+0oX7SYLf5KdTaI7/5z/hAIt7G/wDkCeCZgd5/nCu6V+Q2WlvsR/IWctLF5hwDSJzPaOEU+kW4aCf7vQT2UJItjJoPq3PxSZw4YcPpn15T7awAEx9VWU3xVz/2jj0HPrwtF8YRHCyZlXRCSH2zeOys23ciGjjlUopuPBhGUQ5rdoGVgz406tgrQQ69akq2R156riy+qtBbIKtN0qZlqSigQiWPC7cpP6IUAspkKdjCpnwlvgIVgOpMlEwAgxXhRvuJWWcHKX9gLZtUQojV6Iazol3VT1LctVS4KXG9gddTAyutqKCo/Ch+LCvjbVCLZrAU8loCpWXuYR1OnuysefFJbb0STO7pMdFDcGFMyhCEvjByowlFuogxpqnom3NaQot08LjaZ6rSsX2hWCNEZUvxVy9ZjCqalVwVqANrvlH+G7ja9zf7mn6tz+krPtqd1a6dhzXdjPy6ppOyWN1JMj8RBtKXmJd90dT6x2WPdV3EkCfUlWniRrn1CTOOnKrXjbDevWOJ4/YhdDHGkTyycpDWUSe3rHRTG2MYk/QZ7FOt2eYt5mB85GZ+v1V7Z6LVry2mMnknjHJk4kKZBRM3UtMT16j2+WVCy2JwBPf0916xpXgGi5o+O4uMgABwbn5TPXE9FqW+G6FJrWUqQgRIh0udJMl0ERAOfzUlEbieU6N4dDW7qrGk8wTy3rA6n0RF5pTCx2xga6ZbAgOaJkR0MfovVP6Ux0xTIxIOSw9es9fRZzUrJrDLaewkEsM85nOOR6d0nFltRWjzceRpz96Ijj3wk6q4mWnIAkdHATz6o/X7IBwqtEB3/Ub+Hcc7h2BBn391W0nboc3G0+Ycd88d1EgEG4pgy3njpgq0t6rXn7w9VSVqQkuiM/uQuCq3mR69CFGUbA2FFrWkZUtWtOAFk9PvxuDcemT+60Vrc+nsuV5WDd3Quh32Udkk19y6cJLD63/6DQM6rCQqoYMc4Iu3oYXck1FFZLvU9Uy1CmkVLTYfks/s+XYzlKgSnfZdqNbwmVaRIRLKk6bFQrW42on7aDyqprSDCm+HKy5sUOXIE2Ht2lNNASoGUIUmUoZldWOiKtZCZCIpOLQm0gRypalYQjJmU/j2FUQPvY5QdzX3ply+eEOW7Uo4UtoGwyzYByjam0BVdOpKZc1DHKsqd9honqOBMIe4smxJ6/M/QZKjtqg5JUlW7bTYar+w9yfwsH89VdCLsIqwWpagZMwOp2tH1c4R9FX19faAW0mGRyXbSPltJVffX5qGXZ7D8LfQDqhW0yePfAgf8LfHEl2Tuuiatfl79z+YxHTiMfRCHnvlc2EGPqfT/KtfD+luua7aLfxHzno1gy53sP1hWojtujUeCvCXxWfaqv3GnytES6Ty4nuYx2916Syyc2A2m1g2w2DMkk4I7ccQjK7qdCixtItDWtOwDlxAxGQMgfmq60ZVruIq1DPMCcfPg89FLp9Firi7oNpU2My+sxpbzAxtI+6T0E5gIplbztNMtLR/1OcSPK4ACCJxyqapolFpc2pUEeUQXEkOJ8vTChqWlS2qAMOHCGnq4NbO3jPXmFMmq47Ts0Fdz2ycuZ6Q7GTkciOOuIzzFdqT923yyTwJALh2g9f0hVlj4lLn7SzbI2uJdy4FwPl7fdM854wVb3dHc0+bbtE9HRH4mmOEvsiqjTRktY0cOBOCxw2ugcfPoZXm13bvpVHN4c05HQiMEdwWx9V6zc3LmYIaW5DmzO4mOvMQZkDoVifH1oSGXDWgbSWGCJLJ8pOMEO3D/wDQKhKP4ErMvUrS0ROZxw4DqPUTJVbfEzOfMBHrgZhK5qZ9j0PX+QoKwJIJmes/kkVMN0t3mz16rb2AEd/1jusPb0yMg9lrdLrS0Rz19xyFlzxTWxloXDpwkgnPzz+y6sPph+CJqMLswcJJIlsRx7yp6NRJJJxTQEweiKdbuuJLP5EU0NDXMBOApG0kkk4wU0uQDXu6KD4pCSSzKKWRodkT7goerXJSSWqEEn0RbIRTdymvaT1SSVsJtsGiduAgrqtOEklZDbEyKjSJPKrvE9Uja3oHfmGT+p/JJJaMP8yS6KSjHuiaVcCZnIgdgUklt+w+iKqRPP0EL1P/ANLtNFG3fcuA31HBrByYaXYn1IykkrI9gns1NrXNRz6NRskO8zhEeUDaGDoJ6GeO0BGMrtp7msPmBh7iPuwJMQM8z2zhJJSTJzik3RW0tHLWvqU3Go5x3AvA5mSYLoJJiJhEt1Os0H4tKG4AAcwgthpkjMOmRg8JJIqlSB5JTdyZT6hc2ldzXN3Mc4gg5LTGOCJHrHfqpXVy2oKZcA9noTDcE7T2MtkdQkkoWX+qPH/TZLUe14G9sO3mm+Dje1oIIjpCoPEViHtFDcY2PknJJ2mDjqDBSSR3EU24viujx5vc/wA6owMaQJJB/wAY6c9EklEzIlp0i07TyMFWdjcFpgYPPoeUklFkkG/bmnJmeqSSSq9aEf/Z" alt="" >
</div>
 <div class="rightSide">${details.reviews}</div>
      </div>`;
            })
// change the default of changeContent when click the button to the table that has the informaton of the product
            informationbutton.addEventListener("click",function(){
              informationbutton.style.color="#e97730"; 
              descriptionbutton.style.color="";
                changeContent.innerHTML="";
                review.style.color="";
                changeContent.innerHTML=`

                <table >
                <tr>
                    <td class="leftSide">Brands</td>
                    <td class="rightSide">	${details.brand}</td>
                </tr>
                <tr>
                    <td class="leftSide">Color</td>
                    <td class="rightSide">${details.color}</td>
                </tr>
                <tr>
                    <td class="leftSide">Size</td>
                    <td class="rightSide">${details.dimensions}</td>
                </tr>

                </table>

`;

            })

    // for the animation of the page 
            let parant1=document.querySelector(".details");
        let productimg=document.querySelector(".imgPart");
        let productdetail=document.querySelector(".detailsPart");
        let desinfoHeader=document.querySelector(".descrtionHeader");
        let descriptionp=document.querySelector(".desp");
        window.onscroll=function() {
          if(window.scrollY >= parant1.offsetTop-150){
              console.log("ddddd");
              productimg.style.animation=" appear .7s ease-in-out  forwards "
              productimg.style.visibility=" visible"
              
              productdetail.style.animation="appear .7s ease-in-out .4s forwards "
              productdetail.style.visibility="visible"

              desinfoHeader.style.animation="appear .7s ease-in-out .9s forwards "
              desinfoHeader.style.visibility="visible"

              descriptionp.style.animation="appear .7s ease-in-out 1s forwards "
              descriptionp.style.visibility="visible"

          }
        }
      
    }
};
xhr.send();
// move to top button
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



// for febe part

var buttons = document.querySelectorAll('.save-btn');
                buttons.forEach(button => {
                    button.addEventListener('click', function () {
                        
                        var productId = this.getAttribute('data-id');
                        var savedIds = JSON.parse(localStorage.getItem('savedProductIds')) || [];
                        if (!savedIds.includes(productId)) {
                            savedIds.push(productId); 
                            localStorage.setItem('savedProductIds', JSON.stringify(savedIds));
                        
                        } 
                    });
                });
