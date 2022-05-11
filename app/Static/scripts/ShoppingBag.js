

window.addEventListener('load',pageLoad)
function pageLoad(){
    products=JSON.parse(sessionStorage.getItem('shoppingBag'));
    loadProducts(products);
   
}
function loadProducts(products){
 
 drawProducts(products)
 loadHeader(products);
}
function drawProducts(products){
    document.getElementById("items").innerHTML=""
    if(!products){
        alert('the bag is empty')
    }
    else{
    for(let i =0;i<products.length;i++){
        tempProduct = document.getElementById("temp-row");
        const clonProducts = tempProduct.content.cloneNode(true);
        clonProducts.getElementById('image') .src = "./images/products/" + products[i].product.imageName+'.jpg';
        clonProducts.getElementById("itemName").innerText = products[i].product.name;
        clonProducts.getElementById("itemNumber").innerText=products[i].quantity
        clonProducts.getElementById("price").innerText = "₪" +(products[i].product.price * products[i].quantity);
        clonProducts.getElementById("deleteElement").addEventListener('click',()=>{
            deleteElement(products[i])
        })
        document.getElementById("items").appendChild(clonProducts)
    };}
}
function deleteElement(pro){
    products=JSON.parse(sessionStorage.getItem('shoppingBag'))
    for(let i =0;i<products.length;i++){
        if(products[i].product.name==pro.product.name){
            if(products[i].quantity==1){
                products.splice(i,1);
            }
            else{
                products[i].quantity=products[i].quantity-1  
            }
            sessionStorage.shoppingBag=JSON.stringify(products)
            sessionStorage.ItemsCount=Number(JSON.parse(sessionStorage.getItem('ItemsCount')))-1;
            loadProducts(products)
            break;
        }
    }
}
function loadHeader(products){
   
    document.getElementById("makeOrder").addEventListener('click',()=>{
        makeOrder()
    })
    const totalAmount=calcTotalAmount();
    document.getElementById("totalAmount").innerText=totalAmount.toFixed(2);
    document.getElementById("itemCount").innerText= JSON.parse(sessionStorage.getItem('ItemsCount'))
}
function calcTotalAmount(){
    let totalAmount=0;
    if(!products){
        alert('the bag is empty')
    }
    else{
    for(let i =0;i<products.length;i++){
        totalAmount+=products[i].product.price*products[i].quantity;
    }
}    return totalAmount
}
function makeOrder(){
    
    products=JSON.parse(sessionStorage.getItem('shoppingBag'))
    if(!products){
        alert('the bag is empty')
    }
    else{
    let ids=[]
    for(let i =0;i<products.length;i++){
        ids[i]={product:products[i].product._id,
            quantity:products[i].quantity};
    }

let amount=calcTotalAmount()
let id=JSON.parse(sessionStorage.getItem('CorrentUser'))._id
let d=new Date()
    let order={
        user:id,
        items:ids,
        sum:amount,
        date:d
    }
    console.log(order)
    sessionStorage.setItem('order',JSON.stringify(order))
    fetch('/api/order' ,{
        method: "POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(order)

    })
    .then(res=>alert('your order shipped'))

}

}