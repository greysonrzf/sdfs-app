import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: ['err'],
});

export const PodcastsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_SUCCESS]: (state, { data }) =>
    state.merge({ data, loading: false, error: null }),
  [Types.LOAD_FAILURE]: (state, { err }) =>
    state.merge({ loading: false, error: err }),
});
