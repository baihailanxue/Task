window.onload = function () {
    var button = document.getElementById('button');
    var input_text = document.getElementById('aqi-input');
    var display = document.getElementById('aqi-display');
    //button按钮点击事件
    button.onclick = function () {
        display.innerHTML = input_text.value;
    };
}