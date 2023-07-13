import React from 'react';
import RecipeAuthor from './Description';

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Triple Chocolate Cake</h1>
                    <p>This is my favorite homemade chocolate cake recipe.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }

}

export default RecipeDescription;