import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import rideList from '../../data/data.json';
import { useForm } from 'react-hook-form';

import RideInfo from '../RideInfo/RideInfo';
import Header from '../Header/Header';
import { UserContext } from '../../App';
import Maps from '../Maps/Maps';

const Destination = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { rideName } = useParams();
    
    const arr = rideList.filter(ride => ride.name === rideName);
    const { register, handleSubmit, watch, errors } = useForm();
    const [rideInfo, setRideInfo] = useState({});
    const onSubmit = data => setRideInfo(data);

    let formShow;
    formShow = <form className="loginForm card py-3 bg-danger" onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-0 mt-2 text-white">Pick From</p>
        <input className="userInput form-control" name="pickFrom" ref={register({ required: true })} placeholder="Pick From" />
        {errors.pickFrom && <span>Pick From is required</span>}
        <p className="mb-0 mt-2 text-white">Pick To</p>
        <input className="userInput form-control" name="pickTo" ref={register({ required: true })} placeholder="Drop To" />
        {errors.pickTo && <span>Pick To is required</span>}
        <p className="mb-0 mt-2 text-white">Departure Date:</p>
        <input className="userInput form-control" name="rideDate" type="date" ref={register({ required: true })} />
        {errors.rideDate && <span>Date is required</span>}

        <input className="btn btn-dark text-warning" type="submit" />
    </form >


    return (
        <div className="container">
            <Header name={loggedInUser.displayName}></Header>
            <div className="row">

                <div className="col-md-4 col-sm-12">

                    {!rideInfo.pickFrom && formShow}

                    {
                        rideInfo.pickFrom && <RideInfo rideInfo={rideInfo} ride={arr[0]} />
                    }
                </div>
                <div className="col-md-8 col-sm-12">
                    
                    <Maps rideInfo={rideInfo}></Maps>
                </div>
            </div>
        </div>
    );
};

export default Destination;