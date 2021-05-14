import React, { useEffect, useState } from 'react'
import { CardDeck } from 'reactstrap'
import CardShip from './CardShip'
import axios from 'axios'
import { Button, ButtonGroup } from 'reactstrap'

export default function CardList() {
  const [state, setState] = useState<{
    next: undefined
    previous: undefined
    results: never[]
  }>({
    next: undefined,
    previous: undefined,
    results: [],
  })

  async function getShip(link: string = 'https://swapi.dev/api/starships/') {
    try {
      const res = await axios.get(link)

      setState({
        next: res.data.next,
        previous: res.data.previous,
        results: res.data.results,
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getShip()
  }, [])

  return (
    <>
      <CardDeck className="card-deck">
        {state.results.map((i: any) => {
          return (
            <CardShip
              name={i.name}
              model={i.model}
              starship_class={i.starship_class}
              hyperdrive_rating={i.hyperdrive_rating}
              passengers={i.passengers}
              manufacturer={i.manufacturer}
              key={i.name}
            />
          )
        })}
      </CardDeck>
      <div className="button-container">
        <ButtonGroup className="button-group">
          <Button
            disabled={!state.previous}
            color="danger"
            onClick={() => getShip(state.previous)}
          >
            Prev
          </Button>
          <Button
            disabled={!state.next}
            color="danger"
            onClick={() => getShip(state.next)}
          >
            Next
          </Button>
        </ButtonGroup>
      </div>
    </>
  )
}
