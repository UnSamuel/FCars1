import { useMemo } from "react";
import MenuItem from "../components/orgaisms/MenuItem";
import "./Footer.css";

const Footer = ({
  copyright2021MBHouseInc,
  mercedesBenzLogoIsATradem,
  wEBDesignTorontoByVestraI,
  unit40101ToroRd,
  northYorkONCanadaM3J2Z1,
  logoFooter,
  services,
  services1,
  services2,
  services3,
  services4,
  path,
  instIcon,
  phoneIcon,
  mapMarkerIcon,
  showMenuItem,
  menuItemVisible,
  footerPosition,
  footerTop,
  footerLeft,
  copyright2021Margin,
  copyright2021Position,
  copyright2021Width,
  copyright2021Top,
  copyright2021Left,
  copyright2021FontSize,
  copyright2021LineHeight,
  copyright2021FontFamily,
  copyright2021Color,
  copyright2021TextAlign,
  copyright2021Display,
  mercedesBenzLogoIsMargin,
  mercedesBenzLogoIsPosition,
  mercedesBenzLogoIsTop,
  mercedesBenzLogoIsLeft,
  mercedesBenzLogoIsFontSize,
  mercedesBenzLogoIsLineHeight,
  mercedesBenzLogoIsFontFamily,
  mercedesBenzLogoIsColor,
  mercedesBenzLogoIsTextAlign,
  mercedesBenzLogoIsDisplay,
  wEBDesignTorontoWidth,
  wEBDesignTorontoTop,
  wEBDesignTorontoLeft,
  wEBDesignTorontoColor,
  wEBDesignTorontoTextAlign,
  lineDivPosition,
  lineDivTop,
  lineDivLeft,
  lineDivBorderTop,
  lineDivBoxSizing,
  lineDivWidth,
  lineDivHeight,
  lineDivMargin,
  divPosition,
  divTop,
  divLeft,
  divFontSize,
  divLineHeight,
  divFontFamily,
  divColor,
  divTextAlign,
  divDisplay,
  unit40101ContainerPosition,
  unit40101ContainerWidth,
  unit40101ContainerTop,
  unit40101ContainerLeft,
  unit40101ContainerFontSize,
  unit40101ContainerLineHeight,
  unit40101ContainerFontFamily,
  unit40101ContainerColor,
  unit40101ContainerTextAlign,
  unit40101ContainerDisplay,
  unit40101ContainerMargin,
  unit40101Margin,
  unit40101Position,
  unit40101Height,
  unit40101Width,
  unit40101Top,
  unit40101Right,
  unit40101Bottom,
  unit40101Left,
  unit40101MaxWidth,
  unit40101Overflow,
  unit40101MaxHeight,
  northYorkONCanadaMargin,
  northYorkONCanadaDisplay,
  northYorkONCanadaFlexDirection,
  northYorkONCanadaAlignItems,
  northYorkONCanadaJustifyContent,
  northYorkONCanadaPadding,
  northYorkONCanadaBoxSizing,
  logoFooterIconPosition,
  logoFooterIconHeight,
  logoFooterIconWidth,
  logoFooterIconTop,
  logoFooterIconRight,
  logoFooterIconBottom,
  logoFooterIconLeft,
  logoFooterIconMaxWidth,
  logoFooterIconOverflow,
  logoFooterIconMaxHeight,
  logoFooterIconFontSize,
  logoFooterIconLineHeight,
  logoFooterIconFontFamily,
  logoFooterIconColor,
  logoFooterIconTextAlign,
  logoFooterIconDisplay,
  topMenuPosition,
  topMenuWidth,
  topMenuTop,
  topMenuRight,
  topMenuLeft,
  topMenuGap,
  topMenuPadding,
  topMenuBoxSizing,
  menuItemDisplay,
  menuItemFlexDirection,
  menuItemAlignItems,
  menuItemJustifyContent,
  menuItemPadding,
  menuItemBoxSizing,
  menuItemPosition,
  menuItemFontSize,
  menuItemLineHeight,
  menuItemFontFamily,
  menuItemColor,
  menuItemTextAlign,
  servicesPosition,
  servicesFontSize,
  servicesLineHeight,
  servicesFontFamily,
  servicesColor,
  servicesTextAlign,
  servicesDisplay,
  servicesFlexDirection,
  servicesAlignItems,
  servicesJustifyContent,
  servicesPadding,
  servicesBoxSizing,
  menuItemDisplay1,
  menuItemFlexDirection1,
  menuItemAlignItems1,
  menuItemJustifyContent1,
  menuItemPadding1,
  menuItemBoxSizing1,
  menuItemPosition1,
  menuItemFontSize1,
  menuItemLineHeight1,
  menuItemFontFamily1,
  menuItemColor1,
  menuItemTextAlign1,
  servicesPosition1,
  servicesFontSize1,
  servicesLineHeight1,
  servicesFontFamily1,
  servicesColor1,
  servicesTextAlign1,
  servicesDisplay1,
  servicesFlexDirection1,
  servicesAlignItems1,
  servicesJustifyContent1,
  servicesPadding1,
  servicesBoxSizing1,
  menuItemFlexDirection2,
  menuItemAlignItems2,
  menuItemJustifyContent2,
  menuItemPadding2,
  menuItemBoxSizing2,
  menuItemPosition2,
  menuItemFontSize2,
  menuItemLineHeight2,
  menuItemFontFamily2,
  menuItemColor2,
  menuItemTextAlign2,
  servicesPosition2,
  servicesFontSize2,
  servicesLineHeight2,
  servicesFontFamily2,
  servicesColor2,
  servicesTextAlign2,
  servicesDisplay2,
  servicesFlexDirection2,
  servicesAlignItems2,
  servicesJustifyContent2,
  servicesPadding2,
  servicesBoxSizing2,
  menuItemFlexDirection3,
  menuItemAlignItems3,
  menuItemJustifyContent3,
  menuItemPadding3,
  menuItemBoxSizing3,
  menuItemPosition3,
  menuItemFontSize3,
  menuItemLineHeight3,
  menuItemFontFamily3,
  menuItemColor3,
  menuItemTextAlign3,
  servicesPosition3,
  servicesFontSize3,
  servicesLineHeight3,
  servicesFontFamily3,
  servicesColor3,
  servicesTextAlign3,
  servicesDisplay3,
  servicesTop,
  servicesLeft,
  servicesWidth,
  servicesHeight,
  menuItemDisplay2,
  menuItemFlexDirection4,
  menuItemAlignItems4,
  menuItemJustifyContent4,
  menuItemPadding4,
  menuItemBoxSizing4,
  menuItemPosition4,
  menuItemTop,
  menuItemLeft,
  menuItemBorderRadius,
  menuItemBackgroundColor,
  menuItemWidth,
  menuItemHeight,
  servicesPosition4,
  servicesFontSize4,
  servicesLineHeight4,
  servicesFontFamily4,
  servicesColor4,
  servicesTextAlign4,
  servicesDisplay4,
  servicesHeight1,
  servicesWidth1,
  servicesTop1,
  servicesRight,
  servicesBottom,
  servicesLeft1,
  servicesMaxWidth,
  servicesOverflow,
  servicesMaxHeight,
  facebookIconLeft,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivBorderRadius,
  rectangleDivBackgroundColor,
  rectangleDivWidth,
  rectangleDivHeight,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivMaxWidth,
  rectangleDivOverflow,
  rectangleDivMaxHeight,
  pathIconHeight,
  pathIconWidth,
  pathIconTop,
  pathIconRight,
  pathIconBottom,
  pathIconLeft,
  pathIconMaxWidth,
  pathIconMaxHeight,
  instIconTop,
  instIconLeft,
  instIconWidth,
  instIconHeight,
  instIconRight,
  instIconBottom,
  instIconBackgroundColor,
  phoneIconHeight,
  phoneIconWidth,
  phoneIconTop,
  phoneIconRight,
  phoneIconBottom,
  phoneIconLeft,
  phoneIconMaxWidth,
  phoneIconOverflow,
  phoneIconMaxHeight,
  mapMarkerIconTop,
  mapMarkerIconLeft,
  mapMarkerIconWidth,
  mapMarkerIconHeight,
  mapMarkerIconOverflow,
  mapMarkerIconBorderRadius,
  mapMarkerIconBackgroundColor,
  footerLineHeight,
  footerLineWidth,
  footerLineTop,
  footerLineRight,
  footerLineBottom,
  footerLineLeft,
  footerLineBackgroundColor,
  footerLineMaxWidth,
  footerLineOverflow,
  footerLineMaxHeight,
}) => {
  const footerStyle = useMemo(() => {
    return {
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
    };
  }, [footerPosition, footerTop, footerLeft]);

  const copyright2021Style = useMemo(() => {
    return {
      margin: copyright2021Margin,
      position: copyright2021Position,
      width: copyright2021Width,
      top: copyright2021Top,
      left: copyright2021Left,
      fontSize: copyright2021FontSize,
      lineHeight: copyright2021LineHeight,
      fontFamily: copyright2021FontFamily,
      color: copyright2021Color,
      textAlign: copyright2021TextAlign,
      display: copyright2021Display,
    };
  }, [
    copyright2021Margin,
    copyright2021Position,
    copyright2021Width,
    copyright2021Top,
    copyright2021Left,
    copyright2021FontSize,
    copyright2021LineHeight,
    copyright2021FontFamily,
    copyright2021Color,
    copyright2021TextAlign,
    copyright2021Display,
  ]);

  const mercedesBenzLogoIsStyle = useMemo(() => {
    return {
      margin: mercedesBenzLogoIsMargin,
      position: mercedesBenzLogoIsPosition,
      top: mercedesBenzLogoIsTop,
      left: mercedesBenzLogoIsLeft,
      fontSize: mercedesBenzLogoIsFontSize,
      lineHeight: mercedesBenzLogoIsLineHeight,
      fontFamily: mercedesBenzLogoIsFontFamily,
      color: mercedesBenzLogoIsColor,
      textAlign: mercedesBenzLogoIsTextAlign,
      display: mercedesBenzLogoIsDisplay,
    };
  }, [
    mercedesBenzLogoIsMargin,
    mercedesBenzLogoIsPosition,
    mercedesBenzLogoIsTop,
    mercedesBenzLogoIsLeft,
    mercedesBenzLogoIsFontSize,
    mercedesBenzLogoIsLineHeight,
    mercedesBenzLogoIsFontFamily,
    mercedesBenzLogoIsColor,
    mercedesBenzLogoIsTextAlign,
    mercedesBenzLogoIsDisplay,
  ]);

  const wEBDesignTorontoStyle = useMemo(() => {
    return {
      width: wEBDesignTorontoWidth,
      top: wEBDesignTorontoTop,
      left: wEBDesignTorontoLeft,
      color: wEBDesignTorontoColor,
      textAlign: wEBDesignTorontoTextAlign,
    };
  }, [
    wEBDesignTorontoWidth,
    wEBDesignTorontoTop,
    wEBDesignTorontoLeft,
    wEBDesignTorontoColor,
    wEBDesignTorontoTextAlign,
  ]);

  const lineDivStyle = useMemo(() => {
    return {
      position: lineDivPosition,
      top: lineDivTop,
      left: lineDivLeft,
      borderTop: lineDivBorderTop,
      boxSizing: lineDivBoxSizing,
      width: lineDivWidth,
      height: lineDivHeight,
      margin: lineDivMargin,
    };
  }, [
    lineDivPosition,
    lineDivTop,
    lineDivLeft,
    lineDivBorderTop,
    lineDivBoxSizing,
    lineDivWidth,
    lineDivHeight,
    lineDivMargin,
  ]);

  const div1Style = useMemo(() => {
    return {
      position: divPosition,
      top: divTop,
      left: divLeft,
      fontSize: divFontSize,
      lineHeight: divLineHeight,
      fontFamily: divFontFamily,
      color: divColor,
      textAlign: divTextAlign,
      display: divDisplay,
    };
  }, [
    divPosition,
    divTop,
    divLeft,
    divFontSize,
    divLineHeight,
    divFontFamily,
    divColor,
    divTextAlign,
    divDisplay,
  ]);

  const unit40101ContainerStyle = useMemo(() => {
    return {
      position: unit40101ContainerPosition,
      width: unit40101ContainerWidth,
      top: unit40101ContainerTop,
      left: unit40101ContainerLeft,
      fontSize: unit40101ContainerFontSize,
      lineHeight: unit40101ContainerLineHeight,
      fontFamily: unit40101ContainerFontFamily,
      color: unit40101ContainerColor,
      textAlign: unit40101ContainerTextAlign,
      display: unit40101ContainerDisplay,
      margin: unit40101ContainerMargin,
    };
  }, [
    unit40101ContainerPosition,
    unit40101ContainerWidth,
    unit40101ContainerTop,
    unit40101ContainerLeft,
    unit40101ContainerFontSize,
    unit40101ContainerLineHeight,
    unit40101ContainerFontFamily,
    unit40101ContainerColor,
    unit40101ContainerTextAlign,
    unit40101ContainerDisplay,
    unit40101ContainerMargin,
  ]);

  const unit40101Style = useMemo(() => {
    return {
      margin: unit40101Margin,
      position: unit40101Position,
      height: unit40101Height,
      width: unit40101Width,
      top: unit40101Top,
      right: unit40101Right,
      bottom: unit40101Bottom,
      left: unit40101Left,
      maxWidth: unit40101MaxWidth,
      overflow: unit40101Overflow,
      maxHeight: unit40101MaxHeight,
    };
  }, [
    unit40101Margin,
    unit40101Position,
    unit40101Height,
    unit40101Width,
    unit40101Top,
    unit40101Right,
    unit40101Bottom,
    unit40101Left,
    unit40101MaxWidth,
    unit40101Overflow,
    unit40101MaxHeight,
  ]);

  const northYorkONCanadaStyle = useMemo(() => {
    return {
      margin: northYorkONCanadaMargin,
      display: northYorkONCanadaDisplay,
      flexDirection: northYorkONCanadaFlexDirection,
      alignItems: northYorkONCanadaAlignItems,
      justifyContent: northYorkONCanadaJustifyContent,
      padding: northYorkONCanadaPadding,
      boxSizing: northYorkONCanadaBoxSizing,
    };
  }, [
    northYorkONCanadaMargin,
    northYorkONCanadaDisplay,
    northYorkONCanadaFlexDirection,
    northYorkONCanadaAlignItems,
    northYorkONCanadaJustifyContent,
    northYorkONCanadaPadding,
    northYorkONCanadaBoxSizing,
  ]);

  const logoFooterIconStyle = useMemo(() => {
    return {
      position: logoFooterIconPosition,
      height: logoFooterIconHeight,
      width: logoFooterIconWidth,
      top: logoFooterIconTop,
      right: logoFooterIconRight,
      bottom: logoFooterIconBottom,
      left: logoFooterIconLeft,
      maxWidth: logoFooterIconMaxWidth,
      overflow: logoFooterIconOverflow,
      maxHeight: logoFooterIconMaxHeight,
      fontSize: logoFooterIconFontSize,
      lineHeight: logoFooterIconLineHeight,
      fontFamily: logoFooterIconFontFamily,
      color: logoFooterIconColor,
      textAlign: logoFooterIconTextAlign,
      display: logoFooterIconDisplay,
    };
  }, [
    logoFooterIconPosition,
    logoFooterIconHeight,
    logoFooterIconWidth,
    logoFooterIconTop,
    logoFooterIconRight,
    logoFooterIconBottom,
    logoFooterIconLeft,
    logoFooterIconMaxWidth,
    logoFooterIconOverflow,
    logoFooterIconMaxHeight,
    logoFooterIconFontSize,
    logoFooterIconLineHeight,
    logoFooterIconFontFamily,
    logoFooterIconColor,
    logoFooterIconTextAlign,
    logoFooterIconDisplay,
  ]);

  const topMenuStyle = useMemo(() => {
    return {
      position: topMenuPosition,
      width: topMenuWidth,
      top: topMenuTop,
      right: topMenuRight,
      left: topMenuLeft,
      gap: topMenuGap,
      padding: topMenuPadding,
      boxSizing: topMenuBoxSizing,
    };
  }, [
    topMenuPosition,
    topMenuWidth,
    topMenuTop,
    topMenuRight,
    topMenuLeft,
    topMenuGap,
    topMenuPadding,
    topMenuBoxSizing,
  ]);

  const menuItemStyle = useMemo(() => {
    return {
      display: menuItemDisplay,
      flexDirection: menuItemFlexDirection,
      alignItems: menuItemAlignItems,
      justifyContent: menuItemJustifyContent,
      padding: menuItemPadding,
      boxSizing: menuItemBoxSizing,
      position: menuItemPosition,
      fontSize: menuItemFontSize,
      lineHeight: menuItemLineHeight,
      fontFamily: menuItemFontFamily,
      color: menuItemColor,
      textAlign: menuItemTextAlign,
    };
  }, [
    menuItemDisplay,
    menuItemFlexDirection,
    menuItemAlignItems,
    menuItemJustifyContent,
    menuItemPadding,
    menuItemBoxSizing,
    menuItemPosition,
    menuItemFontSize,
    menuItemLineHeight,
    menuItemFontFamily,
    menuItemColor,
    menuItemTextAlign,
  ]);

  const services1Style = useMemo(() => {
    return {
      position: servicesPosition,
      fontSize: servicesFontSize,
      lineHeight: servicesLineHeight,
      fontFamily: servicesFontFamily,
      color: servicesColor,
      textAlign: servicesTextAlign,
      display: servicesDisplay,
      flexDirection: servicesFlexDirection,
      alignItems: servicesAlignItems,
      justifyContent: servicesJustifyContent,
      padding: servicesPadding,
      boxSizing: servicesBoxSizing,
    };
  }, [
    servicesPosition,
    servicesFontSize,
    servicesLineHeight,
    servicesFontFamily,
    servicesColor,
    servicesTextAlign,
    servicesDisplay,
    servicesFlexDirection,
    servicesAlignItems,
    servicesJustifyContent,
    servicesPadding,
    servicesBoxSizing,
  ]);

  const menuItemStyle1 = useMemo(() => {
    return {
      display: menuItemDisplay1,
      flexDirection: menuItemFlexDirection1,
      alignItems: menuItemAlignItems1,
      justifyContent: menuItemJustifyContent1,
      padding: menuItemPadding1,
      boxSizing: menuItemBoxSizing1,
      position: menuItemPosition1,
      fontSize: menuItemFontSize1,
      lineHeight: menuItemLineHeight1,
      fontFamily: menuItemFontFamily1,
      color: menuItemColor1,
      textAlign: menuItemTextAlign1,
    };
  }, [
    menuItemDisplay1,
    menuItemFlexDirection1,
    menuItemAlignItems1,
    menuItemJustifyContent1,
    menuItemPadding1,
    menuItemBoxSizing1,
    menuItemPosition1,
    menuItemFontSize1,
    menuItemLineHeight1,
    menuItemFontFamily1,
    menuItemColor1,
    menuItemTextAlign1,
  ]);

  const services1Style1 = useMemo(() => {
    return {
      position: servicesPosition1,
      fontSize: servicesFontSize1,
      lineHeight: servicesLineHeight1,
      fontFamily: servicesFontFamily1,
      color: servicesColor1,
      textAlign: servicesTextAlign1,
      display: servicesDisplay1,
      flexDirection: servicesFlexDirection1,
      alignItems: servicesAlignItems1,
      justifyContent: servicesJustifyContent1,
      padding: servicesPadding1,
      boxSizing: servicesBoxSizing1,
    };
  }, [
    servicesPosition1,
    servicesFontSize1,
    servicesLineHeight1,
    servicesFontFamily1,
    servicesColor1,
    servicesTextAlign1,
    servicesDisplay1,
    servicesFlexDirection1,
    servicesAlignItems1,
    servicesJustifyContent1,
    servicesPadding1,
    servicesBoxSizing1,
  ]);

  const menuItemStyle2 = useMemo(() => {
    return {
      flexDirection: menuItemFlexDirection2,
      alignItems: menuItemAlignItems2,
      justifyContent: menuItemJustifyContent2,
      padding: menuItemPadding2,
      boxSizing: menuItemBoxSizing2,
      position: menuItemPosition2,
      fontSize: menuItemFontSize2,
      lineHeight: menuItemLineHeight2,
      fontFamily: menuItemFontFamily2,
      color: menuItemColor2,
      textAlign: menuItemTextAlign2,
    };
  }, [
    menuItemFlexDirection2,
    menuItemAlignItems2,
    menuItemJustifyContent2,
    menuItemPadding2,
    menuItemBoxSizing2,
    menuItemPosition2,
    menuItemFontSize2,
    menuItemLineHeight2,
    menuItemFontFamily2,
    menuItemColor2,
    menuItemTextAlign2,
  ]);

  const services1Style2 = useMemo(() => {
    return {
      position: servicesPosition2,
      fontSize: servicesFontSize2,
      lineHeight: servicesLineHeight2,
      fontFamily: servicesFontFamily2,
      color: servicesColor2,
      textAlign: servicesTextAlign2,
      display: servicesDisplay2,
      flexDirection: servicesFlexDirection2,
      alignItems: servicesAlignItems2,
      justifyContent: servicesJustifyContent2,
      padding: servicesPadding2,
      boxSizing: servicesBoxSizing2,
    };
  }, [
    servicesPosition2,
    servicesFontSize2,
    servicesLineHeight2,
    servicesFontFamily2,
    servicesColor2,
    servicesTextAlign2,
    servicesDisplay2,
    servicesFlexDirection2,
    servicesAlignItems2,
    servicesJustifyContent2,
    servicesPadding2,
    servicesBoxSizing2,
  ]);

  const menuItemStyle3 = useMemo(() => {
    return {
      flexDirection: menuItemFlexDirection3,
      alignItems: menuItemAlignItems3,
      justifyContent: menuItemJustifyContent3,
      padding: menuItemPadding3,
      boxSizing: menuItemBoxSizing3,
      position: menuItemPosition3,
      fontSize: menuItemFontSize3,
      lineHeight: menuItemLineHeight3,
      fontFamily: menuItemFontFamily3,
      color: menuItemColor3,
      textAlign: menuItemTextAlign3,
    };
  }, [
    menuItemFlexDirection3,
    menuItemAlignItems3,
    menuItemJustifyContent3,
    menuItemPadding3,
    menuItemBoxSizing3,
    menuItemPosition3,
    menuItemFontSize3,
    menuItemLineHeight3,
    menuItemFontFamily3,
    menuItemColor3,
    menuItemTextAlign3,
  ]);

  const services1Style3 = useMemo(() => {
    return {
      position: servicesPosition3,
      fontSize: servicesFontSize3,
      lineHeight: servicesLineHeight3,
      fontFamily: servicesFontFamily3,
      color: servicesColor3,
      textAlign: servicesTextAlign3,
      display: servicesDisplay3,
      top: servicesTop,
      left: servicesLeft,
      width: servicesWidth,
      height: servicesHeight,
    };
  }, [
    servicesPosition3,
    servicesFontSize3,
    servicesLineHeight3,
    servicesFontFamily3,
    servicesColor3,
    servicesTextAlign3,
    servicesDisplay3,
    servicesTop,
    servicesLeft,
    servicesWidth,
    servicesHeight,
  ]);

  const menuItemStyle4 = useMemo(() => {
    return {
      display: menuItemDisplay2,
      flexDirection: menuItemFlexDirection4,
      alignItems: menuItemAlignItems4,
      justifyContent: menuItemJustifyContent4,
      padding: menuItemPadding4,
      boxSizing: menuItemBoxSizing4,
      position: menuItemPosition4,
      top: menuItemTop,
      left: menuItemLeft,
      borderRadius: menuItemBorderRadius,
      backgroundColor: menuItemBackgroundColor,
      width: menuItemWidth,
      height: menuItemHeight,
    };
  }, [
    menuItemDisplay2,
    menuItemFlexDirection4,
    menuItemAlignItems4,
    menuItemJustifyContent4,
    menuItemPadding4,
    menuItemBoxSizing4,
    menuItemPosition4,
    menuItemTop,
    menuItemLeft,
    menuItemBorderRadius,
    menuItemBackgroundColor,
    menuItemWidth,
    menuItemHeight,
  ]);

  const services1Style4 = useMemo(() => {
    return {
      position: servicesPosition4,
      fontSize: servicesFontSize4,
      lineHeight: servicesLineHeight4,
      fontFamily: servicesFontFamily4,
      color: servicesColor4,
      textAlign: servicesTextAlign4,
      display: servicesDisplay4,
      height: servicesHeight1,
      width: servicesWidth1,
      top: servicesTop1,
      right: servicesRight,
      bottom: servicesBottom,
      left: servicesLeft1,
      maxWidth: servicesMaxWidth,
      overflow: servicesOverflow,
      maxHeight: servicesMaxHeight,
    };
  }, [
    servicesPosition4,
    servicesFontSize4,
    servicesLineHeight4,
    servicesFontFamily4,
    servicesColor4,
    servicesTextAlign4,
    servicesDisplay4,
    servicesHeight1,
    servicesWidth1,
    servicesTop1,
    servicesRight,
    servicesBottom,
    servicesLeft1,
    servicesMaxWidth,
    servicesOverflow,
    servicesMaxHeight,
  ]);

  const facebookIconStyle = useMemo(() => {
    return {
      left: facebookIconLeft,
    };
  }, [facebookIconLeft]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      top: rectangleDivTop,
      left: rectangleDivLeft,
      borderRadius: rectangleDivBorderRadius,
      backgroundColor: rectangleDivBackgroundColor,
      width: rectangleDivWidth,
      height: rectangleDivHeight,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      maxWidth: rectangleDivMaxWidth,
      overflow: rectangleDivOverflow,
      maxHeight: rectangleDivMaxHeight,
    };
  }, [
    rectangleDivTop,
    rectangleDivLeft,
    rectangleDivBorderRadius,
    rectangleDivBackgroundColor,
    rectangleDivWidth,
    rectangleDivHeight,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivMaxWidth,
    rectangleDivOverflow,
    rectangleDivMaxHeight,
  ]);

  const pathIconStyle = useMemo(() => {
    return {
      height: pathIconHeight,
      width: pathIconWidth,
      top: pathIconTop,
      right: pathIconRight,
      bottom: pathIconBottom,
      left: pathIconLeft,
      maxWidth: pathIconMaxWidth,
      maxHeight: pathIconMaxHeight,
    };
  }, [
    pathIconHeight,
    pathIconWidth,
    pathIconTop,
    pathIconRight,
    pathIconBottom,
    pathIconLeft,
    pathIconMaxWidth,
    pathIconMaxHeight,
  ]);

  const instIconStyle = useMemo(() => {
    return {
      top: instIconTop,
      left: instIconLeft,
      width: instIconWidth,
      height: instIconHeight,
      right: instIconRight,
      bottom: instIconBottom,
      backgroundColor: instIconBackgroundColor,
    };
  }, [
    instIconTop,
    instIconLeft,
    instIconWidth,
    instIconHeight,
    instIconRight,
    instIconBottom,
    instIconBackgroundColor,
  ]);

  const phoneIconStyle = useMemo(() => {
    return {
      height: phoneIconHeight,
      width: phoneIconWidth,
      top: phoneIconTop,
      right: phoneIconRight,
      bottom: phoneIconBottom,
      left: phoneIconLeft,
      maxWidth: phoneIconMaxWidth,
      overflow: phoneIconOverflow,
      maxHeight: phoneIconMaxHeight,
    };
  }, [
    phoneIconHeight,
    phoneIconWidth,
    phoneIconTop,
    phoneIconRight,
    phoneIconBottom,
    phoneIconLeft,
    phoneIconMaxWidth,
    phoneIconOverflow,
    phoneIconMaxHeight,
  ]);

  const mapMarkerIconStyle = useMemo(() => {
    return {
      top: mapMarkerIconTop,
      left: mapMarkerIconLeft,
      width: mapMarkerIconWidth,
      height: mapMarkerIconHeight,
      overflow: mapMarkerIconOverflow,
      borderRadius: mapMarkerIconBorderRadius,
      backgroundColor: mapMarkerIconBackgroundColor,
    };
  }, [
    mapMarkerIconTop,
    mapMarkerIconLeft,
    mapMarkerIconWidth,
    mapMarkerIconHeight,
    mapMarkerIconOverflow,
    mapMarkerIconBorderRadius,
    mapMarkerIconBackgroundColor,
  ]);

  const footerLineStyle = useMemo(() => {
    return {
      height: footerLineHeight,
      width: footerLineWidth,
      top: footerLineTop,
      right: footerLineRight,
      bottom: footerLineBottom,
      left: footerLineLeft,
      backgroundColor: footerLineBackgroundColor,
      maxWidth: footerLineMaxWidth,
      overflow: footerLineOverflow,
      maxHeight: footerLineMaxHeight,
    };
  }, [
    footerLineHeight,
    footerLineWidth,
    footerLineTop,
    footerLineRight,
    footerLineBottom,
    footerLineLeft,
    footerLineBackgroundColor,
    footerLineMaxWidth,
    footerLineOverflow,
    footerLineMaxHeight,
  ]);

  return (
    <div className="footer" style={footerStyle}>
      <div className="copyright-2021-container">
        <p className="mercedes-benz-logo-is" style={copyright2021Style}>
          {copyright2021MBHouseInc}
        </p>
        <p className="mercedes-benz-logo-is" style={mercedesBenzLogoIsStyle}>
          {mercedesBenzLogoIsATradem}
        </p>
      </div>
      <div className="web-design-toronto" style={wEBDesignTorontoStyle}>
        {wEBDesignTorontoByVestraI}
      </div>
      <div className="footer-child" style={lineDivStyle} />
      <div className="div1" style={div1Style}>
        {" "}
        
      </div>
      <div className="unit-40-101-container" style={unit40101ContainerStyle}>
        <p className="mercedes-benz-logo-is" style={unit40101Style}>
          {unit40101ToroRd}
        </p>
        <p className="mercedes-benz-logo-is" style={northYorkONCanadaStyle}>
          {northYorkONCanadaM3J2Z1}
        </p>
      </div>
      <img
        className="logo-footer-icon"
        alt=""
        src={logoFooter}
        style={logoFooterIconStyle}
      />
      <div className="top-menu" style={topMenuStyle}>
        <MenuItem services="Services" showServices servicesColor="#000" />
        <MenuItem services="Tienda" showServices servicesColor="#000" />
        <MenuItem services="Blog Informativo" showServices servicesColor="#000" />
        <MenuItem services="Publicaciones" showServices servicesColor="#000" />
        <MenuItem services="Privacy Policy" showServices servicesColor="#000" />
      </div>
      <div className="facebook-icon" style={facebookIconStyle}>
        <div className="facebook-icon-child" style={rectangleDiv1Style} />
        <img className="path-icon" alt="" src={path} style={pathIconStyle} />
      </div>
      <img className="inst-icon" alt="" src={instIcon} style={instIconStyle} />

      <div className="footer-line" style={footerLineStyle} />
      <div className="telegram-icon">
        <div className="facebook-icon-child" />
        <img className="shape-icon" alt="" src="/shape.svg" />
      </div>
    </div>
  );
};

export default Footer;
