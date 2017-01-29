function gen_latest() {
	var blog_list_idx = 0;
	var review_list_idx = 0;
	var games_list_idx = 0;
	var use_blog = false;
	var use_review = false;
	var use_games = false;
	for (var i = 0; i < 6; i++) {
		use_blog = false;
		use_review = false;
		use_games = false;
		if ((blog_list_idx < blog_list.length) && (review_list_idx < review_list.length) && (games_list_idx < games_list.length)) {
			if ((blog_list[blog_list_idx].date > review_list[review_list_idx].date) && (blog_list[blog_list_idx].date > games_list[games_list_idx].date)) {
				use_blog = true;
			}
			else if ((review_list[review_list_idx].date > blog_list[blog_list_idx].date) && (review_list[review_list_idx].date > games_list[games_list_idx].date)) {
				use_review = true;
			}
			else if ((games_list[games_list_idx].date > blog_list[blog_list_idx].date) && (games_list[games_list_idx].date > review_list[review_list_idx].date)) {
				use_games = true;
			}
		}
		else if ((blog_list_idx < blog_list.length) && (review_list_idx < review_list.length)) {
			if (blog_list[blog_list_idx].date > review_list[review_list_idx].date) {
				use_blog = true;
			}
			else if (review_list[review_list_idx].date > blog_list[blog_list_idx].date) {
				use_review = true;
			}
		}
		else if ((blog_list_idx < blog_list.length) && (games_list_idx < games_list.length)) {
			if (blog_list[blog_list_idx].date > games_list[games_list_idx].date) {
				use_blog = true;
			}
			else if (games_list[games_list_idx].date > blog_list[blog_list_idx].date) {
				use_games = true;
			}
		}
		else if ((review_list_idx < review_list.length) && (games_list_idx < games_list.length)) {
			if (review_list[review_list_idx].date > games_list[games_list_idx].date) {
				use_review = true;
			}
			else if (games_list[games_list_idx].date > review_list[review_list_idx].date) {
				use_games = true;
			}
		}
		else if (blog_list_idx < blog_list.length) {
			use_blog = true;
		}
		else if (review_list_idx < review_list.length) {
			use_review = true;
		}
		else if (games_list_idx < games_list.length) {
			use_games = true;
		}

		var post_cont = document.createElement("div");
		post_cont.setAttribute("class", "post");
		var post_a = document.createElement("a");
		if (use_blog) {
			post_a.setAttribute("href", blog_list[blog_list_idx].url);
		}
		else if (use_review) {
			post_a.setAttribute("href", review_list[review_list_idx].url);
		}
		else if (use_games) {
			post_a.setAttribute("href", games_list[games_list_idx].url);
		}
		var thumb_cont = document.createElement("img");
		if (use_blog) {
			thumb_cont.setAttribute("src", blog_list[blog_list_idx].thumb);
		}
		else if (use_review) {
			thumb_cont.setAttribute("src", review_list[review_list_idx].thumb);
		}
		else if (use_games) {
			thumb_cont.setAttribute("src", games_list[games_list_idx].thumb);
		}
		thumb_cont.setAttribute("style", "float:left;");
		thumb_cont.setAttribute("class", "post_img");
		
		var post_h3 = document.createElement("h3");
		if (use_blog) {
			var post_h3_text = document.createTextNode(blog_list[blog_list_idx].title);
		}
		else if (use_review){
			var post_h3_text = document.createTextNode(review_list[review_list_idx].title);
		}
		else if (use_games) {
			var post_h3_text = document.createTextNode(games_list[games_list_idx].title);
		}
		post_h3.appendChild(post_h3_text);
		var post_p_tag = document.createElement("p");
		var post_tag_i = document.createElement("i");
		if (use_blog) {
			var post_p_tag_text = document.createTextNode(blog_list[blog_list_idx].tag);
		}
		else if (use_review) {
			var post_p_tag_text = document.createTextNode(review_list[review_list_idx].tag);
		}
		else if (use_games) {
			var post_p_tag_text = document.createTextNode(games_list[games_list_idx].tag);
		}
		post_tag_i.appendChild(post_p_tag_text);
		post_p_tag.appendChild(post_tag_i);
		var post_p_date = document.createElement("p");
		if (use_blog) {
			var post_p_date_text = document.createTextNode((((String(blog_list[blog_list_idx].date.getMonth()+1).concat("/")).concat(String(blog_list[blog_list_idx].date.getDate()))).concat("/")).concat(String(blog_list[blog_list_idx].date.getFullYear())));
		}
		else if (use_review){
			var post_p_date_text = document.createTextNode((((String(review_list[review_list_idx].date.getMonth()+1).concat("/")).concat(String(review_list[review_list_idx].date.getDate()))).concat("/")).concat(String(review_list[review_list_idx].date.getFullYear())));
		}
		else if (use_games){
			var post_p_date_text = document.createTextNode((((String(games_list[games_list_idx].date.getMonth()+1).concat("/")).concat(String(games_list[games_list_idx].date.getDate()))).concat("/")).concat(String(games_list[games_list_idx].date.getFullYear())));
		}
		post_p_date.appendChild(post_p_date_text);
		post_a.appendChild(post_h3);
		post_a.appendChild(thumb_cont);
		post_a.appendChild(post_p_tag);
		post_a.appendChild(post_p_date);
		
		post_cont.appendChild(post_a);
		document.getElementById("latest_home").appendChild(post_cont);
		if (use_blog) {
			blog_list_idx++;
		}
		else if (use_review) {
			review_list_idx++;
		}
		else if (use_games) {
			games_list_idx++;
		}
	}
}

gen_latest();