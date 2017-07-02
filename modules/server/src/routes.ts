import {Context} from 'koa';

/**
 * @user: miltador
 * @created: 7/2/17
 */
export const AppRoutes = [
  {
    action: async function(context: Context) {
      context.body = 'Hello 123!';
    },
    method: 'get',
    path: '/',
  },
];
