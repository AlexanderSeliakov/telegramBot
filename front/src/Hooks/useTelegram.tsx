import { TelegramHook } from '../Types'

const tg = window.Telegram.WebApp

export const useTelegram: TelegramHook = () => {
	const onClose = () => {
		tg.close()
	}

	const onToggleButton: () => void = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.show()
		} else {
			tg.MainButton.hide()
		}
	}
	return {
		onClose,
		onToggleButton,
		tg,
		user: tg?.initDataUnsafe.user,
	}
}
