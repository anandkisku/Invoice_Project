import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { DateInput, SelectInput, TextInput, TextInputWrapper } from "../Input_Elenents";
import { FcDocument } from "react-icons/fc";
import { RiArrowDownSLine } from "react-icons/ri";
import { TbReceipt } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { location, dataRequired, validateDate, vendors, purchaseOrderNumber, InvoiceNumber, paymentTerms, department, Account } from "./allDatas";
import { LuSendHorizontal } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router";
import "./form.css";
import { toast, ToastContainer } from "react-toastify";

function MyForm() {
  const [switchCurrency, setSwitchCurrency] = useState("$");
  let navigate = useNavigate();

  function onSwitchCurrency(param) {
    setSwitchCurrency(param);
  }

  const logInData = JSON.parse(sessionStorage.getItem('userInfo'));
  const FormData = JSON.parse(sessionStorage.getItem('formData'));

  useEffect(() => {
    if (!logInData) {
      navigate('/login');
    }
  }, [logInData, navigate]);

  return (
    <div id="mainForm_container">
      <div className="vendorDetails">
        <span className="doucument_icon">
          <FcDocument />
        </span>{" "}
        <span className="vendorDetails2">Vendor Details</span>
      </div>
      <div className="general_information">Vendor Information</div>
      <Formik
        initialValues={{
          vendor: FormData?.vendor?  FormData.vendor : "",
          purchaseOrderNumber: FormData?.purchaseOrderNumber?  FormData.purchaseOrderNumber : "",
          inVoiceNumber: FormData?.inVoiceNumber?  FormData.inVoiceNumber : "",
          inVoiceDate: FormData?.inVoiceDate?  FormData.inVoiceDate : "",
          paymentTerms: FormData?.paymentTerms?  FormData.paymentTerms : "",
          totalAmount: FormData?.totalAmount?  FormData.totalAmount : "",
          issueDate: FormData?.issueDate?  FormData.issueDate : "",
          glPostDate: FormData?.glPostDate?  FormData.glPostDate : "",
          lineAmount: FormData?.lineAmount?  FormData.lineAmount : "",
          department: FormData?.department?  FormData.department : "",
          account: FormData?.account?  FormData.account : "",
          location: FormData?.location?  FormData.location : "",
          description: FormData?.description?  FormData.description : "",
          comments:FormData?.comments ? FormData.comments : "",
          inVoiceDescription: FormData?.inVoiceDescription ? FormData.inVoiceDescription : "",
        }}
        onSubmit={(values) => {
          sessionStorage.setItem(
            "formData",
            JSON.stringify(values)
          )
          toast.success('Data Saved Successfully', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <SelectInput
                name={"vendor"}
                type={"select"}
                validation={dataRequired}
                errors={errors}
                touched={touched}
                label={"Vendor"}
                listArray={vendors}
                placeholder={"Select Vendor"}
              />
              <p
                style={{
                  fontSize: "10px",
                  color: "grey",
                  fontWeight: "500",
                  margin: "5px 0px",
                }}
              >
                550 Main St., Lynn
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "11px",
                  color: "#55b3ed",
                  fontWeight: "500",
                  alignItems: "center",
                }}
              >
                <RiArrowDownSLine />
                <span>View Vendor Details</span>
              </div>
            </div>
            <div className="inVoice_Details">
              <div  style={{color:"rgba(37, 177, 252, 0.989)"}}>
                <TbReceipt />
              </div>
              <span>Invoice Details</span>
            </div>
            <div className="general_information"> General Information</div>
            <div>
              <SelectInput
                name={"purchaseOrderNumber"}
                type={"select"}
                validation={dataRequired}
                errors={errors}
                touched={touched}
                label={"Purchase Order Number"}
                listArray={purchaseOrderNumber}
                placeholder={"Select PO Number"}
              />
            </div>
            <div className="general_information">Invoice Details</div>
            <div className="column_div">
              <div>
                <SelectInput
                  name={"inVoiceNumber"}
                  type={"select"}
                  validation={dataRequired}
                  errors={errors}
                  touched={touched}
                  label={"Invoice Number"}
                  listArray={InvoiceNumber}
                  placeholder={"Select Vendor"}
                />
              </div>
              <div>
                <DateInput
                  name={"inVoiceDate"}
                  type={"date"}
                  validation={validateDate}
                  errors={errors}
                  touched={touched}
                  label={"InVoice Date"}
                />
              </div>
            </div>

            <div className="column_div">
              <div>
                <TextInput
                  name={"totalAmount"}
                  type={"text"}
                  validation={dataRequired}
                  errors={errors}
                  touched={touched}
                  label={"Total Amount"}
                />
              </div>
              <div>
                <SelectInput
                  name={"paymentTerms"}
                  type={"select"}
                  validation={dataRequired}
                  errors={errors}
                  touched={touched}
                  label={"Payment Terms"}
                  listArray={paymentTerms}
                  placeholder={"Select"}
                />
              </div>
            </div>

            <div className="column_div">
              <div>
                <DateInput
                  name={"issueDate"}
                  type={"date"}
                  validation={validateDate}
                  errors={errors}
                  touched={touched}
                  label={"Issue Date"}
                />
              </div>
              <div>
                <DateInput
                  name={"glPostDate"}
                  type={"date"}
                  validation={validateDate}
                  errors={errors}
                  touched={touched}
                  label={"GL Post Date"}
                />
              </div>
            </div>

            <div>
              <TextInput
                name={"inVoiceDescription"}
                type={"text"}
                validation={dataRequired}
                errors={errors}
                touched={touched}
                label={"Invoice Description"}
              />
            </div>
            <div className="column_div">
              <div className="general_information"> Expense Details</div>
              <div className="currency_switch">
                $ 0.0 / <span> $ 0.0</span>
                <div>
                  <span
                    onClick={() => onSwitchCurrency("$")}
                    style={{
                      backgroundColor:
                        switchCurrency === "$"
                          ? "rgba(37, 177, 252, 0.989)"
                          : "transparent",
                      color: switchCurrency === "$" ? "white" : "gray",
                    }}
                  >
                    $
                  </span>
                  <span
                    onClick={() => onSwitchCurrency("%")}
                    style={{
                      backgroundColor:
                        switchCurrency === "%"
                          ? "rgba(37, 177, 252, 0.989)"
                          : "transparent",
                      color: switchCurrency === "%" ? "white" : "gray",
                    }}
                  >
                    %
                  </span>
                </div>
              </div>
            </div>
            <div className="column_div">
              <div>
                <TextInput
                  name={"lineAmount"}
                  type={"text"}
                  validation={dataRequired}
                  errors={errors}
                  touched={touched}
                  label={"Line Amount"}
                />
              </div>
              <div>
                <SelectInput
                  name={"department"}
                  type={"select"}
                  validation={dataRequired}
                  errors={errors}
                  touched={touched}
                  label={"Department"}
                  listArray={department}
                  placeholder={"Select Department"}
                />
              </div>
            </div>

            <div className="column_div">
              <div>
                <SelectInput
                  name={"account"}
                  type={"select"}
                  validation={dataRequired}
                  errors={errors}
                  touched={touched}
                  label={"Account"}
                  listArray={Account}
                  placeholder={"Select Account"}
                />
              </div>
              <div>
                <SelectInput
                  name={"location"}
                  type={"select"}
                  validation={dataRequired}
                  errors={errors}
                  touched={touched}
                  label={"Location"}
                  listArray={location}
                  placeholder={"Select Location"}
                />
              </div>
            </div>
            <div>
              <TextInput
                name={"description"}
                type={"text"}
                validation={dataRequired}
                errors={errors}
                touched={touched}
                label={"Description"}
              />
            </div>
            <div className="add_expense_coding">
              <button disabled>
                <span style={{ fontSize: "16px", marginRight: "5px" }}>+</span>{" "}
                Add Expense Coding
              </button>
            </div>
            <div className="vendorDetails" style={{margin:"25px 0px"}}>
              <span className="doucument_icon" style={{color:"rgba(37, 177, 252, 0.989)"}}>
                <BiCommentDetail />
              </span>{" "}
              <span className="vendorDetails2">Comments</span>
            </div>
            <div>
              <TextInputWrapper
                name={"comments"}
                type={"text"}
                Icon={LuSendHorizontal}
              />
            </div>
            <div className="submit_footer">
               <div style={{marginLeft:"5%"}}><BsThreeDotsVertical /></div>
               <div id="save_as_draft">Save as Draft</div>
               <button type="submit" id="submit_btn">Submit & New</button>
               <ToastContainer />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MyForm;
