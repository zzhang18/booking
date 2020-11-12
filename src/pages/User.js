import React, { Component } from 'react';
import { Table, Button, Modal, Divider, Popconfirm, Form, Input, message } from 'antd';
import _ from 'lodash';
import { useTranslation, withTranslation } from 'react-i18next';

const { Search } = Input;
function User(props) {
  const { t, i18n } = useTranslation();

  const myRef = React.createRef();
  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 20 }}>
        <div >
          <h1 >{t('user')}</h1>
        </div>
        <div style={{ float: 'left' }}>
          <Button type="primary" style={{ margin: '0 10px 10px 0' }} onClick={() => props.show()}>{t('addUser')}</Button>
          <Search
            placeholder='search user'
            onSearch={(value) => props.search(value)}
            style={{ width: 240 }}
          />
        </div>
        <div style={{ float: 'right' }}>
          <Button style={{ margin: '0 10px 10px 0' }} onClick={async () => {
            i18n.changeLanguage(t('targetLangCode'));
            // props.changeLocale();
          }}>{t('targetLang')}</Button>
          <Button><a href='https://github.com/zzhang18/booking'>GitHub</a></Button>
        </div>
      </div>
      <Table
        dataSource={props.users}
        columns={[
          { title: t('name'), dataIndex: 'name', key: 'name', width: 200, sorter: (a, b) => a.name > b.name },
          { title: t('mobile'), dataIndex: 'mobile', key: 'mobile', width: 160, sorter: (a, b) => a.mobile - b.mobile },
          { title: t('email'), dataIndex: 'email', key: 'email', width: 160, sorter: (a, b) => a.email - b.email },
          {
            title: t('actions'), key: 'action', width: 160,
            render: (e, user) => {
              return (
                <div>
                  <a onClick={() => props.show(user)}>{t('modify')}</a>
                  <Divider type="vertical" />
                  <Popconfirm title={t('confirmToDelete')} onConfirm={() => { props.delete(user); }} okText={t('confirm')} cancelText={t('cancel')}>
                    <a>{t('delete')}</a>
                  </Popconfirm>
                </div>
              );
            },
          },
        ]}
      />

      <EditModalWrapper
        ref={myRef}
        title={props.title}
        visible={props.visible}
        edit={(user) => props.edit(user)}
        onCancel={props.cancel}
        target={props.user}
      />
      
      <h3 style={{float:'right'}}>v.0.1.1</h3>
    </div>
  );
}



// use myRef.current to access it

class MyComponent extends React.Component {
  formRef = React.createRef();

  save = async (e) => {
    this.props.edit();
    this.setState({ visible: false });
  };

  cancelModal = async () => {
    this.formRef.current.resetFields();
    this.props.onCancel();
  };

  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  render() {
    const { visible, form, title, target, t } = this.props;
    return (
      <>
        <Modal
          title={title}
          visible={visible}
          okText={t('confirm')}
          cancelText={t('cancel')}
          onOk={this.save}
          onCancel={this.cancelModal}
        >
          <Form ref={this.formRef} initialValues={{ name: target ? target.name : null, mobile: target ? target.mobile : null, email: target ? target.email : null }} >
            <Form.Item name='name' label={t('name')}>
              <Input />
            </Form.Item>
            <Form.Item name='mobile' label={t('mobile')}>
              <Input />
            </Form.Item>
            <Form.Item name='email' label={t('email')}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

const EditModalWrapper = withTranslation('translation', { withRef: true })(MyComponent);

// then pass a ref in your render method like
// const myRef = React.createRef();
// <EditModalWrapper ref={myRef} />;

let hoc = (WrappedComponent) => {
  return withTranslation()(class EnhancedComponent extends Component {
    get t() { return this.props.t; }
    constructor(props) {
      super(props);
      this.state = {
        user: null,
        users: null,
        visible: false,
        title: 'Add user',
      };
    }

    async componentDidMount() {
      await this.fetchUsers();
    }

    async fetchUsers() {
      let users = _.times(10, index => {
        return {
          "name": 'user' + index,
          "mobile": 'mobile' + index,
          "email": 'email' + index
        };
      }
      );
      this.setState({ users });
    }

    async search(value) {
      let users = _.times(10, index => {
        return {
          "name": 'user' + index,
          "mobile": 'mobile' + index,
          "email": 'email' + index
        };
      }
      );
      this.setState({ users: value ? _.filter(users, { 'name': value }) : users });
    }

    async show(user) {
      this.setState({ visible: true, user, title: user ? this.t('editUser') : this.t('addUser') });
    }

    async edit(user) {
      this.cancel();
    }

    async cancel() {
      this.setState({ visible: false, user: null });
    }

    async delete(user) {
      message.success('deleted');
    }

    render() {
      return <WrappedComponent
        user={this.state.user}
        users={this.state.users}
        title={this.state.title}
        visible={this.state.visible}
        cancel={() => this.cancel()}
        show={(user) => this.show(user)}
        edit={(user) => this.edit(user)}
        search={(value) => this.search(value)}
      />;
    }
  });
};

export default hoc(User);
