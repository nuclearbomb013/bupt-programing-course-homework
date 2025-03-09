from flask import  Flask,render_template,request,jsonify
app=Flask(__name__)
@app.route("/home")
def home():
    return render_template("主页面.html")


if __name__ == '__main__':

    app.run()
