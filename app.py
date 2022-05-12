from flask import Flask

app = Flask(__name__)

# get api
@app.route("/getList", methods=["GET"])
def getList():
    return {"list": ["item1", "item2", "item3", "item4"]}


if __name__ == "__main__":
    app.run(debug=True)
