import React from 'react';
import { Topic } from '../../types';
import { Space, Input, Button, Divider, Checkbox, Typography } from 'antd';

export const TopicCheckbox: React.FC<{ topics: Topic[] }> = ({ topics }) => {
    const [customTopic, setCustomTopic] = React.useState('');
    const [customTopics, setCustomTopics] = React.useState<string[]>([]);

    const topicsByCategory = topics.reduce((acc, topic) => {
        if (!acc[topic.category]) {
            acc[topic.category] = [];
        }
        acc[topic.category].push(topic);
        return acc;
    }, {} as Record<string, Topic[]>);

    return (
        <div>
            <Typography.Title level={5}>カスタムトピック</Typography.Title>
            <Divider />
            <Space.Compact style={{ width: '100%' }}>
                <Input value={customTopic} onChange={(e) => setCustomTopic(e.target.value)} />
                <Button type="primary" onClick={() => {
                    if (customTopic) {
                        setCustomTopics([...customTopics, customTopic]);
                        setCustomTopic('');
                    }
                }}>Submit</Button>
            </Space.Compact>
            {
                customTopics.map((topic) => (
                    <Checkbox key={topic} value={topic} defaultChecked={true}>
                        {topic}
                    </Checkbox>
                ))
            }
            {
                Object.entries(topicsByCategory).map(([category, topics]) => (
                    <div key={category}>
                        <Typography.Title level={5}>{category}</Typography.Title>
                        <Divider />
                        {topics.map((topic) => (
                            <Checkbox key={topic.label} value={topic.label}>
                                {topic.label}
                            </Checkbox>
                        ))}
                    </div>
                ))
            }
        </div>
    );
}