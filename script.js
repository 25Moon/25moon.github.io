let pages = document.querySelectorAll('.s-dot-container a, .boat-link');
let containers = document.querySelectorAll('.container1, .container2, .container3');
let colorList = ['#28bbb8', '#c0b17b', '#eee'];

pages.forEach(page => {
  page.addEventListener('click', function() {
    let pageNumber = this.className[this.className.length -1]; // Get the page number from the class name
    // Hide all containers
    containers.forEach(container => {
      container.classList.add('hide-me');
    });

    // Show the corresponding container
    document.querySelector('.container' + pageNumber).classList.remove('hide-me');
    document.querySelector('#svg').style.fill = colorList[pageNumber - 1];
    document.querySelector('.container' + pageNumber + ' .page' + pageNumber + ' .s-dot').style.backgroundColor = '#fff5d6'
  });
});
