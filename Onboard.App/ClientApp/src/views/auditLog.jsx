import React, { useEffect } from 'react';
import './auditLog.css';
import AuditRecord from '../components/AuditLog/AuditRecord/auditRecord';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import Select from 'react-select';

function AuditLog() {
    const [auditRecordData, setAuditRecordData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const [selectedType, setSelectedType] = useState('all');
    //const filteredRecords = auditRecordData.filter(record => record.auditType === selectedType.value);

    //Select options
    const options = [
        { value: 'all', label: 'All' },
        { value: 'employee', label: 'Employee' },
        { value: 'audit', label: 'Audit' },
        { value: 'role', label: 'Role' },
        { value: 'module', label: 'Module' },
        { value: 'user', label: 'User' },
        { value: 'device', label: 'Device' },
        { value: 'project', label: 'Project' },
    ]

    //Fetch data to display
    const fetchData = () => {
        axios.get("https://localhost:7250/api/AuditLog/GetAllAuditLog").then(response => {
            setAuditRecordData(response.data);
        })
    }

    useEffect(() => {
        fetchData();
    })

    //Filter records
    const handleFilter = () => {

    }

    //Display current records
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = auditRecordData.slice(indexOfFirstRecord, indexOfLastRecord);

    //Display page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(auditRecordData.length / recordsPerPage); i++) {
        pageNumbers.push(i);
    }

    //Change select option
    const handleTypeSelction = (e) => {
        setSelectedType(e.value)
    }

    //Change to page
    const handlePageClick = (e) => {
        setCurrentPage(Number(e.target.id));
    }

    return (
        <React.StrictMode>
            <div id="auditContainer" className="col-11 mx-auto mt-5 py-2 bg-light">
                <div className="d-flex justify-content-around col-11 mx-auto px-4">
                    <div id="searchBar" className="col-8 d-flex m-3">
                        <input placeholder="enter the keyword you wanna search for" className="col-11 rounded py-2 px-3 border-0" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary py-2"><AiOutlineSearch size={24} /></button>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <Select options={options} defaultValue={options[0]} isSearchable={true} isClearable={true} className="col-12 py-2" onChange={handleTypeSelction} />
                    </div>
                </div>
                <div id="auditRecordContainer">
                    {currentRecords.map(Record =>
                        <AuditRecord key={Record.id} employee={Record.employeeId} description={Record.auditDescription} time={Record.timeOfChange} date={Record.dateOfChange} />
                    )}
                </div>
                <ul className="pagination justify-content-end mx-3 mt-3">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button id={number} onClick={handlePageClick} className="page-link py-2 px-3">
                                { number }
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </React.StrictMode>
    )
}

export default AuditLog;