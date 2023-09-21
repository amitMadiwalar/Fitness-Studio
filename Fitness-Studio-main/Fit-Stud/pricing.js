document.addEventListener("DOMContentLoaded", function () {
    // Sample pricing data (you can replace this with your actual data)
    const pricingData = [
      
    ];

    // Get the container where pricing plans will be displayed
    const pricingContainer = document.querySelector(".pricing-plans");

    // Function to generate pricing plan cards
    function generatePricingPlans() {
        pricingData.forEach((plan) => {
            const planCard = document.createElement("div");
            planCard.classList.add("pricing-plan");

            const title = document.createElement("h3");
            title.textContent = plan.title;

            const description = document.createElement("p");
            description.textContent = plan.description;

            const price = document.createElement("p");
            price.textContent = plan.price;

            const selectButton = document.createElement("button");
            selectButton.textContent = "Select Plan";

            planCard.appendChild(title);
            planCard.appendChild(description);
            planCard.appendChild(price);
            planCard.appendChild(selectButton);

            pricingContainer.appendChild(planCard);
        });
    }

    // Call the function to generate pricing plans
    generatePricingPlans();
});
