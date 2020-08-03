const handle_filters = (filters, search_string, food_items, set_items) => {

    const filtered_items = []//initialise the array to hold filtered items (selected with the filter panel)
    const searched_for_items = []//hold the array of search for items (with the search bar)

    if (!search_string && filters.length < 1) { return set_items(food_items) }//if theres no filters or search string, show all items

    if (filters.length) { apply_filter_panel(food_items, filters, filtered_items) }//if there are filters, call the filterpanel function

    //if there is a search string, call the search string function, which will then set the food items to display once finished
    if (search_string) { apply_search_string(filters, filtered_items, food_items, search_string, searched_for_items, set_items) }

    //otherwise if theres filters, but no search string, set the food items to display to the ones which have been filtered by the filter panel
    else if (filters.length) return set_items(filtered_items)

}

/* This function is called whenever a user opens the filter panel and selects one or more, e.g. breakfast*/

const apply_filter_panel = (food_items, filters, filtered_items) => {

    food_items.forEach(item => {//loop through all available food items

        item.categories.forEach(category => {//while looping through the categories of each item inside (categories are set in src/data/data.js)

            filters.forEach(filter => {//while also looping through the currently applied filters (e.g. breakfast)

                if (filter === category) {//if a match is found (e.g. they type breakfast and oats has breakfast in its array of categories)

                    //check that the food item is not already inside the array of filtered items
                    const item_already_inside = filtered_items.find(filtered_item => filtered_item === item)

                    //if it isnt, add it 
                    if (!item_already_inside) filtered_items.push(item)
                }

            })
        })

    })

}

/* This is called whenever the user types in a search string into the search input at the top right 
It checks to see if any filters from the filter panel have been applied*/

const apply_search_string = (filters, filtered_items, food_items, search_string, searched_for_items, set_items) => {

    let array_to_search;//define an array to search

    if (filters.length) { array_to_search = filtered_items }//if filters from the filter panel have been applied, search the filtered items (set by the apply filter_panel function)

    else { array_to_search = food_items }//otherwise if theres no filters, search all available food items

    array_to_search.forEach(item => {//loop through the array of food items to search (set just above this line)

        const lowercase_title = item.title.toLowerCase()//set the title of each item to lowercase to do a case insensitive comparison

        if (lowercase_title.includes(search_string.toLowerCase())) {//if the title includes the search string (e.g. they searched for avoca, avocado would show)

            searched_for_items.push(item)//add the item to the array of searched for items to display

        }

        else {//otherwise if the title did not contain the search string

            for (let category of item.categories) {//loop through the array of categories associated with the item

                if (category.toLowerCase().includes(search_string.toLowerCase())) {//if the category contains the search string (e.g. they typed sala, salad would trigger)

                    return searched_for_items.push(item)//add the item to the array of searched for items to display
                }

            }

        }

    })

    return set_items(searched_for_items)//set the items to display to the searched for items we just filtered

}

export default handle_filters