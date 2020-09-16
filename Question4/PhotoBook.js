var getlink = function(link){
    return link.photo;
}

d3.select("body")
.append("div")
.selectAll("img")
.data(employees)
.enter()
.append("img")
.attr("src",getlink)
.text(getlink)