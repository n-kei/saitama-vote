import React, { useState } from 'react';
import { Row, Col, Steps, Tabs, TabsProps, Typography, CheckboxOptionType, Checkbox } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { RegionCheckbox } from '../../components/region';
import { TopicCheckbox } from '../../components/topic';
import { Topic } from '../../types';
import { PartyCheckbox } from '../../components/party';

// TODO: 各ステップでヒット件数を表示できるようにする
export const Welcome: React.FC = () => {
    const navigate = useNavigate();

    const [currentTab, setCurrentTab] = useState('search_councillor');
    const [currentCouncillorStep, setCurrentCouncillorStep] = useState(0);
    const [currentAgendaStep, setCurrentAgendaStep] = useState(0);

    const onCouncillorStep = (step: number) => {
        setCurrentCouncillorStep(step);
    };
    const onAgendaStep = (step: number) => {
        setCurrentAgendaStep(step);
    };

    const items: TabsProps['items'] = [
        {
            key: 'search_councillor',
            label: '議員を探す',
            children: 
                <Steps
                    type="navigation"
                    current={currentCouncillorStep}
                    onChange={onCouncillorStep}
                    items={[
                        {
                            status: 'wait',
                            title: '活動トピックを選択する',
                        },
                        {
                            status: 'wait',
                            title: '活動地域を選択する',
                        },
                        {
                            status: 'wait',
                            title: '所属政党を選択する',
                        },
                        {
                            status: 'wait',
                            title: '検索',
                            onClick: () => navigate('/councillor'),
                            icon: <SearchOutlined />
                        }
                    ]}
                />
        },
        {
            key: 'search_agenda',
            label: '議題を探す',
            children:
                <Steps
                    type="navigation"
                    current={currentAgendaStep}
                    onChange={onAgendaStep}
                    items={[
                        {
                            status: 'wait',
                            title: '議題のトピックを選択する',
                        },
                        {
                            status: 'wait',
                            title: '議題の地域を選択する',
                        },
                        {
                            status: 'wait',
                            title: '検索',
                            onClick: () => navigate('/agenda'),
                            icon: <SearchOutlined />
                        }
                    ]}
                />
        }
    ];
    const topics: Topic[] = [
        { label: '学費補助', category: '教育' },
        { label: '学校の施設整備', category: '教育' },
        { label: '就業支援', category: '雇用' },
        { label: '職業訓練', category: '雇用' },
        { label: '雇用保険', category: '雇用' },
        { label: 'ごみ捨て', category: 'インフラ' },
        { label: '道路整備', category: 'インフラ' },
        { label: '公共交通', category: 'インフラ' },
        { label: 'インフラ整備', category: 'インフラ' },
    ];

    return (
        <div>
            <Row style={{marginBottom: 24}}>
                <Col span={24}>
                    <Tabs defaultActiveKey='search_councillor' items={items} onChange={setCurrentTab} />
                </Col>
            </Row>
            <Row>
                {currentTab === 'search_councillor' ? 
                    currentCouncillorStep === 0 ? <TopicCheckbox topics={topics} /> :
                    currentCouncillorStep === 1 ? <RegionCheckbox /> :
                    currentCouncillorStep === 2 ? <PartyCheckbox /> :
                    null
                 :  currentAgendaStep === 0 ? <TopicCheckbox topics={topics} /> :
                    currentAgendaStep === 1 ? <RegionCheckbox /> :
                    null
                }
            </Row>
        </div>
    );
};