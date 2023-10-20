let items=document.getElementById('card');
let plus=document.getElementsByClassName('.plus-icon');
let minus=document.getElementsByClassName('.minus-icon');

let shopItemData = JSON.parse(localStorage.getItem("cartDetails")) || [];
if(shopItemData.length==0)
{
    shopItemData=[
        {
            id:"a",
            name:"casual shirts",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
            price:45,
            img:"images/i1.jpeg",
            quantity:0
        },
        { 
            id:"b",
            name:"T shirts",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
            price:55,
            img:"images/i2.jpg",
            quantity:0
        },
        { 
            id:"c",
            name:"Mens shirts",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
            price:65,
            img:"images/i3.jpeg",
            quantity:0
        },
        { 
            id:"d",
            name:"Formal shirts",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
            price:85,
            img:"images/i1.jpeg",
            quantity:0
        }
    ]
}
let generateItem=()=>{
    return items.innerHTML=shopItemData.map((x)=>{
        return `
        <div id="product_id_${x.id}" class="item">
        <img width="250" height="300" src="${x.img}"/>
        <div class="details">
            <h3>${x.name}</h3>
            <p>${x.desc}</p>
            <div class="price_quantity">
                <h2>$ ${x.price}</h2>
                <div class="buttons">
                    <i onclick="increment(${x.id})" class="fa-solid fa-plus plus-icon"></i>
                    <div id=${x.id} class="quantity">${x.quantity}</div>
                    <i onclick="decrement(${x.id})" class="fa-solid fa-minus minus-icon"></i>
                </div>
            </div>
        </div>
    </div>
        `;
    }).join("");
}
generateItem();


updateCart();

//localStorage.setItem("cartDetails",JSON.stringify(shopItemData));
//shopItemData=JSON.parse(localStorage.getItem("cartDetails"))||[]


let increment=(selectedId)=>{
    let id=selectedId.id;
    let itemFound=shopItemData.find((x)=>x.id==id);
    if(itemFound)
    {
        itemFound.quantity+=1;
        updateQuantity(selectedId.id,itemFound.quantity);
        localStorage.setItem("cartDetails",JSON.stringify(shopItemData));
    }
}
let decrement=(selectedId)=>{
    let id=selectedId.id;
    let itemFound=shopItemData.find((x)=>x.id==id);
    if(itemFound&&itemFound.quantity>0)
    {
        itemFound.quantity-=1;
        updateQuantity(selectedId.id,itemFound.quantity);
        localStorage.setItem("cartDetails", JSON.stringify(shopItemData));
    }
    else{
        alert("this item is no more in the cart");
    }
}
function updateQuantity(id,quantity)
{
    let quantityElement=document.getElementById(id);
    quantityElement.innerHTML=quantity;
    updateCart();
}
function updateCart()
{
    let cartId=document.getElementById("cart_number");
    let quantityArray=shopItemData.map((x)=>x.quantity);

    let result = quantityArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    cartId.innerHTML=result;
    
}