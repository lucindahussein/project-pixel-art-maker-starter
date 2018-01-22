// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {

  const height = $("#input_height").val() ;
  const width = $("#input_width").val() ;
  const table = $("#pixel_canvas") ;

    // Remove any previous tables
  table.children().remove() ;

    // Making the table (tr) and (td)
  for(let r = 0 ; r < height ; r++ ){

      let tr =  document.createElement("tr");
      table.append(tr) ;

      for(let w = 0 ; w < width ; w++){

          let td = document.createElement("td");
          tr.append(td) ;
      }

  }

    // Submitting the form and calling function for making the grid
  $("#sizePicker").submit(function(event){

      event.preventDefault();
      makeGrid();
  });

  // Declare the clickable mouse event

    let mouseIsDown = false ;

  $("td").mousedown(function(event){

        mouseIsDown = true ;
        event.preventDefault();
        const color= $("#colorPicker").val() ;
        $(this).css("background",color);


    // Declare the mouse drag event for drawing functionality

        $("td").mousemove(function(event){

                event.preventDefault();

          // check if mouse click is pressed and active
              if(mouseIsDown===true) {

                $(this).css("background",color);
              }
              else{
                mouseIsDown= false ;
              }

        }) ;

});

    //Defines that the mouse click is released

        $("td").mouseup(function(){

              mouseIsDown =false ;

        });


        // Trying to disable draging option when the pointer go out of the table

          let mouseIsAway = false ;

        $("#pixel_canvas").mouseleave("td",function(){

                  mouseIsAway= true ;

              if (evt.type===mousemove()){

                  mouseIsAway= true ;
              }

        });

}

console.log(makeGrid());


// Your code goes here!

}
