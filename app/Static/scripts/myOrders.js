window.addEventListener('load',()=>{
    const url='/api/user/'+JSON.parse( sessionStorage.getItem('CorrentUser')).id+'/orders'
fetch(url)
.then(r=>r.json())
.then(r=>{console.log(r);
    document.getElementById("myOrders").innerHTML = JSON.stringify( r)})
})