// Create animated particles
      function createParticles() {
        const particlesContainer = document.querySelector(".particles");
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div");
          particle.className = "particle";
          particle.style.left = Math.random() * 100 + "%";
          particle.style.top = Math.random() * 100 + "%";
          particle.style.animationDelay = Math.random() * 6 + "s";
          particle.style.animationDuration = Math.random() * 4 + 4 + "s";
          particlesContainer.appendChild(particle);
        }
      }

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Scroll animations
      function animateOnScroll() {
        const elements = document.querySelectorAll(".animate-on-scroll");
        const windowHeight = window.innerHeight;

        elements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;

          if (elementTop < windowHeight - 100) {
            element.classList.add("animated");
          }
        });
      }

      // Navigation background on scroll
      function updateNavBackground() {
        const nav = document.querySelector("nav");
        if (window.scrollY > 100) {
          nav.style.background = "rgba(0, 0, 0, 0.95)";
        } else {
          nav.style.background = "rgba(0, 0, 0, 0.9)";
        }
      }

      // Initialize everything
      document.addEventListener("DOMContentLoaded", function () {
        createParticles();
        animateOnScroll();
        updateNavBackground();
      });

      // Event listeners
      window.addEventListener("scroll", function () {
        animateOnScroll();
        updateNavBackground();
      });

      // Add hover effects to cards
      document
        .querySelectorAll(".about-card, .project-card")
        .forEach((card) => {
          card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-10px) scale(1.02)";
          });

          card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0) scale(1)";
          });
        });

      // Add typing animation to the hero title
      function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = "";

        function type() {
          if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
          }
        }

        type();
      }

      // Initialize typing animation
      setTimeout(() => {
        const heroTitle = document.querySelector(".hero-text h1");
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
      }, 500);