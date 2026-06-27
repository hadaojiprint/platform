const revealTargets = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((target) => observer.observe(target));

const year = new Date().getFullYear();
console.log(`HADAOJI PLATFORM ${year}`);
