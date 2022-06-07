const welcome = () =>{
    alert("INFOOOO LURD")
    const contents = document.querySelector(".contents")
    contents.removeAttribute("hidden")
}
document.body.onload = welcome

const pressed = () =>{
    document.getElementById("count").innerText++
    if (document.getElementById("count").innerText == 7) {
        const hiddenMessage = document.createElement("h4")
        hiddenMessage.innerText = "Selamat anda menemukan hadiah tersembunyi..."
        const image = document.createElement("img")
        image.setAttribute("src",'https://i.ibb.co/0V49VRZ/catto.jpg')
        const contents = document.querySelector(".contents")
        contents.appendChild(hiddenMessage).appendChild(image)
    }
}
const button = document.getElementById("incrementButton")
button.onclick = pressed

const submitAction = document.getElementById("formDataDiri")

submitAction.addEventListener("submit", function () {
    const inputNama = document.getElementById('inputNama').value
    const inputDomisili = document.getElementById("inputDomisili").value
    const hiddenMessage = 'Halo ' + inputNama +" bagaimana cuaca di " +inputDomisili

    document.getElementById('messageAfterSubmit').innerText = hiddenMessage
    event.preventDefault()
})