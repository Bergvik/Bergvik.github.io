

function openTab(evt, page){
  var i, tabcontent, tablink;

  // Get all tabs and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for(i=0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  // Get alll tab buttons and reset formating 
  tablink = document.getElementsByClassName('tablink');
  for(i=0; i<tablink.length; i++){
    tablink[i].className = tablink[i].className.replace(" active", "");
  }

  // Show current tab
  document.getElementById(page).style.display = "block";
  evt.currentTarget.className += " active";
}
