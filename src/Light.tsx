type Props = {
  /**  some description */
  variant?: "green" | "red" | "yellow"
};


/**  Some comment about the Light component */
const Light = ({ variant = 'green' }: Props) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: "50%",
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Light;
