const archive = document.querySelector("#archive");
archive.addEventListener("mouseout", ()=> {
    archive.src="images/index-menu-button1.png";
});
archive.addEventListener("mouseover", ()=> {
    archive.src="images/index-menu-button1-hover.png";
});
archive.addEventListener("click", ()=>{
    window.open("about-me/about-me.html", "_blank");
})

const gallery = document.querySelector("#gallery");
gallery.addEventListener("mouseout", ()=> {
    gallery.src="images/index-menu-button2.png";
});
gallery.addEventListener("mouseover", ()=> {
    gallery.src="images/index-menu-button2-hover.png";
});
gallery.addEventListener("click", ()=>{
    window.open("about-me/about-me.html", "_blank");
})

const projects = document.querySelector("#projects");
projects.addEventListener("mouseout", ()=> {
    projects.src="images/index-menu-button3.png";
});
projects.addEventListener("mouseover", ()=> {
    projects.src="images/index-menu-button3-hover.png";
});
projects.addEventListener("click", ()=>{
    window.open("about-me/about-me.html", "_blank");
})