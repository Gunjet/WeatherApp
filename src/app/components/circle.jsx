
export default function Circle({ size = 140, borderColor = 'blue' }) {
  return (
    <div
      className={`absolute top-1/2 left-1/2 w-[${size}px] h-[${size}px] border-2 border-${borderColor} rounded-full transform -translate-x-1/2 -translate-y-1/2`}
    />
  );
}

