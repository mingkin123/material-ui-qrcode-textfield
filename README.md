# material-ui-qrcode-textfield

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/material-ui-qrcode-textfield.svg)](https://www.npmjs.com/package/material-ui-qrcode-textfield) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save material-ui-qrcode-textfield
```

## Usage

```jsx
import React from 'react';
import QrcodeTextField from 'material-ui-qrcode-textfield';

const App = () => {
  const [value, setValue] = React.useState();
  const onChange = (event) => {
    const data = typeof event === 'object' && typeof event.target === 'object' ? event.target.value : event;
    setValue(data);
  };
  return <QrcodeTextField label="Qrcode" value={value} onChange={onChange} />;
}

export default App;
```

## License

MIT © [mingkin123](https://github.com/mingkin123/)
