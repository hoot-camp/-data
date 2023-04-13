import produce from 'immer'
import { $DatumData } from 'go.vote/$DatumPath/dataTypes/data'
import { $DatumStore } from 'go.vote/$DatumPath/store'
import { $data, keysToIndex, set$Data } from './config'
import { concatKeys } from './helpers'
import { $Key } from 'go.vote/$DatumPath/@key'

export type At$Datums = {
    [$data]: Array<$DatumData>
    [keysToIndex]: { [key: string]: number }
    [set$Data]: (incoming: Array<$DatumData>) => void
}

export function $datumsSetter(set) {
    return {
        [$data]: [],
        [keysToIndex]: {},
        [set$Data]: (incoming: Array<$DatumData>) =>
            set(
                produce<$DatumStore>((state) => {
                    state[$data] = incoming
                    state[keysToIndex] = incoming.reduce(
                        (a, { $keyListComma }: $Key, i) => {
                            a[concatKeys({ $keyListComma })] = i
                            return a
                        },
                        {},
                    )
                }),
            ),
    }
}
