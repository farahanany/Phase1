
let carts = document.querySelectorAll('.add-to-cart');
let products=[

    {
        id:1,
        title:'Self_portrait',
        tag:'selfportrait',
        price:6500,
        imageUrl:'images/selfportrait.JPG',
        inCart:0

    },
    {
        id:2,
        title:'Encircled',
        tag:'Encircled',
        price:4000,
        imageUrl:'images/Encircled.JPG',
        inCart:0
    
    },
    {
        id:3,
        title:'Still Life',
        tag:'StillLife',
        price:8500,
        imageUrl:'images/StillLife.JPG',
        inCart:0
    
    },
    {
        id:4,
        title:'The Archer',
        price:9500,
        tag:'archer',
        imageUrl:'images/archer.jpg',
        inCart:0
    
    },
    {
        id:5,
        title:'Summer Pool Drips',
        tag:'Summerpooldrips',
        price:8500,
        imageUrl:'images/Summerpooldrips.JPG',
        inCart:0
    
    }, {
        id:6,
        title:'openupitsme',
        tag:'Openupitsme',
        price:2000,
        imageUrl:'images/Openupitsme.JPG',
        inCart:0

    },
    {
        id:7,
        title:'Loathe',
        tag:'new',
        price:2300,
        imageUrl:'images/new.jpg',
        inCart:0
    
    },
    {
        id:8,
        title:'Archer Unnoticed',
        tag:'ArcherUnnoticed',
        price:2200,
        imageUrl:'images/ArcherUnnoticed.JPG',
        inCart:0
    
    },
    {
        id:9,
        title:'Series:Awakening',
        price:5000,
        tag:'Series_Awakening',
        imageUrl:'images/Series_Awakening.JPG',
        inCart:0
    
    },
    {
        id:10,
        title:'Series:Awakening2',
        tag:'Series_Awakening2',
        price:5000,
        imageUrl:'images/Series_Awakening2.JPG',
        inCart:0
    
    },{
        id:11,
        title:'Series:Awakening3',
        price:5000,
        tag:'Series_Awakening3',
        imageUrl:'images/Series_Awakening3.JPG',
        inCart:0
    
    },
    ,{
        id:12,
        title:'Damon_Albarn_Blur1990',
        price:5500,
        tag:'Damon_Albarn_Blur1990',
        imageUrl:'images/Damon_Albarn_Blur1990.JPG',
        inCart:0
    
    },
    ,{
        id:13,
        title:'unknownfigure',
        price:1000,
        tag:'UnknownFigurefromthesubconscious',
        imageUrl:'images/UnknownFigurefromthesubconscious.JPG',
        inCart:0
    
    },
    ,{
        id:14,
        title:'il_padre',
        price:4000,
        tag:'il_padre',
        imageUrl:'images/il_padre.JPG',
        inCart:0
    
    },{
        id:15,
        title:'Fear&LoathinLA',
        price:2500,
        tag:'Fear&LoathinLasVegas',
        imageUrl:'images/Fear&LoathinLasVegas.JPG',
        inCart:0
    
    }
   
    
    ];
    
    
for(let i=0;i<carts.length;i++)
{
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    }  )

}


function onLoadCartNumbers()
{
let productNumbers=localStorage.getItem('cartNumbers');
if(productNumbers)
{
document.querySelector('.cart span').textContent=productNumbers;
}

}



function cartNumbers(product)
{
 let productNumbers=localStorage.getItem('cartNumbers');

 productNumbers=parseInt(productNumbers);

 if( productNumbers)
 {
  localStorage.setItem('cartNumbers',productNumbers+1);
  document.querySelector('.cart span').textContent=productNumbers+1;
 
 }
 else
 {
     localStorage.setItem('cartNumbers',1);
     document.querySelector('.cart span').textContent=1;
 }
 setItems(product);
}

function setItems(product){
 let cartItems=localStorage.getItem('productsInCart');
 cartItems=JSON.parse(cartItems);
 if(cartItems!=null)
 {
    
    if(cartItems[product.tag]==undefined) {

        cartItems={
            ...cartItems,
            [product.tag]:product
        }
    }
    cartItems[product.tag].inCart+=1;
 }
 else
 {
     product.inCart=1;
     cartItems={
         [product.tag]:product
     }
    
 }


 localStorage.setItem('productsInCart',JSON.stringify(cartItems));

}



onLoadCartNumbers();
