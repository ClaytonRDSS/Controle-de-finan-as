import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';

import TabsHeader from '../common/tab/tabsHeader';
import TabsConten from '../common/tab/tabsConten';
import TabHeader from '../common/tab/tabHeader';

import Conten from '../common/tab/tabContents/content';
import BillingCycleList from './billingCycleList';

import Form from './billingCycleForm'
import { init, create, update, remove } from './billingActions/billingCycleActions';



class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsConten>
                            <Conten id='tabList'>
                                <BillingCycleList/>
                            </Conten>
                            <Conten id='tabCreate'>
                                <Form onSubmit={this.props.create} submitLabel='Incluir' submitClass='primary'/>
                            </Conten>
                            <Conten id='tabUpdate'>
                                <Form onSubmit={this.props.update} submitLabel='Alterar' submitClass='info'/>
                            </Conten>
                            <Conten id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true} submitLabel='Excluir' submitClass='danger' />
                            </Conten>
                        </TabsConten>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    create,
    update,
    remove,
    init
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)