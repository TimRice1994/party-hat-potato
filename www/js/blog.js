function gen_archive() {
	var archive_obj = {};
	for (var i = blog_list.length-1; i >= 0; i--) {
		var year_str = String(blog_list[i].date.getFullYear());
		if (!(year_str in archive_obj)) {
			archive_obj[year_str] = {};
		}
		var month_str = String(blog_list[i].date.getMonth()+1);
		if (!(month_str in archive_obj[year_str])) {
			archive_obj[year_str][month_str] = [];
		}
		archive_obj[year_str][month_str].push(i);
	}
	
	for (var year in archive_obj) {
		if (archive_obj.hasOwnProperty(year)) {
			var button_accordion = document.createElement("button");
			button_accordion.setAttribute("class", "accordion");
			var button_accordion_text = document.createTextNode(year);
			button_accordion.appendChild(button_accordion_text);
			var ul_panel_panel1 = document.createElement("ul");
			ul_panel_panel1.setAttribute("class", "panel panel1");
			for (var month in archive_obj[year]) {
				if (archive_obj[year].hasOwnProperty(month)) {
					var ul_panel_panel1_li = document.createElement("li");
					var button_accordion_month = document.createElement("button");
					button_accordion_month.setAttribute("class", "accordion");
					var button_accordion_month_text = document.createTextNode(month_names[parseInt(month-1)]);
					button_accordion_month.appendChild(button_accordion_month_text);
					var div_panel_panel2 = document.createElement("div");
					div_panel_panel2.setAttribute("class", "panel panel2");
					var div_panel_panel2_ul = document.createElement("ul");
					for (var j = 0; j < archive_obj[year][month].length; j++) {
						post_li = document.createElement("li");
						post_a = document.createElement("a");
						post_a.setAttribute("href", blog_list[archive_obj[year][month][j]].url);
						post_text = document.createTextNode(blog_list[archive_obj[year][month][j]].title);
						post_a.appendChild(post_text);
						post_li.appendChild(post_a);
						div_panel_panel2_ul.appendChild(post_li);
					}
					div_panel_panel2.appendChild(div_panel_panel2_ul);
					ul_panel_panel1_li.appendChild(button_accordion_month);
					ul_panel_panel1_li.appendChild(div_panel_panel2);
					ul_panel_panel1.appendChild(ul_panel_panel1_li);
				}
			}
			document.getElementById("archive").appendChild(button_accordion);
			document.getElementById("archive").appendChild(ul_panel_panel1);
		}
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
		post_a.setAttribute("href", blog_list[i].url);
		var thumb_cont = document.createElement("img");
		thumb_cont.setAttribute("src", blog_list[i].thumb);
		thumb_cont.setAttribute("style", "float:left;");
		thumb_cont.setAttribute("class", "post_img");
		var post_h3 = document.createElement("h3");
		var post_h3_text = document.createTextNode(blog_list[i].title);
		post_h3.appendChild(post_h3_text);
		var post_p_tag = document.createElement("p");
		var post_tag_i = document.createElement("i");
		var post_p_tag_text = document.createTextNode(blog_list[i].tag);
		post_tag_i.appendChild(post_p_tag_text);
		post_p_tag.appendChild(post_tag_i);
		var post_p_date = document.createElement("p");
		var post_p_date_text = document.createTextNode((((String(blog_list[i].date.getMonth()+1).concat("/")).concat(String(blog_list[i].date.getDate()))).concat("/")).concat(String(blog_list[i].date.getFullYear())));
		post_p_date.appendChild(post_p_date_text);
		post_a.appendChild(post_h3);
		post_a.appendChild(thumb_cont);
		post_a.appendChild(post_p_tag);
		post_a.appendChild(post_p_date);
		post_cont.appendChild(post_a);
		document.getElementById("latest_blogs").appendChild(post_cont);
	}
}

gen_archive();
gen_latest();