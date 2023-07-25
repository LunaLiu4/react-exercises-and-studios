const RecipeAuthor = () => {
   let authorLink = "https://sallysbakingaddiction.com/about/";
   let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/profile-sally.jpg";
   let authorName = "Sally McKenney";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["All-Purpose Flour","Oil","Eggs","Buttermilk","Hot Coffee"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Chocolate Cake</h1>
            <p>This is my favorite homemade chocolate cake recipe. With a super moist crumb and fudgy, yet light texture, this chocolate cake recipe will soon be your favorite too. Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor. You can also prepare this chocolate layer cake as a sheet cake, too. See recipe note</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4-600x600.jpg" alt="Recipe Photo" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}