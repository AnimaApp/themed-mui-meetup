import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

export default {
  title: "Material UI/Button",
  component: Button,
  argTypes: {
    state: {
      control: { type: "select", options: ["default", "hover", "active", "disabled"] },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "success"],
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium"] },
    },
    leftIcon: { control: "text" },
   // rightIcon: { control: "text" },
    showLeftIcon: { control: "boolean" },
   // showRightIcon: { control: "boolean" },
  },
};

// const Template = (args) => {
//   if (args.leftIcon && args.label) return <Button className={args.state} {...args} variant="contained" startIcon={<Icon>{args.icon}</Icon>}>{args.label}</Button>;
//   else if (args.leftIcon) {
//     return <IconButton {...args}><Icon>{args.icon}</Icon></IconButton>;
//   } return <Button className={args.state} variant="contained" {...args}>{args.label}</Button>

// };

// export const MuiButton = Template.bind({});
// MuiButton.args = {
//   label: "Text",
//   state: "default",
//   size: "medium",
//   color: "primary",
//   disabled: false,
//   leftIcon: false,
//   icon: "star",
// };

const Template = (args) => {
  if (args.showLeftIcon && args.label && args.showRightIcon)
    return (
      <Button
        className={args.state}
        {...args}
        variant="contained"
        startIcon={<Icon>{args.leftIcon}</Icon>}
        endIcon={<Icon>{args.rightIcon}</Icon>}
      >
        {args.label}
      </Button>
    );
  if (args.showLeftIcon && args.label)
    return (
      <Button
        className={args.state}
        {...args}
        variant="contained"
        startIcon={<Icon>{args.leftIcon}</Icon>}
      >
        {args.label}
      </Button>
    );
    if (args.showRightIcon && args.label)
    return (
      <Button
        className={args.state}
        {...args}
        variant="contained"
        endIcon={<Icon>{args.rightIcon}</Icon>}
      >
        {args.label}
      </Button>
    );
  else if (args.showLeftIcon) {
    return (
      <IconButton {...args}>
        <Icon>{args.icon}</Icon>
      </IconButton>
    );
  } else {
    return (
      <Button className={args.state} variant="contained" {...args}>
        {args.label}
      </Button>
    );
  }
};

export const MuiButton = Template.bind({});
MuiButton.args = {
  label: "Text",
  state: "default",
  size: "medium",
  color: "primary",
  showLeftIcon: false,
  //showRightIcon: false,
  leftIcon: "star",
  //rightIcon: "star",
};
