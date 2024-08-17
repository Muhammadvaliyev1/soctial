// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

  //Darkmode button

  var icon = document.getElementById("toggle")
  icon.onclick = function() {
    console.log(document.body.classList);
    document.getElementsByTagName("html")[0].classList.toggle('dark')
  }

  // function onload() {
  //   document.getElementsByTagName("html")[0].classList.toggle('dark')
  // }
  // document.addEventListener('DOMContentLoaded', onload)

  document.getElementById('toggle').addEventListener('click', function() {
    this.classList.toggle('sun');
    // document.getElementById('moon-icon').classList.toggle('hidden');
    // document.getElementById('sun-icon').classList.toggle('hidden');
  });