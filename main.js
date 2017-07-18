let main = document.querySelector('main')

//const recipe = 'eggs'
const button = document.querySelector('button')

button.addEventListener('click', submit)

  function submit (){
  let searchTerm = document.querySelector('#searchTerm').value

  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=` + searchTerm)
  .then(response => response.json())
  .then(function (grabEm) {
    main.innerHTML = ""
    for (var i = 0; i < grabEm.results.length; i++) {
      let div = document.createElement('div')
      // (grabEm.results[i])
      let title = document.createElement("h4")
      title.textContent = grabEm.results[i].title
      div.appendChild(title)

      let image = document.createElement("img")

        if (grabEm.results[i].thumbnail) {
          image.src = grabEm.results[i].thumbnail
        } else {
          image.src = "http://via.placeholder.com/100x100"
        }
        div.appendChild(image)

      let link = document.createElement("a")
      link.href = grabEm.results[i].href
      div.appendChild(link)

      link.appendChild(title)
      main.appendChild(div)
    }
  })
}
