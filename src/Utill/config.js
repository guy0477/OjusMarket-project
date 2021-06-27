// const MAIN_LIST = 'http://10.58.6.166:8000';
// const SIGNUP_URL = 'http://10.58.7.21:8000';
// const LOGIN_URL = 'http://10.58.7.179:8000';
const BASE_URL = 'http://18.117.10.173:8000';

export const GET_PRODUCT_API = `${BASE_URL}`;
export const GET_DELIVERY_API = `${BASE_URL}/user`;
export const GET_PURCHASE_API = `${BASE_URL}/orders/payment`;
export const GET_PRICE_API = `${BASE_URL}/user`;
export const GET_SIGNUP_API = `${BASE_URL}/user/sign-up`;
export const GET_LOGIN_API = `${BASE_URL}/user/sign-in`;
export const GET_RECIPE_INFO_API = `${BASE_URL}/recipes`;
export const GET_CART_LIST = `${BASE_URL}/carts/list`;
export const GET_ID_CHECK_API = `${BASE_URL}/user/id-check`;
export const LOGIN_TOKEN = localStorage.getItem('LII');
