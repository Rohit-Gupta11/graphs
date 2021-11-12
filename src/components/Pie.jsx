import React from "react"
import * as echarts from "echarts"

class Pie extends React.Component {
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

        chart.setOption(this.props.option);
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

export default Pie;