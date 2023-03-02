interface Member {
  userId: number;
  name: string;
  avatar: string;
}
interface creator {
  id: number;
  name: string;
}

export interface Project {
  members: Member | null;
  creator: creator | null;
  id: number | null | string;
  projectName: string | null;
  description: string | null;
  alias: string | null;
  deleted: boolean | null;
}
export interface ProjectState {
  project: Project[] | null;
}

export interface projects {
  projectName: string;
  description: string;
  categoryId: number;
  alias: string;
}
