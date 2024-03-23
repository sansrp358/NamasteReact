// Hello World using React
import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
-Logo
-Nav Items

Body
-Search
-RestaurantContainer
-RestaturantCard
 -img
 -Name of restaurant
 -Star Rating
 -Cuisine
 -Delivery Time

Footer
-Copyright
-Links
-Address

*/
//Header Component will be consisting of the NavBar
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2eae9f3b3240ca7874887ec9bc7bac3d"
        alt="Tandoori Nights Hotel Food Image"
      />
      <h3>Tandoori Nights</h3>
      <h4>Tandoor, North Indian, Asian</h4>
      <h4>4.3 stars</h4>
      <h4>38 min</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
//AppLayout is the root component which basically will contain all the components
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
