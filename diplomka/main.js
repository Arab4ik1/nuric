
var counter = 1;
  setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
  counter = 1;
  }
  }, 3000);
  // 
  $("details").on("click", function() {
    $("details[open]")
    .not(this)
    .removeAttr("open");
  });

  // 
