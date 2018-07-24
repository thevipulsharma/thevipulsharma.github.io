function loadHeader(){
	file = "static/files/header.html";
	fileDisplayArea = document.getElementById("site-header");
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function(){
		if(rawFile.readyState === 4){
			if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                fileDisplayArea.innerHTML = allText;
            }
		}
	}
	rawFile.send(null);
}

function loadFooter(){
	file = "static/files/footer.html";
	fileDisplayArea = document.getElementById("site-footer");
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function(){
		if(rawFile.readyState === 4){
			if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                fileDisplayArea.innerHTML = allText;
            }
		}
	}
	rawFile.send(null);
}