let shopItemData=JSON.parse(localStorage.getItem("cartDetails"))||[]
updateCart();

function updateCart()
{
    let cartId=document.getElementById("cart_number");
    let quantityArray=shopItemData.map((x)=>x.quantity);
    let result = quantityArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    cartId.innerHTML=result;
    
}

let total_bill=document.getElementById("total_bill");
let product_details=document.getElementById('product_details');

let generateCartItems=()=>{
    let cartIsEmpty = true; 
    const itemsWithQuantity = shopItemData.filter((item) => item.quantity > 0);

    product_details.innerHTML = "";

    if (itemsWithQuantity.length !== 0) 
    {
        itemsWithQuantity.forEach((item) => {
            cartIsEmpty = false;

            let productElement = document.createElement("div");
            productElement.innerHTML = `
                <div id="product_id_${item.id}" class="item">
                    <img width="100" height="100" src="${item.img}"/>
                    <div class="details">
                        <h3>${item.name}</h3>
                        <div class="price_quantity">
                        <h2>$ ${item.price}</h2>
                        <div class="buttons">
                            <i onclick="increment(${item.id})" class="fa-solid fa-plus plus-icon"></i>
                            <div id=${item.id} class="quantity">${item.quantity}</div>
                            <i onclick="decrement(${item.id})" class="fa-solid fa-minus minus-icon"></i>
                        </div>
                    </div>
                </div>
            `;

            product_details.appendChild(productElement);
        });
    } else {
        document.getElementById("empty_cart").innerHTML = `<h2>Cart is empty</h2>
            <a href="index.html">
                <button class="HomeBtn">Back To Home</button>
            </a>
        `;

    }
    
}
generateCartItems();