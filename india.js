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
        if(i<=5){

        
        let div=document.createElement("div");
        div.setAttribute("class","class1")
        let left=document.createElement("div")
        left.setAttribute("class","left")
        let right=document.createElement("div")
        right.setAttribute("class","right")
        let container=document.querySelector("#IndiaNews");
        let head=document.createElement("h3")
        head.innerText=elem.title
        let image=document.createElement("img")
        image.setAttribute("src",elem.urlToImage)
        image.setAttribute("alt","ERROR")
        let time=document.createElement("p")
        time.innerText=("Published on"+" "+elem.publishedAt)
        let button=document.createElement("button")
        button.setAttribute("class","btn")
        button.innerText=""
        button.onclick=function(){
            saveNews(elem,i)
            let data=JSON.parse(localStorage.getItem("savedNews"))||[]
            for(let i=0;i<data.length;i++){
                if(data[i].title==elem.title){
                    button.style.backgroundColor = 'red'
                    console.log("COLOR DONE")
                    return;
                }
            }
        
            
            
        }
       
       
    
        left.append(head,time,button)
        right.append(image)
         div.append(left,right)
        container.append(div);}
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
    
    // if(removeNews(elem,i)==false){
    let data=JSON.parse(localStorage.getItem("savedNews"))||[]
    // let newData;
    // data.forEach(function(el){
    //     if(e.title==el.title){
    //         // console.log("el",el)
    //         // console.log("e",e)
    //       newData=data.filter((el,e)=>{
    //         return el!==e
    //       })
          
           
    //     }
    // })
    // console.log("NEW",newData);
      for(let i=0;i<data.length;i++){
         if(e.title===data[i].title){
            // console.log("e",e)
            data.splice(i,1)
            
            localStorage.setItem("savedNews",JSON.stringify(data)) 
            // let newid=e.

            // document.querySelector(".click").setAttribute("class","click2")
            // console.log("splice",data)
             return;
         }
      }
    data.push(e);
    localStorage.setItem("savedNews",JSON.stringify(data));
    // }
    // document.querySelector(".btn").setAttribute("class","click")

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

for(let i=0;i<Newsdata.length;i++){
     
    for(let j=0;j<data.length;j++){
        if(Newsdata[i].title==data[j].title){
            button.style.backgroundColor = 'salmon';
        }
    }
    
}