"use strict";

let _content = [];

// ______Forside_______

// fetch featured genres (hip hop)
async function getGenres() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=19");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendGenres(data);
  //showLoader(false);
}

getGenres();

//fetch featured artists

async function getArtists() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=18");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendArtists(data);
  //showLoader(false);
}

getArtists();

// append hiphop to the DOM
function appendGenres(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
    <a href="#genres">
      <img src="${getFeaturedImageUrl(content)}">
    </a>
    `;
  }
  document.querySelector('#featured-container').innerHTML += htmlTemplate;
}

// append content to the DOM
function appendArtists(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
    <a href="#explore">
      <img src="${getFeaturedImageUrl(content)}">
    </a>
    `;
  }
  document.querySelector('#artist-container').innerHTML += htmlTemplate;
}

//fetch right now

async function getRightNow() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=20");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendRightNow(data);
  //showLoader(false);
}

getRightNow();

// append genres to the DOM
function appendRightNow(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}"> 
      </article>
    `;
  }
  document.querySelector('#rightnow-container').innerHTML += htmlTemplate;
}

// ______Genres page_______
//fetch hiphop genre

async function getHipHop() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=5");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendHipHop(data);
  //showLoader(false);
}

getHipHop();

// append hiphop to the DOM
function appendHipHop(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article onclick="showDetailView('${content.id}')">
      <img src="${getFeaturedImageUrl(content)}">
              
      </article>
    `;
  }
  document.querySelector('#hiphop-container').innerHTML += htmlTemplate;
}

//fetch pop genre

async function getPop() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=17");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendPop(data);
  //showLoader(false);
}

getPop();

// append hiphop to the DOM
function appendPop(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
    
      <article>
      <img src="${getFeaturedImageUrl(content)}">
              
      </article>
      
    `;
  }
  document.querySelector('#pop-container').innerHTML += htmlTemplate;
}

//fetch rock genre

async function getRock() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=6");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendRock(data);
  //showLoader(false);
}

getRock();

// append hiphop to the DOM
function appendRock(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
              
      </article>
    `;
  }
  document.querySelector('#rock-container').innerHTML += htmlTemplate;
}

//fetch metal genre

async function getMetal() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=14");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendMetal(data);
  //showLoader(false);
}

getMetal();

// append hiphop to the DOM
function appendMetal(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
              
      </article>
    `;
  }
  document.querySelector('#metal-container').innerHTML += htmlTemplate;
  document.querySelector('#friends-albums').innerHTML += htmlTemplate;
}

//fetch R&b genre

async function getRnb() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=13");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendRnb(data);
  //showLoader(false);
}

getRnb();

// append hiphop to the DOM
function appendRnb(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <a href="${content._embedded.rendered}">
      <img src="${getFeaturedImageUrl(content)}">     
      </a>
    `;
  }
  document.querySelector('#rnb-container').innerHTML += htmlTemplate;
  document.querySelector('#favourite-albums').innerHTML += htmlTemplate;
}

// Get image URL
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}


//---Explore page--

//fetching first explore artist
async function getExploreArtist1() {
    let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=28");
    let data = await response.json();
    console.log(data)
    _content = data;
    appendExploreArtist1(data);
    //showLoader(false);
  }
  
  getExploreArtist1();


  
  // append first artist to the DOM
  function appendExploreArtist1(contents) {
    let htmlTemplate = "";
    for (let content of contents) {
      htmlTemplate += /*html*/ `
        <article>
        <img src="${getFeaturedImageUrl(content)}">
        <div>
        <h1>${content.title.rendered}</h1>
        <p>${content.excerpt.rendered}<p>
        <h3>Selected albums</h3>
        </div>
        </article>
      `;
    }
    document.querySelector('#explore1-container').innerHTML += htmlTemplate;
  }

  //fetching artists featured albums
  async function getExploreAlbum1() {
    let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=29");
    let data = await response.json();
    _content = data;
    appendExploreAlbum1(data);
    //showLoader(false);
  }
  
  getExploreAlbum1();

   // append first artist albums to the DOM
   function appendExploreAlbum1(contents) {
    let htmlTemplate = "";
    for (let content of contents) {
      htmlTemplate += /*html*/ `
     
        <article>
        <div>
        <img src="${getFeaturedImageUrl(content)}">
        </div>
        </article>
      `;
    }
    document.querySelector('#explore1-class-container').innerHTML += htmlTemplate;
  }

  //fetching second explore artist PINK FLOYD
async function getExploreArtist2() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=25");
  let data = await response.json();
  _content = data;
  appendExploreArtist2(data);
  //showLoader(false);
}

getExploreArtist2();



// append second artist to the DOM PINK FLOYD
function appendExploreArtist2(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
      <div>
      <h1>${content.title.rendered}</h1>
      <p>${content.excerpt.rendered}<p>
      <h3>Selected albums</h3>
      </div>
      </article>
    `;
  }
  document.querySelector('#explore2-container').innerHTML += htmlTemplate;
}

//fetching artists featured albums PINK FLOYD
async function getExploreAlbum2() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=26");
  let data = await response.json();
  _content = data;
  appendExploreAlbum2(data);
  //showLoader(false);
}

getExploreAlbum2();

 // append first artist albums to the DOM PINK FLOYD
 function appendExploreAlbum2(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
      </article>
    `;
  }
  document.querySelector('#explore2-class-container').innerHTML += htmlTemplate;
}


 //fetching third explore artist AVICII
 async function getExploreArtist3() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=30");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendExploreArtist3(data);
  //showLoader(false);
}

getExploreArtist3();



// append third artist to the DOM AVICII
function appendExploreArtist3(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
      <div>
      <h1>${content.title.rendered}</h1>
      <p>${content.excerpt.rendered}<p>
      <h3>Selected albums</h3>
      </div>
      </article>
    `;
  }
  document.querySelector('#explore3-container').innerHTML += htmlTemplate;
}

//fetching artists featured albums AVICII
async function getExploreAlbum3() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=31");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendExploreAlbum3(data);
  //showLoader(false);
}

getExploreAlbum3();

 // append first artist albums to the DOM AVICII
 function appendExploreAlbum3(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
      </article>
    `;
  }
  document.querySelector('#explore3-class-container').innerHTML += htmlTemplate;
}

//fetching third explore artist MICHAEL JACKSON
async function getExploreArtist4() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=32");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendExploreArtist4(data);
  //showLoader(false);
}

getExploreArtist4();



// append third artist to the DOM MICHAEL JACKSON
function appendExploreArtist4(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
      <div>
      <h1>${content.title.rendered}</h1>
      <p>${content.excerpt.rendered}<p>
      <h3>Selected albums</h3>
      </div>
      </article>
    `;
  }
  document.querySelector('#explore4-container').innerHTML += htmlTemplate;
}

//fetching artists featured albums MICHAEL JACKSON
async function getExploreAlbum4() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=34");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendExploreAlbum4(data);
  //showLoader(false);
}

getExploreAlbum4();

 // append first artist albums to the DOM MICHAEL JACKSON
 function appendExploreAlbum4(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
      </article>
    `;
  }
  document.querySelector('#explore4-class-container').innerHTML += htmlTemplate;
}

//fetching 5TH explore artist KANYE WEST
async function getExploreArtist5() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=35");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendExploreArtist5(data);
  //showLoader(false);
}

getExploreArtist5();



// append 5th artist to the DOM KANYE WEST
function appendExploreArtist5(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      
      <img src="${getFeaturedImageUrl(content)}">
      <div>
      <h1>${content.title.rendered}</h1>
      <p>${content.excerpt.rendered}<p>
      <h3>Selected albums</h3>
      </div>
      </article>
    `;
  }
  document.querySelector('#explore5-container').innerHTML += htmlTemplate;
}

//fetching artists featured albums KANYE WEST
async function getExploreAlbum5() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=36");
  let data = await response.json();
  console.log(data);
  _content = data;
  appendExploreAlbum5(data);
  //showLoader(false);
}

getExploreAlbum5();

 // append 5th artist albums to the KANYE WEST
 function appendExploreAlbum5(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
      </article>
    `;
  }
  document.querySelector('#explore5-class-container').innerHTML += htmlTemplate;
}

//Test
function showDetailView(id) {
  const movie = _content.find(movie => movie.id == id);
  // document.querySelector("#detailView h2").innerHTML = movie.title.rendered;
  document.querySelector("#detailViewContainer").innerHTML = /*html*/`
      <img src="${getFeaturedImageUrl(movie)}">
     
  `;
  navigateTo("detailView");
}

// async function getAll() {
//   let responseC = await fetch("http://gang.alexanderpoeden.com/wp-json/wp/v2/categories");
//   let responseA = await fetch("http://gang.alexanderpoeden.com/wp-json/wp/v2/posts?_embed");
//   let dataC = await responseC.json();
//   let dataA = await responseA.json();
//   console.log(dataC,dataA);
//   appendAlbumsByCategories(dataC, dataA);
// }
// getAll();

// function appendAlbumsByCategories(categories, albums) {
//   let html = ""
//   for (const category of categories) { // loop through all categories
//       html +=/*html*/`
//           <h1>${category.name}</h1><div class="grid-container2">
//       `;
//       for (const album of albums) { // loop through all movies 
//           if (album.categories.includes(category.id)) {
//               html += /*html*/ `
//                       <img src="${getFeaturedImageUrl(album)}" class="img">
//               `;
//           }
//       }
//       html += /*html*/ `
//                 </div>
//               `;
  
// }
//   document.querySelector("#content").innerHTML = html;
// }