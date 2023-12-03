import { StyleSheet } from "react-native";
import { ThemeVariables } from "../../theme/variables";

const basePointStyle = {
  width: 6,
  height: 6,
  backgroundColor: 'rgba(19, 35, 27, 0.25)',
  borderRadius: 10,
};

const activePointStyle = {
  true: {
    ...basePointStyle,
    backgroundColor: ThemeVariables.main,
    width: 10,
    height: 10,
  },
  false:{
    ...basePointStyle,
  }
};

export const PointStyles = StyleSheet.create({
  activePoint: (active) => {
    return {
      ...(activePointStyle[active] || {}), // Eğer activePointStyle[active] varsa, sadece onun özellikleri eklenir
    };
  },
});
