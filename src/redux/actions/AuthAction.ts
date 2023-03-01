import { auth } from "services/QuanLyNguoiDung";
import { LOGIN_ACTION } from "./types/AuthType";
// /api/auth/signin .loginacttion

export const LoginAction = (data: any) => {
  return async (dispatch: any) => {
    try {
      const result = await auth.dangNhap(data);
      dispatch({
        type: LOGIN_ACTION,
        payload: result.data.content.user,
      });
      localStorage.setItem("token", result.data.content.token);
      localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      throw error;
    }
  };
};

// /api/auth/signup

export const RegisterAction = (data: any) => {
  return async (dispatch: any) => {
    try {
      const result = await auth.dangKi(data);

      if (result.data.statusCode === 200) {
        dispatch({
          type: LOGIN_ACTION,
          payload: result.data.content,
        });
      }
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  };
};
