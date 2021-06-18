import pandas as pd
import stylecloud

import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings("ignore")

df=pd.read_csv('e:/complete web development course/projects/tweetpedia_web/result.csv')

newtext=""
for i in range(len(df)):
  newtext+=df.text[i]

list=["https","http"]
stylecloud.gen_stylecloud(text=newtext, icon_name= "fab fa-twitter",custom_stopwords=list, palette="cartocolors.diverging.TealRose_7",collocations=False, background_color="black")
