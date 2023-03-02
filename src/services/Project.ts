import { login, projects } from "model";
import { baseService } from "./baseService";

export class ProjectService extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }
  getAllproject = () => {
    return this.get(`/api/Project/getAllProject`);
  };

  getcategory = () => {
    return this.get(`/api/ProjectCategory`);
  };

  taoproject = (data: projects) => {
    return this.post(`/api/Project/createProject`, data);
  };
}
export const project = new ProjectService();
