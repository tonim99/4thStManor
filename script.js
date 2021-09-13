const topBtn = document.getElementsByClassName('.top-btn')

const songs = [
	{
		title: 'Over You',
		artist: 'Beth Hart',
	},
	{
		title: "I'm the Only One",
		artist: 'Melissa Etheridge',
	},
	{
		title: 'Imagine',
		artist: 'John Lennon',
	},
	{
		title: 'Mona Lisas & Mad Hatters',
		artist: 'Elton John',
	},
	{
		title: 'The One That Got Away',
		artist: 'The Civil Wars',
	},
	{
		title: 'Be Careful of My Heart',
		artist: 'Tracy Chapman',
	},
	{
		title: 'Blackbird',
		artist: 'The Beatles',
	},
	{
		title: 'Tangled Up in Blue',
		artist: 'Bob Dylan',
	},
	{
		title: 'Ordinary World',
		artist: 'Duran Duran',
	},
	{
		title: 'Soul Shine',
		artist: 'The Allman Brothers Band',
	},
	{
		title: "I'm In Here",
		artist: 'Sia',
	},
	{
		title: 'Dust In the Wind',
		artist: 'Kansas',
	},
	{
		title: 'Eavesdrop',
		artist: 'The Civil Wars',
	},
	{
		title: 'Because the Night',
		artist: '10,000 Maniacs',
	},
	{
		title: 'Morning Has Broken (Piano Solo)',
		artist: 'Rick Wakeman',
	},
	{
		title: 'Guilty',
		artist: 'Bonnie Raitt',
	},
	{
		title: 'Closer to Fine',
		artist: 'Indigo Girls',
	},
	{
		title: 'Somebody to Love',
		artist: 'Jefferson Airplane',
	},
	{
		title: 'Always Remember Us This Way',
		artist: 'Lady Gaga',
	},
	{
		title: 'Eleanor Rigby (Piano Solo)',
		artist: 'Rick Wakeman',
	},
	{
		title: 'Black Horse & a Cherry Tree',
		artist: 'KT Tunstall',
	},
	{
		title: 'Crazy',
		artist: 'Patsy Cline',
	},
	{
		title: 'Give Me One Reason',
		artist: 'Tracy Chapman',
	},
	{
		title: 'Take Me Away From Here',
		artist: 'TM & LK Original',
	},
	{
		title: 'The Sound of Silence',
		artist: 'Simon & Garfunkel',
	},
	{
		title: 'Things We Said Today',
		artist: 'The Beatles',
	},
	{
		title: "Don't Think Twice, It's All Right",
		artist: 'Bob Dylan',
	},
	{
		title: 'Spring Valley Serenade (Piano Solo)',
		artist: 'LK Original',
	},
	{
		title: 'Runaway',
		artist: 'Bonnie Raitt',
	},
	{
		title: 'Bring Me Some Water',
		artist: 'Melissa Etheridge',
	},
];

const events = [
	// {
	// 	date: 'April 6, 2021',
	// 	time: '7:00 pm',
	// 	public: 'Private Event',
	// },
	// {
	// 	date: 'July 15, 2021',
	// 	time: '6:00 pm',
	// 	venue: 'Greencroft Club',
	// 	public: 'Open to the Public',
	// },
	// {
	// 	date: 'August 10, 2021',
	// 	time: '7:00 pm',
	// 	public: 'Private Event',
	// },
	// {
	// 	date: 'September 23, 2021',
	// 	time: '6:00 - 8:00 p.m.',
	// 	venue: 'Greencroft Club',
	// 	public: 'Open to the Public',
	// },
	{
		date: 'October 2, 2021',
		time: '7:00 - 11:00 p.m.',
		venue: 'Benny Stivale\'s',
		public: 'Open to the Public',
	},
	{
		date: 'November 9, 2021',
		time: '7:00 p.m.',
		public: 'Private Event',
	},
];

const toggleMenu = (id) => {
	const menu = document.getElementById(id);
	menu.classList.toggle('active')
};

function createSongList(data) {
	const songList = document.getElementById('song__lists');
	songs.forEach((song) => {
		const songDiv = document.createElement('div');
		const titleDiv = document.createElement('div');
		const artistDiv = document.createElement('div');
		songDiv.classList.add('song');
		titleDiv.classList.add('title');
		artistDiv.classList.add('artist');
		songDiv.appendChild(titleDiv);
		songDiv.appendChild(artistDiv);
		titleDiv.innerHTML = song.title;
		artistDiv.innerHTML = song.artist;
		songList.appendChild(songDiv);
	});
}
createSongList(songs);

function createEventList(data) {
	const eventList = document.getElementById('events');
	events.forEach((event) => {
		const eventDiv = document.createElement('div');
		const dateDiv = document.createElement('div');
		const venueDiv = document.createElement('div');
		eventDiv.classList.add('event');
		dateDiv.classList.add('date');
		venueDiv.classList.add('venue');
		eventDiv.appendChild(dateDiv);
		eventDiv.appendChild(venueDiv);
		dateDiv.innerHTML = event.date + '<br>' + event.time;
		!event.venue
			? (venueDiv.innerHTML = event.public)
			: (venueDiv.innerHTML = event.venue + '<br>' + event.public);
		eventList.appendChild(eventDiv);
	});
}
createEventList(events);
