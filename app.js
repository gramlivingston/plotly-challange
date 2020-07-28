sampleData = "/samples.json"


  function getArrayMax(array){
    return Math.max.apply(null, array);
 }

function buildPlot() {
d3.json(sampleData).then((data) => {
    console.log("test")
    console.log(data)

        // Grab values from the data json object to build the plots
        var name = data.names[0];
        console.log(name);
        var sampleValues = data.samples[0].sample_values.slice(0, 10);
        var otuIds = data.samples[0].otu_ids.slice(0, 10);
        var otuLabels = data.samples[0].otu_labels.slice(0, 10);
        console.log(sampleValues);
        console.log(otuIds);
        console.log(otuLabels);


        var trace1 = {
            x: (sampleValues.reverse()),
            y: (0,1,2,3,4,5,6,7,8,9,10),
            type: "bar",
            orientation: 'h',
            marker: {
                color: 'rgba(55,128,191,0.6)',
                width: 1
              },
            };



          var graph = [trace1];
      
          var layout = {
            title: name,
            xaxis: {
              autorange: true,
              type: "linear"
            },
            yaxis: {
              autorange: true,
              type: "linear"
            },
          };
      
          Plotly.newPlot("bar", graph, layout);
      
        });
    };
    
    
buildPlot();

