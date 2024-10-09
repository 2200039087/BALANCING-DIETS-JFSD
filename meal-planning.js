document.getElementById("meal-plan-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const mealDate = document.getElementById("meal-date").value;
    const mealType = document.getElementById("meal-type").value;
    const mealName = document.getElementById("meal-name").value;
    const mealRecipe = document.getElementById("meal-recipe").value;

    // Create a new row in the meal plan table
    const mealPlanBody = document.getElementById("meal-plan-body");
    const newRow = mealPlanBody.insertRow();
    newRow.insertCell(0).innerText = mealDate;
    newRow.insertCell(1).innerText = mealType;
    newRow.insertCell(2).innerText = mealName;
    newRow.insertCell(3).innerText = mealRecipe;

    // Clear the form
    this.reset();
});
