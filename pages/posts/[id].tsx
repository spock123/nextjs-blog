import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

 

const Post = ({postData}) => {
  return (
    <Layout>
       <Head>
        <title>{postData.title}</title>
      </Head>
         <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    
    </Layout>
  )
}

export default Post;

export const getStaticPaths = async () =>  {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}