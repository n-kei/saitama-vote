import React, { useState } from 'react';
import { Row, Col, Steps, Tabs, TabsProps, Typography, CheckboxOptionType, Checkbox } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const Welcome: React.FC = () => {
    const navigate = useNavigate();

    const [currentTab, setCurrentTab] = useState('1');
    const [currentCouncillorStep, setCurrentCouncillorStep] = useState(0);
    const [currentAgendaStep, setCurrentAgendaStep] = useState(0);

    const onCouncillorStep = (step: number) => {
        setCurrentCouncillorStep(step);
        if(step === 3) {
            navigate('/councillor')
        }
    };
    const onAgendaStep = (step: number) => {
        setCurrentAgendaStep(step);
        if(step === 2) {
            navigate('/agenda')
        }
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '議員を探す',
            children: 
                <Steps
                    type="navigation"
                    current={currentCouncillorStep}
                    onChange={onCouncillorStep}
                    className="site-navigation-steps"
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
                            icon: <SearchOutlined />
                        }
                    ]}
                />
        },
        {
            key: '2',
            label: '議題を探す',
            children:
                <Steps
                    type="navigation"
                    current={currentAgendaStep}
                    onChange={onAgendaStep}
                    className="site-navigation-steps"
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
                            icon: <SearchOutlined />
                        }
                    ]}
                />
        }
    ];

    const topicKyoiku: CheckboxOptionType<string>[] = [
        { label: '学費補助', value: 'Apple', className: 'label-1' },
        { label: '学校の施設整備', value: 'Pear', className: 'label-2' },
    ];
    const topicKoyo: CheckboxOptionType<string>[] = [
        { label: '就業支援', value: 'Apple', className: 'label-1' },
        { label: '職業訓練', value: 'Pear', className: 'label-2' },
        { label: '雇用保険', value: 'Orange', className: 'label-2' },
    ];
    const topicInfra: CheckboxOptionType<string>[] = [
        { label: 'ごみ捨て', value: 'Apple', className: 'label-1' },
        { label: '道路整備', value: 'Pear', className: 'label-2' },
        { label: '公共交通', value: 'Orange', className: 'label-2' },
        { label: 'インフラ整備', value: 'Orange', className: 'label-2' },
    ];
    const regions: CheckboxOptionType<string>[] = [
        { label: '西区', value: 'nishi', className: 'label-3' },
        { label: '北区', value: 'kita', className: 'label-1' },
        { label: '大宮区', value: 'omiya', className: 'label-1' },
        { label: '見沼区', value: 'minuma', className: 'label-1' },
        { label: '中央区', value: 'chuo', className: 'label-1' },
        { label: '桜区', value: 'sakura', className: 'label-1' },
        { label: '浦和区', value: 'urawa', className: 'label-3' },
        { label: '南区', value: 'minami', className: 'label-3' },
        { label: '緑区', value: 'midori', className: 'label-2' },
        { label: '岩槻区', value: 'iwatsuki', className: 'label-2' },
    ];
    const parties: CheckboxOptionType<string>[] = [
        { label: '自民党市議団', value: 'zimintoshigidan', className: 'label-1' },
        { label: '維新', value: 'ishin', className: 'label-2' },
        { label: '立憲', value: 'rikken', className: 'label-3' },
        { label: '国民', value: 'kokumin', className: 'label-3' },
        { label: '公明', value: 'komei', className: 'label-3' },
        { label: '参政', value: 'sansei', className: 'label-3' },
        { label: 'れいわ', value: 'reiwa', className: 'label-3' },
        { label: '共産', value: 'kyousan', className: 'label-3' },
        { label: '保守', value: 'hosyu', className: 'label-3' },
        { label: '社民', value: 'shamin', className: 'label-3' },
        { label: 'みらい', value: 'mirai', className: 'label-3' },
        { label: '無所属', value: 'musyozoku', className: 'label-3' },
    ];

    const councillorTopic = () => {
        return (
            <div>
                <Typography.Title level={5}>教育</Typography.Title>
                {
                    topicKyoiku.map(option => (
                        <Checkbox key={option.value} className={option.className}>
                            {option.label}
                        </Checkbox>
                    ))
                }
                <Typography.Title level={5}>雇用</Typography.Title>
                {
                    topicKoyo.map(option => (
                        <Checkbox key={option.value} className={option.className}>
                            {option.label}
                        </Checkbox>
                    ))
                }
                <Typography.Title level={5}>インフラ</Typography.Title>
                {
                    topicInfra.map(option => (
                        <Checkbox key={option.value} className={option.className}>
                            {option.label}
                        </Checkbox>
                    ))
                }
            </div>
        )
    };
    const councillorRegion = () => {
        return regions.map(option => (
            <Checkbox key={option.value} className={option.className}>
                {option.label}
            </Checkbox>
        ));
    };
    const councillorParty = () => {
        return parties.map(option => (
            <Checkbox key={option.value} className={option.className}>
                {option.label}
            </Checkbox>
        ));
    };

    const agendaTopic = () => {
        return (
            <div>
                <Typography.Title level={5}>教育</Typography.Title>
                {
                    topicKyoiku.map(option => (
                        <Checkbox key={option.value} className={option.className}>
                            {option.label}
                        </Checkbox>
                    ))
                }
                <Typography.Title level={5}>雇用</Typography.Title>
                {
                    topicKoyo.map(option => (
                        <Checkbox key={option.value} className={option.className}>
                            {option.label}
                        </Checkbox>
                    ))
                }
                <Typography.Title level={5}>インフラ</Typography.Title>
                {
                    topicInfra.map(option => (
                        <Checkbox key={option.value} className={option.className}>
                            {option.label}
                        </Checkbox>
                    ))
                }
            </div>
        )
    };
    const agendaRegions = () => {
        return regions.map(option => (
            <Checkbox key={option.value} className={option.className}>
                {option.label}
            </Checkbox>
        ));
    };

    return (
        <div>
            <Row style={{marginBottom: 24}}>
                <Col span={24}>
                    <Tabs defaultActiveKey="1" items={items} onChange={setCurrentTab} />
                </Col>
            </Row>
            <Row>
                {currentTab === '1' ? 
                    currentCouncillorStep === 0 ? councillorTopic() :
                    currentCouncillorStep === 1 ? councillorRegion() :
                    currentCouncillorStep === 2 ? councillorParty() :
                    null
                 :  currentAgendaStep === 0 ? agendaTopic() :
                    currentAgendaStep === 1 ? agendaRegions() :
                    null
                }
            </Row>
        </div>
    );
};