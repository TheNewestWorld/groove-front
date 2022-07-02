import './TrainerInfoItem.scss';

interface props {
  title: string;
  content: string;
}

const TrainerInfoItem = ({title, content}: props): React.ReactElement => {
  return (
    <div>
      <p className='trainer-info-item__title'>{title}</p>
      <p className='trainer-info-item__content'>{content}</p>
    </div>
  );
}

export default TrainerInfoItem;
