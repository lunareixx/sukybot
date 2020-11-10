const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class GitHubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'github',
      aliases: ['gh', 'repo'],
      usage: 'github',
      description: 'Displays the link to Helene\'s GitHub repository.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('GitHub Link')
      .setThumbnail('https://raw.githubusercontent.com/lunareixx/lunarixhub-bot/master/data/images/Helene.png')
      .setDescription(oneLine`
        Click [here](https://github.com/lunareixx/lunarixhub-bot) to to visit GitHub repository!
        Feel free to comment about issues or suggestions!
      `)
      .addField('Other Links',
        '**[Support Server](https://discord.gg/jVgKDC4)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
