import * as echarts from 'echarts';
export default {
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
