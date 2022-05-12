from flask import Flask, request, send_from_directory
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__, static_folder="client/build", static_url_path="")
CORS(app)


mainList = {"list": ["item1", "item2", "item3", "item4"]}


@app.route("/", methods=["GET", "POST"])
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


# get api
@app.route("/getList", methods=["GET"])
def getList():
    return mainList


# post api
@app.route("/updateList/<new_item>", methods=["POST"])
def updateList(new_item):
    mainList["list"].append(new_item)
    print(mainList)
    return "Done", 201


if __name__ == "__main__":
    app.run(debug=True)
