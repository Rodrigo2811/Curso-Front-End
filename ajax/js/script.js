const url = 'https://api.github.com/users';
const main = document.getElementById('main')
//let user = 'Rodrigo2811'
let text = ''


function getUser(user){


fetch(`${url}/${user}`)
    .then((Response) => Response.json())
    .then((data) => {
        text += `${data.name} possui ${data.public_repos} no GitHub como ${data.login} <br>` 
        main.innerHTML = text
       })
    .catch((error) => console.error('Erro: ', error.message || error))

}
const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function(event){
    getUser(event.target.value)
})


let _data = {
    title: 'Exercicio de envio',
    body: 'Aprendendo Ajax',
    userId: 1
}

const containerPost = document.getElementById('post')
let postMarkup = ''
let postLength = 0



// Cadastra um post
function setPost(data){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
    .then( response => response.json())
    .then( data => console.log(data))
    .catch(error => console.error(error))
}

// Solicita todos os posts

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts/', {
        headers: {
            'Content-Type'  : 'application/json; charset=UTF-8'
        }
    })
    .then( response => response.json())
    .then(data => {
        postLength = data.length
        console.log(postLength)
    })
    .catch(error => console.error(error))
}

// Solicita um post por ID
function getPost(id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
    .then( response => response.json())
    .then( post => { 
            postMarkup += `
                <div class="posts-item" id="post-${post.id}">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `
       containerPost.innerHTML = postMarkup
     })
    .catch(error => console.error(error))  
}

let postIndex = 1;
getPosts()
getPost(postIndex)

const loadPost = document.getElementById('loadPost')

loadPost.addEventListener('click', function(e) {
    if(postIndex < postLength)
        getPost(postIndex += 1)
})
