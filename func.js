(function () {
    
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
    document.querySelector(".git").onclick = function () {
        url = "https://github.com/axeroldz/Portfolio";
        window.open(url, "_blank");
    };
    document.querySelector("#submit").addEventListener("click", () => {
        document.getElementById("input-form").submit();
    });
    document.querySelector("#download1").addEventListener("click", () => {
        document.querySelector('#popup1').classList.toggle("show");
    });
    document.querySelector("#download2").addEventListener("click", () => {
        document.querySelector('#popup2').classList.toggle("show");
    });
    
})();
