var x=0, y=0;
$( document ).ready(function() {

    $(".box").click(function(){
        if ($(this).hasClass("red")) {
            $(this).css("background", "red")
            x++;
            document.getElementById('scoreRed').innerHTML = x;
            console.log(x);
            
        }else{
            $(this).css("background", "green")
            y++;
            document.getElementById('scoreGreen').innerHTML = y;
        }
    });

});

