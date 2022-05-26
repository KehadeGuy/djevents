import Head from 'next/head';
import Header from './Header';
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'

function Layout(props) {
    const { title, description, keywords, children } = props;
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <title>{title}</title>
            </Head>
            <Header />
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    keywords: 'music, dj, edm, events',
    description: 'Find the latest DJ and other musical events'
}
export default Layout
