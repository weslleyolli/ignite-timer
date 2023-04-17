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
            step={15}
            min={15}
            max={60}
          />

          <p>minutes.</p>
        </div>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit" disabled>
          <Play size={24} />
          Start
        </button>
      </form>
    </div>
  )
}
