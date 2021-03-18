import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, CollectionPreviewItem } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <h1 className="title">{title.toUpperCase()}</h1>
        <CollectionPreviewItem>
            {
                items
                    .slice(0, 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </CollectionPreviewItem>
    </CollectionPreviewContainer>
);

export default CollectionPreview;