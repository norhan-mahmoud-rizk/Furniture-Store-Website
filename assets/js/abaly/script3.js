'use strict';

let blogsData;

const xml = new XMLHttpRequest();
xml.open('GET', 'assets/css/abaly/js.json');
// xml.open('GET', 'assets/js/abaly/js.json?t=' + new Date().getTime());

xml.onreadystatechange = function () {
  if (xml.readyState === 4 && xml.status === 200) {
    blogsData = JSON.parse(xml.responseText);
    console.log("Data loaded:", blogsData);
   
    
    displayBlogs3()
    displayblogDetails()
  }
  
};
xml.send();





// -------------------------------------

async function displayBlogs3() {
  const blogs = blogsData.slice(12, 18); 
  blogs.forEach(blog => {
    let [day, month] = blog.date.split('/');

    const div = document.createElement('div');
    div.classList = 'outer-card';
    div.innerHTML = `
      <div class="inner-card animation">
        <div class="card-header">
          <div class="blog-img">
            <a href="blog-details.html?id=${blog.id}">
              <img src="assets/images/blog/${blog.img}" alt="">
            </a>
          </div>
          <div class="blog-date">
            <h3>${day}</h3>
            <span>${month}</span>
          </div>
        </div>
        <div class="card-content">
          <div class="blog-writter">
            <a href="blog-details.html?id=${blog.id}">${blog.category},</a>
            <span>BY:</span>
            <a href="blog-details.html?id=${blog.id}">${blog.writer}</a>
          </div>
          <a href="blog-details.html?id=${blog.id}"><h2>${blog.title}</h2></a>
          <a href="blog-details.html?id=${blog.id}"><p>${blog.article}</p></a>
          <div class="card-btn">
            <a href="blog-details.html?id=${blog.id}"> Read More</a>
          </div>
        </div>
      </div>
    `;
    document.querySelector('.row').appendChild(div);
  });
}








async function displayblogDetails() {
  const Id = window.location.search.split('=')[1];
  if (!Id) {
    console.error("No blog ID found in URL");
    return;
  }

  const blogs = [...blogsData];
  const blog = blogs.find(blog => blog.id == Id);
  if (!blog) {
    console.error("Blog not found");
    return;
  }

  let [day, month] = blog.date.split('/');

  const div = document.createElement('div');
  div.classList = 'blog';
  div.innerHTML = `
    <div class="colomns">
      <div class="artical">
        <div class="artical-head animation">
          <div class="artical-image">
            <img src="assets/images/blog/blog-details.png" alt="">
          </div>
          <div class="artical-date">
            <h5>${day}</h5>
            <h5>${month}</h5>
          </div>
        </div>
        <div class="artical-content animation">
          <div class="artical-writter">
            <a href="">${blog.category}</a>
            <span>BY:</span>
            <a href="">${blog.writer}</a>
          </div>
          <div class="articale-title">${blog.title}</div>
          <div class="articale-lorem">${blog.article}</div>
          <div class="articale-mid">
            <div class="quote-img">
              <img src="assets/images/icon-img/${blog['quote-img']}" alt="">
            </div>
            <div class="quote-content">
              <p>${blog['quote-content']['p']}</p>
              <i class="fa-solid fa-minus"></i>
              <h3>${blog['quote-content']['h3']}</h3>
            </div>
          </div>
          <div class="articale-lorem animation">${blog['articale-lorem']}</div>
          <div class="images animation">
            <div class="img1"><img src="assets/images/blog/${blog.images.img1}" alt=""></div>
            <div class="img2"><img src="assets/images/blog/${blog.images.img2}" alt=""></div>
          </div>
          <div class="articale-lorem animation">${blog['articale-lorem']}</div>
          <div class="left-tags animation">
            <h4>Tags:</h4>
            <a href="">${blog['left-tags']['a']},</a>
            <a href="">${blog['left-tags']['b']},</a>
            <a href="">${blog['left-tags']['c']}</a>
          </div>
          <div class="admin-card animation">
            <div class="admin-card-image">
              <img src="assets/images/blog/${blog['admin-card-image']}" alt="">
            </div>
            <div class="admin-card-content">
              <div class="admin-name"><h1>${blog['admin-name'] || 'Admin'}</h1></div>
              <p>${blog['admin-card-content']}</p>
              <div class="admin-social">
                <div class="social">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-dribbble"></i></a>
                  <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-glide-g"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="search animation">
          <form>
            <input type="search" placeholder="Search.." name="search">
            <button type="submit">
              <div class="i"><i class="fa fa-search"></i></div>
            </button>
          </form>
        </div>
        <div class="Writer-card animation">
          <div class="writer-image">
            <a href=""><img src="assets/images/blog/${blog['writer-image']}" alt=""></a>
          </div>
          <div class="writer-name">
            <h2>${blog['writer-name']}</h2>
          </div>
          <div class="write-job">
            <p>${blog['write-job']}</p>
          </div>
          <div class="writer-social">
            <div class="social">
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-dribbble"></i></a>
              <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-glide-g"></i></a>
            </div>
          </div>
        </div>
        <div class="categories animation">
          <div class="category-head">
            <h1><img src="assets/images/a.png" width="25px"> Categories</h1>
          </div>
          <div class="category">
            <a href=""><h3>${blog.categorys.a}</h3></a>
            <a href=""><h3>${blog.categorys.b}</h3></a>
            <a href=""><h3>${blog.categorys.c}</h3></a>
            <a href=""><h3>${blog.categorys.d}</h3></a>
          </div>
        </div>
        <div class="latest-post animation">
          <div class="latest-post-head">
            <h1><img src="assets/images/a.png" width="30px"> latest-post</h1>
          </div>
          <div class="posts">
            <div class="post">
              <a class="post-image" href=""><img src="assets/images/blog/latest-post-1.png" alt=""></a>
              <div class="post-details">
                <a href=""><span>01 May 2022</span></a>
                <a href=""><h4>Lorem ipsum dolor sit am conse ctetur adipis</h4></a>
                <a href=""><p>Continue Reading...</p></a>
              </div>
            </div>
            <div class="post">
              <a class="post-image" href=""><img src="assets/images/blog/latest-post-2.png" alt=""></a>
              <div class="post-details">
                <a href=""><span>08 Dec 2022</span></a>
                <a href=""><h4>Lorem ipsum dolor sit am conse ctetur adipis</h4></a>
                <a href=""><p>Continue Reading...</p></a>
              </div>
            </div>
            <div class="post">
              <a class="post-image" href=""><img src="assets/images/blog/latest-post-3.png" alt=""></a>
              <div class="post-details">
                <a href=""><span>01 Feb 2022</span></a>
                <a href=""><h4>Lorem ipsum dolor sit am conse ctetur adipis</h4></a>
                <a href=""><p>Continue Reading...</p></a>
              </div>
            </div>
          </div>
        </div>
        <div class="tags animation">
          <div class="tage-head">
            <h1><img src="assets/images/a.png" width="30px"> Tags</h1>
          </div>
          <div class="tage">
            <a href="">${blog.tags.a}</a>
            <a href="">${blog.tags.b}</a>
            <a href="">${blog.tags.c}</a>
            <a href="">${blog.tags.d}</a>
            <a href="">${blog.tags.e}</a>
          </div>
        </div>
        <div class="ad animation">
          <a href=""><img src="assets/images/banner/${blog.ad}" alt=""></a>
        </div>
      </div>
    </div>
  `;

  document.querySelector('.blogs-details').appendChild(div);
}













