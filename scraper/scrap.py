from requests import get
from bs4 import BeautifulSoup as BS
import json

url = "https://www.bukalapak.com/products?from=omnisearch&search%5Bkeywords%5D=macbook&search_source=omnisearch_category&source=navbar"
req = get(url).content
page = BS(req, 'html.parser')
for card in page.find_all('div', 'product-card'):
	products = card.find_all('div', 'product-description')
	for title in products:
		print(title.find('a', 'product__name').text)
	imgs = card.findAll('img')
	for img in imgs:
		print(img['data-src'])
	for price in products:
		print(price.find('div', 'product-price')['data-reduced-price'])
	print('\n')