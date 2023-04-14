const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('เช็คปิง!'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		interaction.editReply(`วัด latency ได้ที่: ${sent.createdTimestamp - interaction.createdTimestamp}ms นะฟอคค!!`);
	},
};

