document.addEventListener("DOMContentLoaded", () => {
    fetch("html/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // header.html이 삽입된 후에 header.js를 로드
            const script = document.createElement("script");
            script.src = "../js/header.js";
            document.body.appendChild(script);
        });

    fetch("html/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
