
var foodMaker = function(taste,cons,temp){
  return{
    taste:taste,
    consistency:cons,
    temperature:temp
  }
}

var foodData = [
  foodMaker("spicy","chewy","warm"),
  foodMaker("bitter","soft","cold"),
  foodMaker("sweet","crunchy","hot"),
  foodMaker("tangy","mushy","lukewarm")
]

var foodTable = d3.select("body").append("table");

var foodRows = foodTable.selectAll("tr")
                        .data(foodData)
                        .enter()
                        .append("tr");

foodRows.append("td")
        .text(function(d){return d.taste});

foodRows.append("td")
        .text(function(d){return d.consistency});

foodRows.append("td")
        .text(function(d){return d.temperature});
