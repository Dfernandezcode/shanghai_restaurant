import Fish from "./Categories/Fish";
import Beef from "./Categories/Beef";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <Fish />
      <Beef />
      {/* ... other categories */}
    </div>
  );
};

export default Menu;
