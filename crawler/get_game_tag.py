from selenium import webdriver as wd
import requests
from bs4 import BeautifulSoup
import time


def get_tag(code):
    url = 'https://www.youtube.com/'+code
    driver = wd.Chrome(executable_path = 'chromedriver.exe')
    driver.get(url)

    time.sleep(2)
    html = driver.page_source
    driver.quit()

    soup = BeautifulSoup(html, 'lxml')
    try:
        tag = soup.find(class_='style-scope ytd-rich-metadata-renderer',id='title').get_text()
    except:
        tag =''
        print('tag is none')
    return tag
def get_url(code):
    url = 'https://www.youtube.com/channel/'+code+'/videos'
    driver = wd.Chrome(executable_path = 'chromedriver.exe')

    driver.get(url)
    
    html = driver.page_source
    driver.quit()
    soup = BeautifulSoup(html, 'lxml')

    codes = soup.select('a#video-title')
    code_list = []
    for i in codes:
        code_list.append(i.get('href'))
    return code_list
def run(channel_code):
    a = get_url(channel_code)
    game_tag_list = []
    for i in range(3):
        game_tag_list.append(get_tag(a[i]))
    return game_tag_list

tag_list = run('UCCMQyaKDjQJY79VimTdaYYQ')
