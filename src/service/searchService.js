import request from '~/util/request';

export const search = async (q, type = 'less') => {
    try {
        const value = await request.get('users/search?', {
            params: {
                q,
                type,
            },
        });
        return value.data;
    } catch (error) {
        console.log(error);
    }
};
