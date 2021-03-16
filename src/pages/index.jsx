import * as React from "react";

import Layout from "@layout";
import SEO from "@components/seo";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
        </Layout>
    );
};

export default IndexPage;
