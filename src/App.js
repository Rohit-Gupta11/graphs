import React from 'react';
import Bar2 from './components/Bar2.jsx';
import Bar from './components/Bar.jsx';
import Line from './components/Line.jsx';
import Pie from './components/Pie.jsx';
import Gauge from './components/Gauge.jsx';
import Gauge2 from './components/Gauge2.jsx';
import resizeObserver from './utils/resizeObserver';
import donut from './charts/donut';
import donut2 from './charts/donut2';
import donut3 from './charts/donut3';
import donut4 from './charts/donut4';
import pie from './charts/pie';
import pie2 from './charts/pie2';
import pie3 from './charts/pie3.js';

function App() {
    return (
        <div>
            <h1>Graphs</h1>
            <div className="App" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Bar Chart 1</h1>
                    <Bar resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Bar Chart 2</h1>
                    <Bar2 resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Donut Chart 1</h1>
                    <Pie option={donut} resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Donut Chart 2</h1>
                    <Pie option={donut2} resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Donut Chart 3</h1>
                    <Pie option={donut3} resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Donut Chart 4 (with gradient)</h1>
                    <Pie option={donut4} resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Simple Gauge</h1>
                    <Gauge resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Gauge Hover</h1>
                    <Gauge2 resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Pie Chart 1</h1>
                    <Pie option={pie} resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Pie Chart 2</h1>
                    <Pie option={pie2} resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <h1 style={{ textAlign: "center" }}>Pie Chart 3 (with gradient)</h1>
                    <Pie option={pie3} resizeObserver={resizeObserver} />
                </div>
                <div style={{ width: "49%", height: 600, marginBottom: 200, border: "1px solid #f1f1f1" }}>
                    <Line resizeObserver={resizeObserver} />
                </div>
            </div>
        </div>
    )
}

export default App;