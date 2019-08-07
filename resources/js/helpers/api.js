import {useEffect, useState} from 'react';
import axios from "axios";
import to from './to';

/**
 * General get data endpoint
 *
 * @param endpoint
 * @returns {{isLoading: boolean, data: Array, error: any}}
 */
export const getData = (endpoint) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let error, fetchedData;
        let isSubscribed = true;

        (async () => {
            [error, fetchedData] = await to(axios.get("/api/" + endpoint));

            if (isSubscribed) {
                if (error) setError('There was an error, please notify your project manager.');
                else setData(fetchedData.data);

                setLoading(false);
            }
        })();

        return () => (isSubscribed = false);
    }, []);

    return {data, error, isLoading};
};

/**
 * General post data endpoint
 *
 * @param endpoint
 * @returns {{isLoading: boolean, data: Array, error: any}}
 */
export const postData = (endpoint) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let error, fetchedData;
        let isSubscribed = true;

        (async () => {
            [error, fetchedData] = await to(axios.post("/api/" + endpoint));

            if (isSubscribed) {
                if (error) setError('There was an error, please notify your project manager.');
                else setData(fetchedData.data);

                setLoading(false);
            }
        })();

        return () => (isSubscribed = false);
    }, []);

    return {data, error, isLoading};
};
