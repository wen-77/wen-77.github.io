// accordion
var acc = document.getElementsByClassName("accordion-title");
var i;

for (i = 0; i < acc.length; i++) {
    // acc[i]註冊點擊事件且執行接續的function內容
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        // nextElementSibling：指定元素的下一個元素，這裡this是acc,下一元素是accordion-body
        var panel = this.nextElementSibling;
        // 判斷內容是否出現，出現則隱藏，反之則出現
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
};

//Scrollspy-頁面下滑時，與內容相對應的選單會變色
// spy
// Cache selectors
var lastId,
    topMenu = document.querySelector("#navbar"),
    topMenuHeight = topMenu.clientHeight - 300, //藉由加減數值，修改scroll多少px時，改變nav顏色
    // All list items
    menuItems = Array.from(topMenu.querySelectorAll("a"));
// Anchors corresponding to menu items

var scrollItems = document.querySelectorAll(".section");
var scrollItemsArray = Array.from(scrollItems);

// Bind to scroll
var cur;
var id;
window.addEventListener('scroll', function (e) {
    // Get container scroll position
    var fromTop = this.scrollY + topMenuHeight;
    // Get id of current scroll item

    scrollItems.forEach(function (el) {
        if (el.offsetTop < fromTop)
            cur = el;
    });

    id = scrollItemsArray.indexOf(cur);
    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems.forEach(function (el) {
            el.classList.remove("active");
        });
        menuItems[lastId].classList.add("active");
    }
});

//slide menu
var openBtn = document.getElementById("mobile-menu");
var closeBtn = document.getElementById("closeBtn");
var aside = document.getElementById("aside");
var content = document.getElementById("content");
var about = document.getElementById("About");

openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
about.addEventListener("click", function link(){
    location.href = "index.html#About";
    aside.classList.remove("open");

});

function open() {
    aside.classList.add("open");
    // content.style.marginLeft = "300px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function close() {
    aside.classList.remove("open");
    // content.style.marginLeft = "0px";
    // document.body.style.backgroundColor = "white";
}