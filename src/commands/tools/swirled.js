const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('swirled')
    .setDescription('Menghitung bahan untuk membuat swirledwax')
    .addIntegerOption(option =>
      option.setName('amount')
        .setDescription('Jumlah swirledwax yang ingin dibuat')
        .setRequired(true)),
  
  calculateMaterials: function(quantity) {
    // Bahan untuk membuat 1 swirledwax
    const materialsPerSwirledWax = {
      purplePotion: 6,
      hardWax: 3,
      royalJelly: 3333,
      softWax: 9
    };

    // Menghitung total bahan yang dibutuhkan
    const totalMaterials = {
      purplePotion: materialsPerSwirledWax.purplePotion * quantity,
      hardWax: materialsPerSwirledWax.hardWax * quantity,
      royalJelly: materialsPerSwirledWax.royalJelly * quantity,
      softWax: materialsPerSwirledWax.softWax * quantity
    };

    return totalMaterials;
  },
  
  async execute(interaction) {
    const quantity = interaction.options.getInteger('amount');
    
    if (quantity <= 0) return await interaction.reply('Jumlah swirledwax harus lebih dari 0.');

    const totalMaterials = this.calculateMaterials(quantity);

    // Emoji untuk setiap material
    const emojiSwirledWax = '<:swirledwax:1216861148528250992>';
    const emojiPurplePotion = '<:purple_potion:1216626305005780992>';
    const emojiHardWax = '<:hardwax:1216861061349638164>';
    const emojiSoftWax = '<:softwax:1216861116710387742>';
    const emojiRoyalJelly = '<:royaljelly:1216863995349172294>';

    await interaction.reply(`to make ${quantity} ${emojiSwirledWax} you need:\n` +
      `${emojiPurplePotion} : ${totalMaterials.purplePotion}\n` +
      `${emojiHardWax} : ${totalMaterials.hardWax}\n` +
      `${emojiRoyalJelly} : ${totalMaterials.royalJelly}\n` +
      `${emojiSoftWax} : ${totalMaterials.softWax}`);
  }
};
