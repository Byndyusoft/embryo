import { createSchema } from 'reva';
import { required } from 'reva/lib/validators';

export const rules = {
    username: required('Username must be defined')(),
    password: required('Password must be defined')()
};

export default createSchema(rules);
