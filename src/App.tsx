import { useState } from 'react';
import Table from './components/Table/Table';
import Calculation from './components/Calculation/Calculation';
import './App.scss'

function App() {
    const [ average, setAverage ] = useState<number>(0);

    function calculateAverage(nums: Array<number>) {

        const avg = nums.reduce((a, b) => a + b, 0) / 5
        setAverage(avg)
    }

    return (
        <main className="main">
            <h1 className="title">APPL</h1>
            <Table calculateAverage={ calculateAverage } />
            <Calculation average={ average } />
        </main>
    )
}

export default App
