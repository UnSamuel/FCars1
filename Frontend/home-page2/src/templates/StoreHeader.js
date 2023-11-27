import { useMemo } from "react";
import Property1Default from "../components/orgaisms/Property1Default";
import "./StoreHeader.css";

const StoreHeader = ({
  services,
  services1,
  services2,
  services3,
  logo,
  onlineStore,
  cAD,
  cart1,
  currencyIcon,
  showLogoIcon,
  showCurrency,
  showCart,
  showGroupDiv,
  showDiv,
  storeHeaderPosition,
  storeHeaderTop,
  storeHeaderLeft,
  menuWidth,
  menuRight,
  menuLeft,
  logoIconWidth,
  logoIconRight,
  vectorIconHeight,
  vectorIconWidth,
  vectorIconTop,
  vectorIconRight,
  vectorIconBottom,
  vectorIconLeft,
  cartHeight,
  cartWidth,
  cartTop,
  cartRight,
  rectangleDivHeight,
  rectangleDivWidth,
  rectangleDivTop,
  rectangleDivRight,
  groupDivHeight,
  groupDivWidth,
  groupDivTop,
  groupDivRight,
  groupDivBottom,
  groupDivLeft,
  ellipseDivHeight,
  ellipseDivBottom,
  divHeight,
  divTop,
  cart1IconTop,
  currencyIconWidth,
  currencyIconHeight,
}) => {
  const storeHeaderStyle = useMemo(() => {
    return {
      position: storeHeaderPosition,
      top: storeHeaderTop,
      left: storeHeaderLeft,
    };
  }, [storeHeaderPosition, storeHeaderTop, storeHeaderLeft]);

  const menuStyle = useMemo(() => {
    return {
      width: menuWidth,
      right: menuRight,
      left: menuLeft,
    };
  }, [menuWidth, menuRight, menuLeft]);

  const logoIconStyle = useMemo(() => {
    return {
      width: logoIconWidth,
      right: logoIconRight,
    };
  }, [logoIconWidth, logoIconRight]);

  const vectorIconStyle = useMemo(() => {
    return {
      height: vectorIconHeight,
      width: vectorIconWidth,
      top: vectorIconTop,
      right: vectorIconRight,
      bottom: vectorIconBottom,
      left: vectorIconLeft,
    };
  }, [
    vectorIconHeight,
    vectorIconWidth,
    vectorIconTop,
    vectorIconRight,
    vectorIconBottom,
    vectorIconLeft,
  ]);

  const cartStyle = useMemo(() => {
    return {
      height: cartHeight,
      width: cartWidth,
      top: cartTop,
      right: cartRight,
    };
  }, [cartHeight, cartWidth, cartTop, cartRight]);

  const rectangleDivStyle = useMemo(() => {
    return {
      height: rectangleDivHeight,
      width: rectangleDivWidth,
      top: rectangleDivTop,
      right: rectangleDivRight,
    };
  }, [
    rectangleDivHeight,
    rectangleDivWidth,
    rectangleDivTop,
    rectangleDivRight,
  ]);

  const groupDivStyle = useMemo(() => {
    return {
      height: groupDivHeight,
      width: groupDivWidth,
      top: groupDivTop,
      right: groupDivRight,
      bottom: groupDivBottom,
      left: groupDivLeft,
    };
  }, [
    groupDivHeight,
    groupDivWidth,
    groupDivTop,
    groupDivRight,
    groupDivBottom,
    groupDivLeft,
  ]);

  const ellipseDivStyle = useMemo(() => {
    return {
      height: ellipseDivHeight,
      bottom: ellipseDivBottom,
    };
  }, [ellipseDivHeight, ellipseDivBottom]);

  const divStyle = useMemo(() => {
    return {
      height: divHeight,
      top: divTop,
    };
  }, [divHeight, divTop]);

  const cart1IconStyle = useMemo(() => {
    return {
      top: cart1IconTop,
    };
  }, [cart1IconTop]);

  const currencyIconStyle = useMemo(() => {
    return {
      width: currencyIconWidth,
      height: currencyIconHeight,
    };
  }, [currencyIconWidth, currencyIconHeight]);

  return (
    <div className="store-header" style={storeHeaderStyle}>
      <div className="bg" />
      <div className="menu" style={menuStyle}>
        <Property1Default
          sectionTitle="Tienda"
          property1DefaultBackgroundColor="#e24648"
          servicesColor="#fff"
        />
        <Property1Default
          sectionTitle="Iniciar Sesion"
          property1DefaultBackgroundColor="unset"
          servicesColor="#000"
        />
        <Property1Default
          sectionTitle="Blog Informativo"
          property1DefaultBackgroundColor="unset"
          servicesColor="#000"
        />
        <Property1Default
          sectionTitle="Publicaciones"
          property1DefaultBackgroundColor="unset"
          servicesColor="#000"
        />
      </div>
      {showLogoIcon && (
        <img className="logo-icon" alt="" src={logo} style={logoIconStyle} />
      )}
      <div className="online-store">{onlineStore}</div>
      {showCurrency && (
        <div className="currency">
          <div className="cad">{cAD}</div>
          <img
            className="currency-child"
            alt=""
            src="/vector-1.svg"
            style={vectorIconStyle}
          />
        </div>
      )}
      {showCart && (
        <div className="cart" style={cartStyle}>
          <div className="cart-child" style={rectangleDivStyle} />
          {showGroupDiv && (
            <div className="ellipse-parent" style={groupDivStyle}>
              <div className="group-child" style={ellipseDivStyle} />
              {showDiv && (
                <div className="div" style={divStyle}>
                  2
                </div>
              )}
            </div>
          )}
          <img
            className="cart-1-icon"
            alt=""
            src={cart1}
            style={cart1IconStyle}
          />
        </div>
      )}
      <img
        className="currency-icon"
        alt=""
        src={currencyIcon}
        style={currencyIconStyle}
      />
    </div>
  );
};

export default StoreHeader;
