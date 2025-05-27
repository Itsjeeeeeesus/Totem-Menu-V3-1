from flask import Flask, jsonify
from flask_cors import CORS
import json
import requests
import urllib

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

def connection():
    print('Checking internet connection....')
    try:
        urllib.request.urlopen('https://google.com')
        print('Internet connection ok')
        return True
    except:
        print('There is a problem with your internet connection')
        return False

def get_products():
    if connection():
        response = requests.get('https://www.tredicizerouno.com/api/prodotti', headers={'Accept': 'application/json'})
        lista_prodotti = response.json()
        # prodotti = Product.query.filter(Product.menu_type.contains('libro_ingredienti')).all()
        with open('static/prodotti-download.json', 'w') as file:
            json.dump(lista_prodotti, file)
    else:
        print('no internet connection')

    with open('static/prodotti-download.json', 'r') as file:
        return json.load(file)

@app.route('/api', methods=['GET'])
def get_json():
    # with open('static/prodotti-download.json') as f:
    #     data = json.load(f)
    # return jsonify(data)
    print('prods')
    return get_products()
if __name__ == '__main__':
    app.run(debug=True)
