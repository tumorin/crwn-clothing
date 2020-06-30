import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { filestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state ={
     loading: true
    }

    unsubsribeFromSnapshop = null;

    componentDidMount () {
        const {updateCollections} = this.props;
        const collectionRef = filestore.collection('collections');

        collectionRef.get().then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          updateCollections(collectionsMap);
          this.setState({loading: false});
         })
    }

    render () {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
            <Route
              exact
              path={`${match.path}`}
              render={props => (
                <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
              )}
            />
            <Route
              path={`${match.path}/:collectionId`}
              render={props => (
                <CollectionPageWithSpinner isLoading={loading} {...props} />
              )}
            />
          </div>
        );
    }
} 
         
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);