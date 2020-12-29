from googleapiclient.discovery import build
import json
import os

#api 키 경로 설정
current_dirt = os.getcwd()
apiKey_dirt = current_dirt + '\\crawler\\APIkey.json'

with open( apiKey_dirt) as json_file:
    json_data = json.load(json_file)
    youtubeApiKey = json_data["APIkey"]

#채널 id 목록 (감스트, 테스터훈, 동수칸,  얍얍)
target_channels = ['UCbFzvzDu17eDZ3RIeaLRswQ','UCUbOogiD-4PKDqaJfSOTC0g','UCVJT18d9wSCnDUdnJ9ycO7Q','UCnb4EuP3C0dxeika3b-bnXA']

class youtuberCrawler:
    def __init__(self, channelId):
        self.corpus = []
        self.recent_videos = []
        self.popular_videos = []
        self.target_channel = channelId
        self.youtube = build('youtube','v3',developerKey=youtubeApiKey)

    def channelInfo(self):
        #채널 설명과 태그 긁어오기
        print("get channel info")
        channels = self.youtube.channels().list(part=' brandingSettings', id=self.target_channel, fields='items(brandingSettings)').execute()
        self.corpus.append(channels['items'][0]['brandingSettings']['channel']['description'])
        self.corpus.append(channels['items'][0]['brandingSettings']['channel']['keywords'])
        # print(channels)

    def get_recent_videoIds(self):
        print("get recent 10 videos id")
        #최근 10개 동영상 id 획득
        newpageToken = ''
        for i in range(1,3):
            activites = self.youtube.activities().list(part=' contentDetails', channelId=self.target_channel , fields='pageInfo, nextPageToken, items(contentDetails(upload(videoId)))', pageToken=newpageToken).execute()
            newpageToken = activites['nextPageToken']
            # print(newpageToken)
            for j in range(0,5):
                self.recent_videos.append(activites['items'][j]['contentDetails']['upload']['videoId'])
        
        print(self.recent_videos)

    def get_popular_videoIds(self):
        print("get popular 10 videos id")
        #조회수 탑 10 동영상 id 획득
        newpageToken = ''
        for i in range(1,3):
            search = self.youtube.search().list(part='snippet', channelId=self.target_channel, type='video', order='viewCount', fields='pageInfo, nextPageToken, items(id(videoId))').execute()
            newpageToken = search['nextPageToken']

            for j in range(0,5):
                self.popular_videos.append(search['items'][j]['id']['videoId'])
    
    def get_video_comment(self):
        print("get recent video's comment  20 comment X 10 videos")
        #최근 동영상의 댓글
        for i in range(0,10):
            commentThreads = self.youtube.commentThreads().list(part=' snippet', videoId=self.recent_videos[i], fields=' nextPageToken, items( snippet( topLevelComment(snippet( textOriginal))))', order='relevance').execute()
            for j in range(0,20):
                # print(commentThreads['items'][j]['snippet']['topLevelComment']['snippet']['textOriginal'])
                try:
                    self.corpus.append(commentThreads['items'][j]['snippet']['topLevelComment']['snippet']['textOriginal'])
                except:
                    print("maybe out of range\n")

        print("get popular video's comment  20 comment X 10 videos")
        #인기 동영상의 댓글
        for i in range(0,10):
            commentThreads = self.youtube.commentThreads().list(part=' snippet', videoId=self.popular_videos[i], fields=' nextPageToken, items( snippet( topLevelComment(snippet( textOriginal))))', order='relevance').execute()
            for j in range(0,20):
                # print(commentThreads['items'][j]['snippet']['topLevelComment']['snippet']['textOriginal'])
                try:
                    self.corpus.append(commentThreads['items'][j]['snippet']['topLevelComment']['snippet']['textOriginal'])
                except:
                    print("maybe out of range\n")

    def get_video_info(self):
        print("get recent video's info  title, desc, tags")
        #최근 동영상의 정보
        for i in range(0,10):
            videos = self.youtube.videos().list(part=' snippet', id=self.recent_videos[i], fields='items(snippet(title, description, tags) )').execute()
            self.corpus.append(videos['items'][0]['snippet']['title'])
            self.corpus.append(videos['items'][0]['snippet']['description'])
            tags_str = ' '.join(videos['items'][0]['snippet']['tags'])
            self.corpus.append(tags_str)
        
        print("get popular video's info  title, desc, tags")
        #인기 동영상의 정보
        for i in range(0,10):
            videos = self.youtube.videos().list(part=' snippet', id=self.popular_videos[i], fields='items(snippet(title, description, tags) )').execute()
            self.corpus.append(videos['items'][0]['snippet']['title'])
            self.corpus.append(videos['items'][0]['snippet']['description'])
            tags_str = ' '.join(videos['items'][0]['snippet']['tags'])
            self.corpus.append(tags_str)
            


    def result_str_Corpus(self):
        result_Str = "\n".join(self.corpus)
        print(result_Str)
        return result_Str


#결과 말뭉치 저장 경로 설정
result_dirt = current_dirt + '\\crawler\\crawling_result_text'


f = open(result_dirt+'\\gamst_comments.txt', mode='wt', encoding='utf-8')

gamst = youtuberCrawler(target_channels[0])
# gamst.channelInfo()
gamst.get_recent_videoIds()
gamst.get_popular_videoIds()
gamst.get_video_comment()
# gamst.get_video_info()
f.write(gamst.result_str_Corpus())
f.close()