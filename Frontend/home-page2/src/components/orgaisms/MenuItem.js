import { useMemo } from "react";
import "./MenuItem.css";

const MenuItem = ({ services, showServices, servicesColor }) => {
  const services1Style = useMemo(() => {
    return {
      color: servicesColor,
    };
  }, [servicesColor]);

  return (
    <div className="menu-item">
      {showServices && (
        <div className="services2" style={services1Style}>
          {services}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
