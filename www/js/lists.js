function post(titleIn, tagIn, authorIn, dateIn, thumbIn, urlIn) {
	this.title = titleIn;
	this.tag = tagIn;
	this.author = authorIn;
	this.date = dateIn;
	this.thumb = thumbIn;
	this.url = urlIn;
}

var blog_list = [
new post("Hosting the Perfect Game Night", "Helpful tips for your next board game extravaganza.", "Tim Rice", new Date(2017,4-1,1), "http://www.partyhatpotato.com/blog/2017/4/img/monopoly.jpg", "http://www.partyhatpotato.com/blog/2017/4/perfect-family-game-night.html"),
new post("Love Letter Decision Tree", "How many different ways can a round of Love Letter unfold?", "Tim Rice", new Date(2017,3-1,26), "http://www.partyhatpotato.com/blog/2017/3/img/love-letter-decision-tree-thumb.jpg", "http://www.partyhatpotato.com/blog/2017/3/love-letter-decision-tree.html"),
new post("Abandoned Prototypes", '"Success consists of going from failure to failure without loss of enthusiasm." - Winston Churchill', "Tim Rice", new Date(2017,3-1,4), "http://www.partyhatpotato.com/blog/2017/3/img/miner-dice2.jpg", "http://www.partyhatpotato.com/blog/2017/3/abandoned-prototypes.html"),
new post("Next Era of Board Games (2/2)", "The rise of progressive board games.", "Tim Rice", new Date(2017,2-1,18), "http://www.partyhatpotato.com/blog/2017/2/img/netg2-thumb.jpg", "http://www.partyhatpotato.com/blog/2017/2/next-era-board-games-2.html"),
new post("Next Era of Board Games (1/2)", "The growing prevalence of smartphones and mobile apps in tabletop games.", "Tim Rice", new Date(2017,2-1,11), "http://www.partyhatpotato.com/blog/2017/2/img/netg1-thumb.jpg", "http://www.partyhatpotato.com/blog/2017/2/next-era-board-games-1.html"),
new post("5 Board Game Movie Ideas", "I would actually pay to see these movies.", "Tim Rice", new Date(2017,1-1,28), "http://www.partyhatpotato.com/blog/2017/1/img/5bgmi-thumb.jpg", "http://www.partyhatpotato.com/blog/2017/1/5-board-game-movie-ideas.html"),
new post("Board Games vs. Video Games", "Identifying the strengths and weaknesses of each medium.", "Tim Rice", new Date(2017,1-1,12), "http://www.partyhatpotato.com/blog/2017/1/img/bgvg_thumb.jpg", "http://www.partyhatpotato.com/blog/2017/1/board-games-vs-video-games.html"),
new post("Dominion's Hidden Lore", "A few theories about the history of the realm.", "Tim Rice", new Date(2016,12-1,28), "http://www.partyhatpotato.com/blog/2016/12/img/dominion-boxes.jpg", "http://www.partyhatpotato.com/blog/2016/12/dominion-hidden-lore.html"),
new post("Introduction", "The potato has launched.", "Tim Rice", new Date(2016,12-1,18), "http://www.partyhatpotato.com/blog/2016/12/img/game_shelf.jpg", "http://www.partyhatpotato.com/blog/2016/12/introduction.html")
];

var review_list = [
new post("Escape Review", "For those times when you need just a bit more panic in your life.", "Tim Rice", new Date(2017,3-1,11), "http://www.partyhatpotato.com/reviews/2017/3/img/escape-thumb.jpg", "http://www.partyhatpotato.com/reviews/2017/3/escape-curse-temple-review.html"),
new post("Ca$h 'n Guns Review", "The glorious gangster gun game.", "Tim Rice", new Date(2017,2-1,25), "http://www.partyhatpotato.com/reviews/2017/2/img/cash-n-guns-box.jpg", "http://www.partyhatpotato.com/reviews/2017/2/cash-n-guns-review.html"),
new post("Galaxy Trucker Review", "It’s like building a beautiful snowman, and then watching it melt.", "Tim Rice", new Date(2017,2-1,4), "http://www.partyhatpotato.com/reviews/2017/2/img/galaxy-trucker-box.jpg", "http://www.partyhatpotato.com/reviews/2017/2/galaxy-trucker-review.html"),
new post("Citadels Review", "Every great city needs a few assassins and thieves.", "Tim Rice", new Date(2017,1-1,21), "http://www.partyhatpotato.com/reviews/2017/1/img/citadels-box.jpg", "http://www.partyhatpotato.com/reviews/2017/1/citadels-review.html"),
new post("Battle Line Review", "I just need to draw this one card.....Dang. I'll get it next time for sure though.", "Tim Rice", new Date(2017,1-1,5), "http://www.partyhatpotato.com/reviews/2017/1/img/battle-line-box.jpg", "http://www.partyhatpotato.com/reviews/2017/1/battle-line-review.html"),
new post("King of Tokyo Review", "Giant monsters, giant dice, giant fun.", "Tim Rice", new Date(2016,12-1,19), "http://www.partyhatpotato.com/reviews/2016/12/img/kot_box.jpg", "http://www.partyhatpotato.com/reviews/2016/12/king-of-tokyo-review.html")
];

var games_list = [
new post("SHAREagraphs", "The creative writing party game.", "Tim Rice", new Date(2017,1-1,8), "http://www.partyhatpotato.com/games/img/share-agraphs_thumb.jpg", "http://www.partyhatpotato.com/games/share-agraphs.html")
];