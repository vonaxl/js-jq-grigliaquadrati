var x=0, y=0;
$( document ).ready(function() {

    $(".box").click(function(){
        if ($(this).hasClass("red") && !$(this).hasClass("clicked")) {
            $(this).addClass("clicked");
            $(this).css("background", "red");
            x++;
            document.getElementById('scoreRed').innerHTML = x;
            console.log(x);
            
        }else if (!$(this).hasClass("clicked")) {
            $(this).addClass("clicked");
            $(this).css("background", "green");
            y++;
            document.getElementById('scoreGreen').innerHTML = y;
        }
    });
});

