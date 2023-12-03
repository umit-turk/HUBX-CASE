import { StyleSheet } from "react-native";
import { ThemeVariables } from "../../../../shared/theme/variables";
import { TextStyles } from "../../../../shared/theme/text.styles";


export const SearchStyles = StyleSheet.create({
    container: {
        paddingHorizontal:24,
        paddingBottom:24,
        borderBottomWidth:0.5,
        borderBottomColor:'rgba(60, 60, 67, 0.1)',
        position:'relative',
        zIndex:2,
        backgroundColor:'rgba(246, 246, 246, 1)',
      },
      title:{
        color: ThemeVariables.main,
        fontFamily:TextStyles.rubik.fontFamily,
        letterSpacing:0.07,
        lineHeight:18.96,
        fontWeight:TextStyles.fontWeight('400').fontWeight,
        fontSize:16,
      },
      time:{
        color: ThemeVariables.main,
        fontFamily:TextStyles.rubik.fontFamily,
        letterSpacing:0.35,
        lineHeight:28,
        fontWeight:TextStyles.fontWeight('500').fontWeight,
        fontSize:24,
        marginTop:6,
        marginBottom:14,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.2,
        borderRadius: 12,
        borderColor: 'rgba(60, 60, 67, 0.25)',
        zIndex:2,
        backgroundColor:'rgba(255, 255, 255, 0.88)',
      },
      iconContainer: {
        paddingLeft:18,
      },
      input: {
        flex: 1,
        fontFamily:TextStyles.rubik.fontFamily,
        fontSize:15.5,
        letterSpacing:0.07,
        paddingLeft:12,
        fontWeight:TextStyles.fontWeight('400').fontWeight,
        zIndex:2,
      },
      bottomLeftImage:{
        position:'absolute',
        left:0,
        bottom:0,
      },
      bottomRightImage:{
        position:'absolute',
        right:0,
        bottom:0,
      },
})