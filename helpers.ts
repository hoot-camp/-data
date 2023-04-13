//go.vote/$DatumPath/@$data
import { $Key } from 'go.vote/$Datum/@$key'
import { concat } from 'go.vote/@/helpers'

export const concatKeys = ({ $keyListComma }: $Key): string =>
    concat($keyListComma)
