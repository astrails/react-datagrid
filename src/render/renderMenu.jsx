'use strict';

module.exports = function renderMenu(props){
    if (!props.menu){
        return
    }

    return props.menu({
        className : 'react-datagrid__header__menu__column',
        gridColumns: props.columns
    })
}