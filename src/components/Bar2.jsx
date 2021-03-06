import React, { useRef, useEffect } from "react"
import * as echarts from "echarts"

class Bar2 extends React.Component {
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
        let dataAxis = ['Leap Max', 'Leap Generation', 'Knowmax', 'Kochar soft', 'Marketing', 'Payroll & Compliance', 'Product', 'Selfcare', 'Social', 'Training'];
        let data = [55, 46, 24, 88, 19, 47, 92, 29, 60, 60];
        let option = {
            tooltip: {
                trigger: 'item'
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    rotate: '90',
                    color: '#fff'
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
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#83bff6' },
                            { offset: 0.5, color: '#188df0' },
                            { offset: 1, color: '#188df0' }
                        ])
                    },
                    emphasis: {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' }
                            ])
                        }
                    },
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

export default Bar2;