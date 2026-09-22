import React from "react";
import ReactDOM from "react-dom/client"

const Header = ()=>{
    return (
     <div className="header">
        <div className="logo-container">
     <img className="logo" src="https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg"
                           alt="Food Logo"
                           />
        </div>
        <div className="nav-Items">
        <ul>
           <li>Home</li>
           <li>About Us</li>
           <li>Contact</li>
           <li>🛒</li>
        </ul>
        </div>
     </div>
    )
}

const styleCard = {
    backgroundColor:"#f0f0f0"
}

const RestaurantCard = (props) => {
//const {resname,cuisines} = props
const {resData} = props
  
const {image,name,cuisines,avgRating }= resData 
    return (
        <div className="res-card" style={styleCard}>

            <img
                className="res-logo"
                src={image}
                alt="Restaurant"
            />

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating}</h5>


        </div>
    );
};

const resList = [
  {
    id: "759796",
    name: "Go Zero Ice Creams & Desserts",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/24/3b3e637e-c55f-41d9-b1ea-9c09021ff2d6_759796.JPG",
    locality: "Mahatma phule police chowki",
    areaName: "Camp",
    costForTwo: "₹150 for two",
    cuisines: ["Ice Cream", "Desserts", "Healthy Food"],
    avgRating: 4.1,
    totalRatings: "163",
    veg: true,
    isOpen: true,
    deliveryTime: "20-25 mins",
    distance: "1.9 km",
    discount: { header: "70% OFF", subHeader: "UPTO ₹140" },
    menuLink: "swiggy://menu?restaurant_id=759796&source=collection&query=Dessert"
  },
  {
    id: "97301",
    name: "Ganesh Bhavan Sweets And Snacks",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/qlm0p8swza193s0cbl2q",
    locality: "Ghorpadi",
    areaName: "Ghorpadi",
    costForTwo: "₹100 for two",
    cuisines: ["Sweets", "Snacks"],
    avgRating: 4.4,
    totalRatings: "1.8K+",
    veg: true,
    isOpen: true,
    deliveryTime: "35-45 mins",
    distance: "3.0 km",
    discount: { header: "ITEMS", subHeader: "AT ₹19" },
    menuLink: "swiggy://menu?restaurant_id=97301&source=collection&query=Dessert"
  },
  {
    id: "8525",
    name: "Mad Over Donuts",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2026/9/3/e275dd6e-db75-4713-8984-144cdd22077f_8525.jpg",
    locality: "Kumar Pacific Mall",
    areaName: "Swargate",
    costForTwo: "₹200 for two",
    cuisines: ["Desserts", "Sweets", "Bakery"],
    avgRating: 4.4,
    totalRatings: "4.6K+",
    veg: true,
    isOpen: true,
    deliveryTime: "45-55 mins",
    distance: "4.7 km",
    discount: { header: "60% OFF", subHeader: "UPTO ₹120" },
    menuLink: "swiggy://menu?restaurant_id=8525&source=collection&query=Dessert"
  },
  {
    id: "402760",
    name: "Theobroma",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2026/9/11/b5b6f0fe-4b19-4396-8546-083e54cd2182_402760.jpg",
    locality: "Camp",
    areaName: "Camp",
    costForTwo: "₹400 for two",
    cuisines: ["Bakery", "Desserts"],
    avgRating: 4.5,
    totalRatings: "2.7K+",
    veg: false,
    isOpen: true,
    deliveryTime: "20-25 mins",
    distance: "2.7 km",
    discount: { header: "ITEMS", subHeader: "AT ₹49" },
    menuLink: "swiggy://menu?restaurant_id=402760&source=collection&query=Dessert"
  },
  {
    id: "386176",
    name: "NIC Ice Creams",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2026/7/16/3082bae9-ebe7-4ca7-9ebc-a5dce7a48899_386176.JPG",
    locality: "Prabhat Road",
    areaName: "Shivaji Nagar",
    costForTwo: "₹120 for two",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: 4.6,
    totalRatings: "2.3K+",
    veg: true,
    isOpen: true,
    deliveryTime: "25-30 mins",
    distance: "2.8 km",
    discount: { header: "65% OFF", subHeader: "UPTO ₹130" },
    menuLink: "swiggy://menu?restaurant_id=386176&source=collection&query=Dessert"
  },
  {
    id: "508883",
    name: "The Belgian Waffle Co.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/4600e4b8-8893-4a1b-9419-69a35eca347f_508883.jpg",
    locality: "Ambedkar Road",
    areaName: "Camp Area",
    costForTwo: "₹200 for two",
    cuisines: ["Waffle", "Desserts", "Ice Cream"],
    avgRating: 4.7,
    totalRatings: "1.4K+",
    veg: true,
    isOpen: true,
    deliveryTime: "25-30 mins",
    distance: "1.7 km",
    discount: { header: "30% OFF", subHeader: "UPTO ₹60" },
    menuLink: "swiggy://menu?restaurant_id=508883&source=collection&query=Dessert"
  }
];




const Body = () => {

    return (
        <div className="body">

            <div className="search">
                Search
            </div>
            <div className="res-container">
            {resList.map((restaurant)=>(<RestaurantCard 
            key = {restaurant.id}
            resData = {restaurant}/>
             ))}
            
            </div>

        </div>
    );
};

const AppLayout = ()=>{
   return(
    <div className="app">
        <Header/>
        <Body/>
    </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)