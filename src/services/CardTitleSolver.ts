import { nameToTitle } from "@constants/CardTitles"

export default {
	solve: (cardName: string): string | undefined => {
		if (cardName in nameToTitle) {
			return nameToTitle[cardName];
		}
		return undefined
	}
}
