let news=JSON.parse(localStorage.getItem("savedNews"))
displaysavedNews(news)
function displaysavedNews(data){
    data.forEach(function (elem,i){
        if(i<=5){

        
        let div=document.createElement("div");
        div.setAttribute("class","class1")
        let top=document.createElement("div")
        top.setAttribute("class","left")
        let bottom=document.createElement("div")
        bottom.setAttribute("class","right")
        let container=document.querySelector("#saved");
        let head=document.createElement("h3")
        head.innerText=elem.title
        let image=document.createElement("img")
        image.setAttribute("src",elem.urlToImage)
        image.setAttribute("alt","ERROR")
        let time=document.createElement("p")
        time.innerText=("Published on"+" "+elem.publishedAt)
              
       
        top.append(image)
        bottom.append(head,time)
        
         div.append(top,bottom)
        container.append(div);}
    });
}