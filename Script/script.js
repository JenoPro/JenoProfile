// Professional Portfolio Interactive Features
function createParticles() {
  const particlesContainer = document.querySelector(".particles");
  if (!particlesContainer) return;
  
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
  if (!nav) return;
  
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
      removeSplineWatermark();
    });
    
    setTimeout(() => {
      removeSplineWatermark();
    }, 2000);
  }
}

function removeSplineWatermark() {
  const splineViewer = document.querySelector('spline-viewer');
  if (!splineViewer) return;
  
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
    console.log('Shadow DOM access failed');
  }
  
  const allChildren = splineViewer.children;
  Array.from(allChildren).forEach((child, index) => {
    if (index >= allChildren.length - 3) {
      child.style.display = 'none';
    }
  });
  
  if (!splineViewer.hasWatermarkObserver) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
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

// Contact Form Email Functionality with Professional Animations
function initContactForm() {
  // Initialize EmailJS with your public key
  // You'll need to replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
  emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key from EmailJS
  
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  console.log('Contact form initialized with EmailJS');

  contactForm.addEventListener('submit', function(e) {
    // Prevent default form submission and URL parameters
    e.preventDefault();
    e.stopPropagation();
    
    // Clear any existing URL parameters
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Get form data using FormData API
    const formData = new FormData(contactForm);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const subject = formData.get('subject')?.trim();
    const message = formData.get('message')?.trim();
    
    // Enhanced validation
    if (!name || name.length < 2) {
      showFormMessage('Please enter a valid name (at least 2 characters).', 'error');
      focusField('name');
      return false;
    }
    
    if (!email || !isValidEmail(email)) {
      showFormMessage('Please enter a valid email address.', 'error');
      focusField('email');
      return false;
    }
    
    if (!subject || subject.length < 3) {
      showFormMessage('Please enter a subject (at least 3 characters).', 'error');
      focusField('subject');
      return false;
    }
    
    if (!message || message.length < 10) {
      showFormMessage('Please enter a message (at least 10 characters).', 'error');
      focusField('message');
      return false;
    }
    
    // Start professional loading animation
    startSendingAnimation();
    
    // Prepare email parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_email: 'laurentejeno73@gmail.com',
      reply_to: email,
      timestamp: new Date().toLocaleString()
    };
    
    // Send email using EmailJS with enhanced error handling
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then(function(response) {
        console.log('Email sent successfully:', response);
        showSuccessAnimation();
        setTimeout(() => {
          showFormMessage('🎉 Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
          contactForm.reset();
          resetSendButton();
        }, 1500);
      })
      .catch(function(error) {
        console.error('Email sending failed:', error);
        showErrorAnimation();
        setTimeout(() => {
          showFormMessage('❌ Sorry, there was an error sending your message. Please try again or email me directly at laurentejeno73@gmail.com', 'error');
          resetSendButton();
        }, 1500);
      });
    
    return false; // Ensure form doesn't submit traditionally
  });
}

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Focus specific field with animation
function focusField(fieldName) {
  const field = document.getElementById(fieldName);
  if (field) {
    field.focus();
    field.style.borderColor = '#ef4444';
    field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
    setTimeout(() => {
      field.style.borderColor = '';
      field.style.boxShadow = '';
    }, 3000);
  }
}

// Professional sending animation
function startSendingAnimation() {
  const submitButton = document.querySelector('#contactForm button[type="submit"]');
  if (!submitButton) return;
  
  submitButton.disabled = true;
  submitButton.style.position = 'relative';
  submitButton.style.overflow = 'hidden';
  
  // Create animated elements
  const originalContent = submitButton.innerHTML;
  submitButton.setAttribute('data-original', originalContent);
  
  // Phase 1: Shrink and prepare
  submitButton.style.transform = 'scale(0.98)';
  submitButton.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  
  setTimeout(() => {
    // Phase 2: Show loading state
    submitButton.innerHTML = `
      <div class="sending-animation">
        <div class="spinner"></div>
        <span class="sending-text">Sending</span>
        <div class="dots">
          <span class="dot">.</span>
          <span class="dot">.</span>
          <span class="dot">.</span>
        </div>
      </div>
    `;
    submitButton.style.transform = 'scale(1)';
    submitButton.style.background = 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)';
  }, 300);
}

// Success animation
function showSuccessAnimation() {
  const submitButton = document.querySelector('#contactForm button[type="submit"]');
  if (!submitButton) return;
  
  submitButton.innerHTML = `
    <div class="success-animation">
      <div class="checkmark">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path class="checkmark-path" d="M7 10l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span>Sent!</span>
    </div>
  `;
  submitButton.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
  submitButton.style.transform = 'scale(1.05)';
  
  setTimeout(() => {
    submitButton.style.transform = 'scale(1)';
  }, 200);
}

// Error animation
function showErrorAnimation() {
  const submitButton = document.querySelector('#contactForm button[type="submit"]');
  if (!submitButton) return;
  
  submitButton.innerHTML = `
    <div class="error-animation">
      <div class="error-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 6v4M10 14h.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="10" cy="10" r="9" stroke="white" stroke-width="2"/>
        </svg>
      </div>
      <span>Failed</span>
    </div>
  `;
  submitButton.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
  
  // Shake animation
  submitButton.style.animation = 'shake 0.5s ease-in-out';
  setTimeout(() => {
    submitButton.style.animation = '';
  }, 500);
}

// Reset button to original state
function resetSendButton() {
  const submitButton = document.querySelector('#contactForm button[type="submit"]');
  if (!submitButton) return;
  
  setTimeout(() => {
    const originalContent = submitButton.getAttribute('data-original');
    submitButton.innerHTML = originalContent || '<i class="fas fa-paper-plane"></i> Send Message';
    submitButton.style.background = 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-purple) 100%)';
    submitButton.style.transform = 'scale(1)';
    submitButton.disabled = false;
  }, 2000);
}

// Show form feedback messages
function showFormMessage(message, type) {
  // Remove any existing message
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create new message element
  const messageElement = document.createElement('div');
  messageElement.className = `form-message form-message-${type}`;
  messageElement.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
    <span>${message}</span>
  `;
  
  // Insert message after the form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.insertAdjacentElement('afterend', messageElement);
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
      if (messageElement && messageElement.parentNode) {
        messageElement.style.opacity = '0';
        setTimeout(() => {
          if (messageElement && messageElement.parentNode) {
            messageElement.remove();
          }
        }, 300);
      }
    }, 5000);
  }
}

// Simple Horizontal Project Gallery with Hover Details
function initProjectCarousel() {
  const carousel = document.getElementById('projectCarousel');
  const projectItems = document.querySelectorAll('.project-item');

  if (!carousel) return;

  console.log('Horizontal project gallery initialized');

  // Set up the carousel in horizontal layout permanently
  carousel.style.animation = 'none';
  carousel.style.transform = 'none';
  carousel.classList.add('horizontal-layout');

  // Handle hover effects and details for each project
  projectItems.forEach((item, index) => {
    // Show details on hover
    item.addEventListener('mouseenter', function() {
      // Hide details on all other items
      projectItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('show-details');
        }
      });
      
      // Show details on current item
      this.classList.add('show-details');
      this.style.transform = 'translateY(-10px) scale(1.05)';
      console.log('Project', index + 1, 'details shown on hover');
    });

    // Hide details when mouse leaves
    item.addEventListener('mouseleave', function() {
      this.classList.remove('show-details');
      this.style.transform = 'translateY(0) scale(1)';
      console.log('Project', index + 1, 'details hidden');
    });

    // Optional: Add click functionality for mobile or additional interaction
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      
      // Toggle details on click (useful for mobile)
      if (this.classList.contains('show-details')) {
        this.classList.remove('show-details');
        this.style.transform = 'translateY(0) scale(1)';
        console.log('Project', index + 1, 'details hidden via click');
      } else {
        // Hide details on all other items
        projectItems.forEach(other => {
          other.classList.remove('show-details');
          other.style.transform = 'translateY(0) scale(1)';
        });
        
        // Show details on clicked item
        this.classList.add('show-details');
        this.style.transform = 'translateY(-10px) scale(1.05)';
        console.log('Project', index + 1, 'details shown via click');
      }
    });
  });

  // Hide all details when clicking outside
  document.addEventListener('click', function(e) {
    if (!carousel.contains(e.target)) {
      projectItems.forEach(item => {
        item.classList.remove('show-details');
        item.style.transform = 'translateY(0) scale(1)';
      });
      console.log('Clicked outside - all project details hidden');
    }
  });

  // Handle keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      projectItems.forEach(item => {
        item.classList.remove('show-details');
        item.style.transform = 'translateY(0) scale(1)';
      });
      console.log('Escape pressed - all project details hidden');
    }
  });
}

// Initialize everything on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log('DOM Content Loaded - Initializing portfolio...');
  
  showLoadingAnimation();
  createParticles();
  initSplineInteraction();
  initProjectCarousel();
  initContactForm(); // Initialize contact form with EmailJS
  updateNavBackground();
  
  setTimeout(() => {
    animateOnScroll();
  }, 500);
  
  // Continuously monitor and remove watermark
  const watermarkInterval = setInterval(removeSplineWatermark, 1000);
  
  // Clean up after 30 seconds
  setTimeout(() => {
    clearInterval(watermarkInterval);
    console.log('Watermark removal stopped');
  }, 30000);
  
  console.log('✓ All initializations complete');
});

// Smooth scroll for anchor links
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

// Scroll event listener
window.addEventListener("scroll", function () {
  animateOnScroll();
  updateNavBackground();
});