scripts: {
  start: "react-scripts start"
}

var typed=new Typed(".text",{
    strings:["Frontend Developer","Java Developer","Machine Learning Developer",],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});

function openTab(evt, tabId) {
  const tabContents = document.querySelectorAll(".tab-content");
  const tabLinks = document.querySelectorAll(".tablink");

  // Hide all tab contents
  tabContents.forEach(tab => tab.style.display = "none");

  // Remove active class from all buttons
  tabLinks.forEach(link => link.classList.remove("active"));

  // Show selected tab and highlight button
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.classList.add("active");
}













