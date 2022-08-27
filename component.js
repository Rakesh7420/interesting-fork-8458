let navbar = () => {
  return ` 
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
    </div>`;
};

function navbarJs() {
  let data = JSON.parse(localStorage.getItem("Login-Data"));
  let login = () => {
    let container = document.getElementById("mylogin");
    if (!data) {
      window.location.href = "login.html";
    } else {
      console.log("data available");
      let image = document
        .getElementById("user_img")
        .setAttribute("src", data.img);

      console.log(data.img);
      document.getElementById("user_name").innerText = data.name;
      document.getElementById("user_mail").innerText = data.email;
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
    window.location.reload();
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
let footer = () => {
  return `<div class="footer">
<div class="first">
    <img src="https://www.hindustantimes.com/res/images/ht-logo.svg" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/2/mweb_button_svg.svg" alt="error">
</div>

<div class="subs">
    <p>Subscribe to our best newsletter</p>

    <div>
    <div id="sub2">
        <div>HT Daily Capsule</div>
        <div>Enter Email Address</div>
        <div>SUBSCRIBE</div>
    </div>

    <span>
        <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/fb-logo.svg" alt="">
        <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/in-logo.svg" alt="">
        <img src="https://images.hindustantimes.com/images/app-images/2022/2/instagram.svg" alt="">
        <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/tw-logo.svg" alt="">
    </span>
    </div>
</div>

<hr>

<div class="section">
    <div>
        <p style="color: #ffffff; font-weight: bold;">LATEST NEWS</p>
        <p style="color: #ffffff; font-weight: bold;">WORLD NEWS</p>
        <p style="color: #ffffff; font-weight: bold;">INDIA NEWS</p>
        <p style="color: #ffffff; font-weight: bold;">CRICKET</p>
        <p style="color: #ffffff; font-weight: bold;">CITY NEWS</p>
        <p>Bangalore</p>
        <p>Pune</p>
        <p>Kolkata</p>
        <p>Chennai</p>
        <p>Lucknow</p>
        <p>Hyderabad</p>
        <p>Kuwait</p>
        <p>Chandigarh</p>
        <p>Rajasthan</p>
        <p>Mumbai</p>
        <p>Noida</p>
        <p>Gurgaon</p>
    </div>

    <div>
        <p>Patna</p>
        <p>Ranchi</p>
        <p>Pune</p>
        <p>Others</p>
        <p style="color: #ffffff; font-weight: bold;">ENTERTAINMENT</p>
        <p>Bollywood</p>
        <p>Hollywood</p>
        <p>Music</p>
        <p>Tamil Cinema</p>
        <p>Telugu Cinema</p>
        <p>TV</p>
        <p>Web Stories</p>
        <p>Others</p>
        <p style="color: #ffffff; font-weight: bold;">ASTROLOGY</p>
        <p>Horroscope</p>
        <p>Compatibilty Calculator</p>
    </div>

    <div>
        <p style="color: #ffffff; font-weight: bold;">EDUCATION</p>
        <p>Admission News</p>
        <p>Board Exams</p>
        <p>Competitive Exams</p>
        <p>Employment News</p>
        <p>Exam Results</p>
        <p>Education News</p>
        <p style="color: #ffffff; font-weight: bold;">LIFESTYLE</p>
        <p>Art & Culture</p>
        <p>Brunch</p>
        <p>Fashion</p>
        <p>Festival</p>
        <p>Health</p>
        <p>Recipes</p>
        <p>Relationship</p>
    </div>

    <div>
        <p style="color: #ffffff; font-weight: bold;">WEB STORIES</p>
        <p style="color: #ffffff; font-weight: bold;">TRENDING</p>
        <p style="color: #ffffff; font-weight: bold;">BUSINESS</p>
        <p style="color: #ffffff; font-weight: bold;">PHOTOS</p>
        <p style="color: #ffffff; font-weight: bold;">VIDEOS</p>
        <p style="color: #ffffff; font-weight: bold;">BUDGET</p>
        <p style="color: #ffffff; font-weight: bold;">ENVIRONMENT</p>
        <p style="color: #ffffff; font-weight: bold;">SCIENCE</p>
        <p style="color: #ffffff; font-weight: bold;">OPINION</p>
        <p style="color: #ffffff; font-weight: bold;">EDITORIAL</p>
        <p>SPORTS</p>
        <p>Badminton</p>
        <p>Football</p>
        <p>Hockey</p>
        <p>Tennis</p>
        <p>Others</p>
        <p style="color: #ffffff; font-weight: bold;">BOOKS</p>
    </div>

    <div>
        <p style="color: #ffffff; font-weight: bold;">HIT INSIGHT</p>
        <p style="color: #ffffff; font-weight: bold;">HIT WEEKEND</p>
        <p style="color: #ffffff; font-weight: bold;">BRAND POST</p>
        <p style="color: #ffffff; font-weight: bold;">BRAND STORIES</p>
        <p style="color: #ffffff; font-weight: bold;">ELECTIONS</p>
        <p>Uttar Pradesh Assembly Elections</p>
        <p>Punjab Assembly Elections</p>
        <p>Goa Assembly Elections</p>
        <p>Uttarakhand Assembly Elections</p>
        <p>COVID-19</p>
        <p style="color: #ffffff; font-weight: bold;">OMNICRON</p>
        <p style="color: #ffffff; font-weight: bold;">ASSEMBLY ELECTIONS</p>
        <p style="color: #ffffff; font-weight: bold;">GAMES</p>
        <p style="color: #ffffff; font-weight: bold;">DAILY SUDOKU</p>
        <p>Elections</p>
    </div>

    <div>
        <p>Daily Crossword</p>
        <p>Daily Word jumble</p>
        <p style="color: #ffffff; font-weight: bold;">QUIZ</p>
        <p style="color: #ffffff; font-weight: bold;">TRENDING NEWS</p>
        <p>Horoscope Today</p>
        <p>Supreme Court</p>
        <p>Brahmastra Box Office</p>
        <p>Criminal Justice 3 Review</p>
        <p>India vs Pakistan</p>
        <p>International Dog Day</p>
        <p style="color: #ffffff; font-weight: bold;">TRENDING TOPICS</p>
        <p>Today's Horroscope</p>
        <p>Asia Cup</p>
    </div>
</div>

<div class="last">
<div class="about">
    <p>About Us</p>
    <p>Contact Us</p>
    <p>Terms Of Use</p>
    <p>Privacy Policy</p>
    <p>Weather Today</p>
    <p>HT Newsletters</p>
    <p>Subscription</p>
    <p>Disclaimer</p>
    <p>Print Ad Rates</p>
    <p>Code Of Ethics</p>
    <p>Sitemaps</p>
    <p>RSS Feeds</p>
</div>

<hr>

<div class="pics">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-logo.svg" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/HH-logo.svg" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-lounge.svg" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/HT_Auto.svg" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-tech.svg" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-bangla.svg" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/healthshots.png" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/OTT-icon.png" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/slurrp-icon.svg" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/smartcast-logo.png" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-kannada.png" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-tamil.png" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-telugu.png" alt="">
    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-marathi.png" alt="">
</div>

<hr>

<h4>© 2022 HindustanTimes</h4>
</div>

</div>`;
};
export { navbar, navbarJs, footer };
