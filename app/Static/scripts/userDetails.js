window.addEventListener('load', () => {
    const queryString = window.location.search;
    if (queryString) {
        loadDetails()
    }
})
function loadDetails() {
    const user = JSON.parse(sessionStorage.getItem('CorrentUser'))[0]
    document.getElementById("fName").value = JSON.stringify(user.fName),
        document.getElementById("lName").value = user.lName,
        document.getElementById("email").value = user.email,
        document.getElementById("pass").value = user.pass
    const l = user.address.length
    const address = document.getElementsByClassName('address')[0]
    for (let i = 0; i < l; i++) {
        const clone = address.cloneNode(true)
        document.getElementsByClassName("city")[i].value = user.address[i].city
        document.getElementsByClassName("street")[i].value = user.address[i].street
        document.getElementsByClassName("num")[i].value = user.address[i].num
        document.getElementById("newUser").appendChild(clone)

    }
}
function newUser() {

    let add = addresses()
    let user = {

        fName: document.getElementById("fName").value,
        lName: document.getElementById("lName").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
        address: add
    };
    fetch("api/user/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(r => { sessionStorage.setItem('CorrentUser', JSON.stringify(r)) })
        .then(r => document.location.href = "Products.html")
        .catch(e => alert(e))
}
function addAddress() {
    const address = document.getElementById('address')
    const clone = address.cloneNode(true)
    document.getElementById("newUser").appendChild(clone)

}
function addresses() {
    let addresses = [];
    const l = document.getElementsByClassName("city").length
    for (let i = 0; i < l; i++) {
        addresses[i] = {
            city: document.getElementsByClassName("city")[i].value,
            street: document.getElementsByClassName("street")[i].value,
            num: document.getElementsByClassName("num")[i].value,
        }
    }
    return addresses;
}
