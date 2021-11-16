import React, { useRef, useEffect } from "react"
import * as echarts from "echarts"

class Bar extends React.Component {
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
        let dataAxis = ['Productive', 'Non Productive', 'Neutral', 'Unstaged'];
        let data = [{
            value: 220, itemStyle: {
                color: '#6ECB63'
            }
        }, {
            value: 182,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'red' },
                    { offset: 0.5, color: 'orange' },
                    { offset: 1, color: 'yellow' }
                ])
            }
        }, {
            value: 191, itemStyle: {
                color: '#3D56B2'
            }
        }, {
            value: 234, itemStyle: {
                color: '#FFB319'
            }}];
        let option = {
            tooltip: {
                trigger: 'item'
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: false,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#999'
                }
            },
            series: [
                {
                    type: 'bar',
                    showBackground: true,
                    data: data,
                    animationEasing: 'circulaIn',
                    animationDuration: 1500,
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

export default Bar;