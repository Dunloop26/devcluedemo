import { developerCardNames, errorCardNames, moduleCardNames } from "@constants/CardNames"
import SvgRepository from "./SvgRepository";

const cardNames: { [key: string]: string[] } = {
	"developer": developerCardNames,
	"module": moduleCardNames,
	"error": errorCardNames
}

const importPath = "@assets/ui/";

console.warn(SvgRepository)

export default {
	getImagePath: async (type: "developer" | "module" | "error", idx: number) => {
		const names = cardNames[idx]
		if (idx < 0 && idx >= names.length) return;
		return import(`${importPath}/${names[idx]}`)
	}
}
