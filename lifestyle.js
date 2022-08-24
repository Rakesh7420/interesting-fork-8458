// console.log("i am here");
// lifestyle API -->https://newsapi.org/v2/everything?q=lifestyle&apiKey=8310b5752c8c4c30b984ed3c77811b9d

fetch('https://newsapi.org/v2/everything?q=lifestyle&apiKey=8310b5752c8c4c30b984ed3c77811b9d')
.then(function(res){
    res.json().then(function(res){
        let data = res.articles;
        console.log(data);
        appendData(data);
    })
})
.catch(function(err){
    console.log(err);
})

let container = document.getElementById("lifestyleContent")
function appendData(data){
  data.forEach(function(el,i){
    if(i<25){

        let div = document.createElement("div");
        div.setAttribute("class","newsDivs");
        
        imgDiv = document.createElement("div");
        imgDiv.setAttribute("class","imgBox")
        
        contentDiv = document.createElement("div")
        contentDiv.setAttribute("class","contentBox")
        
        let title = document.createElement("a");
        title.innerText = el.title;
        title.setAttribute("href",`${el.url}`);
        title.setAttribute("target","_blank")
        
        let author = document.createElement("p");
        author.innerText = el.author;
        author.setAttribute("class","author")
        
        let date = document.createElement("p");
        date.innerText =`Updated on ${el.publishedAt}`;
        date.setAttribute("class","newsDate")
        
        let img = document.createElement("img");
        img.src = el.urlToImage;
        imgDiv.append(img)
        contentDiv.append(title,author,date);
        
        div.append(contentDiv,imgDiv);
        container.append(div);
        
        
    }
  })
}