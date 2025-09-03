import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-10">
      {/* New Task */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-500 to-indigo-500 
                      shadow-lg shadow-black/20 text-white transform transition 
                      hover:scale-105 hover:shadow-xl">
        <h2 className="text-4xl font-extrabold">{data.taskCounts.newTask}</h2>
        <h3 className="text-lg mt-2 font-medium opacity-90">New Task</h3>
      </div>

      {/* Completed Task */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-emerald-400 to-green-600 
                      shadow-lg shadow-black/20 text-white transform transition 
                      hover:scale-105 hover:shadow-xl">
        <h2 className="text-4xl font-extrabold">{data.taskCounts.completed}</h2>
        <h3 className="text-lg mt-2 font-medium opacity-90">Completed Task</h3>
      </div>

      {/* Accepted Task */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-yellow-400 to-orange-500 
                      shadow-lg shadow-black/20 text-black transform transition 
                      hover:scale-105 hover:shadow-xl">
        <h2 className="text-4xl font-extrabold">{data.taskCounts.active}</h2>
        <h3 className="text-lg mt-2 font-medium opacity-90">Accepted Task</h3>
      </div>

      {/* Failed Task */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-rose-400 to-red-600 
                      shadow-lg shadow-black/20 text-white transform transition 
                      hover:scale-105 hover:shadow-xl">
        <h2 className="text-4xl font-extrabold">{data.taskCounts.failed}</h2>
        <h3 className="text-lg mt-2 font-medium opacity-90">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
