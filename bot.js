client.on('guildMemberAdd', member => {
    const logChannel = member.guild.channels.get("593906554160414730);
    logChannel.send(Hello its **depht**);
});
