// ---------------------------------------------------
// create the function for onLoad
function init() {
  // select dropdown menu element
  const dropdown = d3.select("#selDataset");

  // Reading the samples.json data
const samplesData = d3.json("data/samples.json").then((samplesData)  => {
  // console.log(samplesData);

      // populate id's in the dropdown menu
      samplesData.names.forEach(function(name) {
          dropdown
          .append("option")
          .text(name)
          .property("value");
      })
        
  })
}

init();


// functin to build plot
// function buildPlot() {
//   d3.json("data/samples.json").then((jsonData)  => {
//     const traceT = {
//       labels: Object.keys(samplesData.name),
//       values: Object.values(samplesData.names),
//       type: 'pie'
    // }
//     

// Reading the samples.json data
const samplesData = d3.json("data/samples.json").then((samplesData)  => {
    console.log(samplesData);  
    console.log(samplesData.names);
    console.log(samplesData.metadata);
    console.log(samplesData.samples);
   
      const bacteria = samplesData.samples.map(bacteria => bacteria.otu_labels);
      console.log(bacteria);

      const selectedSubj = samplesData.samples.filter(subject => subject.id == 940);
      console.log(selectedSubj);


});

// create traces
const trace1 = {
  x: samplesData.names,
  y: samplesData.metadata,
  orientation: 'h',
  type: 'bar',
  name: 'Top 10 Bacteria - All',
  
};


// create data array for plot 1
const data = [trace1];

// define the plot layout
const layout = {
title: "Top 10 Bacteria - All",
xaxis: {title: 'x-axis'},
yaxis: {title: "y-axis"}
};



// insert Plots
Plotly.newPlot("bar1", data, layout);


// create traces
const trace2 = {
  x: samplesData.names,
  y: samplesData.metadata,
  orientation: 'h',
  type: 'bar',
  name: 'Top 10 Bacteria - All',
  
};


// create data array for plot 2
const data2 = [trace2];

// define the plot layout
const layout2 = {
title: "Top 10 Bacteria - Selected Subject",
xaxis: {title: 'x-axis'},
yaxis: {title: "y-axis"}
};



// insert Plots
Plotly.newPlot("bar2", data2, layout2);



