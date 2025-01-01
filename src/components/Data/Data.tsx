import { useState, useEffect } from 'react';
import './Data.scss';
import axios from 'axios';

interface iData {
    t: Array<number>;
    o: Array<number>;
    c: Array<number>;
    h: Array<number>;
    l: Array<number>;
    v: Array<number>;
    s: string;
}

function Data() {

    const [ data, setData ] = useState<iData>();

    useEffect(() => {
        async function getData() {
            const API_BASE = 'https://api.marketdata.app/v1'
            const DAYS = 5
            const SYMBOL = 'AAPL'

            try {
                const response = (await axios.get(`${API_BASE}/stocks/candles/D/${SYMBOL}?countback=${DAYS}&to=yesterday`)).data

                console.log(response);
                setData(response);
            } catch(error) {
                console.log(error);
            }
        }

        getData();
    }, []);

    if(!data) {
        return <div>Loading...</div>
    }

    return <>
        <table className="price">
            <thead>
                <tr className="row row--heading">
                    <th className="heading">
                        Day
                    </th>
                    <th className="heading">
                        Open
                    </th>
                    <th className="heading">
                        Close
                    </th>
                    <th className="heading">
                        High
                    </th>
                    <th className="heading">
                        Low
                    </th>
                    <th className="heading">
                        Volume
                    </th>
                </tr>
            </thead>
            <tbody>
                {[0, 1, 2, 3, 4, 5].map(day => (
                    <tr className="row" key={day}>
                        <td className="cell">{data.t[day]}</td>
                        <td className="cell">{data.o[day]}</td>
                        <td className="cell">{data.c[day]}</td>
                        <td className="cell">{data.h[day]}</td>
                        <td className="cell">{data.l[day]}</td>
                        <td className="cell">{data.v[day]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

export default Data;