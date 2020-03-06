// from data.js
const tableData = data;
const input = d3.select("input")
const button = d3.select("button")

const table = d3.select("#ufo-table")
console.log(table)
table.html("")

const thead = table.append("thead")
const head_row = thead.append("tr")
const tbody = table.append("tbody")

head_row.append("th").text("Date")
head_row.append("th").text("City")
head_row.append("th").text("State")
head_row.append("th").text("Country")
head_row.append("th").text("Shape")
head_row.append("th").text("Duration")
head_row.append("th").text("Comments")

data.forEach(record => {
    let row = tbody.append("tr")
    row.append("td").text(record.datetime)
    row.append("td").text(record.city)
    row.append("td").text(record.state)
    row.append("td").text(record.country)
    row.append("td").text(record.shape)
    row.append("td").text(record.duration)
    row.append("td").text(record.comments)
})
const handler = function(){

    let filterCond = input.property("value")

    const table = d3.select("#ufo-table")
    table.html("")

    const thead = table.append("thead")
    const head_row = thead.append("tr")
    const tbody = table.append("tbody")

    head_row.append("th").text("Date")
    head_row.append("th").text("City")
    head_row.append("th").text("State")
    head_row.append("th").text("Country")
    head_row.append("th").text("Shape")
    head_row.append("th").text("Duration")
    head_row.append("th").text("Comments")

    data.filter(record => record.datetime === filterCond).forEach(record => {
        let row = tbody.append("tr")
        row.append("td").text(record.datetime)
        row.append("td").text(record.city)
        row.append("td").text(record.state)
        row.append("td").text(record.country)
        row.append("td").text(record.shape)
        row.append("td").text(record.duration)
        row.append("td").text(record.comments)

    })
}

input.on("change", handler)
input.on("click", handler)


// // YOUR CODE HERE!
