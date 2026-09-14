// 移动端导航菜单
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
menuBtn.addEventListener('click',()=>{
    if(navList.style.display === "block"){
        navList.style.display = "none";
    }else{
        navList.style.display = "block";
        navList.style.position = "absolute";
        navList.style.top = "75px";
        navList.style.left = "0";
        navList.style.width = "100%";
        navList.style.background = "#0a0a0a";
        navList.style.padding = "30px 5%";
    }
})

// 滚动导航变色
window.addEventListener('scroll', ()=>{
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 50){
        nav.style.background = "rgba(10,10,10,0.96)";
    }else{
        nav.style.background = "#0a0a0a";
    }
})