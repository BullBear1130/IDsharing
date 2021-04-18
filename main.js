document.querySelector(".search-icon").addEventListener('click', function() {
  document.querySelector(".search-screen").classList.add("active");
});

function searchcheck(){
const txt=document.getElementById('search-txt').value;
alert(txt)
}
