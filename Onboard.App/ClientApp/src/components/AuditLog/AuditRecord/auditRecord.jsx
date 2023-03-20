import React from 'react';
import './auditRecord.css';

function AuditRecord(props) {
    return (
        <React.StrictMode>
            <div id="recordContainer" className="col-11 mx-auto my-3 px-4">
                <div className="d-flex justify-content-aeound col-12 pt-3">
                    <h5 className="col-1 align-self-center mx-3">{props.employee}</h5>
                    <h5 className="col-10">{ props.description }</h5>
                </div>
                <div className="d-flex justify-content-end">
                    <h6>{props.time}</h6>
                    <h6 className="px-2"> | </h6>
                    <h6>{ props.date }</h6>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default AuditRecord;