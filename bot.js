require("dotenv").config();
const Discord = require("discord.js");
const Web3 = require("web3");

const {
  DISCORD_BOT_TOKEN,
  ETH_PROVIDER_URL,
  MINT_COMMAND,
  NFT_CONTRACT,
  NFT_ABI_PATH,
} = process.env;

const abi = require(NFT_ABI_PATH);
const mintCommand = MINT_COMMAND || "!mint";
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const web3 = new Web3(ETH_PROVIDER_URL);
const contract = new web3.eth.Contract(abi, NFT_CONTRACT);

const fetchMintData = async () => {
  const maxSupply = await contract.methods.MAX_SUPPLY().call();
  const numMinted = await contract.methods.totalSupply().call();
  const percent = Math.round((numMinted / maxSupply) * 100);
  const result = {
    maxSupply,
    numMinted,
    percent,
  };
  console.log(result);
  return result;
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (msg) => {
  if (msg.content !== mintCommand) {
    return;
  }

  const { maxSupply, numMinted, percent } = await fetchMintData();
  const mintMsg = `Minted: ${numMinted}/${maxSupply} (${percent}%)`;

  msg.reply(mintMsg);
});

client.login(DISCORD_BOT_TOKEN);
