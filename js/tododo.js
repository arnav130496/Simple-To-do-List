//CHECK OFF LOGIC
$("ul").on("click","li",function(){ //CLICK LISTENERS ADDED TO ALL LI's WITHIN UL
  $(this).toggleClass("completed");
})
//Delete Logic
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500,function(){  //TIP 2 USE TO REFER PARENT ELEMENT
    $(this).remove;
  });
  event.stopPropagation(); //Stop event bubbling (stops propagation of events through layers of html to parent elements)
})
//Add new todos
$("input[type='text']").on ("keypress",function(event){
  if(event.which === 13){
    //used to take input value for new to do
    var todoText= $(this).val();
    $(this).val("");
    $('ul').append("<li> <span><i class='fa fa-trash'></i> </span>" + todoText + "</li>")
  }
})
$("i").on("click", function(){
  $("input[type='text']").fadeToggle(200);
})
