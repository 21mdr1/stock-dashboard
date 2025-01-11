// import Data from './components/Data/Data'
import './App.scss'

function App() {

    function dateToString(timestamp: string | number): string {
        let date = new Date(Number(timestamp) * 1000);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    function round(num: number): number {
        return Math.round(num * 100) / 100;
    }

    return (
        <main className="main">
            <h1 className="title">APPL</h1>
            <table className="table">
                <thead className="table__head">
                    <tr className="table__row table__row--header">
                        <th className="table__cell table__cell--header">
                            Day
                        </th>
                        <th className="table__cell table__cell--header">
                            Open
                        </th>
                        <th className="table__cell table__cell--header">
                            Close
                        </th>
                        <th className="table__cell table__cell--header">
                            High
                        </th>
                        <th className="table__cell table__cell--header">
                            Low
                        </th>
                        <th className="table__cell table__cell--header">
                            Volume
                        </th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    <tr className="table__row">
                        <td className="table__cell">{dateToString(1735794000)}</td>
                        <td className="table__cell">{round(248.93)}</td>
                        <td className="table__cell">{round(249.1)}</td>
                        <td className="table__cell">{round(241.8201)}</td>
                        <td className="table__cell">{round(243.85)}</td>
                        <td className="table__cell">54125614</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">{dateToString(1735880400)}</td>
                        <td className="table__cell">243.36</td>
                        <td className="table__cell">244.18</td>
                        <td className="table__cell">241.89</td>
                        <td className="table__cell">243.36</td>
                        <td className="table__cell">38846213</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">{dateToString(1736139600)}</td>
                        <td className="table__cell">244.31</td>
                        <td className="table__cell">247.33</td>
                        <td className="table__cell">243.2</td>
                        <td className="table__cell">245</td>
                        <td className="table__cell">42063243</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">{dateToString(1736226000)}</td>
                        <td className="table__cell">242.98</td>
                        <td className="table__cell">245.55</td>
                        <td className="table__cell">241.35</td>
                        <td className="table__cell">242.21</td>
                        <td className="table__cell">39313128</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">{dateToString(1736312400)}</td>
                        <td className="table__cell">241.92</td>
                        <td className="table__cell">{round(243.7123)}</td>
                        <td className="table__cell">240.05</td>
                        <td className="table__cell">242.7</td>
                        <td className="table__cell">33056099</td>
                    </tr>
                </tbody>
            </table>
            <div className="calc">
                <div className="calc__info-container">
                    <div className="calc__row">
                        <div className="calc__info">The 5-day moving average is:</div>
                        <div className="calc__info">{round((249.1 + 244.18 + 247.33 + 245.55 + 243.7123)/5)}</div>
                    </div>
                    <div className="calc__row">
                        <div className="calc__info">The price at 9:30am was:</div>
                        <div className="calc__info">236.85</div>
                    </div>
                    
                </div>
                <div className="calc__action">BUY</div>
            </div>
            
            {/* <Data /> */}
        </main>
    )
}

export default App
