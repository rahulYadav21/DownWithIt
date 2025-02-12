import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		// flex: 1, // Ensure the container fills the screen
		// justifyContent: 'center',
		// alignItems: 'center',
		// backgroundColor: 'lightgray',
		flex: 1,
	},
	image: {
		// width: 300, // Set width (adjust as needed)
		// height: 200, // Set height (adjust as needed)
		resizeMode: 'cover', // Ensure the image scales properly
		justifyContent: 'center',
		height: 250,
		// width: 200,
		width: '100%',
		// flex: 1,
		margin: 'auto',
	},
	topSection: {
		height: 400,
		marginHorizontal: 10,
	},
	bottomSection: {
		// height: '300',
		margin: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: '100%',
		height: 50,
		paddingHorizontal: 20,
		backgroundColor: 'white',
		borderRadius: 50,
		margin: 10,
		borderWidth: 1,
	},
	button: {
		backgroundColor: '#28b57a',
		width: 200,
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
		elevation: 3, // Shadow effect for Android
		shadowColor: '#000', // Shadow effect for iOS
		shadowOffset: { width: 1, height: 3 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		marginTop: 30,
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	topText: {
		fontSize: 25,
		textAlign: 'center',
		textDecorationLine: 'underline',
		paddingBottom: 10,
	},
	imageView: {
		height: 200,
		width: 200,
		borderRadius: 150,
		aspectRatio: 'auto',
	},
	ScrollView: {
		// height: 700,
		flexGrow: 1,
	},
	headerTitle: {
		fontSize: 40,
		textAlign: 'center',
	},
	heading: {
		fontSize: 30,
		textAlign: 'center',
	},
	landingContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	landingLogo: {
		height: 200,
		width: 200,
		borderColor: 'black',
		borderBlockColor: 'black',
		border: 1,
	},
	landingButton:{
		backgroundColor:'red',
		color:'black',
	},
});

export default styles;
