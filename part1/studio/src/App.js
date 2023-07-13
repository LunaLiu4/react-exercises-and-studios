import logo from './logo.svg';
import './App.css';
import RecipeAuthor from './components/Description.js';
import RecipeDescription from './components/RecipeDescription';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/Photos';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <RecipePhoto />
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </div>
  );
}

export default App;
