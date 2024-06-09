// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {items, onClickArrowBtn} = props
  const {suggestion} = items
  const onClickArrow = () => {
    onClickArrowBtn(suggestion)
  }

  return (
    <li className="item-con">
      <p className="suggestion">{suggestion}</p>
      <button className="arrow-btn" type="button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
