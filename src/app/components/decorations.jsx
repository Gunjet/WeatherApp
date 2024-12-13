export default function Logo(){
    return(
        <div className="absolute z-30 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-x-2">
        <img src='/Vector-2.png' width='43' height='86' layout="responsive"/>
        <img src='/Vector-3.png' width='43' height='86' layout="responsive"/>
      </div>
    )
}

export function FilledCircle(){
    return(
        <div className='absolute w-138 h-138 z-21 bg-red-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
    )
}
