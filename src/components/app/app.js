import React from 'react'

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';


const App = () => {
    return (
        <div class="app">
            <AppHeader />
            <div className="search-[anel d-flex">
                <SearchPanel />
            </div>
        </div>

    )
}

export default App;