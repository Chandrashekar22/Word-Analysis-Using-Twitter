from flask import Flask,render_template,request,jsonify
from flask.templating import render_template
import subprocess
# pandas not used here ?
# import pandas as pd
import csv
from sentiment import sentimentCount
from hash_src import sourceCount,hashtagCount
from tweetsFilter import tweetsFilter

app=Flask(__name__)

# @app.route("/")
# def home():
#     return render_template('home.html')
@app.route('/',methods=['GET','POST'])
def home():
	return render_template('home.html')

# @csrf.exempt
@app.route('/search-form',methods=['GET','POST'])
def tweet():
	request_method=request.method
	if request.method=="POST":
		post=request.form['search']
		cmd=' python "./twitter_search.py " {}'.format(post)
		p=subprocess.run(cmd,shell=True)
	# return jsonify({'success':True}), 200, {'ContentType':'application/json'}
	return render_template('home.html')

@app.route('/senti-button', methods=['GET','POST'])
def giveSentiData():
	pos,neg,neut = sentimentCount()
	# return  '{} {} {}'.format(pos, neg, neut)
	return jsonify(["Sentiment","Count"],["Positive", pos],["Negative", neg],["Neutral", neut])

@app.route('/source-button', methods=['GET','POST'])
def giveSourceData():
	src = sourceCount()
	return jsonify([["Source","Count"]] + src)

@app.route('/hashtag-button', methods=['GET','POST'])
def giveHashtagData():
	topThreeHashtag = hashtagCount()[0:3]
	return jsonify(topThreeHashtag)

@app.route('/tweets-button', methods=['GET'])
def displayAllTweets():
	btnPos = list(request.args.keys())[0];
	return tweetsFilter(int(btnPos))
	
if __name__=="__main__":
    app.run(debug=True)