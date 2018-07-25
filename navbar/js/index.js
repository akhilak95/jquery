$(document).ready( () => {


      $(".searchbutton").hover( () =>{
        $(".searchbutton").addClass("border");
      })
      $(".row").hover( () =>{
        $(".searchbutton").removeClass("border");
        $(".search").removeClass("searchcontent");
      })
      $(".home").hover( () =>{
        $(".home").addClass("content");
        $(".feature").removeClass("content");
        $(".pricing").removeClass("content");
        $(".about").removeClass("content");
        $(".searchbutton").removeClass("border");
      })
      $(".feature").hover( () =>{
        $(".feature").addClass("content");
        $(".home").removeClass("content");
        $(".pricing").removeClass("content");
        $(".about").removeClass("content");
        $(".searchbutton").removeClass("border");
      })
      $(".pricing").hover( () =>{
        $(".pricing").addClass("content");
        $(".home").removeClass("content");
        $(".feature").removeClass("content");
        $(".about").removeClass("content");
        $(".searchbutton").removeClass("border");
      })
      $(".about").hover( () =>{
        $(".about").addClass("content");
        $(".home").removeClass("content");
        $(".feature").removeClass("content");
        $(".pricing").removeClass("content");
        $(".searchbutton").removeClass("border");
      })
      $(".search").focus(function(){
        $(".search").addClass("searchcontent");
        $(".about").removpricinglass("content");
        $(".home").removeClass("content");
        $(".feature").removeClass("content");
        $(".pricing").removeClass("content");
        $(".searchbutton").removeClass("border");
         $id= $("#search");
     $id.val("");

      })
      $("#search").hover(() =>{
        $(".searchbutton").removeClass("border");
      })
      $(".navcontent").click(() =>{
        $(".search").removeClass("searchcontent");
        $(".searchbutton").removeClass("border");
      })
})