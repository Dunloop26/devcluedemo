import { CardType } from "@components/Card"
import { developerCardNames, errorCardNames, moduleCardNames } from "@constants/CardNames"
import { CardInfo } from "@interfaces/CardInfo"

const inList = (val: string, list: string[]) => {
	const index = list.findIndex((el) => {
		return el == val
	})
	return index !== -1;
}

const getCardType = (cardName: string): CardType | undefined => {
	if (inList(cardName, developerCardNames)) return CardType.developer;
	else if (inList(cardName, moduleCardNames)) return CardType.module;
	else if (inList(cardName, errorCardNames)) return CardType.error;
	return undefined;
}

const solve = (cardName: string): CardInfo | undefined => {
	const cardType = getCardType(cardName);
	if (cardType === undefined) return undefined;
	return {
		name: cardName,
		type: cardType
	}
}

export default {
	getCardType,
	solve
}
