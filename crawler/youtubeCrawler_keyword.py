from googleapiclient.discovery import build
import json
import os
import pandas as pd
import json
from collections import OrderedDict

#api 키 경로 설정
current_dirt = os.getcwd()
apiKey_dirt = current_dirt + '\\crawler\\APIkey.json'

#api 키 로드
with open( apiKey_dirt) as json_file:
    json_data = json.load(json_file)
    youtubeApiKey = json_data["APIkey"]

#채널 목록 로드
channel_list = pd.read_csv(current_dirt+"\\crawler\\channels.csv", header=0, sep=',')

# 크롤러 정의
class youtuberCrawler_keyword:
    def __init__(self, channelId):
        self.keywords = []
        self.recent_videos = []
        self.popular_videos = []
        self.target_channel = channelId
        self.youtube_title = ''
        self.youtube = build('youtube','v3',developerKey=youtubeApiKey)

    def get_channel_keyword(self):
        print("get channel keyword")
        #채널에 정의된 키워드 가져오기
        channels = self.youtube.channels().list(part=' brandingSettings', id=self.target_channel, fields='items(brandingSettings(channel(title, keywords)))').execute()
        self.youtube_title = channels['items'][0]['brandingSettings']['channel']['title']
        try:
            channel_keywords = channels['items'][0]['brandingSettings']['channel']['keywords']
        except:
            #채널에 따라 설정 안해놓은 곳도 있음
            channel_keywords = ''
        channel_keywords_list = channel_keywords.split( )
        self.keywords.extend(channel_keywords_list)
        
    def get_recent_videoIds(self):
        print("get recent 50 videos id")
        #최근 50개 동영상 id 획득
        search = self.youtube.search().list(part='snippet', channelId=self.target_channel, type='video', order='date', maxResults='50',fields='items(id(videoId))').execute()
        for j in range(0,50):
            self.recent_videos.append(search['items'][j]['id']['videoId'])
        
        # newpageToken = ''

        # for i in range(1,2):
        #     search = self.youtube.search().list(part='snippet', channelId=self.target_channel, type='video', order='date', fields='pageInfo, nextPageToken, items(id(videoId))').execute()
        #     newpageToken = search['nextPageToken']

        #     for j in range(0,5):
        #         self.recent_videos.append(search['items'][j]['id']['videoId'])
        print(self.recent_videos)

    def get_popular_videoIds(self):
        print("get popular 10 videos id")
        #조회수 탑 5 동영상 id 획득
        newpageToken = ''
        for i in range(1,2):
            search = self.youtube.search().list(part='snippet', channelId=self.target_channel, type='video', order='viewCount', fields='pageInfo, nextPageToken, items(id(videoId))').execute()
            newpageToken = search['nextPageToken']

            for j in range(0,5):
                self.popular_videos.append(search['items'][j]['id']['videoId'])
        print(self.popular_videos)

    def get_video_tags(self):
        print("get recent video's tags")
        #최근 동영상의 태그
        for i in range(0,50):
            try:
                videos = self.youtube.videos().list(part=' snippet', id=self.recent_videos[i], fields='items(snippet(tags) )').execute()
                self.keywords.extend(videos['items'][0]['snippet']['tags'])
            except:
                pass


        # print("get popular video's tags")
        # #인기 동영상의 태그
        # for i in range(0,5):
        #     try:
        #         videos = self.youtube.videos().list(part=' snippet', id=self.popular_videos[i], fields='items(snippet(tags) )').execute()
        #         self.keywords.extend(videos['items'][0]['snippet']['tags'])
        #     except:
        #         pass


    def result_keywords(self):
        keyword_set = set(self.keywords)
        keyword_set = list(keyword_set)
        print(keyword_set)
        return keyword_set


youtubers = []
json_data = OrderedDict()
json_data["youtubers"] = []
youtuber_data = OrderedDict()

with open(current_dirt+"\\crawling_result_text\\youtuber_keywords.json", 'wt', encoding='utf-8') as f:
    for i in range(0, 20):
        youtuber_data = OrderedDict()
        try:
            print(channel_list['channel_ID'][i])
            crawler = youtuberCrawler_keyword(channel_list['channel_ID'][i])
            crawler.get_channel_keyword()
            crawler.get_recent_videoIds()
            # crawler.get_popular_videoIds()
            crawler.get_video_tags()
            # channel_dic = {'youtube_title':crawler.youtube_title,'namuwiki_title': channel_list['name_namuwiki'][i], 'keywords':crawler.result_keywords() }
            youtuber_data['youtube_title'] = crawler.youtube_title
            youtuber_data['namuwiki_title'] = channel_list['name_namuwiki'][i]
            youtuber_data['keywords']=crawler.result_keywords()
            # youtubers.append(json_data['youtubers'])
            json_data['youtubers'].append(youtuber_data)

            print(json.dumps(json_data, ensure_ascii=False, indent='\t'))
        except:
            json.dump(json_data, f, ensure_ascii=False, indent='\t')
            print("api over")
            break

    json.dump(json_data, f, ensure_ascii=False, indent='\t')

# with open('youtuber_keywords.json', 'w', encoding='utf-8') as f:
#     json.dump(youtubers, f)


# gamst = youtuberCrawler_keyword('UCfpaSruWW3S4dibonKXENjA')
# gamst.get_channel_keyword()
# gamst.get_recent_videoIds()
# gamst.get_popular_videoIds()
# gamst.get_video_tags()
# gamst.result_keywords()