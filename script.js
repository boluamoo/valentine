let no = document.getElementById('no')
let yes = document.getElementById('yes')
let yes2 = document.getElementById('yes2')
let okay = document.getElementById('okay')
let main = document.getElementById('main')
let decision = document.getElementsByClassName('decision')

okay.style.display = 'none'
yes2.style.display = 'none'

let html2 = ` <h3 class="main">Do not share this message to anyone</h3>`

no.addEventListener('click', function () {
  console.log('no click')
  alert('No? you have to click yes')
})

yes.addEventListener('click', function () {
  console.log('yes click')
  main.innerHTML = html2
  yes.style.display = 'none'
  yes2.style.display = 'none'
  no.style.display = 'none'
  okay.style.display = 'block'
})

okay.addEventListener('click', function () {
  main.innerText = 'I just want to ask you...'
  okay.style.display = 'none'
  yes.style.display = 'none'
  yes2.style.display = 'inline'
  no.style.display = 'inline'
})
yes2.addEventListener('click', function () {
 if (main.innerText == 'Will you be my valentine?'){
    main.innerText = 'yayyyyyyyyy 🥳'
    okay.style.display = 'none'
    yes.style.display = 'none'
    yes2.style.display = 'none'
    no.style.display = 'none'
 } else {
    main.innerText = 'Will you be my valentine?'
 }
})