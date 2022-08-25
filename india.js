async function fetchData(){
    try{
    let fdata=await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=309f6236b88c45899dc51d7af64c023a");
    let data= await fdata.json();
   
    displayNews(data.articles);

}
   catch(error){
      console.log("error",error);
   }


}

fetchData();
function displayNews(data){
    data.forEach(function (elem,i){
        let div=document.createElement("div");
        div.setAttribute("class","class1")
        let left=document.createElement("div")
        left.setAttribute("class","left")
        let right=document.createElement("div")
        right.setAttribute("class","right")
        let container=document.querySelector("#IndiaNews");
        let head=document.createElement("h2")
        head.innerText=elem.title
        let image=document.createElement("img")
        image.setAttribute("src",elem.urlToImage)
        image.setAttribute("alt","ERROR")
        let time=document.createElement("p")
        time.innerText=("Published on"+" "+elem.publishedAt)
       
        
    
        left.append(head,time)
        right.append(image)
         div.append(left,right)
        container.append(div);
    });
}
