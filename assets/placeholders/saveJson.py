import requests
import json

def saveJsons(url, foodType):

	apiKey = '1eed4400787247809896c66ce2868585'

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

	responseRecipeInfo = requests.get('https://api.spoonacular.com/recipes/' + str(fid)  + '/information?apiKey=' + apiKey)

	recipeInfo = open((foodType + "Info.json"), "w")
	json.dump(responseRecipeInfo.json(), recipeInfo)
	recipeInfo.close()

# burger
# imageUrl = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg'

# beef ribs
# imageUrl = 'https://images.food52.com/ZLbEpdkM0LbKcwAZUCXbdxTja8k=/2016x1344/140a706e-f1ff-4ff4-b0a4-9f3fbc5e5258--2014-0923_coffee-crusted-barbecue-ribs-012.jpg'

# saveJsons(imageUrl, 'ribs')

# chili
# imageUrl = 'https://www.cookingclassy.com/wp-content/uploads/2021/02/turkey-chili-33.jpg'

# saveJsons(imageUrl, 'chili')

# fruit salad
imageUrl = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg'

saveJsons(imageUrl, 'fruitSalad')

#################################################
# Test

# f = open('burgerInfo.json')

# data = json.load(f)

# print(data['analyzedInstructions'])

# f = open('recipeInfoNoSteps.json')

# data = json.load(f)

# print(data['analyzedInstructions'][0]['steps'])

# for a in data['analyzedInstructions']:
# 	for s in a['steps']:
# 		print(s['number'], s['step'])

# f = open('ribsAnalysis.json')

# data = json.load(f)

# print(data['recipes'])