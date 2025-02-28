import { useState, useEffect } from 'react';
import { dateToString, round } from '../../utils/conversions';
import { iDayData } from '../../utils/types';
import axios from 'axios';
import './Table.scss';

function Table( { calculateAverage }: {
    calculateAverage: (num: number[]) => void;
}) {
    const [ data, setData ] = useState<iDayData>();

    useEffect(() => {
        async function getData() {
            const API_BASE = 'https://api.marketdata.app/v1'
            const DAYS = 5
            const SYMBOL = 'AAPL'

            try {
                const response = (await axios.get(`${API_BASE}/stocks/candles/D/${SYMBOL}?countback=${DAYS}&to=today`)).data

                console.log(response);
                setData(response);
                calculateAverage(response.c);
                
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
    <table className="table">
                <thead className="table__head">
                    <tr className="table__row table__row--header">
                        {[ 'Day', 'Open', 'Close', 'Low', 'High', 'Volume' ].map(header => (
                            <th className="table__cell table__cell--header" key={header}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="table__body">
                {[0, 1, 2, 3, 4].map(day => (
                    <tr className="table__row" key={day}>
                        <td className="table__cell">{dateToString(data.t[day])}</td>
                        <td className="table__cell">{round(Number(data.o[day]))}</td>
                        <td className="table__cell">{round(Number(data.c[day]))}</td>
                        <td className="table__cell">{round(Number(data.l[day]))}</td>
                        <td className="table__cell">{round(Number(data.h[day]))}</td>
                        <td className="table__cell">{data.v[day]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
    </>
}

export default Table;