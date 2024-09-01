import asyncio
from sys import executable

import discord


class Player:
    def __init__(self):
        self.is_playing = False
        self.is_paused = False
        self.music_queue = []

    def add_song(self, song, voice_channel):
        self.music_queue.append([song, voice_channel])

    def clear_queue(self):
        self.music_queue = []

    def remove_last_song(self):
        if self.music_queue:
            self.music_queue.pop()
            return True
        return False

    def display_queue(self):
        return "\n".join([f"#{i + 1} - {song[0]['title']}" for i, song in enumerate(self.music_queue)])

    def toggle_pause(self, voice_utils):
        if voice_utils.vc is None:
            print("No voice client found")
            return
        if self.is_playing:
            if self.is_paused:
                self.is_paused = False
                self.is_playing = True
                voice_utils.vc.resume()
            else:
                self.is_playing = False
                self.is_paused = True
                voice_utils.vc.pause()
        else:
            print("Error: not connect to any voice channel")

    async def play_music(self, ctx, voice_utils, youtube_utils, bot):
        if self.music_queue:
            self.is_playing = True
            m_url = self.music_queue[0][0]['source']

            if not await voice_utils.connect_to_channel(self.music_queue[0][1]):
                print("Could not connect to channel voice // play_music")
                await  ctx.send("Could not connect to the voice channel")
                self.is_playing = False
                return

            self.music_queue.pop(0)
            try:
                loop = asyncio.get_event_loop()
                data = await loop.run_in_executor(None, lambda: youtube_utils.ytdl.extract_info(m_url, download=False))
            except Exception as e:
                print(f"Error to get date of song: {e}")
                await  ctx.send("Error to get date of the song")
                self.is_playing = False
                return

            if 'url' in data:
                song = data["url"]
                try:
                    voice_utils.vc.play(
                        discord.FFmpegPCMAudio(song, executable="ffmpeg", **youtube_utils.FFMPEG_OPTIONS),
                        after=lambda e: asyncio.run_coroutine_threadsafe(
                            self.play_next(ctx, bot, voice_utils, youtube_utils), bot.loop).result())
                    await ctx.send("Now playing:" + data.get("title", "Unknown Title"))
                except Exception as e:
                    print(f"Error to play the song:{e}")
                    await ctx.send("Error to play the song")
                    self.is_playing = False
            await ctx.send("Error: no could get the url song")
            self.is_playing = False
        else:
            self.is_playing = False
            await  ctx.send("No songs in the queue")

    async def play_next(self, ctx, bot, voice_utils, youtube_utils):
        if self.music_queue:
            self.is_playing = True
            m_url = self.music_queue[0][0]['source']
            self.music_queue.pop(0)
            try:
                loop = asyncio.get_event_loop()
                data = await loop.run_in_executor(None, lambda: youtube_utils.ytdl.extract_info(m_url, download=False))
                song = data['url']
                if song:
                    voice_utils.vc.play(
                        discord.FFmpegPCMAudio(song, executable="ffmpeg", **youtube_utils.FFMPEG_OPTIONS),
                        after=lambda e: asyncio.run_coroutine_threadsafe(
                            self.play_next(ctx, bot, voice_utils, youtube_utils), bot.loop))
                    await  ctx.send("Could not retrieve the song url")
                    self.is_playing = False
            except Exception as e:
                print(f"Error playing the next song: {e}")
                await ctx.send("Error playing the next song")
                self.is_playing = False
        else:
            self.is_playing = False

    def stop(self, voice_utils):
        self.is_playing = False
        self.is_paused = False
        if voice_utils.vc:
            voice_utils.vc.stop()
