from pymongo import MongoClient, collection
from pymongo import cursor
from pymongo.cursor import CursorType


host = 'localhost'
port = '27017'
mongo = MongoClient(host, int(port))
print(mongo.list_database_names())

db = mongo.spark612

collection_ = db.channels

item = collection_.find_one({'default_language': {'$exists': False}})

print(item)
