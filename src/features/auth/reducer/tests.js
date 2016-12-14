import { actions } from '.';
import { createReducer } from '../../../utilities';

describe('auth/reducer', () => {
    const reducer = createReducer(actions, {
        isAuthenticated: false,
        username: 'admin',
        role: 'admin',
        isPending: false,
        error: ''
    });

    it('pending...');
});
