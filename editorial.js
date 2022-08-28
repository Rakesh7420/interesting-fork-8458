console.log("i am here!");

// <-----------editorial data fetch and append------------->///

fetch(
  "https://newsapi.org/v2/everything?q=editorials&apiKey=d39443aca3534ef3a8ee7ad62a6a7660"
)
  .then(function (res) {
    res.json().then(function (res) {
      let editorialData = res.articles;
      console.log("editorialData:", editorialData);
      appendEditorials(editorialData);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

// appended editorials//
let editorialContainer = document.getElementById("editorialContent");

function appendEditorials(data) {
  data.forEach(function (el, i) {
    if (i > 4 && i < 27) {
      let div = document.createElement("div");
      div.setAttribute("class", "editorialDiv");

      imgDiv = document.createElement("div");
      imgDiv.setAttribute("class", "imgBox");

      contentDiv = document.createElement("div");
      contentDiv.setAttribute("class", "contentBox");

      let title = document.createElement("a");
      title.innerText = el.title;
      title.setAttribute("href", `${el.url}`);
      title.setAttribute("target", "_blank");

      let author = document.createElement("p");
      author.setAttribute("class", "authorName");
      author.innerText = el.author;

      let date = document.createElement("p");
      date.innerText = `Updated on ${el.publishedAt}`;
      date.setAttribute("class", "editorialDate");

      let img = document.createElement("img");
      img.src = el.urlToImage;

      imgDiv.append(img);
      contentDiv.append(title, author, date);

      div.append(contentDiv, imgDiv);

      editorialContainer.append(div);
    }
  });
}

// "top news" data fetch and append in left-sidebar//
fetch(
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=d39443aca3534ef3a8ee7ad62a6a7660"
)
  .then(function (res) {
    res.json().then(function (res) {
      let topData = res.articles;
      console.log("topData:", topData);
      appendTopNews(topData);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

let leftContainer = document.getElementById("topNews");
function appendTopNews(data) {
  data.forEach(function (el, i) {
    if (i < 12) {
      let div = document.createElement("div");
      div.setAttribute("class", "leftDiv");

      let title = document.createElement("a");
      title.innerText = el.title;
      title.setAttribute("href", `${el.url}`);
      title.setAttribute("target", "_blank");

      let source = document.createElement("p");
      source.setAttribute("class", "source");
      source.innerText = el.author;

      let date = document.createElement("p");
      date.setAttribute("class", "leftDate");
      date.innerText = el.publishedAt;

      div.append(title, source, date);
      leftContainer.append(div);
    }
  });
}

// "bollywood news" on the right side bar//

fetch(
  "https://newsapi.org/v2/everything?q=bollywood&apiKey=d39443aca3534ef3a8ee7ad62a6a7660"
)
  .then(function (res) {
    res.json().then(function (res) {
      let bollyData = res.articles;
      console.log("bollyData:", bollyData);
      appendBollyNews(bollyData);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

let bollyContainer = document.getElementById("bollywood");
function appendBollyNews(data) {
  data.forEach(function (el, i) {
    if (i < 10) {
      let div = document.createElement("div");
      div.setAttribute("class", "bollyDiv");

      let title = document.createElement("a");
      title.innerText = el.title;
      title.setAttribute("href", `${el.url}`);
      title.setAttribute("target", "_blank");

      let author = document.createElement("p");
      author.innerText = el.author;
      author.setAttribute("class", "bollyAuthor");

      let date = document.createElement("p");
      date.innerText = el.publishedAt;
      date.setAttribute("class", "bollyDate");

      let img = document.createElement("img");
      img.src = el.urlToImage;

      div.append(title, author, date, img);

      bollyContainer.append(div);
    }
  });
}

// append and fetching of "trending news" on right sidebar//

fetch(
  "https://newsapi.org/v2/everything?q=trending&apiKey=d39443aca3534ef3a8ee7ad62a6a7660"
)
  .then(function (res) {
    res.json().then(function (res) {
      let trendData = res.articles;
      console.log("trendData:", trendData);
      appendTrendNews(trendData);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

let trendContainer = document.getElementById("trend");
function appendTrendNews(data) {
  data.forEach(function (el, i) {
    if (i < 4) {
      let div = document.createElement("div");
      div.setAttribute("class", "trendDiv");

      let title = document.createElement("a");
      title.innerText = el.title;
      title.setAttribute("href", `${el.url}`);
      title.setAttribute("target", "_blank");

      let author = document.createElement("p");
      author.innerText = el.author;
      author.setAttribute("class", "trendAuthor");

      let date = document.createElement("p");
      date.innerText = el.publishedAt;
      date.setAttribute("class", "trendDate");

      let img = document.createElement("img");
      img.src = el.urlToImage;

      div.append(title, author, date, img);

      trendContainer.append(div);
    }
  });
}

// popular data on left sidebar//

fetch(
  "https://newsapi.org/v2/everything?q=popular&apiKey=d39443aca3534ef3a8ee7ad62a6a7660"
)
  .then(function (res) {
    res.json().then(function (res) {
      let popularData = res.articles;
      console.log("popularData:", popularData);
      appendPopNews(popularData);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

let popContainer = document.getElementById("popNews");
function appendPopNews(data) {
  data.forEach(function (el, i) {
    if (i < 12) {
      let div = document.createElement("div");
      div.setAttribute("class", "popDiv");

      let img = document.createElement("img");
      img.src = el.urlToImage;

      div.append(img);
      popContainer.append(div);
    }
  });
}
