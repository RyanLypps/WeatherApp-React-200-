import { connect } from 'react-redux';
import SearchCity from "./SearchCity";

function mapStoreToProps(store) {
    return {
      city: store.search.city
    };
  }

export default connect(mapStoreToProps)(SearchCity)