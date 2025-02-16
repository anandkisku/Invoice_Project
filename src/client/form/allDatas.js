const location = ["India", "Usa", "Canada", "England", "Saudi Arab", "Germany"];
const vendors = ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4", "Vendor 5"];
const purchaseOrderNumber =["Purchase Order Number 1", "Purchase Order Number 2", "Purchase Order Number 3", "Purchase Order Number 4", "Purchase Order Number 5"]
const InvoiceNumber = ["Invoice Number 1","Invoice Number 2","Invoice Number 3","Invoice Number 4", "Invoice Number 4"];
const paymentTerms= ["Payment Terms 1","Payment Terms 2","Payment Terms 3","Payment Terms 4","Payment Terms 5"]
const department =["Department 1","Department 2","Department 3","Department 4","Department 5",]
const Account =["Account 1", "Account 2","Account 3","Account 4","Account 5",]

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (value.length < 6) {
    error = "Password must be at least 6 characters";
  }
  return error;
};

const validateCountry = (value) => {
  let error;
  if (!value) {
    error = "Please select a country";
  }
  return error;
};

const validateDate = (value) => {
  let error;
  if (!value) {
    error = "Date is required";
  }
  return error;
};

const dataRequired = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

export {
  location,
  vendors,
  purchaseOrderNumber,
  InvoiceNumber,
  paymentTerms,
  department,
  Account,
  validateCountry,
  validateEmail,
  validateDate,
  validatePassword,
  dataRequired,
};
