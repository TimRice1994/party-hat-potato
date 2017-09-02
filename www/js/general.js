var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function gen_header() {
	var div_logo = document.createElement("div");
	div_logo.setAttribute("div", "logo");
	var a_index = document.createElement("a");
	a_index.setAttribute("href", "http://www.partyhatpotato.com/index.html");
	var img_potato = document.createElement("img");
	img_potato.setAttribute("src", "http://www.partyhatpotato.com/img/PartyHatPotato.png");
	img_potato.setAttribute("id", "potato");
	a_index.appendChild(img_potato);
	div_logo.appendChild(a_index);
	
	var nav_cont = document.createElement("nav");
	var h1_cont = document.createElement("h1");
	var a_index2 = document.createElement("a");
	a_index2.setAttribute("href", "http://www.partyhatpotato.com/index.html");
	var title_text = document.createTextNode("Party Hat Potato");
	a_index2.appendChild(title_text);
	h1_cont.appendChild(a_index2);
	nav_cont.appendChild(h1_cont);
	var ul_cont = document.createElement("ul");
	
	var li_blog = document.createElement("li");
	var a_blog = document.createElement("a");
	a_blog.setAttribute("href", "http://www.partyhatpotato.com/blog/index.html");
	a_blog.setAttribute("id", "a_blog");
	a_blog_text = document.createTextNode("Blog");
	a_blog.appendChild(a_blog_text);
	li_blog.appendChild(a_blog);
	ul_cont.appendChild(li_blog);
	
	var li_reviews = document.createElement("li");
	var a_reviews = document.createElement("a");
	a_reviews.setAttribute("href", "http://www.partyhatpotato.com/reviews/index.html");
	a_reviews.setAttribute("id", "a_reviews");
	a_reviews_text = document.createTextNode("Reviews");
	a_reviews.appendChild(a_reviews_text);
	li_reviews.appendChild(a_reviews);
	ul_cont.appendChild(li_reviews);
	
	var li_games = document.createElement("li");
	var a_games = document.createElement("a");
	a_games.setAttribute("href", "http://www.partyhatpotato.com/games/index.html");
	a_games.setAttribute("id", "a_games");
	a_games_text = document.createTextNode("Games");
	a_games.appendChild(a_games_text);
	li_games.appendChild(a_games);
	ul_cont.appendChild(li_games);
	
	var li_contact = document.createElement("li");
	var a_contact = document.createElement("a");
	a_contact.setAttribute("href", "http://www.partyhatpotato.com/contact/index.html");
	a_contact.setAttribute("id", "a_contact");
	a_contact_text = document.createTextNode("Contact");
	a_contact.appendChild(a_contact_text);
	li_contact.appendChild(a_contact);
	ul_cont.appendChild(li_contact);
	
	var li_rss = document.createElement("li");
	li_rss.setAttribute("id", "li_rss");
	var rss_a = document.createElement("a");
	rss_a.setAttribute("href", "http://www.partyhatpotato.com/feed.xml");
	var rss_img = document.createElement("img");
	rss_img.setAttribute("src", "http://www.partyhatpotato.com/img/rss-button.jpg");
	rss_img.setAttribute("style", "width:25px;");
	rss_a.appendChild(rss_img);
	li_rss.appendChild(rss_a);
	ul_cont.appendChild(li_rss);
	
	nav_cont.appendChild(ul_cont);
	var header_cont = document.getElementsByTagName("header")[0]
	header_cont.appendChild(div_logo);
	header_cont.appendChild(nav_cont);
}

function gen_footer() {
	var footer_p = document.createElement("p");
	footer_p.setAttribute("id", "foot");
	var footer_text = document.createTextNode("\xA9 ".concat(String(new Date().getFullYear())));
	footer_p.appendChild(footer_text);
	document.getElementsByTagName("footer")[0].appendChild(footer_p);
}

function gen_aside() {
	var div_logo_links = document.createElement("div");
	div_logo_links.setAttribute("id", "logo_links");
	
	var logo_link_label = document.createElement("h3");
	logo_link_label.setAttribute("style", "margin-left:5px;");
	var u_tag0 = document.createElement("u")
	var logo_link_label_text = document.createTextNode("Connect");
	u_tag0.appendChild(logo_link_label_text);
	logo_link_label.appendChild(u_tag0);
	div_logo_links.appendChild(logo_link_label);
	
	var a_bgg = document.createElement("a");
	a_bgg.setAttribute("href", "https://boardgamegeek.com/blog/6218/party-hat-potato");
	var img_bgg = document.createElement("img");
	img_bgg.setAttribute("src", "http://www.partyhatpotato.com/img/bgg-logo.jpg");
	a_bgg.appendChild(img_bgg);
	div_logo_links.appendChild(a_bgg);
	
	var a_fb = document.createElement("a");
	a_fb.setAttribute("href", "https://www.facebook.com/partyhatpotato");
	var img_fb = document.createElement("img");
	img_fb.setAttribute("src", "http://www.partyhatpotato.com/img/facebook-logo.png");
	a_fb.appendChild(img_fb);
	div_logo_links.appendChild(a_fb);
	
	var a_twit = document.createElement("a");
	a_twit.setAttribute("href", "https://twitter.com/partyhatpotato");
	var img_twit = document.createElement("img");
	img_twit.setAttribute("src", "http://www.partyhatpotato.com/img/twitter-logo.png");
	a_twit.appendChild(img_twit);
	div_logo_links.appendChild(a_twit);
	
	var recent_blogs_cont = document.createElement("div");
	recent_blogs_cont.setAttribute("class", "recent");
	var recent_blogs_title = document.createElement("h3");
	var u_tag1 = document.createElement("u");
	var recent_blogs_title_text = document.createTextNode("Recent Posts");
	u_tag1.appendChild(recent_blogs_title_text);
	recent_blogs_title.appendChild(u_tag1);
	var recent_blogs_ul = document.createElement("ul");
	for (var i = 0; i < 5; i++) {
		var blog_li = document.createElement("li");
		var blog_a = document.createElement("a");
		blog_a.setAttribute("href", blog_list[i].url);
		var blog_title = document.createTextNode(blog_list[i].title);
		blog_a.appendChild(blog_title);
		blog_li.appendChild(blog_a);
		recent_blogs_ul.appendChild(blog_li);
	}
	recent_blogs_cont.appendChild(recent_blogs_title);
	recent_blogs_cont.appendChild(recent_blogs_ul);
	
	var recent_reviews_cont = document.createElement("div");
	recent_reviews_cont.setAttribute("class", "recent");
	var recent_reviews_title = document.createElement("h3");
	var u_tag2 = document.createElement("u");
	var recent_reviews_title_text = document.createTextNode("Recent Reviews");
	u_tag2.appendChild(recent_reviews_title_text);
	recent_reviews_title.appendChild(u_tag2);
	var recent_reviews_ul = document.createElement("ul");
	for (var i = 0; i < 5; i++) {
		var review_li = document.createElement("li");
		var review_a = document.createElement("a");
		review_a.setAttribute("href", review_list[i].url);
		var review_title_str = review_list[i].title.substring(0, review_list[i].title.length - 7);
		var review_title = document.createTextNode(review_title_str);
		review_a.appendChild(review_title);
		review_li.appendChild(review_a);
		recent_reviews_ul.appendChild(review_li);
	}
	recent_reviews_cont.appendChild(recent_reviews_title);
	recent_reviews_cont.appendChild(recent_reviews_ul);
	
	var games_cont = document.createElement("div");
	games_cont.setAttribute("style", "padding-top: 15px;")
	var my_games_title = document.createElement("h3");
	var u_tag3 = document.createElement("u");
	var my_games_title_text = document.createTextNode("My Games");
	u_tag3.appendChild(my_games_title_text);
	my_games_title.appendChild(u_tag3);
	games_cont.appendChild(my_games_title);
	
	var dig_deep_a = document.createElement("a");
	dig_deep_a.setAttribute("href", "http://www.partyhatpotato.com/games/dig_deep.html");
	var dig_deep_img = document.createElement("img");
	dig_deep_img.setAttribute("src", "http://www.partyhatpotato.com/img/dig_deep_icon.jpg");
	dig_deep_img.setAttribute("style", "width: 215px;")
	dig_deep_a.appendChild(dig_deep_img);
	games_cont.appendChild(dig_deep_a);
	
	var shareagraphs_a = document.createElement("a");
	shareagraphs_a.setAttribute("href", "http://www.partyhatpotato.com/games/share-agraphs.html");
	var shareagraphs_img = document.createElement("img");
	shareagraphs_img.setAttribute("src", "http://www.partyhatpotato.com/img/share-agraphs_icon.jpg");
	shareagraphs_img.setAttribute("style", "width: 215px;")
	shareagraphs_a.appendChild(shareagraphs_img);
	games_cont.appendChild(shareagraphs_a);
	
	var aside_cont = document.getElementsByTagName("aside")[0];
	aside_cont.appendChild(div_logo_links);
	aside_cont.appendChild(recent_blogs_cont);
	aside_cont.appendChild(recent_reviews_cont);
	aside_cont.appendChild(games_cont);
}

gen_header();
gen_aside();
gen_footer();