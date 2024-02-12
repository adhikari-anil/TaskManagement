import React from 'react'
import Unstarted from './Unstarted'
import Pending from './Pending'
import Completed from './Completed'

function Task() {
  return (
    <div className="flex flex-row justify-around p-4 mt-1 box-border w-full border-4  rounded-lg">
        <Unstarted/>
        <Pending/>
        <Completed/>
    </div>
  )
}

export default Task