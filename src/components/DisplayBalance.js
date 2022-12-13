import React from 'react'
import { Statistic } from 'semantic-ui-react';


function DisplayBalance({ label, value, size = 'small', color = 'black' }) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label>{label}</Statistic.Label>
            <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance