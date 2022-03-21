import { getData } from '@/utils/request';
import { GlobalModelIF, EffectsPCEIF, ResponseGenerator } from '@/interfaces/global';

interface GlobalModel extends Omit<GlobalModelIF, 'dispatch'> {}

const state: GlobalModel = {
  fold: null,
  explainShow: false,
  test: `高考体检是很多学生第一次全身体检，色觉测试就是其中之一。
         然而对体检流程不熟悉、对体检细节也不尽全知，造成误检的概率很高。
         将狼的简笔画说成羊能诊断为色盲或色弱吗？或许尽早接触检查图能能规避这些失误吧。`,
  currentNumber: 1,
};

export default {
  namespace: 'myColor',
  state,

  reducers: {
    SAVE(state: GlobalModelIF, { payload: test }: { payload: any }) {
      return { ...state, test };
    },
    UNFOLDANDROLD(state: GlobalModelIF, { payload }: { payload: boolean | null }) {
      return { ...state, fold: payload };
    },
    EXPLAINSHOWANDUNSHOW(state: GlobalModelIF) {
      return { ...state, explainShow: !state.explainShow, fold: null };
    },
  },

  effects: {
    *fetch({ payload: { page = 1 } }, { put, call, select }: EffectsPCEIF) {
      const { data } = yield call(getData, { page });
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
