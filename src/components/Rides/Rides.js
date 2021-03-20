import React from 'react';
import { useHistory } from 'react-router';

const Rides = (props) => {
    const {name, picture} = props.ride
    const history = useHistory();
    const handleClick = (rideName) => {
        history.push(`/${rideName}/destination`)
    }
    return (
        <div className="mb-5 col-lg-3 col-sm-6" onClick={()=> handleClick(name)}>
            <div className="card shadow-lg w-100 h-100 text-center rounded">
                <div className="d-flex justify-content-center align-items-center h-50 p-2">
                    <img src={picture} className="card-img-top h-100 w-50" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    
                </div>
            </div>
        </div>
    );
};

export default Rides;