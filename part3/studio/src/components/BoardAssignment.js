import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [
      {
         value: 1,
         label: "chocolate cake"
      },
      {
         value: 2,
         label: "mac cheese"
      },
      {
         value: 3,
         label: "pasta"
      }];

   const [boardName, setName] = useState('no boards yet!');
   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board:</label>
         <select value={boardName} onChange={handleChange}>
            {boards.map((board) => {
               return (
                  <option key={board.value} value={board.value}>{board.label}</option>
               )
            })}
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}