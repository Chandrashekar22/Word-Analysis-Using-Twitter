from flask import Flask,render_template,request
from flask.templating import render_template
import subprocess
# pandas not used here ?
# import pandas as pd
import csv

app=Flask(__name__)

@app.route('/',methods=['GET','POST'])
def tweet():
    request_method=request.method
    if request.method=="POST":
        post=request.form['search']
        cmd=' python "./twitter_search.py " {}'.format(post)
        p=subprocess.run(cmd,shell=True)
    return render_template('home.html',request_method=request_method)

if __name__=="__main__":
    app.run(debug=True)