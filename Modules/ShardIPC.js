// TODO: Uncomment this if you need it, otherwise #SaveMoreRAM I guess
// const Discord = require("discord.js");

module.exports = sharder => {
	sharder.on("message", (shard, msg) => {
		winston.debug(`Message received from shard ${shard.id}`, { shard: shard.id, msg: msg });
	});
};
