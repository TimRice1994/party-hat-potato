function gen_archive() {
	var archive_obj = {};
	for (var i = 0; i < review_list.length; i++) {
		var first_letter = String(review_list[i].title.charAt(0));
		if (!(first_letter in archive_obj)) {
			archive_obj[first_letter] = [];
			var sorted_firsts = Object.keys(archive_obj).sort();
			var new_archive_obj = {};
			for (var l = 0; l < sorted_firsts.length; l++) {
				new_archive_obj[sorted_firsts[l]] = archive_obj[sorted_firsts[l]];
			}
			archive_obj = new_archive_obj;
		}
		archive_obj[first_letter].push(i);
	}
	
	for (var first in archive_obj) {
		var button_accordion = document.createElement("button");
		button_accordion.setAttribute("class", "accordion");
		var button_accordion_text = document.createTextNode(first);
		button_accordion.appendChild(button_accordion_text);
		var ul_panel_panel1 = document.createElement("ul");
		ul_panel_panel1.setAttribute("class", "panel panel1");
		var sorted_titles = [];
		for (var post_num in archive_obj[first]) {
			sorted_titles.push(review_list[archive_obj[first][post_num]].title.substring(0, review_list[archive_obj[first][post_num]].title.length - 7));
		}
		sorted_titles.sort();

		for (var j = 0; j < sorted_titles.length; j++) {
			for (var k = 0; k < archive_obj[first].length; k++) {
				if (review_list[archive_obj[first][k]].title.substring(0, review_list[archive_obj[first][k]].title.length - 7) == sorted_titles[j]) {
					var title_li = document.createElement("li");
					var title_a = document.createElement("a");
					title_a.setAttribute("href", review_list[archive_obj[first][k]].url);
					title_a_text = document.createTextNode(sorted_titles[j]);
					title_a.appendChild(title_a_text);
					title_li.appendChild(title_a);
					ul_panel_panel1.appendChild(title_li);
				}
			}
		}
		document.getElementById("archive").appendChild(button_accordion);
		document.getElementById("archive").appendChild(ul_panel_panel1);
	}
	
	var acc = document.getElementsByClassName("accordion");
	for (var k = 0; k < acc.length; k++) {
		acc[k].onclick = function(){
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		}
	}
}
				
function gen_latest() {
	for (var i = 0; i < 3; i++) {
		var post_cont = document.createElement("div");
		post_cont.setAttribute("class", "post");
		var post_a = document.createElement("a");
		post_a.setAttribute("href", review_list[i].url);
		var thumb_cont = document.createElement("img");
		thumb_cont.setAttribute("src", review_list[i].thumb);
		thumb_cont.setAttribute("style", "float:left;height:160px;");
		thumb_cont.setAttribute("class", "post_img");
		post_a.appendChild(thumb_cont);
		var post_h3 = document.createElement("h3");
		var post_h3_text = document.createTextNode(review_list[i].title.substring(0, review_list[i].title.length - 7));
		post_h3.appendChild(post_h3_text);
		var post_p_tag = document.createElement("p");
		var post_tag_i = document.createElement("i");
		var post_p_tag_text = document.createTextNode(review_list[i].tag);
		post_tag_i.appendChild(post_p_tag_text);
		post_p_tag.appendChild(post_tag_i);
		var post_p_date = document.createElement("p");
		var post_p_date_text = document.createTextNode((((String(review_list[i].date.getMonth()+1).concat("/")).concat(String(review_list[i].date.getDate()))).concat("/")).concat(String(review_list[i].date.getFullYear())));
		post_p_date.appendChild(post_p_date_text);
		post_a.appendChild(post_h3);
		post_a.appendChild(post_p_tag);
		post_a.appendChild(post_p_date);
		post_cont.appendChild(post_a);
		document.getElementById("latest_reviews").appendChild(post_cont);
	}
}

gen_archive();
gen_latest();