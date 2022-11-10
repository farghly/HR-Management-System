import React from 'react'
const Card = (props) => {
   return (
      <>
         <div className="one d-flex gap-4 flex-column details-card">
            <div className="first-card bg-white d-flex align-items-center p-3">
               <i className="fa-regular fa-user bgrebeccapurple"></i>
               <div className="card-text ms-2">
                  <h4>{props.title}</h4>
                  <a to="/">{props.details}</a>
               </div>
            </div>
            <div className="second-card bgrebeccapurple text-center p-3 text-light">
               <div className="num">0</div>
               <div className="second-card-text">{props.former}</div>
            </div>
         </div>
      </>
   )
}
export default Card