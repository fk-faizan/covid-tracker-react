import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './../../api'
import { Card } from './../../components/index';
import ImgCoronaVirus from '../../assets/images/coronavirus.png';


const Home = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    // console.log(state);

    const [fetchedCountries, setFetchedCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");

    useEffect(() => {
        fetchData(dispatch);
    }, [dispatch])


    const getCountryData = (e) => {
        // console.log(e);
        setSearchCountry(e.target.innerHTML);
    }


    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle px-5 shadow" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Country
                    </button>
                    <ul className="dropdown-menu" style={{ height: 'auto', maxHeight: '200px', overflowX: 'hidden' }} aria-labelledby="dropdownMenuButton1">
                        {
                            !state.data ? "Loading...." :
                                state.data.map((obj, index) => {
                                    return (
                                        <li key={index} onClick={getCountryData} className="dropdown-item">{obj.state}</li>
                                    )
                                })
                        }
                    </ul>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12 d-flex">
                        <Card img={ImgCoronaVirus} title="Confirmed Cases" value={!state.data ? "Loading...." : (state.data.find(obj => obj.state === searchCountry) || {}).positive || '------'} other="Last updated 3 mins ago" />
                        <Card img={ImgCoronaVirus} title="Hospitalized" value={!state.data ? "Loading...." : (state.data.find(obj => obj.state === searchCountry) || {}).hospitalized || '------'} other="Last updated 3 mins ago" />
                        <Card img={ImgCoronaVirus} title="Deaths" value={!state.data ? "Loading...." : (state.data.find(obj => obj.state === searchCountry) || {}).death || '------'} other="Last updated 3 mins ago" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home
