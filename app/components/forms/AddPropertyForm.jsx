import {
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useEffect, useRef, useState } from "react";

import { useDrawer } from "@/lib/store/hooks";

const AddPropertyForm = () => {
  const { formId, onClose, setFormId, setInitialFocusRef } = useDrawer();

  const inputRef = useRef();

  const handleOnSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
    onClose();
  };

  useEffect(() => {
    setFormId("add-property");
    setInitialFocusRef(inputRef);
  }, [setFormId, setInitialFocusRef]);

  const NameInput = ({ field, form, ...props }) => (
    <Input ref={inputRef} {...field} {...props} />
  );

  const PriceInput = ({ field, form, ...props }) => {
    const format = (val) => `$` + parseInt(val).toLocaleString("en-US");
    const parse = (val) => val.replace(/^\$/, "");

    const [value, setValue] = useState(500000);

    // eslint-disable-next-line no-console
    console.log(field);

    return (
      <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        // {...field}
        step={1000}
        defaultValue={500000}
        min={0}
        max={100000000}
        {...props}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    );
  };

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        price: 0,
        image: "",
      }}
      onSubmit={(values) => handleOnSubmit(values)}
    >
      {({ handleSubmit, errors, touched }) => (
        <form id={formId} onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Field
                component={NameInput}
                id="name"
                name="name"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Field
                as={Input}
                id="description"
                name="description"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="price">Price</FormLabel>
              <Field
                component={PriceInput}
                id="price"
                name="price"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="image">Image</FormLabel>
              <Field
                as={Input}
                placeholder="https://image.xyz/property.png"
                id="image"
                name="image"
              />
            </FormControl>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default AddPropertyForm;
