export default {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: 'center',
        right: 'right'
    },
    series: [
        {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: 'Productive' },
                { value: 735, name: 'Non Productive' },
                { value: 580, name: 'Neutral' },
                { value: 484, name: 'Unstaged' }
            ]
        }
    ]
};
