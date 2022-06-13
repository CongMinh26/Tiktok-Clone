const { override, useBabelRc } = require("customize-cra");

module.exports = override(
  // override sẽ trả về cấu hình nguyên bản của webpack và exports ra bên ngoài
  // useBabelRc sẽ ghi đè lên webpack
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc()
);
