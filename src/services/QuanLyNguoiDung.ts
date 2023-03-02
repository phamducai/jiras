import { login } from "model";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }
  dangNhap = (thongTinDangNhap: login) => {
    return this.post(`api/Users/signin`, thongTinDangNhap);
  };

  dangKi = (thongTinDangKi: any) => {
    return this.post(`/api/Users/signup`, thongTinDangKi);
  };
}
export const auth = new QuanLyNguoiDungService();
