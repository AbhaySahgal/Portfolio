document.addEventListener("DOMContentLoaded", function() {
  // Function to toggle menu
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Event listener for hamburger icon click
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  hamburgerIcon.addEventListener('click', toggleMenu);

  // Function to control video
  const video = document.querySelector('.video-player');
  const playButton = document.querySelector('.play-button');

  // Play video when it's visible on screen
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, options);

  observer.observe(video);

  // Loop the video when it ends
  video.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  });

  // Event listener for play button click
  playButton.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      this.classList.add('hide');
    } else {
      video.pause();
      this.classList.remove('hide');
    }
  });
});
