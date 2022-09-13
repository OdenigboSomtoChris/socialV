{
    function myFunction() {
      let body = document.body;
      body.classList.toggle("dark-body");

      let content = document.getElementById("container");
      content.classList.toogle("dark-container");
    }
}

//Top Nav
{
    const topRight = document.getElementById("drop-bar");
  
    topRight.addEventListener("click", function () {
      const drop = document.getElementById("dropdown");
  
      if (drop.classList.contains("d-none")) {
        drop.classList.remove("d-none");
      } else {
        drop.classList.add("d-none");
      }
    });
}
 
{
    function slideDown() {
        let lsbar = document.getElementById("tooltip");
        if (lsbar.style.display === "block") {
            lsbar.style.display = "none";
        } else {
            lsbar.style.display = "block"
        }
  }
}

//Left Side Bar
{
    const lsBar = document.getElementById("menu");
  
    lsBar.addEventListener("click", function () {
      const leftToogle = document.getElementById("lsbar");
  
      if (leftToogle.classList.contains("d-none")) {
        leftToogle.classList.remove("d-none");
      } else {
        leftToogle.classList.add("d-none");
      }
      if (leftToogle.classList.contains("wid")) {
          leftToogle.classList.remove("wid");
        } else {
          leftToogle.classList.add("wid");
        }
    });
}

  // Right Side Bar
{
    const rsBar = document.getElementById("right");
  
    rsBar.addEventListener("click", function () {
      const rightToogle = document.getElementById("rsbar");
  
      if (rightToogle.classList.contains("d-none")) {
        rightToogle.classList.remove("d-none");
      } else {
        rightToogle.classList.add("d-none");
      }
  
      if (rightToogle.classList.contains("wid")) {
          rightToogle.classList.remove("wid");
      } else {
          rightToogle.classList.add("wid");
      }
      });
  
  
    rsBar.addEventListener("click", function () {
      const wid = document.getElementById("rs");
  
      if (wid.classList.contains("r-wid")) {
        wid.classList.remove("r-wid");
      } else {
        wid.classList.add("r-wid");
      }
    });
}

// Timeline

{
  function openTab(evt, tab) {
    let i, activity, tabs;
    activity = document.getElementsByClassName("activity-content");
    for (let i = 0; i < activity.length; i++) {
      activity[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tabs");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace("active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  }
}

{
  function popUp() {
      let pop = document.getElementById("createpop");
      if (pop.style.display === "block") {
          pop.style.display = "none";

          document.getElementById("content").style.opacity = "1"
          document.getElementById("rs").style.opacity = "1"
          document.getElementById("lsbar").style.opacity = "1"
          document.getElementById("rsbar").style.opacity = "1"
          
      } else {
          pop.style.display = "block"

          document.getElementById("content").style.opacity = "0.2"
          document.getElementById("rs").style.opacity = "0.3"
          document.getElementById("lsbar").style.opacity = "0.3"
          document.getElementById("rsbar").style.opacity = "0.3"
      }
  }
}

{
  function popUpp() {
      let pop = document.getElementById("createpop");
      if (pop.style.display === "block") {
          pop.style.display = "none";

          document.getElementById("content").style.opacity = "1"
          document.getElementById("rs").style.opacity = "1"
          document.getElementById("lsbar").style.opacity = "1"
          document.getElementById("rsbar").style.opacity = "1"
      } else {
          pop.style.display = "block"

          document.getElementById("content").style.opacity = "0.2"
          document.getElementById("rs").style.opacity = "0.3"
          document.getElementById("lsbar").style.opacity = "0.3"
          document.getElementById("rsbar").style.opacity = "0.3"
      }
  }
}

{
  let opt = document.getElementById("opt1");

  opt.addEventListener("click", function () {
    let optcon = document.getElementById("optcon1");

    if (optcon.classList.contains("d-none")) {
      optcon.classList.remove("d-none");
    } else {
      optcon.classList.add("d-none");
    }
  });
}

{
  let opt = document.getElementById("opt2");

  opt.addEventListener("click", function () {
    let optcon = document.getElementById("optcon2");

    if (optcon.classList.contains("d-none")) {
      optcon.classList.remove("d-none");
    } else {
      optcon.classList.add("d-none");
    }
  });
}

{
  let opt = document.getElementById("opt3");

  opt.addEventListener("click", function () {
    let optcon = document.getElementById("optcon3");

    if (optcon.classList.contains("d-none")) {
      optcon.classList.remove("d-none");
    } else {
      optcon.classList.add("d-none");
    }
  });
}

// About

{
  function about(evt, tabs) {
    let i, tab, about;
    tab = document.getElementsByClassName("about-content");
    for (let i = 0; i < tab.length; i++) {
      tab[i].style.display = "none";
    }
    about = document.getElementsByClassName("aboutdetails");
    for (let i = 0; i < about.length; i++) {
      about[i].className = about[i].className.replace("on", "");
    }
    document.getElementById(tabs).style.display = "block";
    evt.currentTarget.className += " on";
  }
}

// Friends

{
  function friend(evt, tab) {
    let i, friendlist, list;
    friendlist = document.getElementsByClassName("friendlist");
    for (let i = 0; i < friendlist.length; i++) {
      friendlist[i].style.display = "none";
    }
    list = document.getElementsByClassName("friend");
    for (let i = 0; i < list.length; i++) {
      list[i].className = list[i].className.replace("f-on", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " f-on";
  }
}

// Photos

{
  function photo(evt, img) {
    let i, pics, image;
    pics = document.getElementsByClassName("pictures");
    for (let i = 0; i < pics.length; i++) {
      pics[i].style.display = "none";
    }
    image = document.getElementsByClassName("photo");
    for (let i = 0; i < image.length; i++) {
      image[i].className = image[i].className.replace("f-on", "");
    }
    document.getElementById(img).style.display = "block";
    evt.currentTarget.className += " f-on";
  }
}  