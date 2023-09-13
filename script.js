var rectangle= document.querySelector("#center");

rectangle.addEventListener("mousemove", function(details){
    var rectangleLocation= rectangle.getBoundingClientRect();
    var insideRectangleXaxis= details.clientX - rectangleLocation.left;

    if(insideRectangleXaxis<rectangleLocation.width/2){
      var redColor= gsap.utils.maprange(0, rectangleLocation.width/2, 255, 0, insideRectangleXaxis);
      gsap.to(rectangle, {
        backgroundColor: 'rgb(${redColor}, 0, 0)',
        ease: Power4,
      })
    }
    else{
      var blueColor= gsap.utils.maprange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRectangleXaxis);
      gsap.to(rectangle, {
        backgroundColor: 'rgb(0, 0, ${redColor})',
        ease: Power4,
      })
    }

})

rectangle.addEventListener("mouseleave", function{
  gsap.to(rectangle, {
    backgroundColor: 'white',
  })
})
