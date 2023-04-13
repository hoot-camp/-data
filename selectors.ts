import { $data, keysToIndex } from './config'
import { concatKeys } from './helpers'
import { $Key } from 'go.vote/$DatumPath/@$key'
import { $DatumStore } from 'go.vote/$DatumPath/store'

export const select$Data = (state: $DatumStore) => state[$data]

export const select$DatumIndex =
    ({ $keyListComma }: $Key): ((state: $DatumStore) => number) =>
    (state) =>
        state[keysToIndex][concatKeys({ $keyListComma })]

export const select$Datum =
    ({ $keyListComma }: $Key) =>
    (state: $DatumStore) =>
        state[$data][select$DatumIndex({ $keyListComma })(state)]
