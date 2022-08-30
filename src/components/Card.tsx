import { useEffect, useState } from "react";
import styles from "./Card.module.css"

export enum CardType {
	developer,
	module,
	error
}

export interface CardProps {
	type?: CardType;
	title?: string;
	img?: string;
	hidden?: boolean;
}

export function Card({ type = CardType.developer, title = "", img = "", hidden = true }: CardProps) {

	const [colorClass, setColorClass] = useState("")

	useEffect(() => {
		setColorClass(styles[CardType[type].toString()]);
	}, [type])

	return (
		<article className={`${styles.cardContainer} ${colorClass}`}>
			<main className={styles.imageFrame}>
			</main>
			<footer className={styles.titleFrame}>
				<p className={styles.title}>{title}</p>
			</footer>
		</article>
	)
}
