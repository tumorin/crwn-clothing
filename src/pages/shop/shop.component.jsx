import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => {
         return (
            <div className='shop-page'>
                < Route exact path={`${match.path}`} component={CollectionsOverview} />
                < Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        );
   
}

export default ShopPage;