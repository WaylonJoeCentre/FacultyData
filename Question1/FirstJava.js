var getfirstname = function(firstname){
    return firstname.firstName;
}

d3.select("body")
    .append("div")
    .selectAll("h2")
    .data(employees)
    .enter()
    .append("h2")
    .text(getfirstname);