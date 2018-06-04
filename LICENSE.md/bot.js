const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Luna's bot!");  
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(cmd === `${prefix}serverinfo`){

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Info")

  .setColor("#42f4c2")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)

  .addField("Created On", message.guild.createdAt)

  .addField("You Joined", message.member.joinedAt)

  .addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);
}


  if(cmd === `${prefix}hello`){
    return message.channel.send("Hello :3");
  }

  if(cmd === `${prefix}botinfo`){
    
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Info")

    .setColor("#42f4c2")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)

    .addField("Created on", bot.user.createdAt);

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}slap`){

    let slappedUser = (message.mentions.users.first())
    if (!slappedUser) return message.channel.send("You must mention a user!");

    let slappedEmbed = new Discord.RichEmbed()
    .setTitle('A user got slapped!')

    .setColor("#42f4c2")
    .setDescription(message.author + ' slapped ' + slappedUser + '!')
    .setImage(`https://orig00.deviantart.net/2d34/f/2013/339/1/2/golden_time_flower_slap_gif_by_paranoxias-d6wv007.gif`);
 
    message.channel.send(slappedEmbed);
    return;

  }

 
  if(cmd === `${prefix}help`){
    
    let bicon = bot.user.displayAvatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("Command list")


    .setColor("#42f4c2")
    .setThumbnail(bicon)

     
    .addField("Random Commands", "hello")
    .addField("Info Commands", "botinfo, serverinfo, profile")
    .addField("Action Commands", "slap, hug, holdhand, kiss, frenchkiss, blowkiss, stare");
    return message.channel.send(helpembed);
  }

  if(cmd === `${prefix}hug`){

    let huggedUser = (message.mentions.users.first())
    if (!huggedUser) return message.channel.send("You must mention a user!");

    let huggedEmbed = new Discord.RichEmbed()
    .setTitle('A user got hugged!')

    .setColor("#42f4c2")
    .setDescription(message.author + ' **hugged** ' + huggedUser + '!')
    .setImage(`http://s7.favim.com/orig/151124/anime-couple-gif-hug-Favim.com-3637687.gif`);
 
    message.channel.send(huggedEmbed);
    return;

  }

  if(cmd === `${prefix}holdhand`){

    let holdhandUser = (message.mentions.users.first())
    if (!holdhandUser) return message.channel.send("You must mention a user!");

    let holdhandEmbed = new Discord.RichEmbed()
    .setTitle('Users are holding hands!')

    .setColor("#42f4c2")
    .setDescription(message.author + ' **holds** ' + holdhandUser + ' **hand** ' + '!')
    .setImage(`https://i.pinimg.com/originals/85/b5/d4/85b5d40b41bd406828a81bde9fa3421f.gif`);
 
    message.channel.send(holdhandEmbed);
    return;

  }

  if(cmd === `${prefix}kiss`){

    let kissUser = (message.mentions.users.first())
    if (!kissUser) return message.channel.send("You must mention a user!");

    let kissEmbed = new Discord.RichEmbed()
    .setTitle('Users are kissing!')

    .setColor("#42f4c2")
    .setDescription(message.author + ' **kissed** ' + kissUser + '!')
    .setImage(`https://media1.tenor.com/images/61dba0b61a2647a0663b7bde896c966c/tenor.gif?itemid=5262571`);
 
    message.channel.send(kissEmbed);
    return;

  }

  if(cmd === `${prefix}frenchkiss`){

    let frenchkissUser = (message.mentions.users.first())
    if (!frenchkissUser) return message.channel.send("You must mention a user!");

    let frenchkissEmbed = new Discord.RichEmbed()
    .setTitle('Users are French kissing!')

    .setColor("#42f4c2")
    .setDescription(message.author + ' **French kissed** ' + frenchkissUser + '!')
    .setImage(`https://animewonders.files.wordpress.com/2017/09/0d20ee107118c501e9c628ddcf11f549.gif?w=1108`);
 
    message.channel.send(frenchkissEmbed);
    return;

  }

  if(cmd === `${prefix}blowkiss`){

    let blowkissUser = (message.mentions.users.first())
    if (!blowkissUser) return message.channel.send("You must mention a user!");

    let blowkissEmbed = new Discord.RichEmbed()
    .setTitle('Users blew a kiss!')

    .setColor("#42f4c2")
    .setDescription(message.author + ' **blew a kiss at** ' + blowkissUser + '!')
    .setImage(`https://i.gifer.com/32Jm.gif`);
 
    message.channel.send(blowkissEmbed);
    return;

  }

  if(cmd === `${prefix}stare`){

    let stareUser = (message.mentions.users.first())
    if (!stareUser) return message.channel.send("You must mention a user!");

    let stareEmbed = new Discord.RichEmbed()
    .setTitle('User is getting stared at!')

    .setColor("#42f4c2")
    .setDescription(message.author + ' **stares at** ' + stareUser + '!')
    .setImage(`https://78.media.tumblr.com/f89852e33f2e9c4bdaf7024f19165e56/tumblr_nf3r56KNvZ1rs5agko1_500.gif`);
 
    message.channel.send(stareEmbed);
    return;

  }

  if (cmd === `${prefix}profile`){
    let aUser = message.mentions.users.first() || message.guild.members.get(args[0]);
    let bUser = message.mentions.members.first()
    if(!aUser) {
        message.channel.send("Please provide a user.")
    }
    let uicon = aUser.displayAvatarURL
    let userembeded = new Discord.RichEmbed()
    .setColor("#42f4c2")
    .setThumbnail(uicon)
    .addField("User's Name", `${aUser.username}`)
    .addField("User's ID", `${aUser.id}`)
    .addField("Joined Discord On", `${aUser.createdAt}`)
    .addField("User Joined This Server", `${bUser.joinedAt}`)
    return message.channel.send(userembeded)
}

});

bot.login(botconfig.token);
