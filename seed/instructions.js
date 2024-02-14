const db = require('../db')
const {Instruction, Recipe} = require('../models')

db.on('error', console.error.bind(console, 'Instruction Seed - MongoDB connection error:'))

const main = async() => {
    const clamChowder = await Recipe.findOne({ name: 'Clam Chowder' })
    const crabCakes = await Recipe.findOne({ name: 'Crab Cakes' })
    const scallops = await Recipe.findOne({ name: 'Scallops' })
    const frenchToast = await Recipe.findOne({ name: 'French Toast' })
    const breakfastSkillet = await Recipe.findOne({ name: 'Breakfast Skillet' })
    const blueberryPancakes = await Recipe.findOne({ name: 'Blueberry Pancakes' })
    const bananasFoster = await Recipe.findOne({ name: 'Bananas Foster' })
    const cherryPie = await Recipe.findOne({ name: 'Cherry Pie' })
    const peachCobbler = await Recipe.findOne({ name: 'Peach Cobbler' })

    const instructions = [
        {
            recipe: clamChowder._id,
            instruction_list: [
                '1: Place potatoes, carrots, celery, and onion into a large skillet; pour in clam juice and add enough water to cover.',
                '2: Cook and stir over medium-low heat until vegetables are tender.',
                '3: Melt butter in a large saucepan over medium heat. Whisk in flour until smooth. Whisk in cream and stir constantly until thick and smooth.',
                '4: Stir in vegetable mixture with any juices until just heated through.',
                '5: Stir in clams just before serving; if they cook too much they get tough.',
                '6: When clams are heated through, stir in vinegar and season with salt and pepper.',
            ]
        },
        {
            recipe: crabCakes._id,
            instruction_list: [
              '1: Preheat the oven broiler. Lightly grease a broiler pan or baking sheet with cooking spray.',
              '2: Mix crabmeat, bread crumbs, parsley, salt, and pepper together in a large bowl.',
              '3: Mix egg, mayonnaise, mustard, and hot sauce together in a small bowl; stir into crab mixture until well combined.',
              '4: Form into patties and place on the prepared broiler pan or baking sheet.',
              '5: Broil crab cakes under the preheated broiler until golden brown on both sides, about 5 to 7 minutes per side.',
              '6: Serve hot and enjoy!',
            ]
        },
        {
            recipe: scallops._id,
            instruction_list: [
              '1: In a large bowl, mix together flour, salt, oregano, thyme and lemon pepper. Roll scallops in flour mixture until lightly coated on all sides.',
              '2: Heat olive oil in a skillet or frying pan over high heat.',
              '3: Add 4 scallops to the pan and sear on all sides, about 2 minutes for each side',
              '4: After turning scallops, add 1 tablespoon parsley and 1 teaspoon lemon juice.',
              '5: Remove scallops from pan and place on a plate in the oven to keep warm until ready to serve.',
              '6: Repeat until remaining scallops are cooked, tossing each batch with parsley and lemon juice.',
            ]
        },


        {
            recipe: frenchToast._id,
            instruction_list: [
                '1: Whisk milk, eggs, vanilla, cinnamon, and salt together in a shallow bowl.',
                '2: Lightly butter a griddle or skillet and heat over medium-high heat.',
                '3: Dunk bread in the egg mixture, soaking both sides.',
                '4: Transfer to the hot skillet and cook until golden, 3 to 4 minutes per side.',
                '5: Stir in clams just before serving; if they cook too much they get tough.',
                '6: Serve hot.',
            ]
        },
        {
            recipe: breakfastSkillet._id,
            instruction_list: [
              '1: Cook bacon in a large skillet over medium-high heat, turning occasionally, until evenly browned, about 10 minutes. Drain on paper towels; reserve most of the bacon fat in the skillet. Crumble bacon and set aside.',
              '2: Reduce heat to medium. Cook and stir onion in reserved bacon fat until slightly softened, about 5 minutes. Add potatoes; toss to coat evenly in bacon fat.',
              '3: Pour in water and cover the skillet. Cook, stirring occasionally, until potatoes are tender, about 20 minutes.',
              '4: Mix in green onions, garlic, and paprika. Season with kosher salt and pepper.',
              '5: Make 4 wells in potato mixture using a wooden spoon, revealing the bottom of the skillet. Crack an egg into each well; season with salt and pepper.',
              '6: Sprinkle Cheddar cheese and bacon over the entire skillet.',
              '7: Cover and cook until egg whites are set and yolks are still runny, about 5 minutes'
            ]
        },
        {
            recipe: blueberryPancakes._id,
            instruction_list: [
                '1: Process oats in a blender or food processor until the consistency of flour.',
                '2: Combine ground oats, cinnamon, baking powder, and salt in a bowl.',
                '3: Whisk eggs, honey, almond milk, 1 tablespoon coconut oil, and vanilla extract together in a separate bowl.',
                '4: Stir oat mixture into egg mixture until batter is well mixed; fold in blueberries.',
                '5: Drop batter by large spoonfuls onto the griddle and cook until bubbles form and the edges are dry, 3 to 4 minutes. Flip and cook until browned on the other side, 2 to 3 minutes.',
                '6: Repeat with remaining batter.',
            ]
        },


        {
            recipe: bananasFoster._id,
            instruction_list: [
              '1: Melt butter in a large, deep skillet over medium heat.',
              '2: Stir in brown sugar, rum, vanilla, and cinnamon; bring to a low boil.',
              '3: Place bananas and walnuts in the pan. Cook until bananas have softened, 1 to 2 minutes.',
              '4: Serve immediately over vanilla ice cream.'
            ]
        },
        {
            recipe: cherryPie._id,
            instruction_list: [
                '1: Whisk flour and salt together in a bowl. Cut in shortening with 2 knives or a pastry blender until mixture resembles coarse crumbs. Mix in cold water by hand just until dough holds together. Divide dough in half and form into disks. Wrap each disk in plastic wrap and refrigerate until chilled, 30 minutes to 1 hour.',
                '2: Roll out 1 dough disk into an 11-inch circle and press it into a 9-inch pie dish. Place in the refrigerator until needed. Roll out remaining dough disk into an 11-inch circle for the top crust, transfer it to a plate or baking sheet, and refrigerate until needed.',
                '3: Preheat the oven to 375 degrees F (190 degrees C). Place a baking tray in the oven to preheat.',
                '4: Place cherries, sugar, and cornstarch in a medium, non-aluminum saucepan. Allow mixture to stand until juices begin to release, about 10 minutes. Bring to a boil over medium heat, stirring constantly. Lower the heat and simmer until juices thicken and become translucent, about 1 minute. Remove from heat and stir in butter and almond extract. Allow filling to cool to lukewarm.',
                '5: Pour cooled filling into prepared pie crust. Cover with top crust, trim and crimp the edges to seal, and cut vents for steam.',
                '6: Bake in the preheated oven on the preheated baking tray until crust is golden brown, 45 to 55 minutes. Allow to cool for several hours before slicing.',
            ]
        },
        {
            recipe: peachCobbler._id,
            instruction_list: [
                '1: Preheat the oven to 425 degrees F (220 degrees C).',
                '2: Combine peaches, 1/4 cup white sugar, 1/4 cup brown sugar, 1/4 teaspoon cinnamon, nutmeg, lemon juice, and cornstarch in a large bowl; toss to coat evenly, and pour into a 2-quart baking dish.',
                '3: Bake in preheated oven for 10 minutes.',
                '4: Meanwhile, combine flour, 1/4 cup white sugar, 1/4 cup brown sugar, baking powder, and salt in a large bowl. Blend in butter with your fingertips or a pastry blender until mixture resembles coarse meal. Stir in water until just combined.',
                '5: Remove peaches from oven, and drop spoonfuls of topping over them.',
                '6: Mix 3 tablespoons white sugar and 1 teaspoon cinnamon together in a small bowl; sprinkle over entire cobbler.',
                '7: Bake in the preheated oven until topping is golden, about 30 minutes.'
            ]
        },
        
    ]
    await Instruction.insertMany(instructions)
    console.log('created instructions')
}

const run = async() => {
  await main()
  db.close()
}

run()