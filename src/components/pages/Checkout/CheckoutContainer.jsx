import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import CheckoutModalContainer from "../../common/checkoutModal/CheckoutModalContainer";
import { useState } from "react";
import { clearCart } from "../../../store/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CheckoutContainer = () => {
  const { cart, total } = useSelector((store) => store.cartSlice);
  const {user} = useSelector((store)=> store.auth)
  console.log(user);
  let shipping = 50;
  let vat = total * 0.21;
  let grandTotal = total + vat + shipping;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(clearCart());
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethod: "",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
    onSubmit: (data) => {
      console.log(data);
      handleOpen();
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Este es campo es obligatorio"),
      email: Yup.string()
        .email("El texto no corresponde a un email")
        .required("Este es campo es obligatorio"),
      phone: Yup.number().required("Este es campo es obligatorio"),
      address: Yup.string().required("Este es campo es obligatorio"),
      zipCode: Yup.string().required("Este es campo es obligatorio"),
      city: Yup.string().required("Este es campo es obligatorio"),
      country: Yup.string().required("Este es campo es obligatorio"),
      paymentMethod: Yup.string().required("Este es campo es obligatorio"),
      eMoneyNumber: Yup.number().when('paymentMethod', {
        is: "e-money",
        then:() => Yup.number().required('Este es campo es obligatorio') 
    }),
      eMoneyPin: Yup.number().when('paymentMethod', {
        is: "e-money",
        then:() => Yup.number().required('Este es campo es obligatorio') 
    }),
    }),
    validateOnChange: false,
  });

  const navigate = useNavigate();
console.log(errors);
  return (
    <>
      <Checkout
        navigate={navigate}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        values={values}
        cart={cart}
        grandTotal={grandTotal}
        shipping={shipping}
        vat={vat}
        total={total}
      />
      <CheckoutModalContainer
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        grandTotal={grandTotal}
      />
    </>
  );
};

export default CheckoutContainer;
