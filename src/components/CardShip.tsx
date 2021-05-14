import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

export default function CardShip(props: any) {
  const {
    name,
    model,
    starship_class,
    hyperdrive_rating,
    passengers,
    manufacturer,
  } = props

  return (
    <div style={{ padding: '15px 10px' }}>
      <Card
        body
        inverse
        className="card"
        // style={{
        //   backgroundColor: '#bf360c',
        //   textAlign: 'center',
        //   width: '280px',
        //   height: '325px',
        //   border: '2px ridge #fafafa',
        // }}
      >
        <CardTitle>{name}</CardTitle>
        <CardText>{model}</CardText>
        <CardText>Star Ship Class: {starship_class}</CardText>
        <CardText>Hyper Drive Rating: {hyperdrive_rating}</CardText>
        <CardText>Passangers: {passengers}</CardText>
        <CardText>Manufacturer: {manufacturer}</CardText>
      </Card>
    </div>
  )
}
