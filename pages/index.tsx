import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Animated } from '../components/animated';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Next Education</title>
                <meta name="description" content="Next Education"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='home'/>

            <main className='bg-accent-1' style={{minHeight: '70vh'}}>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='px-8 lg:px-16 pt-8: lg:pt-16'>
                        <Animated delay={75} className='font-thin text-6xl'>
                            Next Education
                        </Animated>
                        <br/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </main>

            <Footer/>
        </>
    );
};

export default Home;
