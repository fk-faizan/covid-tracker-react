import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './../../api'

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
            <div className="container m-4 text-light bg-dark">
                {
                    !state.data ? "Loading...." : (state.data.find(obj => obj.state === searchCountry) || {}).positive || '------'
                }
            </div>

        </>
    )
}

export default Home
