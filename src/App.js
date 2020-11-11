import React, { Component } from 'react';
import { Table, Button, Modal, Divider, Popconfirm, Form, Input, message } from 'antd';
import { FormInstance } from 'antd/lib/form';
import _ from 'lodash';
import './App.css';
import userData  from './users.json';

const { Search } = Input;
function App(props) {
  return (
    <div style={{padding:40}}>
        <div style={{marginBottom:20}}>
          <Button><a href='https://github.com/zzhang18/booking'>GitHub</a></Button>
        </div>
        <div style={{marginBottom:20}}>
          <Button type="primary" style={{marginRight:10}} onClick={() => props.show()}>Add user</Button>
          <Search
								placeholder='search user'
								onSearch={(value) => props.search(value)}
								style={{ width: 240 }}
							/>
        </div>
        <Table 
        dataSource={props.users}
        columns=	{[
        { title: 'name', dataIndex: 'name', key: 'name', width: 200, sorter: (a, b) => a.name > b.name },
        { title: 'mobile', dataIndex: 'mobile', key: 'mobile', width: 160, sorter: (a, b) => a.mobile - b.mobile },
        {
          title:'actions', key: 'action', width: 160,
          render: (e, user) => {
            return (
              <div>
                <a onClick={() => props.show(user)}>modify</a>
                <Divider type="vertical" />
                <Popconfirm title='Confirm to delete?' onConfirm={() => { props.delete(user); }} okText='ok' cancelText='cancel'>
                  <a >delete</a>
                </Popconfirm>
              </div>
            );
          },
        },
        ]}
        />

      <EditModalWrapper
        title={props.title}
        visible={props.visible}
        edit={(user) => props.edit(user)}
        onCancel={props.cancel}
        target={props.user}
      />
    </div>
  );
}


class EditModalWrapper extends React.Component {
  formRef = React.createRef();

  save = async (e) => {
    this.props.edit();
    this.setState({ visible: false});
  };

  cancelModal = async () => {
    this.formRef.current.resetFields();
    this.props.onCancel();
  };

  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  render() {
    const { visible, form, title, target } = this.props;
    return (
      <>
        <Modal
          title={title}
          visible={visible}
					onOk={this.save}
					onCancel={this.cancelModal}
        >
          <Form ref={this.formRef} initialValues={{ name: target ?target.name : null, mobile:target ?target.mobile : null }} >
            <Form.Item name='name' label="Name">
              <Input />
            </Form.Item>
            <Form.Item name='mobile' label="Mobile">
              <Input />
            </Form.Item>
					</Form>
        </Modal>
      </>
    );
  }
}

let hoc = (WrappedComponent) => {
  return class EnhancedComponent extends Component {
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
      let users = _.times(10,index=> { 
        return {
          "name": 'user' + index,
          "mobile": 'mobile' + index
          };
        }
      );
      this.setState({users});
    }

    async search(value) {
      let users = _.times(10,index=> { 
        return {
          "name": 'user' + index,
          "mobile": 'mobile' + index
          };
        }
      );
      this.setState({users: value ? _.filter(users, {'name':value}) : users});
    }

    async show(user) {
      this.setState({ visible: true, user, title: user ? 'Edit user': 'Add user'});
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
	};
};

export default hoc(App);
