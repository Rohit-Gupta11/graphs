export default {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
        shadowBlur: 6,
        shadowColor: 'rgba(0,0,0,0.5)'
      },
      label: {
        show: false,
        position: 'center'
      },
      animationEasing: 'circulaIn',
      animationDuration: 1500,
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        },
        itemStyle: {
          borderWidth: 6,
          shadowBlur: 20,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
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