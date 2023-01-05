import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../node_modules/nprogress/nprogress.css"; //styles of nprogress
import Head from "next/head";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>HackDuke</title>
                <meta name="title" content="HackDuke" />
                <meta
                    name="description"
                    content="A student-led hackathon at Duke University that brings together talented programmers, designers, and entrepreneurs to develop innovative solutions to real-world problems. Join us for a weekend of coding, networking, and making a positive impact on the world. Learn more and apply now at HackDuke.org!"
                />

                {/* Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hackduke.org/" />
                <meta property="og:title" content="HackDuke" />
                <meta
                    property="og:description"
                    content="A student-led hackathon at Duke University that brings together talented programmers, designers, and entrepreneurs to develop innovative solutions to real-world problems. Join us for a weekend of coding, networking, and making a positive impact on the world. Learn more and apply now at HackDuke.org!"
                />
                <meta
                    property="og:image"
                    content="//hackduke.org/preview.png"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://hackduke.org/" />
                <meta property="twitter:title" content="HackDuke" />
                <meta
                    property="twitter:description"
                    content="A student-led hackathon at Duke University that brings together talented programmers, designers, and entrepreneurs to develop innovative solutions to real-world problems. Join us for a weekend of coding, networking, and making a positive impact on the world. Learn more and apply now at HackDuke.org!"
                />
                <meta
                    property="twitter:image"
                    content="//hackduke.org/preview.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
