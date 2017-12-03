/*function gen_archive() {
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
}*/

function gen_archive() {
	var table = document.createElement("table");
	table.setAttribute("class", "sortable");
	table.setAttribute("id", "archive_table");
	
	var head_row = document.createElement("tr");
	var title_th = document.createElement("th");
	title_th.setAttribute("style", "width:60%");
	var title_th_text = document.createTextNode("Title");
	title_th.appendChild(title_th_text);
	head_row.appendChild(title_th);
	
	var date_th = document.createElement("th");
	date_th.setAttribute("style", "width:40%");
	var date_th_text = document.createTextNode("Post Date");
	date_th.appendChild(date_th_text);
	head_row.appendChild(date_th);
	
	table.appendChild(head_row);
	
	var tbody = document.createElement("tbody");
	for (var i = 0; i < blog_list.length; i++) {
		var row = document.createElement("tr");
		var cur_title = document.createElement("td");
		var cur_title_a = document.createElement("a");
		cur_title_a.setAttribute("href", blog_list[i].url);
		var cur_title_text = document.createTextNode(blog_list[i].title);
		cur_title_a.appendChild(cur_title_text);
		cur_title.appendChild(cur_title_a);
		row.appendChild(cur_title);
		
		var cur_date = document.createElement("td");
		var date_str = String(blog_list[i].date.getFullYear());
		if (blog_list[i].date.getMonth() + 1 < 10) {
			date_str = date_str.concat("0");
		}
		date_str = date_str.concat(String(blog_list[i].date.getMonth()+1));
		if (blog_list[i].date.getDate() < 10) {
			date_str = date_str.concat("0");
		}
		date_str = date_str.concat(String(blog_list[i].date.getDate()));
		cur_date.setAttribute("sorttable_customkey", date_str);
		var cur_date_text = document.createTextNode((((String(blog_list[i].date.getMonth()+1).concat("/")).concat(String(blog_list[i].date.getDate()))).concat("/")).concat(String(blog_list[i].date.getFullYear())));
		cur_date.appendChild(cur_date_text);
		row.appendChild(cur_date);
		
		tbody.appendChild(row);
	}
	table.appendChild(tbody);
	document.getElementById("archive").appendChild(table);
}

function gen_latest() {
	for (var i = 0; i < 4; i++) {
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