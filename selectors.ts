import { $data, compositeKeyToIndex } from './config'
import { Keys, composite } from 'go.vote/.kit-schema/@keys'
import { $DatumStore } from 'go.vote/.kit-schema/store'

export const select$Data = (state: $DatumStore) => state[$data]

export const select$DatumIndex =
    (keys: Keys): ((state: $DatumStore) => number) =>
    (state) =>
        state[compositeKeyToIndex][composite(keys)]

export const select$Datum = (keys: Keys) => (state: $DatumStore) =>
    state[$data][select$DatumIndex(keys)(state)]
