import React, {useState, useEffect} from 'react';
import './App.css';
import {withStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Typography } from '@material-ui/core';
import TableDetails from './TableDetails';
import { Table, TableCell, TableRow } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import {Pie} from "react-chartjs-2"
import SliderMarks from './SliderMarks';

const PrettoSlider = withStyles({
  root: {color: "BLUE", height:10},
  thumb: {height:25, width: 25, backgroundColor: "white",
  border: '3px solid black', marginTop: -9, marginLeft: -9},
  track: {height:10, borderRadius: 4},
  rail: {height: 10, borderRadius:4},
})(Slider)

function App() {

  const [pAmount, setpAmount]  = useState(100); //monthly installment
  const [interest, setInterest] = useState(5) //interest
  const [duration, setDuration] = useState(1) //duration year
  const [totalDeposit, setTotalDeposit] = useState(0)
  const [totalInterst, settotalInterst] = useState(0)
  const [matureamt, setMatureamt] = useState(0)
  // const maxValue = 6000000;
  // const intMax = 20;
  // const maxDuration = 360;
  
  
  useEffect (()=>{
    let i;
    i = interest/(100*12);

    let FV, y;

   
    y = duration*12;
    FV = pAmount * [(1+i)**y-1]*(1+i)/i //total formulae
    let totalAmount = y*pAmount;
    setTotalDeposit(Math.round(totalAmount))
    setMatureamt(Math.round(FV))
    settotalInterst(Math.round(FV-totalAmount))
    

  },[duration,interest,pAmount])



  return (
    <center><div className="App">
    <div className="CalApp" width="60%">
    <h2 className="CalHeading"><u>SIP CALCULATOR</u></h2> 
    
    <div>
   
   <Typography> Monthly Installment </Typography>
   <TextField id="outlined-basic" label={"\u20B9"} variant="outlined" size="small" 
     value={pAmount} onChange={(event)=>{setpAmount(event.target.value)}}
   />

    {/* <Input type="number" value={pAmount} onChange={(event, vAmt)=>{setpAmount(vAmt)}}
    defaultValue={pAmount} max={maxValue} align="center"/> */}
      
      {/* <Typography> Monthly Installment </Typography>
      <PrettoSlider value={pAmount} onChange={(event, vAmt)=>{setpAmount(vAmt)}}
        defaultValue={pAmount} max={maxValue}
      /> */}
    </div>
    <br/>
    <div>
      <Typography> Number Of Years </Typography>
      <PrettoSlider value={duration} onChange={(event, vDur)=>{setDuration(vDur)}}
        defaultValue={duration} step={1} min={1} max={20} valueLabelDisplay="auto"
        aria-labelledby="discrete-slider-custom" marks={SliderMarks.marksYear}
      />
    </div>
    <br/>
    <div>
      <Typography> Interest Rate </Typography>
      <PrettoSlider value={interest} onChange={(event, vInt)=>{setInterest(vInt)}}
        defaultValue={interest} step={0.1} min={1} max={30} valueLabelDisplay="auto"
      />
    </div>
    <br/>
    <Table>
      <TableRow>
        <TableCell>
          <TableDetails matureamt={matureamt} totalDeposit={totalDeposit} totalInterst={totalInterst} />
        </TableCell>
        <TableCell style={{width: "50%", height: "50%"}}>
                    <Pie 
                       data={{
                           labels: ['Total Interest', 'Total Amount'],
                           datasets: [{
                               data: [totalInterst, totalDeposit ],
                               backgroundColor: ['rgb(251, 183, 80)','rgb(137, 214, 255)']
                           }]
                       }}
                       width={100}
                       height={100}
                    />
                </TableCell>
      </TableRow>
    
    </Table>
    </div>
    
    </div></center>
  );
}

export default App;
