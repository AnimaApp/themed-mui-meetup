import { createTheme } from "@mui/material/styles";
import tokens from "../design-tokens.json";

const daisy = tokens["Daisycols"];

export const theme = createTheme({
  palette: {
    primary: {
      main: daisy["primary_default"].value,
    },
    success: {
      main: daisy["success_default"].value,
    },
  },
  typography: {
    fontFamily: "Poppins",
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: Poppins;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0px;
          text-align: center;
        }
      `,
    },
    MuiIcon: {
      defaultProps: {
        baseClassName: "material-icons",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const overrides = {};
          if (ownerState.size === "medium") {
            overrides["padding"] = "10px 20px";
          }
          if (ownerState.size === "small") {
            overrides["padding"] = "5px 10px";
          }
          overrides["color"] = "white";
          console.log(ownerState);
          if (ownerState.disabled) {
            overrides["color"] = 'rgba(28, 47, 73, 0.2)';
            overrides["backgroundColor"] = 'rgba(76, 132, 255, 0.05)';
          } else {
            overrides["backgroundColor"] =
              daisy[`${ownerState.color}_${ownerState.state}`].value;
            overrides["boxShadow"] = "0px 4px 10px 0px rgba(76, 132, 255, 0.4)";
          }
          overrides["&:hover"] = {
            backgroundColor: daisy[`${ownerState.color}_hover`].value,
            boxShadow: "0px 4px 10px 0px rgba(76, 132, 255, 0.4)"
          }
          overrides["&:active"] = {
            backgroundColor: daisy[`${ownerState.color}_active`].value,
            boxShadow: "0px 4px 10px 0px rgba(76, 132, 255, 0.4)"
          }
          overrides["&:disabled"] = {
            color: 'rgba(28, 47, 73, 0.2)',
            backgroundColor: 'rgba(76, 132, 255, 0.05)'
          }
          return overrides;
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
