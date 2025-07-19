document.querySelector('.menu-icon').addEventListener('click', function() {
    alert('Menu clicked! (Bạn có thể code mở menu mobile ở đây)');
});


document.querySelectorAll('.feature-item').forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.remove('bounce'); // reset nếu đang có
        void item.offsetWidth; // trigger reflow để animation chạy lại
        item.classList.add('bounce');
        setTimeout(function() {
            item.classList.remove('bounce');
        }, 600); // thời gian trùng với animation
    });
});


const testimonials = [
  {
    text: "The recruitment agency found the perfect candidate for our team in record time. Their professionalism and attention to detail made the entire process seamless!",
    author: "Simeon Wuckert",
    role: "McKenzie Group"
  },
  {
    text: "Working with this agency was a game-changer for our hiring needs. They understood our requirements and delivered top-tier talent. Truly a partner we can rely on.",
    author: "Lavinia Harber",
    role: "Moore Sons PLC"
  },
  {
    text: "Their expertise in sourcing niche talent is unmatched. They helped us fill a critical role we’d been struggling with for months. Outstanding services from them!",
    author: "Suzanne Keeling",
    role: "Waters Ecom. LLC"
  },
  {
    text: "The team was proactive, communicative, and genuinely invested in our success. They made recruitment stress-free and efficient. Five stars and highly recommend!",
    author: "Thomas Wayne",
    role: "United Hagens"
  },
  {
    text: "From start to finish, the agency exceeded our expectations. They not only found great candidates but also provided valuable insights into the hiring process. A trusted partner!",
    author: "Davion Schuppe",
    role: "HCL Works Ltd."
  }
];

// const imgEl = document.getElementById('testimonial-img');
const textEl = document.getElementById('testimonial-text');
const authorEl = document.getElementById('testimonial-author');
const roleEl = document.getElementById('testimonial-role');
const dots = document.querySelectorAll('.testimonial-dots .dot');

dots.forEach(dot => {
  dot.addEventListener('click', function() {
    const idx = parseInt(this.getAttribute('data-index'));
    setTestimonial(idx);
  });
});

function setTestimonial(idx) {
 
  textEl.textContent = testimonials[idx].text;
  authorEl.textContent = testimonials[idx].author;
  roleEl.textContent = testimonials[idx].role;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[idx].classList.add('active');
}

// Khởi tạo lần đầu
setTestimonial(0);

// Hero image transition
document.addEventListener('DOMContentLoaded', function() {
    const heroImage1 = document.getElementById('hero-image-1');
    const heroImage2 = document.getElementById('hero-image-2');
    
    // Array of different images (you can add more images here)
    const images = [
        'public/image/images (4).jpg',
        


       
    ];
    
    let currentImageIndex = 0;
    let isTransitioning = false;
    
    function changeHeroImage() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        
        // Set the new image source
        if (heroImage1.classList.contains('active')) {
            heroImage2.src = images[nextImageIndex];
            heroImage2.classList.add('active');
            heroImage1.classList.remove('active');
        } else {
            heroImage1.src = images[nextImageIndex];
            heroImage1.classList.add('active');
            heroImage2.classList.remove('active');
        }
        
        currentImageIndex = nextImageIndex;
        
        // Reset transition flag after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }
    
    // Change image every 2 seconds
    setInterval(changeHeroImage, 2000);
});

// Scroll to top/bottom button with progress ring
(function() {
  const btn = document.getElementById('scroll-btn');
  const arrow = btn.querySelector('.arrow i');
  const circle = btn.querySelector('.progress-ring__circle');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  function setProgress(percent) {
    const offset = circumference - percent * circumference;
    circle.style.strokeDashoffset = offset;
  }

  function updateBtn() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight ? scrollY / docHeight : 0;
    setProgress(percent);

    if (scrollY > 100) {
      btn.classList.add('show');
      btn.classList.remove('hide');
      arrow.className = 'fa-solid fa-chevron-up';
    } else {
      btn.classList.add('show');
      btn.classList.remove('hide');
      arrow.className = 'fa-solid fa-chevron-down';
    }
  }

  btn.addEventListener('click', function() {
    if (window.scrollY > 100) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  });

  window.addEventListener('scroll', updateBtn);
  window.addEventListener('resize', updateBtn);
  updateBtn();
})();




