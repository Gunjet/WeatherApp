export default function Circle({ size = 140, borderColor = 'blue'}) {
  return (
    <div
      className={`absolute top-1/2 left-1/2 rounded-full ${size===140 && "bg-[#F3F4F6]"} transform -translate-x-1/2 -translate-y-1/2
        border-2 border-${borderColor}`}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
    />
  );
}