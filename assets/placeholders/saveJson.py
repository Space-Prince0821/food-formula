import requests
import json

def saveJsons(url, foodType):

	apiKey = 'd39928a7b31048459f53673e3e5b3c91'

	responseImg = requests.get('https://api.spoonacular.com/food/images/analyze?apiKey=' + apiKey + '&imageUrl=' + imageUrl).text

	if '"status":"failure"' in responseImg:
		print('Error: API daily limit reached.')
		return

	imageAnalysis = open((foodType + "Analysis.json"), "w")
	json.dump(json.loads(responseImg), imageAnalysis)
	imageAnalysis.close()

	f = open(foodType + "Analysis.json")

	data = json.load(f)

	fid = data['recipes'][0]['id']

	responseRecipeInfo = requests.get('https://api.spoonacular.com/recipes/' + str(firstRecipeId)  + '/information?apiKey=' + apiKey)

	recipeInfo = open((foodType + "Info.json"), "w")
	json.dump(responseRecipeInfo.json(), recipeInfo)
	recipeInfo.close()

# burger
# imageUrl = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg'

# salad
imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnatashaskitchen.com%2Fcaesar-salad-recipe%2F&psig=AOvVaw0cLQ4PluXKWi-nN24a2Qb3&ust=1646356640944000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCj1sniqPYCFQAAAAAdAAAAABAD'

saveJsons(imageUrl, 'salad')

#################################################
# Test

# f = open('recipeInfo.json')

# data = json.load(f)

# for a in data['analyzedInstructions']:
# 	for s in a['steps']:
# 		print(s['number'], s['step'])

# f = open('burgerAnalysis.json')

# data = json.load(f)

# print(data['recipes'][0]['id'])