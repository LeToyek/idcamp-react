const animals = [{
    image:"https://www.goodnewsfromindonesia.id/uploads/post/large-pict-harimau-sumatera-membentuk-peradaban-peradaban-sumatera-5255b7f07a69c93a2b5365a9.jpg",
    title:"Harimau Sumatera",
    subtitle:"Panthera Tigris Sumatrae ",
    description:"Berdasarkan The IUCN Red List of Threatened Species, Harimau Sumatera kini menyandang status Critically Endangered atau spesies yang terancam kritis, berisiko tinggi untuk punah di alam liar.",
},{
    image:"https://akcdn.detik.net.id/visual/2018/03/21/4c3fd285-403a-4c14-b82d-ec3f1009e422_169.jpeg?w=650",
    title:"Badak Jawa",
    subtitle:"Rhinoceros sondaicus",
    description:"IUCN memasukkan spesies Badak Jawa ke dalam status Critically Endangered (kritis) dan CITES mengkategorikannya ke dalam Appendix I. ",
},{
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Polar_Bear_-_Alaska.jpg/640px-Polar_Bear_-_Alaska.jpg",
    title:"Beruang kutub",
    subtitle:"Ursus maritimus",
    description:"Melansir CNN, studi yang diterbitkan dalam Ecological Application menemukan fakta bahwa Beruang Kutub semakin kurus akibat pencairan es laut. ",
}]

document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector('.content')

    animals.forEach(animal => {
        const wrapper = document.createElement('div')
        wrapper.classList.add("wrapper")
        
        const card = document.createElement('div')
        card.classList.add('card')
        const img = document.createElement('img')

        const description = document.createElement('div')
        description.classList.add('descriptions')
        const h3 = document.createElement('h3')
        const h5 = document.createElement('h5')
        const p = document.createElement('p')

        img.src = animal.image
        h5.innerHTML = `<em>${animal.subtitle}</em>`
        h3.innerText = animal.title
        p.innerText = animal.description

        card.appendChild(img)
        
        description.appendChild(h3)
        description.appendChild(h5)
        description.appendChild(p)

        wrapper.appendChild(card)
        wrapper.appendChild(description)

        content.appendChild(wrapper)
    })
})