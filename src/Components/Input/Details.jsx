import "../Input/Details.css";
import Divider from "@mui/material/Divider";
import { GrFormAdd } from "react-icons/gr";
import Tabs from "@mui/base/Tabs";
import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import Tab from "@mui/base/Tab";
import { styled } from "@mui/system";
import { buttonClasses } from "@mui/base/Button";
import { tabClasses } from "@mui/base/Tab";
import { useFormik } from "formik";
import * as Yup from "yup";

import { RiAttachmentLine } from "react-icons/ri";

//
const validationSchema = Yup.object({
  type: Yup.string().required("Type is required"),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  name: Yup.string().required("Name is required"),
  pincode: Yup.string()
    .required("pincode is required")
    .matches(/[0-9]/, "Invalid pin number format"),
  city: Yup.string().required("City is required"),
  phoneNumbers: Yup.string()
    .required("Phone Numbers are required")
    .matches(/[0-9]/, "Invalid phone number format"),
});
//

function Details() {
  const formik = useFormik({
    initialValues: {
      type: "",
      addressLine1: "",
      country: "",
      state: "",
      name: "",
      city: "",
      pincode: "",
      phoneNumbers: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <div className="inputStack">
            {formik.touched.type && formik.errors.type ? (
              <div className="requiredRed">{formik.errors.type}</div>
            ) : (
              <label htmlFor="">
                Type<span className="requiredRed">*</span>
              </label>
            )}
            <select
              id="type"
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" selected disabled>
                select an option
              </option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
            </select>
          </div>
          <div className="inputStack">
            {formik.touched.addressLine1 && formik.errors.addressLine1 ? (
              <div className="requiredRed">{formik.errors.addressLine1}</div>
            ) : (
              <label htmlFor="">
                Address Line 1 <span className="requiredRed">*</span>
              </label>
            )}
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formik.values.addressLine1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="inputStack">
            {formik.touched.country && formik.errors.country ? (
              <div className="requiredRed">{formik.errors.country}</div>
            ) : (
              <label htmlFor="">
                Country<span className="requiredRed">*</span>
              </label>
            )}
            <select
              type="text"
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="item1" selected disabled>
                select an option
              </option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
            </select>
          </div>
          <div className="inputStack">
            {formik.touched.state && formik.errors.state ? (
              <div className="requiredRed">{formik.errors.state}</div>
            ) : (
              <label htmlFor="state">
                State<span className="requiredRed">*</span>
              </label>
            )}

            <select
              type="text"
              id="state"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="item1" selected disabled>
                select an option
              </option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
            </select>
          </div>
        </div>
        <div style={{ width: "30%" }}>
          {" "}
          <div className="inputStack">
            {formik.touched.name && formik.errors.name ? (
              <div className="requiredRed">{formik.errors.name}</div>
            ) : (
              <label htmlFor="state">
                Name<span className="requiredRed">*</span>
              </label>
            )}

            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="inputStack" style={{ marginTop: "9px" }}>
            <label htmlFor="">Address Line 2</label>
            <input type="text" />
          </div>
          <div className="inputStack">
            {formik.touched.city && formik.errors.city ? (
              <div className="requiredRed">{formik.errors.city}</div>
            ) : (
              <label htmlFor="state">
                city<span className="requiredRed">*</span>
              </label>
            )}

            <select
              type="text"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="item1" selected disabled>
                select an option
              </option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
            </select>
          </div>
          <div className="inputStack">
            {formik.touched.pincode && formik.errors.pincode ? (
              <div className="requiredRed">{formik.errors.pincode}</div>
            ) : (
              <label htmlFor="">Pincode</label>
            )}
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        <div style={{ width: "30%" }}>
          {" "}
          <div className="inputStack">
            {formik.touched.phoneNumbers && formik.errors.phoneNumbers ? (
              <div className="requiredRed">{formik.errors.phoneNumbers}</div>
            ) : (
              <label htmlFor="">
                Phone Number<span className="requiredRed">*</span>{" "}
              </label>
            )}

            <input
              type="tel"
              id="phoneNumbers"
              name="phoneNumbers"
              value={formik.values.phoneNumbers}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="inputStack">
            <label htmlFor="">Address Line 3</label>
            <input type="text" />
          </div>
          <div id="base_textarea">
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
      <button id="add_address">
        {" "}
        <GrFormAdd /> ADD NEW ADDRESS
      </button>
      <Divider sx={{ marginTop: "10px" }} />
      <div style={{ padding: 1 }}>
        <StyledTabs defaultValue={0} orientation="vertical">
          <StyledTabsList>
            <StyledTab sx={{ color: "black", fontSize: "10px" }}>GST</StyledTab>
            <StyledTab sx={{ color: "black", fontSize: "10px" }}>
              Rental Agreement
            </StyledTab>
            <StyledTab sx={{ color: "black", fontSize: "10px" }}>
              Utility Bill
            </StyledTab>
            <StyledTab sx={{ color: "black", fontSize: "10px" }}>
              Address Proof
            </StyledTab>
            <StyledTab sx={{ color: "black", fontSize: "10px" }}>
              Others
            </StyledTab>
          </StyledTabsList>
          <StyledTabPanel value={0}>
            <section>
              <div className="inputStack">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>

              <div style={{ display: "flex", gap: 22, marginLeft: 10 }}>
                <div>
                  <label htmlFor="frontPage">Front Page</label>

                  <div
                    className="inputStack_Uploadfile"
                    style={{ width: "90%" }}
                  >
                    <input
                      className="Uploadfile"
                      type="file"
                      id="frontPage"
                      name="frontPage"
                    />
                    <RiAttachmentLine className="iconAttach" />{" "}
                  </div>
                </div>
                <div>
                  <label htmlFor="backPage">Back Page</label>

                  <div className="inputStack_Uploadfile">
                    <input
                      className="Uploadfile"
                      type="file"
                      id="backPage"
                      name="backPage"
                    />
                    <RiAttachmentLine className="iconAttach" />{" "}
                  </div>
                </div>
              </div>
            </section>
          </StyledTabPanel>
          <StyledTabPanel value={1}>Second page</StyledTabPanel>
          <StyledTabPanel value={2}>Third page</StyledTabPanel>
          <StyledTabPanel value={3}>Third page</StyledTabPanel>
          <StyledTabPanel value={4}>Third page</StyledTabPanel>
        </StyledTabs>
      </div>
      <div className="Bottom_buttons">
        <button id="cancel">CANCEL</button>
        <button id="save">SAVE</button>
      </div>
    </div>
  );
}

const StyledTab = styled(Tab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: transparent;
  width: 200px;
  padding: 12px;
  border: none;
  display: flex;
  border-radius: 0;
  border-right: 4px solid rgb(221, 217, 212);

  &:hover {
    background-color: #2e6adf;
    color: white;
  }

  &:focus {
    color: #fff;
  }

  &.${buttonClasses.focusVisible} {
    background-color: #fff;
  }

  &.${tabClasses.selected} {
    background-color: rgb(221, 217, 212);
    color: Black;
    border-radius: 0;
    border-right: 4px solid #2e6adf;
  }
`;

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.775rem;
  margin-left: 20px;
`;

const StyledTabs = styled(Tabs)`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const StyledTabsList = styled(TabsList)(
  () => `
  min-width: 60px;
  border-radius: 12px;
  display: flex;
  padding: 6px;
  flex-direction: column;
  `
);

export default Details;
