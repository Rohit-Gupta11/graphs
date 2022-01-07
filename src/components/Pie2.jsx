import React from "react"
import * as echarts from "echarts"

class Pie2 extends React.Component {
    constructor(props) {
        super(props);
        this.myChart1 = React.createRef();
        this.myChart2 = React.createRef();
        this.myChart3 = React.createRef();
    }

    componentDidMount() {
        this.setUpMyChart();
    }

    setUpMyChart() {
        
        // initialize all required charts
        const chart1 = echarts.init(this.myChart1.current)
        const chart2 = echarts.init(this.myChart2.current)
        const chart3 = echarts.init(this.myChart3.current)

        // options for all charts
        let option1 = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                top: 'center'
            },
            series: [
                {
                    type: 'pie',
                    radius: '50%',
                    itemStyle: {
                        borderWidth: 2,
                        shadowBlur: 6,
                        shadowColor: 'rgba(0,0,0,0.5)'
                    },
                    data: [
                        { value: 1048, name: 'Productive' },
                        { value: 735, name: 'Non Productive' },
                        { value: 580, name: 'Neutral' },
                        { value: 484, name: 'Unstaged' }
                    ],
                    emphasis: {
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 6,
                            shadowBlur: 0
                        }
                    },
                    animationEasing: 'circulaIn',
                    animationDuration: 1500
                }
            ]
        };
        
        let option2 = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                top: 'center'
            },
            series: [
                {
                    type: 'pie',
                    radius: '50%',
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#fff',
                        shadowBlur: 6,
                        shadowColor: 'rgba(0,0,0,0.5)'
                    },
                    data: [
                        { value: 1048, name: 'Productive' },
                        { value: 735, name: 'Non Productive' },
                        { value: 580, name: 'Neutral' },
                        { value: 484, name: 'Unstaged' }
                    ],
                    emphasis: {
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 6,
                            shadowBlur: 20,
                        },
                    },
                    animationEasing: 'circulaIn',
                    animationDuration: 1500
                }
            ]
        };

        let option3 = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                top: 'center'
            },
            series: [
                {
                    type: 'pie',
                    radius: '50%',
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#fff',
                        shadowBlur: 6,
                        shadowColor: 'rgba(0,0,0,0.5)'
                    },
                    data: [
                        {
                            value: 1048, name: 'Productive',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: '#96ff68' },
                                    { offset: 0.5, color: '#56f012' },
                                    { offset: 1, color: 'darkgreen' }
                                ])
                            }
                        },
                        {
                            value: 735, name: 'Non Productive', itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: 'yellow' },
                                    { offset: 0.5, color: 'orange' },
                                    { offset: 1, color: 'red' }
                                ])
                            }
                        },
                        {
                            value: 580, name: 'Neutral',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: 'white' },
                                    { offset: 0.5, color: 'violet' },
                                    { offset: 1, color: 'purple' }
                                ])
                            }
                        },
                        {
                            value: 484, name: 'Unstaged', itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: '#83bff6' },
                                    { offset: 0.5, color: '#188df0' },
                                    { offset: 1, color: 'blue' }
                                ])
                            }
                        }
                    ],
                    emphasis: {
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 6,
                            shadowBlur: 20,
                        },
                    },
                    animationEasing: 'circulaIn',
                    animationDuration: 1500
                }
            ]
        };

        // set options for each charts
        chart1.setOption(option1);
        chart2.setOption(option2);
        chart3.setOption(option3);

        // add click event to each charts
        chart1.on('click', function (params) {
            console.log(params);
        });

        chart2.on('click', function (params) {
            console.log(params);
        });

        chart3.on('click', function (params) {
            console.log(params);
        });
    }

    render() {
        return (
            <>
                <div
                    ref={this.myChart1}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                ></div>
                <div
                    ref={this.myChart2}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                ></div>
                <div
                    ref={this.myChart3}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                ></div>
            </>
        )
    }
}

export default Pie2;