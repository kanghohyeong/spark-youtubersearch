import pandas as pd

words = ['브론즈','실버','골드','플레티넘','다이아몬드','첼린저','천상계','실력']

data = pd.read_csv('channels.csv')
names = data['name_namuwiki']

name_list = []
data_list = []

for name in names:
    print(name)
    data = pd.read_csv('namuwiki_csv/'+name+'.csv', encoding = 'utf-8')
    data = data["sentences"]
    for sent in data:
        for word in words:
            if sent.find(word) != -1:
                data_list.append(sent)
                name_list.append(name)
                break
df = pd.DataFrame({"name":name_list , "sentence":data_list})
df.to_csv("sentences.csv",index  = False, encoding = 'utf-8')
