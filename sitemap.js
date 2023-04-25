///<reference path="jquery-3.6.0.js"/>

$(function () {
    var acc = $(".accordion");
    $(acc).each(function() {
        this.addEventListener("click", function () {

            this.classList.toggle("active");

            var subList = this.nextElementSibling;

            if (subList.style.maxHeight) {
                subList.style.maxHeight = null;
            }

            else {
                subList.style.maxHeight = subList.scrollHeight + "px";
            }
        });
    })
});