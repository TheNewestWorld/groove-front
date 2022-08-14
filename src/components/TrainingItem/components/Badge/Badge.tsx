import classnames from "classnames";

import "./Badge.scss";

interface Props {
  status: "ready" | "done";
  className?: string;
}

const Badge = ({ status, className }: Props) => {
  return (
    <div className={classnames(["badge", status, className])}>
      {status === "ready" && "코칭완료"}
      {status === "done" && "수락대기"}
    </div>
  );
};

export default Badge;
