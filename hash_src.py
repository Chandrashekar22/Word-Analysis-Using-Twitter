import pandas as pd
import warnings
warnings.filterwarnings("ignore")

df=pd.read_csv('result.csv')

hash_values = df['hashtag'].value_counts().iloc[1:4].keys().tolist()
hash_counts = df['hashtag'].value_counts().iloc[1:4].tolist()

for i in range(len(hash_values)):
    print(hash_values[i],hash_counts[i])

src_values = df['source'].value_counts().keys().tolist()
src_counts = df['source'].value_counts().tolist()

for i in range(len(src_values)):
    print(src_values[i],src_counts[i])