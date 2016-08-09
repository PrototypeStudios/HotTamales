var imageArray = [
 "../img/gallery/food/1.jpg", "../img/gallery/food/2.jpg", "../img/gallery/food/3.jpg", "../img/gallery/food/4.jpg", "../img/gallery/food/5.jpg"

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
