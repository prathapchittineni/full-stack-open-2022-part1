import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = props => <h1>{props.name}</h1>

const Statistic = ({text, value}) => {
  if (text === "Positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }

  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({Clicks}) => {
    const Total = Clicks.Good + Clicks.Neutral + Clicks.Bad
    const Average = (Clicks.Good * 1 + Clicks.Bad * -1) / Total
    const Positive = Clicks.Good * (100/Total)

    if (Total === 0) {
      return (
        <div>
         FEED BACK NOT GIVEN
        </div>
      )
    }

    return (
      <div>
        <table>
          <tbody>
            <Statistic text="Good" value={Clicks.Good} />
            <Statistic text="Neutral" value={Clicks.Neutral} />
            <Statistic text="Bad" value={Clicks.Bad} />
            <Statistic text="All" value={Total} />
            <Statistic text="Average" value={Average} />
            <Statistic text="Positive" value={Positive} />
          </tbody>
        </table>
      </div>
    )
}


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [clicks, setClicks] = useState({
    Good: 0, Neutral: 0, Bad: 0
  })

  const handleGoodClick = () =>
    setClicks({...clicks, Good: clicks.Good + 1})

  const handleNeutralClick = () =>
    setClicks({...clicks, Neutral: clicks.Neutral + 1})

  const handleBadClick = () =>
    setClicks({...clicks, Bad: clicks.Bad + 1})


  return (
    <div>
      <Header name="Customer feedback" />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <Header name="Statistics" />
      <Statistics clicks={clicks} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)