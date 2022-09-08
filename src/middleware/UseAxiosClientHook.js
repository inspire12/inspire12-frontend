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
    }, [fetchData]); //https://kyounghwan01.github.io/blog/React/exhaustive-deps-warning/#_1-useeffect%E1%84%82%E1%85%A2-state%E1%84%85%E1%85%B3%E1%86%AF-%E1%84%82%E1%85%A5%E1%87%82%E1%84%8B%E1%85%A5%E1%84%8C%E1%85%AE%E1%86%B7

    return {response, error, loading};
};

export default useAxios;