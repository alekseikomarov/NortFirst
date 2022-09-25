  setTimeout(() => {
    const disappear = document.getElementById('img');
  
    // 👇️ removes element from DOM
    disappear.style.display = 'none';
  
    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 2000); // 👈️ time in milliseconds