// Write your code here
import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const {
    competing_team_logo,
    competing_team,
    result,
    match_status,
  } = cardDetails
  const matchStatusClass = match_status === 'Lost' ? 'lose-style' : 'won-style'
  return (
    <li className="match-card">
      <img
        className="team-logo"
        src={competing_team_logo}
        alt={`competing Team ${competing_team}`}
      />
      <p className="team-title">{competing_team}</p>

      <p className="result">{result}</p>
      <p className={matchStatusClass}>{match_status}</p>
    </li>
  )
}

export default MatchCard
