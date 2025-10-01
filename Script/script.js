// Professional Portfolio Interactive Features
function createParticles() {
  const particlesContainer = document.querySelector(".particles");
  const particleCount = 60;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 4 + 4 + "s";
    
    const colors = ['rgba(59, 130, 246, 0.1)', 'rgba(139, 92, 246, 0.1)', 'rgba(6, 182, 212, 0.1)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    particlesContainer.appendChild(particle);
  }
}

function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const windowHeight = window.innerHeight;

  elements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      setTimeout(() => {
        element.classList.add("animated");
      }, index * 100);
    }
  });
}

function updateNavBackground() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

function initSplineInteraction() {
  const splineViewer = document.querySelector('spline-viewer');
  if (splineViewer) {
    splineViewer.style.opacity = '0';
    splineViewer.style.transform = 'scale(0.9)';
    splineViewer.style.transition = 'all 0.8s ease';
    
    splineViewer.addEventListener('load', () => {
      splineViewer.style.opacity = '1';
      splineViewer.style.transform = 'scale(1)';
      
      // Remove watermark after load
      removeSplineWatermark();
    });
    
    // Also try to remove watermark after a delay
    setTimeout(() => {
      removeSplineWatermark();
    }, 2000);
  }
}

function removeSplineWatermark() {
  const splineViewer = document.querySelector('spline-viewer');
  if (splineViewer) {
    // Method 1: Try accessing shadow DOM
    try {
      const shadowRoot = splineViewer.shadowRoot;
      if (shadowRoot) {
        const watermarkElements = shadowRoot.querySelectorAll('*');
        watermarkElements.forEach(el => {
          const text = (el.textContent || el.innerText || '').toLowerCase();
          const className = (el.className || '').toLowerCase();
          const href = (el.href || '').toLowerCase();
          
          if (text.includes('built with spline') ||
              text.includes('spline') ||
              className.includes('watermark') ||
              className.includes('logo') ||
              href.includes('spline.design')) {
            el.style.display = 'none';
            el.style.opacity = '0';
            el.style.visibility = 'hidden';
            el.remove();
          }
        });
      }
    } catch (error) {
      console.log('Shadow DOM access failed, trying alternative methods');
    }
    
    // Method 2: Hide all child divs at bottom
    const allChildren = splineViewer.children;
    Array.from(allChildren).forEach((child, index) => {
      if (index >= allChildren.length - 3) { // Hide last 3 children
        child.style.display = 'none';
      }
    });
    
    // Method 3: Find and hide by position
    const allElements = splineViewer.querySelectorAll('*');
    allElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(el);
      
      // Hide elements at bottom of viewer
      if (rect.bottom > splineViewer.getBoundingClientRect().bottom - 100 &&
          rect.height < 50) {
        el.style.display = 'none';
      }
      
      // Hide absolute positioned elements at bottom
      if (computedStyle.position === 'absolute' && 
          (computedStyle.bottom === '0px' || 
           computedStyle.bottom === '10px' || 
           computedStyle.bottom === '20px')) {
        el.style.display = 'none';
      }
    });
    
    // Method 4: Mutation observer to catch dynamically added watermarks
    if (!splineViewer.hasWatermarkObserver) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const text = (node.textContent || '').toLowerCase();
              if (text.includes('built with spline') || text.includes('spline')) {
                node.style.display = 'none';
                node.remove();
              }
            }
          });
        });
      });
      
      observer.observe(splineViewer, {
        childList: true,
        subtree: true
      });
      
      splineViewer.hasWatermarkObserver = true;
    }
  }
}

function showLoadingAnimation() {
  const loading = document.createElement('div');
  loading.className = 'loading';
  loading.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(loading);
  
  setTimeout(() => {
    loading.classList.add('hidden');
    setTimeout(() => {
      loading.remove();
    }, 500);
  }, 1500);
}

document.addEventListener("DOMContentLoaded", function () {
  showLoadingAnimation();
  createParticles();
  initSplineInteraction();
  updateNavBackground();
  
  setTimeout(() => {
    animateOnScroll();
  }, 500);
  
  // Continuously monitor and remove watermark
  setInterval(removeSplineWatermark, 1000);
});

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

window.addEventListener("scroll", function () {
  animateOnScroll();
  updateNavBackground();
});