const app = document.getElementById('root')

const request4Hs = new XMLHttpRequest()

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

request4Hs.open('GET', 'https://smtl.gama.academy/leads/4a6b3a44-5ffc-11ea-92b8-cb0262e26cca', true)

request4Hs.onload = function () {
    // Begin accessing JSON data here
    let data4Hs = JSON.parse(this.response)

    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const h1 = document.createElement('h1')
    h1.textContent = data4Hs.length

    container.appendChild(h1)

    if (request4Hs.status >= 200 && request4Hs.status < 400) {
        console.log('4Hs: ', data4Hs)
        data4Hs.forEach(item => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = item.name

            const p = document.createElement('p')
            item.email = item.email.substring(0, 300)
            p.textContent = `${item.email}...`

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)
        })
    } else {
        console.log('error')
    }
}

request4Hs.send()

