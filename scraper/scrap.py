from requests import get, post
from bs4 import BeautifulSoup as BS
import json

url = "https://www.bukalapak.com/products?utf8=%E2%9C%93&search%5Bkeywords%5D=macbook pro&search%5Bsort_by%5D=price%3Adesc"
req = get(url).content
page = BS(req, 'html.parser')
for card in page.find_all('div', 'product-card'):
	products = card.find_all('div', 'product-description')
	for title in products:
		name = title.find('a', 'product__name').text
	imgs = card.findAll('img')
	for img in imgs:
		image_url = img['data-src']
	for price in products:
		price = price.find('div', 'product-price')['data-reduced-price']
	print('\n')
	payload = {'name': name,'price': price,'image_url': image_url}
	headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.90 Safari/537.36'}

	print(post('http://35.187.247.31/product', data=payload, headers=headers))