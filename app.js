const eventsUrl =
	'https://spreadsheets.google.com/feeds/cells/1nzfnHjkdc41nBLJnMAjXmWc96OnL_W74xAOPnLvhFik/1/public/full?alt=json';

//show + hide menu functions
//why did I have to write two? It looks like the ternary is not working... 

function toggleMenu(id){
    const menu = document.getElementById(id);
    menu.style.display = "none" ? "block" : "none"
}

function hideMenu(id){
    const menu = document.getElementById(id);
    menu.style.display = "block" ? "none" : "block"
}
