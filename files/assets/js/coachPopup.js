let popUpShowing = false;

const toggleCoachPopup = (classList) => {
    const e = event;
    !popUpShowing && e.stopPropagation();
    const stripClasses = classList.substr(classList.indexOf(' '));
    const onlyName = stripClasses.substr(1, stripClasses.length);
    document.getElementById(onlyName).style.display = 'block';
    popUpShowing = true;
}

const allCoachPopups = document.querySelectorAll('.coach-popup');
const allCoachThumbs = document.querySelector('.coaches').querySelectorAll('.ce_image');

document.body.addEventListener('click', function() {
    allCoachPopups.forEach(popup => {
        popup.style.display = "none";
        popUpShowing = false;
    })
});

allCoachPopups.forEach(popup => {
    popup.addEventListener('click', function() {
        popup.style.display = "none";
        popUpShowing = false;
    })
})
