
const typed = new Typed('#typing', {
    strings: [
        "MERN Stack Developer",
        "Web Developer",
        "Web Designer",
    ],
    typeSpeed: 100, 
    backSpeed: 50, 
    loop: true 
});

const nav = document.getElementById("nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length
for(let i = 0; i < totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
     {
        navClose();
        for( let i = 0; i < totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
       for(let j = 0; j < totalNavList; j++){
        if(navList[j].querySelector("a").classList.contains("active"))
        {
            allSection[j].classList.add("back-section");
        }
        navList[j].querySelector("a").classList.remove("active");
       }
       this.classList.add("active");
       showSection(this);
     })
}

function showSection(element){
    for( let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function hireMe(){
    for(let j = 0; j < totalNavList; j++){
        if(navList[j].querySelector("a").classList.contains("active"))
        {
            allSection[j].classList.add("back-section");
        }
        navList[j].querySelector("a").classList.remove("active");
       }
       document.querySelector(".contact").classList.add("active");
}

function about(){
    for(let j = 0; j < totalNavList; j++){
        if(navList[j].querySelector("a").classList.contains("active"))
        {
            allSection[j].classList.add("back-section");
        }
        navList[j].querySelector("a").classList.remove("active");
       }
       document.querySelector(".about").classList.add("active");
}

const navTogglerBtn = document.getElementById("nav-toggler"),
aside= document.querySelector(".aside");
navTogglerBtn.addEventListener("click", ()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.add("close");
}

function navClose(){
    aside.classList.remove("open");
    navTogglerBtn.classList.remove("close");
}




function abc(){
    document.getElementById("style-switcher").classList.toggle("open");
}

window.addEventListener("scroll",()=>{
    if(document.getElementById("style-switcher").classList.contains("open")){
        document.getElementById("style-switcher").classList.remove("open")
    }
})


function setActiveStyle(sheet) {
    document.getElementById('themeStylesheet').href = sheet;
}


const dayNight = document.getElementById("day-night")
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});









