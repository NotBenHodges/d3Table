
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
  foodMaker("sweet","crunchy","hot")
]

var foodTable = d3.select("body").append("table");
var foodRows = foodTable.selectAll("tr")
                        .data(foodData)
                        .enter()
                        .append("tr");
