import React from 'react';
import { Avatar, List, Typography } from 'antd';
import {CommentOutlined} from '@ant-design/icons';

// TODO: かかわっている議員を表示可能にする
// TODO: ソート機能(関連度順、新しい順、古い順)を追加する
const agendas = [
  {
    title: '議案題91号 専決処分の報告及び承認を求めることについて（さいたま市市税条例の一部を改正する条例の制定について',
    avatar: <CommentOutlined />,
    description: "二輪車の税率区分の見直し...等",
    url: "https://www.city.saitama.lg.jp/006/007/002/001/017/p121983_d/fil/R7-6_gian-ichiran.pdf",
    councillors: [
      {
        title: '新井 森夫',
        avatar: <Avatar src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FOB1IKIdUHM8HyWgyBFQt%2Fpub%2FkOWPrZFVET44rrowa1UG.jpg" />,
        description: "自民党市議団 岩槻区",
        url: "https://gin-vsfx.glide.page/dl/d0a5f4/s/8af02c/r/uWbdIaGCQ0m2I55rToGkUA",
      },
    ]
  },
  {
    title: '議案第92号 専決処分の報告及び承認を求めることについて（さいたま市国民健康保険税条例等の一部を改正する条例の制定について）',
    avatar: <CommentOutlined />,
    description: "課税限度額の改定...等",
    url: "https://www.city.saitama.lg.jp/006/007/002/001/017/p121983_d/fil/R7-6_gian-ichiran.pdf",
    councillors: [
      {
        title: '新井 森夫',
        avatar: <Avatar src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FOB1IKIdUHM8HyWgyBFQt%2Fpub%2FkOWPrZFVET44rrowa1UG.jpg" />,
        description: "自民党市議団 岩槻区",
        url: "https://gin-vsfx.glide.page/dl/d0a5f4/s/8af02c/r/uWbdIaGCQ0m2I55rToGkUA",
      },
      {
        title: '相川 綾香',
        avatar: <Avatar src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FOB1IKIdUHM8HyWgyBFQt%2Fpub%2FsgmW4vVND8tqZT3SZfsd.jpg" />,
        description: "立憲 北区",
        url: "https://gin-vsfx.glide.page/dl/d0a5f4/s/8af02c/r/ZVG3ZSFSQ6Kqkw9Hp9yZiA",
      }
    ]
  },
  {
    title: '議案第９７号 さいたま市新庁舎整備に伴う民間機能整備事業者選定委員会条例の制定について',
    avatar: <CommentOutlined />,
    description: "さいたま市新庁舎整備に伴う民間機能の整備に係る事業者の選定に関し審議する附属機関を設置するもの",
    url: "https://www.city.saitama.lg.jp/006/007/002/001/017/p121983_d/fil/R7-6_gian-ichiran.pdf",
    councillors: [
      {
        title: '新井 森夫',
        avatar: <Avatar src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FOB1IKIdUHM8HyWgyBFQt%2Fpub%2FkOWPrZFVET44rrowa1UG.jpg" />,
        description: "自民党市議団 岩槻区",
        url: "https://gin-vsfx.glide.page/dl/d0a5f4/s/8af02c/r/uWbdIaGCQ0m2I55rToGkUA",
      },
      {
        title: '相川 綾香',
        avatar: <Avatar src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FOB1IKIdUHM8HyWgyBFQt%2Fpub%2FsgmW4vVND8tqZT3SZfsd.jpg" />,
        description: "立憲 北区",
        url: "https://gin-vsfx.glide.page/dl/d0a5f4/s/8af02c/r/ZVG3ZSFSQ6Kqkw9Hp9yZiA",
      }
    ]
  },
  {
    title: '議案第９８号 さいたま市脱炭素先行地域事業における脱炭素街区形成事業者選定委員会条例の制定について',
    avatar: <CommentOutlined />,
    description: "さいたま市脱炭素先行地域事業における脱炭素街区形成事業者選定に関し審議する附属機関を設置するもの",
    url: "https://www.city.saitama.lg.jp/006/007/002/001/017/p121983_d/fil/R7-6_gian-ichiran.pdf",
    councillors: [
      {
        title: '秋山 朋彦',
        avatar: <Avatar src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FOB1IKIdUHM8HyWgyBFQt%2Fpub%2Fhz2vMzfz1GvqpZNN8qWh.jpg" />,
        description: "維新 緑区",
        url: "https://gin-vsfx.glide.page/dl/d0a5f4/s/8af02c/r/gl2jSUwCQg6C.hpbjmJJzg",
      }
    ]
  },
];

export const AgendaList: React.FC = () => {
  return (
    // TODO: ヒット件数を表示可能にする
    <List
        itemLayout="horizontal"
        dataSource={agendas}
        renderItem={agenda => (
        <List.Item>
            <List.Item.Meta
              avatar={agenda.avatar}
              title={<a href={agenda.url}>{agenda.title}</a>}
              description={
                <div>
                  {agenda.description}
                  <List
                    itemLayout="horizontal"
                    dataSource={agenda.councillors}
                    renderItem={councillor => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={councillor.avatar}
                          title={<a href={councillor.url}>{councillor.title}</a>}
                          description={councillor.description}
                        />
                      </List.Item>
                    )}
                  />
                </div>
              }
            />
        </List.Item>
        )}
    />
  )
};