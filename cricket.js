let Newsdata;
async function fetchDataIN(){
    try{
    let fdata=await fetch("https://newsapi.org/v2/everything?q=cricket&apiKey=309f6236b88c45899dc51d7af64c023a");
     Newsdata= await fdata.json();
   
    displayNews(Newsdata.articles);

}
   catch(error){
      console.log("error",error);
   }


}

fetchDataIN();
function displayNews(data){
    data.forEach(function (elem,i){
        if(i<=25){

        
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
        let button=document.createElement("button")
        button.setAttribute("class","btn")
        button.innerText="Save"
        button.onclick=function(){
            saveNews(elem,i)
            let data=JSON.parse(localStorage.getItem("savedNews"))||[]
            for(let i=0;i<data.length;i++){
                if(data[i].title==elem.title){
                    button.style.backgroundColor = 'gray'
                    button.innerText="Saved"
                    return;
                }else{
                    button.style.backgroundColor = 'white'
                    button.innerText="Save"
                }
            }
        
            
            
        }
         let dis=document.createElement("h4");
        // dis.setAttribute("class","")
        dis.innerText=elem.description
       
       
    
        if(i==0){
            div.setAttribute("class","first")
            div.append(head,time,dis,image,button)
            container.append(div);
        }else{
            left.append(head,time,button)
        right.append(image)
         div.append(left,right)
        container.append(div);
        }
    }
    });
}




async function fetchDataINtop(){
    try{
    let fdata=await fetch("https://newsapi.org/v2/everything?q=health&apiKey=309f6236b88c45899dc51d7af64c023a");
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
            let container=document.querySelector("#TopNews")
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


function saveNews(e,i){
    let data=JSON.parse(localStorage.getItem("savedNews"))||[]
      for(let i=0;i<data.length;i++){
         if(e.title===data[i].title){
            data.splice(i,1)
            
            localStorage.setItem("savedNews",JSON.stringify(data)) 
             return;
         }
      }
    data.push(e);
    
    localStorage.setItem("savedNews",JSON.stringify(data));

}
function removeNews(id){
    // let ans=false;
let news =JSON.parse(localStorage.getItem("savedNews"))
  let updated= news.filter((elem,index)=>{
    ans=true
    return index !== id
  })
  localStorage.setItem("savedNews",JSON.stringify(updated))
}
let data=JSON.parse(localStorage.getItem("savedNews"))||[]

async function fetchphotoData(){
    try{
    let fdata=await fetch("https://newsapi.org/v2/everything?q=sports&apiKey=309f6236b88c45899dc51d7af64c023a");
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
         let container=document.querySelector("#Photos")
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