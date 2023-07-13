import styles from "./Description.module.css";
import React from 'react';

const RecipeAuthor = () => {
    let authorLink = "https://sallysbakingaddiction.com/triple-chocolate-layer-cake/";
    let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/profile-sally.jpg";
    let authorName = "Sally McKenney";
    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Sally McKenney" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Triple Chocolate Cake</a>
            </div>
        </div>
    );
}
export default RecipeAuthor;
