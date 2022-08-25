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
    if(i<20){

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

// top headlines api-->https://newsapi.org/v2/top-headlines/sources?category=general&apiKey=8310b5752c8c4c30b984ed3c77811b9d

fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=8310b5752c8c4c30b984ed3c77811b9d')
.then(function(res){
    res.json().then(function(res){
        let topData = res.articles;
        console.log('topData:',topData);
        appendTopNews(topData);
    })
})
.catch(function(err){
    console.log(err);
})

let leftContainer = document.getElementById("topNews");
function appendTopNews(data){
 
    data.forEach(function(el,i){
        if(i<11){
            let div = document.createElement("div");
            div.setAttribute("class","leftBox")

            let title = document.createElement("a");
            title.innerText = el.title;
            title.setAttribute("href",`${el.url}`);
            title.setAttribute("target","_blank");


            let source = document.createElement("p");
            source.setAttribute("class","p1")
            source.innerText = el.author;

            let date =  document.createElement("p");
            date.setAttribute("class","leftDate")
            date.innerText = el.publishedAt;

            div.append(title,source,date);
            leftContainer.append(div);
        }
    })
}


//Health api--> https://newsapi.org/v2/everything?q=health&apiKey=8310b5752c8c4c30b984ed3c77811b9d

fetch('https://newsapi.org/v2/everything?q=health&apiKey=8310b5752c8c4c30b984ed3c77811b9d')
.then(function(res){
    res.json().then(function(res){
        let healthData = res.articles;
        console.log('healthData:',healthData);
        appendHealthNews(healthData)
    })
})
.catch(function(err){
    console.log(err);
})

let rightContainer = document.getElementById("healthNews")

function appendHealthNews(data){
 
    data.forEach(function(el,i){
        if(i<10){
            let div = document.createElement("div");
            div.setAttribute("class","rightBox")

            let title = document.createElement("a");
            title.innerText = el.title;
            title.setAttribute("href",`${el.url}`);
            title.setAttribute("target","_blank");

            let source = document.createElement("p");
            source.setAttribute("class","p1")
            source.innerText = el.author;

            let date =  document.createElement("p");
            date.setAttribute("class","rightDate")
            date.innerText = el.publishedAt;
            
            let img = document.createElement("img");
            img.src = el.urlToImage;

            div.append(title,source,date,img);
            rightContainer.append(div);
        }
    })
}

              // <---------bitcoin data ---------->//


let bitcoinContainer = document.getElementById("bitcoin");

fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=8310b5752c8c4c30b984ed3c77811b9d')
.then(function(res){
    res.json().then(function(res){
        let bitcoinData = res.articles;
        console.log('bitcoinData:',bitcoinData);
        appendBitcoinNews(bitcoinData)
    })
})
.catch(function(err){
    console.log(err);
})

function appendBitcoinNews(data){
 
    data.forEach(function(el,i){
        if(i<5){
            let div = document.createElement("div");
            div.setAttribute("class","bitcoinDiv")

            let title = document.createElement("a");
            title.innerText = el.title;
            title.setAttribute("href",`${el.url}`);
            title.setAttribute("target","_blank");

            let source = document.createElement("p");
            source.setAttribute("class","p1")
            source.innerText = el.author;

            let date =  document.createElement("p");
            date.setAttribute("class","date")
            date.innerText = el.publishedAt;
            
            let img = document.createElement("img");
            img.src = el.urlToImage;

            div.append(title,source,date,img);
            bitcoinContainer.append(div);
        }
    })
}


            // <--------Technology News Data-------->//

   let techContainer = document.getElementById("techNews");

 fetch('https://newsapi.org/v2/everything?q=technology&apiKey=8310b5752c8c4c30b984ed3c77811b9d')
.then(function(res){
    res.json().then(function(res){
        let techData = res.articles;
        console.log('techData:',techData);
        appendTechNews(techData)
    })
})
.catch(function(err){
    console.log(err);
})

function appendTechNews(data){
 
    data.forEach(function(el,i){
        if(i<8){
            let div = document.createElement("div");
            div.setAttribute("class","techDiv")

            let title = document.createElement("a");
            title.innerText = el.title;
            title.setAttribute("href",`${el.url}`);
            title.setAttribute("target","_blank");

            let source = document.createElement("p");
            source.setAttribute("class","p1")
            source.innerText = el.author;

            let date =  document.createElement("p");
            date.setAttribute("class","date")
            date.innerText = el.publishedAt;
            
            let img = document.createElement("img");
            img.src = el.urlToImage;

            div.append(title,source,date,img);
            techContainer.append(div);
        }
    })
}

   
   

