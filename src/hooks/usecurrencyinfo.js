
import { useState, useEffect } from "react";
function usecurrencyinfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {

        const fetchdata = async () => {
            try {
                const resp = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
                const jsondata = await resp.json();

                setdata(jsondata[currency]);
            }
            catch (error) {
                console.error("The error is ", error);
                setdata({})
            }
        }
        fetchdata();
    }, [currency])
    return data;
}

export default usecurrencyinfo;