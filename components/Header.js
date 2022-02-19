import Head from 'next/head'

const Header = () => {
    return (         
        <Head>
            <title>Condensation</title>
            <meta name="description" content="Condensation - DLT" />
            <link rel="icon" href="/favicon.ico" />            
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        </Head>                
    );
}
export default Header;