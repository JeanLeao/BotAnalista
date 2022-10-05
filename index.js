const Discord = require("discord.js"); 
const client = new Discord.Client({intents: ['Guilds', "MessageContent", "GuildMessages", "GuildMembers", 'GuildMessageReactions']});
const config = require("./config.json");
const firebase = require('./src/db/fb');


var up = 0;
var map = "notvalue";
var totalabates;
var totalassists;
var totalviver;


client.once('ready', async () => {console.log("✅ - Estou online!")})

client.on('messageCreate',  async (message) => {
  
  
    async function sukuna(){
      firebase.ref(`sukuna`).once("value").then(snapshot => {
        var mapabanco = parseInt(snapshot.child('mapas').val());
        var assbanco = parseInt(snapshot.child('assistencia').val());
        var killbanco = parseInt(snapshot.child('abate').val());
        var viverbanco = parseInt(snapshot.child('viver').val());

        let contabt = killbanco / mapabanco;
        let contviver = viverbanco / mapabanco;
        let contass = assbanco / mapabanco;

      const playerurso = new Discord.EmbedBuilder()
      .setColor("DarkGreen")
      .setTitle('Referencia de Registro')
      .setDescription(`Olá os registros de Sukuna estão abaixo, 😉 \n\n Selecione o jogador citado está com MEDIA de;\n\n\n Mapas Jogados: ${mapabanco} \n Abates: ${contabt} \n Assistencia: ${contass} \n Sobreviviência: ${contviver} \n\n`);
      message.channel.send({embeds: [playerurso]});

    })
  }
  async function hanzo(){
    firebase.ref(`hanzo`).once("value").then(snapshot => {
      var mapabanco = parseInt(snapshot.child('mapas').val());
      var assbanco = parseInt(snapshot.child('assistencia').val());
      var killbanco = parseInt(snapshot.child('abate').val());
      var viverbanco = parseInt(snapshot.child('viver').val());

      let contabt = killbanco / mapabanco;
      let contviver = viverbanco / mapabanco;
      let contass = assbanco / mapabanco;

      const playerurso = new Discord.EmbedBuilder()
      .setColor("DarkGreen")
      .setTitle('Referencia de Registro')
      .setDescription(`Olá os registros de Hanzo estão abaixo, 😉 \n\n Selecione o jogador citado está com MEDIA de;\n\n\n Mapas Jogados: ${mapabanco} \n Abates: ${contabt} \n Assistencia: ${contass} \n Sobreviviência: ${contviver} \n\n`);
      message.channel.send({embeds: [playerurso]})
  })
  }

  async function fast(){
    firebase.ref(`wilan`).once("value").then(snapshot => {
      var mapabanco = parseInt(snapshot.child('mapas').val());
      var assbanco = parseInt(snapshot.child('assistencia').val());
      var killbanco = parseInt(snapshot.child('abate').val());
      var viverbanco = parseInt(snapshot.child('viver').val());

      let contabt = killbanco / mapabanco;
      let contviver = viverbanco / mapabanco;
      let contass = assbanco / mapabanco;

      const playerurso = new Discord.EmbedBuilder()
      .setColor("DarkGreen")
      .setTitle('Referencia de Registro')
      .setDescription(`Olá os registros de Fast estão abaixo, 😉 \n\n Selecione o jogador citado está com MEDIA de;\n\n\n Mapas Jogados: ${mapabanco} \n Abates: ${contabt} \n Assistencia: ${contass} \n Sobreviviência: ${contviver} \n\n`);
      message.channel.send({embeds: [playerurso]})
  })
  }

  async function zone(){
    firebase.ref(`zone`).once("value").then(snapshot => {
      var mapabanco = parseInt(snapshot.child('mapas').val());
      var assbanco = parseInt(snapshot.child('assistencia').val());
      var killbanco = parseInt(snapshot.child('abate').val());
      var viverbanco = parseInt(snapshot.child('viver').val());

      let contabt = killbanco / mapabanco;
      let contviver = viverbanco / mapabanco;
      let contass = assbanco / mapabanco;

      const playerurso = new Discord.EmbedBuilder()
      .setColor("DarkGreen")
      .setTitle('Referencia de Registro')
      .setDescription(`Olá os registros de Zone estão abaixo, 😉 \n\n Selecione o jogador citado está com MEDIA de;\n\n\n Mapas Jogados: ${mapabanco} \n Abates: ${contabt} \n Assistencia: ${contass} \n Sobreviviência: ${contviver} \n\n`);
      message.channel.send({embeds: [playerurso]})
  })
  }

  async function walace(){
    firebase.ref(`walace`).once("value").then(snapshot => {
      var mapabanco = parseInt(snapshot.child('mapas').val());
      var assbanco = parseInt(snapshot.child('assistencia').val());
      var killbanco = parseInt(snapshot.child('abate').val());
      var viverbanco = parseInt(snapshot.child('viver').val());

      let contabt = killbanco / mapabanco;
      let contviver = viverbanco / mapabanco;
      let contass = assbanco / mapabanco;

      const playerurso = new Discord.EmbedBuilder()
      .setColor("DarkGreen")
      .setTitle('Referencia de Registro')
      .setDescription(`Olá os registros de Walace estão abaixo, 😉 \n\n Selecione o jogador citado está com MEDIA de;\n\n\n Mapas Jogados: ${mapabanco} \n Abates: ${contabt} \n Assistencia: ${contass} \n Sobreviviência: ${contviver} \n\n`);
      message.channel.send({embeds: [playerurso]})

  })
  }

    async function emb2 (){
        // IF TIVER COMPLETADO O MAPA
        const embed2 =  new Discord.EmbedBuilder()
        .setColor("DarkGreen")
        .setTitle('Avaliador de Kill ')
        .setDescription('Olá para prosseguir digite a quantidade de Abates. (Etapa 1/3)');
        let msg2EMBED = await message.channel.send({embeds: [embed2]})
        const coletor = new Discord.MessageCollector(msg2EMBED.channel, {max: 1 ,filter: (m) => m.author.id === message.author.id})
        
        coletor.on("collect", (msg3) => {
           totalabates = parseInt(msg3.content);
            msg2EMBED.delete();
            emb3();
            msg3.delete();
         
        })}
    
    async function emb3 (){
            // IF TIVER DITO AS KILLS
            const embed3 =  new Discord.EmbedBuilder()
            .setColor("DarkGreen")
            .setTitle('Avaliador de ASSISTENCIAS ')
            .setDescription('Olá para prosseguir digite  a quantidade de Assistências. (Etapa 2/3)');
            let msg3EMBED = await message.channel.send({embeds: [embed3]})
            const coletor1 = new Discord.MessageCollector(msg3EMBED.channel, {max: 1 ,filter: (m) => m.author.id === message.author.id})
            coletor1.on("collect", (msg4) => {

            totalassists = parseInt(msg4.content);
                msg3EMBED.delete();  
                emb4();
                msg4.delete(); 
                })
    }

    async function emb4(){
        // IF TIVER DITO AS ASSISTENCIAS
        const embed4 =  new Discord.EmbedBuilder()
        .setColor("DarkGreen")
        .setTitle('Avaliador de Sobrevivência ')
        .setDescription('Por fim, digite o seu tempo de Sobrevivência. (Etapa 3/3)');
        let msg4EMBED = await message.channel.send({embeds: [embed4]})
        const coletor2 = new Discord.MessageCollector(msg4EMBED.channel, {max: 1 ,filter: (m) => m.author.id === message.author.id})
        coletor2.on("collect", (msg5) => {
          
        totalviver = parseInt(msg5.content);
            msg4EMBED.delete();
            emb5();
            msg5.delete(); 
        })}

    async function emb5(){
                // IF TIVER DITO O TEMPO VIVO
                const players = new Discord.EmbedBuilder()
                .setColor("DarkGreen")
                .setTitle('Referencia de Registro')
                .setDescription(`Olá você concluiu o registro de uma Partida \n Selecione o jogador referente ao registro citado\n\n\n Mapa: ${map} \n Abates: ${totalabates} \n Assistencia: ${totalassists} \n Sobreviviência: ${totalviver} \n\n Selecione o Jogador pela reação.:\n Sukuna: 🐻 - Hanzo: 🐱 - Fast: 🐌 -  Zone: 🐇 - Walacce: 🦔`);
                let msgplayers = await message.channel.send({embeds: [players]})
                msgplayers.react("🐻");
                msgplayers.react("🐱");
                msgplayers.react("🐌");
                msgplayers.react("🐇");
                msgplayers.react("🦔");
                msgplayers.react("❌");
               await msgplayers.awaitReactions({max: 1 , filter: (react, user) => ['🐻','🐱','🐌','🐇','🦔','❌'].includes(react.emoji.name) && user.id === message.author.id }).then(collected => {            
                
                

                if (collected.first().emoji.name == '🐻'){          
                    firebase.ref(`sukuna`).once("value").then(snapshot => {
                      var mapabanco = parseInt(snapshot.child('mapas').val());
                      var assbanco = parseInt(snapshot.child('assistencia').val());
                      var killbanco = parseInt(snapshot.child('abate').val());
                      var viverbanco = parseInt(snapshot.child('viver').val());


                       firebase.ref(`sukuna/abate`).set(killbanco + totalabates);
                       firebase.ref(`sukuna/assistencia`).set(assbanco + totalassists);
                       firebase.ref(`sukuna/viver`).set(viverbanco + totalviver);
                       firebase.ref(`sukuna/mapas`).set(mapabanco + 1);
                       msgplayers.delete();
                       up = 0;

                       const conf = new Discord.EmbedBuilder()
                       .setColor("DarkGreen")
                       .setTitle('Concordancia de Registro')
                       .setDescription(`Olá você concluiu o registro de uma Partida para Sukuna!`);
                        message.channel.send({embeds: [conf]})
                      })
                    }
                    if (collected.first().emoji.name == '🐱'){
                      firebase.ref(`hanzo`).once("value").then(snapshot => {
                        var mapabanco = parseInt(snapshot.child('mapas').val());
                        var assbanco = parseInt(snapshot.child('assistencia').val());
                        var killbanco = parseInt(snapshot.child('abate').val());
                        var viverbanco = parseInt(snapshot.child('viver').val());
  
  
                         firebase.ref(`hanzo/abate`).set(killbanco + totalabates);
                         firebase.ref(`hanzo/assistencia`).set(assbanco + totalassists);
                         firebase.ref(`hanzo/viver`).set(viverbanco + totalviver);
                         firebase.ref(`hanzo/mapas`).set(mapabanco + 1);
                         msgplayers.delete();
                         up = 0;

                         const conf = new Discord.EmbedBuilder()
                         .setColor("DarkGreen")
                         .setTitle('Concordancia de Registro')
                         .setDescription(`Olá você concluiu o registro de uma Partida para Hanzo!`);
                          message.channel.send({embeds: [conf]})
                        })
                    }
                    if (collected.first().emoji.name == '🐌'){
                      firebase.ref(`wilan`).once("value").then(snapshot => {
                        var mapabanco = parseInt(snapshot.child('mapas').val());
                        var assbanco = parseInt(snapshot.child('assistencia').val());
                        var killbanco = parseInt(snapshot.child('abate').val());
                        var viverbanco = parseInt(snapshot.child('viver').val());
  
  
                         firebase.ref(`wilan/abate`).set(killbanco + totalabates);
                         firebase.ref(`wilan/assistencia`).set(assbanco + totalassists);
                         firebase.ref(`wilan/viver`).set(viverbanco + totalviver);
                         firebase.ref(`wilan/mapas`).set(mapabanco + 1);
                         msgplayers.delete();
                         up = 0;

                         const conf = new Discord.EmbedBuilder()
                         .setColor("DarkGreen")
                         .setTitle('Concordancia de Registro')
                         .setDescription(`Olá você concluiu o registro de uma Partida para Fast!`);
                          message.channel.send({embeds: [conf]})
                        })
                    }
                    if (collected.first().emoji.name == '🐇'){
                      firebase.ref(`zone`).once("value").then(snapshot => {
                        var mapabanco = parseInt(snapshot.child('mapas').val());
                        var assbanco = parseInt(snapshot.child('assistencia').val());
                        var killbanco = parseInt(snapshot.child('abate').val());
                        var viverbanco = parseInt(snapshot.child('viver').val());
  
  
                         firebase.ref(`zone/abate`).set(killbanco + totalabates);
                         firebase.ref(`zone/assistencia`).set(assbanco + totalassists);
                         firebase.ref(`zone/viver`).set(viverbanco + totalviver);
                         firebase.ref(`zone/mapas`).set(mapabanco + 1);
                         msgplayers.delete();
                         up = 0;

                         const conf = new Discord.EmbedBuilder()
                         .setColor("DarkGreen")
                         .setTitle('Concordancia de Registro')
                         .setDescription(`Olá você concluiu o registro de uma Partida para Zone!`);
                          message.channel.send({embeds: [conf]})
                        })
                    }
                    if (collected.first().emoji.name == '🦔'){
                      firebase.ref(`walace`).once("value").then(snapshot => {
                        var mapabanco = parseInt(snapshot.child('mapas').val());
                        var assbanco = parseInt(snapshot.child('assistencia').val());
                        var killbanco = parseInt(snapshot.child('abate').val());
                        var viverbanco = parseInt(snapshot.child('viver').val());
  
  
                         firebase.ref(`walace/abate`).set(killbanco + totalabates);
                         firebase.ref(`walace/assistencia`).set(assbanco + totalassists);
                         firebase.ref(`walace/viver`).set(viverbanco + totalviver);
                         firebase.ref(`walace/mapas`).set(mapabanco + 1);
                         msgplayers.delete();
                         up = 0;

                         const conf = new Discord.EmbedBuilder()
                         .setColor("DarkGreen")
                         .setTitle('Concordancia de Registro')
                         .setDescription(`Olá você concluiu o registro de uma Partida para Walace!`);
                          message.channel.send({embeds: [conf]})
                        })
                    }
                    if (collected.first().emoji.name == '❌'){
                      totalassists = 0;
                      totalabates = 0;
                      totalviver = 0;
                      msgplayers.delete();
                      up = 0;
                        }   
                    })}

                    




    //CODIGOS DE FATO!

    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (message.channel.id === '1007095973438312519')  {

    if (message.content == 'ppr' || message.content == 'registrarpartida') {
        if ( up == 0) {
        up++; 
        const embed1 = new Discord.EmbedBuilder()
        .setColor("DarkGreen")
        .setTitle('Registro De Partida')
        .setDescription('Olá você abriu o registro de Partida \n Selecione o mapa referente a partida anterior\n Bermuda: :park: \n Kalharari: :sunrise_over_mountains: \n Purgatorio: :cityscape: ');
        let msg = await message.reply({embeds: [embed1]})
        msg.react("🏞");
        msg.react("🌄");
        msg.react("🏙");
        msg.awaitReactions({max: 1 , filter: (react, user) => ['🏞','🌄','🏙'].includes(react.emoji.name) && user.id === message.author.id }).then(collected => {         
        
            if (collected.first().emoji.name == '🏞'){
            map = "Bermuda";
            msg.delete();
            message.delete(); 
            emb2();
            }
            if (collected.first().emoji.name == '🌄'){
                map = "Kalharari";
                msg.delete();
                message.delete(); 
                emb2();
            }
            if (collected.first().emoji.name == '🏙'){
                map = "Purgatorio";
                msg.delete();
                message.delete(); 
                emb2();
            }    
        })}
        return;
      } // Termino do PPR


      if (message.content == 'reg' || message.content == 'registros'){
        const players = new Discord.EmbedBuilder()
        .setColor("DarkGreen")
        .setTitle('Logs de Registro')
        .setDescription(`Olá para buscar o registro de um Player \n Selecione o jogador referente ao registro \n\n\n  Selecione o Jogador pela reação.:\n Sukuna: 🐻 - Hanzo: 🐱 - Fast: 🐌 -  Zone: 🐇 - Walacce: 🦔`);
        let msgplayers = await message.channel.send({embeds: [players]})
        msgplayers.react("🐻");
        msgplayers.react("🐱");
        msgplayers.react("🐌");
        msgplayers.react("🐇");
        msgplayers.react("🦔");
        msgplayers.react("❌");
       await msgplayers.awaitReactions({max: 1 , filter: (react, user) => ['🐻','🐱','🐌','🐇','🦔','❌'].includes(react.emoji.name) && user.id === message.author.id }).then(collected => {            
        
        if (collected.first().emoji.name == '🐻'){
          sukuna();
          message.delete();
          msgplayers.delete();
        }
          if (collected.first().emoji.name == '🐱'){
            hanzo();
            message.delete();
            msgplayers.delete();
        }
          if (collected.first().emoji.name == '🐌'){
            fast();
            message.delete();
            msgplayers.delete();
        }
          if (collected.first().emoji.name == '🐇'){
            zone();
            message.delete();
            msgplayers.delete();
        }
          if (collected.first().emoji.name == '🦔'){
            walace();
            message.delete();
            msgplayers.delete();
        }
        if (collected.first().emoji.name == '❌'){
          msgplayers.delete();
          message.delete();
      }
      })
    }
  }
})

    client.login(config.token) 
    //#Comando Teste#
    // const msgs = await message.channel.awaitMessages({max: 3 ,filter: (m) => m.author.id === message.author.id})    
    // console.log(msgs.lastKey)
