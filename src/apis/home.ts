import { XXMANMI_HOST } from './constants';
import { AppFetch } from './fetch';

export const getNew = () =>
  AppFetch.get<GetNewResponse>(`${XXMANMI_HOST}/yhdm/new`, {
    params: { type: 'acg', year: 0, area: 'japan' },
  });
