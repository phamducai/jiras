import React, { useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "redux/hookredux";
import { projectAsync } from "redux/project/ProjectSlice";

const Project: React.FC = () => {
  const { project } = useAppSelector((state) => state.ProjectSlice);
  const dispatch = useAppDispatch();
  console.log(project);
  useEffect(() => {
    dispatch(projectAsync());
  }, []);
  const data: any = project;
  console.log(project);
  const onChange: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const columns: ColumnsType<any> = [
    {
      title: "Project ID",
      dataIndex: "id",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default Project;
