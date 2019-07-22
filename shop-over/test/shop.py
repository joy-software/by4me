# from entities import Shop
from selenium import webdriver
from bs4 import BeautifulSoup

driver = webdriver.Chrome(executable_path="./driver/chromedriver")
driver.get('https://www.pagesjaunes.fr/recherche/maisons-alfort-94/zara')
content_element = driver.find_element_by_class_name("main-content clearfix")
content_html = content_element.get_attribute("innerHTML")
soup = BeautifulSoup(content_html, "html.parser")
p_tags = soup.find_all("p")
for p in p_tags:
    print(p.prettify())

