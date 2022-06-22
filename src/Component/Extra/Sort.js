import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { listRooms } from "../redux/actions/room";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useStyles from "../Admin/Auth/Styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const SortBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();
  const sortQuery = query.get("sort");
  const [sort, setSort] = useState("-price");

  const classes = useStyles();

  const handleSort = async e => {
    e.preventDefault();
    setSort(e.target.value);
    navigate(`/room?sort=${e.target.value}`);
    await dispatch(listRooms("", e.target.value));
  };
  return (
    // <Form
    //   onSubmit={submitHandler}
    //   inline
    //   style={{ display: "flex", height: "80%" }}
    //   className="my-2"
    // >
    //   <Form.Control
    //     type="text"
    //     name="q"
    //     onChange={e => setSort(e.target.value)}
    //     placeholder="Search Rooms..."
    //     className="mr-sm-2 ml-sm-5"
    //   ></Form.Control>
    //   <Button type="submit" variant="outline-success" className="p-2">
    //     Sort
    //   </Button>
    // </Form>

    // <Dropdown title="Filter" id="username">
    //   <LinkContainer to="/profile">
    //     <Dropdown.Item>Profile</Dropdown.Item>
    //   </LinkContainer>
    //   <Dropdown.Item>Logout</Dropdown.Item>
    // </Dropdown>
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        onChange={handleSort}
        style={{ padding: "1px 3rem", marginTop: "5px" }}
      >
        <MenuItem value={"price"}>Price: Low to High</MenuItem>
        <MenuItem value={"-price"}>Price: High to Low</MenuItem>
        <MenuItem value={"capacity"}>Capacity: Low to High</MenuItem>
        <MenuItem value={"-capacity"}>Capcity: High to Low</MenuItem>
        <MenuItem value={"noofbeds"}>No of Beds: Low to High</MenuItem>
        <MenuItem value={"-noofbeds"}>No of Beds: High to Low</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortBox;
