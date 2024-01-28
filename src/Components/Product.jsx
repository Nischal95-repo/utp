import { Button, withWidth } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { productlist } from "../Assets/DataSet/product";
import TitleComponent from "./common/TitleComponent";
import ProductCard from "./productCard";
import { useHistory } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ReactModal from "react-awesome-modal";
import Close from "../Assets/SVG/close.svg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { InputField, TextArea } from "./common/FieldComponents";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
  container: {
    maxHeight: 300,
    marginBottom: 20,
    marginTop: 20,
    scrollbarColor: "blue",
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.primary}`,
    padding: "0 4px",
  },
}))(Badge);

const StyledTableCell = withStyles(
  (theme) => (
    console.log("color", theme),
    {
      head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: 20,
      },
      body: {
        fontSize: 14,
      },
    }
  )
)(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Product = (props) => {
  const [prod, setProd] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const isSmallScreen = ["xs", "sm"].includes(props.width);
  const history = useHistory();
  const generateMessage = (values) => {
    let message = "I would like to place an order for the following item.<br/>";
    prod.forEach((rec) => {
      message =
        message +
        "<b>Product Name</b> -" +
        rec.name +
        ", <b>Quantity </b> -" +
        rec.qty +
        "<br/> ";
    });
    localStorage.setItem("msg", message);
    // let path = `/contact-us?checkProps=true`;
    // history.push(path);
    let val = { ...values, description: message };
    window.sendmail(val);
  };

  const addProductsToCart = (data) => {
    debugger;
    let prodList = prod;
    let product = { qty: data.qty, name: data.name };
    let count = 1;
    for (let i = 0; i < prodList.length; i++) {
      let rec = prodList[i];
      if ("qty" in rec && rec.qty == data.qty && rec.name == data.name) {
        count = rec.count + 1;
        prodList.splice(i, 1);
      }
    }
    product = { ...product, count: count };
    prodList.push(product);
    setProd(prodList);
    console.log("test", prod.length);
  };

  const removeProductsFromCart = (data) => {
    console.log("remove", data);
    let prodList = prod;
    for (let i = 0; i < prodList.length; i++) {
      let rec = prod[i];
      console.log("remove", rec);
      if (
        "qty" in rec &&
        rec.qty == data.qty &&
        rec.name == data.name &&
        rec.count == 1
      ) {
        prodList.splice(i, 1);
      } else if ("qty" in rec && rec.qty == data.qty && rec.name == data.name) {
        prodList.splice(i, 1);
        prodList.push({ qty: data.qty, name: data.name, count: rec.count - 1 });
      }
    }
    setProd(prodList);
  };

  return (
    <>
      <Modal
        visible={showCart}
        closeModal={() => {
          setShowCart(false);
        }}
        data={prod}
        onSubmit={generateMessage}
      />

      <div
        style={{ margin: isSmallScreen ? "60px 10px" : "110px 50px 50px 50px" }}
      >
        <TitleComponent title="Product List" />
        {/* <div className="text-right">
          <IconButton
            aria-label="cart"
            onClick={() => {
              setShowCart(true);
            }}
          >
            <StyledBadge badgeContent={prod.length} color="primary" showZero>
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div> */}
        {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
          {productlist.map((data, index) => {
            return (
              <div>
                <ProductCard
                  data={data}
                  addProducts={addProductsToCart}
                  prodList={prod}
                  removeProduct={removeProductsFromCart}
                />
              </div>
            );
          })}
        </div> */}
        <Grid container spacing={3} className="mt-2">
          {productlist.map((data, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard
                  data={data}
                  addProducts={addProductsToCart}
                  prodList={prod}
                  removeProduct={removeProductsFromCart}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default withWidth()(Product);

function Modal(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div>
      <ReactModal
        visible={props.visible}
        width="700"
        // height="400"
        effect="fadeInUp"
        onClickAway={props.closeModal}
      >
        <div className="product-modal">
          <div style={{ display: "flex" }}>
            <div className="flex-1">
              <b>My Cart</b>
            </div>

            <div className="flex-2 text-right">
              <img src={Close} onClick={props.closeModal} />
            </div>
          </div>
          {/* className={classes.container} */}
          <TableContainer component={Paper} className="mt-4 mb-4">
            <Table
              className={classes.table}
              aria-label="customized table"
              stickyHeader
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Sl No</StyledTableCell>
                  <StyledTableCell align="left">Product Name</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.map((row, index) => {
                  return (
                    <StyledTableRow key={index} width={"100%"}>
                      <StyledTableCell>{index + 1}</StyledTableCell>
                      <StyledTableCell align="left">
                        {row.name + "(" + row.qty + ")"}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        {row.count}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <div>
            <b>Contact Details</b>
          </div>

          <Formik
            initialValues={{ name: "", phoneNumber: "" }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Name Required"),

              phoneNumber: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("Phone Number Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values));
              setSubmitting(false);

              props.onSubmit(values);
            }}
          >
            {(formProps) => {
              console.log("formProps", formProps);
              return (
                <Form>
                  <div style={{ display: "flex" }}>
                    <InputField
                      className="mb-4 cart-input"
                      name="name"
                      label="Name"
                    />
                    <InputField
                      className="mb-4 ml-3 cart-input"
                      name="phoneNumber"
                      label="Phone Number"
                    />
                  </div>

                  <Button
                    variant="contained"
                    size="smaill"
                    color="primary"
                    disabled={
                      formProps.values.name == "" ||
                      formProps.values.phoneNumber == ""
                    }
                    type="submit"
                  >
                    Request Callback
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ReactModal>
    </div>
  );
}
