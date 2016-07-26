var imageArray = [
"../img/gallery-test.png","../img/gallery-test.png","../img/gallery-test.png","../img/gallery-test.png","../img/gallery-test.png","../img/gallery-test.png", "../img/team-test.png", "../img/team-test.png", "../img/team-test.png", "../img/team-test.png", "../img/team-test.png", "../img/team-test.png", "../img/team-test.png", "../img/team-test.png", "../img/team-test.png", "../img/team-test.png", "../img/team-test.png"

];

$(function () {
    var products = document.getElementsByClassName("js-loading");
    for (var i = 0; i < products.length; i++) {
        loadImage(products.item(i), i);
    }

    function loadImage(image, position) {
        var downloadingImage = new Image();
        downloadingImage.onload = function () {
            image.src = this.src;
        };
        downloadingImage.src = imageArray[position];
    }
});
