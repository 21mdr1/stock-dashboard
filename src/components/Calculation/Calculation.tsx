import { useState, useEffect } from 'react';
import { round } from '../../utils/conversions';
import { iMomentData } from '../../utils/types';
import axios from 'axios';
import './Calculation.scss';
const TOKEN = import.meta.env.REACT_APP_TROKEN;

const API_BASE = 'https://finnhub.io/api/v1'
const SYMBOL = 'AAPL'

function Calculation({ average }: {
    average: number;
}) {
    const [ data, setData ] = useState<iMomentData>();

    useEffect(() => {
        async function getData() {
            try {
                const response = (await axios.get(`${API_BASE}/quote?symbol=${SYMBOL}&token=${TOKEN}`)).data
                
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

    return (
        <div className="calc">
            <div className="calc__info-container">
                <div className="calc__row">
                    <div className="calc__info">The 5-day moving average is:</div>
                    <div className="calc__info">{round(average)}</div>
                </div>
                <div className="calc__row">
                    <div className="calc__info">The price at 9:30am was:</div>
                    <div className="calc__info">{data.c}</div>
                </div>
                
            </div>
            {average <= data.c ? 
                <div className="calc__action calc__action--buy">BUY</div> : 
                <div className="calc__action calc__action--sell">SELL</div>
            }
        </div>
    );
}

export default Calculation;