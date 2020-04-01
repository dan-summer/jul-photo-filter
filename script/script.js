var bigPhoto = document.querySelector('.big-photo');
var previews = document.querySelectorAll('.filter-controls img');

for (var i = 0; i < previews.length; i++) {
    previews[i].innerHTML = previews[i].dataset.filter;
    clickControl(previews[i]);
}

function toggleFilter(preview) {
    for (var i = 0; i < previews.length; i++) {
        previews[i].classList.remove('active');
        bigPhoto.classList.remove(previews[i].dataset.filter);
    }
    preview.classList.add('active');

    if (bigPhoto) {
        bigPhoto.classList.add(preview.dataset.filter);
    }
}

function clickControl(preview) {
    preview.addEventListener('click', function() {
        toggleFilter(preview);
    });
}

var defaultFilter = document.querySelector('img.default-filter');
toggleFilter(defaultFilter);