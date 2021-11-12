import React from 'react';
import Bar2 from './components/Bar2.jsx';
import Bar from './components/Bar.jsx';
import Line from './components/Line.jsx';
import Pie from './components/Pie.jsx';
import Gauge from './components/Gauge.jsx';
import resizeObserver from './utils/resizeObserver';
import pies from './charts/pies';
import pies2 from './charts/pies2';


function App() {
    return (
        <div>
            <h1>Graphs</h1>
            <div className="App" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <div style={{ width: "50%", height: 400 }}>
                    <Bar resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "50%", height: 400 }}>
                    <Bar2 resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "50%", height: 400 }}>
                    <Pie option={pies} resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "50%", height: 400 }}>
                    <Pie option={pies2} resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "50%", height: 400 }}>
                    <Gauge resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "50%", height: 400 }}>
                    <Line resizeObserver={resizeObserver} />
                </div>
            </div>
        </div>
    )
}

export default App;
