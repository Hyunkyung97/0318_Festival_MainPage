$(function(){

    /* GNB 풀다운 메뉴 */
    $("#mainMenu>li").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(1000);
    });

    $("#mainMenu>li").mouseout(function(){
        $(this).children("ul.subMenu").stop().slideUp(1000);
    });

    /* 슬라이드 쇼 */
    setInterval(fnSlide, 3000);
    function fnSlide() {
        $("#shuttleFrame").animate(
        {"margin-left":"-780px"},
            1000,
            function() {
                $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
                $("#shuttleFrame").css({"margin-left":"0"});
            }
        );
    }

    /* 레이어 팝업 */
    $("#noticeTabContent span.tabPoint").click(function(){
        $("#layerPopup").css({"display":"block"});
    });
    $("#layerPopup #closeBtn").click(function(){
        $("#layerPopup").css({"display":"none"});
    });
});
