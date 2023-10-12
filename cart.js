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

    if (itemsWithQuantity.length !== 0) {
       

        itemsWithQuantity.forEach((item) => {
            cartIsEmpty = false;

            let productElement = document.createElement("div");
            productElement.innerHTML = `
                <div id="product_id_${item.id}" class="item">
                    <img width="250" height="300" src="${item.img}"/>
                    <div class="details">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                        <div class="price_quantity">
                            <h2>$ ${item.price}</h2>
                            <div class="buttons">
                                <div id=${item.id} class="quantity">${item.quantity}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            product_details.appendChild(productElement);
        });
    } else {
        document.getElementById("empty_cart").innerHTML = "Cart is empty";
    }
    
}
generateCartItems();