
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Aimagy Docs" description="Documentation for Aimagy AI image tools">
      <main className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>AIMAGY DOCUMENTATION</p>
          <h1>AI image tools, explained clearly.</h1>
          <p className={styles.lead}>
            Install, configure, and use Aimagy plugins for Krita and Photoshop.
          </p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/welcome/">
              Open documentation
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/krita/flash-banana/quick-start/">
              Flash Banana quick start
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
