function gen_latest() {
	for (var i = 0; i < 1; i++) {
		var post_cont = document.createElement("div");
		post_cont.setAttribute("class", "post");
		var post_a = document.createElement("a");
		post_a.setAttribute("href", games_list[i].url);
		var thumb_cont = document.createElement("img");
		thumb_cont.setAttribute("src", games_list[i].thumb);
		thumb_cont.setAttribute("style", "float:left;");
		thumb_cont.setAttribute("class", "post_img");
		post_a.appendChild(thumb_cont);
		var post_h3 = document.createElement("h3");
		var post_h3_text = document.createTextNode(games_list[i].title);
		post_h3.appendChild(post_h3_text);
		var post_p_tag = document.createElement("p");
		var post_tag_i = document.createElement("i");
		var post_p_tag_text = document.createTextNode(games_list[i].tag);
		post_tag_i.appendChild(post_p_tag_text);
		post_p_tag.appendChild(post_tag_i);
		var post_p_date = document.createElement("p");
		var post_p_date_text = document.createTextNode((((String(games_list[i].date.getMonth()+1).concat("/")).concat(String(games_list[i].date.getDate()))).concat("/")).concat(String(games_list[i].date.getFullYear())));
		post_p_date.appendChild(post_p_date_text);
		post_a.appendChild(post_h3);
		post_a.appendChild(post_p_tag);
		post_a.appendChild(post_p_date);
		post_cont.appendChild(post_a);
		document.getElementById("games").appendChild(post_cont);
	}
}

gen_latest();