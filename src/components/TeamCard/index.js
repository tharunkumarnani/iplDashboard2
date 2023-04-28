// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="ipl-teams">
      <img src={teamImageUrl} alt={name} className="team-logo" />
      <p className="team-heading">{name}</p>
    </Link>
  )
}

export default TeamCard
