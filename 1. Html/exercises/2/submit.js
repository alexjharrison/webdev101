const form = document.getElementsByTagName("form")[0]
const inputs = document.getElementsByTagName("input")

form.onsubmit = function (event) {
  event.preventDefault()

  const name = inputs[0].value
  const email = inputs[1].value
  const password = inputs[2].value

  alert(`
  name: ${name}
  email: ${email}
  password: ${password}
  `)
}
