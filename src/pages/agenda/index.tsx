import React from 'react';
import { Avatar, List } from 'antd';
import {CommentOutlined} from '@ant-design/icons';

const data = [
  {
    title: '議案題91号 専決処分の報告及び承認を求めることについて（さいたま市市税条例の一部を改正する条例の制定について',
    avatar: <CommentOutlined />,
    description: "二輪車の税率区分の見直し...等",
    url: "https://www.city.saitama.lg.jp/006/007/002/001/017/p121983_d/fil/R7-6_gian-ichiran.pdf"
  },
  {
    title: '議案第92号 専決処分の報告及び承認を求めることについて（さいたま市国民健康保険税条例等の一部を改正する条例の制定について）',
    avatar: <CommentOutlined />,
    description: "課税限度額の改定...等",
    url: "https://www.city.saitama.lg.jp/006/007/002/001/017/p121983_d/fil/R7-6_gian-ichiran.pdf"
  },
  {
    title: '議案第９７号 さいたま市新庁舎整備に伴う民間機能整備事業者選定委員会条例の制定について',
    avatar: <CommentOutlined />,
    description: "さいたま市新庁舎整備に伴う民間機能の整備に係る事業者の選定に関し審議する附属機関を設置するもの",
    url: "https://www.city.saitama.lg.jp/006/007/002/001/017/p121983_d/fil/R7-6_gian-ichiran.pdf"
  },
  {
    title: '議案第９８号 さいたま市脱炭素先行地域事業における脱炭素街区形成事業者選定委員会条例の制定について',
    avatar: <CommentOutlined />,
    description: "さいたま市脱炭素先行地域事業における脱炭素街区形成事業者選定に関し審議する附属機関を設置するもの",
    url: "https://www.city.saitama.lg.jp/006/007/002/001/017/p121983_d/fil/R7-6_gian-ichiran.pdf"
  },
];

export const AgendaList: React.FC = () => {
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