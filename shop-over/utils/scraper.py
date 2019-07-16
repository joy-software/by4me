import requests
import urllib.request
import time
from bs4 import BeautifulSoup


class Scraper(object):
    """A class that help to scrap the content of page.

    :param url: The url of the page to scrape.
    """
    def __init__(self, url):
        self.url = url

    def get_data(self, parser=None):
        """Retrieve data from the page found at url provide
        at the class initialisation

        :param parser: the analyzer to pass to BeautifulSoup.

        :return soup: a BeautifulSoup object
        """
        if parser is None:
            parser = 'lxml'
        html = requests.get(self.url).text
        soup = BeautifulSoup(html, parser)
