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

//mypage page

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
  document.querySelector('#favourite-albums').innerHTML += htmlTemplate;
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
  document.querySelector('#friends-albums').innerHTML += htmlTemplate;
}



function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}