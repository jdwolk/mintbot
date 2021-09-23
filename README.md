# Mintbot

A simple Discord bot that displays mint status for an NFT, ie (in Discord):

```
-----
user
-----
!mint

-------
mintbot
-------
Minted: 100/1000 (10%)
```

# Setup

## JS

```
$ yarn install
```

## Discord

You'll need a Discord developer account + a bot application installed in your Discord server(s). These instructions should be all you need: https://anidiots.guide/v/v13/getting-started/getting-started-long-version

## Ethereum Provider
[Infura](https://infura.io/) seems good and they have a free plan :shrug:

## NFT-specifics

You'll need to pull down your NFT's ABI into a json file + the contract hash from your NFT project's Etherscan page. ABI will be under the "Contract" tab.

## `.env` config

Create a `.env` file in the root of the project with the following variables:

```
DISCORD_BOT_TOKEN=<from the Discord bot setup above ^^^>
ETH_PROVIDER_URL=<from Ethereum provider above ^^^>
NFT_ABI_PATH=<path to abi.json file you created from ABI on Etherscan>
NFT_CONTRACT=<from Etherscan>
```

Optional:

```
MINT_COMMAND=<provide a custom Discord command to display mint status. Defaults to "!mint">
```

# Running

```
$ node bot.js
```
