import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickThumbnail, isActiveThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const onClickThumbnailBtn = () => {
    onClickThumbnail(id)
  }
  const thumbnailClass = isActiveThumbnail
    ? 'activeThumbnail list-item '
    : 'thumbnail'

  return (
    <li className="list-item">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickThumbnailBtn}
      >
        <img
          src={thumbnailUrl}
          className={thumbnailClass}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
