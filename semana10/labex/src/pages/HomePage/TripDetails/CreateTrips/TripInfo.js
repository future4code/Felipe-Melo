import React from 'react'


const TripInfo = (props) => {
  return <div>
    <strong>{props.infoName}</strong>: {props.info}
  </div>
}

export default TripInfo