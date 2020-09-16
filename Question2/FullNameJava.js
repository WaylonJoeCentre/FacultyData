var getfullname = function(employee){
    return employee.firstName+" "+employee.lastName;
}

d3.select("body")
.append("div")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getfullname)