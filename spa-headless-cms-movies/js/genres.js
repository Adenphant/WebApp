"use strict";




//fetch hiphop genre

async function getArtists() {
    let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=18");
    let data = await response.json();
    console.log(data);
    _content = data;
    appendGenres(data);
    //showLoader(false);
  }
  
  getArtists();
  
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
    document.querySelector('#hiphop-container').innerHTML += htmlTemplate;
  }
  

