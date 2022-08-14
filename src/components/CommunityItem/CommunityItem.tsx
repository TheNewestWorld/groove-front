import CircleImage from "../CircleImage";

import "./CommunityItem.scss"

import {
  ChatIcon,
  HeartActiveIcon,
  HeartInactiveIcon
} from "../../assets/icon";

export interface Props {
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
}: Props) => {
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
        { liked ? <HeartActiveIcon className="community-item__bottom__icon" />
          : <HeartInactiveIcon className="community-item__bottom__icon" /> }
        <div className="community-item__bottom__number">{likeCount}</div>
        <ChatIcon className="community-item__bottom__icon" />
        <div className="community-item__bottom__number">{commentCount}</div>
      </div>
    </div>
  )
}

export default CommunityItem
