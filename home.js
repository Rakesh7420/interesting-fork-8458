let latestnewsdata;
let topnewsdata;
let a = [];
let latest = async () => {
  let res = await fetch(
    "https://newsapi.org/v2/everything?q=latest&apiKey=d39443aca3534ef3a8ee7ad62a6a7660"
  );
  latestnewsdata = await res.json();
  for (let i = 0; i < 9; i++) {
    a.push(latestnewsdata.articles[i]);
  }
  // console.log(a);
  localStorage.setItem("news", JSON.stringify(a));
  let articles = latestnewsdata.articles;
  // console.log("articles:", articles);
  let container = document.getElementById("latest");
  appendlatest(articles, container);
};
latest();
let topnews = async () => {
  let res = await fetch(
    "https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=2957328f0c6947efa41e73e2f9058927"
  );
  topnewsdata = await res.json();
  let articles = topnewsdata.articles;
  // console.log("articles:", articles);
  let container = document.getElementById("topnews");
  appendlatest(articles, container);
};
topnews();
let appendlatest = (array, container) => {
  array.forEach((el, i) => {
    if (i < 30) {
      let title = document.createElement("p");
      title.innerText = el.title;
      let div = document.createElement("div");
      div.setAttribute("class", "latest_div");

      let imgdiv = document.createElement("div");
      imgdiv.setAttribute("id", "imgdiv");
      const img = document.createElement("img");
      img.src = el.urlToImage;
      imgdiv.append(img);
      const titlediv = document.createElement("div");
      titlediv.setAttribute("id", "titlediv");
      titlediv.append(title);
      div.append(titlediv, imgdiv);
      container.append(div);
      div.onclick = function () {
        localStorage.setItem("news", JSON.stringify(el));
        console.log(el.title);
        middle();
      };
    }
  });
};

let append = (el, container) => {
  el.forEach((el) => {
    let title = document.createElement("h2");
    title.innerText = el.title;

    let publish = document.createElement("h4");
    publish.innerText = `Published At${el.publishedAt}`;

    let img = document.createElement("img");
    img.setAttribute("id", "middle_img");
    img.src = el.urlToImage;

    let desc = document.createElement("p");
    desc.innerText = el.description;

    let div = document.createElement("div");
    div.setAttribute("id", "middle_div");

    div.append(title, publish, img, desc);
    container.append(div);
  });
};

function middle() {
  let data = JSON.parse(localStorage.getItem("news"));
  // console.log(data);
  let container = document.getElementById("middle");
  container.innerHTML = null;
  append(data, container);
}
middle();
