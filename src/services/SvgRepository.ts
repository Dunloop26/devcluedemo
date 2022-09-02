const toDefault = (data: typeof import("*.svg")) => data.default.toString();

type RepositoryPromise = { [key: string]: Promise<string> }
const repositories: { [key: string]: RepositoryPromise } = {
	developer: {
		antonio: import(`@assets/ui/PortraitAntonio.svg`).then(toDefault),
		carlos: import(`@assets/ui/PortraitCarlos.svg`).then(toDefault),
		carolina: import(`@assets/ui/PortraitCarolina.svg`).then(toDefault),
		juan: import(`@assets/ui/PortraitJuan.svg`).then(toDefault),
		juanita: import(`@assets/ui/PortraitJuanita.svg`).then(toDefault),
		manuel: import(`@assets/ui/PortraitManuel.svg`).then(toDefault),
		pedro: import(`@assets/ui/PortraitPedro.svg`).then(toDefault),
	},
	module: {
		comprobanteContable: import('@assets/ui/ModuloComprobanteContable.svg').then(toDefault),
		contabilidad: import('@assets/ui/ModuloContabilidad.svg').then(toDefault),
		facturacion: import('@assets/ui/ModuloFacturacion.svg').then(toDefault),
		nomina: import('@assets/ui/ModuloNomina.svg').then(toDefault),
		recibo: import('@assets/ui/ModuloRecibo.svg').then(toDefault),
		usuarios: import('@assets/ui/ModuloUsuarios.svg').then(toDefault),
	},
	error: {
		404: import('@assets/ui/Error404.svg').then(toDefault),
		encodingError: import('@assets/ui/ErrorEncodingError.svg').then(toDefault),
		memoryOutOfRange: import('@assets/ui/ErrorMemoryOutOfRange.svg').then(toDefault),
		nullPointer: import('@assets/ui/ErrorNullPointer.svg').then(toDefault),
		stackOverflow: import('@assets/ui/ErrorStackOverFlow.svg').then(toDefault),
		syntaxError: import('@assets/ui/ErrorSyntaxError.svg').then(toDefault),
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
