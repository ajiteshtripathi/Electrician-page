document.addEventListener("DOMContentLoaded", () => {
  // Scroll Animations
  const scrollBox = document.getElementById("scrollBox");
  const scrollBox2 = document.getElementById("scrollBox2");
  const steps = document.getElementById("steps");

  function observeElement(element, callback, threshold = 0.06) {
    if (element) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target);
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      }, { threshold });

      observer.observe(element);
    }
  }

  function addVisibleClass(element) {
    element.classList.add("visible"); // 'visible' class will trigger CSS animations
  }

  // Observing elements for visibility
  observeElement(scrollBox, addVisibleClass, 0.06); // Trigger when 5% is visible
  observeElement(scrollBox2, addVisibleClass);
  observeElement(steps, addVisibleClass);

  // Popup Modal Functionality
  const buttonn = document.getElementById("buttonn"); // "Book Now" button
  const container3 = document.getElementById("container3"); // Popup container
  const closePopup = document.getElementById("closePopup"); // Close button in popup

  if (buttonn && container3 && closePopup) {
    // Show popup on button click
    buttonn.addEventListener("click", () => {
      container3.style.display = "flex"; // Display popup
    });

    // Hide popup on close button click
    closePopup.addEventListener("click", () => {
      container3.style.display = "none"; // Hide popup
    });

    // Hide popup when clicking outside the popup content
    window.addEventListener("click", (event) => {
      if (event.target == container3) {
        container3.style.display = "none";
      }
    });
  } else {
    console.error("One or more elements are missing in the HTML.");
  }
});
