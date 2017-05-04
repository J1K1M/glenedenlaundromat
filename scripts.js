$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function openclosed(){
  var d = new Date(); var n = d.getHours();
  if (n >= 7 && n <18) {
    document.getElementById('time').innerHTML = "OPEN NOW";
    document.getElementById('time').style.color = "rgb(120,210,0)";
    document.getElementById('time').style.fontSize = "22px"
  }else{
    document.getElementById('time').innerHTML = "CLOSED NOW";
    document.getElementById('time').style.color = "rgb(220,0,0)";
    document.getElementById('time').style.fontSize = "22px";
    }
  }

var interval = setInterval(function () { openclosed(); }, 60000);
