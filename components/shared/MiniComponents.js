
import React from 'react'
export const UpdateDelete = (onUpdate,onDelete)=>(
  <>
          <a onClick={()=>onUpdate}>
            update</a>&nbsp;
          <a onClick={()=>onDelete}>
            Delete</a>
        </>
)