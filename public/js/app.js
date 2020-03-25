$("#addBurger").on("click",function(){
    var newBurger = {
        burger_name:$("#burgerName").val()
    }
    $.ajax({
        url:"/api/burgers",
        method: "POST",
        data: newBurger
    }).then(function(data){
        location.reload()
    })
})

$(".devoured").on("click", function(){
    var getId= $(this).attr("data-id")
    var devoured = {
        id: getId
    }

    $.ajax({
        url:"/api/burgers",
        method: "PUT",
        data: devoured
    }).then(function(data){
        location.reload()
    })
})