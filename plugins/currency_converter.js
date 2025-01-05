const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "convert",
    desc: "Convert an amount from one currency to another.",
    category: "convert",
    react: "💱",
    filename: __filename
},
async (conn, mek, m, { from, quoted, args, reply }) => {
    try {
        // Validate arguments
        if (args.length < 3) {
            return reply("Usage: `.convert <amount> <from_currency> <to_currency>`\nExample: `.convert 100 USD LKR`");
        }

        const amount = parseFloat(args[0]);
        const fromCurrency = args[1].toUpperCase();
        const toCurrency = args[2].toUpperCase();

        // Validate amount
        if (isNaN(amount)) {
            return reply("❌ Please provide a valid amount (a number).");
        }

        // Fetch exchange rate data
        const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Validate conversion currencies
        if (!data.rates[toCurrency]) {
            return reply(`❌ Conversion rate for currency "${toCurrency}" not found.`);
        }

        // Calculate converted amount
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        // Construct conversion information
        let conversionInfo = `💸 Currency Conversion 💸\n\n`;
        conversionInfo += `💵 Amount: ${amount} ${fromCurrency}\n`;
        conversionInfo += `🔄 Converted Amount: ${convertedAmount} ${toCurrency}\n`;
        conversionInfo += `📈 Exchange Rate:  ${fromCurrency} = ${exchangeRate} ${toCurrency}\n\n`;
        conversionInfo += `> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `;

        // Send the result
        await conn.sendMessage(from, { text: conversionInfo }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`❌ *Error fetching data*: ${e.message}`);
    }
});
