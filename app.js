const btnScroll = document.querySelector('.js-btn-scroll');
if (btnScroll) {
  const targetScroll = document.querySelector(btnScroll.dataset.target);

  var scrollBtn = document.getElementsByClassName('js-btn-scroll');
  for (let item of scrollBtn) {
    item.addEventListener('click', () => {
      window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': targetScroll.offsetTop
      });
    });
  }
}