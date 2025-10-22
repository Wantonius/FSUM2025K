from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "<h2>Hello Flask</h2>"
    
app.run("127.0.0.1",port=8080)