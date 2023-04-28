// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
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

  getFormattedData = data => ({
    id: data.id,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

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
    latestMatchDetails = this.getFormattedData(latestMatchDetails)

    const {recentMatches} = updatedData
    const formatedRecentMatches = recentMatches.map(each =>
      this.getFormattedData(each),
    )

    console.log(formatedRecentMatches)

    this.setState({
      isLoading: false,
      teamBanner: teamBannerUrl,
      latestMatches: latestMatchDetails,
      recentMatchesList: formatedRecentMatches,
    })
  }

  getRenderCont = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading, teamBanner, latestMatches, recentMatchesList} = this.state

    return (
      <div className={`list-team-cont ${id}`}>
        {isLoading ? (
          this.getRenderCont()
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
