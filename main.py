import discord
from discord.ext import commands
import os, asyncio
from dotenv import load_dotenv

load_dotenv()
# import all the cogs
from cogs.music import MusicCogs

intents = discord.Intents.all()
intents.message_content = True
intents.voice_states = True
bot = commands.Bot(command_prefix='<', intents=intents)

# remove the default help command so that we can write out own
bot.remove_command('help')


@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')
    print("bot is running")
    await bot.change_presence(activity=discord.Game(f"type{bot.command_prefix}help"))


async def setup_cogs():
    await bot.add_cog(MusicCogs(bot))
    print("commands is ready to use")


async def main():
    await setup_cogs()
    token = os.getenv('TOKEN')
    if token is None:
        raise ValueError("The token is failed")
    await bot.start(token)


if __name__ == "__main__":
    asyncio.run(main())
