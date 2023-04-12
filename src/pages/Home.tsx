import { Play } from 'phosphor-react'

export function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <form action="" className="flex flex-col items-center gap-14">
        <div className="w-full flex items-center justify-center gap-2 text-gray100 text-lg font-bold flex-wrap">
          <label htmlFor="task">I will work in</label>
          <input id="task" />

          <label htmlFor="">for</label>
          <input type="number" id="minutesAmount" />

          <p>minutes.</p>
        </div>

        <div className="font-mono text-9xl leading-10 text-gray100 flex gap-4">
          <span>0</span>
          <span>0</span>
          <span className="py-8 px-0 text-green500 w-16 overflow-hidden flex justify-center">
            :
          </span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">
          <Play size={24} />
          Start
        </button>
      </form>
    </div>
  )
}
