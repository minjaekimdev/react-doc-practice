const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

function Recipe({id, name, ingredients}) { // map의 중첩을 막기 위해 Recipe 컴포넌트를 추출하고, id, name, ingredients 자료를 props로 전달달
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient + id}>{ingredient}</li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} />
      )} 
    </div>
  );
} // {...recipe} 는 recipe 객체의 모든 속성을 Recipe 컴포넌트 props로 전달
// 컴포넌트로 된 배열이므로 컴포넌트 자체에 key를 전달해야 함.
