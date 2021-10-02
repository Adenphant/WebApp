async function getExploreArtist() {
    let response = await fetch("http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=18");
    let data = await response.json();
    console.log(data);
    _content = data;
    appendExploreArtist(data);
    //showLoader(false);
  }
  
  getExploreArtist();
  
  // append content to the DOM
  function appendExploreArtist(contents) {
    let htmlTemplate = "";
    for (let content of contents) {
      htmlTemplate += /*html*/ `
        <article>
        <img src="${getFeaturedImageUrl(content)}">
        <h1>${content.title.rendered}</h1>
        <p>${content.excerpt.rendered}</p>
        <h3>Highlighted albums</h3>
        </article>
      `;
    }
    document.querySelector('#explore-container').innerHTML += htmlTemplate;
  }