import { CardType } from "@components/Card";

export const getCardTypeName = (type: CardType): string => {
	return CardType[type].toString();
}
