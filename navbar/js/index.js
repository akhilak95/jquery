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
      $("#downbar").click(() =>{
        $(".downbarcontent").show(1);
        $(".down").show(1)
        $(".m").addClass("sea")
        $(".downbar2").show(1)
        $("#downbar").hide(1)
      })
      $(".downbar2").click(() =>{
        $(".downbarcontent").hide(1);
        $(".down").hide(1)
        $(".m").removeClass("sea")
        $(".downbar2").hide(1)
        $("#downbar").show(1)

      })

        
      
})