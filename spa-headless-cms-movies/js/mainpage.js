"use strict";



let _hiphopContent = [];

// fetch featured genres (hip hop)
async function getHiphop() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=5");
  let data = await response.json();
  console.log(data);
  _hiphopContent = data;
  appendHiphop(data);
  //showLoader(false);
}

getHiphop();

//fetch featured artists

async function getArtists() {
  let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=18");
  let data = await response.json();
  console.log(data);
  _hiphopContent = data;
  appendArtists(data);
  //showLoader(false);
}

getArtists();

// append hiphop to the DOM
function appendHiphop(contents) {
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

function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}