from encodings.aliases import aliases

import discord
from discord.ext import commands

from utils.youtube import YoutubeUtils
from utils.voice import Voices
from utils.player import Player


class MusicCogs(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.youtube_utils = YoutubeUtils()
        self.voice_utils = Voices()
        self.player = Player()

    @commands.command(name="play", aliases=["p", "playing"], help="Plays a selected song from YouTube")
    async def play(self, ctx, *args):
        query = " ".join(args)
        voice_channel = ctx.author.voice.channel if ctx.author.voice else None

        if not voice_channel:
            await  ctx.send("you need to connect to a voice channel first")
            return

        song = self.youtube_utils.search__yt(query)
        if isinstance(song, bool):
            await  ctx.send("Could not download the song, Incorrect form or try with another URL")
            return

        self.player.add_song(song, voice_channel)
        if not self.player.is_playing:
            await self.player.play_music(ctx, self.voice_utils, self.youtube_utils, self.bot)
        await  ctx.send(f"**'{song['title']}'**  added to the list")

    @commands.command(name="pause", help="Pauses or resumes the current song being played")
    async def pause(self, ctx):
        self.player.toggle_pause(self.voice_utils)

    @commands.command(name="resume", aliases=["r"], help="Resumes playing the current song")
    async def resume(self, ctx):
        self.player.toggle_pause(self.voice_utils)

    @commands.command(name="skip", aliases=["s"], help="Skips the current song being played")
    async def skip(self, ctx):
        if self.voice_utils.vc:
            self.voice_utils.vc.stop()
            await self.player.play_next(ctx, self.voice_utils, self.youtube_utils, self.bot)

    @commands.command(name="queue", aliases=["q"], help="Display the current songs is queue")
    async def queue(self, ctx):
        queue_str = self.player.display_queue()
        await ctx.send(f"queue:\n{queue_str}" if queue_str else "no music in queue")

    @commands.command(name="clear", aliases=["c"], help="Stops the music and clears queue")
    async def clear(self, ctx):
        if self.voice_utils.vc and self.player.is_playing:
            self.voice_utils.vc.stop()
        self.player.clear_queue()
        await  ctx.send("Music queue is clear")

    @commands.command(name="stop", aliases=["l"], help="disconnects the queue")
    async def stop(self, ctx):
        self.player.stop(self.voice_utils)
        await ctx.send ("The song was disconnected")

    @commands.command(name="remove", aliases =["d"], help=" Removes the last song added to the queue")
    async def remove(self, ctx):
        if self.player.remove_last_song():
            await ctx.send("last song wa removed")
        await  ctx.send("Queue is already empty")
