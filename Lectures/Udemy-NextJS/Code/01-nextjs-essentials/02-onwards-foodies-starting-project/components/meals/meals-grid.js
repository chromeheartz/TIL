import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
export default function MealsGrid({ meals }) {
  return (
    <ul className={calculateSizeAdjustValues.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
