const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

const url = 'http://localhost:3000'
export function useStatusData() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(url + '/statusData')
            .then((res) => {
               
                setData(res.data.statusData); // Gelen veriyi state'e ata
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return data;
}