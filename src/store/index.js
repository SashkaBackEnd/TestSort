import {createStore} from 'vuex';

export default createStore({
    state: {
        files: [
            {
                id: 3,
                name :'fileC'
            },
            {
                id: 2,
                name :'fileB'
            },
            {
                id: 3,
                name :'fileA'
            }
        ],
	}
})