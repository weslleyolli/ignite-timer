export function History() {
  return (
    <div className="flex-1 mt-4 flex flex-col">
      <h1 className="text-2xl text-gray100 font-extrabold">My history</h1>

      <div className="flex-1 overflow-auto mt-4">
        <table className="w-full border-collapse ">
          <thead>
            <tr>
              <th className="rounded-tl-lg pl-6">Task</th>
              <th>During</th>
              <th>Start</th>
              <th className="rounded-tr-lg pr-6 ">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20 min</td>
              <td>2 years ago</td>
              <td>Conclued</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 min</td>
              <td>2 years ago</td>
              <td>Conclued</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 min</td>
              <td>2 years ago</td>
              <td>Conclued</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 min</td>
              <td>2 years ago</td>
              <td>Conclued</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 min</td>
              <td>2 years ago</td>
              <td>Conclued</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
