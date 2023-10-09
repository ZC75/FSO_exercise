import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPostive] = useState(0)

  const increaseGood = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1
    setGood(updatedGood)
    setAll(updatedAll)
    setAverage((updatedGood - bad)/updatedAll)
    setPostive(updatedGood/updatedAll)
  }

  const increaseNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1
    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setAverage((good - bad)/updatedAll)
    setPostive(good/updatedAll)
  }

  const increaseBad = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1
    setBad(updatedBad)
    setAll(updatedAll)
    setAverage((good - updatedBad)/updatedAll)
    setPostive(good/updatedAll)
  }

  return (
    <div>
      <Header title="Give feedback" />
      <Button text="good" clickAction={increaseGood} />
      <Button text="neutral" clickAction={increaseNeutral} />
      <Button text="bad" clickAction={increaseBad} />

      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} 
      all={all} average={average} positive={positive} />
    
    </div>
  )
}

const Header = ({title}) => {
  return (
    <h6>{title}</h6>
  )
}

const Button = ({text, clickAction}) => {
  return (
    <button onClick={clickAction}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = (props) => {
  return( (props.all === 0)? (<p>No feedback given</p>) : (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={props.all} />
            <StatisticLine text="average" value={props.average} />
            <StatisticLine text="positive" value={props.positive * 100 + '%'} />
          </tbody>
        </table>
      </div>
  )
  )
 
}

export default App