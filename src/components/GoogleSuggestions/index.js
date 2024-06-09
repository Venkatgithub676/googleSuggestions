// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickArrowBtn = suggestion => {
    this.setState({searchInput: suggestion})
    console.log(suggestion)
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const updatedList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-pic"
            alt="google logo"
          />
          <div className="search-suggestion-con">
            <div className="search-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-img"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                className="search-text"
                value={searchInput}
              />
            </div>
            <ul className="suggestion-con">
              {updatedList.map(each => (
                <SuggestionItem
                  items={each}
                  onClickArrowBtn={this.onClickArrowBtn}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
