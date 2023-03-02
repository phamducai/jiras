import React, { useEffect } from "react";
import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "redux/hookredux";
import { projectAsync } from "redux/project/ProjectSlice";
import { NavLink } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

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
    {
      title: "Project Name",
      dataIndex: "projectName",
      sorter: (a, b) => a.projectName.length - b.projectName.length,
      sortDirections: ["descend"],
      render: (text: string, record: any) => {
        return (
          <NavLink to={`/projectmanager/detail/${record.id}`}>{text}</NavLink>
        );
      },
    },
    {
      title: "Creator",
      dataIndex: "ProjectID",
      defaultSortOrder: "descend",
      render: (text: string, listproject: any) => {
        return <span> {listproject.creator.name}</span>;
      },
    },
    {
      title: "Category",
      dataIndex: "categoryName",
    },
    {
      title: "Actions",
      dataIndex: "",
      defaultSortOrder: "descend",
      render: (text, listproject, index) => {
        return (
          <p>
            <Button
              onClick={() => {
                // dispatch({
                //   type: actionTypeProject.SET_EDIT_FORMPROJECT,
                //   payload: {
                //     fromedit: <FormEditProject />,
                //     listproject,
                //     titleDraw: "Edit Project",
                //   },
                // });
              }}
              type="primary"
              className="text-xl cursor-pointer "
            >
              <EditOutlined />
            </Button>
          </p>
        );
      },
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey="id"
      />
    </div>
  );
};

export default Project;
