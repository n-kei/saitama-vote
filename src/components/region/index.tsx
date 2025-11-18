import React from 'react';
import { Checkbox, CheckboxOptionType}  from 'antd';

export const RegionCheckbox: React.FC = () => {
    const nishiLabel = (
            <img
                src="https://www.city.saitama.lg.jp/006/007/016/002/p006312_d/img/004.jpg"
                alt="Nishi-ku, Saitama"
                style={{ width: '50%', height: '50%', objectFit: 'cover' }}
            />
    )
    const kitaLabel = (
            <img
                src="https://www.city.saitama.lg.jp/006/007/016/002/p006312_d/img/005.jpg"
                alt="Kita-ku, Saitama"
                style={{ width: '50%', height: '50%', objectFit: 'cover' }}
            />
    )
    const omiyaLabel = (
        <span>
            <img
                src="https://www.city.saitama.lg.jp/006/007/016/002/p006312_d/img/006.jpg"
                alt="Omiya-ku, Saitama"
                style={{ width: '50%', height: '50%', objectFit: 'cover' }}
            />
        </span>
    )
    const minumaLabel = (
        <span>
            <img
                src="https://www.city.saitama.lg.jp/006/007/016/002/p006312_d/img/007.jpg"
                alt="Minuma-ku, Saitama"
                style={{ width: '50%', height: '50%', objectFit: 'cover' }}
            />
        </span>
    )
    const chuoLabel = (
        <span>
            <img
                src="https://www.city.saitama.lg.jp/006/007/016/002/p006312_d/img/008.jpg"
                alt="Chuo-ku, Saitama"
                style={{ width: '50%', height: '50%', objectFit: 'cover' }}
            />
        </span>
    )
    const sakuraLabel = (
        <span>
            <img
                src="https://www.city.saitama.lg.jp/006/007/016/002/p006312_d/img/009.jpg"
                alt="Sakura-ku, Saitama"
                style={{ width: '50%', height: '50%', objectFit: 'cover' }}
            />
        </span>
    )
    const urawaLabel = (
        <span>
            <img
                src="https://www.city.saitama.lg.jp/006/007/016/002/p006312_d/img/010.jpg"
                alt="Urawa-ku, Saitama"
                style={{ width: '50%', height: '50%', objectFit: 'cover' }}
            />
        </span>
    )
    const minamiLabel = (
        <span>
            <img
                src="https://www.city.saitama.lg.jp/006/007/016/002/p006312_d/img/011.jpg"
                alt="Minami-ku, Saitama"
                style={{ width: '50%', height: '50%', objectFit: 'cover' }}
            />
        </span>
    )
    const midoriLabel = (
        <span>
            <img
                src="https://www.city.saitama.lg.jp/006/007/016/002/p006312_d/img/012.jpg"
                alt="Midori-ku, Saitama"
                style={{ width: '50%', height: '50%', objectFit: 'cover' }}
            />
        </span>
    )
    const iwatsukiLabel = (
        <span>
            <img
                src="https://www.city.saitama.lg.jp/006/007/016/002/p006312_d/img/013.jpg"
                alt="Iwatsuki-ku, Saitama"
                style={{ width: '50%', height: '50%', objectFit: 'cover' }}
            />
        </span>
    )
    const regions: CheckboxOptionType<string>[] = [
        { label: nishiLabel, value: 'nishi'},
        { label: kitaLabel, value: 'kita'},
        { label: omiyaLabel, value: 'omiya'},
        { label: minumaLabel, value: 'minuma'},
        { label: chuoLabel, value: 'chuo'},
        { label: sakuraLabel, value: 'sakura'},
        { label: urawaLabel, value: 'urawa'},
        { label: minamiLabel, value: 'minami'},
        { label: midoriLabel, value: 'midori'},
        { label: iwatsukiLabel, value: 'iwatsuki'},
    ];

    // TODO: 全地域を選択するチェックボックスを追加する
    return (
        <Checkbox.Group options={regions} />
    );
}