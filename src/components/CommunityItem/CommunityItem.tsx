import CircleImage from '../CircleImage'

import './CommunityItem.scss'

import LikeIcon from '../../assets/icon/like_small.svg'
import CommentIcon from '../../assets/icon/comment_small.svg'

interface props {
  user: string;
  userImageSrc: string;
  title: string;
  description: string;
  like: number;
  comment: number;
  onClick: () => void;
}

const CommunityItem = ({
  user,
  userImageSrc,
  title,
  description,
  like,
  comment,
  onClick
}: props) => {
  return (
    <div className="community-item border" onClick={onClick}>
      <div className="community-item__header">
        <CircleImage src={userImageSrc} width={32} height={32} />
        <div className="community-item__header__user">{user}</div>
      </div>
      <div className="community-item__body">
        <textarea
          className="community-item__body__title"
          value={title}
          rows={1}
          readOnly
        />
        <textarea
          className="community-item__body__description"
          value={description}
          rows={2}
          readOnly
        />
      </div>
      <div className="community-item__bottom">
        <img src={LikeIcon} />
        <div className="community-item__bottom__number">{like}</div>
        <img src={CommentIcon} />
        <div className="community-item__bottom__number">{comment}</div>
      </div>
    </div>
  )
}

export default CommunityItem
