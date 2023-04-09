window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY >= 55);
    var body = this.document.querySelector("body");
    body.classList.toggle("fixedbg", window.scrollY >= 55);
});