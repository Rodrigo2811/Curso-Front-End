let dados = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];


var xArray = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yArray = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];

var data = [{
  type: 'bar',
  x: xArray,
  y: yArray,


}];

var layout = { title: "Spending - Last 7 days" };

Plotly.newPlot("grafico", data, layout);

