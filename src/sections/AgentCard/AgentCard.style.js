
import theme from './../../style/theme';
const pagePadding = 13;
const styles = {
	container: {
		backgroundColor: theme.WHITE_COLOR, 
		flex:1
	}, 

	sectionContainer: {
		paddingHorizontal: pagePadding,
		paddingVertical: 10,
		flex: 1, 
		flexDirection: 'row',
	},
	avaterContainer: {
		marginRight: 10,
	}, 
	avatarImage: {
		marginTop: 4,
		width: 50, 
		height: 50,
		borderRadius: 90
	},  
	name: {
		color: theme.DARK_COLOR, 
		fontSize: theme.FONT_SIZE_LARGE,
		flex:1
	},

	textSection: {
		flex: 4,
		paddingHorizontal: pagePadding,
		borderBottomWidth: 0.5,
		borderColor: theme.LIGHT_COLOR,
	},

	summaryContainer: {
		paddingHorizontal: pagePadding,
		marginBottom: 10,
		paddingVertical: 10,
		backgroundColor: '#00000008'
	}, 

	location: {
		lineHeight: theme.FONT_SIZE_NORMAL * (120/80), 
		color: theme.LIGHT_COLOR,
		// Ideally, the line height should be in the range of 120%-145% of the font size. 
		//A line height that is less than that makes the text look cramped and harder to read. 
		//When the line-height lies in the ideal range each line of text has its own space and room to breathe and everything becomes greatly legible.Feb 21, 2018
	},

}

export default styles;