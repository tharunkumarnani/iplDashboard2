// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBanner: '',
    latestMatches: '',
    recentMatchesList: '',
  }

  componentDidMount() {
    this.getIndividualTeamDetails()
  }

  getIndividualTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl} = updatedData
    let {latestMatchDetails} = updatedData
    latestMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const {recentMatches} = updatedData

    this.setState({
      isLoading: false,
      teamBanner: teamBannerUrl,
      latestMatches: latestMatchDetails,
      recentMatchesList: recentMatches,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading, teamBanner, latestMatches, recentMatchesList} = this.state

    return (
      <div className={`list-team-cont ${id}`}>
        {isLoading ? (
          <div testId="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-card">
            <img className="team-banner" src={teamBanner} alt="team banner" />
            <p className="latest-match-title">Latest Matches</p>
            {<LatestMatch matchDetails={latestMatches} />}
            {
              <ul className="match-card-lists">
                {recentMatchesList.map(each => (
                  <MatchCard cardDetails={each} key={each.id} />
                ))}
              </ul>
            }
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
