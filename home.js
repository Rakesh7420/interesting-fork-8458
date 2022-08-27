import {navbar,navbarJs} from "./component.js"
document.getElementById("navbar").innerHTML= navbar()/////////
window.addEventListener("scroll", navbarJs);



let latestnewsdata;
let topnewsdata;
let a;
let latest = async () => {
  let res = await fetch(
    "https://newsapi.org/v2/everything?q=latest&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59v"
  );
  latestnewsdata = await res.json();
  // a = latestnewsdata.articles[0];
  // console.log(a);
  localStorage.setItem("news", JSON.stringify(a));
  let articles = latestnewsdata.articles;
  console.log("articles:", articles);
  let container = document.getElementById("latest");
  appendlatest(articles, container);
};
latest();
let topnews = async () => {
  let res = await fetch(
    "https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59v"
  );
  topnewsdata = await res.json();
  let articles = topnewsdata.articles;
  console.log("articles:", articles);
  let container = document.getElementById("topnews");
  appendlatest(articles, container);
};
topnews();
let appendlatest = (array, container) => {
  array.forEach((el, i) => {
    if (i < 10) {
      let title = document.createElement("p");
      title.innerText = el.title;
      let div = document.createElement("div");
      div.setAttribute("id", "latest_div");

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

let middleContainer = document.getElementById("middle")

let append = (el, container) => {
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
  middleContainer.append(div);
};

function middle() {
  let data = JSON.parse(localStorage.getItem("news"));
  let container = document.getElementById("middle");
  container.innerHTML = null;
  append(data, container);
}
middle();
