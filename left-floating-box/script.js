window.onload = function() {
    if (!document.cookie.split(';').some((item) => item.trim().startsWith('cookiesAccepted='))) {
        document.getElementById('left-floating-box').style.display = 'flex';
    }
}

document.getElementById('accept').addEventListener('click', function() {
    var date = new Date();
    date.setMonth(date.getMonth() + 1); // set the date to 1 month in the future
    document.cookie = "cookiesAccepted=true; expires=" + date.toUTCString() + "; path=/";
    document.getElementById('left-floating-box').style.display = 'none';
});

document.getElementById('decline').addEventListener('click', function() {
    document.getElementById('left-floating-box').style.display = 'none';
});
