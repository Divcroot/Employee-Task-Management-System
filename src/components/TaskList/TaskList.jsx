import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex items-start gap-6 flex-nowrap w-full mt-16 py-4 
                 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 
                 scrollbar-track-gray-900 rounded-xl px-2
                 snap-x snap-mandatory"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
      })}
    </div>
  )
}

export default TaskList
