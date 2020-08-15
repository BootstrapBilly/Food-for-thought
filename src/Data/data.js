const food_items = [

    {

        title: "Avocado",
        thumbnail: "avocado",
        image: "avocado-large",
        rating: 3,
        kcals: 322,
        source: "https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2",
        pros: ["High in healthy fats", "Low in sugar", "High in many vitamins and minerals including C, K, Folate, Potassium and more"],
        cons: ["Can be expensive", "High in kcalories"],
        categories: ["Vegetarian", "Lunch", "Breakfast", "< 5 mins", "salad", "vegetables"],
        toggle_options: [{text:"Half", multiplier:0.5}, {text:"Whole", multiplier:1}],
        default_portion:"Whole"

    },

    {

        title: "Egg",
        thumbnail: "egg",
        image: "egg-large",
        rating: 4,
        kcals: 63,
        source: "https://nutritiondata.self.com/facts/dairy-and-egg-products/111/2",
        pros: ["Cheap to buy", "Very low in calories", "High in protein", "High in many vitamins and minerals including A, D, B2, B9, B12, Iron, Phosphorous and more"],
        cons: ["Very high in cholesterol (343% of RDA)", "High in saturated fats"],
        categories: ["Breakfast", "Lunch"],
        toggle_options: [{text:"One", multiplier:1}, {text:"Two", multiplier:2}, {text:"Three", multiplier:3}],
        default_portion:"One"

    },

    {

        title: "Oats",
        thumbnail: "oats",
        image: "oats-large",
        rating: 5,
        kcals: 195,
        source: "https://nutritiondata.self.com/facts/cereal-grains-and-pasta/5708/2",
        pros: ["Cheap to buy", "Can be used to make many different foods. E.g. Healthy Oat cookies", "High in complex carbohydrates to keep you fuller for longer", "High in many vitamins and minerals including B1, Iron, Magnesium, Phospohorous and Zinc", "Good for your heart"],
        cons: ["Very high in manganese (123% of RDA) which can be toxic in excessive doses", "Many instant oats have added sugar (maple syrup ect)"],
        categories: ["Breakfast", "Vegetarian", "porridge"],
        toggle_options: [{text:"25g", multiplier:0.5}, {text:"50g", multiplier:1}, {text:"75g", multiplier:1.5}, {text:"100g", multiplier:2}],
        default_portion:"50g"

    },

    {

        title: "Almonds",
        thumbnail: "almonds",
        image: "almonds-large",
        rating: 4,
        kcals: 143,
        source: "https://nutritiondata.self.com/facts/nut-and-seed-products/3085/2",
        pros: ["Cheap to buy", "Can be eaten with no preparation", "High in healthy fats", "High in many vitamins and minerals including B2, E, Magnesium and Copper"],
        cons: ["Eating in excess may lead to constipation"],
        categories: ["< 5 mins", "Snacks", "Vegetarian", "nuts"],
        toggle_options: [{text:"12.5g", multiplier:0.5}, {text:"25g", multiplier:1}, {text:"37.5g", multiplier:1.5}, {text:"50g", multiplier:2}],
        default_portion:"25g"

    },

    {

        title: "Tuna steak",
        thumbnail: "tuna",
        image: "tuna-large",
        rating: 3,
        kcals: 144,
        source: "https://www.nutritionvalue.org/Fish%2C_raw%2C_bluefin%2C_fresh%2C_tuna_nutritional_value.html",
        additional_source: {url:"https://holisticacare.com/pros-cons-tuna/", text:"The source of the mercury information can be found here"},
        pros: ["Cheap to buy", "Very high in protein", "High in omega 3 fatty acids", "High in many vitamins and minerals including B3, B6, B12, Phosphorous and Selenium"],
        cons: ["High in mercury, which is toxic in large doses (Research recommends you limit yourself to 3 times per month)"],
        categories: ["Lunch", "Dinner", "fish"],
        toggle_options: [{text:"50g", multiplier:0.5}, {text:"100g", multiplier:1} , {text:"200g", multiplier:2}], 
        default_portion:"100g"

    },

    {

        title: "Salmon Fillet",
        thumbnail: "salmon",
        image: "salmon-large",
        rating: 4,
        kcals: 367,
        source: "https://nutritiondata.self.com/facts/finfish-and-shellfish-products/4259/2",
        pros: ["High in many vitamins and minerals including B1, B3, B12, Phosphorous, Potassium and Selenium", "Very high in healthy omega 3 fatty acids", "Very high in protein"],
        cons: ["High in calories compared to other fish", "Can be expensive"],
        categories: ["Dinner", "fish"],
        toggle_options: [{text:"Quarter", multiplier:0.5}, {text:"Half", multiplier:1}, {text:"Whole", multiplier:2}],
        default_portion:"Half"

    },

    {

        title: "Beef liver",
        thumbnail: "liver",
        image: "liver-large",
        rating: 5,
        kcals: 191,
        source: "https://nutritiondata.self.com/facts/beef-products/3469/2",
        pros: ["High in many vitamins and minerals including A, B2, B3, B6, B9, B12, Iron, Phosphorous, Copper and Selenium", "Cheap to buy", "High in protein"],
        cons: ["High in cholesterol (132% of rda)"],
        categories: [ "< 200 Kcal", "Dinner", "meat"],
        toggle_options: [{text:"50g", multiplier:0.5}, {text:"100g", multiplier:1}, {text:"150g", multiplier:1.5}],
        default_portion:"100g"

    },
    
]

export default food_items