import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { CollectionItemContainer, CollectionItemCustomButton, CollectionItemFooterContainer, CollectionItemImageContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <CollectionItemImageContainer imageUrl={imageUrl} />
            <CollectionItemFooterContainer>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </CollectionItemFooterContainer>
            <CollectionItemCustomButton inverted onClick={() => addItem(item)}>Add to cart</CollectionItemCustomButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);