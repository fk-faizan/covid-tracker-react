import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios';

const Home = () => {

    let dispatch = useDispatch();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await axios.get('https://api.covidtracking.com/v1/states/current.json');
            // console.log(res.data);
            setData(res.data)
        }
        fetchApi();
    }, [setData])

    useEffect(() => {
        const sendData = () => {
            dispatch({type: 'FATCHDATA', data: data})
        }
        sendData();
    }, [data])

    return (
        <div>
            Its Home Page
        </div>
    )
}

export default Home
