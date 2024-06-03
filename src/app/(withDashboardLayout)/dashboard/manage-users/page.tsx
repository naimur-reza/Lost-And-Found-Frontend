"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "@/redux/api/userApi";
import { toast } from "sonner";

const ManageUsers = () => {
  const { data, isLoading } = useGetAllUsersQuery({});
  const [deleteUser] = useDeleteUserMutation();

  const rows = data?.data || [];

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteUser(id).unwrap();
      if (res?.data?.id) {
        toast.success("User deleted successfully");
      }
    } catch (err: any) {
      toast.error("Failed to delete user");
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "mobile", headerName: "Mobile", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.5rem" },
          fontWeight: "bold",
          mt: 1,
          mb: 2,
        }}
      >
        Manage Users
      </Typography>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          loading={isLoading}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default ManageUsers;
