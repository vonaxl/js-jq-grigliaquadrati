var x=0;
$( document ).ready(function() {

    $(".box").click(function(){
        if ($(this).hasClass("red")) {
            $(this).css("background", "red")
            x++;
            document.getElementById('score').innerHTML = x;
            console.log(x);
            
        }else{
            $(this).css("background", "green")
        }
    });

});

