/**
 * Created by WQM on 2017/12/20.
 */
var hInput = document.getElementById("header-search-input");
hInput.value = "Search";
hInput.onmousemove = function(){
    hInput.value = "";
};
hInput.onmouseout  = function(){
    hInput.value = "Search";
};

//轮播图start

//轮播图end
    $(function () {
        $("#fsD1").on("mouseenter", function () {
            $("#grow").css("zIndex",999);
        })
        $("#fsD1").mouseleave(function () {
            $("#grow").css("zIndex",-1);
        })
    })