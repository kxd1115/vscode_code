import { useParams, useSearchParams } from'react-router-dom';

const Article = () => {
  // const [ parms ] = useSearchParams();
  // const id = parms.get('id');
  // const name = parms.get('name');
  const parms = useParams();
  return <div>我是文章{parms.id}{parms.name}</div> // http://localhost:3000/article/1001
};

export default Article;