const { SlashCommandBuilder } = require('discord.js');
const randomfood = ['ข้าวขาหมู' , 'ข้าวกระเพราไข่ดาว' , 'ข้าวแกงแรง3เท่า' , 'ข้าวผัดปู' , 'กะหรี่ปั๊บ' , 'แกงเขียวหวาน' , 'แกงไตปลา' , 'แกงส้ม' , 'เตี๋ยวเป็ดสนามม้า' , 'ส้มตำ' , 'คอหมูย่าง' ]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomfood')
		.setDescription('กินอะไรดี'),
	async execute(interaction) {
		await interaction.reply(randomfood[Math.floor(Math.random() *randomfood.length)]);
	},
};
