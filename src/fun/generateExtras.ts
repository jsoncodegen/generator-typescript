import type { IGeneratorResult } from 'jsoncodegen-types-for-generator'
import type { IConfig } from '../model/IConfig.js'
import { ASSERT_UTILITY_FOLDER_NAME } from '../model/constants.js'
import { templateOfAssertArray } from '../template/templateOfAssertArray.js'
import { templateOfAssertBoolean } from '../template/templateOfAssertBoolean.js'
import { templateOfAssertExactValue } from '../template/templateOfAssertExactValue.js'
import { templateOfAssertMap } from '../template/templateOfAssertMap.js'
import { templateOfAssertNumber } from '../template/templateOfAssertNumber.js'
import { templateOfAssertNumberEnumValue } from '../template/templateOfAssertNumberEnumValue.js'
import { templateOfAssertString } from '../template/templateOfAssertString.js'
import { templateOfAssertStringEnumValue } from '../template/templateOfAssertStringEnumValue.js'
import { templateOfAssertionError } from '../template/templateOfAssertionError.js'

export async function generateExtras(
	config: IConfig,
): Promise<IGeneratorResult[]> {
	return [
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertArray.ts'],
			content: templateOfAssertArray(config),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertBoolean.ts'],
			content: templateOfAssertBoolean(config),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertExactValue.ts'],
			content: templateOfAssertExactValue(config),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'AssertionError.ts'],
			content: templateOfAssertionError(),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertMap.ts'],
			content: templateOfAssertMap(config),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertNumber.ts'],
			content: templateOfAssertNumber(config),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertNumberEnumValue.ts'],
			content: templateOfAssertNumberEnumValue(config),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertString.ts'],
			content: templateOfAssertString(config),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertStringEnumValue.ts'],
			content: templateOfAssertStringEnumValue(config),
		},
	]
}
