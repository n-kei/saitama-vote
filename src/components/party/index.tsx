import React from 'react';
import { Checkbox } from 'antd';
import { CheckboxOptionType}  from 'antd';

export const PartyCheckbox: React.FC = () => {
    // TODO: ロゴ入りで政党を表示できるようにする
    const parties: CheckboxOptionType<string>[] = [
        { label: '自民党市議団', value: 'zimintoshigidan' },
        { label: '維新', value: 'ishin' },
        { label: '立憲', value: 'rikken' },
        { label: '国民', value: 'kokumin' },
        { label: '公明', value: 'komei' },
        { label: '参政', value: 'sansei' },
        { label: 'れいわ', value: 'reiwa' },
        { label: '共産', value: 'kyousan' },
        { label: '保守', value: 'hosyu' },
        { label: '社民', value: 'shamin' },
        { label: 'みらい', value: 'mirai' },
        { label: '無所属', value: 'musyozoku' },
    ];

    return (
        <Checkbox.Group options={parties} />
    );
}