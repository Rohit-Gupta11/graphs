import React, { useRef, useEffect } from "react"
import * as echarts from "echarts"

class Line extends React.Component {
    constructor(props) {
        super(props);
        this.myChart = React.createRef();
    }

    componentDidMount() {
        this.setUpMyChart();
    }

    setUpMyChart() {
        const chart = echarts.init(this.myChart.current)

        if (this.props.resizeObserver) {
            this.props.resizeObserver.observe(this.myChart.current);
        }

        let option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }
            ]
        };

        chart.setOption(option);
    }

    render() {
        return (
            <>
                <div
                    ref={this.myChart}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >myChart</div>
            </>
        )
    }
}

export default Line;