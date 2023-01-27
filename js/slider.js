const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg'
];

let imgIndex = 0;
const img = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    imgIndex++;
    img.setAttribute('src', imgLink);
}, 1000);