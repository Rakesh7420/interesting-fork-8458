//   https://newsapi.org/v2/everything?q=mumbai&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59

async function citynews(){
    console.log()
    let url=`https://newsapi.org/v2/everything?q=mumbai&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59`
    let res=await fetch(url);
    let data=await res.json()
    console.log(data.articles)
    append_news(data.articles)
}
citynews();
function append_news(data_news){
    let container_news=document.getElementById("mumbainews")
    container_news.innerHTML="";

    data_news.forEach((el,i)=>{
        if(i<25){
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
