import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './RideInfo.css'

const RideInfo = (props) => {
    const { pickFrom, pickTo, rideDate } = props.rideInfo;
    const { picture, name, passengers } = props.ride;
    return (

        <div className="card bg-danger shadow-lg rounded-3 p-2">
            <div className="card-body text-white bg-warning  my-3 mx-2 rounded-3">
                <div className="timeline-area ps-2">
                    <h4>{pickFrom}</h4>
                    <h4>{pickTo}</h4>
                </div>
                <p>{rideDate}</p>
            </div>

            <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex align-items-center justify-content-between">
                <img src={picture} className="w-25 h-25" alt="" />
                <h5>{name}</h5>
                <h5><FontAwesomeIcon icon={faUserFriends} /> {passengers}</h5>
                <h5>$70</h5>
            </div>
            <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex align-items-center justify-content-between">
                <img src={picture} className="w-25 h-25" alt="" />
                <h5>{name}</h5>
                <h5><FontAwesomeIcon icon={faUserFriends} /> {passengers}</h5>
                <h5>$70</h5>
            </div>
            <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex align-items-center justify-content-between">
                <img src={picture} className="w-25 h-25" alt="" />
                <h5>{name}</h5>
                <h5><FontAwesomeIcon icon={faUserFriends} /> {passengers}</h5>
                <h5>$70</h5>
            </div>

        </div>

    );
};

export default RideInfo;