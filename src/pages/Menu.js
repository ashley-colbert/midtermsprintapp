import MenuItem from "../components/MenuItem";
import PropTypes from "prop-types";

function expandMenu() {
  
}

const Menu = () => {
  return (
    <>
      <div>
        <h1>Breakfast</h1>
        <div className="menuContainer">
          <MenuItem menu="The Light Blue Platter" />
          <MenuItem menu="Gary's Famous Omlete" />
          <MenuItem menu="The Big Blue Platter" />
          <MenuItem menu="The Kid's Platter" />
        </div>
        <h1>Lunch and Dinner</h1>
        <div className="menuContainer">
          <MenuItem menu="The Deep Blue Sea Platter" />
          <MenuItem menu="Gary's Chicken Platter" />
          <MenuItem menu="Soup and Sandwich Platter" />
          <MenuItem menu="The Blues Burger Platter" />
          <MenuItem menu="Poutine" />
          <MenuItem menu="Gary's Alfredo Penne" />
        </div>
        <h1>Dessert</h1>
        <div className="menuContainer">
          <MenuItem menu="Blueberry Cheesecake" />
          <MenuItem menu="Gary's Chocolate Cake" />
          <MenuItem menu="Ice Cream" />
          <MenuItem menu="Pie" />
        </div>
      </div>
    </>
  );
};

export default Menu;
