const toDefault = (data: typeof import("*.svg")) => data.default.toString();

type RepositoryPromise = { [key: string]: Promise<string> }
const repositories: { [key: string]: RepositoryPromise } = {
	developer: {
		antonio: import("@assets/ui/PortraitAntonio.svg").then(toDefault),
	}
}

export const hasImage = (repositoryName: string, imageName: string) => {
	return isInRepository(repositoryName) && imageName in getRepository(repositoryName)
}

export const isInRepository = (repositoryName: string) => {
	return (repositoryName in repositories)
}

export const getRepository = (repositoryName: string) => {
	return repositories[repositoryName]
}

export const getImage = (repositoryName: string, imageName: string) => {
	return getRepository(repositoryName)[imageName];
}
