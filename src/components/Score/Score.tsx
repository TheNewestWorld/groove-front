import classNames from "classnames";

import "./Score.scss";
import { YellowStartBorderIcon, YellowStartFillIcon } from "../../assets/icon";

interface Props {
  score: number;
  className?: string;
}

const Score = ({ score, className }: Props) => {
  return (
    <div className={classNames(["score_container", className])}>
      {[...Array(score)].map(() => (
        <YellowStartFillIcon />
      ))}
      {[...Array(5 - score)].map(() => (
        <YellowStartBorderIcon />
      ))}
    </div>
  );
};

export default Score;
