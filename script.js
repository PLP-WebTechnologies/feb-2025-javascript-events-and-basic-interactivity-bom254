// Button Click
document.getElementById('magic-button').addEventListener('click', () => {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  });
  
  // Hover Effect
  const hoverArea = document.getElementById('hover-area');
  hoverArea.addEventListener('mouseover', () => {
    hoverArea.style.backgroundColor = 'lightblue';
  });
  hoverArea.addEventListener('mouseout', () => {
    hoverArea.style.backgroundColor = 'lightgray';
  });
  
  // Keypress Detection
  document.addEventListener('keydown', (event) => {
    document.getElementById('keypress-output').textContent = `You pressed: ${event.key}`;
  });
  
  // Double-click Secret
  document.getElementById('double-click-secret').addEventListener('dblclick', () => {
    alert('🎉 You found the secret!');
  });
  
  // Image Gallery
  const images = [
    "https://via.placeholder.com/300?text=First",
    "https://via.placeholder.com/300?text=Second",
    "https://via.placeholder.com/300?text=Third"
  ];
  let imgIndex = 0;
  document.getElementById('next-img').addEventListener('click', () => {
    imgIndex = (imgIndex + 1) % images.length;
    document.getElementById('gallery-img').src = images[imgIndex];
  });
  
  // Tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
      document.getElementById(tab.dataset.content).style.display = 'block';
    });
  });
  
  // Form Validation
  const form = document.getElementById('registration-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const feedback = document.getElementById('form-feedback');
    
    if (username.length === 0) {
      feedback.textContent = "Name is required.";
      feedback.style.color = 'red';
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      feedback.textContent = "Please enter a valid email.";
      feedback.style.color = 'red';
      return;
    }
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.style.color = 'red';
      return;
    }
  
    feedback.textContent = "Registration successful! 🎉";
    feedback.style.color = 'green';
  });
  
  // Real-time feedback (bonus)
  document.getElementById('password').addEventListener('input', (e) => {
    const feedback = document.getElementById('form-feedback');
    if (e.target.value.length < 8) {
      feedback.textContent = "Password too short.";
      feedback.style.color = 'orange';
    } else {
      feedback.textContent = "";
    }
  });
  