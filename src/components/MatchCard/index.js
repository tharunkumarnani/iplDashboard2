// Write your code here
import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  console.log(cardDetails)
  const {competingTeamLogo, competingTeam, result, matchStatus} = cardDetails
  console.log(competingTeamLogo)
  const matchStatusClass = matchStatus === 'Lost' ? 'lose-style' : 'won-style'
  return (
    <li className="match-card">
      <img
        className="team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-title">{competingTeam}</p>

      <p className="result">{result}</p>
      <p className={matchStatusClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
