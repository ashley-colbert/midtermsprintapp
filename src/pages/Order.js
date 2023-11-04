import OrderItem from "../components/OrderItem";
import Footer from "../components/Footer";

import "./Order.css"

const Order = () => {
  return (
  <>
  <h1>Order Online</h1>
  <div className="orderContainer">
    <OrderItem item="The Light Blue Platter"/>
    <OrderItem item="Gary's Famous Omelette"/>
    <OrderItem item="The Big Plue Platter"/>
    <OrderItem item="The Kid's Platter"/>
    <OrderItem item="The Deep Blue Sea Platter"/>
    <OrderItem item="Gary's Chicken Platter"/>
    <OrderItem item="Soup and Sandwich"/>
    <OrderItem item="Burger Platter"/>
    <OrderItem item="Poutine"/>
    <OrderItem item="Gary's Alfredo Penne"/>
    <OrderItem item="Blueberry Cheesecake"/>
    <OrderItem item="Chocolate Cake"/>
    <OrderItem item="Ice Cream"/>
    <OrderItem item="Pie"/>
  </div>
  <div>
    <Footer/>
  </div>
  </>
  )
};

export default Order;