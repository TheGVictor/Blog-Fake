//https://jsonplaceholder.typicode.com/posts

async function readPosts() {

let postArea = document.querySelector('.posts')
postArea.innerHTML = 'Carregando...'

let response = await fetch('https://jsonplaceholder.typicode.com/posts')

let json = await response.json()

if(json.length> 0){
    postArea.innerHTML = ''

    for(let i in json){
        let posthtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr></div>`
        postArea.innerHTML += posthtml
    }
}else {
    postArea.innerHTML = 'Nenhum post para inserir'
}

}

readPosts()