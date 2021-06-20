import pandas as pd
import warnings
warnings.filterwarnings("ignore")

def tweetsFilter(pos):
	df=pd.read_csv('result.csv')
	# print(df)
	# df = pd.DataFrame(df['created'],df['username'],df['text'],df['polarity']).T
	df = df.drop(['source','retwc','hashtag','followers','friends','subjectivity'],axis=1)
	# total=len(df)
	# print(df)
	# for i in range(total):
	#   if df.polarity[i]>0:
	      
	#   elif df.polarity[i]<0:
	#       neg+=1
	#   else:
	#       neut+=1
	# print(pos)
	# print(type(pos))
	posdf = df[df.polarity > 0]
	negdf = df[df.polarity < 0]
	neutdf = df[df.polarity == 0]

	if pos == 1:
		allhtml = df.to_html(classes = "styled-table", justify = "center", index = False, columns = ["created","username","text"])
		return allhtml
	elif pos == 2:
		poshtml = posdf.to_html(classes = "styled-table", justify = "center", )
		return poshtml
	elif pos == 3:
		neghtml = negdf.to_html(classes = "styled-table", justify = "center")
		return neghtml
	elif pos == 4:
		neuthtml = neutdf.to_html(classes = "styled-table", justify = "center")
		return neuthtml
	else:
		return "Invalid button/position passed"	
	
 
	# poshtmlfile = open("templates/postweets.html", "w", encoding='utf-8')
	# poshtmlfile.write(poshtml)
	# poshtmlfile.close()

	# poshtmlfile = open("templates/negtweets.html", "w", encoding='utf-8')
	# poshtmlfile.write(neghtml)
	# poshtmlfile.close()

	# poshtmlfile = open("templates/neuttweets.html", "w", encoding='utf-8')
	# poshtmlfile.write(neuthtml)
	# poshtmlfile.close()

	# poshtmlfile = open("templates/alltweets.html", "w", encoding='utf-8')
	# poshtmlfile.write(allhtml)
	# poshtmlfile.close()

	# return poshtml,neghtml,neuthtml,allhtml