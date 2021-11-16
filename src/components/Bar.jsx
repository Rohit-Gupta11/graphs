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
        let data = [220, {
            value: 182,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'red' },
                    { offset: 0.5, color: 'orange' },
                    { offset: 1, color: 'yellow' }
                ])
            }
        }, 191, 234];
        let yMax = 500;
        let dataShadow = [];
        for (let i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }
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
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
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

        // Enable data zoom when user click bar.
        const zoomSize = 2;
        chart.on('click', function (params) {
            console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            chart.dispatchAction({
                type: 'dataZoom',
                startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue:
                    dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
            });
        });
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