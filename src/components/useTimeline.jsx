import { useEffect, useRef } from 'react';

const useTimeline = (options) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const items = timeline.querySelectorAll(".timeline-item");
    if (items.length === 0) return;

    const scrollRoot = document.getElementById('main-content');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const img = target.querySelector(".timeline__img");
          
          if (img) {
            timeline.style.backgroundImage = `url(${img.getAttribute('src')})`;
          }

          items.forEach((item) => item.classList.remove("timeline-item--active"));
          target.classList.add("timeline-item--active");
        }
      });
    }, { ...options, root: scrollRoot });

    items.forEach((item) => {
      observer.observe(item);
    });

    // Set the first item as active initially
    const firstItem = items[0];
    const firstImg = firstItem.querySelector(".timeline__img");
    if (firstImg) {
      timeline.style.backgroundImage = `url(${firstImg.getAttribute('src')})`;
    }
    firstItem.classList.add("timeline-item--active");

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [options]);

  return timelineRef;
};

export default useTimeline;