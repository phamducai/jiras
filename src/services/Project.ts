import { login } from "model";
import { baseService } from "./baseService";

export class ProjectService extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }
  getAllproject = () => {
    return this.get(`/api/Project/getAllProject`);
  };

  //   dangNhap = (thongTinDangNhap: login) => {
  //     return this.post(`api/Users/signin`, thongTinDangNhap);
  //   };
}
export const project = new ProjectService();
