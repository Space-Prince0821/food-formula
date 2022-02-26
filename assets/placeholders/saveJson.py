import requests
import json

# apiKey = 'd39928a7b31048459f53673e3e5b3c91'

# reponseImg = requests.get('https://api.spoonacular.com/food/images/analyze?apiKey=' + apiKey + '&imageUrl=https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg').text

# imageAnalysis = open("recipeImageAnalysisInfo.json", "w")
# json.dump(json.loads(reponseImg), imageAnalysis)
# imageAnalysis.close()

# firstRecipeId = 477749

# responseRecipeInfo = requests.get('https://api.spoonacular.com/recipes/' + str(firstRecipeId)  + '/information?apiKey=' + apiKey)

# recipeInfo = open("recipeInfo.json", "w")
# json.dump(responseRecipeInfo.json(), recipeInfo)
# recipeInfo.close()

#################################################
# Test

f = open('recipeInfo.json')

data = json.load(f)

print(data['extendedIngredients'])