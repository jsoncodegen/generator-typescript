import {
	IGeneratorResult,
	INumberEnum,
	INumberEnumValue,
	IStringEnum,
} from 'jsoncodegen-types-for-generator'
import { IConfig } from '../model/IConfig.js'
import { TYPE_FOLDER_NAME } from '../model/constants.js'
import { templateOfEnum } from '../template/templateOfEnum.js'
import { generateEnumAssert } from './generateEnumAssert.js'
import { indent } from './indent.js'
import { joinArrayWith } from './joinArrayWith.js'
import { joinWith } from './joinWith.js'
import { lineBreakBefore } from './lineBreakBefore.js'
import { makeComment } from './makeComment.js'

export async function generateEnum(
	config: IConfig,
	info: IStringEnum | INumberEnum,
): Promise<IGeneratorResult[]> {
	const { directoryPath, name, values, description } = info
	const enumValueDeclarations = joinArrayWith(`\n`)(
		(values as INumberEnumValue[]).map((t) => {
			const comment = lineBreakBefore(indent(makeComment(t.description)))
			const declaration = `\t${t.name} = ${JSON.stringify(t.value)},`
			return joinWith(`\n`)(comment, declaration)
		}),
	)
	const comment = lineBreakBefore(makeComment(description))
	const declaration = templateOfEnum({
		enumName: name,
		enumValueDeclarations,
	})
	return [
		{
			filePath: [TYPE_FOLDER_NAME, ...directoryPath, name + '.ts'],
			content: joinWith(`\n`)(comment, declaration),
		},
		await generateEnumAssert(config, info),
	]
}
