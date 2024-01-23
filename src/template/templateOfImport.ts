import { IConfig } from '../model/IConfig.js'

export function templateOfImport({
	typeName,
	alias,
	path,
	config,
}: {
	typeName: string
	alias: string
	path: string
	config: IConfig
}) {
	return `import { ${typeName} as ${alias} } from ${JSON.stringify(
		path + (config.importFileExtension ?? ''),
	)}`
}
