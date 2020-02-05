import { IGeneratorResult } from 'jsoncodegen-types-for-generator'
import { ASSERT_UTILITY_FOLDER_NAME } from '../model/constants'
import { templateOfAssertArray } from '../template/templateOfAssertArray'
import { templateOfAssertBoolean } from '../template/templateOfAssertBoolean'
import { templateOfAssertExactValue } from '../template/templateOfAssertExactValue'
import { templateOfAssertionError } from '../template/templateOfAssertionError'
import { templateOfAssertMap } from '../template/templateOfAssertMap'
import { templateOfAssertNumber } from '../template/templateOfAssertNumber'
import { templateOfAssertNumberEnumValue } from '../template/templateOfAssertNumberEnumValue'
import { templateOfAssertString } from '../template/templateOfAssertString'
import { templateOfAssertStringEnumValue } from '../template/templateOfAssertStringEnumValue'

export async function generateExtras(): Promise<IGeneratorResult[]> {
	return [
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertArray.ts'],
			content: templateOfAssertArray(),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertBoolean.ts'],
			content: templateOfAssertBoolean(),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertExactValue.ts'],
			content: templateOfAssertExactValue(),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'AssertionError.ts'],
			content: templateOfAssertionError(),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertMap.ts'],
			content: templateOfAssertMap(),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertNumber.ts'],
			content: templateOfAssertNumber(),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertNumberEnumValue.ts'],
			content: templateOfAssertNumberEnumValue(),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertString.ts'],
			content: templateOfAssertString(),
		},
		{
			filePath: [ASSERT_UTILITY_FOLDER_NAME, 'assertStringEnumValue.ts'],
			content: templateOfAssertStringEnumValue(),
		},
	]
}
