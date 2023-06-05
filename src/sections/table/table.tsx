import React from "react"
import "./table.css"

export const Table = () => {
    const [row, setRow] = React.useState(0);
    const [cell, setCell] = React.useState(0);

    return (
        <div className="table_container">
            <table id="field" onClick={(event: any)=>{
                setRow(event.target.parentElement.id)
                setCell(event.target.id)
            }}>
                <tbody>
                    <tr id="1">
                        <td id="1">1</td>
                        <td id="2">2</td>
                        <td id="3">3</td>
                    </tr>
                    <tr id="2">
                        <td id="1">4</td>
                        <td id="2">5</td>
                        <td id="3">6</td>
                    </tr>
                    <tr id="3">
                        <td id="1">7</td>
                        <td id="2">8</td>
                        <td id="3">9</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h3>Row: {row}, Cell: {cell}</h3>
        </div>
    )
}