import CircleImage from '../CircleImage'

import './CommunityItem.scss'

import LikeIcon from '../../assets/icon/like_small.svg'
import LikeActiveIcon from '../../assets/icon/like_small_active.svg'
import CommentIcon from '../../assets/icon/comment_small.svg'
// TODO(in.heo): Icon Import를 한 파일로 모읍니다.

interface props {
  user: string;
  userImageSrc: string;
  title: string;
  description: string;
  likeCount: number;
  commentCount: number;
  liked: boolean;
  onClick: () => void;
}

const CommunityItem = ({
  user,
  userImageSrc,
  title,
  description,
  likeCount,
  commentCount,
  liked,
  onClick
}: props) => {
  return (
    <div className="community-item border" onClick={onClick}>
      <div className="community-item__header">
        <CircleImage src={userImageSrc} className="item__header__img"/>
        <div className="community-item__header__user">{user}</div>
      </div>
      <div className="community-item__body">
        <p className="community-item__body__title">{title}</p>
        <p className="community-item__body__description">{description}</p>
      </div>
      <div className="community-item__bottom">
        <img src={ liked ? LikeActiveIcon : LikeIcon}/>
        <div className="community-item__bottom__number">{likeCount}</div>
        <img src={CommentIcon} />
        <div className="community-item__bottom__number">{commentCount}</div>
      </div>
    </div>
  )
}

export default CommunityItem
