let news=JSON.parse(localStorage.getItem("savedNews"))||[]
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
        container.append(div);
    }
    });
}
async function fetchDataINtop(){
    try{
    let fdata=await fetch("https://newsapi.org/v2/everything?q=lifestyle&apiKey=309f6236b88c45899dc51d7af64c023a");
    let data= await fdata.json();
    displayTopNews(data.articles);

}
   catch(error){
      console.log("error",error);
   }


}
fetchDataINtop();

function displayTopNews(data){
    data.forEach(function (elem,i){
        if(i<=5){
            let container=document.querySelector("#topNews")
        let div=document.createElement("div")
        div.setAttribute("class","top1")
        let head=document.createElement("h4")
        head.setAttribute("class","tophead")
        head.innerText=elem.title
        let dis=document.createElement("p");
        dis.setAttribute("class","topDis")
        dis.innerText=elem.description
        div.append(head,dis)
        container.append(div)
         
        }
        
       
    })
}
async function fetchphotoData(){
    try{
    let fdata=await fetch("https://newsapi.org/v2/everything?q=farm&apiKey=309f6236b88c45899dc51d7af64c023a");
    let data= await fdata.json();
    displayphotos(data.articles);

}
   catch(error){
      console.log("error",error);
   }


}
fetchphotoData()
function displayphotos(news){
    news.forEach(function(el,i){
         if(i<=8){
        let div=document.createElement("div")
        div.setAttribute("class","buck")
        left=document.createElement("div")
        left.setAttribute("class","photoleft")
        right=document.createElement("div")
        right.setAttribute("class","photoright")
         let head=document.createElement("h5")
         head.innerText=el.title
        //  console.log(el.description)
        let img=document.createElement("img")
        img.setAttribute("src",el.urlToImage)
         let container=document.querySelector("#photos")
        if(i==0){
            div.setAttribute("class","buck1")
            div.append(img,head);
            container.append(div)

        }else{
             left.append(head);
             right.append(img);
            div.append(left,right)
            container.append(div)
        }
    }

    });

}