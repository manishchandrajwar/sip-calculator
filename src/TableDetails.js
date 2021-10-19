import React from 'react'
import './App.css'
import {Table, TableCell, TableHead, TableRow} from "@material-ui/core"

function TableDetails(props) {
    return (
        <Table style={{width: "100%", border: '2px solid #CCC'}} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell className="ETableCellText"><strong> Total Interest (%)</strong></TableCell>
                <TableCell className="ETableCellText"><strong>{"\u20B9"} {props.totalInterst.toLocaleString()} </strong></TableCell>
                
            </TableRow>
            <TableRow>
                <TableCell className="ETableCellText"><strong> Deposit Amount </strong></TableCell>
                <TableCell className="ETableCellText"><strong>{"\u20B9"} {props.totalDeposit.toLocaleString()} </strong></TableCell>
                
            </TableRow>
            <TableRow>
                <TableCell className="ETableCellText"><strong> Maturity Amount </strong></TableCell>
                <TableCell className="ETableCellText"><strong>	{"\u20B9"}  {props.matureamt.toLocaleString()} </strong>
                </TableCell>
               
            </TableRow>
        </TableHead>
        </Table>
    )
}

export default TableDetails
