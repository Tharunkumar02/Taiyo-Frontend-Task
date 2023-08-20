import React from 'react'
import LineGraph from '../../components/lineGraph/LineGraph'
import './charts.scss'
import CovidMap from '../../components/covidMap/CovidMap'

const Data = () => {
  return (
    <div className='charts'>
        <LineGraph/>
        <CovidMap />
    </div>
  )
}

export default Data