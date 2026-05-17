// left sidebar start

const github = document.querySelector("#github");
github.addEventListener("click", () => {
    window.open("https://github.com/kaltfisch", "_blank");
});

const youtube = document.querySelector("#youtube");
youtube.addEventListener("click", () => {
    window.open("https://www.youtube.com/@pescado-e8n", "_blank");
});

const letterboxd = document.querySelector("#letterboxd");
letterboxd.addEventListener("click", () => {
    window.open("https://letterboxd.com/grilled_ghoti/", "_blank");
});

// left sidebar end

// menu start

const archive = document.querySelector("#archive");
archive.addEventListener("mouseout", () => {
    archive.src="images/index-menu-button1.png";
});
archive.addEventListener("mouseover", () => {
    archive.src="images/index-menu-button1-hover.png";
});
archive.addEventListener("click", () => {
    window.open("archive/archive.html", "_blank");
});

const gallery = document.querySelector("#gallery");
gallery.addEventListener("mouseout", () => {
    gallery.src="images/index-menu-button2.png";
});
gallery.addEventListener("mouseover", () => {
    gallery.src="images/index-menu-button2-hover.png";
});
gallery.addEventListener("click", () => {
    window.open("gallery/gallery.html", "_blank");
});

const projects = document.querySelector("#projects");
projects.addEventListener("mouseout", () => {
    projects.src="images/index-menu-button3.png";
});
projects.addEventListener("mouseover", () => {
    projects.src="images/index-menu-button3-hover.png";
});
projects.addEventListener("click", () => {
    window.open("projects/projects.html", "_blank");
});

// menu end

// right sidebar start

const aboutme = document.querySelector("#aboutme");
aboutme.addEventListener("mouseout", () => {
    aboutme.src="images/index-sushi-aboutme.png";
})
aboutme.addEventListener("mouseover", () => {
    aboutme.src="images/index-sushi-aboutme-hover.png";
})
aboutme.addEventListener("click", () => {

});

const contacts = document.querySelector("#contacts");
contacts.addEventListener("mouseout", () => {
    contacts.src="images/index-sushi-contacts.png";
})
contacts.addEventListener("mouseover", () => {
    contacts.src="images/index-sushi-contacts-hover.png";
})
contacts.addEventListener("click", () => {

});

const surpriseme = document.querySelector("#surpriseme");
surpriseme.addEventListener("mouseout", () => {
    surpriseme.src="images/index-sushi-surpriseme.png";
})
surpriseme.addEventListener("mouseover", () => {
    surpriseme.src="images/index-sushi-surpriseme-hover.png";
})
surpriseme.addEventListener("click", () => {

});

const guestbook = document.querySelector("#guestbook");
guestbook.addEventListener("mouseout", () => {
    guestbook.src="images/index-guestbook.png";
})
guestbook.addEventListener("mouseover", () => {
    guestbook.src="images/index-guestbook-hover.png";
})
surpriseme.addEventListener("click", () => {

});

// right sidebar end