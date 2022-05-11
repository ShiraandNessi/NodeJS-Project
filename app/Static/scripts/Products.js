window.addEventListener('load',pageLoad)
function pageLoad(){
    if(!sessionStorage.getItem('ItemsCount')){
        sessionStorage.setItem('ItemsCount',0)
   }
 document.getElementById("ItemsCountText").innerHTML=JSON.parse(sessionStorage.getItem('ItemsCount'))
    loadCategories();
    loadProducts();
}
function loadCategories(){
     fetch('api/category')
     .then(res=>res.json())
     .then(res=>drawCategory(res))
     .catch(err=>alert(err))
}
function loadProducts(){
    fetch('api/product')
    .then(res=>res.json())
    .then(res=>drawProducts(res))
    .catch(err=>alert(err))
}
function drawCategory(categories){
    let catIdArray=[]
    categories.forEach(cat => {
        tempCategory = document.getElementById("temp-category");
        const clonCategory = tempCategory.content.cloneNode(true);
        const checkBox=clonCategory.getElementById("checkbox");
        clonCategory.getElementById("OptionName").textContent =cat.name;
        checkBox.addEventListener('change', ()=> {
            if (checkBox.checked) {
                catIdArray.push(cat._id)
              getProductsByCategory(catIdArray)
            }
            else {
                const index=catIdArray.findIndex(id=>id==cat._id )
                catIdArray.splice(index,1)
                if(catIdArray.length==0)
                    loadProducts();
                else
                    getProductsByCategory(catIdArray)

            }
        });
        document.getElementById('filters').appendChild(clonCategory)
    });
}

function drawProducts(products){
    document.getElementById("PoductList").innerHTML=""
    document.getElementById("counter").innerHTML=products.length
    products.forEach(product => {
        tempProduct = document.getElementById("temp-card");
        console.log("../images/products/" + product.imagename+'.png')
        const clonProducts = tempProduct.content.cloneNode(true);
        clonProducts.querySelector("img").src = "../images/products/" + product.imagename+'.png';
        clonProducts.querySelector("h1").innerText =product.name;
        clonProducts.querySelector(".price").innerText = "₪" +product.price;
        clonProducts.querySelector(".description").innerText = product.desc;
        clonProducts.querySelector("button").addEventListener('click',()=>{
            addToCart(product);
        }) ;
        document.getElementById("PoductList").appendChild(clonProducts)
    });
}
function getProductsByCategory(catIds){
    let url = '/api/product/category?'
    catIds.forEach(id=>{
        url+='category='+id+'&'
    })
   url= url.substring(0,url.length-1)
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(res=>drawProducts(res))
    .catch(err=>alert(err))

}
function addToCart(product){
    
    if (document.getElementById("ItemsCountText").innerHTML==0){
        shoppingBag=[]
        shoppingBag=[{
            product:product,
            quantity:1
        }]
        sessionStorage.setItem('shoppingBag',JSON.stringify(shoppingBag))
    }
    else{
        let find = false;
        const bag=sessionStorage.getItem('shoppingBag')
       let pro=JSON.parse(bag)
       pro.forEach((item,i)=>{
            if(item.product.name==product.name){
                item.quantity=item.quantity+1;
                find=true
            }
        })

        if(!find){
            item={
                product:product,
                quantity:1
            }
   
        pro.push(item)
        console.log("2",pro)   
          sessionStorage.shoppingBag= JSON.stringify(pro);
        }
        else{
          sessionStorage.shoppingBag= JSON.stringify(pro);

        }
        
     }
     alert(`${product.name } add to cart!!`)
     increaseingCountCart()
}
function increaseingCountCart(){
    sessionStorage.ItemsCount=Number(JSON.parse(sessionStorage.getItem('ItemsCount')))+1
    document.getElementById("ItemsCountText").innerHTML=JSON.parse(sessionStorage.getItem('ItemsCount'))
  
}