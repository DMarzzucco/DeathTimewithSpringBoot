from youtubesearchpython import VideosSearch
from yt_dlp import YoutubeDL


class YoutubeUtils:
    def __init__(self):
        self.YDL_OPTIONS = {'format': 'bestaudio/best'}
        self.FFMPEG_OPTIONS = {'options': '-vn'}
        self.ytdl = YoutubeDL(self.YDL_OPTIONS)

    def search__yt(self, query):
        try:
            if query.startswith("https://"):
                info = self.ytdl.extract_info(query, download=False)
                title = info.get("title", "Unknown Title")
                return {'source': query, 'title': title}

            search = VideosSearch(query, limit=1)
            result = search.result().get("result", [])
            if result:
                return {'source': result[0]["link"], 'title': result[0]["title"]}
            return {'error': 'No result found'}
        except Exception as e:
            print(f"Error during search or extraction:{e}")
            return {'error': 'An error occurred during search or extraction'}
