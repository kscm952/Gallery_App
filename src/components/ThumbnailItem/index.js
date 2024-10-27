// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, clickImgItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const onClickImgItem = () => {
    clickImgItem(id)
  }

  const activeImgClassName = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        onClick={onClickImgItem}
        className="thumbnail-button"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeImgClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
