import React, { useState} from 'react'
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2'
import Select from 'react-select';
var test = [
  { value: [12,13,14,15], label: 'vivek' },
  { value: [1,11,2,3], label: 'vikas' },
  { value: [10,2,13,4], label: 'arun' },
  { value: [5,16,7,18], label: 'shivraj'}
]
var test1 = [
  { value: [12,13,14,15], label: 'role1' },
  { value: [1,11,2,3], label: 'role2' },
  { value: [10,2,13,4], label: 'role3' },
  { value: [5,16,7,18], label: 'role4'}
]
var test2 = [
  { value: [12,13,14,15], label: 'abc' },
  { value: [1,11,2,3], label: 'def' },
  { value: [10,2,13,4], label: 'ghi' },
  { value: [5,16,7,18], label: 'jkl'}
]
const BarChart = () => {
const [dataSet,setDataSet] = useState([]);
const [selectedOption,setSelectedOption] = useState([]);
const handleChange = (e,test) => {
  setDataSet(e.value);
  let findIndex = test.findIndex(x => x.label === e.label)
  setSelectedOption(findIndex);
}
  return (
    <div className="row">
      <div className="col-md-4">             
      <Select
      placeholder="Select Option"
      value={test[selectedOption]}
      options={test} // set list of the data
      onChange={e => handleChange(e,test)} // assign onChange function
/>
</div>
<div className="col-md-4">
<Select
            placeholder="Select Option"
            value={test1[selectedOption]}
            options={test1} // set list of the data
            onChange={e => handleChange(e,test1)} // assign onChange function
/>
</div>
<div className="col-md-4">
<Select
            placeholder="Select Option"
            value={test2[selectedOption]}
            options={test2} // set list of the data
            onChange={e => handleChange(e,test2)} // assign onChange function
/>
</div>
      <Bar
        data={{
          labels: ['Jan', 'Feb', 'March', 'April'],
          datasets: [
            {
              label: 'product',
              data: dataSet,
              backgroundColor:'blue',
              borderWidth: 1,
            }
          ],
        }}
        height={100}
        width={300}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart