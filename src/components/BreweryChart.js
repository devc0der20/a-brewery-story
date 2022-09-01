import React from 'react';
import { useSelector } from "react-redux";
import Plot from 'react-plotly.js';

export default function BreweryChart() {
  

  const build_avg = (element) => (element.reduce((a, b) => (a + b), 0) / element.length)

  const breweries = useSelector(state => state.access.brewery)
  const ids = breweries.map(brewery => brewery.id )
  const averages = breweries.map(brewery => build_avg(brewery.rating))
  const top3 = [...averages].sort((a,b) => b-a).slice(0,3)
  console.log(top3);
  console.log(ids, averages);
  console.log(breweries);

  return(
    <>
      <Plot
        data={
          [  
            { type: 'bar',
            showlegend: true,
              x: ids, 
              y: top3
            },
          ]}
        layout={{ width: 320, height: 240, title: 'Top 3 Breweries' }}

      />
    </>
  )
};
