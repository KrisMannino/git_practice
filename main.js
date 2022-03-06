function toggleImage() {
    var img1 = "http://placeimg.com/640/480/animals";
    var img2 = "http://placeimg.com/640/480/arch";
    
    var imgElement = document.getElementById('toggleImage');
 
    imgElement.src = (imgElement.src === img1)? img2 : img1;
 }