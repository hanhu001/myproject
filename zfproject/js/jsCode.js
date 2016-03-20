/*
 *左边导航栏的滑动效果
 * */
~(function () {
    var Navigation = document.getElementById("Navigation");
    var navList = Navigation.getElementsByTagName("ul")[0].children;
    var middle = document.getElementsByClassName("middle");
    for (var i = 0; i < navList.length; i++) {
        var cur = navList[i];
        cur.index = i;
        cur.onmouseenter = function () {
            middle[this.index].style.display = "block";
        }
        cur.onmouseleave = function () {
            middle[this.index].style.display = "none";
        }
    }
})();

/*
 * 中间的轮播图
 * */

~(function () {
    var figure = document.getElementById("figure");
    var imgList = figure.getElementsByTagName("img");

    var oUl = document.getElementById("oul");
    var oList = oUl.getElementsByTagName("li");

    var step = 0, conunt = ary.length;
    var aotoTimer = null;
    //实现图片的绑定
    function bind() {
        var str = "";
        for (var i = 0; i < ary.length; i++) {
            str += "<img src='' trueImg=" + ary[i] + ">";
        }
        str += "<img src='' trueImg=" + ary[0] + ">";
        figure.innerHTML = str;
        figure.style.width = (conunt + 1) * 730 + "px";
        str = "";
        for (var i = 0; i < imgList.length; i++) {
            str += "<li></li>";
        }
        oUl.innerHTML = str;

    }

    bind();
    //让图片显示在页面上
    function lazyImg() {
        for (var i = 0; i < imgList.length; i++) {
            ~(function (i) {
                var cur = imgList[i];
                if (cur.isLoad) return;
                var oImg = new Image;
                oImg.src = cur.getAttribute("trueImg");
                oImg.onload = function () {
                    cur.src = oImg.src;
                    cur.isLoad = true;
                }
            })(i);

        }
    }

    lazyImg();
    aotoTimer = window.setInterval(Mover, 2000);

    //实现图片的轮播
    function Mover() {
        step++;
        if (step > conunt) {
            step = 1;
            figure.style.left = 0;
        }
        animate(figure, {left: -step * 730}, 500);
        selectTip();
    }

    function selectTip() {
        var stempTip = step;
        stempTip >= oList.length ? stempTip = 0 : null;
        for (var i = 0; i < oList.length; i++) {
            if (i === stempTip) {
                oList[i].className = "bg";
            } else {
                oList[i].className = "";
            }
        }
    }


})();