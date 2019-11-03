import theme from './../../style/theme';

const styles = {
	navBar:{
		height: 55,
		backgroundColor: theme.SECONDARY_COLOR,
		elevation: 2,
		paddingHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	rightNav:{
		flexDirection: 'row'
	},

	navItem:{
		marginLeft: 25
	},
	header:{
		fontSize: 24,
		color: theme.WHITE_COLOR
	},
	modal:{
		backgroundColor: 'white',
		alignItems: 'center',
		elevation:3,
		height: 55,
		justifyContent: 'center'
		},
	text:{
		color: 'green',
		marginTop: 10,
		},
	textInput: {
		width:250,
		height: 40,
		marginTop: 8,
		marginRight: 70,	
		fontSize: theme.FONT_SIZE_MEDIUM
	},
	icon:{
		marginRight:20,
		marginTop: 8,
	}
}
export default styles;