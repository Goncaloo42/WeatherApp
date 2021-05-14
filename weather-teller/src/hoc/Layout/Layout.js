import Header from './Header'
import Footer from './Footer'

import { APP_TITLE, APP_FOOTER } from '../../utils/Constants'

const Layout = (props) => (
    <div style={{ background: '#C5F7FB' }}>
        <Header title={APP_TITLE } />
        <main>
            {props.children}
        </main>
        <Footer footer={APP_FOOTER} />
    </div>
)

export default Layout