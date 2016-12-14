import { createSchema } from 'reva';
import { required } from 'reva/lib/validators';

export default createSchema({
    username: required('Username must be defined')(),
    password: required('Password must be defined')()
});
