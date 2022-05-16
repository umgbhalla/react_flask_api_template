from flask import Flask, request, send_from_directory
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__, static_folder="../frontend/build", static_url_path="")
CORS(app)


with open("my_dict.json", "w") as f:
    json.dump({"list": ["item1", "item2", "item3", "item4"]}, f)


# @app.route("/", methods=["GET", "POST"])
# @cross_origin()
# def serve():
#     return send_from_directory(app.static_folder, "index.html")


# get api
@app.route("/getList", methods=["GET"])
def getList():
    with open("my_dict.json") as f:
        mainList = json.load(f)
    return mainList


# post api
@app.route("/updateList/<new_item>", methods=["POST"])
def updateList(new_item):
    with open("my_dict.json") as f:
        mainList = json.load(f)
    mainList["list"].append(new_item)

    with open("my_dict.json", "w") as f:
        json.dump(mainList, f)
    print(json.dumps(mainList, indent=4))
    return "Done", 201


if __name__ == "__main__":
    app.run(debug=True)
