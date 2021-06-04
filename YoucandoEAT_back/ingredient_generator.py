import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "database.settings")

import django
django.setup()

from ycde.models import Ingredient

alergy = {
    "메밀":["메밀"],
    "밀":["밀"],
    "대두":["대두"],
    "호두":["호두"],
    "땅콩":["땅콩"],
    "복숭아":["복숭아"],
    "토마토":["토마토"],
    "돼지고기":["돼지"],
    "난류":["난류", "계란", "알"],
    "우유":["우유"],
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

ingredient = ['buckwheat',
'wheat',
'soybean',
'walnut',
'peanut',
'peach',
'tomato',
'pork',
'egg',
'milk',
'chicken',
'beef',
'Shrimp',
'mackerel',
'mussel',
'abalone',
'oyster',
'shellfish',
'crab',
'squid',
'sulfite',]

# update
# for idx, ing in enumerate(ingredient):
#     Ingredient.objects.filter(id=idx).update(image='./ycde/ingImg/'+ing+'Img.png')
#     print(f'Process ({idx + 1} / {len(ingredient)})')

# add
for idx, ing in enumerate(ingredient):
    i = Ingredient(name=ing,image='./ycde/ingImg/'+ing+'/Img.png')
    i.save()
    print(f'Process ({idx + 1} / {len(ingredient)})')