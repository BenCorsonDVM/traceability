axios.get('/testroute').then((result) => {
    console.log(result.data)
})

const pressMeButton = document.querySelector('#press-me-button')

const pressMeFunc = () => {
    axios.get('/press-me-button').then((res) => {
        alert(res.data)
    })
}

pressMeButton.addEventListener('click', pressMeFunc)

