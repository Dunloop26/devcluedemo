import CardSolver from "@services/CardSolver";
import CardTitleSolver from "@services/CardTitleSolver";
import { Card } from "./Card";

export interface CardBuilderProps {
	cardName: string;
	visible?: boolean
}

export function CardBuilder({ cardName, visible = false }: CardBuilderProps) {
	console.warn(cardName)
	const cardInfo = CardSolver.solve(cardName);
	if (!cardInfo) return <></>;
	const { name, type } = cardInfo;
	const title = CardTitleSolver.solve(name);
	return <Card title={title} type={type} img={name} visible={visible} />;
}
