import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }
  dangNhap = (thongTinDangNhap: any) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  dangKi = (thongTinDangKi: any) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKi);
  };
}
export const auth = new QuanLyNguoiDungService();
