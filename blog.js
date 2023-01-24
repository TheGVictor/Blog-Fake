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

async function addNewPost(title, body) {
    
    await fetch (
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    )

    document.querySelector('#titlefield').value = ''
    document.querySelector('#bodyfield').value = ''

    readPosts()

}

document.querySelector('#insertbutton').addEventListener('click', () => {
    let title = document.querySelector('#titlefield').value
    let body = document.querySelector('#bodyfield').value

    if(title && body){
        addNewPost(title,body)
    }else{
        alert('Preencha todos os campo!!')
    }
})

readPosts()