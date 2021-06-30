import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"

const CovidTraker = () => {

    const state = useSelector(state => state);

    const [newData, setNewData] = useState("");

    // console.log(state.data)

    const getData = () => {
        const covidData = state.data;
        setNewData(covidData);
        console.log(state.data)
    }

    useEffect(() => {
        getData();
    }, [state])

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        States
                    </button>
                    <ul className="dropdown-menu" style={{ height: 'auto', maxHeight: '200px', overflowX: 'hidden' }} aria-labelledby="dropdownMenuButton1">
                        {
                            newData == "" ? "...Loading" :
                                newData.map((obj, index) => {
                                    return (
                                        <li key={index} className="dropdown-item">{obj.state}</li>
                                    )
                                })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CovidTraker
