// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one

  let count = false;
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    console.log('yolo');
    if(count){
      $('#articles').append(` <div class="row bg-dark"   style="color: white"> <div class="col-md-6" style="padding: 0"> <div class="row align-center" style="height: 100%; width: 80%; margin: auto; text-align: center; align-items: center;"> <div> <div class="row" style="" ;> <h3>${data[i].title}</h3> </div> <div class="row justify-content-center mt-4" style=" width: 100%"> <div class="col-sm-3"><a href="${data[i].link}"> <button type="button" class="btn btn-outline-light">Read More</button> </a> </div> <div class="col-sm-3" "> <button  id="myNote" data-id="${data[i]._id} type="button" class="btn btn-outline-light">Notes</button> </div> </div> </div> </div> </div> <div class="col-md-6" style=" overflow: hidden; max-height: 35em;padding: 0"> <img style="object-fit: cover; " src="${data[i].img}" alt=""> </div> </div>`)
      count = false;
    }else{
      $('#articles').append(`<div class="row bg-light" data-id="${data[i]._id} "style=""> <div class="col-md-6" style=" overflow: hidden; max-height: 35em;padding: 0"> <img style="object-fit: cover; " src="${data[i].img}" alt=""> </div> <div class="col-md-6" style="padding: 0"> <div class="row align-center" style="height: 100%; width: 80%; margin: auto; text-align: center; align-items: center;"> <div> <div class="row" style="" ;> <h3>${data[i].title}</h3> </div> <div class="row justify-content-center mt-4" style=" width: 100%"> <div class="col-sm-3"><a href="${data[i].link}"> <button type="button" class="btn btn-outline-dark">Read More</button></a> </div> <div class="col-sm-3"> <button id="myNote" type="button" class="btn btn-outline-dark"> Notes </button> </div> </div> </div> </div> </div> </div>`)
      count = true;
    }


    

    
    //  $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
 
 
 
   
  }
});


// Whenever someone clicks a p tag
$(document).on("click", "#myNote", function() {

    
    // Empty the notes from the note section
 console.log($(this));
    $("#notes").empty();
    // Save the id from the p tag
    var thisId = $(this).attr("data-id");
  
    // Now make an ajax call for the Article
    $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    })
      // With that done, add the note information to the page
      .then(function(data) {
        console.log(data.title);
        console.log(data);
        // The title of the article
        $("#notes").append("<h2>" + data.title + "</h2>");
        // An input to enter a new title
        $("#notes").append("<input id='titleinput' name='title' >");
        // A textarea to add a new note body
        $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
        // A button to submit a new note, with the id of the article saved to it
        $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
  
        // If there's a note in the article
        if (data.note) {
          // Place the title of the note in the title input
          $("#titleinput").val(data.note.title);
          // Place the body of the note in the body textarea
          $("#bodyinput").val(data.note.body);
        }
      });
  });

  $(document).on("click", "#scrape", function() {
    console.log('hello');
    $.ajax({
      method: "GET",
      url: "/scrape",
       })
      // With that done
      .then(function(data) {
    
      });
  });



  // When you click the savenote button
  

    // Also, remove the values entered in the input and textarea for note entry
  //   $("#titleinput").val("");
  //   $("#bodyinput").val("");
  // });



