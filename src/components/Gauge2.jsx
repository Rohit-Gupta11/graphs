import React, { useRef, useEffect } from "react"
import * as echarts from "echarts"

class Gauge extends React.Component {
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

        const gaugeData = [
            {
                value: 80,
                name: 'Idle',
                title: {
                    offsetCenter: ['0%', '-32%']
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '-20%']
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                }
            },
            {
                value: 60,
                name: 'Break time',
                title: {
                    offsetCenter: ['0%', '-2%']
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '10%']
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#fff1a0' },
                        { offset: 0.5, color: '#fccb84' },
                        { offset: 1, color: '#e08f21' }
                    ])
                }
            },
            {
                value: 60,
                name: 'Active time',
                title: {
                    offsetCenter: ['0%', '28%']
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '40%']
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#96ff68' },
                        { offset: 0.5, color: '#56f012' },
                        { offset: 1, color: '#48da08' }
                    ])
                }
            }
        ];

        let option = {
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    type: 'gauge',
                    startAngle: 90,
                    endAngle: -270,
                    pointer: {
                        show: false
                    },
                    progress: {
                        show: true,
                        overlap: false,
                        roundCap: false,
                        clip: false,
                        itemStyle: {
                            borderWidth: .5,
                            borderColor: '#464646',
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: 50
                        }
                    },
                    splitLine: {
                        show: false,
                        distance: 0,
                        length: 10
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        distance: 50
                    },
                    data: gaugeData,
                    title: {
                        fontSize: 14
                    },
                    detail: {
                        width: 50,
                        height: 14,
                        fontSize: 14,
                        color: 'auto',
                        borderColor: 'auto',
                        borderRadius: 20,
                        borderWidth: 1,
                        formatter: '{value}%'
                    },
                    animationEasing: 'circulaIn',
                    animationDuration: 1500,
                    emphasis: {
                        focus: 'true',
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
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

export default Gauge;