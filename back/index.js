/** @format */

require('dotenv').config()

// http://192.168.1.83:3000 http://192.168.1.83:3000

const TelegramBot = require('node-telegram-bot-api')

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TOKEN, { polling: true })

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
	const chatId = msg.chat.id

	// send a message to the chat acknowledging receipt of their message
	await bot.sendMessage(chatId, 'Button', {
		reply_markup: {
			keyboard: [[{ text: 'make an order' }]],
		},
	})

	// send a message to the chat acknowledging receipt of their message
	await bot.sendMessage(chatId, 'Button', {
		reply_markup: {
			inline_keyboard: [[{ text: 'make an order 2', web_app: { url: process.env.URL } }]],
		},
	})
})
