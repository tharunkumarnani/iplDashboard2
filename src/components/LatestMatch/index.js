// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    venue,
    date,
    manOfTheMatch,
    result,
    umpires,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="latest-card">
      <div className="low-width">
        <div className="inner1-card">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="res">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-logo"
        />
      </div>
      <hr className="line-separator" />
      <div className="inner2-card">
        <p className="sub-headings">First Innings</p>
        <p className="sub-headings">{firstInnings}</p>
        <p className="sub-headings">Second Innings</p>
        <p className="sub-headings">{secondInnings}</p>
        <p className="sub-headings">Man Of The Match</p>
        <p className="sub-headings">{manOfTheMatch}</p>
        <p className="sub-headings">Umpires</p>
        <p className="sub-headings">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
