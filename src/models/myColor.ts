import getData from '@/utils/request';
import { GlobalModelIF, EffectsPCEIF, ResponseGenerator } from '@/interfaces/global'


const state: GlobalModelIF = {
  fold: true,
  test: 'aaaaaaaa',
}

export default {
  namespace: 'myColor',
  state,

  reducers: {
    SAVE(state: GlobalModelIF, { payload: test }: { payload: any }) {
      return { ...state, test };
    },
  },

  effects: {
    *fetch({ payload: { page = 1 } }, { put, call, select }: EffectsPCEIF) {
      const {data} = yield call(getData, { page });
      yield put({
        type: 'SAVE',
        payload: {
          test: data,
        },
      });
    },
  },

  subscriptions: {},
};
