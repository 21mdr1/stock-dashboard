import Table from './components/Table/Table';
import { round } from './utils/conversions';
import './App.scss'

function App() {
    return (
        <main className="main">
            <h1 className="title">APPL</h1>
            <Table />
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
        </main>
    )
}

export default App
