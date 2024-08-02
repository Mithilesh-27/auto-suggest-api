import requests

def test_suggest_api(query):
    url = 'http://localhost:5000/api/suggest'
    params = {'q': query}
    response = requests.get(url, params=params)

    if response.status_code == 200:
        print(f'Suggestions for "{query}": {response.json()}')
    else:
        print(f'Error: {response.status_code}, {response.json()}')

if __name__ == "__main__":
    test_suggest_api("ap")
    test_suggest_api("ba")
    test_suggest_api("gr")
