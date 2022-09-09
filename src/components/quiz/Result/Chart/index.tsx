
import React from 'react'
import { RadialChart} from 'react-vis'
import { useChart } from '../hooks/useChart';

function Chart() {
    const {chartData} = useChart()

    return (
    <RadialChart
                className={'donut-chart-example'}
                innerRadius={100}
                radius={140}
                data={chartData}
                width={300}
                height={300}
                padAngle={0.04}
                showLabels
    />
    )
}
export default Chart
