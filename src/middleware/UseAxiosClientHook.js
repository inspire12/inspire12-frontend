import {useState, useEffect} from "react";
import axios, {AxiosRequestConfig} from "axios";

axios.defaults.baseURL = "https://dapi.kakao.com";

// type AxiosProps = {
//     method: "get" | "post" | "put" | "delete";
//     url: string;
//     config?: AxiosRequestConfig;
// };

const useAxios = ({method = 'get', url, config = {}} = {}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        axios[method](url, config)
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {response, error, loading};
};

export default useAxios;