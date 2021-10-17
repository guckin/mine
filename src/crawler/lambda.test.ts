import {createLambda} from './lambda';

describe('handler', () => {
    it('is not implemented', async () => {
        const handler = createLambda();
        expect(await handler()).toEqual('hello world');
    });
});
