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
    <div className="cards">
      <Card body inverse className="card">
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
