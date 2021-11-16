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
