const img1 = document.getElementById('image1');
const img2 = document.getElementById('image2');

let showingFirst = true;

setInterval(() => {
  if (showingFirst) {
    img1.style.display = 'none';
    img2.style.display = 'block';
  } else {
    img1.style.display = 'block';
    img2.style.display = 'none';
  }
  showingFirst = !showingFirst;
}, 50000); 
