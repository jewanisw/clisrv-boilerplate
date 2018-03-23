import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import {
//   // Colour Reference - http://www.material-ui.com/#/customization/colors
//   // darkBlack,
//   // grey200,
// } from 'material-ui/styles/colors';

// https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js#L31
// {
//   spacing: spacing,
//   fontFamily: 'Roboto, sans-serif',
//   palette: {
//     primary1Color: cyan500,
//     primary2Color: cyan700,
//     primary3Color: grey400,
//     accent1Color: pinkA200,
//     accent2Color: grey100,
//     accent3Color: grey500,
//     textColor: darkBlack,
//     alternateTextColor: white,
//     canvasColor: white,
//     borderColor: grey300,
//     disabledColor: fade(darkBlack, 0.3),
//     pickerHeaderColor: cyan500,
//     clockCircleColor: fade(darkBlack, 0.07),
//     shadowColor: fullBlack,
//   },
// };

const zIndex = {
  zIndex: {
    snackbar: 2300,
    dialog: 900,
    dialogOverlay: 800,
    drawerOverlay: 600,
    drawer: 600,
    appBar: 700,
  },
};

export const Theme = getMuiTheme({
  palette: {
    // primary1Color: colours.skyBlue,
    // primary2Color: colours.steelBlue,
    // accent1Color: colours.limeGreen,
    // textColor: colours.darkBlack,
    // alternateTextColor: white,
    // disabledColor: 'rgba(0, 0, 0, 0.55)',
    // pickerHeaderColor: colours.skyBlue,
  },
  appBar: {
    // color: white,
    // textColor: colours.skyBlue,
  },
  button: {
    // textTransform: 'none',
  },
  tabs: {
    // backgroundColor: 'transparent',
    // textColor: white,
    // selectedTextColor: colours.limeGreen,
  },
  textField: {
    // errorColor: colours.kRed,
  },
}, zIndex);
