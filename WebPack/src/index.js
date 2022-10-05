function title() {

  const elem1 = document.createElement('h1')
  elem1.innerHTML = 'Hello world'
  return elem1
}

document.body.appendChild(title())