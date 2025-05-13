// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Alert for download button
document.querySelectorAll('.bg-red-600').forEach(button => {
  button.addEventListener('click', () => {
    alert('Explore 91 Club Hack APK features! Always download from trusted sources and play responsibly to avoid risks.');
  });
});
