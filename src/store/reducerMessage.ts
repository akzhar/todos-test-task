import { ActionTypes, TAction } from '@store/actions';

export type TMessageState = {
  isVisible: boolean,
  isWarning: boolean,
  label: string,
  text: string
};

const initialState: TMessageState = {
  isVisible: false,
  isWarning: false,
  label: '',
  text: ''
};

const reducerMessage = (state: TMessageState = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_MESSAGE: {
      return initialState;
    }
    case ActionTypes.SET_WARNING_MESSAGE: {
      const { label, text } = action.payload;
      return {...state, isWarning: true, label, text};
    }
    case ActionTypes.SET_INFO_MESSAGE: {
      const { label, text } = action.payload;
      return {...state,  isWarning: false, label, text};
    }
    case ActionTypes.SHOW_MESSAGE: {
      return {...state,  isVisible: true};
    }
    case ActionTypes.HIDE_MESSAGE: {
      return {...state,  isVisible: false};
    }
    default:
      return {...state};
  }
};

export default reducerMessage;
