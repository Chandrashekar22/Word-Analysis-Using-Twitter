import pandas as pd
import warnings
warnings.filterwarnings("ignore")

def sentimentCount():
	df=pd.read_csv('result.csv')
	pos=neg=neut=0
	total=len(df)
	for i in range(total):
	  if df.polarity[i]>0:
	      pos+=1
	  elif df.polarity[i]<0:
	      neg+=1
	  else:
	      neut+=1

	return pos,neg,neut

# print("Positive tweets :",pos)
# print("Negative tweets :",neg)
# print("Neutral tweets :",neut)
# print("Positive percentage :",(pos/total)*100)
# print("Negative percentage :",(neg/total)*100)
# print("Neutral percentage :",(neut/total)*100)

