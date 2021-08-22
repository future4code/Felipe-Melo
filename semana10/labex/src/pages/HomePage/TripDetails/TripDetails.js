import React from 'react'
import TripInfo from './CreateTrips/TripInfo'





const TripDetails = (props) => {
  const {name, planet, description, date, durationInDays} = props.info
 
 
 return <div>
  <div>
  <p>Informações</p>
    <TripInfo infoName={'Nome'} info={name}/>
    <TripInfo infoName={'Planeta'} info={planet}/>
    <TripInfo infoName={'Data'} info={date}/>
    <TripInfo infoName={'Descrição'} info={description}/>
    <TripInfo infoName={'Duração em dias'} info={durationInDays}/>
  </div>
</div>
  
}

export default TripDetails