import "./FloatingLayout.scss";

export interface Props {
  children?: React.ReactNode;
}

const FloatingLayout = ({ children }: Props) => {
  return <div className="floating-layout">{children}</div>;
};

export default FloatingLayout;
