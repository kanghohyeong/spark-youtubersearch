import json
from selenium import webdriver as wd
import requests
from bs4 import BeautifulSoup
import time
import pandas as pd
import re


def get_tag(code):
    url = 'https://www.youtube.com/'+code
    driver = wd.Chrome(executable_path='chromedriver.exe')
    driver.get(url)

    time.sleep(2)
    html = driver.page_source
    driver.quit()

    soup = BeautifulSoup(html, 'lxml')
    try:
        tag = soup.find(
            class_='style-scope ytd-rich-metadata-renderer', id='title').get_text()
    except:
        tag = ''
        print('tag is none')
    return tag


def get_url(code):
    url = 'https://www.youtube.com/channel/'+code+'/videos'
    driver = wd.Chrome(executable_path='chromedriver.exe')

    driver.get(url)

    html = driver.page_source
    driver.quit()
    soup = BeautifulSoup(html, 'lxml')

    codes = soup.select('a#video-title')
    code_list = []
    for i in codes:
        code_list.append(i.get('href'))
    print(code_list)
    return code_list


def run(channel_code):
    a = get_url(channel_code)
    game_tag_list = []
    for i in range(3):
        game_tag_list.append(get_tag(a[i]))
    return game_tag_list


def run_video(video_id):
    url = 'https://www.youtube.com/watch?v='+video_id
    driver = wd.Chrome(executable_path='chromedriver.exe')
    driver.get(url)

    time.sleep(2)
    html = driver.page_source
    driver.quit()

    soup = BeautifulSoup(html, 'lxml')
    try:
        tag = soup.find(
            class_='style-scope ytd-rich-metadata-renderer', id='title').get_text()
        if tag == 'YouTube Kids 사용해 보기':
            tag = ''
            print('tag is none')
    except:
        tag = ''
        print('tag is none')
    return tag


# with open('./DB_video_data_add.json', 'rt', encoding='utf-8') as f:
#     origin_json_data = json.load(f)

origin_csv_data = pd.read_csv(
    './crawler/data_with_vling/vling_new_youtuber.csv', index_col=0)

db_json = {
    'channels': []
}

stop_it = False

for i, channel in enumerate(origin_csv_data['youtube_code']):
    if stop_it == True:
        break
    # if i > 2:
    #     break

    db_data = {
        'id': '',
        'videos': []
    }
    db_data['id'] = re.sub(pattern='/channel', repl='', string=channel)

    for j, video in enumerate(channel['videos']):
        if j >= 10:
            break
        video_data = {
            'id': '',
            'game_tag': ''
        }

        video_data['id'] = video['id']
        try:
            video_data['game_tag'] = run_video(video_data['id'])
            print(video_data['game_tag'])
        except Exception as e:
            print('err', e)
            stop_it = True
            break

        db_data['videos'].append(video_data)

    db_json['channels'].append(db_data)
    print('{} ok'.format(db_data['id']))


with open('DB_video_data_tag.json', 'wt', encoding='utf-8') as f:
    json.dump(db_json, f, ensure_ascii=False, indent='\t')
