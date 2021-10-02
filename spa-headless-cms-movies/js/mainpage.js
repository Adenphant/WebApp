"use strict";



let _content = [];

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

// append content to the DOM
function appendArtists(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
              
      </article>
    `;
  }
  document.querySelector('#artist-container').innerHTML += htmlTemplate;
}

// append hiphop to the DOM
function appendGenres(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/ `
      <article>
      <img src="${getFeaturedImageUrl(content)}">
              
      </article>
    `;
  }
  document.querySelector('#featured-container').innerHTML += htmlTemplate;
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

//genres page
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
      <article>
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
      <article>
      <img src="${getFeaturedImageUrl(content)}">
              
      </article>
    `;
  }
  document.querySelector('#rnb-container').innerHTML += htmlTemplate;
}



function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}