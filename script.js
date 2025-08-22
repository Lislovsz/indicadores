const images = [
  document.getElementById('image1'),
  document.getElementById('image2'),
  document.getElementById('image3'),
  document.getElementById('image4'),
  document.getElementById('image10')
];

let currentIndex = 0;

setInterval(() => {
 
  images.forEach(img => img.style.display = 'none');


  images[currentIndex].style.display = 'block';

  
  currentIndex = (currentIndex + 1) % images.length;
}, 20000);
