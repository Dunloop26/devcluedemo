import { useEffect, useState } from "react";
import styles from "./Card.module.css"
import gem from "@assets/ui/gem.svg";
import { getCardTypeName } from "@constants/CardTypeToString";
import { getImage, getRepository, hasImage, isInRepository } from "@services/SvgRepository";

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

	const [colorClass, setColorClass] = useState("");
	const [mainImage, setMainImage] = useState("");

	useEffect(() => {
		const colorValue = styles[CardType[type].toString()];
		const classValue = `${hidden ? styles.isHidden : colorValue}`;
		setColorClass(classValue);
	}, [type, hidden])

	useEffect(() => {
		const cardTypeName = getCardTypeName(type)
		if (!hasImage(cardTypeName, img)) return;
		getImage(cardTypeName, img).then(setMainImage)
	}, [img])

	return (
		<article className={styles.cardContainer}>
			<section className={`${styles.cardHolder} ${colorClass}`}>
				{
					(
						hidden
							? (
								<img className={styles.backimg} src={gem} />
							)
							: (
								<>
									<main className={styles.imageFrame}>
										<img className={styles.backimg} src={mainImage} />
									</main>
									<footer className={styles.titleFrame}>
										<p className={styles.title}>{title}</p>
									</footer>
								</>
							)
					)
				}
			</section>
		</article>
	)
}
