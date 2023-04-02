import './index.css'

const BrowserItems = props => {
  const {initialHistoryListDetails, testid} = props
  const {
    id,
    timeAccessed,
    logoUrl,
    title,
    domainUrl,
  } = initialHistoryListDetails

  const Delete = () => {
    testid(id)
  }

  return (
    <div>
      <li className="list-container">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
        <button onClick={Delete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    </div>
  )
}
export default BrowserItems
