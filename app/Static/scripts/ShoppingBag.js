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
    };
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
    for(let i =0;i<products.length;i++){
        totalAmount+=products[i].product.price*products[i].quantity;
    }
    return totalAmount
    
}
function makeOrder(){
    let order={
        user:6,
        items:JSON.parse(sessionStorage.getItem('shoppingBag')),
        sum:calcTotalAmount(),
        date:new Date()
    }
    const addNewOrder = await fetch('/api/order' ,{
        method: 'POST',
        headers:{'content-type':'application/json',
        body:JSON.stringify(order)
    }
    })

}