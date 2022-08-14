import classnames from "classnames";
import React from "react";

import "./Badge.scss";

interface Props {
  status: "ready" | "in-progress" | "done";
  className?: string;
}

const Badge = ({ status, className }: Props) => {
  return (
    <div className={classnames(["badge", status, className])}>
      {status === "ready" && "수락대기"}
      {status === "in-progress" && "확인대기"}
      {status === "done" && "코칭완료"}
    </div>
  );
};

export default Badge;
