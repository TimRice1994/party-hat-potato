function post(titleIn, tagIn, authorIn, dateIn, thumbIn, urlIn) {
	this.title = titleIn;
	this.tag = tagIn;
	this.author = authorIn;
	this.date = dateIn;
	this.thumb = thumbIn;
	this.url = urlIn;
}

function review_post(titleIn, tagIn, authorIn, dateIn, thumbIn, urlIn, scoreIn) {
	this.title = titleIn;
	this.tag = tagIn;
	this.author = authorIn;
	this.date = dateIn;
	this.thumb = thumbIn;
	this.url = urlIn;
	this.score = scoreIn;
}

var blog_list = [
new post("Ridiculous Box Sizes", "A study to determine how oversized board game boxes really are.", "Tim Rice", new Date(2018,2-1,11), "http://www.partyhatpotato.com/blog/2018/2/img/wasted_shelf_space_thumb-compressor.jpg", "http://www.partyhatpotato.com/blog/2018/2/wasted-shelf-space.html"),
new post("One Year Retrospective", "Celebrating a year of partyhatpotato.com", "Tim Rice", new Date(2017,12-1,18), "http://www.partyhatpotato.com/blog/2017/12/img/one-year-thumb-compressor.jpg", "http://www.partyhatpotato.com/blog/2017/12/one-year-retrospective.html"),
new post("Board Game Achievements", "A random list of extra challenges for some of my favorite games.", "Tim Rice", new Date(2017,11-1,25), "http://www.partyhatpotato.com/blog/2017/11/img/board-game-achievements-thumb-compressor.jpg", "http://www.partyhatpotato.com/blog/2017/11/board-game-achievements.html"),
new post("Mega Hit Board Games", "What do the most successful hobby board games of the past few decades have in common?", "Tim Rice", new Date(2017,7-1,29), "http://www.partyhatpotato.com/blog/2017/7/img/mega-hits-thumb-compressor.jpg", "http://www.partyhatpotato.com/blog/2017/7/mega-hits-board-game-industry.html"),
new post("Designer vs. Players", "Discussing a fundamental dilemma for board game designers: what can we expect from players?", "Tim Rice", new Date(2017,7-1,8), "http://www.partyhatpotato.com/blog/2017/7/img/designer-vs-players-thumb-compressor.jpg", "http://www.partyhatpotato.com/blog/2017/7/designer-vs-players.html"),
new post("Most Common Game Words", "Measuring and analyzing the most frequently used words in BoardGameGeek game descriptions.", "Tim Rice", new Date(2017,5-1,24), "http://www.partyhatpotato.com/blog/2017/5/img/codenames-thumb.jpg", "http://www.partyhatpotato.com/blog/2017/5/most-common-board-game-words.html"),
new post("Host a Perfect Game Night", "Helpful tips for your next board game extravaganza.", "Tim Rice", new Date(2017,4-1,1), "http://www.partyhatpotato.com/blog/2017/4/img/monopoly.jpg", "http://www.partyhatpotato.com/blog/2017/4/perfect-family-game-night.html"),
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
new review_post("Junk Art Review", "This jagged, unstable structure is sure to please the critics.", "Tim Rice", new Date(2018,1-1,15), "http://www.partyhatpotato.com/reviews/2018/1/img/junk-art-box-compressor.jpg", "http://www.partyhatpotato.com/reviews/2018/1/junk-art-review.html", 4.5),
new review_post("Biblios Review", "Is there anything cooler than book collecting?", "Tim Rice", new Date(2017,12-1,3), "http://www.partyhatpotato.com/reviews/2017/12/img/biblios_thumb-compressor.jpg", "http://www.partyhatpotato.com/reviews/2017/12/biblios-review.html", 4.5),
new review_post("Camel Up Review", "Or is it Camel Cup? Could it be Amel Cup? What’s an amel?", "Tim Rice", new Date(2017,8-1,26), "http://www.partyhatpotato.com/reviews/2017/8/img/camel_up_box-compressor.jpg", "http://www.partyhatpotato.com/reviews/2017/8/camel-up-review.html", 3.5),
new review_post("The Great Dalmuti Review", "The game where you become a peasant, suffer from taxation, and celebrate economic inequality!", "Tim Rice", new Date(2017,7-1,15), "http://www.partyhatpotato.com/reviews/2017/7/img/great-dalmuti-thumb-compressor.jpg", "http://www.partyhatpotato.com/reviews/2017/7/great-dalmuti-review.html", 3),
new review_post("Revolution! Review", "Money can’t buy you happiness...but force and blackmail might.", "Tim Rice", new Date(2017,6-1,9), "http://www.partyhatpotato.com/reviews/2017/6/img/revolution-box.jpg", "http://www.partyhatpotato.com/reviews/2017/6/revolution-review.html", 4),
new review_post("Hey, That's My Fish! Review", "The fish-gorging fiesta.", "Tim Rice", new Date(2017,4-1,15), "http://www.partyhatpotato.com/reviews/2017/4/img/hey-thats-my-fish-box.jpg", "http://www.partyhatpotato.com/reviews/2017/4/hey-thats-my-fish-review.html", 4.5),
new review_post("Escape Review", "For those times when you need just a bit more panic in your life.", "Tim Rice", new Date(2017,3-1,11), "http://www.partyhatpotato.com/reviews/2017/3/img/escape-thumb.jpg", "http://www.partyhatpotato.com/reviews/2017/3/escape-curse-temple-review.html", 4),
new review_post("Ca$h 'n Guns Review", "The glorious gangster gun game.", "Tim Rice", new Date(2017,2-1,25), "http://www.partyhatpotato.com/reviews/2017/2/img/cash-n-guns-box.jpg", "http://www.partyhatpotato.com/reviews/2017/2/cash-n-guns-review.html", 4),
new review_post("Galaxy Trucker Review", "It’s like building a beautiful snowman, and then watching it melt.", "Tim Rice", new Date(2017,2-1,4), "http://www.partyhatpotato.com/reviews/2017/2/img/galaxy-trucker-box.jpg", "http://www.partyhatpotato.com/reviews/2017/2/galaxy-trucker-review.html", 5),
new review_post("Citadels Review", "Every great city needs a few assassins and thieves.", "Tim Rice", new Date(2017,1-1,21), "http://www.partyhatpotato.com/reviews/2017/1/img/citadels-box.jpg", "http://www.partyhatpotato.com/reviews/2017/1/citadels-review.html", 2),
new review_post("Battle Line Review", "I just need to draw this one card.....Dang. I'll get it next time for sure though.", "Tim Rice", new Date(2017,1-1,5), "http://www.partyhatpotato.com/reviews/2017/1/img/battle-line-box.jpg", "http://www.partyhatpotato.com/reviews/2017/1/battle-line-review.html", 4.5),
new review_post("King of Tokyo Review", "Giant monsters, giant dice, giant fun.", "Tim Rice", new Date(2016,12-1,19), "http://www.partyhatpotato.com/reviews/2016/12/img/kot_box.jpg", "http://www.partyhatpotato.com/reviews/2016/12/king-of-tokyo-review.html", 4)
];

var games_list = [
new post("Dig Deep", "Roll dice, find gems, make money.", "Tim Rice", new Date(2017,9-1,2), "http://www.partyhatpotato.com/games/img/dig_deep_components-compressor.jpg", "http://www.partyhatpotato.com/games/dig_deep.html"),
new post("SHAREagraphs", "The creative writing party game.", "Tim Rice", new Date(2017,1-1,8), "http://www.partyhatpotato.com/games/img/share-agraphs_thumb.jpg", "http://www.partyhatpotato.com/games/share-agraphs.html")
];