import React from 'react'

function Cell({ title, description, bgColorClass, borderColorClass, textColorClass }) {
  return (
    <div className="w-full sm:w-1/2">
      <div className="relative h-full ml-0 mr-0 sm:mr-10">
        <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${bgColorClass} rounded-lg`}></span>
        <div className={`relative h-full p-5 bg-white border-2 ${borderColorClass} rounded-lg`}>
          <div className="flex items-center -mt-1">
            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">{title}</h3>
          </div>
          <p className={`mt-3 mb-1 text-xs font-medium ${textColorClass} uppercase`}>------------</p>
          <p className="mb-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cell
