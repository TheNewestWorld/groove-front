interface props {
  src: string;
  width: number;
  height: number;
}

const CircleImage = ({
  src,
  width,
  height
}: props): React.ReactElement => {
  return (
    <div className="circle-image">
      <img
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: "50%"
        }}
        src={src}/>
    </div>
  );
};

export default CircleImage;
