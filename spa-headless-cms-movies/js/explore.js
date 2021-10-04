"use strict";

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
        <h1>${content.title.rendered}</h1>
        <p>${content.excerpt.rendered}<p>
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
        <img src="${getFeaturedImageUrl(content)}">
        </article>
      `;
    }
    document.querySelector('#explore1-container').innerHTML += htmlTemplate;
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
      <h1>${content.title.rendered}</h1>
      <p>${content.excerpt.rendered}<p>
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
  document.querySelector('#explore2-container').innerHTML += htmlTemplate;
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
      <h1>${content.title.rendered}</h1>
      <p>${content.excerpt.rendered}<p>
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
  document.querySelector('#explore3-container').innerHTML += htmlTemplate;
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
      <h1>${content.title.rendered}</h1>
      <p>${content.excerpt.rendered}<p>
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
  document.querySelector('#explore4-container').innerHTML += htmlTemplate;
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
      <h1>${content.title.rendered}</h1>
      <p>${content.excerpt.rendered}<p>
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
  document.querySelector('#explore5-container').innerHTML += htmlTemplate;
}