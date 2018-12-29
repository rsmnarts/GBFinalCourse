from requests import get
from bs4 import BeautifulSoup as BS
import json

url = "https://www.bukalapak.com/products?utf8=%E2%9C%93&search%5Bkeywords%5D=macbook&search%5Bsort_by%5D=price%3Adesc"
req = get(url).content
page = BS(req, 'html.parser')
for card in page.find_all('div', 'product-card'):
	products = card.find_all('div', 'product-description')
	for title in products:
		print(title.find('a', 'product__name').text)
	imgs = card.findAll('img')POST
	for img in imgs:
		print(img['data-src'])
	for price in products:
		print(price.find('div', 'product-price')['data-reduced-price'])
	print('\n')