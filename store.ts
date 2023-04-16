import produce from 'immer'
import { $DatumData } from 'go.vote/.kit-schema/data'
import { $DatumStore } from 'go.vote/.kit-schema/store'
import { $data, compositeKeyToIndex, set$Data } from './config'
import { Keys, composite } from 'go.vote/.kit-schema/@keys'

export type At$Datums = {
    [$data]: Array<$DatumData>
    [compositeKeyToIndex]: { [key: string]: number }
    [set$Data]: (incoming: Array<$DatumData>) => void
}

export function $datumsSetter(set) {
    return {
        [$data]: [],
        [compositeKeyToIndex]: {},
        [set$Data]: (incoming: Array<$DatumData>) =>
            set(
                produce<$DatumStore>((state) => {
                    state[$data] = incoming
                    state[compositeKeyToIndex] = incoming.reduce(
                        (a, keys: Keys, i) => {
                            a[composite(keys)] = i
                            return a
                        },
                        {},
                    )
                }),
            ),
    }
}
