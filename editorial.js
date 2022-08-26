console.log("i am here!")

    // <-----------editorial data fetch and append------------->///

    fetch('https://newsapi.org/v2/everything?q=editorials&apiKey=8310b5752c8c4c30b984ed3c77811b9d')
    .then(function(res){
        res.json().then(function(res){
            let editorialData = res.articles;
            console.log('editorialData:',editorialData)
            appendEditorials(editorialData);
        })
    })
    .catch(function(err){
        console.log(err);
    })

         let editorialContainer = document.getElementById("editorialContent")

    function appendEditorials(data){
        data.forEach(function(el,i){
            if(i>4 && i<27){
                let div = document.createElement("div");
                div.setAttribute("class","editorialDiv");

                imgDiv = document.createElement("div");
                imgDiv.setAttribute("class","imgBox")
                
                contentDiv = document.createElement("div")
                contentDiv.setAttribute("class","contentBox")

                let title = document.createElement("a");
                title.innerText = el.title;
                title.setAttribute("href",`${el.url}`);
                 title.setAttribute("target","_blank")

                let author = document.createElement("p");
                author.setAttribute("class","authorName")
                author.innerText = el.author;

                let date = document.createElement("p");
                date.innerText =`Updated on ${el.publishedAt}`;
                date.setAttribute("class","editorialDate");


                let img = document.createElement("img");
                img.src = el.urlToImage;

                imgDiv.append(img)
                contentDiv.append(title,author,date);

                div.append(contentDiv,imgDiv);

                editorialContainer.append(div);
            }
        })
    }