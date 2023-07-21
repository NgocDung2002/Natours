/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts.js';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const pathUrl =
      type === 'password'
        ? 'http://127.0.0.1:8888/api/v1/users/updatePassword'
        : 'http://127.0.0.1:8888/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url: pathUrl,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} successfully!`);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
