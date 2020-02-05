import {
	IGeneratorResult,
	INumberEnum,
	INumberEnumValue,
	IStringEnum,
} from 'jsoncodegen-types-for-generator'
import { TYPE_FOLDER_NAME } from '../model/constants'
import { templateOfEnum } from '../template/templateOfEnum'
import { generateEnumAssert } from './generateEnumAssert'
import { indent } from './indent'
import { joinArrayWith } from './joinArrayWith'
import { joinWith } from './joinWith'
import { lineBreakBefore } from './lineBreakBefore'
import { makeComment } from './makeComment'

export async function generateEnum(
	info: IStringEnum | INumberEnum,
): Promise<IGeneratorResult[]> {
	const { directoryPath, name, values, description } = info
	const enumValueDeclarations = joinArrayWith(`\n`)(
		(values as INumberEnumValue[]).map(t => {
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
		await generateEnumAssert(info),
	]
}
