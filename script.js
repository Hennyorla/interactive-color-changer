document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    function getRandomColor() {
        // Generate random color code (hexadecimal)
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    changeColorBtn.addEventListener('click', function() {
        // Change background color of color-box to a random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});