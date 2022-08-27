let navbar = ()=>{
    return` 
    <div id="mySidepanel" class="sidepanel">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
      <div id="top_sidebar">
        <img
          id="img"
          src="https://www.hindustantimes.com/res/images/ht-logo.svg"
          alt=""
        />
      </div>
      <div id="middle_sidebar">
        <div id="div1">
          <a href="home.html">HOME</a>
          <a href="india.html">INDIA NEWS</a>
          <a href="entertainmentpage.html">ENTERTAINMENT</a>
          <a href="cricket.html">CRICKET</a>
          <a href="">EDUCATION </a>
          <a href="world.html">WORLD NEWS</a>
          <a href="">CITIES</a>
          <a href="">DAILY DIGEST</a>
          <a href="">OPINION </a>
          <a href="">FOR YOU</a>
          <a href="">WEB STORIES</a>
          <a href="">PODCAST</a>
        </div>
        <div id="div2">
          <a href="">ASTROLOGY</a>
          <a href="">LIFESTYLE</a>
          <a href="">TRENDING </a>
          <a href="">VIDEOS</a>
          <a href="">PHOTOS</a>
          <a href="">SPORTS</a>
          <a href="">BUISNESS</a>
          <a href="">QUICKERADS</a>
          <a href="">ANALYSIS</a>
          <a href="">FOLLOWING </a>
          <a href="">SCIENCE</a>
        </div>
      </div>
      <div id="bottom_sidebar">
        <div>
          <h4>My Account</h4>
          <h4>Saved Articles</h4>
        </div>
        <div><h3 onclick="clearls()">Signout</h3></div>
      </div>
    </div>

    <div class="nav">
      <div id="left">
        <span id="icon">
          <div id="main">
            <button class="openbtn"  onclick="openNav()">☰</button>
          </div>
          <p><b>Explore</b></p>
        </span>

        <span id="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7289/7289312.png"
            alt="icon"
          />
          <p><b>Search</b></p>
        </span>

        <p>Tuesday, Aug 23, 2022</p>

        <span id="icon">
          <p>New Delhi 30°C</p>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4064/4064269.png"
            alt="icon"
          />
        </span>
      </div>

      <div id="middles">
        <a href="">
          <img
            src="	https://www.hindustantimes.com/res/images/ht-logo.svg"
            alt="error"
        /></a>
      </div>

      <div id="right">
        <span id="box">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/7985/7985188.png"
              alt="error"
            />
            <a href=""
              ><p><b>Games</b></p></a
            >
          </div>

          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/8271/8271136.png"
              alt="error"
            />
            <a href=""
              ><p><b>E-Paper</b></p></a
            >
          </div>

          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3711/3711310.png"
              alt="error"
            />
            <a onclick="login()" id="mylogin"
              ><p><b>Sign-In</b></p></a
            >
          </div>
        </span>

        <div>
          <!-- <p>Start 15 Days Free Trial</p> -->
          <button id="logout" onclick="clearls()"></button>
        </div>
      </div>
    </div>

    <div class="tag">
      <span>
        <a href="home.html"><p>Home</p></a>
        <a href="india.html"><p>India</p></a>
        <a href="world.html"><p>World</p></a>
        <a href="mumbaipage1.html"><p>Mumbai</p></a>
        <a href="entertaimentpage.html"><p>Entertainment</p></a>
        <a href="cricket.html"><p>Cricket</p></a>
        <a href="lifestyle.html"><p>Lifestyle</p></a>
        <a href=""><p>Astrology</p></a>
        <a href="editorial.html"><p>Editorials</p></a>
        <a href=""><p>For You</p></a>
        <a href=""><p>Shop Now</p></a>
      </span>
    </div>

    <!-- <button class="openbtn" onclick="openNav()">☰</button> -->
    <div id="mySidepanel2" class="sidepanel2">
      <a href="javascript:void(0)"  id="close" class="closebtn2" onclick="closeNav2()">×</a>
     <div id="profile1">
      <img id="user_img" src="" alt="">
<p id="user_name" ></p>
<p id="user_mail" ></p>
     </div>
     <div id="profile2">
      <div>

        <h3 onclick="clearls()">Signout</h3>
      </div>
      <div>

        <h3>Save Articles</h3>
      </div>
     </div>
      
      </div>
    </div>`
}


function navbarJs(){



      let data = JSON.parse(localStorage.getItem("Login-Data"));
      let login = () => {
        let container = document.getElementById("mylogin");
        if (!data) {
          window.location.href = "login.html";
        } else {
          console.log("data available");
          let image=document.getElementById('user_img').setAttribute("src",data.img)
         
          console.log(data.img)
          document.getElementById('user_name').innerText=data.name
          document.getElementById('user_mail').innerText=data.email
          document.getElementById("mySidepanel2").style.width = "420px";
        }
      };
      function closeNav2() {
        document.getElementById("mySidepanel2").style.width = "0";
      }

      if (data.email !== "") {
        document.querySelector("#mylogin").innerText = "MY ACCOUNT";
        document.getElementById("logout").innerText = "Log Out";
      }
      let clearls = () => {
        localStorage.clear();
        console.log("hello");
        window.location.reload()
        document.getElementById("logout").innerText = "";
        document.querySelector("#mylogin").innerText = "SignIn";
      };
      //   sidebaropen
      function openNav() {
        document.getElementById("mySidepanel").style.width = "350px";
      }

      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      }
    }

    export {navbar,navbarJs}
      
    