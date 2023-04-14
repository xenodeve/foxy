const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('ใช้เปิดเพลงนะฟอคคค!!')
        .addStringOption(option =>
            option
                .setName("music")
                .setDescription("ชื่อเพลงที่ต้องการจ้า.")
                .setRequired(true)
            ),
    async execute(interaction) {
        const query = interaction.options.getString("music");
        if (!query) return interaction.reply("ช่วยระบุเพลงด้วยเด้อ");

        const res = await interaction.client.manager.search(
            query,
            interaction.author
        );

        const player = interaction.client.manager.create({
            guild: interaction.guild.id,
            voiceChannel: interaction.member.voice.channel.id,
            textChannel: interaction.channel.id,
        });

        player.connect();

        player.queue.add(res.tracks[0]);

        interaction.reply(`กำลังโหลดเพลง ${res.tracks[0].title} เข้าคิวนะฟอคค...`);

        if (!player.playing && !player.paused && !player.queue.size)
            return player.play();

        if (
            !player.playing &&
            !player.paused &&
            player.queue.totalSize === res.tracks.length
        )
            return player.play();
    },
};