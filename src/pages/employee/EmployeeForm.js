import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { Controls } from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import * as employeeService from "../../services/EmployeesServices";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const intialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanant: false,
};

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, handleInputChange, errors, setErrors, resetForm } =
    useForm(intialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validate()) employeeService.insertEmployee(values);
    // resetForm();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item sm={6} xs={6}>
          <Controls.Input
            name="fullName"
            value={values.fullName}
            label="Full Name"
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name="email"
            value={values.email}
            label="Email"
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name="mobile"
            value={values.mobile}
            label="Mobile No"
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name="city"
            value={values.city}
            label="City"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={6}>
          <Controls.RadioGroup
            name="gender"
            value={values.gender}
            label="Gender"
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            value={values.departmentId}
            label="Departments"
            onChange={handleInputChange}
            options={employeeService.getDepartmentsCollections()}
            error={errors.departmentId}
          />
          <Controls.DatePicker
            name="hireDate"
            value={values.hireDate}
            label="Hire Date"
            onChange={handleInputChange}
          />

          <Controls.CheckBox
            name="isPermanant"
            value={values.isPermanant}
            label="Permanant Employee"
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
