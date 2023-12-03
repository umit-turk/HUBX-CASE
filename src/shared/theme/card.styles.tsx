import { StyleSheet } from "react-native";


export const CardStyles = StyleSheet.create({
    paywallCard: {
        backgroundColor:'rgba(255, 255, 255, 0.08)',
        heigh:130,
        width:156,
        borderRadius:14,
        padding:16,
        marginTop:20,
    },
    questionCard: {
        width:240,
        height:164,
        position:'relative',
    },
    categoryCard: {
        flex: 1,
        height: 152, // İstenilen yükseklik
        marginVertical: 8, // Dikeyde boşluk
        marginHorizontal: 5, // Yatayda boşluk
        borderWidth:0.5,
        borderColor:'rgba(41, 187, 137, 0.18)',
        borderRadius:12,
        position:'relative',
    }
})