import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { BASE_URL } from "../../constant";
import style from "./index.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const SignupSchema = Yup.object().shape({
  img: Yup.string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().required("required"),
});

const Add = () => {
  const [goods, setGoods] = useState([]);
  const getGoods = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      setGoods(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGoods = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}${id}`);
      setGoods([...goods].filter((g) => g._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGoods();
  }, []);

  return (
    <>
      <div className={style["formkk"]}>
        <h1>Add</h1>
        <Formik
          initialValues={{
            img: "",
            name: "",
            description: "",
            price: 0,
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { resetForm }) => {
            const res = await axios.post(`${BASE_URL}`, values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className={style["form"]}>
              <Field name="img" />
              {errors.img && touched.img ? <div>{errors.img}</div> : null}
              <Field name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field name="description" />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
              <Field name="price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        <hr />

        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">img</TableCell>
                <TableCell align="right">name&nbsp;(g)</TableCell>
                <TableCell align="right">description&nbsp;(g)</TableCell>
                <TableCell align="right">price&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {goods &&
                goods.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">
                      <img src={row.img} alt="" width={100} />
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                      <button
                        onClick={() => {
                          window.confirm("Are you sure?") &&
                            deleteGoods(row._id);
                        }}
                      >
                        delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Add;
