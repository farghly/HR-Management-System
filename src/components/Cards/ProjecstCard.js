import React from 'react'

const ProjecstCard = (props) => {
   return (
      <>
         <tr>
            <td class="project-name">{props.name}</td>
            <td class="project-status">{props.status}</td>
            {/* <td class="project-employee">{props.employee}</td> */}
            <td class="project-start-date">{props.startDate}</td>
            <td class="project-end-date">{props.endDate}</td>
            <td>
               <button class="edit">
                  <i class="fa-regular fa-pen-to-square"></i>
               </button>
            </td>
         </tr>
      </>
   )
}

export default ProjecstCard
