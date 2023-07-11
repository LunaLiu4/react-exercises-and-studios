import React from "react";
import classes from './ChoresList.module.css';

// export default function ChoresList () {
class ChoresList extends React.Component {
   render() {
      const chores = ['Grocery Shopping', 'Cleaning', 'Laundry', 'Dishwashing'];
      return (
         <div>
            <h3 className={classes.choresHeading}>Chores List Need To Do</h3>
            <ol>
               <li className={classes.choresText}>{chores[0]}</li>
               <li className={classes.choresText}>{chores[1]}</li>
               <li className={classes.choresText}>{chores[2]}</li>
               <li className={classes.choresText}>{chores[3]}</li>
            </ol>
         </div>
      );
   }

}
export default ChoresList;