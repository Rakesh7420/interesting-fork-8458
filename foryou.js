async function citynews(){
    console.log()
    let url=`https://newsapi.org/v2/everything?q=for%20you&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59`
    let res=await fetch(url);
    let data=await res.json()
    console.log(data.articles)
    append_news(data.articles)
}
citynews();
function append_news(data_news){
    let container_news=document.getElementById("foryounews")
    container_news.innerHTML="";

    data_news.forEach((el,i)=>{
        if(i<15){
            let title=document.createElement("h1")
            title.innerText=el.title;
            title.style.cursor="pointer"
    
            let publishedAt=document.createElement("p")
            publishedAt.innerText=el.publishedAt
            publishedAt.setAttribute("class","publishedAt")
            publishedAt.style.color="blue"
            publishedAt.style.cursor="pointer"
    
            let image=document.createElement("img")
            image.src=el.urlToImage
            image.setAttribute("id","image");
            image.style.cursor="pointer"
    
            let div=document.createElement("div")
            div.setAttribute("class","news");
            div.append(title,publishedAt,image);
            container_news.append(div)
        }
      
    })
}



//https://newsapi.org/v2/everything?q=top&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59
async function topnews(){
    console.log()
    let url=`https://newsapi.org/v2/everything?q=top&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59`
    let res=await fetch(url);
    let data=await res.json()
    console.log(data.articles)
    append_news_top(data.articles)
}
topnews();
function append_news_top(data_news_top){
    let container_news_top=document.getElementById("topnews")
    container_news_top.innerHTML="";

    data_news_top.forEach((el,i)=>{
        if(i<17){
            let title=document.createElement("h3")
            title.innerText=el.title;
            title.style.cursor="pointer"
    
            let publishedAt=document.createElement("p")
            publishedAt.innerText=el.publishedAt
            publishedAt.setAttribute("class","publishedAt")
            publishedAt.style.color="blue"
            publishedAt.style.cursor="pointer"
    
            let image=document.createElement("img")
            image.src=el.urlToImage
            image.setAttribute("id","image");
            image.style.cursor="pointer"
    
            let div=document.createElement("div")
            div.setAttribute("class","news");
            div.append(title,publishedAt,image);
            container_news_top.append(div)
        }
      
    })
}
async function viralnews(){
    console.log()
    let url=`https://newsapi.org/v2/everything?q=viral&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59`
    let res=await fetch(url);
    let data=await res.json()
    console.log(data.articles)
    append_news_viral(data.articles)
}
viralnews();
function append_news_viral(data_news_viral){
    let container_news_viral=document.getElementById("viralnews")
    container_news_viral.innerHTML="";

    data_news_viral.forEach((el,i)=>{
        if(i<36){
            let title=document.createElement("h3")
            title.innerText=el.title;
            title.style.cursor="pointer"
    
            // let publishedAt=document.createElement("p")
            // publishedAt.innerText=el.publishedAt
            // publishedAt.setAttribute("class","publishedAt")
            // publishedAt.style.color="blue"
            // publishedAt.style.cursor="pointer"
    
            let image=document.createElement("img")
            image.src=el.urlToImage
            image.setAttribute("class","image");
            image.style.cursor="pointer"
    
            let div=document.createElement("div")
            div.setAttribute("class","news");
            div.append(title,image);
            container_news_viral.append(div)
        }
      
    })
}