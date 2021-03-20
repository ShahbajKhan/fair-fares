import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import rideList from '../../data/data.json';
import { useForm } from 'react-hook-form';
import mapImage from '../../images/Map.png'
import RideInfo from '../RideInfo/RideInfo';
import Header from '../Header/Header';
import { UserContext } from '../../App';

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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496723.66068468!2d85.84616609221882!3d23.442075849009655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1616220108015!5m2!1sen!2sbd"
                        className="w-100 "
                        title="bangladesh"
                        style={{ border: "0", height: "20rem" }}
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Destination;