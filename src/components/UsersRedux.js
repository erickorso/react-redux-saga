import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

import getColumnSettings from '../features/users/components/columnsSettings';

import { list } from '../features/usersRedux/usersService'
import { getUsersDataListLoadingState, getUsersDataListState } from '../features/usersRedux/usersSelector';

const UsersRedux = ({ getUsers, usersData, usersLoading }) => {

    useEffect(() => {
        getUsers()
    }, [getUsers]);

    return (
        <Table
            columns={getColumnSettings()}
            dataSource={usersData}
            loading={usersLoading}
            rowKey={'id'}
        />);
}

const mapStateToProps = (state) => ({
    usersData: getUsersDataListState(state),
    usersLoading: getUsersDataListLoadingState(state)
});

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => list(dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersRedux);