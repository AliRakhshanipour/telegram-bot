const { Telegraf } = require("telegraf");

const bot = new Telegraf("5512290426:AAHIgdTuiedJG_sJs58TF3l9aTKODXHWtoo");
bot.start((ctx) => console.log(ctx.message.from));
bot.launch();
