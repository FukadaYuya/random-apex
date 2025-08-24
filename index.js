require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Apex Legends キャラリスト
const legends = [
  'レイス', 'バンガロール', 'ジブラルタル', 'ライフライン', 'パスファインダー', 'ブラッドハウンド', 'コースティック', 'ミラージュ', 'オクタン', 'クリプト', 'レヴナント', 'ローバ', 'ランパート', 'ホライゾン', 'ヒューズ', 'ヴァルキリー', 'シア', 'アッシュ', 'マッドマギー', 'ニューキャッスル', 'ヴァンテージ', 'カタリスト', 'バリスティック', 'コンジット'
];

// Apex Legends 武器リスト
const weapons = [
  'R-99', 'R-301', 'フラットライン', 'スピットファイア', 'オルタネーター', 'CAR', 'プラウラー', 'ボルト', 'ディボーション', 'ハボック', 'L-スター', 'トリプルテイク', 'ロングボウ', 'チャージライフル', 'センチネル', 'ウィングマン', 'ピースキーパー', 'マスティフ', 'エヴァ8', 'モザンビーク', 'RE-45', 'P2020', '30-30リピーター', 'G7スカウト', 'ヘムロック'
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content === '/apex') {
    const legend = legends[Math.floor(Math.random() * legends.length)];
    const weapon = weapons[Math.floor(Math.random() * weapons.length)];
    message.reply(`あなたのレジェンド: **${legend}**\nあなたの武器: **${weapon}**`);
  }
});

// .envからトークンを取得してログイン
client.login(process.env.DISCORD_BOT_TOKEN);
