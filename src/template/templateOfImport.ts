import type { IConfig } from '../model/IConfig.js'

export function templateOfImport({
	typeName,
	alias,
	path,
	config,
	isType,
}: {
	typeName: string
	alias: string
	path: string
	config: IConfig
	isType: boolean
}) {
	return `import ${
		!config.noTypeImports && isType ? 'type ' : ''
	}{ ${typeName} as ${alias} } from ${JSON.stringify(
		path + (config.importFileExtension ?? ''),
	)}`
}
