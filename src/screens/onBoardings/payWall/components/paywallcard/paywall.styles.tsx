import { StyleSheet } from "react-native";
import { TextStyles } from "../../../../../shared/theme/text.styles";
import { ThemeVariables } from "../../../../../shared/theme/variables";


export const PayWallStyles = StyleSheet.create({
    iconCard:{
        backgroundColor:'rgba(0, 0, 0, 0.24)',
        width:36,
        height:36,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginBottom:16,
    },
    title:{
        fontSize:20,
        fontWeight:TextStyles.fontWeight('500').fontWeight,
        lineHeight:24,
        letterSpacing:0.38,
        color:ThemeVariables.white,
        fontFamily:TextStyles.rubik.fontFamily,
    },
    subTitle:{
        fontSize:13,
        fontWeight:TextStyles.fontWeight('400').fontWeight,
        lineHeight:18,
        letterSpacing:-0.08,
        color:'rgba(255, 255, 255, 0.7)',
        fontFamily:TextStyles.rubik.fontFamily,
    }
})
