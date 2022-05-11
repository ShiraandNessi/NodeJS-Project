function display() {
  window.location.href="./userDetails.html"
}
function logIn() {
    let Password = document.getElementById("inp2").value
    let Email = document.getElementById("inp1").value
    fetch("api/user/" + Email + '/' + Password)
        .then(res => res.json())
        .then(r => sessionStorage.setItem('CorrentUser', JSON.stringify(r)))
        .then( document.location.href = "Products.html")
         .catch(e => alert(e))
}


