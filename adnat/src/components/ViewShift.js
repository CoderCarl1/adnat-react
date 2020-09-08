import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios';

// Once a user joins an organisation they're redirected to this screen
const ViewShift = ({ name, sessionId, organisationId, userId }) => {

    const history = useHistory();
    const [organisationName, setOrganisationName] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");

    const headers = {
        "Authorization": sessionId,
        "Content-Type": "application/json"
    }

    // getting user input
    const [finishTime, setFinishTime] = useState("");
    const [breakLength, setBreakLength] = useState("");
    const [shiftDate, setShiftDate] = useState("");
    const [startTime, setStartTime] = useState("");

    // format date
    const [startDate, setStartDate] = useState("");
    function formatDate(string) {
        var options = { day: 'numeric', month: 'numeric', year: 'numeric'};
        return new Date(string).toLocaleDateString([],options);
    }

    // // sets all organisations
    // const [organisations, setOrganisations] = useState([]);
    
    // set all shifts
    const [shifts, setShifts] = useState([]);

    // rendering table
    const renderTableData = () => {
        return shifts.map((shift, key) => {
            const { id, userId, start, finish, breakLength} = shift
            return (
                <tr key={id}>
                    <td>{userId}</td>
                    <td>{formatDate(startDate)}</td>
                    <td>{start}</td>
                    <td>{finish}</td>
                    <td>{breakLength}</td>
                </tr>
            )
        })
    }

    const setOrganisationDetails = (organisations) => {
        let organisationData = organisations.filter(organisation => organisation.id === organisationId)
        console.log(organisationData)
            setHourlyRate(organisationData[0].hourlyRate)
            setOrganisationName(organisationData[0].name)
    } 

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
            history.push(`/view-shifts/${organisationId}`)
        })

    }

    // get organisations details
    useEffect(() => {
        axios.get("http://localhost:3000/organisations", {
            headers: headers
        })
        .then(response => {
            console.log(response.data);
            setOrganisationDetails(response.data);
        })
    }, [])

    // gets all shifts
    useEffect(() => {
        axios.get("http://localhost:3000/shifts", {
            headers: headers
        })
        .then(response => {
            console.log(response.data);
            setShifts(response.data);
            setStartDate(response.data.start);
        })
    }, [])

    return (
        <>
            <NavBar name={name}>{sessionId}</NavBar> 

            {/* {organisations.filter(organisation => organisation.id === organisationId).map(filteredName => (
                <h2>{filteredName.name}</h2>
                ))} */}
            <h2>{organisationName}</h2>

            <h4>Shifts</h4>

            <form onSubmit={createShift}>

                <table>
                        <tr>
                            <th>Employee name</th>                          
                            <th>Shift date</th>
                            <th>Start time</th>
                            <th>Finish time</th>
                            <th>Break length (minutes)</th>
                            <th>Hours Worked</th>
                            <th>Shift cost</th>
                        </tr>     

                        <tbody>
                            {renderTableData()}
                        </tbody>

                        
                        {/* <tr>
                            {shifts.map((shift, key)=> (<td key={key}>{shift.userId}</td>))}
                            {shifts.map((shift, key)=> (<td key={key}>{formatDate(startDate)}</td>))}
                            {shifts.map((shift, key)=> (<td key={key}>{shift.start}</td>))}
                            {shifts.map((shift, key)=> (<td key={key}>{shift.finish}</td>))}
                            {shifts.map((shift, key)=> (<td key={key}>{shift.breakLength}</td>))}
                        </tr> */}
                    
                        <tr>
                            <td>{name}</td>
                            <td><input type="datetime- local" className="input" name="shiftDate" value={shiftDate} onChange={e => setShiftDate(e.target.value)} required></input></td>
                            <td><input type="time" className="input" name="startTime" value={startTime} onChange={e => setStartTime(e.target.value)} required></input></td>
                            <td><input type="time" className="input" name="finishTime" value={finishTime} onChange={e => setFinishTime(e.target.value)} required></input></td>
                            <td><input type="number" className="input" name="breakLength" value={breakLength} onChange={e => setBreakLength(e.target.value)} ></input></td>
                            <td><input type="submit" value="Create Shift"></input></td>
                        </tr>
                </table>
            </form>           
        </>
)};

export default ViewShift;
