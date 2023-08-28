import './animation-text'


const ratio = .2

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio,
  };

  const handleIntersect = function (entries, observer) {
    entries.forEach( function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            // observer.unobserve(entry.target)
        } else {
            entry.target.classList.remove('reveal-visible')
        }
    });
}

  const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelectorAll('.reveal').forEach(function (r) {
      observer.observe(r)

  }))




