from selenium import webdriver as wd
from bs4 import BeautifulSoup
import time
import pandas as pd
import requests
import re
import json
import pandas as pd
from googleapiclient.discovery import build
from collections import OrderedDict

def get_urls(code):
    titles = []
    urls = []
    url = "https://www.youtube.com/channel/"+code+"/videos"

    driver = wd.Chrome(executable_path = "chromedriver.exe")

    driver.get(url)
    last_page_height = driver.execute_script("return document.documentElement.scrollHeight")
    i = 0
    while True:
        driver.execute_script("window.scrollTo(0, document.documentElement.scrollHeight);")
        time.sleep(0.5)
        new_page_height = driver.execute_script("return document.documentElement.scrollHeight")
        i+=1
        if (new_page_height == last_page_height) | (i == 10):
            break
        last_page_height = new_page_height
    html_source = driver.page_source
    driver.quit()
    soup = BeautifulSoup(html_source, 'lxml')

    datas = soup.select("a#video-title")
    for data in datas:
        title = data.text.replace('\n', '')
        url = data.get('href')

        titles.append(title)
        urls.append(url)
    return titles, urls

def crawling_comment(name, urls):
    file_data = OrderedDict()
    youtubeApiKey = 'AIzaSyDpA0dVCd4Sra-W6UoSjP08INdbVUg4tdg'
    youtube = build('youtube', 'v3', developerKey = youtubeApiKey)
    commentThreads_result = []
    num = 0
    for url in urls:
        if(num == 100):
            break
        print(num)
        num += 1
        
        url = url[9:]
        try:
            commentThreads = youtube.commentThreads().list(part='id, replies, snippet', videoId=url, fields='pageInfo, nextPageToken, items(id, snippet(videoId, topLevelComment(snippet( textOriginal, authorDisplayName, likeCount)), totalReplyCount), replies(comments(snippet(textOriginal,authorDisplayName, likeCount))))', order='relevance').execute()
            commentThreads_result.append(commentThreads)
        except:
            print(url,' is error')
    name = name+'.json'
    with open(name, 'w', encoding = 'utf-8') as make_file:
        json.dump(commentThreads_result, make_file, ensure_ascii=False, indent="\t")
    return commentThreads_result

def csv_from_json(name):
    path = name+'.json'
    excel_name = name+'.xlsx'
    with open(path, "r", encoding = 'utf-8') as file:
        json_data = json.load(file)
    data_len = len(json_data)
    text = []
    name = []
    like = []
    num_i = 0
    
    for i in range(data_len):
        print(num_i)
        num_i += 1
        json_len = len(json_data[i]["items"])
        for j in range(json_len):
            text.append(json_data[i]["items"][j]['snippet']['topLevelComment']['snippet']['textOriginal'])
            name.append(json_data[i]["items"][j]['snippet']['topLevelComment']['snippet']['likeCount'])
            like.append(json_data[i]["items"][j]['snippet']['topLevelComment']['snippet']['authorDisplayName'])
    df = pd.DataFrame({'comment':text, 'name':like, 'likecount':name})
    
    df.to_excel(excel_name , index = False, encoding = 'CP949')
    
    return json_data


name = 'ASMR_PPOMO' #채널이름(json, excel 이름)
title , urls = get_urls('UCAtFkapSeoEGPxm5bC3tvaw') #채널 코드
result = crawling_comment(name,urls)
a = csv_from_json(name)
