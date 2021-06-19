import pandas as pd
import numpy as np
import warnings
warnings.filterwarnings("ignore")

df=pd.read_csv('result.csv')

def hashtagCount():
	hash_values = df['hashtag'].value_counts().keys().tolist()
	# hash_counts = df['hashtag'].value_counts().tolist()

	# for i in range(len(hash_values)):
	#	print(hash_values[i],hash_counts[i])
	if "None" in hash_values:
		hash_values.remove("None")
	return hash_values

def sourceCount():
	src_values = df['source'].value_counts().keys().tolist()
	src_counts = df['source'].value_counts().tolist()

	# for i in range(len(src_values)):
	#     print(src_values[i],src_counts[i])
	# src = np.vstack((src_values,src_counts)).T
	src = pd.DataFrame([src_values,src_counts]).T
	return src.values.tolist()