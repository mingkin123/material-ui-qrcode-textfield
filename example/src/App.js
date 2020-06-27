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
