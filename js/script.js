let elements = document.querySelectorAll(".count");
elements.forEach((item) => {
  let target = parseInt(item.textContent.replace("+", ""));
  let count = 0; 
  const speed = item.dataset.speed; 
  console.log(speed);
  let interval = setInterval(() => {
    if (count < target) {
      count++;
      item.textContent = count + "+"; 
    } else {
      clearInterval(interval);
    }
  }, 20); 
});
