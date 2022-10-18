/** @format */

require('dotenv').config()

// http://192.168.1.83:3000 http://192.168.1.83:3000

const TelegramBot = require('node-telegram-bot-api')

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TOKEN, { polling: true })

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
	const chatId = msg.chat.id

	// send a message to the chat acknowledging receipt of their message
	bot.sendMessage(chatId, 'chatId', {
		reply_markup: {
			inline_keyboard: [[{ text: 'make an order', web_app: { url: process.env.URL } }]],
		},
	})
})
