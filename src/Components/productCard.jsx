import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import test_img from "../Assets/Images/product_img.png";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
  },
  media: {
    height: 200,
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    paddingTop: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  flexClass: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  // const [showModal, setShowModal] = useState(false);
  const [qty, setQty] = useState("");
  const [prod, setProd] = useState([]);
  const [count, setCount] = useState(0);
  const { data } = props;
  const handleChange = (event) => {
    setQty(event.target.value);
  };

  console.log("product width", props.width);
  return (
    <Card
      style={{
        // ...classes.root,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        // width: ["sm", "xs", "md"].includes(props.width) ? "200px" : "300px",
      }}
    >
      <CardActionArea>
        <CardMedia
          style={{
            height: props.width == "xs" ? "150px" : "200px",
            width: props.width == "xs" ? "150px" : "200px",
          }}
          image={test_img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions className={classes.flexClass}>
        <FormControl className={classes.formControl}>
          <InputLabel>Qty</InputLabel>
          <Select
            value={qty}
            onChange={handleChange}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            className="MuiSelect-selectMenu"
            autoWidth={true}
          >
            {data.qty.map((data, index) => {
              return <MenuItem value={data + "L"}>{data + "L"}</MenuItem>;
            })}
          </Select>
        </FormControl>
        {false ? (
          <Button
            variant="contained"
            size="large"
            color="primary"
            disabled={qty == ""}
            onClick={() => {
              props.addProducts({ qty: qty, name: data.name });
            }}
          >
            Add
          </Button>
        ) : (
          <ButtonGroup>
            <Button
              // aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 0));

                props.removeProduct({ qty: qty, name: data.name });
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <div style={{ marginLeft: "20px" }}>{count}</div>
            <Button
              // aria-label="increase"
              onClick={() => {
                setCount(count + 1);
                props.addProducts({ qty: qty, name: data.name });
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        )}
      </CardActions> */}
    </Card>
  );
};

export default withWidth()(ProductCard);
