const food_items = [

    {

        title: "Avocado",
        thumbnail: require("../Assets/Food_images/avocado.jpg"),
        rating: 3,
        kcals: 322,
        source: "https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2",
        pros: ["High in healthy fats", "Low in sugar", "High in many vitamins and minerals including C, K, Folate, Potassium and more"],
        cons: ["Can be expensive", "High in kcalories"],
        categories: ["Vegetarian", "Lunch", "Breakfast", "< 5 mins"]

    },

    {

        title: "Egg",
        thumbnail: require("../Assets/Food_images/egg.jpg"),
        rating: 4,
        kcals: 63,
        source: "https://nutritiondata.self.com/facts/dairy-and-egg-products/111/2",
        pros: ["Cheap to buy", "Very low in calories", "High in protein", "High in many vitamins and minerals including A, D, B2, B9, B12, Iron, Phosphorous and more"],
        cons: ["Very high in cholesterol (343% of RDA)", "High in saturated fats"],
        categories: ["Breakfast", "Lunch"]

    },

    {

        title: "Oats",
        thumbnail: require("../Assets/Food_images/oats.jpg"),
        rating: 5,
        kcals: 195,
        source: "https://nutritiondata.self.com/facts/cereal-grains-and-pasta/5708/2",
        pros: ["Cheap to buy", "Can be used to make many different foods. E.g. Healthy Oat cookies", "High in complex carbohydrates to keep you fuller for longer", "High in many vitamins and minerals including B1, Iron, Magnesium, Phospohorous and Zinc", "Good for your heart"],
        cons: ["Very high in manganese (123% of RDA) which can be toxic in excessive doses", "Many instant oats have added sugar (maple syrup ect)"],
        categories: ["Breakfast", "Vegetarian"]

    },

    {

        title: "Almonds",
        thumbnail: require("../Assets/Food_images/almonds.jpg"),
        rating: 4,
        kcals: 143,
        source: "https://nutritiondata.self.com/facts/nut-and-seed-products/3085/2",
        pros: ["Cheap to buy", "Can be eaten with no preparation", "High in healthy fats", "High in many vitamins and minerals including B2, E, Magnesium and Copper"],
        cons: ["Eating in excess may lead to constipation"],
        categories: ["< 5 mins", "Snacks", "Vegetarian"]

    },

    {

        title: "Tuna",
        thumbnail: require("../Assets/Food_images/tuna.jpg"),
        rating: 3,
        kcals: 191,
        source: "https://nutritiondata.self.com/facts/finfish-and-shellfish-products/4206/2",
        additional_source: "https://holisticacare.com/pros-cons-tuna/",
        pros: ["Cheap to buy", "Very high in protein", "High in omega 3 fatty acids", "High in many vitamins and minerals including B3, B6, B12, Phosphorous and Selenium"],
        cons: ["High in mercury, which is toxic in large doses (Research recommends you limit yourself to 3 times per month)"],
        categories: ["< 5 mins", "Lunch", "Dinner"]

    },

    {

        title: "Salmon",
        thumbnail: require("../Assets/Food_images/salmon.jpg"),
        rating: 4,
        kcals: 367,
        source: "https://nutritiondata.self.com/facts/finfish-and-shellfish-products/4259/2",
        pros: ["High in many vitamins and minerals including B1, B3, B12, Phosphorous, Potassium and Selenium", "Very high in healthy omega 3 fatty acids", "Very high in protein"],
        cons: ["High in calories compared to other fish", "Can be expensive"],
        categories: ["Dinner"]

    },

    {

        title: "Beef liver",
        thumbnail: require("../Assets/Food_images/liver.jpg"),
        rating: 5,
        kcals: 191,
        source: "https://nutritiondata.self.com/facts/beef-products/3469/2",
        pros: ["High in many vitamins and minerals including A, B2, B3, B6, B9, B12, Iron, Phosphorous, Copper and Selenium", "Cheap to buy", "High in protein"],
        cons: ["High in cholesterol (132% of rda)"],
        categories: [ "< 200 Kcal", "Dinner"]

    },
    
]

export default food_items