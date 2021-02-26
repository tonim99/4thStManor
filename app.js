// const eventsUrl =
// 	'https://spreadsheets.google.com/feeds/cells/1nzfnHjkdc41nBLJnMAjXmWc96OnL_W74xAOPnLvhFik/1/public/full?alt=json';

//show + hide menu functions
//why did I have to write two? It looks like the ternary is not working... 
const songs = [
	{
		title: 'Over You',
		artist: 'Beth Hart',
	},
	{
		title: 'I\'m the Only One',
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
		title: 'Don\'t Think Twice, It\'s All Right',
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
	{
		date: 'April 6, 2021',
		time: '7:00 pm',
		venue: 'The Lodge at Old Trail',
		public: false,
	},
	{
		date: 'July 15, 2021',
		time: '6:00 pm',
		venue: 'Greencroft Club',
		public: true,
	},
	{
		date: 'August 10, 2021',
		time: '7:00 pm',
		venue: 'The Lodge at Old Trail',
		public: false,
	},
	{
		date: 'September 23, 2021',
		time: '6:00 pm',
		venue: 'Greencroft Club',
		public: true,
	},
	{
		date: 'November 9, 2021',
		time: '7:00 pm',
		venue: 'The Lodge at Old Trail',
		public: false,
	},
];

const toggleMenu = (id) => {
    const menu = document.getElementById(id);
    menu.style.display = "none" ? "block" : "none"
}

const hideMenu = (id) => {
    const menu = document.getElementById(id);
    menu.style.display = "block" ? "none" : "block"
}

function createSongList(data) {
	const songList = document.getElementById('song__lists');
	const list = document.createElement('ul');
	console.log(list);
	songs.forEach((song) => {
		const li = document.createElement('li');
		const title = song.title;
		const artist = song.artist;
		li.classList.add('song');
		li.innerHTML = title + ' - ' + artist;
		list.appendChild(li);
	});
	songList.appendChild(list);
}
createSongList(songs);
