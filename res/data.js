const posts = [
	{
		id: 1, 
		postType: 'listing',
		poster: {
			name: 'Scoooby Doo', 
			email: 'fongohmartin@gmail.com', 
			phone_number: '+237679574561',
			avatar: require('./../res/img/avatar/1.jpg'),
		}, 
		location: {
			quarter: 'Makepe', 
			city: 'Douala', 
			state: 'Litoral', 
			country: 'Cameroon', 
		},
		description: 'Hello, 2 bedrooms apartment to let in Makepe, about 20 mins walk from the main road. In fenced compound with constant water flow...', 
		propertyType: 'House', 
		houseType: 'apartment', 
		bedrooms: 2, 
		bathrooms: 1, 
		kitchen: 1, 
		parlor: 1, 
		amenities: ['fence', 'balcony', 'constant water', 'security'], 
		price: 100000, 
		caution: 1,
		billingCycle: 'month', 
		images: [
			require('./../res/img/posts/4.jpg'), 
			require('./../res/img/posts/3.jpg'), 
			require('./../res/img/posts/2.jpg'), 
			require('./../res/img/posts/1.jpg'), 
		], 
		created_at: '2019-20-11 22:23:22',
	}, 
	{
		id: 2, 
		postType: 'listing',
		poster: {
			name: 'Square spongy', 
			email: 'squarespongy@gmail.com', 
			phone_number: '+237782992923',
			avatar: require('./../res/img/avatar/2.jpg'),
		}, 
		location: {
			quarter: 'Logpom', 
			city: 'Douala', 
			state: 'Litoral', 
			country: 'Cameroon', 
		},
		description: 'Studio to let in logpom, PV for more details.', 
		propertyType: 'House', 
		houseType: 'studio', 
		bedrooms: 1, 
		bathrooms: 1, 
		kitchen: 1, 
		parlor: 1, 
		price: 70000, 
		billingCycle: 'month', 
		created_at: '2019-10-01 12:40:22',
	}, 
	{
		id: 3, 
		postType: 'request',
		poster: {
			name: 'Marina estates limited', 
			email: 'layembunkur@gmail.com', 
			phone_number: '+237679574561',
			avatar: require('./../res/img/avatar/4.jpg'),
		}, 
		location: {
			quarter: 'GRA', 
			city: 'Buea', 
			state: 'South West', 
			country: 'Cameroon', 
		},
		description: 'In search of a duplex in Buea. Should be in a secure location with constant waterflow. PV me if you have any.', 
		propertyType: 'House', 
		houseType: 'apartment', 
		bedrooms: '4+',  
		created_at: '2019-03-02 10:42:26',
	}
]; 
const post = posts[0];

const agents = [
	{
		image: require('./img/avatar.png'),
		name: 'Martin Laurence',
		location: 'Buea',
		
	},
	{
		image: require('./img/avatar2.png'),
		name: 'Bessong Martin',
		location: 'Douala',
	},
	{
		image: require('./img/avatar.png'),
		name: 'Abdoul Bessong',
		location: 'Yaounde',
	},
	{
		image: require('./img/avatar2.png'),
		name: 'Bendip Abdoul',
		location: 'Kumba',
	},
	{
		image: require('./img/avatar.png'),
		name: 'Obama Bendip',
		location: 'Muea',
	},
	{
		image: require('./img/avatar2.png'),
		name: 'Trump Obama',
		location: 'Diedo',
	},
	{
		image: require('./img/avatar.png'),
		name: 'Biya Trump',
		location: 'Limbe',
	},
	{
		image: require('./img/avatar2.png'),
		name: 'Mandela Biya',
		location: 'Tiko',
	},
	{
		image: require('./img/avatar.png'),
		name: 'Martin Luther',
		location: 'Bokwango',
	},
	{
		image: require('./img/avatar2.png'),
		name: 'Bill Gates',
		location: 'Edea',
	},
]; 
const agent = agents[0];

const orders = [
	{}, {}
]; 
const order = orders[0];



export {
	posts, 
	post, 

	agents,
	agent, 

	orders, 
	order,
}