import React from 'react';
import { Avatar, List } from 'antd';

const data = [
  {
    title: '相川 綾香',
    avatar: <Avatar src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FOB1IKIdUHM8HyWgyBFQt%2Fpub%2FsgmW4vVND8tqZT3SZfsd.jpg" />,
    description: "立憲 北区",
    url: "https://gin-vsfx.glide.page/dl/d0a5f4/s/8af02c/r/ZVG3ZSFSQ6Kqkw9Hp9yZiA"
  },
  {
    title: '音羽 健二',
    avatar: <Avatar src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FOB1IKIdUHM8HyWgyBFQt%2Fpub%2FcZrvYPLoNpxPgZKi7mTw.jpg" />,
    description: "自民党市議団 浦和区",
    url: "https://gin-vsfx.glide.page/dl/d0a5f4/s/8af02c/r/YbsbywYXRmO2RKxeXzuorQ"
  },
  {
    title: '秋山 朋彦',
    avatar: <Avatar src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FOB1IKIdUHM8HyWgyBFQt%2Fpub%2Fhz2vMzfz1GvqpZNN8qWh.jpg" />,
    description: "維新 緑区",
    url: "https://gin-vsfx.glide.page/dl/d0a5f4/s/8af02c/r/gl2jSUwCQg6C.hpbjmJJzg"
  },
  {
    title: '新井 森夫',
    avatar: <Avatar src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FOB1IKIdUHM8HyWgyBFQt%2Fpub%2FkOWPrZFVET44rrowa1UG.jpg" />,
    description: "自民党市議団 岩槻区",
    url: "https://gin-vsfx.glide.page/dl/d0a5f4/s/8af02c/r/uWbdIaGCQ0m2I55rToGkUA"
  },
];

export const CouncillorList: React.FC = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={item.avatar}
            title={<a href={item.url}>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  )
};