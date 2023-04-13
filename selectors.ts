import { $data, keysToIndex } from './config'
import { concatKeys } from './helpers'
import { $Keys } from 'go.vote/$Datum/@$keys'
import { $DatumStore } from 'go.vote/$Datum/store'

export const select$Data = (state: $DatumStore) => state[$data]

export const select$DatumIndex =
    ({ $keyListComma }: $Keys): ((state: $DatumStore) => number) =>
    (state) =>
        state[keysToIndex][concatKeys({ $keyListComma })]

export const select$Datum =
    ({ $keyListComma }: $Keys) =>
    (state: $DatumStore) =>
        state[$data][select$DatumIndex({ $keyListComma })(state)]
