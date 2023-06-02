const valueDisplays = document.querySelectorAll('.num');
const interval = 5000;

const animateCount = (valueDisplay, endValue) => {
  let startValue = 0;
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const valueDisplay = entry.target;
      const endValue = parseInt(valueDisplay.getAttribute('data-val'));
      animateCount(valueDisplay, endValue);
    }
  });
};

const options = {
  threshold: 0.5, // Elementin yarısı görüldüğünde tetiklenecek
};

const observer = new IntersectionObserver(handleIntersection, options);

valueDisplays.forEach((valueDisplay) => {
  observer.observe(valueDisplay);
});