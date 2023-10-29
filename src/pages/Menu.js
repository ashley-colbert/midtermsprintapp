import MenuItem from "../components/MenuItem";
import "./Menu.css"

const Menu = () => {
  return (
    <>
      <div>
        <h1>Breakfast</h1>
        <div className="menuContainer">
          <MenuItem menu="The Light Blue Platter" extraMenu="An egg white omlette with spinach, mushrooms, and cheddar cheese. Whole grain toast and fresh fruit." price="$15.99"/>
          <MenuItem menu="Gary's Famous Omlete" extraMenu="A three egg omlette filled with cheese, ham, red peppers, and onions.  Hashbrowns and choice of bread on the side." price="$15.99"/>
          <MenuItem menu="The Big Blue Platter" extraMenu="Choice of meat(sausage, bacon, or ham) with a side of hashbrowns, two made to order eggs, and choice of bread." price="$17.50"/>
          <MenuItem menu="The Kid's Platter" extraMenu="A kid's size version of our famous Big Blue Platter." price="$8.99"/>
        </div>
        <h1>Lunch and Dinner</h1>
        <div className="menuContainer">
          <MenuItem menu="The Deep Blue Sea Platter" extraMenu="Two pieces of fish, with a choice or side, and tartar sauce." price="$18.50"/>
          <MenuItem menu="Gary's Chicken Platter" extraMenu="Three pieces of fried chicken, with a choice of side, and coleslaw." price="$17.50"/>
          <MenuItem menu="Soup and Sandwich Platter" extraMenu="A generous bowl of the soup of the day, with a turkey and dressing sandwich on freshly made in house bread." price="$15.50"/>
          <MenuItem menu="The Blues Burger Platter" extraMenu="A double smash burger with cheese, bacon, lettuce, tomato and mayo on a brioche bun, with a choice of side." price="$17.50"/>
          <MenuItem menu="Poutine" extraMenu="A classic with golden french fries, topped with cheddar cheese curds, and smothered in house made gravy." price="$12.50"/>
          <MenuItem menu="Gary's Alfredo Penne" extraMenu="Penne pasta tossed in Gary's special Alfredo sauce with your choice of chicken or shrimp. Served with a side of garlic bread." price="$17.50"/>
        </div>
        <h1>Dessert</h1>
        <div className="menuContainer">
          <MenuItem menu="Blueberry Cheesecake" extraMenu="A slice of classic New York style cheesecake topped with a rich blueberry sauce." price="$7.50"/>
          <MenuItem menu="Gary's Chocolate Cake" extraMenu="Three layers of rich choclate cake, layered with chocolate fudge frosting, and topped with chocolate whipped cream." price="$7.50"/>
          <MenuItem menu="Ice Cream" extraMenu="Two scoops of french vanilla ice cream, topped with your choice of sauce(chocolate, caramel, blueberry)" price="$5.50"/>
          <MenuItem menu="Pie" extraMenu="A slice of the pie of the day." price="$5.50"/>
        </div>
      </div>
    </>
  );
};

export default Menu;
