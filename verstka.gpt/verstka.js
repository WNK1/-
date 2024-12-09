// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Back-to-Top Button
  const backToTopButton = document.getElementById('back-to-top');
  
  // Show/Hide Back-to-Top Button on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove('hidden');
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
      backToTopButton.classList.add('hidden');
    }
  });
  
  // Scroll Back to Top
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Navbar Highlighting
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
  
  // Animated Counters
  const counters = document.querySelectorAll('.stat-number');
  const counterOptions = { threshold: 0.5 };
  const startCounter = entry => {
    if (entry.isIntersecting) {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const current = +counter.innerText;
  
          const increment = target / 200;
  
          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        };
  
        updateCount();
      });
    }
  };
  const observer = new IntersectionObserver(entries => entries.forEach(startCounter), counterOptions);
  
  counters.forEach(counter => observer.observe(counter));
  