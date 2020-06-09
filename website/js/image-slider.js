var n=0;
function changeImage(){
    imagedata = ["../images/bruh.jpeg","../images/burh.jpeg","../images/funny-dog.jpeg",
    "../images/funny-shit.jpeg","../images/niggeeaaa.jpeg"]
    n=(n+1)%5;
    document.getElementById("changing-image").src = imagedata[n];
}
mybut = document.getElementById("mybutton");
function scrollfunction() {
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybut.style.display = "block";
    } else {
        mybut.style.display = "none";
    }
}
window.onscroll = function() {scrollfunction()};
function totop() {
    document.documentElement.scrollTop =0;
    document.body.scrollTop =0;
}