const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Fresh pancakes made with butterhoney and milk.Get strawberry toppings for free`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `A double lunch for you the American way.Get your double combo deal at a highly affordable price from our cafe`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Tasty delicious milkshakes available in flavors of strawberry,chocolate and vanilla.Get your milkshake from your favorite Joint!`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `A breakfast befitting for your hunger.Get freshly cooked breakfast from here`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Eggs just the way you love them`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `A sensational blend of Oreo and a chocolate shake from our cafe.Feel free to order`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `A bacon dish freshly cooked `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `The perfect snack combo of french fries and a Large Burger.Get it at your convenience with free sauce of your choice `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `For you and your better Half`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 38.99,
    img: "./images/item-10.jpeg",
    desc: `A mouth watering steak`,
  },
];

const sectionCenter = document.querySelector('.section-center');

const container= document.querySelector('.btn-container')


//load items

window.addEventListener("DOMContentLoaded",function(){
  displayMenuItems(menu);
  displayMenuButtons();

});



function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function (item){
    return  `<article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title}/>
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
      </div>
  </article> `;
  });
  displayMenu= displayMenu.join("");
  sectionCenter.innerHTML=displayMenu;

}

function displayMenuButtons(){
  const categories =menu.reduce(function(values,item){
    if (!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
   },
   ["all"]
   );

   //heres parsing the html
     const categoryBtns=categories.map(function(category){
       return` <button class="filter-btn"type="button" data-id=${category}>${category} </button>`
     })
     .join("")
     container.innerHTML =categoryBtns;
     const filterBtns =document.querySelectorAll('.filter-btn');
     //filter items
   //dataset property used to access the specific data id 
   filterBtns.forEach(function(btn){
     btn.addEventListener('click',function(e){
       const category= e.currentTarget.dataset.id;
       const menuCategory=menu.filter(function (menuItem){
           if(menuItem.category === category){
             return menuItem;
           }
            });
     //console.log(menuCategory);
               if(category==='all'){
                 displayMenuItems(menu)
               }
               else{
                 displayMenuItems(menuCategory)
               }
                   });
     });

}
