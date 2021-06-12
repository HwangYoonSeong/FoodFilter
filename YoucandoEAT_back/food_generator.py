foods = {}

with open("해먹남녀 레시피.txt", 'r') as f:
    print("-- read file --")
    while True:
        name = f.readline()
        if not name:
            print("-- eof --")
            break
        name = name.split("요리 : ")[1].split("\n")[0]
        recipe = f.readline().split("재료 : ")[1]
        f.readline()
        exec("recipe = " + recipe)
        foods.setdefault(name, recipe)

print(f"len foods : {len(foods)}")

ingredients = []
for v in foods.values():
    ingredients.extend(v)
print(f"len ingredients(list) : {len(ingredients)}")
print(f"len ingredients(set) : {len(set(ingredients))}")

alergy = {
    "메밀":["메밀"],
    "밀":["밀"],
    "대두":["대두"],
    "호두":["호두"],
    "땅콩":["땅콩"],
    "복숭아":["복숭아"],
    "토마토":["토마토"],
    "돼지고기":["돼지"],
    "난류":["난류", "계란", "알", "달걀"],
    "우유":["우유", "버터", "요구르트", "요거트", "치즈"],
    "닭고기":["닭"],
    "쇠고기":["쇠고기", "소고기"],
    "새우":["새우"],
    "고등어":["고등어"],
    "홍합":["홍합"],
    "전복":["전복"],
    "굴":["굴"],
    "조개류":["조개"],
    "게":["게"],
    "오징어":["오징어"],
    "아황산":["아황산"],
}

def ingredientbit(food):
    rbit = 0
    ibit = 1
    for al_val in alergy.values():
        for al_val2 in al_val:
            for fo_val in food.values():
                for fo_val2 in fo_val:
                    if al_val2 in fo_val2:
                        rbit |= ibit
                        break
        ibit *= 2
    
    return rbit

ibl = []
for n, r in foods.items():
    ibl.append(ingredientbit({n:r}))

print(f"len foods : {len(foods)}")
print(f"len ibl : {len(ibl)}")

import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "database.settings")

import django
django.setup()

from ycde.models import Food

#add
for idx, ((f, i), b) in enumerate(zip(foods.items(), ibl)):
    ingredient = ""
    for j in i:
        ingredient += j + ','
    food = Food(name=f, ingredientBit=b, ingredientDetail=ingredient)
    food.save()
    if idx % 100 == 0:
        print(f"Process ({idx + 1} / {len(foods)})")