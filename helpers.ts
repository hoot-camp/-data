//go.vote/$DatumPath/@$data
import { $Keys } from 'go.vote/$Datum/@$keys'
import { concat } from 'go.vote/@/helper'

export const concatKeys = ({ $keyListComma }: $Keys): string =>
    concat($keyListComma)
