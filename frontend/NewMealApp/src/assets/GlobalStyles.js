import { StyleSheet} from 'react-native'

export default  StyleSheet.create({
    allCentered:{ //maked children centered on view
        alignItems: 'center',
        justifyContent: 'center',
    },
    roundedBox:{ 
        borderRadius: 15,
    },
    blackBox:{ //create a black box for testing
        height: 100,
        width: 100,
        backgroundColor: 'black'
    },
    yCentered:{
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})