import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import './App.css';
import User from './pages/User';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// import 'moment/locale/en-gb';
//import "@babel/polyfill";
// import 'core-js';
import "regenerator-runtime/runtime.js";
require('es6-promise/auto');


function App(props) {
  return (
    <div>
      <ConfigProvider locale={props.locale}>
        <User
          changeLocale={props.changeLocale}
        />
      </ConfigProvider>
    </div>
  );
}

let hoc = (WrappedComponent) => {
  return class EnhancedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        locale: null
      };
    }

    async componentDidMount() {

    }

    changeLocale = async () => {
			this.setState({ locale: this.t('thisLanguageMomentCode') === 'zh-cn' ? zhCN : enUS });
		}

    render() {
      return <WrappedComponent
        changeLocale={this.changeLocale}
      />;
    }
  };
};

export default hoc(App);
