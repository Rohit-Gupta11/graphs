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
            width: '50%',
            type: 'pie',
            radius: ['40%', '70%'],
            // avoidLabelOverlap: false,
            itemStyle: {
                borderWidth: 2,
                shadowBlur: 6,
                shadowColor: 'rgba(0,0,0,0.5)'
            },
            // label: {
            //     show: true,
            //     position: 'center'
            // },
            emphasis: {
                // label: {
                //     show: false
                // },
                itemStyle: {
                    borderWidth: 2,
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    borderColor: '#fff',
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            animationEasing: 'circulaIn',
            animationDuration: 1500,
            // labelLine: {
            //     show: false
            // },
            data: [
                { value: 1048, name: 'Productive' },
                { value: 735, name: 'Non Productive' },
                { value: 580, name: 'Neutral' },
                { value: 484, name: 'Unstaged' }
            ]
        }
    ]
};