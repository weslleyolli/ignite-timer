import { Play } from 'phosphor-react'

export function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <form action="" className="flex flex-col items-center gap-14">
        <div className="w-full flex items-center justify-center gap-2 text-gray100 text-lg font-bold flex-wrap">
          <label htmlFor="task">I will work in</label>
          <input
            id="task"
            placeholder="name your project"
            className=" bg-transparent h-10 border-b-2 text-center border-gray500 font-bold text-lg text-gray100 flex-1 focus:border-green500 "
            autoComplete="off"
            list="task-suggestion"
          />

          <datalist id="task-suggestion">
            <option value="Project 1" />
            <option value="Project 2" />
          </datalist>

          <label htmlFor="">for</label>
          <input
            type="number"
            id="minutesAmount"
            placeholder="00"
            className="bg-transparent h-10 w-16 border-b-2 text-center border-gray500 font-bold text-lg text-gray100 focus:border-green500"
            step={15}
            min={15}
            max={60}
          />

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

        <button
          type="submit"
          className="w-full p-4 rounded-lg flex items-center justify-center gap-2 font-bold bg-green500 text-gray100 hover:bg-green700 disabled:opacity-70 cursor-not-allowed "
          disabled
        >
          <Play size={24} />
          Start
        </button>
      </form>
    </div>
  )
}
