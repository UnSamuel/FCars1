import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  sectionTitle,
  property1DefaultBackgroundColor,
  servicesColor,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      backgroundColor: property1DefaultBackgroundColor,
    };
  }, [property1DefaultBackgroundColor]);

  const servicesStyle = useMemo(() => {
    return {
      color: servicesColor,
    };
  }, [servicesColor]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="services" style={servicesStyle}>
        {sectionTitle}
      </div>
    </div>
  );
};

export default Property1Default;
