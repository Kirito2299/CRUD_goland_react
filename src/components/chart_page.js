import React from "react";
import axios from 'axios';


import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';

class MyCharts extends React.Component{

    state = {data: []};

    componentDidMount(){
        try {
            setInterval(()=>{
                axios.get('http://localhost:8000/getall').then((data)=>{
                    console.log(data.data.Items);
                    this.setState({
                        data : data.data.Items
                    })
                })
            }, 300000);
          } catch(e) {
            console.log(e);
          }
          
        
    }

    render() {
        return(
            <div style={{margin: 'auto', width: '90%'}}>
                <LineChart width={1400} height={700} data={this.state.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="CupcakeCount.N" stroke="#ff0000" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis type="category" dataKey="Month.S" minTickGap="10" padding={{ right: 20 }}>
                        <Label
                            dy = {20}
                            dx = {-40}
                            value="Year & Month"
                            position="insideRight"
                            padding={{ top: 12 }}
                            angle={0}
                            style={{ textAnchor: 'middle' }}
                            />
                            
                    </XAxis>
                    <YAxis type="number">
                        <Label
                        value="CupCake Count"
                        position="insideLeft"
                        angle={-90}
                        style={{ textAnchor: 'middle' }}
                        />
                    </YAxis>
                </LineChart>
            </div>
        )
    }
}

export default MyCharts;