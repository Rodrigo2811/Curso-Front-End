const url = 'https://api.github.com/users';
const main = document.getElementById('main')
let user = 'Rodrigo2811'



fetch(`${url}/${user}`)
    .then((Response) => Response.json())
    .then((data) => {
        main.innerHTML = `${data.name} possui ${data.public_repos} no GitHub como ${data.login}`
    })
    .catch((error) => console.error('Erro: ', error.message || error))






