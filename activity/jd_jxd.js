/*
京小兑
更新时间:20201-3-13
只要保证一天运行一次，即可参与到每天3场抽奖，切勿多次运行冲垮服务器⚠️⚠️⚠️
号内循环互助，每天2500+兑币=20+京豆，推荐打开将抽奖码换为兑币的开关
docker用户推荐修改默认cron，避免冲垮服务器
活动入口：微信搜索小程序-京小兑
更新地址：jd_jxd.js

已支持IOS双京东账号, Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, 小火箭，JSBox, Node.js
============Quantumultx===============
[task_local]
#京小兑
30 8,16,20 * * * jd_jxd.js, tag=京小兑, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_jxd.png, enabled=true

================Loon==============
[Script]
cron "35 8,16,20 * * *" script-path=jd_jxd.js, tag=京小兑

===============Surge=================
京小兑 = type=cron,cronexp="40 8,16,20 * * *",wake-system=1,timeout=3600,script-path=jd_jxd.js

============小火箭=========
京小兑 = type=cron,script-path=jd_jxd.js, cronexpr="45 8,16,20 * * *", timeout=3600, enable=true
 */

const $ = new Env('京小兑');

const notify = $.isNode() ? require('../sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('../jdCookie.js') : '';
let jdNotify = true;//是否关闭通知，false打开通知推送，true关闭通知推送
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message = '', allMessage = '';
//自动把抽奖卷兑换为兑币,默认是


 */
let shareCodes = [''];
let exchangeFlag = $['getdata']('jdJxdExchange') || !!0x1;
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x25923b => {
        cookiesArr['push'](jdCookieNode[_0x25923b]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x510010 => _0x510010['cookie'])]['filter'](_0x5aa59a => !!_0x5aa59a);
}
const JD_API_HOST = 'https://jxd.m.jd.com/';
!(async () => {
    var _0x28ece5 = {
        'WlNlt': function(_0x1a4e63, _0x5df613) {
            return _0x1a4e63(_0x5df613);
        },
        'zszrO': function(_0x34c9f2, _0x267844) {
            return _0x34c9f2 === _0x267844;
        },
        'QTkxP': 'lTnVY',
        'SSDwk': 'GnPRo',
        'KOeRc': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'CbXgT': 'https://bean.m.jd.com/bean/signIndex.action',
        'USSLJ': function(_0x406455) {
            return _0x406455();
        },
        'oODMx': function(_0x3062a9, _0x694432) {
            return _0x3062a9 === _0x694432;
        },
        'Euxbz': 'HZtat',
        'nPPcr': 'cJmTD',
        'LquxU': function(_0xffac02, _0x57c62e) {
            return _0xffac02 < _0x57c62e;
        },
        'fBkHT': function(_0x27c1d1, _0x3d81bb) {
            return _0x27c1d1 !== _0x3d81bb;
        },
        'HUmdv': 'meizP',
        'eyKQM': function(_0x51a8c1, _0x500e01) {
            return _0x51a8c1 === _0x500e01;
        },
        'cZwYY': 'iYaiZ',
        'KBwKB': 'StfTg',
        'MhvwO': function(_0x232632, _0x3f98ef) {
            return _0x232632(_0x3f98ef);
        },
        'Zudgs': function(_0x4a2338, _0x9e9ddf) {
            return _0x4a2338 + _0x9e9ddf;
        },
        'eQcdc': function(_0x56ced9) {
            return _0x56ced9();
        },
        'Ybmgr': function(_0x50b2e5) {
            return _0x50b2e5();
        },
        'OSNnt': function(_0x18cecd, _0x350357) {
            return _0x18cecd === _0x350357;
        },
        'txghA': 'GLcTd',
        'hEQqr': 'JEvRQ',
        'zYRiV': 'JGyxN',
        'XcUDL': function(_0x54c212, _0x36e3f9) {
            return _0x54c212(_0x36e3f9);
        },
        'BaITh': function(_0x33e3cd, _0x23e69f) {
            return _0x33e3cd !== _0x23e69f;
        },
        'KcFSv': function(_0x4dc6c6, _0x261dca, _0x4d0395) {
            return _0x4dc6c6(_0x261dca, _0x4d0395);
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x28ece5['KOeRc'], _0x28ece5['CbXgT'], {
            'open-url': _0x28ece5['CbXgT']
        });
        return;
    }
    $['actList'] = [];
    await _0x28ece5['USSLJ'](requireConfig);
    if (exchangeFlag) {
        if (_0x28ece5['oODMx'](_0x28ece5['Euxbz'], _0x28ece5['nPPcr'])) {
            return JSON['parse'](str);
        } else {
            console['log']('脚本自动把抽奖卷兑换为兑币');
        }
    } else {
        console['log']('脚本不会将抽奖卷兑换为兑币');
    }
    for (let _0x43bcce = 0x0; _0x28ece5['LquxU'](_0x43bcce, cookiesArr['length']); _0x43bcce++) {
        if (_0x28ece5['fBkHT'](_0x28ece5['HUmdv'], _0x28ece5['HUmdv'])) {
            console['log']('任务完成成功');
        } else {
            if (cookiesArr[_0x43bcce]) {
                if (_0x28ece5['eyKQM'](_0x28ece5['cZwYY'], _0x28ece5['KBwKB'])) {
                    $['nickName'] = $['UserName'];
                } else {
                    cookie = cookiesArr[_0x43bcce];
                    $['UserName'] = _0x28ece5['MhvwO'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                    $['index'] = _0x28ece5['Zudgs'](_0x43bcce, 0x1);
                    $['isLogin'] = !![];
                    $['nickName'] = '';
                    message = '';
                    await _0x28ece5['eQcdc'](TotalBean);
                    console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                    if (!$['isLogin']) {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': _0x28ece5['CbXgT']
                        });
                        if ($['isNode']()) {
                            await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                        }
                        continue;
                    }
                    await _0x28ece5['Ybmgr'](jxd);
                    await _0x28ece5['Ybmgr'](showMsg);
                    await $['wait'](0x3e8);
                }
            }
        }
    }
    if (allMessage) {
        if ($['isNode']()) await notify['sendNotify']($['name'], allMessage);
        $['msg']($['name'], '', allMessage);
    }
    let _0x58a6f3 = [];
    cookiesArr['map'](_0x2e382d => {
        if (_0x28ece5['zszrO'](_0x28ece5['QTkxP'], _0x28ece5['SSDwk'])) {
            if (_0x28ece5['WlNlt'](safeGet, data)) {
                data = JSON['parse'](data);
                if (_0x28ece5['zszrO'](data['returnCode'], 0xc8)) {
                    console['log']('当前兑币：' + data['data']['dbAmount']['replace'](/,/g, ''));
                }
            }
        } else {
            _0x58a6f3['push'](_0x2e382d['match'](/pt_pin=([^; ]+)(?=;?)/) && _0x2e382d['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
        }
    });
    _0x58a6f3 = [...new Set([..._0x58a6f3, ...shareCodes])];
    for (let _0x43bcce = 0x0; _0x28ece5['LquxU'](_0x43bcce, cookiesArr['length']); _0x43bcce++) {
        if (_0x28ece5['OSNnt'](_0x28ece5['txghA'], _0x28ece5['hEQqr'])) {
            data = JSON['parse'](data);
            console['log'](data['returnMsg']);
        } else {
            if (cookiesArr[_0x43bcce]) {
                if (_0x28ece5['fBkHT'](_0x28ece5['zYRiV'], _0x28ece5['zYRiV'])) {
                    console['log']('' + JSON['stringify'](err));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    cookie = cookiesArr[_0x43bcce];
                    $['UserName'] = _0x28ece5['XcUDL'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                    $['index'] = _0x28ece5['Zudgs'](_0x43bcce, 0x1);
                    console['log']('\n******开始【京东账号' + $['index'] + '】的循环互助*********\n');
                    for (let _0x411017 of $['actList']) {
                        console['log']('\n开始助力活动id：【' + _0x411017 + '】');
                        for (let _0x347568 of _0x58a6f3) {
                            if (!cookie['match'](/pt_key=([^; ]+)(?=;?)/)) console['log']('\n提示:你的cookie填写不规范,正确格式为: pt_key=xxx;pt_pin=xxx; 后面分号;不可少\n');
                            let _0x367775 = cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1];
                            if (_0x28ece5['BaITh'](_0x347568, _0x367775)) {
                                await _0x28ece5['KcFSv'](helpFriend, _0x411017, _0x347568);
                                await $['wait'](0x3e8);
                            }
                        }
                        await $['wait'](0x1388);
                    }
                }
            }
        }
    }
})()['catch'](_0x13db33 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x13db33 + '!', '');
})['finally'](() => {
    $['done']();
});
async function jxd() {
    var _0x574fba = {
        'WDulQ': '4|5|10|0|1|9|8|3|7|2|6',
        'Bzzks': function(_0x3733c7) {
            return _0x3733c7();
        },
        'gWfqB': function(_0x4d063b) {
            return _0x4d063b();
        },
        'FgylH': function(_0x57acdd) {
            return _0x57acdd();
        },
        'SyoYu': function(_0x3360db, _0x1a6e1a) {
            return _0x3360db === _0x1a6e1a;
        }
    };
    var _0x970f44 = _0x574fba['WDulQ']['split']('|'),
        _0x39b1cb = 0x0;
    while (!![]) {
        switch (_0x970f44[_0x39b1cb++]) {
            case '0':
                await _0x574fba['Bzzks'](getUserInfo);
                continue;
            case '1':
                await _0x574fba['gWfqB'](getMyLotteryInformation);
                continue;
            case '2':
                await $['wait'](0x3e8);
                continue;
            case '3':
                await $['wait'](0x3e8);
                continue;
            case '4':
                $['db'] = 0x0;
                continue;
            case '5':
                await _0x574fba['gWfqB'](sign);
                continue;
            case '6':
                await _0x574fba['FgylH'](getMyWinningInformation);
                continue;
            case '7':
                await _0x574fba['FgylH'](getMainTask);
                continue;
            case '8':
                await _0x574fba['FgylH'](getWelfareInfo);
                continue;
            case '9':
                await $['wait'](0x3e8);
                continue;
            case '10':
                if (_0x574fba['SyoYu']($['index'], 0x1)) {
                    $['actList'] = [];
                }
                continue;
        }
        break;
    }
}

function showMsg() {
    var _0x113654 = {
        'BFoLe': function(_0x22bedd, _0x392698) {
            return _0x22bedd(_0x392698);
        },
        'ccGwI': function(_0x364307, _0x4170c0) {
            return _0x364307 !== _0x4170c0;
        },
        'pdvIu': 'woJEW',
        'aUlno': function(_0x3ab7f9) {
            return _0x3ab7f9();
        }
    };
    return new Promise(_0x184f8e => {
        var _0x33c617 = {
            'YWAUz': function(_0x5bd68a, _0x2ccbb9) {
                return _0x113654['BFoLe'](_0x5bd68a, _0x2ccbb9);
            }
        };
        if (_0x113654['ccGwI'](_0x113654['pdvIu'], _0x113654['pdvIu'])) {
            if (err) {
                console['log']('' + JSON['stringify'](err));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            } else {
                if (_0x33c617['YWAUz'](safeGet, data)) {
                    data = JSON['parse'](data);
                    console['log'](data['returnMsg']);
                }
            }
        } else {
            message += '本次运行获得 ' + $['db'] + ' 兑币';
            if (!jdNotify) {
                $['msg']($['name'], '', '' + message);
            } else {
                $['log']('京东账号' + $['index'] + $['nickName'] + '\x0a' + message);
            }
            _0x113654['aUlno'](_0x184f8e);
        }
    });
}

function getMainTask() {
    var _0x38d83f = {
        'nrRoW': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'aHWoM': 'https://bean.m.jd.com/bean/signIndex.action',
        'FWBnC': function(_0x58f300, _0x49b7f1) {
            return _0x58f300 == _0x49b7f1;
        },
        'Hkkjw': 'object',
        'XjLBx': function(_0x599e32, _0x8a7be7) {
            return _0x599e32 === _0x8a7be7;
        },
        'dVODJ': 'hCcXr',
        'cJHjE': 'fXYKv',
        'XhcmS': 'pglYV',
        'AJXNK': function(_0xadeb64, _0x37cd45) {
            return _0xadeb64(_0x37cd45);
        },
        'GlCgC': function(_0x257bce, _0xf73cf1) {
            return _0x257bce === _0xf73cf1;
        },
        'RdzxR': function(_0x3a6de4) {
            return _0x3a6de4();
        },
        'MBSag': function(_0x3d870b, _0x412957) {
            return _0x3d870b === _0x412957;
        },
        'SiAld': 'status',
        'VcdFI': function(_0x37b050, _0x3ee000) {
            return _0x37b050 !== _0x3ee000;
        },
        'rskzT': 'taskType',
        'YogxP': function(_0x18df3d, _0x2f754d) {
            return _0x18df3d(_0x2f754d);
        },
        'PpcJn': 'taskId',
        'ZskAO': 'vWMlA',
        'holNu': function(_0x43b059, _0x2c82e6) {
            return _0x43b059 > _0x2c82e6;
        },
        'xUpIu': function(_0x4a1a99, _0x347a6d) {
            return _0x4a1a99 === _0x347a6d;
        },
        'AbKpO': 'WhWwZ',
        'kVoaN': function(_0x407c13, _0xfadda8) {
            return _0x407c13 <= _0xfadda8;
        },
        'bKukW': function(_0x57af13, _0x2345cb) {
            return _0x57af13 <= _0x2345cb;
        },
        'BbzyX': function(_0x273b7b, _0x23bbac) {
            return _0x273b7b === _0x23bbac;
        },
        'jzQcT': 'TKBqv',
        'ScrzW': 'MTjHI',
        'CkTvG': function(_0x294070) {
            return _0x294070();
        },
        'cTdUN': function(_0x46b192, _0x1be444) {
            return _0x46b192 === _0x1be444;
        },
        'MVPpk': 'JnZpG',
        'wRNvj': function(_0x427ac4) {
            return _0x427ac4();
        },
        'SMsGu': function(_0x10c3c2) {
            return _0x10c3c2();
        },
        'EEUoZ': function(_0x3c94c3, _0xd55657) {
            return _0x3c94c3 === _0xd55657;
        },
        'PCdAL': 'fcNyn',
        'HpdOQ': 'ZurBe',
        'rSYGU': function(_0x557ee5, _0x42cf4a) {
            return _0x557ee5(_0x42cf4a);
        },
        'RIrIG': function(_0x2f30ed, _0x393ef0) {
            return _0x2f30ed === _0x393ef0;
        },
        'WuiET': 'QFWfm',
        'XvfOl': function(_0x5ce73a, _0x38f725) {
            return _0x5ce73a(_0x38f725);
        },
        'KAJgd': function(_0x297371, _0x2a53e0) {
            return _0x297371 === _0x2a53e0;
        },
        'ALCog': function(_0x1cf0b9, _0x3fbf35) {
            return _0x1cf0b9 < _0x3fbf35;
        },
        'VtJig': function(_0x3e361e, _0xa829c1) {
            return _0x3e361e + _0xa829c1;
        },
        'ClzLX': function(_0x16cbd4, _0x422d28) {
            return _0x16cbd4 * _0x422d28;
        },
        'bjbtO': function(_0x499684, _0x346cc1) {
            return _0x499684(_0x346cc1);
        },
        'bXJrr': function(_0x4d3084, _0x1df13f) {
            return _0x4d3084(_0x1df13f);
        },
        'TBhpf': 'data',
        'SmHOF': 'lotteryTime',
        'tlyCL': 'prizeName',
        'WxmOR': 'ztKyg',
        'cRaMs': function(_0x37229a, _0x4cdf0f) {
            return _0x37229a(_0x4cdf0f);
        },
        'YDbmq': 'jxdTaskRule'
    };
    return new Promise(_0x550a64 => {
        var _0x34b09b = {
            'XwSBS': function(_0x50b14e, _0x241ac2) {
                return _0x38d83f['bXJrr'](_0x50b14e, _0x241ac2);
            },
            'ZEWLx': function(_0x1a0462) {
                return _0x38d83f['SMsGu'](_0x1a0462);
            },
            'VLpYC': _0x38d83f['TBhpf'],
            'dPeCj': _0x38d83f['SmHOF'],
            'SWrgS': _0x38d83f['tlyCL'],
            'yBQIC': function(_0x557ca7, _0x146986) {
                return _0x38d83f['VcdFI'](_0x557ca7, _0x146986);
            }
        };
        if (_0x38d83f['KAJgd'](_0x38d83f['WxmOR'], _0x38d83f['WxmOR'])) {
            $['get'](_0x38d83f['cRaMs'](taskUrl, _0x38d83f['YDbmq']), async (_0x26ae56, _0x1d05d7, _0x1bd41a) => {
                var _0x51545d = {
                    'wrwca': _0x38d83f['nrRoW'],
                    'OFICH': _0x38d83f['aHWoM'],
                    'ifPfJ': function(_0x43bf62, _0x16feb2) {
                        return _0x38d83f['FWBnC'](_0x43bf62, _0x16feb2);
                    },
                    'TDYEX': _0x38d83f['Hkkjw']
                };
                try {
                    if (_0x38d83f['XjLBx'](_0x38d83f['dVODJ'], _0x38d83f['dVODJ'])) {
                        if (_0x26ae56) {
                            if (_0x38d83f['XjLBx'](_0x38d83f['cJHjE'], _0x38d83f['XhcmS'])) {
                                console['log']('' + JSON['stringify'](_0x26ae56));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                console['log']('' + JSON['stringify'](_0x26ae56));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x38d83f['AJXNK'](safeGet, _0x1bd41a)) {
                                _0x1bd41a = JSON['parse'](_0x1bd41a);
                                if (_0x38d83f['GlCgC'](_0x1bd41a['returnCode'], 0xc8) && _0x1bd41a['data']) {
                                    const {
                                        signIn,
                                        taskList
                                    } = _0x1bd41a['data'];
                                    if (!signIn) await _0x38d83f['RdzxR'](sign);
                                    for (let _0x3ff5ad of taskList) {
                                        if (_0x38d83f['MBSag'](_0x3ff5ad[_0x38d83f['SiAld']], 0x1)) {
                                            if (_0x38d83f['VcdFI'](_0x3ff5ad[_0x38d83f['rskzT']], 0x8)) {
                                                console['log']('去领奖');
                                                await _0x38d83f['YogxP'](awardTask, _0x3ff5ad[_0x38d83f['PpcJn']]);
                                            } else {
                                                if (_0x38d83f['MBSag'](_0x38d83f['ZskAO'], _0x38d83f['ZskAO'])) {
                                                    let _0x1891d8 = new Date()['getHours']();
                                                    let _0x10da03 = _0x3ff5ad['getDbTitle']['split']('~')['map'](_0x3ff5ad => Number(_0x3ff5ad));
                                                    if (_0x10da03 && _0x38d83f['holNu'](_0x10da03['length'], 0x1)) {
                                                        if (_0x38d83f['xUpIu'](_0x38d83f['AbKpO'], _0x38d83f['AbKpO'])) {
                                                            if (_0x38d83f['kVoaN'](_0x10da03[0x0], _0x1891d8) && _0x38d83f['bKukW'](_0x1891d8, _0x10da03[0x1])) {
                                                                if (_0x38d83f['BbzyX'](_0x38d83f['jzQcT'], _0x38d83f['jzQcT'])) {
                                                                    console['log']('去完成' + _0x3ff5ad['getDbTitle'] + '签到任务');
                                                                    await _0x38d83f['YogxP'](awardTask, _0x3ff5ad[_0x38d83f['PpcJn']]);
                                                                } else {
                                                                    _0x34b09b['XwSBS'](_0x550a64, _0x1bd41a);
                                                                }
                                                            } else {
                                                                if (_0x38d83f['VcdFI'](_0x38d83f['ScrzW'], _0x38d83f['ScrzW'])) {
                                                                    $['msg']($['name'], _0x51545d['wrwca'], _0x51545d['OFICH'], {
                                                                        'open-url': _0x51545d['OFICH']
                                                                    });
                                                                    return;
                                                                } else {
                                                                    console['log']('当前运行时间：' + _0x1891d8 + '点，不满足' + _0x3ff5ad['getDbTitle'] + '点签到任务条件');
                                                                }
                                                            }
                                                        } else {
                                                            console['log']('' + JSON['stringify'](_0x26ae56));
                                                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                                                        }
                                                    } else {
                                                        console['log']('获取签到任务条件失败');
                                                    }
                                                } else {
                                                    console['log']('' + JSON['stringify'](_0x26ae56));
                                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                                }
                                            }
                                            await $['wait'](0x7d0);
                                        } else if (_0x38d83f['BbzyX'](_0x3ff5ad[_0x38d83f['PpcJn']], 0x3) && _0x38d83f['BbzyX'](_0x3ff5ad[_0x38d83f['SiAld']], 0x0)) {
                                            await _0x38d83f['CkTvG'](awardRun);
                                            await $['wait'](0x7d0);
                                        } else if (_0x38d83f['cTdUN'](_0x3ff5ad[_0x38d83f['PpcJn']], 0x1f5) && _0x38d83f['cTdUN'](_0x3ff5ad[_0x38d83f['SiAld']], 0x0)) {
                                            if (_0x38d83f['cTdUN'](_0x38d83f['MVPpk'], _0x38d83f['MVPpk'])) {
                                                await _0x38d83f['wRNvj'](accomplishTask);
                                                await $['wait'](0x3e8);
                                                await _0x38d83f['SMsGu'](awardTask);
                                                await $['wait'](0x7d0);
                                            } else {
                                                $['logErr'](e, _0x1d05d7);
                                            }
                                        } else if (_0x38d83f['EEUoZ'](_0x3ff5ad['taskId'], 0x4)) {
                                            console['log']('剩余抽奖券：' + _0x3ff5ad['codeCount']);
                                            if (exchangeFlag && _0x3ff5ad['codeCount']) {
                                                if (_0x38d83f['EEUoZ'](_0x38d83f['PCdAL'], _0x38d83f['HpdOQ'])) {
                                                    try {
                                                        if (_0x51545d['ifPfJ'](typeof JSON['parse'](_0x1bd41a), _0x51545d['TDYEX'])) {
                                                            return !![];
                                                        }
                                                    } catch (_0x584335) {
                                                        console['log'](_0x584335);
                                                        console['log']('京东服务器访问数据为空，请检查自身设备网络情况');
                                                        return ![];
                                                    }
                                                } else {
                                                    console['log']('去兑换兑币');
                                                    await _0x38d83f['rSYGU'](exchange, _0x3ff5ad['codeCount']);
                                                    await $['wait'](0x7d0);
                                                }
                                            }
                                        } else if ([0x9]['includes'](_0x3ff5ad[_0x38d83f['rskzT']]) && _0x38d83f['RIrIG'](_0x3ff5ad[_0x38d83f['SiAld']], 0x0)) {
                                            if (_0x38d83f['RIrIG'](_0x38d83f['WuiET'], _0x38d83f['WuiET'])) {
                                                await _0x38d83f['XvfOl'](accomplishTask, _0x3ff5ad[_0x38d83f['PpcJn']]);
                                                await _0x38d83f['XvfOl'](awardTask, _0x3ff5ad[_0x38d83f['PpcJn']]);
                                                await $['wait'](0x7d0);
                                            } else {
                                                message += '本次运行获得 ' + $['db'] + ' 兑币';
                                                if (!jdNotify) {
                                                    $['msg']($['name'], '', '' + message);
                                                } else {
                                                    $['log']('京东账号' + $['index'] + $['nickName'] + '\x0a' + message);
                                                }
                                                _0x34b09b['ZEWLx'](_0x550a64);
                                            }
                                        } else if ([0xa, 0xb, 0xc]['includes'](_0x3ff5ad[_0x38d83f['rskzT']]) && _0x38d83f['KAJgd'](_0x3ff5ad[_0x38d83f['SiAld']], 0x0)) {
                                            for (let _0x169886 = _0x3ff5ad['quantityCompleted']; _0x38d83f['ALCog'](_0x169886, _0x3ff5ad['quantityToBeCompleted']); ++_0x169886) {
                                                console['log']('去完成第【' + _0x38d83f['VtJig'](_0x169886, 0x1) + '/' + _0x3ff5ad['quantityToBeCompleted'] + '】关注/收藏任务');
                                                await _0x38d83f['XvfOl'](accomplishTask, _0x3ff5ad[_0x38d83f['PpcJn']]);
                                                await $['wait'](_0x38d83f['ClzLX'](0x5, 0x3e8));
                                            }
                                            await _0x38d83f['XvfOl'](awardTask, _0x3ff5ad[_0x38d83f['PpcJn']]);
                                            await $['wait'](0x7d0);
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        $['MyWinningInformation'] = _0x1bd41a[_0x34b09b['VLpYC']];
                        for (let _0x323765 of $['MyWinningInformation']) {
                            $['log'](_0x323765[_0x34b09b['dPeCj']] + '已中奖 【' + _0x323765[_0x34b09b['SWrgS']] + '】');
                        }
                        $['MyWinningInformation'] = $['MyWinningInformation']['filter'](_0x24c9fc => !!_0x24c9fc && (_0x24c9fc['lotteryTime']['substr'](0x0, 0x6) === timeFormat() || _0x24c9fc['lotteryTime']['substr'](0x0, 0x6) === timeFormat(Date['now']() - 0x18 * 0x3c * 0x3c * 0x3e8)));
                        $['MyWinningInformation'] = $['MyWinningInformation']['filter'](_0x53b209 => !!_0x53b209 && !_0x53b209['prizeName']['includes']('京豆'));
                        if ($['MyWinningInformation'] && $['MyWinningInformation']['length']) {
                            for (let _0x491c24 of $['MyWinningInformation']) {
                                message += _0x491c24[_0x34b09b['dPeCj']] + '已中奖 【' + _0x491c24[_0x34b09b['SWrgS']] + '】\x0a';
                            }
                            allMessage += '京东账号' + $['index'] + $['nickName'] + '\x0a' + message + (_0x34b09b['yBQIC']($['index'], cookiesArr['length']) ? '\x0a\x0a' : '');
                        }
                    }
                } catch (_0x3b3941) {
                    $['logErr'](_0x3b3941, _0x1d05d7);
                } finally {
                    _0x38d83f['bjbtO'](_0x550a64, _0x1bd41a);
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function getMyLotteryInformation() {
    var _0xf3e1f3 = {
        'AsPoC': function(_0x49252b, _0x31b037) {
            return _0x49252b(_0x31b037);
        },
        'kSENu': 'base',
        'wJfiE': function(_0x5b9dd8, _0xac6a66) {
            return _0x5b9dd8 !== _0xac6a66;
        },
        'tCrNF': 'fdcRx',
        'FPSzy': function(_0x36557a, _0x2ae868) {
            return _0x36557a !== _0x2ae868;
        },
        'oGTsy': 'Ynvnm',
        'rFfnQ': 'nUitL',
        'fIJLI': function(_0x21da6c, _0x400dd6) {
            return _0x21da6c === _0x400dd6;
        },
        'IJyDJ': 'tIKPe',
        'IPSYp': 'xSjQy',
        'ApYFT': function(_0x2aba76, _0xf35dcb, _0xf899e5) {
            return _0x2aba76(_0xf35dcb, _0xf899e5);
        },
        'FGdkT': 'getMyLotteryInformation',
        'GWCZA': 'page=1&size=20'
    };
    return new Promise(_0x48246a => {
        var _0x1c6f4a = {
            'qzlch': function(_0x581a2c, _0x11554a) {
                return _0xf3e1f3['AsPoC'](_0x581a2c, _0x11554a);
            },
            'ORQWt': _0xf3e1f3['kSENu'],
            'NMbGY': function(_0x42cd5f, _0x472713) {
                return _0xf3e1f3['wJfiE'](_0x42cd5f, _0x472713);
            },
            'CKOHH': _0xf3e1f3['tCrNF'],
            'svKuj': function(_0x1f7e3b, _0x1620f0) {
                return _0xf3e1f3['FPSzy'](_0x1f7e3b, _0x1620f0);
            },
            'TeMAt': _0xf3e1f3['oGTsy'],
            'yliXg': _0xf3e1f3['rFfnQ'],
            'cjBnN': function(_0x24b87a, _0x924c97) {
                return _0xf3e1f3['fIJLI'](_0x24b87a, _0x924c97);
            },
            'sVJNR': function(_0x5e6606, _0xb62a66) {
                return _0xf3e1f3['fIJLI'](_0x5e6606, _0xb62a66);
            },
            'DQWei': _0xf3e1f3['IJyDJ']
        };
        if (_0xf3e1f3['FPSzy'](_0xf3e1f3['IPSYp'], _0xf3e1f3['IPSYp'])) {
            _0x1c6f4a['qzlch'](_0x48246a, data);
        } else {
            $['post'](_0xf3e1f3['ApYFT'](taskPostUrl, _0xf3e1f3['FGdkT'], _0xf3e1f3['GWCZA']), async (_0x1245bc, _0x23bd67, _0x1c7f4e) => {
                try {
                    if (_0x1245bc) {
                        if (_0x1c6f4a['NMbGY'](_0x1c6f4a['CKOHH'], _0x1c6f4a['CKOHH'])) {
                            $['nickName'] = _0x1c7f4e[_0x1c6f4a['ORQWt']]['nickname'];
                        } else {
                            console['log']('' + JSON['stringify'](_0x1245bc));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        if (_0x1c6f4a['svKuj'](_0x1c6f4a['TeMAt'], _0x1c6f4a['yliXg'])) {
                            if (_0x1c6f4a['qzlch'](safeGet, _0x1c7f4e)) {
                                _0x1c7f4e = JSON['parse'](_0x1c7f4e);
                                if (_0x1c6f4a['cjBnN'](_0x1c7f4e['returnCode'], 0xc8) && _0x1c7f4e['data']) {
                                    let _0x1a0eab = _0x1c7f4e['data']['filter'](_0x239fe0 => _0x239fe0['activityStatus'] === 0x2);
                                    for (let _0xa84e3f of _0x1a0eab) {
                                        console['log']('去查看【' + _0xa84e3f['prizeName'] + '】的中奖情况');
                                        await _0x1c6f4a['qzlch'](getLotteryDetailsByActivityId, _0xa84e3f['activityId']);
                                        await $['wait'](0x3e8);
                                    }
                                }
                            }
                        } else {
                            $['logErr'](e, _0x23bd67);
                        }
                    }
                } catch (_0x1e298f) {
                    $['logErr'](_0x1e298f, _0x23bd67);
                } finally {
                    if (_0x1c6f4a['sVJNR'](_0x1c6f4a['DQWei'], _0x1c6f4a['DQWei'])) {
                        _0x1c6f4a['qzlch'](_0x48246a, _0x1c7f4e);
                    } else {
                        $['actList'] = [];
                    }
                }
            });
        }
    });
}

function getLotteryDetailsByActivityId(_0x3932c6) {
    var _0xfd4038 = {
        'BoPpf': function(_0x2e49cb, _0x51b2d8) {
            return _0x2e49cb + _0x51b2d8;
        },
        'ZauCl': function(_0x23059e, _0xe46d7c) {
            return _0x23059e + _0xe46d7c;
        },
        'oOJNL': 'fnjah@#$@khfh123231O0O0O%%324093240329443lkjbkjaf',
        'vYPHC': 'jxd.m.jd.com',
        'ZBioM': '*/*',
        'CFiPx': 'https://servicewechat.com/wx00b03a0e8ad4e15e/31/page-frame.html',
        'VAizC': 'application/x-www-form-urlencoded',
        'TfiYB': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.1(0x1800012a) NetType/WIFI Language/zh_CN',
        'AuAhD': function(_0x463101, _0x273336) {
            return _0x463101 === _0x273336;
        },
        'YNtPZ': 'retcode',
        'WeAkB': 'base',
        'BIIdw': 'HxPdx',
        'spNDd': 'PavxX',
        'sUTaN': function(_0x528065, _0x52d13a) {
            return _0x528065(_0x52d13a);
        },
        'HNvQi': 'bsYCu',
        'hxzyR': 'CbRYC',
        'bFfbY': function(_0xa3a6ba, _0xcec6a) {
            return _0xa3a6ba(_0xcec6a);
        },
        'bckDV': 'hBCYz',
        'SKJtS': 'TvweO',
        'avpBX': function(_0x33a037, _0x84ea5e) {
            return _0x33a037 !== _0x84ea5e;
        },
        'FWciS': 'phrbN',
        'IUrgu': 'bhSYc',
        'ACvTv': 'kdmro',
        'WfRLq': function(_0x165bc9, _0x5b785a, _0xa51f86) {
            return _0x165bc9(_0x5b785a, _0xa51f86);
        },
        'JPlID': 'getLotteryDetailsByActivityId'
    };
    return new Promise(_0x44f46f => {
        var _0x810e98 = {
            'gGsfn': function(_0x5adb14, _0x19f54e) {
                return _0xfd4038['BoPpf'](_0x5adb14, _0x19f54e);
            },
            'aQkcJ': function(_0x5d3c07, _0x202d01) {
                return _0xfd4038['ZauCl'](_0x5d3c07, _0x202d01);
            },
            'puLcA': _0xfd4038['oOJNL'],
            'AZiPJ': _0xfd4038['vYPHC'],
            'NQZZs': _0xfd4038['ZBioM'],
            'zlldX': _0xfd4038['CFiPx'],
            'HUHEN': _0xfd4038['VAizC'],
            'xGpsu': _0xfd4038['TfiYB'],
            'hRANk': function(_0x68520f, _0x58a381) {
                return _0xfd4038['AuAhD'](_0x68520f, _0x58a381);
            },
            'cAjCh': _0xfd4038['YNtPZ'],
            'RWZpK': _0xfd4038['WeAkB'],
            'sLWki': _0xfd4038['BIIdw'],
            'aylMy': _0xfd4038['spNDd'],
            'glzlb': function(_0x3c16fe, _0x330350) {
                return _0xfd4038['sUTaN'](_0x3c16fe, _0x330350);
            },
            'mJJvb': function(_0x260e5e, _0x3c3f70) {
                return _0xfd4038['AuAhD'](_0x260e5e, _0x3c3f70);
            },
            'YkwGr': _0xfd4038['HNvQi'],
            'JCFiY': _0xfd4038['hxzyR'],
            'ABgFb': function(_0x4a4650, _0x56ccde) {
                return _0xfd4038['bFfbY'](_0x4a4650, _0x56ccde);
            },
            'YzgXz': function(_0x4929fb, _0x25eba8) {
                return _0xfd4038['AuAhD'](_0x4929fb, _0x25eba8);
            },
            'nYJQY': _0xfd4038['bckDV'],
            'HmgQx': _0xfd4038['SKJtS'],
            'qqoUK': function(_0x4f4139, _0x68c6f9) {
                return _0xfd4038['avpBX'](_0x4f4139, _0x68c6f9);
            },
            'GdabU': _0xfd4038['FWciS'],
            'jmsDn': function(_0x36beff, _0x181997) {
                return _0xfd4038['AuAhD'](_0x36beff, _0x181997);
            },
            'JxPwJ': _0xfd4038['IUrgu'],
            'iCpKC': _0xfd4038['ACvTv']
        };
        $['post'](_0xfd4038['WfRLq'](taskPostUrl, _0xfd4038['JPlID'], 'activityId=' + _0x3932c6), async (_0x42f843, _0x62cbaf, _0x164943) => {
            var _0x14011c = {
                'REwMe': function(_0x37679d, _0x552a49) {
                    return _0x810e98['hRANk'](_0x37679d, _0x552a49);
                },
                'zYXCK': _0x810e98['cAjCh'],
                'VPRRp': _0x810e98['RWZpK']
            };
            try {
                if (_0x42f843) {
                    if (_0x810e98['hRANk'](_0x810e98['sLWki'], _0x810e98['aylMy'])) {
                        _0x164943 = JSON['parse'](_0x164943);
                        if (_0x14011c['REwMe'](_0x164943[_0x14011c['zYXCK']], 0xd)) {
                            $['isLogin'] = ![];
                            return;
                        }
                        if (_0x14011c['REwMe'](_0x164943[_0x14011c['zYXCK']], 0x0)) {
                            $['nickName'] = _0x164943[_0x14011c['VPRRp']]['nickname'];
                        } else {
                            $['nickName'] = $['UserName'];
                        }
                    } else {
                        console['log']('' + JSON['stringify'](_0x42f843));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                } else {
                    if (_0x810e98['glzlb'](safeGet, _0x164943)) {
                        _0x164943 = JSON['parse'](_0x164943);
                        if (_0x810e98['mJJvb'](_0x164943['returnCode'], 0xc8) && _0x164943['data']) {
                            if (_0x164943['data']['rewardsDuiBi']) {
                                if (_0x810e98['mJJvb'](_0x810e98['YkwGr'], _0x810e98['JCFiY'])) {
                                    console['log']('任务完成失败，' + _0x164943['returnMsg']);
                                } else {
                                    if (!_0x164943['data']['obtainDuiBi']) {
                                        console['log']('未中奖，去领取安慰兑币');
                                        await _0x810e98['ABgFb'](receiveOtherAwards, _0x3932c6);
                                    } else {
                                        if (_0x810e98['YzgXz'](_0x810e98['nYJQY'], _0x810e98['HmgQx'])) {
                                            if (!cookie['match'](/pt_key=([^; ]+)(?=;?)/)) console['log']('\n提示:你的cookie填写不规范,正确格式为: pt_key=xxx;pt_pin=xxx; 后面分号;不可少\n');
                                            let _0x46b9db = cookie['match'](/pt_key=([^; ]+)(?=;?)/)[0x1];
                                            let _0x104c04 = (+new Date())['toString']();
                                            let _0x4428c6 = $['md5'](_0x810e98['gGsfn'](_0x810e98['gGsfn'](_0x810e98['aQkcJ'](_0x46b9db, _0x810e98['puLcA']), function_id), _0x104c04));
                                            return {
                                                'url': '' + JD_API_HOST + function_id,
                                                'body': body,
                                                'headers': {
                                                    'Host': _0x810e98['AZiPJ'],
                                                    'pt-key': _0x46b9db,
                                                    'Accept': _0x810e98['NQZZs'],
                                                    'time': _0x104c04['toString'](),
                                                    'source': '1',
                                                    'Referer': _0x810e98['zlldX'],
                                                    'Content-Type': _0x810e98['HUHEN'],
                                                    'sig': _0x4428c6,
                                                    'User-Agent': _0x810e98['xGpsu']
                                                }
                                            };
                                        } else {
                                            console['log']('安慰兑币已领过');
                                        }
                                    }
                                }
                            } else {
                                console['log']('中奖了！！京豆已自动发放');
                            }
                        }
                    }
                }
            } catch (_0x48ad7b) {
                if (_0x810e98['qqoUK'](_0x810e98['GdabU'], _0x810e98['GdabU'])) {
                    console['log']('兑换失败，' + _0x164943['returnMsg']);
                } else {
                    $['logErr'](_0x48ad7b, _0x62cbaf);
                }
            } finally {
                if (_0x810e98['jmsDn'](_0x810e98['JxPwJ'], _0x810e98['iCpKC'])) {
                    exchangeFlag = process['env']['JD_JXD_EXCHANGE'] || exchangeFlag;
                } else {
                    _0x810e98['ABgFb'](_0x44f46f, _0x164943);
                }
            }
        });
    });
}

function receiveOtherAwards(_0x4de34e) {
    var _0x37570d = {
        'nmKnz': function(_0x333432, _0x58c8ca) {
            return _0x333432 + _0x58c8ca;
        },
        'GuhZM': function(_0xabe8fc, _0x164cd) {
            return _0xabe8fc + _0x164cd;
        },
        'iXScx': function(_0x6fc1e, _0x478279) {
            return _0x6fc1e >= _0x478279;
        },
        'SvHKw': function(_0x4b0ba4, _0x25468b) {
            return _0x4b0ba4 + _0x25468b;
        },
        'GNbKW': function(_0x249e20, _0x27797) {
            return _0x249e20 + _0x27797;
        },
        'kMQwi': function(_0x3210e4, _0x12f7d9) {
            return _0x3210e4 === _0x12f7d9;
        },
        'iRdNc': 'oAoMq',
        'Ufakt': function(_0x2ef40d, _0x403486) {
            return _0x2ef40d !== _0x403486;
        },
        'tKXNG': 'rQLcd',
        'mwpDN': 'lgsff',
        'GUsDr': function(_0x50e9ec, _0x23969e) {
            return _0x50e9ec(_0x23969e);
        },
        'OjwZR': 'MQGKJ',
        'cfOSN': 'pDhFw',
        'nBWDT': function(_0x2ef544, _0x4c996e) {
            return _0x2ef544 === _0x4c996e;
        },
        'AxvxV': 'VQIXu',
        'jKocl': 'gdcuz',
        'bCQpn': function(_0x52acde, _0x510e5e, _0x5d0934) {
            return _0x52acde(_0x510e5e, _0x5d0934);
        },
        'UUhAq': 'receiveOtherAwards'
    };
    return new Promise(_0x44860a => {
        $['post'](_0x37570d['bCQpn'](taskPostUrl, _0x37570d['UUhAq'], 'activityId=' + _0x4de34e + '&type=2'), async (_0x2075cf, _0x4073f1, _0x52b4c7) => {
            var _0x4c9d1a = {
                'VeJzV': function(_0x11412e, _0xe5585c) {
                    return _0x37570d['nmKnz'](_0x11412e, _0xe5585c);
                },
                'QfUEK': function(_0x547a32, _0x36e484) {
                    return _0x37570d['GuhZM'](_0x547a32, _0x36e484);
                },
                'OWnaA': function(_0x5f316b, _0x450bc8) {
                    return _0x37570d['iXScx'](_0x5f316b, _0x450bc8);
                },
                'VejeL': function(_0xe10639, _0x363380) {
                    return _0x37570d['SvHKw'](_0xe10639, _0x363380);
                },
                'SKZTq': function(_0x486ada, _0x34f422) {
                    return _0x37570d['GNbKW'](_0x486ada, _0x34f422);
                },
                'inazf': function(_0x25cd32, _0x39801f) {
                    return _0x37570d['iXScx'](_0x25cd32, _0x39801f);
                }
            };
            if (_0x37570d['kMQwi'](_0x37570d['iRdNc'], _0x37570d['iRdNc'])) {
                try {
                    if (_0x2075cf) {
                        if (_0x37570d['Ufakt'](_0x37570d['tKXNG'], _0x37570d['mwpDN'])) {
                            console['log']('' + JSON['stringify'](_0x2075cf));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            let _0x237b16;
                            if (time) {
                                _0x237b16 = new Date(time);
                            } else {
                                _0x237b16 = new Date();
                            }
                            return _0x4c9d1a['VeJzV'](_0x4c9d1a['QfUEK'](_0x4c9d1a['QfUEK'](_0x4c9d1a['OWnaA'](_0x4c9d1a['VejeL'](_0x237b16['getMonth'](), 0x1), 0xa) ? _0x4c9d1a['VejeL'](_0x237b16['getMonth'](), 0x1) : _0x4c9d1a['SKZTq']('0', _0x4c9d1a['SKZTq'](_0x237b16['getMonth'](), 0x1)), '月'), _0x4c9d1a['inazf'](_0x237b16['getDate'](), 0xa) ? _0x237b16['getDate']() : _0x4c9d1a['SKZTq']('0', _0x237b16['getDate']())), '日');
                        }
                    } else {
                        if (_0x37570d['GUsDr'](safeGet, _0x52b4c7)) {
                            if (_0x37570d['kMQwi'](_0x37570d['OjwZR'], _0x37570d['cfOSN'])) {
                                console['log']('当前运行时间：' + hour + '点，不满足' + vo['getDbTitle'] + '点签到任务条件');
                            } else {
                                _0x52b4c7 = JSON['parse'](_0x52b4c7);
                                console['log'](_0x52b4c7['returnMsg']);
                            }
                        }
                    }
                } catch (_0x479562) {
                    $['logErr'](_0x479562, _0x4073f1);
                } finally {
                    if (_0x37570d['nBWDT'](_0x37570d['AxvxV'], _0x37570d['jKocl'])) {
                        console['log']('' + JSON['stringify'](_0x2075cf));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        _0x37570d['GUsDr'](_0x44860a, _0x52b4c7);
                    }
                }
            } else {
                console['log']('' + JSON['stringify'](_0x2075cf));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            }
        });
    });
}

function exchange(_0x34ffe8 = 0x0) {
    var _0xe6ee14 = {
        'dOFXV': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'AgHCo': function(_0x403518, _0x3782ed) {
            return _0x403518 !== _0x3782ed;
        },
        'BRwvY': 'fCWBb',
        'Bkboh': function(_0x3bb981, _0x2abe6b) {
            return _0x3bb981(_0x2abe6b);
        },
        'qdxux': function(_0x211e60, _0x23b08a) {
            return _0x211e60 === _0x23b08a;
        },
        'cvKtG': 'IKajl',
        'mQGZL': 'wHTqP',
        'NufnB': function(_0xae6607, _0x5ee3cc) {
            return _0xae6607(_0x5ee3cc);
        },
        'pWDSN': function(_0x27b164, _0x638fb8, _0x50c195) {
            return _0x27b164(_0x638fb8, _0x50c195);
        },
        'QfrxZ': 'lotteryCodeConversion'
    };
    return new Promise(_0x47405e => {
        var _0x44dd2c = {
            'DxOVL': _0xe6ee14['dOFXV'],
            'liCSa': function(_0xcabfcb, _0x560984) {
                return _0xe6ee14['AgHCo'](_0xcabfcb, _0x560984);
            },
            'jFuMy': _0xe6ee14['BRwvY'],
            'LLIVI': function(_0x1bc7ef, _0x3c6a1d) {
                return _0xe6ee14['Bkboh'](_0x1bc7ef, _0x3c6a1d);
            },
            'AcQsK': function(_0x3230a2, _0x1b5fe4) {
                return _0xe6ee14['qdxux'](_0x3230a2, _0x1b5fe4);
            },
            'JaXUY': function(_0x7fdf8d, _0x1132fe) {
                return _0xe6ee14['qdxux'](_0x7fdf8d, _0x1132fe);
            },
            'sosgR': _0xe6ee14['cvKtG'],
            'IIGIC': _0xe6ee14['mQGZL'],
            'PUyFg': function(_0x306229, _0x3d108b) {
                return _0xe6ee14['NufnB'](_0x306229, _0x3d108b);
            }
        };
        $['post'](_0xe6ee14['pWDSN'](taskPostUrl, _0xe6ee14['QfrxZ'], 'taskId=4&codeCount=' + _0x34ffe8), async (_0x34ccdc, _0x3a3c7a, _0x2906c3) => {
            try {
                if (_0x34ccdc) {
                    if (_0x44dd2c['liCSa'](_0x44dd2c['jFuMy'], _0x44dd2c['jFuMy'])) {
                        console['log'](e);
                        $['msg']($['name'], '', _0x44dd2c['DxOVL']);
                        return [];
                    } else {
                        console['log']('' + JSON['stringify'](_0x34ccdc));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                } else {
                    if (_0x44dd2c['LLIVI'](safeGet, _0x2906c3)) {
                        _0x2906c3 = JSON['parse'](_0x2906c3);
                        if (_0x44dd2c['AcQsK'](_0x2906c3['returnCode'], 0xc8)) {
                            $['db'] += _0x2906c3['data']['taskDB'];
                            console['log']('兑换成功，获得 ' + _0x2906c3['data']['taskDB'] + ' 兑币');
                        } else {
                            console['log']('兑换失败，' + _0x2906c3['returnMsg']);
                        }
                    }
                }
            } catch (_0x652da0) {
                $['logErr'](_0x652da0, _0x3a3c7a);
            } finally {
                if (_0x44dd2c['JaXUY'](_0x44dd2c['sosgR'], _0x44dd2c['IIGIC'])) {
                    $['logErr'](e, _0x3a3c7a);
                } else {
                    _0x44dd2c['PUyFg'](_0x47405e, _0x2906c3);
                }
            }
        });
    });
}

function helpFriend(_0x15ed8b, _0x2ea8f8 = 'wddpzLSxORvLGo') {
    var _0x41bec3 = {
        'AYYse': function(_0x3c1447, _0x2ce933) {
            return _0x3c1447(_0x2ce933);
        },
        'vubdk': function(_0x50b0f1, _0xbb743b) {
            return _0x50b0f1 !== _0xbb743b;
        },
        'ykFvP': 'xOKfp',
        'dlVJa': function(_0x3b971f, _0x325e65) {
            return _0x3b971f !== _0x325e65;
        },
        'pDlFW': 'McbDP',
        'kmLHR': function(_0x1a5572, _0x5eb4f5) {
            return _0x1a5572(_0x5eb4f5);
        },
        'BvQAU': function(_0x3e2a90, _0x217a89) {
            return _0x3e2a90 === _0x217a89;
        },
        'mTyHO': 'bcyQH',
        'RThcU': 'XIqZD',
        'feWWM': function(_0x52ab56, _0xee4e0c) {
            return _0x52ab56(_0xee4e0c);
        },
        'rtnMi': function(_0x54039a, _0x241808) {
            return _0x54039a(_0x241808);
        },
        'GUVDF': function(_0x2fdac0, _0x20a673) {
            return _0x2fdac0(_0x20a673);
        },
        'ypguN': function(_0x598a78, _0x9b3af5, _0x4f0577) {
            return _0x598a78(_0x9b3af5, _0x4f0577);
        },
        'hekfs': 'helpFriend'
    };
    return new Promise(_0x1eb147 => {
        var _0x1ec12a = {
            'xFegI': function(_0x262aa8, _0x2ff1dd) {
                return _0x41bec3['rtnMi'](_0x262aa8, _0x2ff1dd);
            },
            'yfLpM': function(_0x198212, _0x29060d) {
                return _0x41bec3['GUVDF'](_0x198212, _0x29060d);
            },
            'AifeM': function(_0x10a3f7, _0x33aebf) {
                return _0x41bec3['BvQAU'](_0x10a3f7, _0x33aebf);
            }
        };
        $['post'](_0x41bec3['ypguN'](taskPostUrl, _0x41bec3['hekfs'], 'activityId=' + _0x15ed8b + '&inviteUserPin=' + _0x2ea8f8), async (_0x15a942, _0x61cab7, _0x1c2b33) => {
            var _0x2b07f4 = {
                'ZqhkJ': function(_0x3864cc, _0x5bbb76) {
                    return _0x41bec3['AYYse'](_0x3864cc, _0x5bbb76);
                }
            };
            try {
                if (_0x41bec3['vubdk'](_0x41bec3['ykFvP'], _0x41bec3['ykFvP'])) {
                    _0x1ec12a['xFegI'](_0x1eb147, _0x1c2b33);
                } else {
                    if (_0x15a942) {
                        if (_0x41bec3['dlVJa'](_0x41bec3['pDlFW'], _0x41bec3['pDlFW'])) {
                            _0x2b07f4['ZqhkJ'](_0x1eb147, _0x1c2b33);
                        } else {
                            console['log']('' + JSON['stringify'](_0x15a942));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        if (_0x41bec3['kmLHR'](safeGet, _0x1c2b33)) {
                            _0x1c2b33 = JSON['parse'](_0x1c2b33);
                            console['log'](_0x1c2b33['returnMsg']);
                        }
                    }
                }
            } catch (_0x3b5b03) {
                $['logErr'](_0x3b5b03, _0x61cab7);
            } finally {
                if (_0x41bec3['BvQAU'](_0x41bec3['mTyHO'], _0x41bec3['RThcU'])) {
                    if (_0x1ec12a['yfLpM'](safeGet, _0x1c2b33)) {
                        _0x1c2b33 = JSON['parse'](_0x1c2b33);
                        if (_0x1ec12a['AifeM'](_0x1c2b33['returnCode'], 0xc8)) {
                            console['log']('任务完成成功');
                        } else {
                            console['log']('任务完成失败，' + _0x1c2b33['returnMsg']);
                        }
                    }
                } else {
                    _0x41bec3['feWWM'](_0x1eb147, _0x1c2b33);
                }
            }
        });
    });
}

function getWelfareInfo() {
    var _0x4c72ce = {
        'KMsGE': function(_0x38e872, _0x1c0089) {
            return _0x38e872(_0x1c0089);
        },
        'DOtVX': function(_0x2d24ac, _0x47c5d7) {
            return _0x2d24ac === _0x47c5d7;
        },
        'RbaEG': 'YycSl',
        'dtCYS': function(_0x1dd3fc, _0x4043c2) {
            return _0x1dd3fc(_0x4043c2);
        },
        'stqpP': function(_0x1aead6, _0xefc9d) {
            return _0x1aead6 !== _0xefc9d;
        },
        'yiFFE': 'JZjxo',
        'AcwNH': 'WvoGU',
        'jJjUN': function(_0x499e8d, _0x1c651e) {
            return _0x499e8d === _0x1c651e;
        },
        'TLlEj': 'TMFkR',
        'HbHff': 'lqVHD',
        'bcigw': 'uJktC',
        'tVfLa': function(_0x363b59, _0x182b9c, _0x24180a) {
            return _0x363b59(_0x182b9c, _0x24180a);
        },
        'RMmul': 'yCYNt',
        'bxCyI': function(_0x318592, _0x271d0d) {
            return _0x318592(_0x271d0d);
        },
        'xHHxw': 'getWelfareInfo'
    };
    return new Promise(_0x47504c => {
        var _0xd05fbf = {
            'ZkQSg': function(_0x3163d2, _0x594426) {
                return _0x4c72ce['KMsGE'](_0x3163d2, _0x594426);
            },
            'xXoSq': function(_0x3f3131, _0x237350) {
                return _0x4c72ce['DOtVX'](_0x3f3131, _0x237350);
            },
            'zQzKD': _0x4c72ce['RbaEG'],
            'LJRZW': function(_0x3103d1, _0x1980fe) {
                return _0x4c72ce['dtCYS'](_0x3103d1, _0x1980fe);
            },
            'BuEhX': function(_0x47a5a4, _0x2838be) {
                return _0x4c72ce['DOtVX'](_0x47a5a4, _0x2838be);
            },
            'aCdto': function(_0x1a5690, _0x346065) {
                return _0x4c72ce['stqpP'](_0x1a5690, _0x346065);
            },
            'fAtzk': _0x4c72ce['yiFFE'],
            'WeiIS': _0x4c72ce['AcwNH'],
            'jNIgm': function(_0x58bf63, _0xf8b52a) {
                return _0x4c72ce['jJjUN'](_0x58bf63, _0xf8b52a);
            },
            'XVdeH': _0x4c72ce['TLlEj'],
            'DgFBL': _0x4c72ce['HbHff'],
            'SFqlb': function(_0x5ed1f1, _0x5870c1) {
                return _0x4c72ce['jJjUN'](_0x5ed1f1, _0x5870c1);
            },
            'jstop': _0x4c72ce['bcigw'],
            'QpSrz': function(_0x47ece6, _0x33d413, _0xd7901e) {
                return _0x4c72ce['tVfLa'](_0x47ece6, _0x33d413, _0xd7901e);
            },
            'TwEOk': _0x4c72ce['RMmul']
        };
        $['get'](_0x4c72ce['bxCyI'](taskUrl, _0x4c72ce['xHHxw']), async (_0x5420d3, _0x401d75, _0x455f5f) => {
            var _0x454c8e = {
                'pTndK': function(_0x133a00, _0x1b3a62) {
                    return _0xd05fbf['ZkQSg'](_0x133a00, _0x1b3a62);
                }
            };
            try {
                if (_0x5420d3) {
                    console['log']('' + JSON['stringify'](_0x5420d3));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0xd05fbf['xXoSq'](_0xd05fbf['zQzKD'], _0xd05fbf['zQzKD'])) {
                        if (_0xd05fbf['LJRZW'](safeGet, _0x455f5f)) {
                            _0x455f5f = JSON['parse'](_0x455f5f);
                            if (_0xd05fbf['BuEhX'](_0x455f5f['returnCode'], 0xc8) && _0x455f5f['data'] && _0x455f5f['data']['tjWelfare']) {
                                for (let _0x4914df of [..._0x455f5f['data']['tjWelfare'], ..._0x455f5f['data']['fxWelfare']]) {
                                    if (_0xd05fbf['aCdto'](_0xd05fbf['fAtzk'], _0xd05fbf['fAtzk'])) {
                                        console['log']('' + JSON['stringify'](_0x5420d3));
                                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                                    } else {
                                        if (_0x4914df['activityStatus']) {
                                            if (_0xd05fbf['aCdto'](_0xd05fbf['WeiIS'], _0xd05fbf['WeiIS'])) {
                                                _0x455f5f = JSON['parse'](_0x455f5f);
                                                console['log'](_0x455f5f['returnMsg']);
                                            } else {
                                                if (_0xd05fbf['jNIgm']($['index'], 0x1)) $['actList']['push'](_0x4914df['activityId']);
                                                if (_0x4914df['participationStatus']) {
                                                    if (_0xd05fbf['jNIgm'](_0xd05fbf['XVdeH'], _0xd05fbf['DgFBL'])) {
                                                        pinList['push'](_0x4914df['match'](/pt_pin=([^; ]+)(?=;?)/) && _0x4914df['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                                                    } else {
                                                        console['log']('【' + _0x4914df['prizeName'] + '】已参与，去检查任务列表');
                                                        await $['wait'](0x3e8);
                                                        await _0xd05fbf['LJRZW'](getTaskList, _0x4914df['activityId']);
                                                    }
                                                } else {
                                                    if (_0xd05fbf['SFqlb'](_0xd05fbf['jstop'], _0xd05fbf['jstop'])) {
                                                        console['log']('【' + _0x4914df['prizeName'] + '】未参与，去参与');
                                                        await _0xd05fbf['QpSrz'](sendLottery, _0x4914df['activityId'], 0x1);
                                                    } else {
                                                        console['log']('' + JSON['stringify'](_0x5420d3));
                                                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                                                    }
                                                }
                                                await $['wait'](0x3e8);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        console['log']('签到失败，' + _0x455f5f['returnMsg']);
                    }
                }
            } catch (_0xe74982) {
                if (_0xd05fbf['SFqlb'](_0xd05fbf['TwEOk'], _0xd05fbf['TwEOk'])) {
                    $['logErr'](_0xe74982, _0x401d75);
                } else {
                    _0x454c8e['pTndK'](_0x47504c, _0x455f5f);
                }
            } finally {
                _0xd05fbf['LJRZW'](_0x47504c, _0x455f5f);
            }
        });
    });
}

function sendLottery(_0x7c00bc, _0x358849) {
    var _0x484378 = {
        'FrMSi': function(_0x14bd45, _0x5a7799) {
            return _0x14bd45(_0x5a7799);
        },
        'VuJMm': function(_0xf1560b, _0x434169) {
            return _0xf1560b === _0x434169;
        },
        'YuFGO': 'oCDnP',
        'hfyBW': 'eJkFc',
        'wAWLa': function(_0x5d7236, _0x3e6a5b) {
            return _0x5d7236 !== _0x3e6a5b;
        },
        'gyuxq': 'BwlVl',
        'SsmJI': 'RZPLi',
        'wxUCy': 'QWdGb',
        'vruMs': function(_0x251045, _0x43608e) {
            return _0x251045(_0x43608e);
        },
        'nLBUh': 'false',
        'htudy': function(_0x2375b4, _0x5c22ab) {
            return _0x2375b4 !== _0x5c22ab;
        },
        'ONhIo': 'vadUs',
        'hPbJq': 'kpxMZ',
        'nqHME': function(_0x1ef771, _0x1bc8c8, _0x5d3690) {
            return _0x1ef771(_0x1bc8c8, _0x5d3690);
        },
        'cNCnO': 'sendLottery'
    };
    return new Promise(_0x2ef033 => {
        var _0x566e2f = {
            'IyBuu': function(_0x575fa2, _0x166ed9) {
                return _0x484378['FrMSi'](_0x575fa2, _0x166ed9);
            },
            'XjZyN': function(_0x30a0cc, _0x4540ea) {
                return _0x484378['VuJMm'](_0x30a0cc, _0x4540ea);
            },
            'JZjvv': function(_0x36aac9, _0x227f81) {
                return _0x484378['VuJMm'](_0x36aac9, _0x227f81);
            },
            'eFgwJ': _0x484378['YuFGO'],
            'cwNQs': _0x484378['hfyBW'],
            'aqMkN': function(_0x3613ca, _0x503447) {
                return _0x484378['FrMSi'](_0x3613ca, _0x503447);
            },
            'IabhR': function(_0x4c0f20, _0x29c162) {
                return _0x484378['wAWLa'](_0x4c0f20, _0x29c162);
            },
            'MNHzi': _0x484378['gyuxq'],
            'pemVs': _0x484378['SsmJI'],
            'rSDGG': _0x484378['wxUCy'],
            'PYpnT': function(_0x34df1f, _0x465ab2) {
                return _0x484378['vruMs'](_0x34df1f, _0x465ab2);
            },
            'OpwzV': function(_0x19aa1d, _0x4d492a) {
                return _0x484378['VuJMm'](_0x19aa1d, _0x4d492a);
            },
            'fLnFS': _0x484378['nLBUh']
        };
        if (_0x484378['htudy'](_0x484378['ONhIo'], _0x484378['hPbJq'])) {
            $['post'](_0x484378['nqHME'](taskPostUrl, _0x484378['cNCnO'], 'activityId=' + _0x7c00bc + '&type=' + _0x358849), async (_0x218fc0, _0x2b6733, _0x2fb480) => {
                var _0x31f5c5 = {
                    'hsUdA': function(_0x1f18ea, _0x5a5dbd) {
                        return _0x566e2f['IyBuu'](_0x1f18ea, _0x5a5dbd);
                    },
                    'QEwwg': function(_0x1d2ecf, _0x75196d) {
                        return _0x566e2f['XjZyN'](_0x1d2ecf, _0x75196d);
                    }
                };
                try {
                    if (_0x218fc0) {
                        console['log']('' + JSON['stringify'](_0x218fc0));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x566e2f['JZjvv'](_0x566e2f['eFgwJ'], _0x566e2f['cwNQs'])) {
                            console['log']('脚本不会将抽奖卷兑换为兑币');
                        } else {
                            if (_0x566e2f['aqMkN'](safeGet, _0x2fb480)) {
                                if (_0x566e2f['IabhR'](_0x566e2f['MNHzi'], _0x566e2f['MNHzi'])) {
                                    console['log']('任务领奖失败，' + _0x2fb480['returnMsg']);
                                } else {
                                    _0x2fb480 = JSON['parse'](_0x2fb480);
                                    console['log'](_0x2fb480['returnMsg']);
                                    if (_0x566e2f['JZjvv'](_0x2fb480['returnCode'], 0xc8)) {
                                        await $['wait'](0x3e8);
                                        await _0x566e2f['aqMkN'](getTaskList, _0x7c00bc);
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x3ae58f) {
                    if (_0x566e2f['IabhR'](_0x566e2f['pemVs'], _0x566e2f['rSDGG'])) {
                        $['logErr'](_0x3ae58f, _0x2b6733);
                    } else {
                        if (_0x31f5c5['hsUdA'](safeGet, _0x2fb480)) {
                            _0x2fb480 = JSON['parse'](_0x2fb480);
                            if (_0x31f5c5['QEwwg'](_0x2fb480['returnCode'], 0xc8)) {
                                $['db'] += _0x2fb480['data']['taskDB'];
                                console['log']('任务领奖成功，获得 ' + _0x2fb480['data']['taskDB'] + ' 兑币');
                            } else {
                                console['log']('任务领奖失败，' + _0x2fb480['returnMsg']);
                            }
                        }
                    }
                } finally {
                    _0x566e2f['PYpnT'](_0x2ef033, _0x2fb480);
                }
            });
        } else {
            Object['keys'](jdCookieNode)['forEach'](_0xefa85b => {
                cookiesArr['push'](jdCookieNode[_0xefa85b]);
            });
            if (process['env']['JD_DEBUG'] && _0x566e2f['OpwzV'](process['env']['JD_DEBUG'], _0x566e2f['fLnFS'])) console['log'] = () => {};
        }
    });
}

function getTaskList(_0x453ab8) {
    var _0x38ec9b = {
        'hUKBh': function(_0x3f5212) {
            return _0x3f5212();
        },
        'zulEa': function(_0x200f52, _0x48bcc9) {
            return _0x200f52 !== _0x48bcc9;
        },
        'uNUZT': 'TTzNL',
        'CRVNe': function(_0x6a25a6, _0x415735) {
            return _0x6a25a6(_0x415735);
        },
        'wTfAC': 'hPUwD',
        'MfoBG': function(_0x506214, _0x2c4163) {
            return _0x506214 === _0x2c4163;
        },
        'ybvAl': 'PWyKf',
        'dAbBv': 'upkzN',
        'xnoWA': function(_0x15ae60, _0x110637, _0x369602) {
            return _0x15ae60(_0x110637, _0x369602);
        },
        'WnOXC': 'Btqdu',
        'xDVQG': 'yZKCU',
        'VMqcP': function(_0xb88673, _0x3aaab1, _0x19ac8d) {
            return _0xb88673(_0x3aaab1, _0x19ac8d);
        },
        'ThQWE': 'getTaskList'
    };
    return new Promise(_0x5afef5 => {
        $['post'](_0x38ec9b['VMqcP'](taskPostUrl, _0x38ec9b['ThQWE'], 'activityId=' + _0x453ab8), async (_0x5d66ef, _0x2003a7, _0x40e532) => {
            var _0x5555d8 = {
                'NBAAd': function(_0x170eac) {
                    return _0x38ec9b['hUKBh'](_0x170eac);
                }
            };
            try {
                if (_0x5d66ef) {
                    console['log']('' + JSON['stringify'](_0x5d66ef));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x38ec9b['zulEa'](_0x38ec9b['uNUZT'], _0x38ec9b['uNUZT'])) {
                        _0x5555d8['NBAAd'](_0x5afef5);
                    } else {
                        if (_0x38ec9b['CRVNe'](safeGet, _0x40e532)) {
                            if (_0x38ec9b['zulEa'](_0x38ec9b['wTfAC'], _0x38ec9b['wTfAC'])) {
                                if ($['isNode']() && process['env']['JD_JXD_EXCHANGE']) {
                                    exchangeFlag = process['env']['JD_JXD_EXCHANGE'] || exchangeFlag;
                                }
                                _0x5555d8['NBAAd'](_0x5afef5);
                            } else {
                                _0x40e532 = JSON['parse'](_0x40e532);
                                if (_0x38ec9b['MfoBG'](_0x40e532['returnCode'], 0xc8)) {
                                    if (_0x38ec9b['zulEa'](_0x38ec9b['ybvAl'], _0x38ec9b['dAbBv'])) {
                                        for (let _0x17620 of _0x40e532['data']) {
                                            if (_0x38ec9b['MfoBG'](_0x17620['taskType'], 0x5) && !_0x17620['buttonAccomplishStatus']) {
                                                console['log']('观看视频广告任务未完成，去完成');
                                                await $['wait'](0x3e8);
                                                await _0x38ec9b['xnoWA'](fulfilTask, _0x453ab8, _0x17620['taskType']);
                                            }
                                        }
                                    } else {
                                        $['logErr'](e, _0x2003a7);
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (_0x37c3e3) {
                $['logErr'](_0x37c3e3, _0x2003a7);
            } finally {
                if (_0x38ec9b['MfoBG'](_0x38ec9b['WnOXC'], _0x38ec9b['xDVQG'])) {
                    $['logErr'](e, _0x2003a7);
                } else {
                    _0x38ec9b['CRVNe'](_0x5afef5, _0x40e532);
                }
            }
        });
    });
}

function fulfilTask(_0x82bcf, _0x3257c0) {
    var _0x4c7119 = {
        'KGWJJ': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'lares': function(_0x4d7f3a, _0x277361) {
            return _0x4d7f3a(_0x277361);
        },
        'ZFist': function(_0x3cabcc, _0x5cf325) {
            return _0x3cabcc !== _0x5cf325;
        },
        'SVQgx': 'dOHne',
        'lBVXT': 'eQNxS',
        'Iysut': 'FcwGI',
        'XLEOG': function(_0x278cb9, _0x3486d5) {
            return _0x278cb9 !== _0x3486d5;
        },
        'cVHzd': 'GkrBQ',
        'EBFNP': function(_0x5356db, _0x2fd54d) {
            return _0x5356db(_0x2fd54d);
        },
        'hhdXN': 'OUFmD',
        'aHnCg': 'qnfRs',
        'LITSR': function(_0x574a0e, _0x2a4bd1) {
            return _0x574a0e === _0x2a4bd1;
        },
        'wLuLL': 'qhwMm',
        'rOXKu': 'txAXG',
        'QacVb': 'OkQhZ',
        'JLDiR': function(_0x38d928, _0x70d6f6) {
            return _0x38d928 !== _0x70d6f6;
        },
        'LCIPl': 'bJOMd',
        'CygWA': 'Wtcaa',
        'lkFxt': function(_0x3ab0f2, _0x3b6eec, _0xd76c73) {
            return _0x3ab0f2(_0x3b6eec, _0xd76c73);
        },
        'xuxsP': 'fulfilTask'
    };
    return new Promise(_0x5d314f => {
        var _0x19b7d1 = {
            'ehpKM': _0x4c7119['KGWJJ'],
            'kQoQb': function(_0x49085e, _0x4b7de1) {
                return _0x4c7119['lares'](_0x49085e, _0x4b7de1);
            },
            'umqjo': function(_0x328cc5, _0x108330) {
                return _0x4c7119['ZFist'](_0x328cc5, _0x108330);
            },
            'oucQk': _0x4c7119['SVQgx'],
            'fBIkB': function(_0x412b11, _0x4d6379) {
                return _0x4c7119['ZFist'](_0x412b11, _0x4d6379);
            },
            'UaKSN': _0x4c7119['lBVXT'],
            'SDzno': _0x4c7119['Iysut'],
            'ewFLp': function(_0x55fa86, _0x362f10) {
                return _0x4c7119['XLEOG'](_0x55fa86, _0x362f10);
            },
            'AjJbZ': _0x4c7119['cVHzd'],
            'rMaVd': function(_0x1f0abe, _0x5ca775) {
                return _0x4c7119['EBFNP'](_0x1f0abe, _0x5ca775);
            },
            'LAVkb': _0x4c7119['hhdXN'],
            'IkfkU': _0x4c7119['aHnCg'],
            'MovrE': function(_0x15c000, _0x56aa35) {
                return _0x4c7119['LITSR'](_0x15c000, _0x56aa35);
            },
            'ttzBP': _0x4c7119['wLuLL'],
            'KrgDz': _0x4c7119['rOXKu'],
            'yKRVo': _0x4c7119['QacVb'],
            'sYySG': function(_0x4f60ce, _0x8b9397) {
                return _0x4c7119['EBFNP'](_0x4f60ce, _0x8b9397);
            }
        };
        if (_0x4c7119['JLDiR'](_0x4c7119['LCIPl'], _0x4c7119['CygWA'])) {
            $['post'](_0x4c7119['lkFxt'](taskPostUrl, _0x4c7119['xuxsP'], 'activityId=' + _0x82bcf + '&taskType=' + _0x3257c0), async (_0x22203c, _0x1adda6, _0x4e9468) => {
                if (_0x19b7d1['umqjo'](_0x19b7d1['oucQk'], _0x19b7d1['oucQk'])) {
                    $['logErr'](e, _0x1adda6);
                } else {
                    try {
                        if (_0x19b7d1['fBIkB'](_0x19b7d1['UaKSN'], _0x19b7d1['SDzno'])) {
                            if (_0x22203c) {
                                if (_0x19b7d1['ewFLp'](_0x19b7d1['AjJbZ'], _0x19b7d1['AjJbZ'])) {
                                    $['db'] += _0x4e9468['data']['taskDB'];
                                    console['log']('任务领奖成功，获得 ' + _0x4e9468['data']['taskDB'] + ' 兑币');
                                } else {
                                    console['log']('' + JSON['stringify'](_0x22203c));
                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                }
                            } else {
                                if (_0x19b7d1['rMaVd'](safeGet, _0x4e9468)) {
                                    if (_0x19b7d1['ewFLp'](_0x19b7d1['LAVkb'], _0x19b7d1['IkfkU'])) {
                                        _0x4e9468 = JSON['parse'](_0x4e9468);
                                        console['log'](_0x4e9468['returnMsg']);
                                    } else {
                                        date = new Date(time);
                                    }
                                }
                            }
                        } else {
                            cookiesArr['push'](jdCookieNode[item]);
                        }
                    } catch (_0x32c6cf) {
                        if (_0x19b7d1['MovrE'](_0x19b7d1['ttzBP'], _0x19b7d1['ttzBP'])) {
                            $['logErr'](_0x32c6cf, _0x1adda6);
                        } else {
                            try {
                                return JSON['parse'](str);
                            } catch (_0x419abe) {
                                console['log'](_0x419abe);
                                $['msg']($['name'], '', _0x19b7d1['ehpKM']);
                                return [];
                            }
                        }
                    } finally {
                        if (_0x19b7d1['ewFLp'](_0x19b7d1['KrgDz'], _0x19b7d1['yKRVo'])) {
                            _0x19b7d1['sYySG'](_0x5d314f, _0x4e9468);
                        } else {
                            _0x19b7d1['kQoQb'](_0x5d314f, _0x4e9468);
                        }
                    }
                }
            });
        } else {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' API请求失败，请检查网路重试');
        }
    });
}

function getUserInfo() {
    var _0x5e9de1 = {
        'VDJbG': function(_0x3f19ae) {
            return _0x3f19ae();
        },
        'SWNTC': function(_0x370091, _0xea727d) {
            return _0x370091 !== _0xea727d;
        },
        'YJWNk': 'EwVAx',
        'RIHlj': 'DWbFl',
        'OSDep': function(_0x363d1f, _0x2fffea) {
            return _0x363d1f === _0x2fffea;
        },
        'ytNBm': 'JPZuY',
        'FEAaQ': function(_0x1d7b9a, _0x4dfdda) {
            return _0x1d7b9a(_0x4dfdda);
        },
        'yGkqO': 'fuqJS',
        'hLxJC': 'kwJyA',
        'bwVyX': function(_0x121f46, _0x24d9ce) {
            return _0x121f46(_0x24d9ce);
        },
        'BEnyj': 'getIntegralRanking'
    };
    return new Promise(_0x4f2578 => {
        var _0x411dac = {
            'ZWYxx': function(_0x171852) {
                return _0x5e9de1['VDJbG'](_0x171852);
            },
            'zXpgm': function(_0x398fee, _0x39af3f) {
                return _0x5e9de1['SWNTC'](_0x398fee, _0x39af3f);
            },
            'MxErD': _0x5e9de1['YJWNk'],
            'YWfwM': _0x5e9de1['RIHlj'],
            'bSHtX': function(_0x4e94d6, _0x2c3c09) {
                return _0x5e9de1['OSDep'](_0x4e94d6, _0x2c3c09);
            },
            'fPfDg': _0x5e9de1['ytNBm'],
            'mWUbN': function(_0x424488, _0xae7c0) {
                return _0x5e9de1['FEAaQ'](_0x424488, _0xae7c0);
            },
            'yvRxf': function(_0xab6509, _0xa64d75) {
                return _0x5e9de1['OSDep'](_0xab6509, _0xa64d75);
            },
            'CiUZN': function(_0x544d3e, _0x3f524e) {
                return _0x5e9de1['OSDep'](_0x544d3e, _0x3f524e);
            },
            'zRjJM': _0x5e9de1['yGkqO'],
            'pbFlA': _0x5e9de1['hLxJC'],
            'rgZZK': function(_0x51f4a6, _0x51df45) {
                return _0x5e9de1['bwVyX'](_0x51f4a6, _0x51df45);
            }
        };
        $['get'](_0x5e9de1['bwVyX'](taskUrl, _0x5e9de1['BEnyj']), async (_0x1c884e, _0x1d487e, _0x452a96) => {
            var _0xc13f5a = {
                'nnCrB': function(_0x4cf488) {
                    return _0x411dac['ZWYxx'](_0x4cf488);
                }
            };
            if (_0x411dac['zXpgm'](_0x411dac['MxErD'], _0x411dac['YWfwM'])) {
                try {
                    if (_0x1c884e) {
                        console['log']('' + JSON['stringify'](_0x1c884e));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x411dac['bSHtX'](_0x411dac['fPfDg'], _0x411dac['fPfDg'])) {
                            if (_0x411dac['mWUbN'](safeGet, _0x452a96)) {
                                _0x452a96 = JSON['parse'](_0x452a96);
                                if (_0x411dac['yvRxf'](_0x452a96['returnCode'], 0xc8)) {
                                    if (_0x411dac['CiUZN'](_0x411dac['zRjJM'], _0x411dac['pbFlA'])) {
                                        $['logErr'](e, _0x1d487e);
                                    } else {
                                        console['log']('当前兑币：' + _0x452a96['data']['dbAmount']['replace'](/,/g, ''));
                                    }
                                }
                            }
                        } else {
                            console['log']('安慰兑币已领过');
                        }
                    }
                } catch (_0x427050) {
                    $['logErr'](_0x427050, _0x1d487e);
                } finally {
                    _0x411dac['rgZZK'](_0x4f2578, _0x452a96);
                }
            } else {
                _0xc13f5a['nnCrB'](_0x4f2578);
            }
        });
    });
}

function sign(_0x184cd3 = 'wddpzLSxORvLGo') {
    var _0x24769a = {
        'VVovK': function(_0x18309e, _0x2fc292) {
            return _0x18309e === _0x2fc292;
        },
        'fnIjS': function(_0x318ae5, _0x1f4990) {
            return _0x318ae5(_0x1f4990);
        },
        'kpcQg': function(_0x226854, _0x1d4281) {
            return _0x226854 == _0x1d4281;
        },
        'OiKYP': 'string',
        'CvsNt': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'YHkjI': 'lotteryTime',
        'LXSCQ': 'prizeName',
        'nvnYq': function(_0xe29373, _0x990a83) {
            return _0xe29373 !== _0x990a83;
        },
        'XfKkU': function(_0x181016, _0x491422) {
            return _0x181016 === _0x491422;
        },
        'MXwcO': 'OziZk',
        'dCLwW': function(_0x48be6f, _0x5be42b) {
            return _0x48be6f !== _0x5be42b;
        },
        'VOgvg': 'YXAaa',
        'iyKOJ': function(_0x352285, _0x43776d) {
            return _0x352285 === _0x43776d;
        },
        'RPqbG': 'IqNOD',
        'fGJlG': 'QuMiA',
        'oWJOr': 'zKZii',
        'gqwCd': 'hRSKw',
        'jJXOg': 'tzjFh',
        'WkJgC': function(_0x179452, _0x4bb07f, _0x32ee1d) {
            return _0x179452(_0x4bb07f, _0x32ee1d);
        },
        'gNbGv': 'jxdSignIn',
        'KtaDz': function(_0x318fec, _0x2953bf) {
            return _0x318fec * _0x2953bf;
        }
    };
    _0x184cd3 = shareCodes[Math['floor'](_0x24769a['KtaDz'](Math['random'](), shareCodes['length']))];
    return new Promise(_0x461531 => {
        var _0x50e7cc = {
            'LWTEC': function(_0x15049f, _0xcef00d) {
                return _0x24769a['VVovK'](_0x15049f, _0xcef00d);
            },
            'ePirv': function(_0x196d0f, _0x1d4567) {
                return _0x24769a['fnIjS'](_0x196d0f, _0x1d4567);
            },
            'vYLtb': function(_0x119068, _0x5cdada) {
                return _0x24769a['kpcQg'](_0x119068, _0x5cdada);
            },
            'DkrTq': _0x24769a['OiKYP'],
            'JmJGT': _0x24769a['CvsNt'],
            'tQdyT': _0x24769a['YHkjI'],
            'bMhiW': _0x24769a['LXSCQ'],
            'RzhNS': function(_0x2c2273, _0x17c6ce) {
                return _0x24769a['nvnYq'](_0x2c2273, _0x17c6ce);
            },
            'IFPwZ': function(_0x5c5c32, _0x28ac19) {
                return _0x24769a['XfKkU'](_0x5c5c32, _0x28ac19);
            },
            'pqYud': function(_0xa95315, _0x44ae7d) {
                return _0x24769a['nvnYq'](_0xa95315, _0x44ae7d);
            },
            'JZSwL': _0x24769a['MXwcO'],
            'MqThw': function(_0x1e6346, _0x1d084d) {
                return _0x24769a['dCLwW'](_0x1e6346, _0x1d084d);
            },
            'SweiM': _0x24769a['VOgvg'],
            'svnby': function(_0x416591, _0x171764) {
                return _0x24769a['iyKOJ'](_0x416591, _0x171764);
            },
            'BmhTU': _0x24769a['RPqbG'],
            'wZNCy': function(_0x419bde, _0x4acdb0) {
                return _0x24769a['fnIjS'](_0x419bde, _0x4acdb0);
            },
            'ekbAj': _0x24769a['fGJlG'],
            'ineHg': function(_0x3919be, _0x235757) {
                return _0x24769a['iyKOJ'](_0x3919be, _0x235757);
            },
            'CGyXN': function(_0x62b956, _0x21d759) {
                return _0x24769a['dCLwW'](_0x62b956, _0x21d759);
            },
            'bWBQP': _0x24769a['oWJOr'],
            'Pjrpt': _0x24769a['gqwCd'],
            'AtNvH': function(_0x2ada76, _0x5246ba) {
                return _0x24769a['fnIjS'](_0x2ada76, _0x5246ba);
            }
        };
        if (_0x24769a['dCLwW'](_0x24769a['jJXOg'], _0x24769a['jJXOg'])) {
            data = JSON['parse'](data);
            if (_0x50e7cc['LWTEC'](data['returnCode'], 0xc8)) {
                $['db'] += data['data']['taskDB'];
                console['log']('任务领奖成功，获得 ' + data['data']['taskDB'] + ' 兑币');
            } else {
                console['log']('任务领奖失败，' + data['returnMsg']);
            }
        } else {
            $['post'](_0x24769a['WkJgC'](taskPostUrl, _0x24769a['gNbGv'], 'inviterUserPin=' + _0x184cd3), async (_0x398ced, _0x30ef48, _0x32f4be) => {
                if (_0x50e7cc['pqYud'](_0x50e7cc['JZSwL'], _0x50e7cc['JZSwL'])) {
                    console['log']('' + JSON['stringify'](_0x398ced));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    try {
                        if (_0x50e7cc['MqThw'](_0x50e7cc['SweiM'], _0x50e7cc['SweiM'])) {
                            _0x50e7cc['ePirv'](_0x461531, _0x32f4be);
                        } else {
                            if (_0x398ced) {
                                if (_0x50e7cc['svnby'](_0x50e7cc['BmhTU'], _0x50e7cc['BmhTU'])) {
                                    console['log']('' + JSON['stringify'](_0x398ced));
                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                } else {
                                    if (_0x50e7cc['vYLtb'](typeof str, _0x50e7cc['DkrTq'])) {
                                        try {
                                            return JSON['parse'](str);
                                        } catch (_0x1b6c79) {
                                            console['log'](_0x1b6c79);
                                            $['msg']($['name'], '', _0x50e7cc['JmJGT']);
                                            return [];
                                        }
                                    }
                                }
                            } else {
                                if (_0x50e7cc['wZNCy'](safeGet, _0x32f4be)) {
                                    if (_0x50e7cc['MqThw'](_0x50e7cc['ekbAj'], _0x50e7cc['ekbAj'])) {
                                        for (let _0x16ab05 of $['MyWinningInformation']) {
                                            message += _0x16ab05[_0x50e7cc['tQdyT']] + '已中奖 【' + _0x16ab05[_0x50e7cc['bMhiW']] + '】\x0a';
                                        }
                                        allMessage += '京东账号' + $['index'] + $['nickName'] + '\x0a' + message + (_0x50e7cc['RzhNS']($['index'], cookiesArr['length']) ? '\x0a\x0a' : '');
                                    } else {
                                        _0x32f4be = JSON['parse'](_0x32f4be);
                                        if (_0x50e7cc['ineHg'](_0x32f4be['returnCode'], 0xc8)) {
                                            if (_0x50e7cc['CGyXN'](_0x50e7cc['bWBQP'], _0x50e7cc['Pjrpt'])) {
                                                $['db'] += _0x32f4be['data']['acquireDB'];
                                                console['log']('签到成功，获得 ' + _0x32f4be['data']['acquireDB'] + ' 兑币');
                                            } else {
                                                if (_0x50e7cc['ePirv'](safeGet, _0x32f4be)) {
                                                    _0x32f4be = JSON['parse'](_0x32f4be);
                                                    if (_0x50e7cc['IFPwZ'](_0x32f4be['returnCode'], 0xc8)) {
                                                        $['db'] += _0x32f4be['data']['taskDB'];
                                                        console['log']('任务领奖成功，获得 ' + _0x32f4be['data']['taskDB'] + ' 兑币');
                                                    } else {
                                                        console['log']('任务领奖失败，' + _0x32f4be['returnMsg']);
                                                    }
                                                }
                                            }
                                        } else {
                                            console['log']('签到失败，' + _0x32f4be['returnMsg']);
                                        }
                                    }
                                }
                            }
                        }
                    } catch (_0x4aa0bc) {
                        $['logErr'](_0x4aa0bc, _0x30ef48);
                    } finally {
                        _0x50e7cc['AtNvH'](_0x461531, _0x32f4be);
                    }
                }
            });
        }
    });
}

function awardRun() {
    var _0xf1888 = {
        'TQEcv': function(_0x36c1b8, _0x2ec2eb) {
            return _0x36c1b8 == _0x2ec2eb;
        },
        'qYvIU': 'object',
        'OTcev': function(_0x2d0b2c, _0x4cbbb4) {
            return _0x2d0b2c === _0x4cbbb4;
        },
        'YXvFI': 'xnmra',
        'RxnPO': 'BZKEI',
        'JZTXi': function(_0x4fc729, _0x2c44e4) {
            return _0x4fc729 === _0x2c44e4;
        },
        'VTjym': 'xxLkB',
        'gNgHy': function(_0x1b8bef, _0x291073) {
            return _0x1b8bef !== _0x291073;
        },
        'ourBh': 'mnRVS',
        'hLLDZ': 'ixEYL',
        'nQGzb': function(_0x2af415, _0x458334) {
            return _0x2af415(_0x458334);
        },
        'jOvOq': function(_0x114f44, _0x297ef7) {
            return _0x114f44 === _0x297ef7;
        },
        'wwkwE': 'MqxKz',
        'xwYbN': function(_0x1a8cb4, _0x263b9) {
            return _0x1a8cb4 === _0x263b9;
        },
        'HYhLs': 'dVnRr',
        'IpraU': 'DXJZR',
        'hSitc': 'lotteryTime',
        'usvGZ': 'prizeName',
        'yClaD': function(_0x490c66, _0x1b092b, _0x515de8) {
            return _0x490c66(_0x1b092b, _0x515de8);
        },
        'tHqDY': 'jxdGetTaskAward',
        'suPHu': function(_0x59bcb6, _0x3b7f59) {
            return _0x59bcb6 + _0x3b7f59;
        },
        'DVPEF': function(_0x15cb9b, _0x44de7e) {
            return _0x15cb9b * _0x44de7e;
        }
    };
    return new Promise(_0x4d6499 => {
        var _0x356b92 = {
            'thoah': _0xf1888['hSitc'],
            'MsFoD': _0xf1888['usvGZ']
        };
        $['post'](_0xf1888['yClaD'](taskPostUrl, _0xf1888['tHqDY'], 'taskId=3&walk=' + _0xf1888['suPHu'](Math['floor'](_0xf1888['DVPEF'](Math['random'](), 0x1388)), 0x4a38)), async (_0x56e69a, _0x5b5ded, _0x274382) => {
            var _0x302778 = {
                'PWYgZ': function(_0x2427d5, _0x10520c) {
                    return _0xf1888['TQEcv'](_0x2427d5, _0x10520c);
                },
                'OJtQI': _0xf1888['qYvIU']
            };
            try {
                if (_0xf1888['OTcev'](_0xf1888['YXvFI'], _0xf1888['RxnPO'])) {
                    $['logErr'](e, _0x5b5ded);
                } else {
                    if (_0x56e69a) {
                        if (_0xf1888['JZTXi'](_0xf1888['VTjym'], _0xf1888['VTjym'])) {
                            console['log']('' + JSON['stringify'](_0x56e69a));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            return !![];
                        }
                    } else {
                        if (_0xf1888['gNgHy'](_0xf1888['ourBh'], _0xf1888['hLLDZ'])) {
                            if (_0xf1888['nQGzb'](safeGet, _0x274382)) {
                                if (_0xf1888['jOvOq'](_0xf1888['wwkwE'], _0xf1888['wwkwE'])) {
                                    _0x274382 = JSON['parse'](_0x274382);
                                    if (_0xf1888['jOvOq'](_0x274382['returnCode'], 0xc8)) {
                                        if (_0xf1888['xwYbN'](_0xf1888['HYhLs'], _0xf1888['IpraU'])) {
                                            if (_0x302778['PWYgZ'](typeof JSON['parse'](_0x274382), _0x302778['OJtQI'])) {
                                                return !![];
                                            }
                                        } else {
                                            $['db'] += _0x274382['data']['taskDB'];
                                            console['log']('任务领奖成功，获得 ' + _0x274382['data']['taskDB'] + ' 兑币');
                                        }
                                    } else {
                                        console['log']('任务领奖失败，' + _0x274382['returnMsg']);
                                    }
                                } else {
                                    console['log']('中奖了！！京豆已自动发放');
                                }
                            }
                        } else {
                            $['log'](vo[_0x356b92['thoah']] + '已中奖 【' + vo[_0x356b92['MsFoD']] + '】');
                        }
                    }
                }
            } catch (_0x2156da) {
                $['logErr'](_0x2156da, _0x5b5ded);
            } finally {
                _0xf1888['nQGzb'](_0x4d6499, _0x274382);
            }
        });
    });
}

function accomplishTask(_0x330b2a = 0x1f5) {
    var _0x185b55 = {
        'PphKB': function(_0x107e9c, _0x9de4a7) {
            return _0x107e9c === _0x9de4a7;
        },
        'mjkAR': 'qBjUM',
        'FdQGO': 'jGGpY',
        'YQGRL': function(_0x5f20dc, _0x17624b) {
            return _0x5f20dc(_0x17624b);
        },
        'Yhuol': function(_0x1e131d, _0x1fb9f0) {
            return _0x1e131d === _0x1fb9f0;
        },
        'rcNBZ': function(_0x15cb4c, _0x139fbb) {
            return _0x15cb4c(_0x139fbb);
        },
        'wOQlU': function(_0x5e26d5, _0xc7fd86, _0x1c784c) {
            return _0x5e26d5(_0xc7fd86, _0x1c784c);
        },
        'EUWlk': 'jxdTaskAccomplish'
    };
    return new Promise(_0x104913 => {
        var _0x1e67c4 = {
            'sbvxv': function(_0x1e2132, _0x5375f1) {
                return _0x185b55['PphKB'](_0x1e2132, _0x5375f1);
            },
            'YYfNL': _0x185b55['mjkAR'],
            'SmBTu': _0x185b55['FdQGO'],
            'doJiB': function(_0x7a93a3, _0x143fab) {
                return _0x185b55['YQGRL'](_0x7a93a3, _0x143fab);
            },
            'ZDbPh': function(_0x8ce00c, _0x5b4161) {
                return _0x185b55['Yhuol'](_0x8ce00c, _0x5b4161);
            },
            'KtzZw': function(_0x16bfd0, _0x28eb9c) {
                return _0x185b55['rcNBZ'](_0x16bfd0, _0x28eb9c);
            }
        };
        $['post'](_0x185b55['wOQlU'](taskPostUrl, _0x185b55['EUWlk'], 'taskId=' + _0x330b2a), async (_0xd8ada, _0x3ad2dc, _0x3fda32) => {
            if (_0x1e67c4['sbvxv'](_0x1e67c4['YYfNL'], _0x1e67c4['SmBTu'])) {
                $['logErr'](e, _0x3ad2dc);
            } else {
                try {
                    if (_0xd8ada) {
                        console['log']('' + JSON['stringify'](_0xd8ada));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x1e67c4['doJiB'](safeGet, _0x3fda32)) {
                            _0x3fda32 = JSON['parse'](_0x3fda32);
                            if (_0x1e67c4['ZDbPh'](_0x3fda32['returnCode'], 0xc8)) {
                                console['log']('任务完成成功');
                            } else {
                                console['log']('任务完成失败，' + _0x3fda32['returnMsg']);
                            }
                        }
                    }
                } catch (_0x5887d4) {
                    $['logErr'](_0x5887d4, _0x3ad2dc);
                } finally {
                    _0x1e67c4['KtzZw'](_0x104913, _0x3fda32);
                }
            }
        });
    });
}

function awardTask(_0x4b6d8f = 0x1f5) {
    var _0x7246f0 = {
        'WHGsU': function(_0x4a2740, _0x8426a1) {
            return _0x4a2740 !== _0x8426a1;
        },
        'ZsvaR': 'SaHBD',
        'pOcJs': 'rSiid',
        'bYvOu': function(_0x58b414, _0x9e64ea) {
            return _0x58b414(_0x9e64ea);
        },
        'IBuUj': 'vNvUD',
        'zfFIh': 'BlOJy',
        'Futou': function(_0x831928, _0x49dabf) {
            return _0x831928 === _0x49dabf;
        },
        'SaSli': function(_0x135335, _0x436988) {
            return _0x135335 === _0x436988;
        },
        'SRZun': 'CtrTm',
        'Fxibw': 'SDsGA',
        'MHHWX': function(_0x331bcb, _0x5cf311) {
            return _0x331bcb(_0x5cf311);
        },
        'jjnET': function(_0x2bb72b, _0x5e04e1, _0x4cc73e) {
            return _0x2bb72b(_0x5e04e1, _0x4cc73e);
        },
        'nnIWc': 'jxdGetTaskAward'
    };
    return new Promise(_0x5114ff => {
        var _0x24bd21 = {
            'MBGxU': function(_0x4c8dbc, _0x53c4bd) {
                return _0x7246f0['WHGsU'](_0x4c8dbc, _0x53c4bd);
            },
            'ocQIo': _0x7246f0['ZsvaR'],
            'aKnHj': _0x7246f0['pOcJs'],
            'wtVVV': function(_0x391612, _0x5f146) {
                return _0x7246f0['bYvOu'](_0x391612, _0x5f146);
            },
            'PacMn': _0x7246f0['IBuUj'],
            'xKtET': _0x7246f0['zfFIh'],
            'SKXqb': function(_0xc790c6, _0x2a3ac8) {
                return _0x7246f0['Futou'](_0xc790c6, _0x2a3ac8);
            },
            'enDEb': function(_0x558ed0, _0x1df74a) {
                return _0x7246f0['SaSli'](_0x558ed0, _0x1df74a);
            },
            'QwzCb': _0x7246f0['SRZun'],
            'GEHUP': _0x7246f0['Fxibw'],
            'YsKpH': function(_0xba8039, _0x12b7c1) {
                return _0x7246f0['MHHWX'](_0xba8039, _0x12b7c1);
            }
        };
        $['post'](_0x7246f0['jjnET'](taskPostUrl, _0x7246f0['nnIWc'], 'taskId=' + _0x4b6d8f), async (_0x376672, _0x5a3151, _0x370043) => {
            if (_0x24bd21['MBGxU'](_0x24bd21['ocQIo'], _0x24bd21['aKnHj'])) {
                try {
                    if (_0x376672) {
                        console['log']('' + JSON['stringify'](_0x376672));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x24bd21['wtVVV'](safeGet, _0x370043)) {
                            if (_0x24bd21['MBGxU'](_0x24bd21['PacMn'], _0x24bd21['xKtET'])) {
                                _0x370043 = JSON['parse'](_0x370043);
                                if (_0x24bd21['SKXqb'](_0x370043['returnCode'], 0xc8)) {
                                    $['db'] += _0x370043['data']['taskDB'];
                                    console['log']('任务领奖成功，获得 ' + _0x370043['data']['taskDB'] + ' 兑币');
                                } else {
                                    if (_0x24bd21['enDEb'](_0x24bd21['QwzCb'], _0x24bd21['GEHUP'])) {
                                        console['log']('' + JSON['stringify'](_0x376672));
                                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                                    } else {
                                        console['log']('任务领奖失败，' + _0x370043['returnMsg']);
                                    }
                                }
                            } else {
                                _0x370043 = JSON['parse'](_0x370043);
                                console['log'](_0x370043['returnMsg']);
                            }
                        }
                    }
                } catch (_0x47547d) {
                    $['logErr'](_0x47547d, _0x5a3151);
                } finally {
                    _0x24bd21['YsKpH'](_0x5114ff, _0x370043);
                }
            } else {
                console['log']('当前兑币：' + _0x370043['data']['dbAmount']['replace'](/,/g, ''));
            }
        });
    });
}

function getMyWinningInformation() {
    var _0x1a8f91 = {
        'vFJPJ': function(_0x21a8fe, _0x36c037) {
            return _0x21a8fe !== _0x36c037;
        },
        'JBWWz': 'dizVW',
        'ibbZr': function(_0x242b5f, _0x411703) {
            return _0x242b5f === _0x411703;
        },
        'zYchN': 'EJlcd',
        'OlmSb': function(_0x1e3ff6, _0x2fe720) {
            return _0x1e3ff6(_0x2fe720);
        },
        'Tnadz': 'returnCode',
        'QTJtt': 'data',
        'lZvjg': 'lotteryTime',
        'PECQq': 'prizeName',
        'oEysu': function(_0x4277f7, _0x234464) {
            return _0x4277f7 !== _0x234464;
        },
        'PSvzo': 'cyFTe',
        'ncyvE': 'WOUYR',
        'mHKOs': 'vBvhn',
        'uDwkL': function(_0x115928) {
            return _0x115928();
        },
        'shvGd': function(_0x86e141, _0x1db3b9) {
            return _0x86e141(_0x1db3b9);
        },
        'rIhhV': 'getMyWinningInformation'
    };
    $['MyWinningInformation'] = [];
    return new Promise(_0x5d6c3b => {
        var _0x2962a7 = {
            'MqmGs': function(_0x39818c, _0x577a38) {
                return _0x1a8f91['OlmSb'](_0x39818c, _0x577a38);
            }
        };
        $['get'](_0x1a8f91['shvGd'](taskUrl, _0x1a8f91['rIhhV']), async (_0xaccb99, _0x59e9bd, _0x189d20) => {
            if (_0x1a8f91['vFJPJ'](_0x1a8f91['JBWWz'], _0x1a8f91['JBWWz'])) {
                console['log']('' + JSON['stringify'](_0xaccb99));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            } else {
                try {
                    if (_0x1a8f91['ibbZr'](_0x1a8f91['zYchN'], _0x1a8f91['zYchN'])) {
                        if (_0xaccb99) {
                            console['log']('' + JSON['stringify'](_0xaccb99));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x1a8f91['OlmSb'](safeGet, _0x189d20)) {
                                _0x189d20 = JSON['parse'](_0x189d20);
                                if (_0x1a8f91['ibbZr'](_0x189d20[_0x1a8f91['Tnadz']], 0xc8)) {
                                    $['MyWinningInformation'] = _0x189d20[_0x1a8f91['QTJtt']];
                                    for (let _0x2cbaf8 of $['MyWinningInformation']) {
                                        $['log'](_0x2cbaf8[_0x1a8f91['lZvjg']] + '已中奖 【' + _0x2cbaf8[_0x1a8f91['PECQq']] + '】');
                                    }
                                    $['MyWinningInformation'] = $['MyWinningInformation']['filter'](_0xf84dfe => !!_0xf84dfe && (_0xf84dfe['lotteryTime']['substr'](0x0, 0x6) === timeFormat() || _0xf84dfe['lotteryTime']['substr'](0x0, 0x6) === timeFormat(Date['now']() - 0x18 * 0x3c * 0x3c * 0x3e8)));
                                    $['MyWinningInformation'] = $['MyWinningInformation']['filter'](_0xc89af => !!_0xc89af && !_0xc89af['prizeName']['includes']('京豆'));
                                    if ($['MyWinningInformation'] && $['MyWinningInformation']['length']) {
                                        if (_0x1a8f91['oEysu'](_0x1a8f91['PSvzo'], _0x1a8f91['ncyvE'])) {
                                            for (let _0x375723 of $['MyWinningInformation']) {
                                                if (_0x1a8f91['oEysu'](_0x1a8f91['mHKOs'], _0x1a8f91['mHKOs'])) {
                                                    $['db'] += _0x189d20['data']['taskDB'];
                                                    console['log']('兑换成功，获得 ' + _0x189d20['data']['taskDB'] + ' 兑币');
                                                } else {
                                                    message += _0x375723[_0x1a8f91['lZvjg']] + '已中奖 【' + _0x375723[_0x1a8f91['PECQq']] + '】\x0a';
                                                }
                                            }
                                            allMessage += '京东账号' + $['index'] + $['nickName'] + '\x0a' + message + (_0x1a8f91['oEysu']($['index'], cookiesArr['length']) ? '\x0a\x0a' : '');
                                        } else {
                                            _0x2962a7['MqmGs'](_0x5d6c3b, _0x189d20);
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        console['log']('京东服务器返回空数据');
                    }
                } catch (_0x1ba920) {
                    $['logErr'](_0x1ba920, _0x59e9bd);
                } finally {
                    _0x1a8f91['uDwkL'](_0x5d6c3b);
                }
            }
        });
    });
}

function timeFormat(_0x3662b6) {
    var _0x29b5b9 = {
        'peSGg': 'CookieJD',
        'hGxIH': 'CookieJD2',
        'wRSlp': function(_0x2735f9, _0x5a32ae) {
            return _0x2735f9(_0x5a32ae);
        },
        'wZlaK': 'CookiesJD',
        'zcvxV': function(_0x56b136, _0x3ab212) {
            return _0x56b136 !== _0x3ab212;
        },
        'IHXuQ': 'qTwhk',
        'bYHqX': function(_0x6f462d, _0x364cfe) {
            return _0x6f462d === _0x364cfe;
        },
        'GgQOq': 'TEDmi',
        'SxSPr': function(_0x575545, _0x3de875) {
            return _0x575545 + _0x3de875;
        },
        'VpDFE': function(_0x4ed26e, _0x28bc8a) {
            return _0x4ed26e + _0x28bc8a;
        },
        'zVYoC': function(_0x5687d3, _0x58e210) {
            return _0x5687d3 >= _0x58e210;
        },
        'LpoXN': function(_0x10a0e6, _0x400e8a) {
            return _0x10a0e6 + _0x400e8a;
        },
        'nRJoJ': function(_0x5c0c01, _0x34bd5d) {
            return _0x5c0c01 + _0x34bd5d;
        },
        'owTpB': function(_0xfb7862, _0x1ceafb) {
            return _0xfb7862 >= _0x1ceafb;
        },
        'PdGJM': function(_0x3f4a14, _0x3c200a) {
            return _0x3f4a14 + _0x3c200a;
        }
    };
    let _0x4a68d1;
    if (_0x3662b6) {
        if (_0x29b5b9['zcvxV'](_0x29b5b9['IHXuQ'], _0x29b5b9['IHXuQ'])) {
            cookiesArr = [$['getdata'](_0x29b5b9['peSGg']), $['getdata'](_0x29b5b9['hGxIH']), ..._0x29b5b9['wRSlp'](jsonParse, $['getdata'](_0x29b5b9['wZlaK']) || '[]')['map'](_0x229f5d => _0x229f5d['cookie'])]['filter'](_0x1c9ae9 => !!_0x1c9ae9);
        } else {
            _0x4a68d1 = new Date(_0x3662b6);
        }
    } else {
        if (_0x29b5b9['bYHqX'](_0x29b5b9['GgQOq'], _0x29b5b9['GgQOq'])) {
            _0x4a68d1 = new Date();
        } else {
            $['db'] += data['data']['taskDB'];
            console['log']('任务领奖成功，获得 ' + data['data']['taskDB'] + ' 兑币');
        }
    }
    return _0x29b5b9['SxSPr'](_0x29b5b9['VpDFE'](_0x29b5b9['VpDFE'](_0x29b5b9['zVYoC'](_0x29b5b9['VpDFE'](_0x4a68d1['getMonth'](), 0x1), 0xa) ? _0x29b5b9['VpDFE'](_0x4a68d1['getMonth'](), 0x1) : _0x29b5b9['LpoXN']('0', _0x29b5b9['nRJoJ'](_0x4a68d1['getMonth'](), 0x1)), '月'), _0x29b5b9['owTpB'](_0x4a68d1['getDate'](), 0xa) ? _0x4a68d1['getDate']() : _0x29b5b9['PdGJM']('0', _0x4a68d1['getDate']())), '日');
}

function taskPostUrl(_0x5318b4, _0x58ab28) {
    var _0x38297f = {
        'dsrJl': function(_0x2c6ef1, _0x3c2e1d) {
            return _0x2c6ef1 + _0x3c2e1d;
        },
        'TokZj': function(_0x445988, _0x463b4c) {
            return _0x445988 + _0x463b4c;
        },
        'VMfRo': 'fnjah@#$@khfh123231O0O0O%%324093240329443lkjbkjaf',
        'tpoCo': 'jxd.m.jd.com',
        'tthhJ': '*/*',
        'XBjwY': 'https://servicewechat.com/wx00b03a0e8ad4e15e/31/page-frame.html',
        'RalZh': 'application/x-www-form-urlencoded',
        'YZMRc': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.1(0x1800012a) NetType/WIFI Language/zh_CN'
    };
    if (!cookie['match'](/pt_key=([^; ]+)(?=;?)/)) console['log']('\n提示:你的cookie填写不规范,正确格式为: pt_key=xxx;pt_pin=xxx; 后面分号;不可少\n');
    let _0x593004 = cookie['match'](/pt_key=([^; ]+)(?=;?)/)[0x1];
    let _0x990c30 = (+new Date())['toString']();
    let _0x3975b4 = $['md5'](_0x38297f['dsrJl'](_0x38297f['TokZj'](_0x38297f['TokZj'](_0x593004, _0x38297f['VMfRo']), _0x5318b4), _0x990c30));
    return {
        'url': '' + JD_API_HOST + _0x5318b4,
        'body': _0x58ab28,
        'headers': {
            'Host': _0x38297f['tpoCo'],
            'pt-key': _0x593004,
            'Accept': _0x38297f['tthhJ'],
            'time': _0x990c30['toString'](),
            'source': '1',
            'Referer': _0x38297f['XBjwY'],
            'Content-Type': _0x38297f['RalZh'],
            'sig': _0x3975b4,
            'User-Agent': _0x38297f['YZMRc']
        }
    };
}

function taskUrl(_0x49b047) {
    var _0x6c71c9 = {
        'ohEmS': function(_0x3121c5, _0x1e6996) {
            return _0x3121c5 + _0x1e6996;
        },
        'NpzOe': 'fnjah@#$@khfh123231O0O0O%%324093240329443lkjbkjaf',
        'noNaJ': 'jxd.m.jd.com',
        'RPoXP': '*/*',
        'SdlTc': 'https://servicewechat.com/wx00b03a0e8ad4e15e/31/page-frame.html',
        'UfkfD': 'application/json; charset=utf-8',
        'ZHLRT': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.1(0x1800012a) NetType/WIFI Language/zh_CN'
    };
    if (!cookie['match'](/pt_key=([^; ]+)(?=;?)/)) console['log']('\n提示:你的cookie填写不规范,正确格式为: pt_key=xxx;pt_pin=xxx; 后面分号;不可少\n');
    let _0x141bc0 = cookie['match'](/pt_key=([^; ]+)(?=;?)/)[0x1];
    let _0x3ed981 = (+new Date())['toString']();
    let _0x7d293d = $['md5'](_0x6c71c9['ohEmS'](_0x6c71c9['ohEmS'](_0x6c71c9['ohEmS'](_0x141bc0, _0x6c71c9['NpzOe']), _0x49b047), _0x3ed981));
    return {
        'url': '' + JD_API_HOST + _0x49b047,
        'headers': {
            'Host': _0x6c71c9['noNaJ'],
            'pt-key': _0x141bc0,
            'Accept': _0x6c71c9['RPoXP'],
            'time': _0x3ed981['toString'](),
            'source': '1',
            'Referer': _0x6c71c9['SdlTc'],
            'Content-Type': _0x6c71c9['UfkfD'],
            'sig': _0x7d293d,
            'User-Agent': _0x6c71c9['ZHLRT']
        }
    };
}

function TotalBean() {
    var _0x4c7571 = {
        'Grfxy': function(_0x4d7405, _0xd1ba24) {
            return _0x4d7405(_0xd1ba24);
        },
        'zRttE': function(_0x117222, _0x10ff99) {
            return _0x117222 === _0x10ff99;
        },
        'uPOAM': function(_0x449800, _0x3e94bb) {
            return _0x449800 !== _0x3e94bb;
        },
        'ZkOna': 'TRtir',
        'dqLNj': function(_0x5af69b, _0x3e329b) {
            return _0x5af69b === _0x3e329b;
        },
        'PbQsY': 'AXNgg',
        'leaXs': 'eknVW',
        'JUjno': 'retcode',
        'bQqpU': 'lqDcE',
        'MeJap': 'DwReH',
        'wXneG': 'GlPtL',
        'QaijO': 'base',
        'edewg': 'Efqkw',
        'VjGJh': 'IXDSu',
        'pVZVK': function(_0x3cd734) {
            return _0x3cd734();
        },
        'NwDKD': 'application/json,text/plain, */*',
        'rVsKQ': 'application/x-www-form-urlencoded',
        'YGlTA': 'gzip, deflate, br',
        'ygDPQ': 'zh-cn',
        'aShXn': 'keep-alive',
        'BUlHN': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'GXflR': './USER_AGENTS',
        'juFRh': 'JDUA',
        'RWDUI': 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0'
    };
    return new Promise(async _0x35fcf9 => {
        var _0x44080f = {
            'HnyaZ': function(_0xa6bc96, _0x243fb9) {
                return _0x4c7571['Grfxy'](_0xa6bc96, _0x243fb9);
            },
            'NMnLq': function(_0x44a294, _0xe87234) {
                return _0x4c7571['zRttE'](_0x44a294, _0xe87234);
            },
            'Bbxjp': function(_0x3c7acd, _0x3482f0) {
                return _0x4c7571['uPOAM'](_0x3c7acd, _0x3482f0);
            },
            'aIVVX': _0x4c7571['ZkOna'],
            'PvirI': function(_0xacd1a, _0xd3507a) {
                return _0x4c7571['dqLNj'](_0xacd1a, _0xd3507a);
            },
            'SYyqu': _0x4c7571['PbQsY'],
            'XzTLo': _0x4c7571['leaXs'],
            'nikoO': function(_0x593e85, _0x3694dd) {
                return _0x4c7571['dqLNj'](_0x593e85, _0x3694dd);
            },
            'cfjKF': _0x4c7571['JUjno'],
            'IFbTD': function(_0x4eb06d, _0x8cd742) {
                return _0x4c7571['dqLNj'](_0x4eb06d, _0x8cd742);
            },
            'RSMWg': _0x4c7571['bQqpU'],
            'cNogN': _0x4c7571['MeJap'],
            'GxIvK': _0x4c7571['wXneG'],
            'zlUuo': _0x4c7571['QaijO'],
            'nebBZ': _0x4c7571['edewg'],
            'tXviJ': function(_0x32a1b9, _0x32bbea) {
                return _0x4c7571['uPOAM'](_0x32a1b9, _0x32bbea);
            },
            'aSaAV': _0x4c7571['VjGJh'],
            'yenBQ': function(_0x4735e) {
                return _0x4c7571['pVZVK'](_0x4735e);
            }
        };
        const _0x385ba1 = {
            'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
            'headers': {
                'Accept': _0x4c7571['NwDKD'],
                'Content-Type': _0x4c7571['rVsKQ'],
                'Accept-Encoding': _0x4c7571['YGlTA'],
                'Accept-Language': _0x4c7571['ygDPQ'],
                'Connection': _0x4c7571['aShXn'],
                'Cookie': cookie,
                'Referer': _0x4c7571['BUlHN'],
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x4c7571['Grfxy'](require, _0x4c7571['GXflR'])['USER_AGENT'] : $['getdata'](_0x4c7571['juFRh']) ? $['getdata'](_0x4c7571['juFRh']) : _0x4c7571['RWDUI']
            }
        };
        $['post'](_0x385ba1, (_0x40eb44, _0x379cf3, _0x4825c0) => {
            var _0x2cd191 = {
                'jXWQS': function(_0x2ef392, _0xe83111) {
                    return _0x44080f['HnyaZ'](_0x2ef392, _0xe83111);
                },
                'MJUqs': function(_0x10e182, _0x5aac6a) {
                    return _0x44080f['NMnLq'](_0x10e182, _0x5aac6a);
                }
            };
            if (_0x44080f['Bbxjp'](_0x44080f['aIVVX'], _0x44080f['aIVVX'])) {
                console['log']('' + JSON['stringify'](_0x40eb44));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            } else {
                try {
                    if (_0x40eb44) {
                        if (_0x44080f['PvirI'](_0x44080f['SYyqu'], _0x44080f['XzTLo'])) {
                            $['logErr'](e, _0x379cf3);
                        } else {
                            console['log']('' + JSON['stringify'](_0x40eb44));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        if (_0x4825c0) {
                            _0x4825c0 = JSON['parse'](_0x4825c0);
                            if (_0x44080f['nikoO'](_0x4825c0[_0x44080f['cfjKF']], 0xd)) {
                                if (_0x44080f['IFbTD'](_0x44080f['RSMWg'], _0x44080f['cNogN'])) {
                                    _0x2cd191['jXWQS'](_0x35fcf9, _0x4825c0);
                                } else {
                                    $['isLogin'] = ![];
                                    return;
                                }
                            }
                            if (_0x44080f['IFbTD'](_0x4825c0[_0x44080f['cfjKF']], 0x0)) {
                                if (_0x44080f['IFbTD'](_0x44080f['GxIvK'], _0x44080f['GxIvK'])) {
                                    $['nickName'] = _0x4825c0[_0x44080f['zlUuo']]['nickname'];
                                } else {
                                    $['logErr'](e, _0x379cf3);
                                }
                            } else {
                                if (_0x44080f['Bbxjp'](_0x44080f['nebBZ'], _0x44080f['nebBZ'])) {
                                    $['logErr'](e, _0x379cf3);
                                } else {
                                    $['nickName'] = $['UserName'];
                                }
                            }
                        } else {
                            if (_0x44080f['tXviJ'](_0x44080f['aSaAV'], _0x44080f['aSaAV'])) {
                                if (_0x2cd191['jXWQS'](safeGet, _0x4825c0)) {
                                    _0x4825c0 = JSON['parse'](_0x4825c0);
                                    if (_0x2cd191['MJUqs'](_0x4825c0['returnCode'], 0xc8)) {
                                        $['db'] += _0x4825c0['data']['taskDB'];
                                        console['log']('兑换成功，获得 ' + _0x4825c0['data']['taskDB'] + ' 兑币');
                                    } else {
                                        console['log']('兑换失败，' + _0x4825c0['returnMsg']);
                                    }
                                }
                            } else {
                                console['log']('京东服务器返回空数据');
                            }
                        }
                    }
                } catch (_0x270528) {
                    $['logErr'](_0x270528, _0x379cf3);
                } finally {
                    _0x44080f['yenBQ'](_0x35fcf9);
                }
            }
        });
    });
}

function safeGet(_0x5b2a44) {
    var _0x2f1e88 = {
        'QQZpe': function(_0x840dfb, _0x32950e) {
            return _0x840dfb === _0x32950e;
        },
        'zTMOf': function(_0x1619ed, _0x5c902b) {
            return _0x1619ed(_0x5c902b);
        },
        'ORBty': function(_0xe487cb, _0x98f530) {
            return _0xe487cb !== _0x98f530;
        },
        'FeUEl': 'UUxUk',
        'EUNcN': 'CkmBn',
        'IbkpP': function(_0xc46693, _0xe3fa43) {
            return _0xc46693 == _0xe3fa43;
        },
        'cPYtb': 'object',
        'Thboh': function(_0xc41ba3, _0x252ccd) {
            return _0xc41ba3 === _0x252ccd;
        },
        'lBAah': 'wVKuG',
        'cfynT': 'KRTBn',
        'AcDWa': 'Qpztr'
    };
    try {
        if (_0x2f1e88['ORBty'](_0x2f1e88['FeUEl'], _0x2f1e88['EUNcN'])) {
            if (_0x2f1e88['IbkpP'](typeof JSON['parse'](_0x5b2a44), _0x2f1e88['cPYtb'])) {
                if (_0x2f1e88['Thboh'](_0x2f1e88['lBAah'], _0x2f1e88['lBAah'])) {
                    return !![];
                } else {
                    _0x5b2a44 = JSON['parse'](_0x5b2a44);
                    if (_0x2f1e88['QQZpe'](_0x5b2a44['returnCode'], 0xc8)) {
                        $['db'] += _0x5b2a44['data']['taskDB'];
                        console['log']('兑换成功，获得 ' + _0x5b2a44['data']['taskDB'] + ' 兑币');
                    } else {
                        console['log']('兑换失败，' + _0x5b2a44['returnMsg']);
                    }
                }
            }
        } else {
            if (_0x2f1e88['zTMOf'](safeGet, _0x5b2a44)) {
                _0x5b2a44 = JSON['parse'](_0x5b2a44);
                console['log'](_0x5b2a44['returnMsg']);
            }
        }
    } catch (_0x28636e) {
        if (_0x2f1e88['ORBty'](_0x2f1e88['cfynT'], _0x2f1e88['AcDWa'])) {
            console['log'](_0x28636e);
            console['log']('京东服务器访问数据为空，请检查自身设备网络情况');
            return ![];
        } else {
            if (_0x2f1e88['zTMOf'](safeGet, _0x5b2a44)) {
                _0x5b2a44 = JSON['parse'](_0x5b2a44);
                console['log'](_0x5b2a44['returnMsg']);
            }
        }
    }
}

function jsonParse(_0x3d0e36) {
    var _0x2b04ad = {
        'XFWfB': function(_0x1ac8c4, _0x183693) {
            return _0x1ac8c4 == _0x183693;
        },
        'bSCwR': 'string',
        'CsAPh': function(_0x50f642, _0x11d265) {
            return _0x50f642 === _0x11d265;
        },
        'ZQDNG': 'swHbw',
        'VMDSM': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
    };
    if (_0x2b04ad['XFWfB'](typeof _0x3d0e36, _0x2b04ad['bSCwR'])) {
        try {
            if (_0x2b04ad['CsAPh'](_0x2b04ad['ZQDNG'], _0x2b04ad['ZQDNG'])) {
                return JSON['parse'](_0x3d0e36);
            } else {
                $['logErr'](e, resp);
            }
        } catch (_0x18b164) {
            console['log'](_0x18b164);
            $['msg']($['name'], '', _0x2b04ad['VMDSM']);
            return [];
        }
    }
}

function requireConfig() {
    var _0x463e22 = {
        'HiVVZ': function(_0x12cfa0) {
            return _0x12cfa0();
        }
    };
    return new Promise(_0x3170c7 => {
        if ($['isNode']() && process['env']['JD_JXD_EXCHANGE']) {
            exchangeFlag = process['env']['JD_JXD_EXCHANGE'] || exchangeFlag;
        }
        _0x463e22['HiVVZ'](_0x3170c7);
    });
};

// prettier-ignore
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
