import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    loginContainer: {
        backgroundColor: '#7641BD',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForm: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        height: '60%',
        width: '75%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 35,
        color: '#7641BD',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    createAccountContainer: {
        backgroundColor: '#FB963C',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    createAccountForm: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '80%',
        width: '75%',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 7
    },
    createAccountText: {
        fontSize: 30,
        color: '#FB963C',
        fontWeight: 'bold',
        marginBottom: 40,
    },
    changePasswordContainer: {
        backgroundColor: '#535c68',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    changePasswordForm: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: '60%',
        width: '85%',
        borderRadius: 7,
    },
    changePasswordText: {
        fontSize: 25,
        color: '#535c68',
        fontWeight: 'bold',
        marginBottom: 35,
    },
    workoutsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    motivationalQuote: {
        width: '100%',
        textAlign: 'center',
        fontSize: 30,
        margin: 20
    },
    headerStyle: {
        backgroundColor: '#7641BD'
    },
    headerTitleStyle: {
        color: '#FFFFFF'
    },
    workoutPlanEditorContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
        height: '100%',
    },
    workoutList: {
        height: '75%',
        width: '80%',
        marginTop: 40,
        //  borderColor: '#6B6767',
        //  borderWidth: 3,
        marginBottom: 20,
    },
    workoutEditorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    exerciseList: {
        height: '70%',
        width: '80%',
        borderColor: '#6B6767',
        borderTopWidth: 3,
        marginTop: 10,
        padding: 15
    },
    dashboardContainer: {
        alignItems: 'center',
        height: '100%'
    },
    workoutTrackerContainer: {
        alignItems: 'center',
        height: '100%'
    },
    button: {
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        height: 35,
        justifyContent: 'center',
        padding: 7
    },
    textBox: {
        borderColor: '#6B6767',
        borderWidth: 2,
        borderRadius: 3,
        marginBottom: 15,
        padding: 10,
        height: 40,
        width: '75%',
    },
    errorBox: {
        borderColor: '#f70015',
        borderWidth: 2,
        borderRadius: 3,
        marginBottom: 15,
        padding: 10,
        height: 40,
        width: '75%',
    },
    hideableView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    metadataList: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
    },
    modalView: {
        margin: '10%',
        marginTop: '35%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    editorModal: {
        margin: '10%',
        marginTop: '30%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    metadataModal: {
        margin: '10%',
        marginTop: '35%',
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5  
    },
    workoutType: {
        margin: '10%',
        marginTop: '70%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    friendsContainer: {
        alignItems: 'center',
        height: '100%'
    },
    friendsHeader: {
        backgroundColor: '#7641BD',
        paddingTop: 30,
        borderBottomWidth: 2,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 15,
        marginBottom: 30,
        flexDirection: 'row'
    },
    motivationalQuote: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    lightTextHeader: {
        color: 'black',
        fontFamily: "Avenir-Heavy",
        fontSize: 20
    },
    lightTextBase: {
        color: 'black',
        fontFamily: "Avenir-HeavyOblique",
        fontSize: 20
    },
})