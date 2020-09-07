import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios';

// Once a user joins an organisation they're redirected to this screen
const ViewShift = ({ name, sessionId, organisationId, userId }) => {

    const history = useHistory();

    const headers = {
        "Authorization": sessionId,
        "Content-Type": "application/json"
    }

    const [finishTime, setFinishTime] = useState("");
    const [breakLength, setBreakLength] = useState("");
    const [shiftDate, setShiftDate] = useState("");
    const [startTime, setStartTime] = useState("");

    // // sets all organisations
    // const [organisations, setOrganisations] = useState([]);
    
    // set all shifts
    const [shifts, setShifts] = useState([]);

    // create shift
    const createShift = event => {
        event.preventDefault();
        axios.post("http://localhost:3000/shifts", {
            userId: userId,
            start: startTime,
            finish: finishTime,
            breakLength: breakLength,
        }, {
            headers: headers
        })
        .then(response => {
            console.log(response.data);
            // history.push()
        })

    }

    // gets all shifts
    useEffect(() => {
        axios.get("http://localhost:3000/shifts", {
            headers: headers
        })
        .then(response => {
            console.log(response.data);
            setShifts(response.data);
        })
    }, [])

    return (
        <>
            <NavBar name={name}>{sessionId}</NavBar> 

            {/* {organisations.filter(organisation => organisation.id === organisationId).map(filteredName => (
                <h2>{filteredName.name}</h2>
                ))} */}
            <h2>ORGANISATIONS NAME</h2>

            <h4>Shifts</h4>

            <form onSubmit={createShift}>
                <table>
                    <tbody>
                        <tr>
                            <td>Employee name</td>                          
                            <td>Shift date</td>
                            <td>Start time</td>
                            <td>Finish time</td>
                            <td>Break length (minutes)</td>
                            <td>Hours Worked</td>
                            <td>Shift cost</td>
                        </tr>

                        <tr>
                            {shifts.map((shift, key)=> (
                                <td key={key}>{shift.userId}</td>
                                // <td key={key}>{shift.start}</td>
                                // <td key={key}>{shift.finish}</td>
                                // <td key={key}>{shift.breakLength}</td>
                            ))}
                        </tr>
                    
                        <tr>
                            <td>Employees name to go here</td>
                            <td><input type="date" className="input" name="shiftDate" value={shiftDate} onChange={e => setShiftDate(e.target.value)} required></input></td>
                            <td><input type="time" className="input" name="startTime" value={startTime} onChange={e => setStartTime(e.target.value)} required></input></td>
                            <td><input type="time" className="input" name="finishTime" value={finishTime} onChange={e => setFinishTime(e.target.value)} required></input></td>
                            <td><input type="number" className="input" name="breakLength" value={breakLength} onChange={e => setBreakLength(e.target.value)} ></input></td>
                            <td><input type="submit" value="Create Shift"></input></td>
                        </tr>
                    </tbody>
                </table>
            </form>           
        </>
)};

export default ViewShift;
