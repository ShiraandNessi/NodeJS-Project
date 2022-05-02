
function logIn() {
    let Password = document.getElementById("inp2").value
    let Email = document.getElementById("inp1").value
    fetch("api/user/" + Email + '/' + Password)
        .then(res => res.json())
        .then(r => sessionStorage.setItem('CorrentUser', JSON.stringify(r)))
         .then( document.location.href = "Home.html")
       
        
       // .catch(e => alert("ERROR"))
}
function post() {
 
   let user = {
        Password: document.getElementById("in2").value,
        Email: document.getElementById("in1").value,
        FName: document.getElementById("in3").value,
       LName: document.getElementById("in4").value,
        UserId:0
    };
    fetch("api/LogIn", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(r => sessionStorage.setItem('CorrentUser', JSON.stringify(r)))
        .then(document.location.href = "Home.html")
        //.catch(alert("ERROR"));
}

