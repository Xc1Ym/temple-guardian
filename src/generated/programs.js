// Generated from the original AS2 source. Regenerate with npm run extract:game.
export const programs = [
// DefineButton2_0/BUTTONCONDACTION on(release).as
function program0(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'getURL', [
    'http://www.9mine.com',
    '_blank'
]);
},
// DefineButton2_105/BUTTONCONDACTION on(release).as
function program1(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(this, 'removeMovieClip', []);
},
// DefineButton2_110/BUTTONCONDACTION on(release).as
function program2(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_scope, 'F_TestDiTu', []);
},
// DefineButton2_112/BUTTONCONDACTION on(release).as
function program3(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_scope, 'F_SaveDiTu', []);
},
// DefineButton2_127/BUTTONCONDACTION on(release).as
function program4(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'GamePause', false);
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
if (_get(_get(_scope, '_root'), 'DiRenGoPD')) {
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound117']);
} else {
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound101']);
}
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'start', [
    0,
    1
]);
_call(this, 'removeMovieClip', []);
},
// DefineButton2_131/BUTTONCONDACTION on(release).as
function program5(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_get(_scope, '_root'), 'F_BackMenu', []);
_call(this, 'removeMovieClip', []);
},
// DefineButton2_137/BUTTONCONDACTION on(release).as
function program6(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'GamePause', false);
_call(this, 'removeMovieClip', []);
},
// DefineButton2_14/BUTTONCONDACTION on(release).as
function program7(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'getURL', [
    'http://www.9mine.com',
    '_blank'
]);
},
// DefineButton2_156/BUTTONCONDACTION on(release).as
function program8(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'getURL', [
    'http://www.9mine.com',
    '_blank'
]);
},
// DefineButton2_166/BUTTONCONDACTION on(release).as
function program9(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'SoundOn', !_get(_get(_scope, '_root'), 'SoundOn'));
_set(_get(_scope, 'M_SoundClose'), '_visible', !_get(_get(_scope, '_root'), 'SoundOn'));
if (_get(_get(_scope, '_root'), 'SoundOn')) {
    _set(_get(_scope, '_root'), 'SoundVol', _get(_get(_scope, '_root'), 'SoundVolTem'));
} else {
    _set(_get(_scope, '_root'), 'SoundVolTem', _get(_get(_scope, '_root'), 'SoundVol'));
    _set(_get(_scope, '_root'), 'SoundVol', 0);
}
_set(_scope, 'i', 1);
while (_get(_scope, 'i') <= 7) {
    _set(_scope, 'NowSetVol', _get(_get(_scope, '_root'), 'SoundVol'));
    if ((_get(_scope, 'i') == 1 || _get(_scope, 'i') == 2) && _get(_get(_scope, '_root'), 'SoundVol') > 0) {
        _set(_scope, 'NowSetVol', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'SoundVol') / 1.1]));
    }
    _call(_get(_get(_scope, '_root'), 'S_Sound' + _get(_scope, 'i')), 'setVolume', [_get(_scope, 'NowSetVol')]);
    _update(_scope, 'i', 1, false);
}
},
// DefineButton2_17/BUTTONCONDACTION on(release).as
function program10(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'getURL', [
    'http://www.9mine.com/free_games.html',
    '_blank'
]);
},
// DefineButton2_175/BUTTONCONDACTION on(release).as
function program11(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_update(_scope, 'GoToID', -1, false);
if (_get(_scope, 'GoToID') < 0) {
    _set(_scope, 'GoToID', _get(_get(_scope, '_root'), 'DiTuCount'));
}
_set(_get(_scope, '_root'), 'NowDiTuID', _get(_scope, 'GoToID') - 1);
if (_get(_get(_scope, '_root'), 'NowDiTuID') >= 0 && _get(_get(_scope, '_root'), 'NowDiTuID') <= 9) {
    _call(_get(_get(_scope, '_parent'), 'M_MapShow'), 'gotoAndStop', [_get(_get(_scope, '_root'), 'NowDiTuID') + 1]);
} else {
    _call(_get(_get(_scope, '_parent'), 'M_MapShow'), 'gotoAndStop', [11]);
}
_call(_scope, 'gotoAndStop', ['a' + _get(_scope, 'GoToID')]);
},
// DefineButton2_176/BUTTONCONDACTION on(release).as
function program12(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_update(_scope, 'GoToID', 1, false);
if (!(_get(_scope, 'GoToID') == 11 && _get(_get(_get(_scope, '_root'), 'MyDiTuArr'), 'length') > 1)) {
    if (_get(_scope, 'GoToID') > _get(_get(_scope, '_root'), 'DiTuCount')) {
        _set(_scope, 'GoToID', 0);
    } else if (_get(_scope, 'GoToID') > 11) {
        _set(_scope, 'GoToID', 0);
    }
}
_set(_get(_scope, '_root'), 'NowDiTuID', _get(_scope, 'GoToID') - 1);
if (_get(_get(_scope, '_root'), 'NowDiTuID') >= 0 && _get(_get(_scope, '_root'), 'NowDiTuID') <= 9) {
    _call(_get(_get(_scope, '_parent'), 'M_MapShow'), 'gotoAndStop', [_get(_get(_scope, '_root'), 'NowDiTuID') + 1]);
} else {
    _call(_get(_get(_scope, '_parent'), 'M_MapShow'), 'gotoAndStop', [11]);
}
_call(_scope, 'gotoAndStop', ['a' + _get(_scope, 'GoToID')]);
},
// DefineButton2_190/BUTTONCONDACTION on(release).as
function program13(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_get(_scope, '_root'), 'attachMovie', [
    'Mf_MapSave',
    'M_MapSave',
    10,
    {
        _x: 310,
        _y: 225,
        SaveOrLoad: 2
    }
]);
},
// DefineButton2_223/BUTTONCONDACTION on(release).as
function program14(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_get(_scope, 'M_NeiRong'), 'gotoAndStop', ['a2']);
},
// DefineButton2_224/BUTTONCONDACTION on(release).as
function program15(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_get(_scope, 'M_NeiRong'), 'gotoAndStop', ['a3']);
},
// DefineButton2_225/BUTTONCONDACTION on(release).as
function program16(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_get(_scope, 'M_NeiRong'), 'gotoAndStop', ['a4']);
},
// DefineButton2_226/BUTTONCONDACTION on(release).as
function program17(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_get(_scope, '_root'), 'attachMovie', [
    'Mf_EditDiTu',
    'M_EditDiTu',
    10
]);
},
// DefineButton2_227/BUTTONCONDACTION on(release).as
function program18(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_scope, 'getURL', [
    'http://www.9mine.com/score_rank.php?title=Temple%20Guardian',
    '_blank'
]);
},
// DefineButton2_228/BUTTONCONDACTION on(release).as
function program19(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_get(_scope, 'M_NeiRong'), 'gotoAndStop', ['a1']);
},
// DefineButton2_231/BUTTONCONDACTION on(release).as
function program20(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_get(_scope, '_root'), 'F_GameStar', []);
_call(this, 'removeMovieClip', []);
},
// DefineButton2_232/BUTTONCONDACTION on(release).as
function program21(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'GamePause', false);
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
if (_get(_get(_scope, '_root'), 'DiRenGoPD')) {
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound117']);
} else {
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound101']);
}
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'start', [
    1,
    1
]);
_call(this, 'removeMovieClip', []);
},
// DefineButton2_262/BUTTONCONDACTION on(release).as
function program22(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
if (_get(_get(_scope, '_root'), 'NowGuanSu') == 1) {
    _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
        'Mf_NanDuSet',
        'M_NanDuSet',
        1000,
        {
            _x: 325,
            _y: 250
        }
    ]);
} else {
    _call(_get(_scope, '_root'), 'F_GuanStar', []);
}
_call(this, 'removeMovieClip', []);
},
// DefineButton2_274/BUTTONCONDACTION on(release).as
function program23(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_call(_get(_scope, '_root'), 'F_BackMenu', []);
_call(this, 'removeMovieClip', []);
},
// DefineButton2_277/BUTTONCONDACTION on(release).as
function program24(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
if (_get(_get(_scope, '_root'), 'NowGuanSu') == 1) {
    _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
        'Mf_NanDuSet',
        'M_NanDuSet',
        1000,
        {
            _x: 325,
            _y: 250
        }
    ]);
} else {
    _call(_get(_scope, '_root'), 'F_GuanStar', []);
}
_call(this, 'removeMovieClip', []);
},
// DefineButton2_290/BUTTONCONDACTION on(release).as
function program25(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
if (_call(_scope, 'JianRanKong', [_get(_scope, 'T_UserName')]) == false) {
    _set(_scope, 'SubmitUserName', _call(_scope, 'escape', [_get(_get(_scope, 'T_UserName'), 'text')]));
    _set(_scope, 'SumitURL', 'http://www.9mine.com/game_score_set.php?score=' + _get(_scope, 'ZiFen') + '&player=' + _get(_scope, 'SubmitUserName') + '&game_title=Temple%20Guardian&map=' + _get(_get(_scope, '_root'), 'SumitMap'));
    _call(_scope, 'getURL', [
        _get(_scope, 'SumitURL'),
        '_blank'
    ]);
    _set(_get(_scope, 'B_SubitScore'), 'enabled', false);
    _set(_get(_scope, 'B_SubitScore'), '_alpha', 45);
    _set(_get(_scope, '_root'), 'SumitFen', false);
    _set(_get(_scope, '_root'), 'SumitUserS', _get(_get(_scope, 'T_UserName'), 'text'));
} else {
    _set(_get(_scope, 'T_UserName'), 'text', '');
    _call(_get(_scope, 'Selection'), 'setFocus', [_get(_scope, 'T_UserName')]);
}
},
// DefineButton2_338/BUTTONCONDACTION on(release).as
function program26(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(this, 'MivObject'), 'filters', []);
_set(_get(_get(this, 'MivObject'), 'M_FanGiang'), '_visible', false);
_call(this, 'removeMovieClip', []);
},
// DefineButton2_346/BUTTONCONDACTION on(release).as
function program27(_scope, _get, _set, _call, _update, _delete) {
if (_get(_get(_scope, '_root'), 'Money') >= _get(_get(_scope, 'MivObject'), 'SJMoney')) {
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
        0,
        1
    ]);
    _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') - _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, 'MivObject'), 'SJMoney') * _get(_get(_scope, '_root'), 'BuyLu')]));
    _set(_get(_scope, '_root'), 'SenJiDian', _get(_get(_scope, '_root'), 'SenJiDian') - _get(_get(_scope, 'MivObject'), 'SJSenJiDian'));
    _set(_get(_get(_scope, 'MivObject'), '_parent'), 'Money', _get(_get(_get(_scope, 'MivObject'), '_parent'), 'Money') + _get(_get(_scope, 'MivObject'), 'SJMoney'));
    _set(_scope, 'GoToLLevel', _get(_get(_scope, 'MivObject'), 'LevelB'));
    _call(_get(_scope, 'MivObject'), 'gotoAndStop', ['a' + _get(_scope, 'GoToLLevel')]);
    _set(this, 'onEnterFrame', function () {
        var _loc6_;
        var _loc7_;
        var _loc5_;
        var _loc4_;
        if (_get(_get(_scope, 'MivObject'), 'Level') == _get(_scope, 'GoToLLevel')) {
            _set(_get(_scope, '_parent'), 'Level', _get(_get(_scope, 'MivObject'), 'Level'));
            if (_get(_get(_get(_scope, 'MivObject'), '_parent'), 'TaTyle') == 1 || _get(_get(_get(_scope, 'MivObject'), '_parent'), 'TaTyle') == 2) {
                _set(_get(_scope, '_parent'), 'All_Attack', _get(_get(_scope, '_root'), 'All_Attack'));
            }
            if (_get(_get(_get(_scope, 'MivObject'), '_parent'), 'Tyle') == 2) {
                _set(_get(_scope, '_parent'), 'All_MaxHP', _get(_get(_scope, '_root'), 'All_MaxHP'));
            }
            _loc6_ = '<b>' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'Attack') + '</b>';
            _loc7_ = '<b>' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'AttackB') + '</b>';
            if (_get(_get(_get(_scope, 'MivObject'), '_parent'), 'TaTyle') == 1 || _get(_get(_get(_scope, 'MivObject'), '_parent'), 'TaTyle') == 2) {
                _loc6_ = '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_scope, 'MivObject'), '_parent'), 'Attack') * _get(_get(_scope, '_root'), 'All_Attack')]) + '</b>';
                _loc6_ += ' [' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'Attack') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']';
                _loc7_ = '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_scope, 'MivObject'), '_parent'), 'AttackB') * _get(_get(_scope, '_root'), 'All_Attack')]) + '</b>';
                _loc7_ += ' [' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'AttackB') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']';
            }
            _set(_get(_scope, '_parent'), 'Attack', _loc6_);
            _set(_get(_scope, '_parent'), 'AttackB', _loc7_);
            _loc5_ = '<b>' + _get(_get(_scope, 'MivObject'), 'MaxHP') + '</b>';
            _loc4_ = '<b>' + _get(_get(_scope, 'MivObject'), 'MaxHP') + '</b>';
            if (_get(_get(_get(_scope, 'MivObject'), '_parent'), 'Tyle') == 2) {
                _loc5_ = '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, 'MivObject'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')]) + '</b>';
                _loc5_ += ' [' + _get(_get(_scope, 'MivObject'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']';
                _loc4_ = '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, 'MivObject'), 'MaxHPB') * _get(_get(_scope, '_root'), 'All_MaxHP')]) + '</b>';
                _loc4_ += ' [' + _get(_get(_scope, 'MivObject'), 'MaxHPB') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']';
            }
            _set(_get(_scope, '_parent'), 'MaxHP', _loc5_);
            _set(_get(_scope, '_parent'), 'MaxHPB', _loc4_);
            _set(_get(_scope, '_parent'), 'HP', '<b>' + _get(_get(_scope, 'MivObject'), 'HP') + '</b>');
            _set(_get(_scope, '_parent'), 'HPB', '<b>' + _get(_get(_scope, 'MivObject'), 'HPB') + '</b>');
            _set(_get(_scope, '_parent'), 'FanWei', '<b>' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'FanWei') + '</b>');
            _set(_get(_scope, '_parent'), 'FaSieJJ', '<b>' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'FaSieJJ') + '</b>');
            _set(_get(_scope, '_parent'), 'JianSuDu', '<b>' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'JianSuDu') + '</b>');
            _set(_get(_scope, '_parent'), 'LevelB', '<b>' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'LevelB') + '</b>');
            _set(_get(_scope, '_parent'), 'FanWeiB', '<b>' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'FanWeiB') + '</b>');
            _set(_get(_scope, '_parent'), 'FaSieJJB', '<b>' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'FaSieJJB') + '</b>');
            _set(_get(_scope, '_parent'), 'JianSuDuB', '<b>' + _get(_get(_get(_scope, 'MivObject'), '_parent'), 'JianSuDuB') + '</b>');
            _set(_get(_get(_scope, 'MivObject'), 'M_FanGiang'), '_visible', true);
            _call(_get(_scope, '_root'), 'F_UpdateSeSi', []);
            _delete(this, 'onEnterFrame');
        }
    });
}
},
// DefineButton2_353/BUTTONCONDACTION on(release).as
function program28(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') + _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, 'MivObject'), 'Money') * _get(_get(_scope, '_root'), 'SellLu')]));
if (_get(_get(_scope, 'MivObject'), 'TaTyle') == 5) {
    _update(_get(_scope, '_root'), 'LieRingCount', -1, false);
}
if (_get(_get(_scope, 'MivObject'), 'TaTyle') == 6) {
    _update(_get(_scope, '_root'), 'SenLongCount', -1, false);
}
_set(_get(_get(_scope, 'MivObject'), 'DiTuObject'), 'SeSi', '');
_set(_get(_scope, '_root'), 'SeSiDephNext', _call(_get(_scope, 'MivObject'), 'getDepth', []));
_call(_get(_scope, 'MivObject'), 'removeMovieClip', []);
_call(_get(_scope, '_parent'), 'removeMovieClip', []);
},
// DefineButton2_417/BUTTONCONDACTION on(release).as
function program29(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    1,
    1
]);
_set(_get(_scope, '_root'), 'ADiRenName', _get(_get(_scope, 'MivObject'), '_name'));
},
// DefineButton2_60/BUTTONCONDACTION on(release).as
function program30(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'MySellID', _get(_scope, 'MySellID'));
_call(_get(_scope, '_root'), 'F_GuanStar', []);
_call(this, 'removeMovieClip', []);
},
// DefineButton2_7/BUTTONCONDACTION on(release).as
function program31(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'getURL', [
    'http://www.9mine.com',
    '_blank'
]);
},
// DefineButton2_74/BUTTONCONDACTION on(release).as
function program32(_scope, _get, _set, _call, _update, _delete) {
_call(this, 'removeMovieClip', []);
},
// DefineButton2_79/BUTTONCONDACTION on(release).as
function program33(_scope, _get, _set, _call, _update, _delete) {
_call(this, 'removeMovieClip', []);
},
// DefineButton2_844/BUTTONCONDACTION on(release).as
function program34(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'TemSeSiShow', 1);
},
// DefineButton2_844/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program35(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_844/BUTTONCONDACTION on(rollOver).as
function program36(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'Attack') * _get(_get(_scope, '_root'), 'All_Attack')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'Attack') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_846/BUTTONCONDACTION on(release).as
function program37(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'TemSeSiShow', 101);
},
// DefineButton2_846/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program38(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_846/BUTTONCONDACTION on(rollOver).as
function program39(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_848/BUTTONCONDACTION on(release).as
function program40(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'TemSeSiShow', 201);
},
// DefineButton2_848/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program41(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_848/BUTTONCONDACTION on(rollOver).as
function program42(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_850/BUTTONCONDACTION on(release).as
function program43(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'TemSeSiShow', 202);
},
// DefineButton2_850/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program44(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_850/BUTTONCONDACTION on(rollOver).as
function program45(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'MaxHP') + '</b></font>' + ' [\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_852/BUTTONCONDACTION on(release).as
function program46(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'TemSeSiShow', 2);
},
// DefineButton2_852/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program47(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_852/BUTTONCONDACTION on(rollOver).as
function program48(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'Attack') * _get(_get(_scope, '_root'), 'All_Attack')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'Attack') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_854/BUTTONCONDACTION on(release).as
function program49(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'TemSeSiShow', 3);
},
// DefineButton2_854/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program50(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_854/BUTTONCONDACTION on(rollOver).as
function program51(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_856/BUTTONCONDACTION on(release).as
function program52(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'TemSeSiShow', 4);
},
// DefineButton2_856/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program53(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_856/BUTTONCONDACTION on(rollOver).as
function program54(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_858/BUTTONCONDACTION on(release).as
function program55(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'TemSeSiShow', 5);
},
// DefineButton2_858/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program56(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_858/BUTTONCONDACTION on(rollOver).as
function program57(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_868/BUTTONCONDACTION on(release).as
function program58(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'Benabled')) {
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
        0,
        1
    ]);
    if (_get(this, 'Level') < 6) {
        _update(this, 'Level', 1, false);
        _set(_scope, 'TempAttAck', 1 + _get(this, 'Level') * 0.4);
        _set(_scope, 'TempAttAckA', _call(_get(_scope, 'Math'), 'floor', [_get(_scope, 'TempAttAck')]));
        _set(_scope, 'TempAttAckB', _call(_get(_scope, 'Math'), 'round', [(_get(_scope, 'TempAttAck') - _get(_scope, 'TempAttAckA')) * 10]));
        _set(_get(_scope, '_root'), 'All_Attack', _get(_scope, 'TempAttAckA') + _get(_scope, 'TempAttAckB') / 10);
        _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') - _call(_get(_scope, 'Math'), 'round', [_get(this, 'Level') * 150 + (_get(this, 'Level') - 1) * 220]));
        _set(this, 'SJMoney', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 150 + (_get(this, 'Level') + 1 - 1) * 220]));
        _call(_get(_scope, '_root'), 'F_UpdateSeSi', []);
    } else {
        _set(this, 'Level', 6);
    }
}
},
// DefineButton2_868/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program59(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_868/BUTTONCONDACTION on(rollOver).as
function program60(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(this, 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>-</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _get(this, 'SJMoney') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>-</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(this, 'SJSenJiDian') + '</b></font>');
},
// DefineButton2_872/BUTTONCONDACTION on(release).as
function program61(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'Benabled')) {
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
        0,
        1
    ]);
    if (_get(this, 'Level') < 6) {
        _update(this, 'Level', 1, false);
        _set(_get(_scope, '_root'), 'All_FanWei', 1 + _get(this, 'Level') * 0.1);
        _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') - _call(_get(_scope, 'Math'), 'round', [_get(this, 'Level') * 130 + (_get(this, 'Level') - 1) * 100]));
        _set(this, 'SJMoney', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 130 + (_get(this, 'Level') + 1 - 1) * 100]));
        _call(_get(_scope, '_root'), 'F_UpdateSeSi', []);
    } else {
        _set(this, 'Level', 6);
    }
}
},
// DefineButton2_872/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program62(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_872/BUTTONCONDACTION on(rollOver).as
function program63(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(this, 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>-</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _get(this, 'SJMoney') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>-</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(this, 'SJSenJiDian') + '</b></font>');
},
// DefineButton2_876/BUTTONCONDACTION on(release).as
function program64(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'Benabled')) {
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
        0,
        1
    ]);
    if (_get(this, 'Level') < 6) {
        _update(this, 'Level', 1, false);
        _set(_scope, 'TempAttAck', 1 + _get(this, 'Level') * 0.3);
        _set(_scope, 'TempAttAckA', _call(_get(_scope, 'Math'), 'floor', [_get(_scope, 'TempAttAck')]));
        _set(_scope, 'TempAttAckB', _call(_get(_scope, 'Math'), 'round', [(_get(_scope, 'TempAttAck') - _get(_scope, 'TempAttAckA')) * 10]));
        _set(_get(_scope, '_root'), 'All_MaxHP', _get(_scope, 'TempAttAckA') + _get(_scope, 'TempAttAckB') / 10);
        _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') - _call(_get(_scope, 'Math'), 'round', [_get(this, 'Level') * 120 + (_get(this, 'Level') - 1) * 80]));
        _set(this, 'SJMoney', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 120 + (_get(this, 'Level') + 1 - 1) * 80]));
        _call(_get(_scope, '_root'), 'F_UpdateSeSi', [9]);
    } else {
        _set(this, 'Level', 6);
    }
}
},
// DefineButton2_876/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program65(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_876/BUTTONCONDACTION on(rollOver).as
function program66(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(this, 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>-</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _get(this, 'SJMoney') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>-</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(this, 'SJSenJiDian') + '</b></font>');
},
// DefineButton2_880/BUTTONCONDACTION on(release).as
function program67(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'Benabled')) {
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
        0,
        1
    ]);
    if (_get(this, 'Level') < 6) {
        _update(this, 'Level', 1, false);
        _set(_get(_scope, '_root'), 'AllSen_FanWei', 1 + _get(this, 'Level') * 0.1);
        _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') - _call(_get(_scope, 'Math'), 'round', [_get(this, 'Level') * 500 + (_get(this, 'Level') - 1) * 66]));
        _set(_get(_scope, '_root'), 'SenJiDian', _get(_get(_scope, '_root'), 'SenJiDian') - _call(_get(_scope, 'Math'), 'round', [_get(this, 'Level') * 150 + (_get(this, 'Level') - 1) * 50]));
        _set(this, 'SJMoney', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 500 + (_get(this, 'Level') + 1 - 1) * 66]));
        _set(this, 'SJSenJiDian', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 120 + (_get(this, 'Level') + 1 - 1) * 50]));
        _call(_get(_scope, '_root'), 'F_UpdateSeSi', []);
    } else {
        _set(this, 'Level', 6);
    }
}
},
// DefineButton2_880/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program68(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_880/BUTTONCONDACTION on(rollOver).as
function program69(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(this, 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>-</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _get(this, 'SJMoney') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>-</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(this, 'SJSenJiDian') + '</b></font>');
},
// DefineButton2_884/BUTTONCONDACTION on(release).as
function program70(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'Benabled')) {
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
        0,
        1
    ]);
    if (_get(this, 'Level') < 6) {
        _update(this, 'Level', 1, false);
        _set(_get(_scope, '_root'), 'SellLu', 0.7 + _get(this, 'Level') * 0.05);
        _set(_get(_scope, '_root'), 'BuyLu', 1 - _get(this, 'Level') * 0.05);
        _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') - _call(_get(_scope, 'Math'), 'round', [_get(this, 'Level') * 99]));
        _set(this, 'SJMoney', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 99]));
        _call(_get(_scope, '_root'), 'F_UpdateSeSi', []);
    } else {
        _set(this, 'Level', 6);
    }
}
},
// DefineButton2_884/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program71(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_884/BUTTONCONDACTION on(rollOver).as
function program72(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(this, 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>-</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _get(this, 'SJMoney') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>-</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(this, 'SJSenJiDian') + '</b></font>');
},
// DefineButton2_896/BUTTONCONDACTION on(release).as
function program73(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_scope, '_root'), 'F_StarArrFun', []);
},
// DefineButton2_900/BUTTONCONDACTION on(release).as
function program74(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'SoundOn', !_get(_get(_scope, '_root'), 'SoundOn'));
_set(_get(_scope, 'M_SoundClose'), '_visible', !_get(_get(_scope, '_root'), 'SoundOn'));
if (_get(_get(_scope, '_root'), 'SoundOn')) {
    _set(_get(_scope, '_root'), 'SoundVol', _get(_get(_scope, '_root'), 'SoundVolTem'));
} else {
    _set(_get(_scope, '_root'), 'SoundVolTem', _get(_get(_scope, '_root'), 'SoundVol'));
    _set(_get(_scope, '_root'), 'SoundVol', 0);
}
_set(_scope, 'i', 1);
while (_get(_scope, 'i') <= 7) {
    _set(_scope, 'NowSetVol', _get(_get(_scope, '_root'), 'SoundVol'));
    if ((_get(_scope, 'i') == 1 || _get(_scope, 'i') == 2) && _get(_get(_scope, '_root'), 'SoundVol') > 0) {
        _set(_scope, 'NowSetVol', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'SoundVol') / 1.1]));
    }
    _call(_get(_get(_scope, '_root'), 'S_Sound' + _get(_scope, 'i')), 'setVolume', [_get(_scope, 'NowSetVol')]);
    _update(_scope, 'i', 1, false);
}
},
// DefineButton2_900/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program75(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', false);
},
// DefineButton2_900/BUTTONCONDACTION on(rollOver).as
function program76(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', true);
},
// DefineButton2_906/BUTTONCONDACTION on(release).as
function program77(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'GamePause', true);
_call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
    'Mf_DHKSunWen',
    'M_DHKSunWen',
    999,
    {
        _x: 325,
        _y: 250
    }
]);
},
// DefineButton2_906/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program78(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', false);
},
// DefineButton2_906/BUTTONCONDACTION on(rollOver).as
function program79(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', true);
},
// DefineButton2_912/BUTTONCONDACTION on(release).as
function program80(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'GamePause', true);
_call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
    'Mf_GamePause',
    'M_GamePause',
    999,
    {
        _x: 325,
        _y: 250
    }
]);
},
// DefineButton2_912/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program81(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', false);
},
// DefineButton2_912/BUTTONCONDACTION on(rollOver).as
function program82(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', true);
},
// DefineButton2_916/BUTTONCONDACTION on(release).as
function program83(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'GamePause', true);
_call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
    'Mf_DHKStar',
    'M_DHKStar',
    1000,
    {
        _x: 325,
        _y: 250
    }
]);
},
// DefineButton2_916/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program84(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', false);
},
// DefineButton2_916/BUTTONCONDACTION on(rollOver).as
function program85(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', true);
},
// DefineButton2_946/BUTTONCONDACTION on(release).as
function program86(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'TemSeSiShow', 102);
},
// DefineButton2_946/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program87(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_946/BUTTONCONDACTION on(rollOver).as
function program88(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'MaxHP') + '</b></font>' + ' [\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_948/BUTTONCONDACTION on(release).as
function program89(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
_call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
    0,
    1
]);
_set(_get(_scope, '_root'), 'TemSeSiShow', 6);
},
// DefineButton2_948/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program90(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_948/BUTTONCONDACTION on(rollOver).as
function program91(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_952/BUTTONCONDACTION on(release).as
function program92(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'TemSeSiShow', 0);
},
// DefineButton2_952/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program93(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_952/BUTTONCONDACTION on(rollOver).as
function program94(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'Attack') * _get(_get(_scope, '_root'), 'All_Attack')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'Attack') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_953/BUTTONCONDACTION on(release).as
function program95(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'TemSeSiShow', 0);
},
// DefineButton2_953/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program96(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_953/BUTTONCONDACTION on(rollOver).as
function program97(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_954/BUTTONCONDACTION on(release).as
function program98(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'TemSeSiShow', 0);
},
// DefineButton2_954/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program99(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_954/BUTTONCONDACTION on(rollOver).as
function program100(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_955/BUTTONCONDACTION on(release).as
function program101(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'TemSeSiShow', 0);
},
// DefineButton2_955/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program102(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_955/BUTTONCONDACTION on(rollOver).as
function program103(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'MaxHP') + '</b></font>' + ' [\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_956/BUTTONCONDACTION on(release).as
function program104(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'TemSeSiShow', 0);
},
// DefineButton2_956/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program105(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_956/BUTTONCONDACTION on(rollOver).as
function program106(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'Attack') * _get(_get(_scope, '_root'), 'All_Attack')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'Attack') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_957/BUTTONCONDACTION on(release).as
function program107(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'TemSeSiShow', 0);
},
// DefineButton2_957/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program108(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_957/BUTTONCONDACTION on(rollOver).as
function program109(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_958/BUTTONCONDACTION on(release).as
function program110(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'TemSeSiShow', 0);
},
// DefineButton2_958/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program111(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_958/BUTTONCONDACTION on(rollOver).as
function program112(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_959/BUTTONCONDACTION on(release).as
function program113(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'TemSeSiShow', 0);
},
// DefineButton2_959/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program114(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_959/BUTTONCONDACTION on(rollOver).as
function program115(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_960/BUTTONCONDACTION on(release).as
function program116(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'TemSeSiShow', 0);
},
// DefineButton2_960/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program117(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_960/BUTTONCONDACTION on(rollOver).as
function program118(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'MaxHP') + '</b></font>' + ' [\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'SenJiDian') + '</b></font>');
},
// DefineButton2_961/BUTTONCONDACTION on(release).as
function program119(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'TemSeSiShow', 0);
},
// DefineButton2_961/BUTTONCONDACTION on(releaseOutside, rollOut).as
function program120(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '');
},
// DefineButton2_961/BUTTONCONDACTION on(rollOver).as
function program121(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'MessText', _get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'MessText'));
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessAttack', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'Attack') + '</b></font>');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessMoney', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessHP', '<font color=\'#FF0000\'><b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')])]) + '</b></font>' + '[' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'MaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']');
_set(_get(_get(_scope, '_root'), 'M_MainSSBan'), 'MessSenJi', '<font color=\'#FF0000\'><b>' + _get(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'SenJiDian') + '</b></font>');
},
// DefineSprite_120_Mf_EditDiTu/frame_1/DoAction.as
function program122(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'EditDiToDeph', 0);
_set(_scope, 'SenDianPre', null);
_set(_scope, 'RuKoPre', null);
_set(_scope, 'iy', 0);
while (_get(_scope, 'iy') <= 12) {
    _set(_scope, 'ix', 0);
    while (_get(_scope, 'ix') <= 12) {
        _update(_scope, 'EditDiToDeph', 1, false);
        _set(_scope, 'NowDeph', 200 + _get(_scope, 'EditDiToDeph'));
        _set(_scope, 'EditDiToKuan', _call(_get(_scope, 'M_EDDiTu'), 'attachMovie', [
            'Mf_EditDiToKuan',
            'M_EDTK' + _get(_scope, 'EditDiToDeph'),
            _get(_scope, 'NowDeph')
        ]));
        _set(_get(_scope, 'EditDiToKuan'), '_x', _get(_scope, 'ix') * 32);
        _set(_get(_scope, 'EditDiToKuan'), '_y', _get(_scope, 'iy') * 32);
        _set(_get(_scope, 'EditDiToKuan'), 'ix', _get(_scope, 'ix'));
        _set(_get(_scope, 'EditDiToKuan'), 'iy', _get(_scope, 'iy'));
        _set(_get(_scope, 'EditDiToKuan'), 'R_Deph', _call(_get(_scope, 'EditDiToKuan'), 'getDepth', []));
        _set(_get(_scope, 'EditDiToKuan'), 'GoMax', 3);
        _set(_get(_scope, 'EditDiToKuan'), 'RuKoPD', false);
        _set(_get(_scope, 'EditDiToKuan'), 'RoadPD', true);
        if (_get(_scope, 'ix') == 0 || _get(_scope, 'iy') == 0 || _get(_scope, 'ix') == 12 || _get(_scope, 'iy') == 12) {
            _set(_get(_scope, 'EditDiToKuan'), 'GoMax', 2);
            _set(_get(_scope, 'EditDiToKuan'), 'RuKoPD', true);
            _set(_get(_scope, 'EditDiToKuan'), 'RoadPD', false);
        }
        _set(_get(_scope, 'EditDiToKuan'), 'onRelease', function () {
            _set(_get(_scope, 'B_TEdit1'), 'enabled', true);
            _set(_get(_scope, 'B_TEdit1'), '_alpha', 100);
            _set(_get(_scope, 'B_TEdit3'), 'enabled', false);
            _set(_get(_scope, 'B_TEdit3'), '_alpha', 50);
            var _loc4_ = _get(this, 'MyID');
            _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'attachSound', ['Sf_Sound135']);
            _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'start', [
                0,
                1
            ]);
            var _loc3_ = _get(this, 'GoID') + 1;
            if (_loc3_ == 1 && _get(this, 'RoadPD') == false) {
                _loc3_ = _loc3_ + 1;
            }
            if (_loc3_ == 2) {
                if (_get(this, 'RuKoPD') == false) {
                    _loc3_ = _loc3_ + 1;
                } else {
                    if (_get(_scope, 'RuKoPre') != null) {
                        _call(_get(_scope, 'RuKoPre'), 'gotoAndStop', ['a0']);
                        _call(_get(_scope, 'RuKoPre'), 'swapDepths', [_get(_get(_scope, 'RuKoPre'), 'R_Deph')]);
                    }
                    _set(_scope, 'RuKoPre', this);
                }
            }
            if (_loc3_ > _get(this, 'GoMax')) {
                _loc3_ = 0;
            }
            if (_loc3_ == 3) {
                if (_call(this, 'hitTest', [_get(_scope, 'RuKoPre')])) {
                    _loc3_ = 0;
                } else {
                    if (_get(_scope, 'SenDianPre') != null) {
                        _call(_get(_scope, 'SenDianPre'), 'gotoAndStop', ['a0']);
                        _call(_get(_scope, 'SenDianPre'), 'swapDepths', [_get(_get(_scope, 'SenDianPre'), 'R_Deph')]);
                    }
                    _set(_scope, 'SenDianPre', this);
                }
            }
            _call(this, 'gotoAndStop', ['a' + _loc3_]);
            if (_loc3_ == 0) {
                _call(this, 'swapDepths', [_get(this, 'R_Deph')]);
            } else if (_loc3_ == 1 || _loc3_ == 2) {
                _call(this, 'swapDepths', [_get(this, 'R_Deph') - 200]);
            } else if (_loc3_ == 3) {
                _call(this, 'swapDepths', [_get(this, 'R_Deph') + 200]);
            }
            if (_loc4_ == 9) {
                _set(_scope, 'RuKoPre', null);
            }
            if (_loc4_ == 2) {
                _set(_scope, 'SenDianPre', null);
            }
        });
        _update(_scope, 'ix', 1, false);
    }
    _update(_scope, 'iy', 1, false);
}
_set(_scope, 'TextErr', '');
_set(_scope, 'F_TestDiTu', function () {
    _set(_scope, 'TextErr', '');
    var _loc14_ = [];
    var _loc9_ = false;
    var _loc10_ = false;
    var _loc3_;
    var _loc4_;
    var _loc12_;
    var _loc5_;
    var _loc8_;
    var _loc2_;
    var _loc7_;
    var _loc6_;
    if (_get(_scope, 'RuKoPre') == null || _get(_scope, 'SenDianPre') == null) {
        if (_get(_scope, 'RuKoPre') == null) {
            _set(_scope, 'TextErr', _get(_scope, 'TextErr') + '没有入口\uFF01');
        }
        if (_get(_scope, 'SenDianPre') == null) {
            _set(_scope, 'TextErr', _get(_scope, 'TextErr') + '没有神殿\uFF01');
        }
    } else {
        _loc3_ = _get(_scope, 'RuKoPre');
        _loc4_ = [];
        _call(_loc4_, 'push', [_get(_get(_scope, 'RuKoPre'), '_name')]);
        _loc12_ = null;
        _loc5_ = 1;
        while (_loc5_ <= _get(_scope, 'EditDiToDeph')) {
            if (_get(_loc3_, 'ix') == undefined) {
                break;
            }
            _loc8_ = 0;
            _loc2_ = 1;
            while (_loc2_ <= _get(_scope, 'EditDiToDeph')) {
                if (_get(_loc3_, '_name') != _get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc2_), '_name') && (_get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc2_), 'MyID') == 1 || _get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc2_), 'MyID') == 2)) {
                    if (_get(_loc3_, 'ix') == _get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc2_), 'ix') && _call(_get(_scope, 'Math'), 'abs', [_get(_loc3_, 'iy') - _get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc2_), 'iy')]) == 1 || _get(_loc3_, 'iy') == _get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc2_), 'iy') && _call(_get(_scope, 'Math'), 'abs', [_get(_loc3_, 'ix') - _get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc2_), 'ix')]) == 1) {
                        _loc7_ = 0;
                        _loc6_ = 0;
                        while (_loc6_ < _get(_loc4_, 'length')) {
                            if (_get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc2_), '_name') == _get(_loc4_, _loc6_)) {
                                _loc7_ = _loc7_ + 1;
                            }
                            _loc6_ = _loc6_ + 1;
                        }
                        if (_loc7_ == 0) {
                            _loc8_ = _loc8_ + 1;
                            _loc12_ = _get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc2_);
                        }
                    }
                }
                _loc2_ = _loc2_ + 1;
            }
            if (_loc8_ == 0 && _get(_loc3_, 'MyID') != 2) {
                _set(_scope, 'TextErr', _get(_scope, 'TextErr') + '\xB7道路不通畅\uFF01');
                _loc9_ = false;
                _loc10_ = true;
            }
            if (_loc8_ == 0 && _get(_loc3_, 'MyID') == 2) {
                _set(_scope, 'TextErr', _get(_scope, 'TextErr') + '地图检验合格\uFF01');
                _loc9_ = true;
                _loc10_ = false;
            }
            if (_loc8_ > 1) {
                _set(_scope, 'TextErr', _get(_scope, 'TextErr') + ('\xB7有岔路\uFF01' + _get(_loc3_, 'ix') + '*' + _get(_loc3_, 'iy')));
                _loc9_ = false;
                _loc10_ = true;
            }
            if (_loc8_ == 1) {
                _loc3_ = _loc12_;
                _call(_loc4_, 'push', [_get(_loc3_, '_name')]);
                _loc9_ = false;
                _loc10_ = false;
            }
            if (_loc9_ || _loc10_) {
                break;
            }
            _loc5_ = _loc5_ + 1;
        }
    }
    var _loc13_;
    var _loc11_;
    if (_loc9_) {
        _loc13_ = '';
        _loc5_ = 1;
        while (_loc5_ <= _get(_scope, 'EditDiToDeph')) {
            if (_get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc5_), 'MyID') == 1) {
                _loc11_ = 0;
                _loc6_ = 0;
                while (_loc6_ < _get(_loc4_, 'length')) {
                    if (_get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc5_), '_name') == _get(_loc4_, _loc6_)) {
                        _loc11_ = _loc11_ + 1;
                    }
                    _loc6_ = _loc6_ + 1;
                }
                if (_loc11_ == 0) {
                    _call(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc5_), 'gotoAndStop', ['a0']);
                    _set(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc5_), 'MyID', 0);
                    _call(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc5_), 'swapDepths', [_get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc5_), 'R_Deph')]);
                    _loc13_ = '<br>发现零散道路\uFF0C已自动修正\u3002';
                }
            }
            _loc5_ = _loc5_ + 1;
        }
        _set(_scope, 'TextErr', _get(_scope, 'TextErr') + _loc13_);
    }
    if (_loc9_) {
        _set(_scope, 'TextErr', _get(_scope, 'TextErr') + '<br><br><font color=\'#0000FF\'><b>地图创建成功\uFF0C请保存地图\uFF01</b></font>');
        _set(_get(_scope, 'B_TEdit3'), 'enabled', true);
        _set(_get(_scope, 'B_TEdit3'), '_alpha', 100);
        _set(_get(_scope, 'B_TEdit1'), 'enabled', false);
        _set(_get(_scope, 'B_TEdit1'), '_alpha', 50);
        _call(_scope, 'F_SaveDiToToArr', []);
    } else {
        _set(_scope, 'TextErr', '<font color=\'#FF00FF\'>地图检验不合格\uFF1A</font>' + _get(_scope, 'TextErr'));
        _set(_scope, 'TextErr', _get(_scope, 'TextErr') + '<br><br><font color=\'#FF0000\'><b>地图创建失败\uFF0C请修正后再行检验\uFF01</b></font>');
        _set(_get(_scope, 'B_TEdit3'), 'enabled', false);
        _set(_get(_scope, 'B_TEdit3'), '_alpha', 50);
    }
    _call(this, 'attachMovie', [
        'Mf_EditMess',
        'M_EditMess',
        10,
        {
            _x: 325,
            _y: 250,
            Mess: _get(_scope, 'TextErr')
        }
    ]);
});
_set(_scope, 'SaveDiTuArr', []);
_set(_scope, 'ToiyNum', 0);
_set(_scope, 'i', 0);
while (_get(_scope, 'i') <= 12) {
    _set(_get(_scope, 'SaveDiTuArr'), _get(_scope, 'i'), []);
    _update(_scope, 'i', 1, false);
}
_set(_scope, 'F_SaveDiToToArr', function () {
    _set(_scope, 'ToiyNum', 0);
    _set(_scope, 'SaveDiTuArr', []);
    var _loc1_ = 0;
    while (_loc1_ <= 12) {
        _set(_get(_scope, 'SaveDiTuArr'), _loc1_, []);
        _loc1_ = _loc1_ + 1;
    }
    _loc1_ = 1;
    while (_loc1_ <= _get(_scope, 'EditDiToDeph')) {
        _call(_get(_get(_scope, 'SaveDiTuArr'), _get(_scope, 'ToiyNum')), 'push', [_get(_get(_get(_scope, 'M_EDDiTu'), 'M_EDTK' + _loc1_), 'MyID')]);
        if (_loc1_ % 13 == 0) {
            _update(_scope, 'ToiyNum', 1, false);
        }
        _loc1_ = _loc1_ + 1;
    }
});
_set(_scope, 'F_SaveDiTu', function () {
    var _loc2_ = _call(_get(_scope, 'SaveDiTuArr'), 'slice', []);
    _call(this, 'attachMovie', [
        'Mf_MapSave',
        'M_MapSave',
        10,
        {
            _x: 325,
            _y: 250,
            SaveOrLoad: 1,
            DiTuArr: _loc2_
        }
    ]);
});
},
// DefineSprite_120_Mf_EditDiTu/frame_1/DoAction_2.as
function program123(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_120_Mf_EditDiTu/frame_1/DoAction_3.as
function program124(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_TEdit1'), 'enabled', false);
_set(_get(_scope, 'B_TEdit1'), '_alpha', 50);
_set(_get(_scope, 'B_TEdit2'), 'enabled', true);
_set(_get(_scope, 'B_TEdit2'), '_alpha', 100);
_set(_get(_scope, 'B_TEdit3'), 'enabled', false);
_set(_get(_scope, 'B_TEdit3'), '_alpha', 50);
},
// DefineSprite_128_Mf_GamePause/frame_1/DoAction.as
function program125(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_128_Mf_GamePause/frame_1/DoAction_2.as
function program126(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
},
// DefineSprite_138_Mf_DHKSunWen/frame_1/DoAction.as
function program127(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_138_Mf_DHKSunWen/frame_1/DoAction_2.as
function program128(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound7'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound7'), 'attachSound', ['Sf_Sound105']);
_call(_get(_get(_scope, '_root'), 'S_Sound7'), 'start', [
    0,
    1
]);
},
// DefineSprite_161/frame_1/DoAction.as
function program129(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'PressSet', false);
_set(_get(_scope, 'M_VomRB'), 'onPress', function () {
    if (_get(_get(_scope, '_root'), 'SoundOn')) {
        _set(_scope, 'PressSet', true);
        _call(this, 'startDrag', [
            false,
            8,
            0,
            75,
            0
        ]);
    }
});
_set(_get(_scope, 'M_VomRB'), 'onRelease', function () {
    if (_get(_get(_scope, '_root'), 'SoundOn')) {
        _set(_scope, 'PressSet', false);
        _call(this, 'stopDrag', []);
    }
});
_set(_get(_scope, 'M_VomRB'), 'onReleaseOutside', function () {
    if (_get(_get(_scope, '_root'), 'SoundOn')) {
        _set(_scope, 'PressSet', false);
        _call(this, 'stopDrag', []);
    }
});
_set(_get(_scope, 'M_VomRB'), 'onEnterFrame', function () {
    var _loc3_;
    var _loc4_;
    if (_get(_get(_scope, '_root'), 'SoundOn')) {
        if (_get(_scope, 'PressSet')) {
            _set(_get(_scope, '_root'), 'SoundVolTem', _set(_get(_scope, '_root'), 'SoundVol', (_get(this, '_x') - 8) * 1.492537313432836));
            _loc3_ = 1;
            while (_loc3_ <= 7) {
                _loc4_ = _get(_get(_scope, '_root'), 'SoundVol');
                if ((_loc3_ == 1 || _loc3_ == 2) && _get(_get(_scope, '_root'), 'SoundVol') > 0) {
                    _loc4_ = _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'SoundVol') / 1.1]);
                }
                _call(_get(_get(_scope, '_root'), 'S_Sound' + _loc3_), 'setVolume', [_loc4_]);
                _loc3_ = _loc3_ + 1;
            }
        } else {
            _set(this, '_x', 8 + _get(_get(_scope, '_root'), 'SoundVolTem') / 1.492537313432836);
        }
    }
});
},
// DefineSprite_188/frame_1/DoAction.as
function program130(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'GoToID', 0);
},
// DefineSprite_188/frame_1/DoAction_2.as
function program131(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_10/DoAction.as
function program132(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_15/DoAction.as
function program133(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_20/DoAction.as
function program134(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_25/DoAction.as
function program135(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_30/DoAction.as
function program136(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_35/DoAction.as
function program137(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_40/DoAction.as
function program138(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_45/DoAction.as
function program139(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_5/DoAction.as
function program140(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_50/DoAction.as
function program141(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_188/frame_55/DoAction.as
function program142(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'NowDiTuID', 10);
if (_get(_get(_scope, '_root'), 'NowDiTuID') >= 0 && _get(_get(_scope, '_root'), 'NowDiTuID') <= 9) {
    _call(_get(_get(_scope, '_parent'), 'M_MapShow'), 'gotoAndStop', [_get(_get(_scope, '_root'), 'NowDiTuID') + 1]);
} else {
    _call(_get(_get(_scope, '_parent'), 'M_MapShow'), 'gotoAndStop', [11]);
}
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_1/DoAction.as
function program143(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_10/DoAction.as
function program144(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_11/DoAction.as
function program145(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_2/DoAction.as
function program146(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_3/DoAction.as
function program147(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_4/DoAction.as
function program148(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_5/DoAction.as
function program149(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_6/DoAction.as
function program150(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_7/DoAction.as
function program151(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_8/DoAction.as
function program152(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_214/frame_9/DoAction.as
function program153(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_216/frame_1/DoAction.as
function program154(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_217/frame_1/DoAction.as
function program155(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'MyDiToIDstr', '');
},
// DefineSprite_217/frame_14/DoAction.as
function program156(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_217/frame_19/DoAction.as
function program157(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_JeDang'), '_visible', _get(_get(_scope, '_root'), 'GameStar'));
_set(_get(_scope, 'M_SoundClose'), '_visible', !_get(_get(_scope, '_root'), 'SoundOn'));
_set(_get(_scope, '_root'), 'NowDiTuID', -1);
if (_get(_get(_scope, '_root'), 'NowDiTuID') >= 0 && _get(_get(_scope, '_root'), 'NowDiTuID') <= 9) {
    _call(_get(_scope, 'M_MapShow'), 'gotoAndStop', [_get(_get(_scope, '_root'), 'NowDiTuID') + 1]);
} else {
    _call(_get(_scope, 'M_MapShow'), 'gotoAndStop', [11]);
}
_call(_scope, 'stop', []);
},
// DefineSprite_217/frame_24/DoAction.as
function program158(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_217/frame_5/DoAction.as
function program159(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_217/frame_9/DoAction.as
function program160(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_250_Mf_DHKStar/frame_1/DoAction.as
function program161(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_250_Mf_DHKStar/frame_1/DoAction_2.as
function program162(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_GameStar'), '_visible', !_get(_get(_scope, '_root'), 'GameStar'));
_set(_get(_scope, 'B_GameBack'), '_visible', _get(_get(_scope, '_root'), 'GameStar'));
if (_get(_get(_scope, '_root'), 'GameStar')) {
    _set(_get(_scope, 'B_DaoHang5'), 'enabled', false);
    _call(_get(_scope, 'M_NeiRong'), 'gotoAndStop', ['a2']);
    _set(_get(_scope, 'M_JeDang'), '_visible', true);
} else {
    _set(_get(_scope, 'B_DaoHang5'), 'enabled', true);
    _set(_get(_scope, 'M_JeDang'), '_visible', false);
}
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound106']);
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'start', [
    0,
    99999
]);
},
// DefineSprite_282/frame_1/DoAction.as
function program163(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'SanCount', 0);
_call(_scope, 'stop', []);
},
// DefineSprite_282/frame_19/DoAction.as
function program164(_scope, _get, _set, _call, _update, _delete) {
_update(_scope, 'SanCount', 1, false);
if (_get(_scope, 'SanCount') < 6) {
    _call(_scope, 'gotoAndStop', ['a1']);
    _call(_scope, 'play', []);
} else {
    _call(_scope, 'gotoAndStop', ['a0']);
}
},
// DefineSprite_282/frame_7/DoAction.as
function program165(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'play', []);
},
// DefineSprite_302_Mf_DHKOver/frame_1/DoAction.as
function program166(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_302_Mf_DHKOver/frame_1/DoAction_2.as
function program167(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'GoToID') > 1) {
    _call(_scope, 'gotoAndStop', ['a' + _get(this, 'GoToID')]);
} else {
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound102']);
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'start', [
        0,
        1
    ]);
    _call(_get(_scope, '_root'), 'F_NumShow', [
        this,
        _get(_get(_scope, '_root'), 'GuanEWDeFen'),
        8,
        -70,
        1,
        80
    ]);
    _call(_get(_scope, '_root'), 'F_NumShow', [
        this,
        _get(_get(_scope, '_root'), 'AllEWDeFen'),
        8,
        -43,
        2,
        80
    ]);
    _call(_get(_scope, '_root'), 'F_NumShow', [
        this,
        _get(_get(_scope, '_root'), 'AllDeFen'),
        8,
        -17,
        3,
        88
    ]);
    if (_get(_get(_scope, '_root'), 'NowGuanSu') > 1) {
        _set(_get(_scope, 'M_SanTiao'), '_visible', true);
        _set(_get(_get(_scope, 'M_SanTiao'), 'M_NieTiao'), '_xscale', 1);
        _set(_scope, 'OpenTime', new (_get(_scope, 'Date'))());
        _set(this, 'onEnterFrame', function () {
            var _loc3_ = new (_get(_scope, 'Date'))();
            _set(_get(_get(_scope, 'M_SanTiao'), 'M_NieTiao'), '_xscale', (_loc3_ - _get(_scope, 'OpenTime')) / 20);
            if (_loc3_ - _get(_scope, 'OpenTime') > 2000) {
                _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
                _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
                _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
                    0,
                    1
                ]);
                _call(_get(_scope, '_root'), 'F_GuanStar', []);
                _call(this, 'removeMovieClip', []);
            }
        });
    } else {
        _set(_get(_scope, 'M_SanTiao'), '_visible', false);
    }
    _call(_scope, 'stop', []);
}
},
// DefineSprite_302_Mf_DHKOver/frame_13/DoAction.as
function program168(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'SumitFen', true);
_call(_get(_scope, 'Selection'), 'setFocus', [_get(_scope, 'T_UserName')]);
_set(_scope, 'SiJiFen', _get(_get(_scope, '_root'), 'AllDeFen'));
_set(_scope, 'TempZiFen', _call(_get(_scope, 'Math'), 'sqrt', [_get(_scope, 'SiJiFen') + 0.1234]));
_set(_scope, 'ZiFenStr', new (_get(_scope, 'String'))(_call(_scope, 'String', [_get(_scope, 'TempZiFen')])));
_set(_scope, 'SiaoSuDian', _call(_get(_scope, 'ZiFenStr'), 'indexOf', ['.']));
_set(_scope, 'ZiFenStrB', '0' + _call(_get(_scope, 'ZiFenStr'), 'substr', [
    _get(_scope, 'SiaoSuDian'),
    5
]));
_set(_scope, 'ZiFen', _get(_scope, 'SiJiFen') + _call(_scope, 'Number', [_get(_scope, 'ZiFenStrB')]));
_set(_scope, 'SubmitUserName', '');
_set(_scope, 'SumitURL', '');
_set(_scope, 'JianRanName', function (JRstr) {
    var _loc3_ = new (_get(_scope, 'String'))(_get(JRstr, 'text'));
    var _loc4_ = new (_get(_scope, 'String'))(_loc3_);
    var _loc5_ = _get(_loc3_, 'length');
    var _loc2_ = 0;
    var _loc1_;
    while (_loc2_ < _get(_loc3_, 'length')) {
        _loc1_ = _call(_loc3_, 'charCodeAt', [_loc2_]);
        if (!(_loc1_ == 32 || _loc1_ >= 48 && _loc1_ <= 57 || _loc1_ >= 65 && _loc1_ <= 90 || _loc1_ >= 97 && _loc1_ <= 122)) {
            _loc4_ = _call(_loc3_, 'slice', [
                0,
                _loc2_
            ]) + _call(_loc3_, 'slice', [
                _loc2_ + 1,
                _loc5_
            ]);
            _set(JRstr, 'text', _loc4_);
        }
        _loc2_ = _loc2_ + 1;
    }
});
_set(_scope, 'JianRanKong', function (JRstr) {
    var _loc4_ = false;
    var _loc3_ = new (_get(_scope, 'String'))(_get(JRstr, 'text'));
    var _loc6_ = new (_get(_scope, 'String'))(_loc3_);
    var _loc5_ = _get(_loc3_, 'length');
    var _loc1_;
    var _loc2_;
    if (_loc5_ > 0) {
        _loc4_ = true;
        _loc1_ = 0;
        while (_loc1_ < _get(_loc3_, 'length')) {
            _loc2_ = _call(_loc3_, 'charCodeAt', [_loc1_]);
            if (_loc2_ != 32) {
                _loc4_ = false;
                break;
            }
            _loc1_ = _loc1_ + 1;
        }
    } else {
        _loc4_ = true;
    }
    if (_loc4_) {
        _call(_get(_scope, 'M_EnterName'), 'gotoAndPlay', ['a1']);
    }
    return _loc4_;
});
_set(this, 'onEnterFrame', function () {
    _call(_scope, 'JianRanName', [_get(_scope, 'T_UserName')]);
});
},
// DefineSprite_302_Mf_DHKOver/frame_13/DoAction_2.as
function program169(_scope, _get, _set, _call, _update, _delete) {
if (_get(_get(_scope, '_root'), 'SumitFen')) {
    _set(_get(_scope, 'B_SubitScore'), 'enabled', true);
    _set(_get(_scope, 'B_SubitScore'), '_alpha', 100);
} else {
    _set(_get(_scope, 'B_SubitScore'), 'enabled', false);
    _set(_get(_scope, 'B_SubitScore'), '_alpha', 45);
}
_set(_get(_scope, 'T_UserName'), 'text', _get(_get(_scope, '_root'), 'SumitUserS'));
},
// DefineSprite_302_Mf_DHKOver/frame_13/DoAction_3.as
function program170(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound104']);
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'start', [
    0,
    1
]);
_call(_get(_scope, '_root'), 'F_NumShow', [
    this,
    _get(_get(_scope, '_root'), 'GuanEWDeFen'),
    8,
    -15,
    1,
    80
]);
_call(_get(_scope, '_root'), 'F_NumShow', [
    this,
    _get(_get(_scope, '_root'), 'AllEWDeFen'),
    8,
    12,
    2,
    80
]);
_call(_get(_scope, '_root'), 'F_NumShow', [
    this,
    _get(_get(_scope, '_root'), 'AllDeFen'),
    8,
    38,
    3,
    88
]);
_call(_scope, 'stop', []);
},
// DefineSprite_302_Mf_DHKOver/frame_19/DoAction.as
function program171(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'SumitFen', true);
_call(_get(_scope, 'Selection'), 'setFocus', [_get(_scope, 'T_UserName')]);
_set(_scope, 'SiJiFen', _get(_get(_scope, '_root'), 'AllDeFen'));
_set(_scope, 'TempZiFen', _call(_get(_scope, 'Math'), 'sqrt', [_get(_scope, 'SiJiFen') + 0.1234]));
_set(_scope, 'ZiFenStr', new (_get(_scope, 'String'))(_call(_scope, 'String', [_get(_scope, 'TempZiFen')])));
_set(_scope, 'SiaoSuDian', _call(_get(_scope, 'ZiFenStr'), 'indexOf', ['.']));
_set(_scope, 'ZiFenStrB', '0' + _call(_get(_scope, 'ZiFenStr'), 'substr', [
    _get(_scope, 'SiaoSuDian'),
    5
]));
_set(_scope, 'ZiFen', _get(_scope, 'SiJiFen') + _call(_scope, 'Number', [_get(_scope, 'ZiFenStrB')]));
_set(_scope, 'SubmitUserName', '');
_set(_scope, 'SumitURL', '');
_set(_scope, 'JianRanName', function (JRstr) {
    var _loc3_ = new (_get(_scope, 'String'))(_get(JRstr, 'text'));
    var _loc4_ = new (_get(_scope, 'String'))(_loc3_);
    var _loc5_ = _get(_loc3_, 'length');
    var _loc2_ = 0;
    var _loc1_;
    while (_loc2_ < _get(_loc3_, 'length')) {
        _loc1_ = _call(_loc3_, 'charCodeAt', [_loc2_]);
        if (!(_loc1_ == 32 || _loc1_ >= 48 && _loc1_ <= 57 || _loc1_ >= 65 && _loc1_ <= 90 || _loc1_ >= 97 && _loc1_ <= 122)) {
            _loc4_ = _call(_loc3_, 'slice', [
                0,
                _loc2_
            ]) + _call(_loc3_, 'slice', [
                _loc2_ + 1,
                _loc5_
            ]);
            _set(JRstr, 'text', _loc4_);
        }
        _loc2_ = _loc2_ + 1;
    }
});
_set(_scope, 'JianRanKong', function (JRstr) {
    var _loc4_ = false;
    var _loc3_ = new (_get(_scope, 'String'))(_get(JRstr, 'text'));
    var _loc6_ = new (_get(_scope, 'String'))(_loc3_);
    var _loc5_ = _get(_loc3_, 'length');
    var _loc1_;
    var _loc2_;
    if (_loc5_ > 0) {
        _loc4_ = true;
        _loc1_ = 0;
        while (_loc1_ < _get(_loc3_, 'length')) {
            _loc2_ = _call(_loc3_, 'charCodeAt', [_loc1_]);
            if (_loc2_ != 32) {
                _loc4_ = false;
                break;
            }
            _loc1_ = _loc1_ + 1;
        }
    } else {
        _loc4_ = true;
    }
    if (_loc4_) {
        _call(_get(_scope, 'M_EnterName'), 'gotoAndPlay', ['a1']);
    }
    return _loc4_;
});
_set(this, 'onEnterFrame', function () {
    _call(_scope, 'JianRanName', [_get(_scope, 'T_UserName')]);
});
},
// DefineSprite_302_Mf_DHKOver/frame_19/DoAction_2.as
function program172(_scope, _get, _set, _call, _update, _delete) {
if (_get(_get(_scope, '_root'), 'SumitFen')) {
    _set(_get(_scope, 'B_SubitScore'), 'enabled', true);
    _set(_get(_scope, 'B_SubitScore'), '_alpha', 100);
} else {
    _set(_get(_scope, 'B_SubitScore'), 'enabled', false);
    _set(_get(_scope, 'B_SubitScore'), '_alpha', 45);
}
_set(_get(_scope, 'T_UserName'), 'text', _get(_get(_scope, '_root'), 'SumitUserS'));
},
// DefineSprite_302_Mf_DHKOver/frame_19/DoAction_3.as
function program173(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound103']);
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'start', [
    0,
    1
]);
_call(_get(_scope, '_root'), 'F_NumShow', [
    this,
    _get(_get(_scope, '_root'), 'GuanEWDeFen'),
    8,
    -15,
    1,
    80
]);
_call(_get(_scope, '_root'), 'F_NumShow', [
    this,
    _get(_get(_scope, '_root'), 'AllEWDeFen'),
    8,
    12,
    2,
    80
]);
_call(_get(_scope, '_root'), 'F_NumShow', [
    this,
    _get(_get(_scope, '_root'), 'AllDeFen'),
    8,
    38,
    3,
    88
]);
_call(_scope, 'stop', []);
},
// DefineSprite_302_Mf_DHKOver/frame_7/DoAction.as
function program174(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, '_root'), 'SumitFen', true);
_call(_get(_scope, 'Selection'), 'setFocus', [_get(_scope, 'T_UserName')]);
_set(_scope, 'SiJiFen', _get(_get(_scope, '_root'), 'AllDeFen'));
_set(_scope, 'TempZiFen', _call(_get(_scope, 'Math'), 'sqrt', [_get(_scope, 'SiJiFen') + 0.1234]));
_set(_scope, 'ZiFenStr', new (_get(_scope, 'String'))(_call(_scope, 'String', [_get(_scope, 'TempZiFen')])));
_set(_scope, 'SiaoSuDian', _call(_get(_scope, 'ZiFenStr'), 'indexOf', ['.']));
_set(_scope, 'ZiFenStrB', '0' + _call(_get(_scope, 'ZiFenStr'), 'substr', [
    _get(_scope, 'SiaoSuDian'),
    5
]));
_set(_scope, 'ZiFen', _get(_scope, 'SiJiFen') + _call(_scope, 'Number', [_get(_scope, 'ZiFenStrB')]));
_set(_scope, 'SubmitUserName', '');
_set(_scope, 'SumitURL', '');
_set(_scope, 'JianRanName', function (JRstr) {
    var _loc3_ = new (_get(_scope, 'String'))(_get(JRstr, 'text'));
    var _loc4_ = new (_get(_scope, 'String'))(_loc3_);
    var _loc5_ = _get(_loc3_, 'length');
    var _loc2_ = 0;
    var _loc1_;
    while (_loc2_ < _get(_loc3_, 'length')) {
        _loc1_ = _call(_loc3_, 'charCodeAt', [_loc2_]);
        if (!(_loc1_ == 32 || _loc1_ >= 48 && _loc1_ <= 57 || _loc1_ >= 65 && _loc1_ <= 90 || _loc1_ >= 97 && _loc1_ <= 122)) {
            _loc4_ = _call(_loc3_, 'slice', [
                0,
                _loc2_
            ]) + _call(_loc3_, 'slice', [
                _loc2_ + 1,
                _loc5_
            ]);
            _set(JRstr, 'text', _loc4_);
        }
        _loc2_ = _loc2_ + 1;
    }
});
_set(_scope, 'JianRanKong', function (JRstr) {
    var _loc4_ = false;
    var _loc3_ = new (_get(_scope, 'String'))(_get(JRstr, 'text'));
    var _loc6_ = new (_get(_scope, 'String'))(_loc3_);
    var _loc5_ = _get(_loc3_, 'length');
    var _loc1_;
    var _loc2_;
    if (_loc5_ > 0) {
        _loc4_ = true;
        _loc1_ = 0;
        while (_loc1_ < _get(_loc3_, 'length')) {
            _loc2_ = _call(_loc3_, 'charCodeAt', [_loc1_]);
            if (_loc2_ != 32) {
                _loc4_ = false;
                break;
            }
            _loc1_ = _loc1_ + 1;
        }
    } else {
        _loc4_ = true;
    }
    if (_loc4_) {
        _call(_get(_scope, 'M_EnterName'), 'gotoAndPlay', ['a1']);
    }
    return _loc4_;
});
_set(this, 'onEnterFrame', function () {
    _call(_scope, 'JianRanName', [_get(_scope, 'T_UserName')]);
});
},
// DefineSprite_302_Mf_DHKOver/frame_7/DoAction_2.as
function program175(_scope, _get, _set, _call, _update, _delete) {
if (_get(_get(_scope, '_root'), 'SumitFen')) {
    _set(_get(_scope, 'B_SubitScore'), 'enabled', true);
    _set(_get(_scope, 'B_SubitScore'), '_alpha', 100);
} else {
    _set(_get(_scope, 'B_SubitScore'), 'enabled', false);
    _set(_get(_scope, 'B_SubitScore'), '_alpha', 45);
}
_set(_get(_scope, 'T_UserName'), 'text', _get(_get(_scope, '_root'), 'SumitUserS'));
},
// DefineSprite_302_Mf_DHKOver/frame_7/DoAction_3.as
function program176(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound103']);
_call(_get(_get(_scope, '_root'), 'S_Sound1'), 'start', [
    0,
    1
]);
_call(_get(_scope, '_root'), 'F_NumShow', [
    this,
    _get(_get(_scope, '_root'), 'GuanEWDeFen'),
    8,
    -15,
    1,
    80
]);
_call(_get(_scope, '_root'), 'F_NumShow', [
    this,
    _get(_get(_scope, '_root'), 'AllEWDeFen'),
    8,
    12,
    2,
    80
]);
_call(_get(_scope, '_root'), 'F_NumShow', [
    this,
    _get(_get(_scope, '_root'), 'AllDeFen'),
    8,
    38,
    3,
    88
]);
_call(_scope, 'stop', []);
},
// DefineSprite_310_Mf_DiRen9999/frame_1/DoAction.as
function program177(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 1.8 + (_get(_get(_scope, '_root'), 'NowGuanSu') - 1) * 0.1);
if (_get(this, 'Sudu') > 3.6) {
    _set(this, 'Sudu', 3.6);
}
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 60 * _get(_get(_scope, '_root'), 'NowGuanSu'));
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 10 * _get(_get(_scope, '_root'), 'NowGuanSu'));
_set(this, 'Money', _call(_get(_scope, 'Math'), 'round', [20 * _get(_get(_scope, '_root'), 'NowGuanSu')]));
_set(this, 'SenJiDian', _call(_get(_scope, 'Math'), 'round', [10 * _get(_get(_scope, '_root'), 'NowGuanSu')]));
_set(this, 'Title', '肥牛车');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', _get(_get(_scope, '_root'), 'NowGuanSu'));
_set(this, 'Tyle', 9999);
_set(this, 'TeCang', '善逃');
_set(this, 'TeSing', 5);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_316/frame_1/DoAction.as
function program178(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_316/frame_11/DoAction.as
function program179(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_316/frame_6/DoAction.as
function program180(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_317_Mf_DiRen1/frame_1/DoAction.as
function program181(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 20);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 5);
_set(this, 'Money', 1);
_set(this, 'SenJiDian', 0);
_set(this, 'Title', '泥怪');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 1);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '无');
_set(this, 'TeSing', 0);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_323/frame_1/DoAction.as
function program182(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_323/frame_6/DoAction.as
function program183(_scope, _get, _set, _call, _update, _delete) {
_set(this, '_width', _set(this, '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_call(_scope, 'stop', []);
},
// DefineSprite_328_Mf_GongDian1/frame_1/DoAction.as
function program184(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'FanGiangV', false);
_set(this, 'Title', '神殿');
_set(this, 'TyleStr', '神殿');
_set(this, 'FanWei', 110);
_set(this, 'Die', false);
_set(this, 'Level', 1);
_set(this, 'MaxHP', 50);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'SJMoney', 350);
_set(this, 'SJSenJiDian', 70);
_set(this, 'Tyle', 0);
_set(this, 'LevelB', 2);
_set(this, 'MaxHPB', 100);
_set(this, 'FanWeiB', 130);
_set(this, 'HPB', _get(this, 'MaxHPB'));
_set(_get(_scope, '_root'), 'SDHPstr', _get(this, 'HP') + ' / ' + _get(this, 'MaxHP'));
},
// DefineSprite_328_Mf_GongDian1/frame_1/DoAction_2.as
function program185(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'FanGiangV')) {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a1']);
} else {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a0']);
}
_set(_get(_scope, 'M_FanGiang'), '_width', _set(_get(_scope, 'M_FanGiang'), '_height', _get(this, 'FanWei') * 2));
_call(_scope, 'stop', []);
},
// DefineSprite_328_Mf_GongDian1/frame_11/DoAction.as
function program186(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'FanWei', 150);
_set(this, 'Die', false);
_set(this, 'Level', 3);
_set(this, 'MaxHP', 200);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'LevelB', 0);
_set(_get(_scope, '_root'), 'SDHPstr', _get(this, 'HP') + ' / ' + _get(this, 'MaxHP'));
},
// DefineSprite_328_Mf_GongDian1/frame_11/DoAction_2.as
function program187(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'FanGiangV')) {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a1']);
} else {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a0']);
}
_set(_get(_scope, 'M_FanGiang'), '_width', _set(_get(_scope, 'M_FanGiang'), '_height', _get(this, 'FanWei') * 2));
_call(_scope, 'stop', []);
},
// DefineSprite_328_Mf_GongDian1/frame_17/DoAction.as
function program188(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Die', true);
_set(this, 'HP', 0);
_set(_get(_scope, '_root'), 'SDHPstr', '0 / ' + _get(this, 'MaxHP'));
},
// DefineSprite_328_Mf_GongDian1/frame_17/DoAction_2.as
function program189(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'FanGiangV')) {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a1']);
} else {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a0']);
}
_set(_get(_scope, 'M_FanGiang'), '_width', _set(_get(_scope, 'M_FanGiang'), '_height', _get(this, 'FanWei') * 2));
_call(_scope, 'stop', []);
},
// DefineSprite_328_Mf_GongDian1/frame_6/DoAction.as
function program190(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'FanWei', 130);
_set(this, 'Die', false);
_set(this, 'Level', 2);
_set(this, 'MaxHP', 100);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'SJMoney', 800);
_set(this, 'SJSenJiDian', 160);
_set(this, 'LevelB', 3);
_set(this, 'MaxHPB', 200);
_set(this, 'FanWeiB', 150);
_set(this, 'HPB', _get(this, 'MaxHPB'));
_set(_get(_scope, '_root'), 'SDHPstr', _get(this, 'HP') + ' / ' + _get(this, 'MaxHP'));
},
// DefineSprite_328_Mf_GongDian1/frame_6/DoAction_2.as
function program191(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'FanGiangV')) {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a1']);
} else {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a0']);
}
_set(_get(_scope, 'M_FanGiang'), '_width', _set(_get(_scope, 'M_FanGiang'), '_height', _get(this, 'FanWei') * 2));
_call(_scope, 'stop', []);
},
// DefineSprite_332_Mf_RuKoRun/frame_1/DoAction.as
function program192(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_352/frame_1/DoAction.as
function program193(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'MyMess', '');
_set(_scope, 'MessTile', '');
},
// DefineSprite_352/frame_1/DoAction_2.as
function program194(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'SJMoney', '<b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_scope, 'MivObject'), 'SJMoney') * _get(_get(_scope, '_root'), 'BuyLu')])]) + '</b>' + ' [' + _get(_get(_scope, 'MivObject'), 'SJMoney') + '\xD7' + _get(_get(_scope, '_root'), 'BuyLu') + ']');
_set(this, 'SJSenJiDian', '<b>' + _get(_get(_scope, 'MivObject'), 'SJSenJiDian') + '</b>');
if (_get(_get(_scope, 'MivObject'), 'LevelB') > 0) {
    if (_get(_get(_scope, '_root'), 'Money') < _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, 'MivObject'), 'SJMoney') * _get(_get(_scope, '_root'), 'BuyLu')]) || _get(_get(_scope, '_root'), 'SenJiDian') < _get(_get(_scope, 'MivObject'), 'SJSenJiDian')) {
        _set(_get(_scope, 'B_SenJi'), 'enabled', false);
        _set(_scope, 'colorTrans_1', new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 0, 0, 0));
        _set(_scope, 'trans', new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_scope, 'B_SenJi')));
        _set(_get(_scope, 'trans'), 'colorTransform', _get(_scope, 'colorTrans_1'));
        _set(_scope, 'QeiStr', '金钱');
        if (_get(_get(_scope, '_root'), 'SenJiDian') < _get(_get(_scope, 'MivObject'), 'SJSenJiDian')) {
            _set(_scope, 'QeiStr', '神迹');
        }
        _set(_scope, 'MyMess', '<font color=\'#FF0000\'>没有足够的' + _get(_scope, 'QeiStr') + '用以升级\uFF01</font>');
    } else {
        _set(_get(_scope, 'B_SenJi'), 'enabled', true);
        _set(_scope, 'colorTrans_1', new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0));
        _set(_scope, 'trans', new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_scope, 'B_SenJi')));
        _set(_get(_scope, 'trans'), 'colorTransform', _get(_scope, 'colorTrans_1'));
        _set(_scope, 'MyMess', '当前可以升级\uFF01');
    }
} else {
    _set(this, '_visible', false);
}
},
// DefineSprite_356/frame_1/DoAction.as
function program195(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'MyMess', '');
_set(_scope, 'MessTile', '');
},
// DefineSprite_356/frame_1/DoAction_2.as
function program196(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'SellMoney', '<b>' + _call(_get(_scope, 'Math'), 'round', [_call(_scope, 'Number', [_get(_get(_scope, 'MivObject'), 'Money') * _get(_get(_scope, '_root'), 'SellLu')])]) + '</b>' + ' [' + _get(_get(_scope, 'MivObject'), 'Money') + '\xD7' + _get(_get(_scope, '_root'), 'SellLu') + ']');
_set(_scope, 'MyMess', '当前出售折旧率\uFF1A' + _get(_get(_scope, '_root'), 'SellLu'));
},
// DefineSprite_439_Mf_DHKSuSing/frame_1/DoAction.as
function program197(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_439_Mf_DHKSuSing/frame_1/DoAction_2.as
function program198(_scope, _get, _set, _call, _update, _delete) {
if (_get(_get(this, 'MivObject'), '_visible')) {
    _set(this, 'Title', _get(_get(this, 'MivObject'), 'Title'));
    _set(this, 'TyleStr', _get(_get(this, 'MivObject'), 'TyleStr'));
    _set(this, 'Level', _get(_get(this, 'MivObject'), 'Level'));
    _set(_scope, 'AttackStr', '<b>' + _get(_get(this, 'MivObject'), 'Attack') + '</b>');
    _set(_scope, 'AttackStrB', '<b>' + _get(_get(this, 'MivObject'), 'AttackB') + '</b>');
    if (_get(_get(this, 'MivObject'), 'TaTyle') == 1 || _get(_get(this, 'MivObject'), 'TaTyle') == 2) {
        _set(_scope, 'AttackStr', '<b>' + _get(_get(this, 'MivObject'), 'Attack') + '</b>');
        _set(_scope, 'AttackStr', _get(_scope, 'AttackStr') + (' [' + _get(_get(this, 'MivObject'), 'rAttack') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']'));
        _set(_scope, 'AttackStrB', '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(this, 'MivObject'), 'AttackB') * _get(_get(_scope, '_root'), 'All_Attack')]) + '</b>');
        _set(_scope, 'AttackStrB', _get(_scope, 'AttackStrB') + (' [' + _get(_get(this, 'MivObject'), 'AttackB') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']'));
    }
    _set(this, 'Attack', _get(_scope, 'AttackStr'));
    _set(this, 'AttackB', _get(_scope, 'AttackStrB'));
    _set(_scope, 'MaxHPStr', '<b>' + _get(_get(this, 'MivObject'), 'MaxHP') + '</b>');
    _set(_scope, 'MaxHPStrB', '<b>' + _get(_get(this, 'MivObject'), 'MaxHPB') + '</b>');
    if (_get(_get(this, 'MivObject'), 'Tyle') != 0) {
        _set(_scope, 'MaxHPStr', '<b>' + _get(_get(this, 'MivObject'), 'MaxHP') + '</b>');
        _set(_scope, 'MaxHPStr', _get(_scope, 'MaxHPStr') + (' [' + _get(_get(this, 'MivObject'), 'rMaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']'));
        _set(_scope, 'MaxHPStrB', '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(this, 'MivObject'), 'MaxHPB') * _get(_get(_scope, '_root'), 'All_MaxHP')]) + '</b>');
        _set(_scope, 'MaxHPStrB', _get(_scope, 'MaxHPStrB') + (' [' + _get(_get(this, 'MivObject'), 'MaxHPB') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']'));
    }
    _set(this, 'MaxHP', _get(_scope, 'MaxHPStr'));
    _set(this, 'MaxHPB', _get(_scope, 'MaxHPStrB'));
    _set(this, 'HP', '<b>' + _get(_get(this, 'MivObject'), 'HP') + '</b>');
    _set(this, 'HPB', '<b>' + _get(_get(this, 'MivObject'), 'HPB') + '</b>');
    _set(this, 'FanWei', '<b>' + _get(_get(this, 'MivObject'), 'FanWei') + '</b>');
    _set(this, 'FaSieJJ', '<b>' + _get(_get(this, 'MivObject'), 'FaSieJJ') + '</b>');
    _set(this, 'JianSuDu', '<b>' + _get(_get(this, 'MivObject'), 'JianSuDu') + '</b>');
    _set(this, 'LevelB', _get(_get(this, 'MivObject'), 'LevelB'));
    if (_get(this, 'LevelB') > 0) {
        _set(this, 'FanWeiB', '<b>' + _get(_get(this, 'MivObject'), 'FanWeiB') + '</b>');
        _set(this, 'FaSieJJB', '<b>' + _get(_get(this, 'MivObject'), 'FaSieJJB') + '</b>');
        _set(this, 'JianSuDuB', '<b>' + _get(_get(this, 'MivObject'), 'JianSuDuB') + '</b>');
        _set(this, 'Sudu', '<b>' + _get(_get(this, 'MivObject'), 'Sudu') + '</b>');
        _set(this, 'Money', '<b>' + _get(_get(this, 'MivObject'), 'Money') + '</b>');
        _set(this, 'SenJiDian', '<b>' + _get(_get(this, 'MivObject'), 'SenJiDian') + '</b>');
    } else {
        _set(this, 'MaxHPB', '已升至最高级\uFF01');
        _set(this, 'HPB', '已升至最高级\uFF01');
        _set(this, 'AttackB', '已升至最高级\uFF01');
        _set(this, 'FaSieJJB', '已升至最高级\uFF01');
        _set(this, 'FanWeiB', '已升至最高级\uFF01');
        _set(this, 'JianSuDuB', '已升至最高级\uFF01');
    }
} else {
    _call(this, 'removeMovieClip', []);
}
_call(_scope, 'play', []);
},
// DefineSprite_439_Mf_DHKSuSing/frame_11/DoAction.as
function program199(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'gotoAndStop', ['a2']);
_call(_scope, 'play', []);
},
// DefineSprite_439_Mf_DHKSuSing/frame_18/DoAction.as
function program200(_scope, _get, _set, _call, _update, _delete) {
if (_get(_get(this, 'MivObject'), '_visible')) {
    _set(this, 'Title', _get(_get(this, 'MivObject'), 'Title'));
    _set(this, 'TyleStr', _get(_get(this, 'MivObject'), 'TyleStr'));
    _set(this, 'Level', _get(_get(this, 'MivObject'), 'Level'));
    _set(_scope, 'AttackStr', '<b>' + _get(_get(this, 'MivObject'), 'Attack') + '</b>');
    _set(_scope, 'AttackStrB', '<b>' + _get(_get(this, 'MivObject'), 'AttackB') + '</b>');
    if (_get(_get(this, 'MivObject'), 'TaTyle') == 1 || _get(_get(this, 'MivObject'), 'TaTyle') == 2) {
        _set(_scope, 'AttackStr', '<b>' + _get(_get(this, 'MivObject'), 'Attack') + '</b>');
        _set(_scope, 'AttackStr', _get(_scope, 'AttackStr') + (' [' + _get(_get(this, 'MivObject'), 'rAttack') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']'));
        _set(_scope, 'AttackStrB', '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(this, 'MivObject'), 'AttackB') * _get(_get(_scope, '_root'), 'All_Attack')]) + '</b>');
        _set(_scope, 'AttackStrB', _get(_scope, 'AttackStrB') + (' [' + _get(_get(this, 'MivObject'), 'AttackB') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']'));
    }
    _set(this, 'Attack', _get(_scope, 'AttackStr'));
    _set(this, 'AttackB', _get(_scope, 'AttackStrB'));
    _set(_scope, 'MaxHPStr', '<b>' + _get(_get(this, 'MivObject'), 'MaxHP') + '</b>');
    _set(_scope, 'MaxHPStrB', '<b>' + _get(_get(this, 'MivObject'), 'MaxHPB') + '</b>');
    if (_get(_get(this, 'MivObject'), 'Tyle') != 0) {
        _set(_scope, 'MaxHPStr', '<b>' + _get(_get(this, 'MivObject'), 'MaxHP') + '</b>');
        _set(_scope, 'MaxHPStr', _get(_scope, 'MaxHPStr') + (' [' + _get(_get(this, 'MivObject'), 'rMaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']'));
        _set(_scope, 'MaxHPStrB', '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(this, 'MivObject'), 'MaxHPB') * _get(_get(_scope, '_root'), 'All_MaxHP')]) + '</b>');
        _set(_scope, 'MaxHPStrB', _get(_scope, 'MaxHPStrB') + (' [' + _get(_get(this, 'MivObject'), 'MaxHPB') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']'));
    }
    _set(this, 'MaxHP', _get(_scope, 'MaxHPStr'));
    _set(this, 'MaxHPB', _get(_scope, 'MaxHPStrB'));
    _set(this, 'HP', '<b>' + _get(_get(this, 'MivObject'), 'HP') + '</b>');
    _set(this, 'HPB', '<b>' + _get(_get(this, 'MivObject'), 'HPB') + '</b>');
    _set(this, 'FanWei', '<b>' + _get(_get(this, 'MivObject'), 'FanWei') + '</b>');
    _set(this, 'FaSieJJ', '<b>' + _get(_get(this, 'MivObject'), 'FaSieJJ') + '</b>');
    _set(this, 'JianSuDu', '<b>' + _get(_get(this, 'MivObject'), 'JianSuDu') + '</b>');
    _set(this, 'LevelB', _get(_get(this, 'MivObject'), 'LevelB'));
    if (_get(this, 'LevelB') > 0) {
        _set(this, 'FanWeiB', '<b>' + _get(_get(this, 'MivObject'), 'FanWeiB') + '</b>');
        _set(this, 'FaSieJJB', '<b>' + _get(_get(this, 'MivObject'), 'FaSieJJB') + '</b>');
        _set(this, 'JianSuDuB', '<b>' + _get(_get(this, 'MivObject'), 'JianSuDuB') + '</b>');
        _set(this, 'Sudu', '<b>' + _get(_get(this, 'MivObject'), 'Sudu') + '</b>');
        _set(this, 'Money', '<b>' + _get(_get(this, 'MivObject'), 'Money') + '</b>');
        _set(this, 'SenJiDian', '<b>' + _get(_get(this, 'MivObject'), 'SenJiDian') + '</b>');
    } else {
        _set(this, 'MaxHPB', '已升至最高级\uFF01');
        _set(this, 'HPB', '已升至最高级\uFF01');
        _set(this, 'AttackB', '已升至最高级\uFF01');
        _set(this, 'FaSieJJB', '已升至最高级\uFF01');
        _set(this, 'FanWeiB', '已升至最高级\uFF01');
        _set(this, 'JianSuDuB', '已升至最高级\uFF01');
    }
} else {
    _call(this, 'removeMovieClip', []);
}
_call(_scope, 'play', []);
},
// DefineSprite_439_Mf_DHKSuSing/frame_22/DoAction.as
function program201(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'gotoAndStop', ['a3']);
_call(_scope, 'play', []);
},
// DefineSprite_439_Mf_DHKSuSing/frame_28/DoAction.as
function program202(_scope, _get, _set, _call, _update, _delete) {
if (_get(_get(this, 'MivObject'), '_visible')) {
    _set(this, 'Title', _get(_get(this, 'MivObject'), 'Title'));
    _set(this, 'TyleStr', _get(_get(this, 'MivObject'), 'TyleStr'));
    _set(this, 'Level', _get(_get(this, 'MivObject'), 'Level'));
    _set(_scope, 'AttackStr', '<b>' + _get(_get(this, 'MivObject'), 'Attack') + '</b>');
    _set(_scope, 'AttackStrB', '<b>' + _get(_get(this, 'MivObject'), 'AttackB') + '</b>');
    if (_get(_get(this, 'MivObject'), 'TaTyle') == 1 || _get(_get(this, 'MivObject'), 'TaTyle') == 2) {
        _set(_scope, 'AttackStr', '<b>' + _get(_get(this, 'MivObject'), 'Attack') + '</b>');
        _set(_scope, 'AttackStr', _get(_scope, 'AttackStr') + (' [' + _get(_get(this, 'MivObject'), 'rAttack') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']'));
        _set(_scope, 'AttackStrB', '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(this, 'MivObject'), 'AttackB') * _get(_get(_scope, '_root'), 'All_Attack')]) + '</b>');
        _set(_scope, 'AttackStrB', _get(_scope, 'AttackStrB') + (' [' + _get(_get(this, 'MivObject'), 'AttackB') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']'));
    }
    _set(this, 'Attack', _get(_scope, 'AttackStr'));
    _set(this, 'AttackB', _get(_scope, 'AttackStrB'));
    _set(_scope, 'MaxHPStr', '<b>' + _get(_get(this, 'MivObject'), 'MaxHP') + '</b>');
    _set(_scope, 'MaxHPStrB', '<b>' + _get(_get(this, 'MivObject'), 'MaxHPB') + '</b>');
    _set(this, 'MaxHP', _get(_scope, 'MaxHPStr'));
    _set(this, 'MaxHPB', _get(_scope, 'MaxHPStrB'));
    _set(this, 'HP', '<b>' + _get(_get(this, 'MivObject'), 'HP') + '</b>');
    _set(this, 'HPB', '<b>' + _get(_get(this, 'MivObject'), 'HPB') + '</b>');
    _set(this, 'FanWei', '<b>' + _get(_get(this, 'MivObject'), 'FanWei') + '</b>');
    _set(this, 'FaSieJJ', '<b>' + _get(_get(this, 'MivObject'), 'FaSieJJ') + '</b>');
    _set(this, 'JianSuDu', '<b>' + _get(_get(this, 'MivObject'), 'JianSuDu') + '</b>');
    _set(this, 'LevelB', _get(_get(this, 'MivObject'), 'LevelB'));
    if (_get(this, 'LevelB') > 0) {
        _set(this, 'FanWeiB', '<b>' + _get(_get(this, 'MivObject'), 'FanWeiB') + '</b>');
        _set(this, 'FaSieJJB', '<b>' + _get(_get(this, 'MivObject'), 'FaSieJJB') + '</b>');
        _set(this, 'JianSuDuB', '<b>' + _get(_get(this, 'MivObject'), 'JianSuDuB') + '</b>');
        _set(this, 'Sudu', '<b>' + _get(_get(this, 'MivObject'), 'Sudu') + '</b>');
        _set(this, 'Money', '<b>' + _get(_get(this, 'MivObject'), 'Money') + '</b>');
        _set(this, 'SenJiDian', '<b>' + _get(_get(this, 'MivObject'), 'SenJiDian') + '</b>');
    } else {
        _set(this, 'MaxHPB', '已升至最高级\uFF01');
        _set(this, 'HPB', '已升至最高级\uFF01');
        _set(this, 'AttackB', '已升至最高级\uFF01');
        _set(this, 'FaSieJJB', '已升至最高级\uFF01');
        _set(this, 'FanWeiB', '已升至最高级\uFF01');
        _set(this, 'JianSuDuB', '已升至最高级\uFF01');
    }
} else {
    _call(this, 'removeMovieClip', []);
}
_call(_scope, 'play', []);
},
// DefineSprite_439_Mf_DHKSuSing/frame_28/DoAction_2.as
function program203(_scope, _get, _set, _call, _update, _delete) {
if (_get(_get(_scope, '_root'), 'LieRingCount') > 0) {
    _set(_get(_scope, 'B_JuiJi'), 'enabled', true);
    _set(_get(_scope, 'B_JuiJi'), '_alpha', 100);
} else {
    _set(_get(_scope, 'B_JuiJi'), 'enabled', false);
    _set(_get(_scope, 'B_JuiJi'), '_alpha', 45);
}
},
// DefineSprite_439_Mf_DHKSuSing/frame_32/DoAction.as
function program204(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'gotoAndStop', ['a4']);
_call(_scope, 'play', []);
},
// DefineSprite_439_Mf_DHKSuSing/frame_5/DoAction.as
function program205(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'gotoAndStop', ['a1']);
_call(_scope, 'play', []);
},
// DefineSprite_439_Mf_DHKSuSing/frame_7/DoAction.as
function program206(_scope, _get, _set, _call, _update, _delete) {
if (_get(_get(this, 'MivObject'), '_visible')) {
    _set(this, 'Title', _get(_get(this, 'MivObject'), 'Title'));
    _set(this, 'TyleStr', _get(_get(this, 'MivObject'), 'TyleStr'));
    _set(this, 'Level', _get(_get(this, 'MivObject'), 'Level'));
    _set(_scope, 'AttackStr', '<b>' + _get(_get(this, 'MivObject'), 'Attack') + '</b>');
    _set(_scope, 'AttackStrB', '<b>' + _get(_get(this, 'MivObject'), 'AttackB') + '</b>');
    if (_get(_get(this, 'MivObject'), 'TaTyle') == 1 || _get(_get(this, 'MivObject'), 'TaTyle') == 2) {
        _set(_scope, 'AttackStr', '<b>' + _get(_get(this, 'MivObject'), 'Attack') + '</b>');
        _set(_scope, 'AttackStr', _get(_scope, 'AttackStr') + (' [' + _get(_get(this, 'MivObject'), 'rAttack') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']'));
        _set(_scope, 'AttackStrB', '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(this, 'MivObject'), 'AttackB') * _get(_get(_scope, '_root'), 'All_Attack')]) + '</b>');
        _set(_scope, 'AttackStrB', _get(_scope, 'AttackStrB') + (' [' + _get(_get(this, 'MivObject'), 'AttackB') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']'));
    }
    _set(this, 'Attack', _get(_scope, 'AttackStr'));
    _set(this, 'AttackB', _get(_scope, 'AttackStrB'));
    _set(_scope, 'MaxHPStr', '<b>' + _get(_get(this, 'MivObject'), 'MaxHP') + '</b>');
    _set(_scope, 'MaxHPStrB', '<b>' + _get(_get(this, 'MivObject'), 'MaxHPB') + '</b>');
    if (_get(_get(this, 'MivObject'), 'Tyle') != 0) {
        _set(_scope, 'MaxHPStr', '<b>' + _get(_get(this, 'MivObject'), 'MaxHP') + '</b>');
        _set(_scope, 'MaxHPStr', _get(_scope, 'MaxHPStr') + (' [' + _get(_get(this, 'MivObject'), 'rMaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']'));
        _set(_scope, 'MaxHPStrB', '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(_get(this, 'MivObject'), 'MaxHPB') * _get(_get(_scope, '_root'), 'All_MaxHP')]) + '</b>');
        _set(_scope, 'MaxHPStrB', _get(_scope, 'MaxHPStrB') + (' [' + _get(_get(this, 'MivObject'), 'MaxHPB') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']'));
    }
    _set(this, 'MaxHP', _get(_scope, 'MaxHPStr'));
    _set(this, 'MaxHPB', _get(_scope, 'MaxHPStrB'));
    _set(this, 'HP', '<b>' + _get(_get(this, 'MivObject'), 'HP') + '</b>');
    _set(this, 'HPB', '<b>' + _get(_get(this, 'MivObject'), 'HPB') + '</b>');
    _set(this, 'FanWei', '<b>' + _get(_get(this, 'MivObject'), 'FanWei') + '</b>');
    _set(this, 'FaSieJJ', '<b>' + _get(_get(this, 'MivObject'), 'FaSieJJ') + '</b>');
    _set(this, 'JianSuDu', '<b>' + _get(_get(this, 'MivObject'), 'JianSuDu') + '</b>');
    _set(this, 'LevelB', _get(_get(this, 'MivObject'), 'LevelB'));
    if (_get(this, 'LevelB') > 0) {
        _set(this, 'FanWeiB', '<b>' + _get(_get(this, 'MivObject'), 'FanWeiB') + '</b>');
        _set(this, 'FaSieJJB', '<b>' + _get(_get(this, 'MivObject'), 'FaSieJJB') + '</b>');
        _set(this, 'JianSuDuB', '<b>' + _get(_get(this, 'MivObject'), 'JianSuDuB') + '</b>');
        _set(this, 'Sudu', '<b>' + _get(_get(this, 'MivObject'), 'Sudu') + '</b>');
        _set(this, 'Money', '<b>' + _get(_get(this, 'MivObject'), 'Money') + '</b>');
        _set(this, 'SenJiDian', '<b>' + _get(_get(this, 'MivObject'), 'SenJiDian') + '</b>');
    } else {
        _set(this, 'MaxHPB', '已升至最高级\uFF01');
        _set(this, 'HPB', '已升至最高级\uFF01');
        _set(this, 'AttackB', '已升至最高级\uFF01');
        _set(this, 'FaSieJJB', '已升至最高级\uFF01');
        _set(this, 'FanWeiB', '已升至最高级\uFF01');
        _set(this, 'JianSuDuB', '已升至最高级\uFF01');
    }
} else {
    _call(this, 'removeMovieClip', []);
}
_call(_scope, 'play', []);
},
// DefineSprite_441_Mf_Jian3/frame_1/DoAction.as
function program207(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'FanWei', 40);
},
// DefineSprite_443_Mf_Jian1/frame_1/DoAction.as
function program208(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'FanWei', 0);
},
// DefineSprite_445_Mf_Jian2/frame_1/DoAction.as
function program209(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'FanWei', 40);
},
// DefineSprite_447_Mf_Jian4/frame_1/DoAction.as
function program210(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'tyle', 4);
},
// DefineSprite_45/frame_1/DoAction.as
function program211(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_SellKang'), '_visible', false);
},
// DefineSprite_451/frame_1/DoAction.as
function program212(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 1));
_set(_get(_scope, '_parent'), 'FaSieJJ', 5);
_set(_get(_scope, '_parent'), 'JianSuDu', 10);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 50)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 80));
_set(_get(_scope, '_parent'), 'rAttack', _set(_get(_scope, '_parent'), 'Attack', 12));
_set(_get(_scope, '_parent'), 'Attack', _get(_get(_scope, '_parent'), 'rAttack') * _get(_get(_scope, '_root'), 'All_Attack'));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 25));
_set(this, 'SJSenJiDian', _set(_get(_scope, '_parent'), 'SJSenJiDian', 0));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _set(_get(_scope, '_parent'), 'MaxHPB', 90)));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 2));
_set(_get(_scope, '_parent'), 'FaSieJJB', 3);
_set(_get(_scope, '_parent'), 'JianSuDuB', 11);
_set(_get(_scope, '_parent'), 'FanWeiB', 90);
_set(_get(_scope, '_parent'), 'AttackB', 32);
_call(_scope, 'stop', []);
},
// DefineSprite_451/frame_11/DoAction.as
function program213(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 3));
_set(_get(_scope, '_parent'), 'FaSieJJ', 1);
_set(_get(_scope, '_parent'), 'JianSuDu', 14);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 150)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 100));
_set(_get(_scope, '_parent'), 'rAttack', _set(_get(_scope, '_parent'), 'Attack', 75));
_set(_get(_scope, '_parent'), 'Attack', _get(_get(_scope, '_parent'), 'rAttack') * _get(_get(_scope, '_root'), 'All_Attack'));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 0));
_call(_scope, 'stop', []);
},
// DefineSprite_451/frame_6/DoAction.as
function program214(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 2));
_set(_get(_scope, '_parent'), 'FaSieJJ', 3);
_set(_get(_scope, '_parent'), 'JianSuDu', 12);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 90)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 90));
_set(_get(_scope, '_parent'), 'rAttack', _set(_get(_scope, '_parent'), 'Attack', 32));
_set(_get(_scope, '_parent'), 'Attack', _get(_get(_scope, '_parent'), 'rAttack') * _get(_get(_scope, '_root'), 'All_Attack'));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 65));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _set(_get(_scope, '_parent'), 'MaxHPB', 150)));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 3));
_set(_get(_scope, '_parent'), 'FaSieJJB', 1);
_set(_get(_scope, '_parent'), 'JianSuDuB', 12);
_set(_get(_scope, '_parent'), 'FanWeiB', 100);
_set(_get(_scope, '_parent'), 'AttackB', 75);
_call(_scope, 'stop', []);
},
// DefineSprite_465/frame_2/DoAction.as
function program215(_scope, _get, _set, _call, _update, _delete) {
_update(_get(_scope, '_parent'), 'TemFaSieJJ', 1, false);
if (_get(_get(_scope, '_parent'), 'TemFaSieJJ') > _get(_get(_scope, '_parent'), 'FaSieJJ')) {
    if (_get(_get(_scope, '_parent'), 'DiRenName') != '' && _get(_get(_scope, '_parent'), 'RotionedPD') && _get(_get(_scope, '_root'), 'GamePause') == false) {
        _call(_scope, 'gotoAndStop', ['a1']);
        _call(_scope, 'play', []);
    } else {
        _call(_scope, 'gotoAndStop', ['a0']);
        _call(_scope, 'play', []);
    }
} else {
    _call(_scope, 'gotoAndStop', ['a0']);
    _call(_scope, 'play', []);
}
},
// DefineSprite_465/frame_25/DoAction.as
function program216(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'gotoAndStop', ['a0']);
_call(_scope, 'play', []);
},
// DefineSprite_465/frame_5/DoAction.as
function program217(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'NowPoint', {
    x: 0,
    y: 0
});
_call(_get(this, 'M_Jian'), 'localToGlobal', [_get(_scope, 'NowPoint')]);
if (_get(_get(_scope, '_root'), 'MySellID') == 3) {
    _update(_get(_scope, '_parent'), 'HPmini', -1, false);
    _set(_get(_scope, '_parent'), 'HP', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_parent'), 'HPmini') / _get(_get(_scope, '_root'), 'SeSiHPmini')]));
    if (_get(_get(_scope, '_parent'), 'HP') <= 1) {
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
            0,
            1
        ]);
        _set(_get(_get(_scope, '_parent'), 'DiTuObject'), 'SeSi', '');
        _call(_get(_scope, '_parent'), 'removeMovieClip', []);
    }
    _update(_get(_scope, '_parent'), 'Money', -1, false);
    if (_get(_get(_scope, '_parent'), 'Money') < 0) {
        _set(_get(_scope, '_parent'), 'Money', 0);
    }
}
_call(_get(_scope, '_root'), 'F_SeiJian', [
    _get(_get(_scope, '_parent'), 'DiRenName'),
    _get(_get(_scope, '_parent'), 'Attack'),
    'Mf_Jian1',
    _get(_get(_scope, '_parent'), 'FanWei') + 10,
    _get(_get(_scope, '_parent'), 'JianSuDu'),
    _get(this, '_rotation'),
    _get(_get(_scope, 'NowPoint'), 'x'),
    _get(_get(_scope, 'NowPoint'), 'y'),
    1
]);
_set(_get(_scope, '_parent'), 'TemFaSieJJ', 0);
_call(_scope, 'play', []);
},
// DefineSprite_466_Mf_SeSi1/frame_1/DoAction.as
function program218(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 50);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'JianSuDu', 10);
_set(this, 'FaSieJJ', 5);
_set(this, 'TemFaSieJJ', _get(this, 'FaSieJJ'));
_set(this, 'FanWei', 80);
_set(this, 'Attack', 12);
_set(this, 'MAXAngle', 10);
_set(this, 'DiRenName', '');
_set(this, 'Tyle', 1);
_set(this, 'TaTyle', 1);
_set(this, 'Title', '弩箭塔');
_set(this, 'TyleStr', '防御塔');
_set(this, 'Money', 9);
_set(this, 'SenJiDian', 0);
_set(this, 'MaxHPB', 50);
_set(this, 'HPB', _get(this, 'MaxHP'));
_set(this, 'MessText', '\u3013 <b>弩箭塔</b> \u3013<br>   普通的防御塔\uFF0C主动攻击进入射程内的敌人\uFF0C特点是造价便宜\u3002<br> \u25C7 攻击方式\uFF1A单个攻击\u3002');
},
// DefineSprite_466_Mf_SeSi1/frame_1/DoAction_2.as
function program219(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'FanGiangV')) {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a1']);
} else {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a0']);
}
_set(_get(_scope, 'B_Button'), '_visible', _get(this, 'Star'));
_set(_get(_scope, 'M_FanGiang'), '_width', _set(_get(_scope, 'M_FanGiang'), '_height', _get(this, 'FanWei') * 2));
_set(this, 'onEnterFrame', _get(_get(_scope, '_root'), 'F_JianTaRot'));
},
// DefineSprite_47/frame_1/DoAction.as
function program220(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_SellKang'), '_visible', false);
},
// DefineSprite_472/frame_1/DoAction.as
function program221(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 1));
_set(_get(_scope, '_parent'), 'FaSieJJ', 0);
_set(_get(_scope, '_parent'), 'JianSuDu', 9);
_set(_get(_scope, '_parent'), 'FanWei', 9999);
_set(_get(_scope, '_parent'), 'Attack', 250);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 100)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 400));
_set(this, 'SJSenJiDian', _set(_get(_scope, '_parent'), 'SJSenJiDian', 0));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _set(_get(_scope, '_parent'), 'MaxHPB', 150)));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 2));
_set(_get(_scope, '_parent'), 'FaSieJJB', 0);
_set(_get(_scope, '_parent'), 'JianSuDuB', 10);
_set(_get(_scope, '_parent'), 'FanWeiB', 9999);
_set(_get(_scope, '_parent'), 'AttackB', 450);
_call(_scope, 'stop', []);
},
// DefineSprite_472/frame_11/DoAction.as
function program222(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 3));
_set(_get(_scope, '_parent'), 'FaSieJJ', 0);
_set(_get(_scope, '_parent'), 'JianSuDu', 11);
_set(_get(_scope, '_parent'), 'FanWei', 9999);
_set(_get(_scope, '_parent'), 'Attack', 600);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 200)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 0));
_call(_scope, 'stop', []);
},
// DefineSprite_472/frame_6/DoAction.as
function program223(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 2));
_set(_get(_scope, '_parent'), 'FaSieJJ', 0);
_set(_get(_scope, '_parent'), 'JianSuDu', 10);
_set(_get(_scope, '_parent'), 'FanWei', 9999);
_set(_get(_scope, '_parent'), 'Attack', 450);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 150)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 800));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _set(_get(_scope, '_parent'), 'MaxHPB', 200)));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 3));
_set(_get(_scope, '_parent'), 'FaSieJJB', 0);
_set(_get(_scope, '_parent'), 'JianSuDuB', 11);
_set(_get(_scope, '_parent'), 'FanWeiB', 9999);
_set(_get(_scope, '_parent'), 'AttackB', 600);
_call(_scope, 'stop', []);
},
// DefineSprite_479/frame_1/DoAction.as
function program224(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'play', []);
},
// DefineSprite_479/frame_19/DoAction.as
function program225(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_479/frame_2/DoAction.as
function program226(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'NowDiRenBB', _get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(_get(_scope, '_root'), 'ADiRenName')));
if (_get(_get(_scope, '_root'), 'ADiRenName') != '' && _get(_get(_scope, 'NowDiRenBB'), '_visible') && _get(_get(_scope, 'NowDiRenBB'), 'Die') == false && _get(_get(_scope, '_parent'), 'Star') && _get(_get(_scope, '_parent'), '_name') != 'M_ShowSeSi5' && _get(_get(_scope, '_root'), 'GamePause') == false) {
    _set(_get(_scope, '_parent'), 'DiRenName', _get(_get(_scope, '_root'), 'ADiRenName'));
    _call(_scope, 'gotoAndStop', ['a1']);
    _call(_scope, 'play', []);
} else {
    _set(_get(_scope, '_root'), 'ADiRenName', _set(_get(_scope, '_parent'), 'DiRenName', ''));
    _call(_scope, 'gotoAndStop', ['a0']);
    _call(_scope, 'play', []);
}
},
// DefineSprite_479/frame_20/DoAction.as
function program227(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'play', []);
},
// DefineSprite_479/frame_25/DoAction.as
function program228(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'gotoAndStop', ['a0']);
_call(_scope, 'play', []);
},
// DefineSprite_479/frame_5/DoAction.as
function program229(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'NowPoint', {
    x: 0,
    y: 0
});
_call(_get(this, 'M_Jian'), 'localToGlobal', [_get(_scope, 'NowPoint')]);
if (_get(_get(_scope, '_root'), 'MySellID') == 3) {
    _update(_get(_scope, '_parent'), 'HPmini', -1, false);
    _set(_get(_scope, '_parent'), 'HP', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_parent'), 'HPmini') / _get(_get(_scope, '_root'), 'SeSiHPmini')]));
    if (_get(_get(_scope, '_parent'), 'HP') <= 1) {
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
            0,
            1
        ]);
        _set(_get(_get(_scope, '_parent'), 'DiTuObject'), 'SeSi', '');
        _call(_get(_scope, '_parent'), 'removeMovieClip', []);
    }
    _update(_get(_scope, '_parent'), 'Money', -1, false);
    if (_get(_get(_scope, '_parent'), 'Money') < 0) {
        _set(_get(_scope, '_parent'), 'Money', 0);
    }
}
_call(_get(_scope, '_root'), 'F_SeiJian', [
    _get(_get(_scope, '_parent'), 'DiRenName'),
    _get(_get(_scope, '_parent'), 'Attack'),
    'Mf_Jian4',
    _get(_get(_scope, '_parent'), 'FanWei') + 10,
    _get(_get(_scope, '_parent'), 'JianSuDu'),
    _get(this, '_rotation'),
    _get(_get(_scope, 'NowPoint'), 'x'),
    _get(_get(_scope, 'NowPoint'), 'y'),
    5,
    this
]);
_set(_get(_scope, '_parent'), 'TemFaSieJJ', 0);
_call(_scope, 'play', []);
},
// DefineSprite_480_Mf_SeSi5/frame_1/DoAction.as
function program230(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 100);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'JianSuDu', 9);
_set(this, 'FaSieJJ', 50);
_set(this, 'TemFaSieJJ', _get(this, 'FaSieJJ'));
_set(this, 'FanWei', 9999);
_set(this, 'Attack', 250);
_set(this, 'MAXAngle', 10);
_set(this, 'DiRenName', '');
_set(this, 'Tyle', 1);
_set(this, 'TaTyle', 5);
_set(this, 'Title', '猎鹰巢');
_set(this, 'TyleStr', '防御塔');
_set(this, 'Money', 150);
_set(this, 'SenJiDian', 0);
_set(this, 'MaxHPB', 100);
_set(this, 'HPB', _get(this, 'MaxHP'));
_set(this, 'MessText', '\u3013 <b>猎鹰巢</b> \u3013<br>   特殊的防御塔\uFF0C不会主动攻击\uFF0C仅追击您指定的某个敌人\uFF0C方法\uFF1A点选某个敌人\uFF0C在弹出的属性面板中点\u201C追击\u201D按钮\u3002<br> \u25C7 攻击方式\uFF1A单个攻击\u3002');
},
// DefineSprite_480_Mf_SeSi5/frame_1/DoAction_2.as
function program231(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'FanGiangV')) {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a1']);
} else {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a0']);
}
_set(_get(_scope, 'B_Button'), '_visible', _get(this, 'Star'));
_set(_get(_scope, 'M_FanGiang'), '_width', _set(_get(_scope, 'M_FanGiang'), '_height', _get(this, 'FanWei') * 2));
if (_get(this, '_name') != 'M_ShowSeSi5') {
    _set(this, 'onEnterFrame', _get(_get(_scope, '_root'), 'F_JianTaRot'));
}
},
// DefineSprite_483/frame_1/DoAction.as
function program232(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 1));
_set(_get(_scope, '_parent'), 'FaSieJJ', 40);
_set(_get(_scope, '_parent'), 'JianSuDu', 9999);
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 95));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(_get(_scope, '_parent'), 'Attack', 450);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 200)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 1000));
_set(this, 'SJSenJiDian', _set(_get(_scope, '_parent'), 'SJSenJiDian', 200));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _set(_get(_scope, '_parent'), 'MaxHPB', 300)));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 2));
_set(_get(_scope, '_parent'), 'FaSieJJB', 30);
_set(_get(_scope, '_parent'), 'JianSuDuB', 9999);
_set(_get(_scope, '_parent'), 'FanWeiB', 105);
_set(_get(_scope, '_parent'), 'AttackB', 800);
_call(_scope, 'stop', []);
},
// DefineSprite_483/frame_6/DoAction.as
function program233(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 2));
_set(_get(_scope, '_parent'), 'FaSieJJ', 30);
_set(_get(_scope, '_parent'), 'JianSuDu', 9999);
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 105));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(_get(_scope, '_parent'), 'Attack', 800);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 300)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 2000));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 0));
_call(_scope, 'stop', []);
},
// DefineSprite_49/frame_1/DoAction.as
function program234(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_SellKang'), '_visible', false);
},
// DefineSprite_499/frame_1/DoAction.as
function program235(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_499/frame_6/DoAction.as
function program236(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'play', []);
},
// DefineSprite_502_Mf_SeSi3/frame_1/DoAction.as
function program237(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 200);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'JianSuDu', 9999);
_set(this, 'FaSieJJ', 40);
_set(this, 'TemFaSieJJ', _get(this, 'FaSieJJ'));
_set(this, 'FanWei', 95);
_set(this, 'Attack', 450);
_set(this, 'MAXAngle', 5);
_set(this, 'DiRenName', '');
_set(this, 'Tyle', 1);
_set(this, 'TaTyle', 3);
_set(this, 'Title', '神电坛');
_set(this, 'TyleStr', '神御塔');
_set(this, 'Money', 250);
_set(this, 'SenJiDian', 80);
_set(this, 'MaxHPB', 200);
_set(this, 'HPB', _get(this, 'MaxHP'));
_set(this, 'MessText', '\u3013 <b>神电坛</b> \u3013<br>   神赐的神御塔\uFF0C主动攻击进入射程内的敌人\uFF0C特点是协同攻击\u3002<br> \u25C7 攻击方式\uFF1A单个攻击\u3002<br><font color=\'#001F99\'>   <b>注\uFF1A</b>在初章\uFF0C该设施只能修建在神殿附近\uFF01</font>');
},
// DefineSprite_502_Mf_SeSi3/frame_1/DoAction_2.as
function program238(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'FanGiangV')) {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a1']);
} else {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a0']);
}
_set(_get(_scope, 'B_Button'), '_visible', _get(this, 'Star'));
_set(_get(_scope, 'M_FanGiang'), '_width', _set(_get(_scope, 'M_FanGiang'), '_height', _get(this, 'FanWei') * 2));
_set(this, 'onEnterFrame', _get(_get(_scope, '_root'), 'F_SenDianArr'));
},
// DefineSprite_506/frame_1/DoAction.as
function program239(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 1));
_set(_get(_scope, '_parent'), 'FaSieJJ', 30);
_set(_get(_scope, '_parent'), 'JianSuDu', 15);
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 95));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(_get(_scope, '_parent'), 'Attack', 400);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 200)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 1000));
_set(this, 'SJSenJiDian', _set(_get(_scope, '_parent'), 'SJSenJiDian', 200));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _set(_get(_scope, '_parent'), 'MaxHPB', 300)));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 2));
_set(_get(_scope, '_parent'), 'FaSieJJB', 25);
_set(_get(_scope, '_parent'), 'JianSuDuB', 17);
_set(_get(_scope, '_parent'), 'FanWeiB', 105);
_set(_get(_scope, '_parent'), 'AttackB', 700);
_call(_scope, 'stop', []);
},
// DefineSprite_506/frame_6/DoAction.as
function program240(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 2));
_set(_get(_scope, '_parent'), 'FaSieJJ', 25);
_set(_get(_scope, '_parent'), 'JianSuDu', 17);
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 105));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(_get(_scope, '_parent'), 'Attack', 700);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 300)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 2000));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 0));
_call(_scope, 'stop', []);
},
// DefineSprite_516/frame_2/DoAction.as
function program241(_scope, _get, _set, _call, _update, _delete) {
_update(_get(_scope, '_parent'), 'TemFaSieJJ', 1, false);
if (_get(_get(_scope, '_parent'), 'TemFaSieJJ') > _get(_get(_scope, '_parent'), 'FaSieJJ')) {
    if (_get(_get(_scope, '_parent'), 'DiRenName') != '' && _get(_get(_scope, '_parent'), 'RotionedPD') && _get(_get(_scope, '_root'), 'GamePause') == false) {
        _call(_scope, 'gotoAndStop', ['a1']);
        _call(_scope, 'play', []);
    } else {
        _call(_scope, 'gotoAndStop', ['a0']);
        _call(_scope, 'play', []);
    }
} else {
    _call(_scope, 'gotoAndStop', ['a0']);
    _call(_scope, 'play', []);
}
},
// DefineSprite_516/frame_25/DoAction.as
function program242(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'gotoAndStop', ['a0']);
_call(_scope, 'play', []);
},
// DefineSprite_516/frame_5/DoAction.as
function program243(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'NowPoint', {
    x: 0,
    y: 0
});
_call(_get(this, 'M_Jian'), 'localToGlobal', [_get(_scope, 'NowPoint')]);
if (_get(_get(_scope, '_root'), 'MySellID') == 3) {
    _update(_get(_scope, '_parent'), 'HPmini', -1, false);
    _set(_get(_scope, '_parent'), 'HP', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_parent'), 'HPmini') / _get(_get(_scope, '_root'), 'SeSiHPmini')]));
    if (_get(_get(_scope, '_parent'), 'HP') <= 1) {
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
            0,
            1
        ]);
        _set(_get(_get(_scope, '_parent'), 'DiTuObject'), 'SeSi', '');
        _call(_get(_scope, '_parent'), 'removeMovieClip', []);
    }
    _update(_get(_scope, '_parent'), 'Money', -1, false);
    if (_get(_get(_scope, '_parent'), 'Money') < 0) {
        _set(_get(_scope, '_parent'), 'Money', 0);
    }
}
_call(_get(_scope, '_root'), 'F_SeiJian', [
    _get(_get(_scope, '_parent'), 'DiRenName'),
    _get(_get(_scope, '_parent'), 'Attack'),
    'Mf_Jian3',
    _get(_get(_scope, '_parent'), 'FanWei') + 10,
    _get(_get(_scope, '_parent'), 'JianSuDu'),
    _get(this, '_rotation'),
    _get(_get(_scope, 'NowPoint'), 'x'),
    _get(_get(_scope, 'NowPoint'), 'y'),
    4
]);
_set(_get(_scope, '_parent'), 'TemFaSieJJ', 0);
_call(_scope, 'play', []);
},
// DefineSprite_517_Mf_SeSi4/frame_1/DoAction.as
function program244(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 500);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'JianSuDu', 15);
_set(this, 'FaSieJJ', 30);
_set(this, 'TemFaSieJJ', _get(this, 'FaSieJJ'));
_set(this, 'FanWei', 95);
_set(this, 'Attack', 400);
_set(this, 'MAXAngle', 10);
_set(this, 'DiRenName', '');
_set(this, 'Tyle', 1);
_set(this, 'TaTyle', 4);
_set(this, 'Title', '神火坛');
_set(this, 'TyleStr', '神御塔');
_set(this, 'Money', 240);
_set(this, 'SenJiDian', 80);
_set(this, 'MaxHPB', 500);
_set(this, 'HPB', _get(this, 'MaxHP'));
_set(this, 'MessText', '\u3013 <b>神火坛</b> \u3013<br>   神赐的神御塔\uFF0C主动攻击进入射程内的敌人\uFF0C特点是陷井攻击\u3002<br> \u25C7 攻击方式\uFF1A范围攻击\u3002<br><font color=\'#001F99\'>   <b>注\uFF1A</b>在初章\uFF0C该设施只能修建在神殿附近\uFF01</font>');
},
// DefineSprite_517_Mf_SeSi4/frame_1/DoAction_2.as
function program245(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'FanGiangV')) {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a1']);
} else {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a0']);
}
_set(_get(_scope, 'B_Button'), '_visible', _get(this, 'Star'));
_set(_get(_scope, 'M_FanGiang'), '_width', _set(_get(_scope, 'M_FanGiang'), '_height', _get(this, 'FanWei') * 2));
_set(this, 'onEnterFrame', _get(_get(_scope, '_root'), 'F_JianTaRot'));
},
// DefineSprite_522/frame_1/DoAction.as
function program246(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 1));
_set(_get(_scope, '_parent'), 'FaSieJJ', 14);
_set(_get(_scope, '_parent'), 'JianSuDu', 8);
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 95));
_set(_get(_scope, '_parent'), 'rAttack', _set(_get(_scope, '_parent'), 'Attack', 30));
_set(_get(_scope, '_parent'), 'Attack', _get(_get(_scope, '_parent'), 'rAttack') * _get(_get(_scope, '_root'), 'All_Attack'));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 60)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 55));
_set(this, 'SJSenJiDian', _set(_get(_scope, '_parent'), 'SJSenJiDian', 0));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _set(_get(_scope, '_parent'), 'MaxHPB', 100)));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 2));
_set(_get(_scope, '_parent'), 'FaSieJJB', 12);
_set(_get(_scope, '_parent'), 'JianSuDuB', 9);
_set(_get(_scope, '_parent'), 'FanWeiB', 105);
_set(_get(_scope, '_parent'), 'AttackB', 80);
_call(_scope, 'stop', []);
},
// DefineSprite_522/frame_11/DoAction.as
function program247(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 3));
_set(_get(_scope, '_parent'), 'FaSieJJ', 10);
_set(_get(_scope, '_parent'), 'JianSuDu', 11);
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 115));
_set(_get(_scope, '_parent'), 'rAttack', _set(_get(_scope, '_parent'), 'Attack', 160));
_set(_get(_scope, '_parent'), 'Attack', _get(_get(_scope, '_parent'), 'rAttack') * _get(_get(_scope, '_root'), 'All_Attack'));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 170)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 0));
_call(_scope, 'stop', []);
},
// DefineSprite_522/frame_6/DoAction.as
function program248(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 2));
_set(_get(_scope, '_parent'), 'FaSieJJ', 12);
_set(_get(_scope, '_parent'), 'JianSuDu', 9);
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 105));
_set(_get(_scope, '_parent'), 'rAttack', _set(_get(_scope, '_parent'), 'Attack', 80));
_set(_get(_scope, '_parent'), 'Attack', _get(_get(_scope, '_parent'), 'rAttack') * _get(_get(_scope, '_root'), 'All_Attack'));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 100)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 120));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _set(_get(_scope, '_parent'), 'MaxHPB', 170)));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 3));
_set(_get(_scope, '_parent'), 'FaSieJJB', 10);
_set(_get(_scope, '_parent'), 'JianSuDuB', 11);
_set(_get(_scope, '_parent'), 'FanWeiB', 115);
_set(_get(_scope, '_parent'), 'AttackB', 160);
_call(_scope, 'stop', []);
},
// DefineSprite_533/frame_2/DoAction.as
function program249(_scope, _get, _set, _call, _update, _delete) {
_update(_get(_scope, '_parent'), 'TemFaSieJJ', 1, false);
if (_get(_get(_scope, '_parent'), 'TemFaSieJJ') > _get(_get(_scope, '_parent'), 'FaSieJJ')) {
    if (_get(_get(_scope, '_parent'), 'DiRenName') != '' && _get(_get(_scope, '_parent'), 'RotionedPD') && _get(_get(_scope, '_root'), 'GamePause') == false) {
        _call(_scope, 'gotoAndStop', ['a1']);
        _call(_scope, 'play', []);
    } else {
        _call(_scope, 'gotoAndStop', ['a0']);
        _call(_scope, 'play', []);
    }
} else {
    _call(_scope, 'gotoAndStop', ['a0']);
    _call(_scope, 'play', []);
}
},
// DefineSprite_533/frame_25/DoAction.as
function program250(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'gotoAndStop', ['a0']);
_call(_scope, 'play', []);
},
// DefineSprite_533/frame_5/DoAction.as
function program251(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'NowPoint', {
    x: 0,
    y: 0
});
_call(_get(this, 'M_Jian'), 'localToGlobal', [_get(_scope, 'NowPoint')]);
if (_get(_get(_scope, '_root'), 'MySellID') == 3) {
    _update(_get(_scope, '_parent'), 'HPmini', -1, false);
    _set(_get(_scope, '_parent'), 'HP', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_parent'), 'HPmini') / _get(_get(_scope, '_root'), 'SeSiHPmini')]));
    if (_get(_get(_scope, '_parent'), 'HP') <= 1) {
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
            0,
            1
        ]);
        _set(_get(_get(_scope, '_parent'), 'DiTuObject'), 'SeSi', '');
        _call(_get(_scope, '_parent'), 'removeMovieClip', []);
    }
    _update(_get(_scope, '_parent'), 'Money', -1, false);
    if (_get(_get(_scope, '_parent'), 'Money') < 0) {
        _set(_get(_scope, '_parent'), 'Money', 0);
    }
}
_call(_get(_scope, '_root'), 'F_SeiJian', [
    _get(_get(_scope, '_parent'), 'DiRenName'),
    _get(_get(_scope, '_parent'), 'Attack'),
    'Mf_Jian2',
    _get(_get(_scope, '_parent'), 'FanWei') + 10,
    _get(_get(_scope, '_parent'), 'JianSuDu'),
    _get(this, '_rotation'),
    _get(_get(_scope, 'NowPoint'), 'x'),
    _get(_get(_scope, 'NowPoint'), 'y'),
    2
]);
_set(_get(_scope, '_parent'), 'TemFaSieJJ', 0);
_call(_scope, 'play', []);
},
// DefineSprite_534_Mf_SeSi2/frame_1/DoAction.as
function program252(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 60);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'JianSuDu', 8);
_set(this, 'FaSieJJ', 14);
_set(this, 'TemFaSieJJ', _get(this, 'FaSieJJ'));
_set(this, 'FanWei', 95);
_set(this, 'Attack', 30);
_set(this, 'MAXAngle', 5);
_set(this, 'DiRenName', '');
_set(this, 'Tyle', 1);
_set(this, 'TaTyle', 2);
_set(this, 'Title', '投石台');
_set(this, 'TyleStr', '防御塔');
_set(this, 'Money', 25);
_set(this, 'SenJiDian', 0);
_set(this, 'MaxHPB', 60);
_set(this, 'HPB', _get(this, 'MaxHP'));
_set(this, 'MessText', '\u3013 <b>投石台</b> \u3013<br>   加强的防御塔\uFF0C主动攻击进入射程内的敌人\uFF0C特点是范围攻击\u3002<br> \u25C7 攻击方式\uFF1A范围攻击\u3002');
},
// DefineSprite_534_Mf_SeSi2/frame_1/DoAction_2.as
function program253(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'FanGiangV')) {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a1']);
} else {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a0']);
}
_set(_get(_scope, 'B_Button'), '_visible', _get(this, 'Star'));
_set(_get(_scope, 'M_FanGiang'), '_width', _set(_get(_scope, 'M_FanGiang'), '_height', _get(this, 'FanWei') * 2));
_set(this, 'onEnterFrame', _get(_get(_scope, '_root'), 'F_JianTaRot'));
},
// DefineSprite_541/frame_61/DoAction.as
function program254(_scope, _get, _set, _call, _update, _delete) {
if (_call(_get(_scope, 'Math'), 'random', []) <= 0.1) {
    _call(_scope, 'gotoAndStop', ['a0']);
    _call(_scope, 'play', []);
} else {
    _call(_scope, 'gotoAndStop', ['a1']);
    _call(_scope, 'play', []);
}
},
// DefineSprite_546/frame_1/DoAction.as
function program255(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 1));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 25)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'Attack', 70);
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 70));
_set(this, 'SJSenJiDian', _set(_get(_scope, '_parent'), 'SJSenJiDian', 0));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 2));
_set(this, 'MaxHPB', _set(_get(_scope, '_parent'), 'MaxHPB', 30));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _get(_get(_scope, '_parent'), 'MaxHPB')));
_set(_get(_scope, '_parent'), 'AttackB', 180);
_call(_scope, 'stop', []);
},
// DefineSprite_546/frame_11/DoAction.as
function program256(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 3));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 30)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'Attack', 450);
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 0));
_call(_scope, 'stop', []);
},
// DefineSprite_546/frame_6/DoAction.as
function program257(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 2));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 30)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'Attack', 180);
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 180));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 3));
_set(this, 'MaxHPB', _set(_get(_scope, '_parent'), 'MaxHPB', 30));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _get(_get(_scope, '_parent'), 'MaxHPB')));
_set(_get(_scope, '_parent'), 'AttackB', 450);
_call(_scope, 'stop', []);
},
// DefineSprite_547_Mf_SeSi202/frame_1/DoAction.as
function program258(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 25);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'Attack', 70);
_set(this, 'DiRenName', '');
_set(this, 'Die', false);
_set(this, 'Tyle', 2);
_set(this, 'SJTyle', 3);
_set(this, 'Title', '毒池');
_set(this, 'TyleStr', '陷井');
_set(this, 'Money', 7);
_set(this, 'SenJiDian', 0);
_set(this, 'MessText', '\u3013 <b>毒池</b> \u3013<br>   陷井\uFF0C使经过的地面敌人中毒\uFF0C每走一格损总伤害值1/7的血\uFF0C总伤害值等于毒池的攻击力\uFF0C会被敌人攻破而完全消失\u3002<br><font color=\'#001F99\'>   <b>注\uFF1A</b>该设施对空军无效\uFF01</font>');
},
// DefineSprite_547_Mf_SeSi202/frame_1/DoAction_2.as
function program259(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Button'), '_visible', _get(this, 'Star'));
},
// DefineSprite_548_Mf_SeSi203/frame_1/DoAction.as
function program260(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 10);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'Attack', 150);
_set(this, 'DiRenName', '');
_set(this, 'Die', false);
_set(this, 'Tyle', 2);
_set(this, 'SJTyle', 2);
_set(this, 'DQHRtyle', 2);
_set(this, 'Title', '火焰');
_set(this, 'TyleStr', '陷井');
_set(this, 'Money', 10);
_set(this, 'SenJiDian', 0);
},
// DefineSprite_552/frame_1/DoAction.as
function program261(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 1));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 10)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'Attack', 50);
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 70));
_set(this, 'SJSenJiDian', _set(_get(_scope, '_parent'), 'SJSenJiDian', 0));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 2));
_set(this, 'MaxHPB', _set(_get(_scope, '_parent'), 'MaxHPB', 15));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _get(_get(_scope, '_parent'), 'MaxHPB')));
_set(_get(_scope, '_parent'), 'AttackB', 150);
_call(_scope, 'stop', []);
},
// DefineSprite_552/frame_11/DoAction.as
function program262(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 3));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 20)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'Attack', 400);
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 0));
_call(_scope, 'stop', []);
},
// DefineSprite_552/frame_6/DoAction.as
function program263(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 2));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 15)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'Attack', 150);
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 180));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 3));
_set(this, 'MaxHPB', _set(_get(_scope, '_parent'), 'MaxHPB', 20));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _get(_get(_scope, '_parent'), 'MaxHPB')));
_set(_get(_scope, '_parent'), 'AttackB', 400);
_call(_scope, 'stop', []);
},
// DefineSprite_553_Mf_SeSi201/frame_1/DoAction.as
function program264(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 10);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'Attack', 50);
_set(this, 'DiRenName', '');
_set(this, 'Die', false);
_set(this, 'Tyle', 2);
_set(this, 'SJTyle', 2);
_set(this, 'DQHRtyle', 1);
_set(this, 'Title', '地剌');
_set(this, 'TyleStr', '陷井');
_set(this, 'Money', 7);
_set(this, 'SenJiDian', 0);
_set(this, 'MessText', '\u3013 <b>地剌</b> \u3013<br>   陷井\uFF0C伤害经过的地面敌人\uFF0C会被敌人攻破而完全消失\u3002<br><font color=\'#001F99\'>   <b>注\uFF1A</b>该设施对空军无效\uFF01</font>');
},
// DefineSprite_553_Mf_SeSi201/frame_1/DoAction_2.as
function program265(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Button'), '_visible', _get(this, 'Star'));
},
// DefineSprite_557/frame_1/DoAction.as
function program266(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 1));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 110)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 70));
_set(this, 'SJSenJiDian', _set(_get(_scope, '_parent'), 'SJSenJiDian', 0));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 2));
_set(this, 'MaxHPB', _set(_get(_scope, '_parent'), 'MaxHPB', 150));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _get(_get(_scope, '_parent'), 'MaxHPB')));
_call(_scope, 'stop', []);
},
// DefineSprite_557/frame_11/DoAction.as
function program267(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 3));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 200)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 0));
_call(_scope, 'stop', []);
},
// DefineSprite_557/frame_6/DoAction.as
function program268(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 2));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 150)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 180));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 3));
_set(this, 'MaxHPB', _set(_get(_scope, '_parent'), 'MaxHPB', 200));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _get(_get(_scope, '_parent'), 'MaxHPB')));
_call(_scope, 'stop', []);
},
// DefineSprite_558_Mf_SeSi101/frame_1/DoAction.as
function program269(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 110);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'DiRenName', '');
_set(this, 'Die', false);
_set(this, 'Attack', 0);
_set(this, 'Tyle', 2);
_set(this, 'SJTyle', 1);
_set(this, 'Title', '阻碍墙');
_set(this, 'TyleStr', '陷井');
_set(this, 'Money', 7);
_set(this, 'SenJiDian', 0);
_set(this, 'MessText', '\u3013 <b>阻碍墙</b> \u3013<br>   陷井\uFF0C阻碍地面敌人前进\uFF0C会被敌人攻破而完全消失\u3002<br><font color=\'#001F99\'>   <b>注\uFF1A</b>该设施对空军无效\uFF01</font>');
},
// DefineSprite_558_Mf_SeSi101/frame_1/DoAction_2.as
function program270(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Button'), '_visible', _get(this, 'Star'));
},
// DefineSprite_560_Mf_RanQeng2/frame_10/DoAction.as
function program271(_scope, _get, _set, _call, _update, _delete) {
_call(this, 'removeMovieClip', []);
},
// DefineSprite_564_Mf_RanQeng1/frame_11/DoAction.as
function program272(_scope, _get, _set, _call, _update, _delete) {
_call(this, 'removeMovieClip', []);
},
// DefineSprite_566_Mf_RanQeng3/frame_10/DoAction.as
function program273(_scope, _get, _set, _call, _update, _delete) {
_call(this, 'removeMovieClip', []);
},
// DefineSprite_567_Mf_RanQeng4/frame_10/DoAction.as
function program274(_scope, _get, _set, _call, _update, _delete) {
_call(this, 'removeMovieClip', []);
},
// DefineSprite_570_Mf_RanQeng5/frame_6/DoAction.as
function program275(_scope, _get, _set, _call, _update, _delete) {
_call(this, 'removeMovieClip', []);
},
// DefineSprite_597_Ma_Number/frame_1/DoAction.as
function program276(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'meNumberStr', new (_get(_scope, 'String'))(_get(_scope, 'meNumber')));
_set(_scope, 'i', 0);
while (_get(_scope, 'i') <= 10) {
    _call(_get(this, 'a' + _get(_scope, 'i')), 'removeMovieClip', []);
    _update(_scope, 'i', 1, false);
}
_set(_scope, 'TempX', 0);
_set(_scope, 'i', 0);
while (_get(_scope, 'i') < _get(_get(_scope, 'meNumberStr'), 'length')) {
    _call(this, 'attachMovie', [
        'a' + _call(_get(_scope, 'meNumberStr'), 'charAt', [_get(_scope, 'i')]),
        'a' + _get(_scope, 'i'),
        _get(_scope, 'i')
    ]);
    _set(_get(this, 'a' + _get(_scope, 'i')), '_x', _get(_scope, 'TempX'));
    _set(_scope, 'TempX', _get(_scope, 'TempX') + (_get(_get(this, 'a' + _get(_scope, 'i')), '_width') + 2));
    _update(_scope, 'i', 1, false);
}
},
// DefineSprite_601_Mf_DiRen2/frame_1/DoAction.as
function program277(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.2);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 30);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 6);
_set(this, 'Money', 1);
_set(this, 'SenJiDian', 0);
_set(this, 'Title', '青发');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 2);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '防毒');
_set(this, 'TeSing', 1);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_603_Mf_DiRen3/frame_1/DoAction.as
function program278(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.2);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 45);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 7);
_set(this, 'Money', 1);
_set(this, 'SenJiDian', 0);
_set(this, 'Title', '牛头');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 3);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '易怒');
_set(this, 'TeSing', 8);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_607_Mf_DiRen4/frame_1/DoAction.as
function program279(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.3);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 70);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 8);
_set(this, 'Money', 2);
_set(this, 'SenJiDian', 0);
_set(this, 'Title', '山妖');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 4);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '土遁');
_set(this, 'TeSing', 9);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_611_Mf_DiRen5/frame_1/DoAction.as
function program280(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.5);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 90);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 7);
_set(this, 'Money', 2);
_set(this, 'SenJiDian', 0);
_set(this, 'Title', '血魔');
_set(this, 'TyleStr', '空军');
_set(this, 'Level', 5);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '恢复');
_set(this, 'TeSing', 7);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_615_Mf_DiRen6/frame_1/DoAction.as
function program281(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.5);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 200);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 8);
_set(this, 'Money', 2);
_set(this, 'SenJiDian', 0);
_set(this, 'Title', '虎怪');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 6);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '易怒');
_set(this, 'TeSing', 8);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_618_Mf_DiRen7/frame_1/DoAction.as
function program282(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 1.8);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 220);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 9);
_set(this, 'Money', 3);
_set(this, 'SenJiDian', 0);
_set(this, 'Title', '岩怪');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 7);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '皮厚');
_set(this, 'TeSing', 4);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_61_Mf_NanDuSet/frame_1/DoAction.as
function program283(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_61_Mf_NanDuSet/frame_1/DoAction_2.as
function program284(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_OK'), 'enabled', false);
_set(_scope, 'colorTrans_1', new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 0, 0, 0));
_set(_scope, 'trans', new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_scope, 'B_OK')));
_set(_get(_scope, 'trans'), 'colorTransform', _get(_scope, 'colorTrans_1'));
_set(_scope, 'MySellID', 0);
_set(_scope, 'NowThis', this);
_set(_scope, 'i', 1);
while (_get(_scope, 'i') <= 3) {
    _set(_get(this, 'M_NanSel' + _get(_scope, 'i')), 'ID', _get(_scope, 'i'));
    _set(_get(this, 'M_NanSel' + _get(_scope, 'i')), 'onRollOver', function () {
        var _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 200, 0, 0, 0);
        var _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(this);
        _set(_loc3_, 'colorTransform', _loc2_);
    });
    _set(_get(this, 'M_NanSel' + _get(_scope, 'i')), 'onRollOut', function () {
        var _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
        var _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(this);
        _set(_loc3_, 'colorTransform', _loc2_);
    });
    _set(_get(this, 'M_NanSel' + _get(_scope, 'i')), 'onReleaseOutside', function () {
        var _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
        var _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(this);
        _set(_loc3_, 'colorTransform', _loc2_);
    });
    _set(_get(this, 'M_NanSel' + _get(_scope, 'i')), 'onRelease', function () {
        var _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
        var _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(this);
        _set(_loc3_, 'colorTransform', _loc2_);
        _set(_get(_get(_get(_scope, 'NowThis'), 'M_NanSel' + _get(_scope, 'MySellID')), 'M_SellKang'), '_visible', false);
        _set(_get(this, 'M_SellKang'), '_visible', true);
        _set(_scope, 'MySellID', _get(this, 'ID'));
        _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
        _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_scope, 'B_OK'));
        _set(_loc3_, 'colorTransform', _loc2_);
        _set(_get(_scope, 'B_OK'), 'enabled', true);
    });
    _update(_scope, 'i', 1, false);
}
},
// DefineSprite_622_Mf_DiRen8/frame_1/DoAction.as
function program285(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.5);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 150);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 9);
_set(this, 'Money', 3);
_set(this, 'SenJiDian', 0);
_set(this, 'Title', '吼狼');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 8);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '易怒');
_set(this, 'TeSing', 8);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_627_Mf_DiRen9/frame_1/DoAction.as
function program286(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.1);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 200);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 10);
_set(this, 'Money', 3);
_set(this, 'SenJiDian', 0);
_set(this, 'Title', '神猿');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 9);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '激进');
_set(this, 'TeSing', 6);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_631_Mf_DiRen10/frame_1/DoAction.as
function program287(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.6);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 190);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 10);
_set(this, 'Money', 4);
_set(this, 'SenJiDian', 1);
_set(this, 'Title', '飞蛇');
_set(this, 'TyleStr', '空军');
_set(this, 'Level', 10);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '激进');
_set(this, 'TeSing', 6);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_635_Mf_DiRen11/frame_1/DoAction.as
function program288(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.5);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 240);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 11);
_set(this, 'Money', 4);
_set(this, 'SenJiDian', 1);
_set(this, 'Title', '九尾');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 11);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '恢复');
_set(this, 'TeSing', 7);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_639_Mf_DiRen12/frame_1/DoAction.as
function program289(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 3.2);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 220);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 12);
_set(this, 'Money', 4);
_set(this, 'SenJiDian', 1);
_set(this, 'Title', '冰洌');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 12);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '防冰');
_set(this, 'TeSing', 10);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_656_Mf_DiRen13/frame_1/DoAction.as
function program290(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.5);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 330);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 13);
_set(this, 'Money', 5);
_set(this, 'SenJiDian', 2);
_set(this, 'Title', '雷灵');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 13);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '防电');
_set(this, 'TeSing', 3);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_660_Mf_DiRen14/frame_1/DoAction.as
function program291(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.5);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 400);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 14);
_set(this, 'Money', 5);
_set(this, 'SenJiDian', 2);
_set(this, 'Title', '炙炎');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', 14);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '防火');
_set(this, 'TeSing', 2);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_664_Mf_DiRen15/frame_1/DoAction.as
function program292(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 3.5);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 450);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 15);
_set(this, 'Money', 5);
_set(this, 'SenJiDian', 2);
_set(this, 'Title', '风煞');
_set(this, 'TyleStr', '空军');
_set(this, 'Level', 15);
_set(this, 'Tyle', 1);
_set(this, 'TeCang', '防火');
_set(this, 'TeSing', 2);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_673_Mf_EditDiToKuan/frame_1/DoAction.as
function program293(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'GoID', 0);
_set(this, 'MyID', 0);
_call(_scope, 'stop', []);
},
// DefineSprite_673_Mf_EditDiToKuan/frame_11/DoAction.as
function program294(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'GoID', 2);
_set(this, 'MyID', 9);
_call(_scope, 'stop', []);
},
// DefineSprite_673_Mf_EditDiToKuan/frame_16/DoAction.as
function program295(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'GoID', 3);
_set(this, 'MyID', 2);
_call(_scope, 'stop', []);
},
// DefineSprite_673_Mf_EditDiToKuan/frame_6/DoAction.as
function program296(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'GoID', 1);
_set(this, 'MyID', 1);
_call(_scope, 'stop', []);
},
// DefineSprite_678/frame_1/DoAction.as
function program297(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 1));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 110)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'Attack', 1);
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 85));
_set(this, 'SJSenJiDian', _set(_get(_scope, '_parent'), 'SJSenJiDian', 0));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 2));
_set(this, 'MaxHPB', _set(_get(_scope, '_parent'), 'MaxHPB', 150));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _get(_get(_scope, '_parent'), 'MaxHPB')));
_set(_get(_scope, '_parent'), 'AttackB', 1);
_call(_scope, 'stop', []);
},
// DefineSprite_678/frame_11/DoAction.as
function program298(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 3));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 200)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'Attack', 1);
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 0));
_call(_scope, 'stop', []);
},
// DefineSprite_678/frame_6/DoAction.as
function program299(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 2));
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'MaxHP', _set(_get(_scope, '_parent'), 'MaxHP', 150)));
_set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')));
_set(_get(_scope, '_parent'), 'Attack', 1);
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 195));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 3));
_set(this, 'MaxHPB', _set(_get(_scope, '_parent'), 'MaxHPB', 200));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _get(_get(_scope, '_parent'), 'MaxHPB')));
_set(_get(_scope, '_parent'), 'AttackB', 1);
_call(_scope, 'stop', []);
},
// DefineSprite_679_Mf_SeSi102/frame_1/DoAction.as
function program300(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 110);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'Attack', 1);
_set(this, 'DiRenName', '');
_set(this, 'Die', false);
_set(this, 'Tyle', 2);
_set(this, 'SJTyle', 4);
_set(this, 'Title', '天网');
_set(this, 'TyleStr', '陷井');
_set(this, 'Money', 12);
_set(this, 'SenJiDian', 0);
_set(this, 'MessText', '\u3013 <b>天网</b> \u3013<br>   陷井\uFF0C阻碍空中敌人前进并同时不断伤害靠近的敌人\uFF0C会被敌人攻破而完全消失\u3002<br><font color=\'#001F99\'>   <b>注\uFF1A</b>该设施对陆军无效\uFF01</font>');
},
// DefineSprite_679_Mf_SeSi102/frame_1/DoAction_2.as
function program301(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Button'), '_visible', _get(this, 'Star'));
},
// DefineSprite_681_Mf_Jian5/frame_1/DoAction.as
function program302(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'FanWei', 0);
},
// DefineSprite_684/frame_1/DoAction.as
function program303(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', _set(_get(_scope, '_parent'), 'Level', 1));
_set(_get(_scope, '_parent'), 'FaSieJJ', 1);
_set(_get(_scope, '_parent'), 'JianSuDu', 20);
_set(_get(_scope, '_parent'), 'rMaxHP', _set(this, 'HP', _set(_get(_scope, '_parent'), 'HP', _get(_get(_scope, '_parent'), 'MaxHP'))));
_set(_get(_scope, '_parent'), 'rFanWei', _set(_get(_scope, '_parent'), 'FanWei', 105));
_set(_get(_scope, '_parent'), 'rAttack', _set(_get(_scope, '_parent'), 'Attack', 1500));
_set(_get(_scope, '_parent'), 'Attack', _get(_get(_scope, '_parent'), 'rAttack') * _get(_get(_scope, '_root'), 'All_Attack'));
_set(_get(_scope, '_parent'), 'FanWei', _get(_get(_scope, '_parent'), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei'));
_set(this, 'SJMoney', _set(_get(_scope, '_parent'), 'SJMoney', 999999999999));
_set(this, 'SJSenJiDian', _set(_get(_scope, '_parent'), 'SJSenJiDian', 999999999999));
_set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_width', _set(_get(_get(_scope, '_parent'), 'M_FanGiang'), '_height', _get(_get(_scope, '_parent'), 'FanWei') * 2));
_set(this, 'HPB', _set(_get(_scope, '_parent'), 'HPB', _set(_get(_scope, '_parent'), 'MaxHPB', 500)));
_set(this, 'LevelB', _set(_get(_scope, '_parent'), 'LevelB', 0));
},
// DefineSprite_697/frame_2/DoAction.as
function program304(_scope, _get, _set, _call, _update, _delete) {
_update(_get(_scope, '_parent'), 'TemFaSieJJ', 1, false);
if (_get(_get(_scope, '_parent'), 'TemFaSieJJ') > _get(_get(_scope, '_parent'), 'FaSieJJ')) {
    if (_get(_get(_scope, '_parent'), 'DiRenName') != '' && _get(_get(_scope, '_parent'), 'RotionedPD') && _get(_get(_scope, '_root'), 'GamePause') == false) {
        _call(_scope, 'gotoAndStop', ['a1']);
        _call(_scope, 'play', []);
    } else {
        _call(_scope, 'gotoAndStop', ['a0']);
        _call(_scope, 'play', []);
    }
} else {
    _call(_scope, 'gotoAndStop', ['a0']);
    _call(_scope, 'play', []);
}
},
// DefineSprite_697/frame_25/DoAction.as
function program305(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'gotoAndStop', ['a0']);
_call(_scope, 'play', []);
},
// DefineSprite_697/frame_5/DoAction.as
function program306(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'NowPoint', {
    x: 0,
    y: 0
});
_call(_get(this, 'M_Jian'), 'localToGlobal', [_get(_scope, 'NowPoint')]);
if (_get(_get(_scope, '_root'), 'MySellID') == 3) {
    _update(_get(_scope, '_parent'), 'HPmini', -1, false);
    _set(_get(_scope, '_parent'), 'HP', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_parent'), 'HPmini') / _get(_get(_scope, '_root'), 'SeSiHPmini')]));
    if (_get(_get(_scope, '_parent'), 'HP') <= 1) {
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
            0,
            1
        ]);
        _set(_get(_get(_scope, '_parent'), 'DiTuObject'), 'SeSi', '');
        _call(_get(_scope, '_parent'), 'removeMovieClip', []);
    }
    _update(_get(_scope, '_parent'), 'Money', -1, false);
    if (_get(_get(_scope, '_parent'), 'Money') < 0) {
        _set(_get(_scope, '_parent'), 'Money', 0);
    }
}
_call(_get(_scope, '_root'), 'F_SeiJian', [
    _get(_get(_scope, '_parent'), 'DiRenName'),
    _get(_get(_scope, '_parent'), 'Attack'),
    'Mf_Jian5',
    _get(_get(_scope, '_parent'), 'FanWei') + 10,
    _get(_get(_scope, '_parent'), 'JianSuDu'),
    _get(this, '_rotation'),
    _get(_get(_scope, 'NowPoint'), 'x'),
    _get(_get(_scope, 'NowPoint'), 'y'),
    6
]);
_set(_get(_scope, '_parent'), 'TemFaSieJJ', 0);
_call(_scope, 'play', []);
},
// DefineSprite_698_Mf_SeSi6/frame_1/DoAction.as
function program307(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 500);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'JianSuDu', 20);
_set(this, 'FaSieJJ', 1);
_set(this, 'TemFaSieJJ', _get(this, 'FaSieJJ'));
_set(this, 'FanWei', 105);
_set(this, 'Attack', 1500);
_set(this, 'MAXAngle', 15);
_set(this, 'DiRenName', '');
_set(this, 'Tyle', 1);
_set(this, 'TaTyle', 6);
_set(this, 'Title', '神龙像');
_set(this, 'TyleStr', '神御塔');
_set(this, 'Money', 999);
_set(this, 'SenJiDian', 500);
_set(this, 'MaxHPB', 500);
_set(this, 'HPB', _get(this, 'MaxHP'));
_set(this, 'MessText', '\u3013 <b>神龙像</b> \u3013<br>   <b>终章</b>才可修建的顶级神御塔\uFF0C特点是攻击的同时冰封整片区域\uFF0C阻碍并伤害经过的敌人\u3002<br> \u25C7 攻击方式\uFF1A单个攻击\u3002<br><font color=\'#001F99\'>   <b>注\uFF1A</b>该设施只能修建在神殿附近\uFF0C并且一共只能修建两个\uFF01</font>');
},
// DefineSprite_698_Mf_SeSi6/frame_1/DoAction_2.as
function program308(_scope, _get, _set, _call, _update, _delete) {
if (_get(this, 'FanGiangV')) {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a1']);
} else {
    _call(_get(_scope, 'M_FanGiang'), 'gotoAndStop', ['a0']);
}
_set(_get(_scope, 'B_Button'), '_visible', _get(this, 'Star'));
_set(_get(_scope, 'M_FanGiang'), '_width', _set(_get(_scope, 'M_FanGiang'), '_height', _get(this, 'FanWei') * 2));
_set(this, 'onEnterFrame', _get(_get(_scope, '_root'), 'F_JianTaRot'));
},
// DefineSprite_700_Mf_SeSi103/frame_1/DoAction.as
function program309(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 1);
_set(this, 'MaxHP', 10);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'HPmini', _get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'SeSiHPmini'));
_set(this, 'Attack', 250);
_set(this, 'DiRenName', '');
_set(this, 'Die', false);
_set(this, 'Tyle', 2);
_set(this, 'SJTyle', 5);
_set(this, 'Title', '冰晶');
_set(this, 'TyleStr', '陷井');
_set(this, 'Money', 10);
_set(this, 'SenJiDian', 0);
},
// DefineSprite_702_Mf_DiRen101/frame_1/DoAction.as
function program310(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.5);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 400);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 14);
_set(this, 'Money', 7);
_set(this, 'SenJiDian', 6);
_set(this, 'Title', '白袍法师');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', _get(_get(_scope, '_root'), 'NowGuanSu'));
_set(this, 'Tyle', 101);
_set(this, 'TeCang', '无');
_set(this, 'TeSing', 0);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_704_Mf_DiRen102/frame_1/DoAction.as
function program311(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Sudu', 2.5);
_set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
_set(this, 'MaxHP', 400);
_set(this, 'HP', _get(this, 'MaxHP'));
_set(this, 'Attack', 14);
_set(this, 'Money', 7);
_set(this, 'SenJiDian', 6);
_set(this, 'Title', '红袍法师');
_set(this, 'TyleStr', '陆军');
_set(this, 'Level', _get(_get(_scope, '_root'), 'NowGuanSu'));
_set(this, 'Tyle', 102);
_set(this, 'TeCang', '无');
_set(this, 'TeSing', 0);
_set(this, 'Die', true);
_set(this, 'PerStar', 100);
},
// DefineSprite_706_Mf_DiDan1/frame_1/DoAction.as
function program312(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'FanWei', 0);
},
// DefineSprite_708_Mf_DiDan2/frame_1/DoAction.as
function program313(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'FanWei', 0);
},
// DefineSprite_714_Mf_SenEn/frame_65/DoAction.as
function program314(_scope, _get, _set, _call, _update, _delete) {
_call(this, 'removeMovieClip', []);
},
// DefineSprite_719_Mf_ZuCqoDi1/frame_1/DoAction.as
function program315(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_719_Mf_ZuCqoDi1/frame_6/DoAction.as
function program316(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_722_Mf_ZuCqoDi2/frame_1/DoAction.as
function program317(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_722_Mf_ZuCqoDi2/frame_6/DoAction.as
function program318(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_725_Mf_ZuCqoDi3/frame_1/DoAction.as
function program319(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_725_Mf_ZuCqoDi3/frame_6/DoAction.as
function program320(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_728_Mf_ZuCqoDi4/frame_1/DoAction.as
function program321(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_728_Mf_ZuCqoDi4/frame_6/DoAction.as
function program322(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_731_Mf_ZuCqoDi5/frame_1/DoAction.as
function program323(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_731_Mf_ZuCqoDi5/frame_6/DoAction.as
function program324(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_734_Mf_ZuCqoDi6/frame_1/DoAction.as
function program325(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_734_Mf_ZuCqoDi6/frame_6/DoAction.as
function program326(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_741_Mf_WaJe/frame_1/DoAction.as
function program327(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_NoMoney'), '_visible', _get(this, 'NoMoney'));
_set(_get(_scope, 'M_WaJeN'), '_x', _get(this, 'Nie_x'));
_set(_get(_scope, 'M_WaJeN'), '_y', _get(this, 'Nie_y'));
},
// DefineSprite_748_Mf_Selled/frame_1/DoAction.as
function program328(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_HPtiao'), '_xscale', 100 - (_get(_get(_scope, '_parent'), 'MaxHP') - _get(_get(_scope, '_parent'), 'HP')) / (_get(_get(_scope, '_parent'), 'MaxHP') / 100));
},
// DefineSprite_751_Mf_Selledd/frame_1/DoAction.as
function program329(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_HPtiao'), '_xscale', 100 - (_get(_get(_scope, '_parent'), 'MaxHP') - _get(_get(_scope, '_parent'), 'HP')) / (_get(_get(_scope, '_parent'), 'MaxHP') / 100));
},
// DefineSprite_75_Mf_MapSave/frame_1/DoAction.as
function program330(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'Title', '');
},
// DefineSprite_75_Mf_MapSave/frame_1/DoAction_2.as
function program331(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_75_Mf_MapSave/frame_1/DoAction_3.as
function program332(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound7'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound7'), 'attachSound', ['Sf_Sound105']);
_call(_get(_get(_scope, '_root'), 'S_Sound7'), 'start', [
    0,
    1
]);
if (_get(this, 'SaveOrLoad') == 2) {
    _set(_scope, 'Title', '<b>载入自定义地图</b>');
} else if (_get(this, 'SaveOrLoad') == 1) {
    _set(_scope, 'Title', '<font color=\'#FF0000\'><b>保存编辑好的地图</b></font>');
}
_set(_scope, 'NowMovDi', this);
_set(_scope, 'i', 1);
while (_get(_scope, 'i') <= 5) {
    _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'ID', _get(_scope, 'i'));
    _set(_scope, 'MySaveMapObj', _call(_get(_scope, 'SharedObject'), 'getLocal', ['MapSave' + _get(_scope, 'i')]));
    _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'ID', _get(_scope, 'i'));
    if (_get(_get(_get(_scope, 'MySaveMapObj'), 'data'), 'DiTuArr') != undefined) {
        _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'TimeStr', _get(_get(_get(_scope, 'MySaveMapObj'), 'data'), 'TimeStr'));
        _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'DiTuArr', _call(_get(_get(_get(_scope, 'MySaveMapObj'), 'data'), 'DiTuArr'), 'slice', []));
    } else {
        _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'TimeStr', '该存档为空\uFF01');
        _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'DiTuArr', []);
    }
    if (_get(this, 'SaveOrLoad') == 2) {
        if (_get(_get(_get(_scope, 'MySaveMapObj'), 'data'), 'DiTuArr') != undefined) {
            _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), '_alpha', 100);
            _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'onRelease', function () {
                _set(_get(_scope, '_root'), 'MyDiTuArr', _call(_get(this, 'DiTuArr'), 'slice', []));
                _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKStar'), 'M_NeiRong'), 'M_DiTuSet'), 'gotoAndStop', ['a11']);
                _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKStar'), 'M_NeiRong'), 'MyDiToIDstr', '自定义地图ID\uFF1A\uFF3B <b>' + _get(this, 'ID') + '</b> \uFF3D');
                _set(_get(_scope, '_root'), 'NowDiTuID', 10);
                _call(_get(_scope, 'NowMovDi'), 'removeMovieClip', []);
            });
        } else {
            _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'TimeStr', '该存档为空\uFF01');
            _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), '_alpha', 50);
        }
    } else if (_get(this, 'SaveOrLoad') == 1) {
        _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), '_alpha', 100);
        _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'DiTuArr', _get(_get(_scope, 'NowMovDi'), 'DiTuArr'));
        _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'onRelease', function () {
            var _loc3_ = _call(_get(_scope, 'SharedObject'), 'getLocal', ['MapSave' + _get(this, 'ID')]);
            var _loc2_ = new (_get(_scope, 'Date'))();
            _call(_loc3_, 'clear', []);
            _set(_get(_loc3_, 'data'), 'ID', _get(this, 'ID'));
            _set(_get(_loc3_, 'data'), 'TimeStr', _call(_loc2_, 'getFullYear', []) + '-' + _call(_scope, 'Number', [_call(_loc2_, 'getMonth', []) + 1]) + '-' + _call(_loc2_, 'getDate', []) + ' ' + _call(_loc2_, 'getHours', []) + ':' + _call(_loc2_, 'getMinutes', []) + ':' + _call(_loc2_, 'getSeconds', []));
            _set(_get(_loc3_, 'data'), 'DiTuArr', _call(_get(this, 'DiTuArr'), 'slice', []));
            _set(this, 'TimeStr', _get(_get(_loc3_, 'data'), 'TimeStr'));
        });
    }
    if (_get(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'TimeStr') != '该存档为空\uFF01' || _get(this, 'SaveOrLoad') == 1) {
        _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'onRollOver', function () {
            var _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 125, 0, 0, 0);
            var _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(this);
            _set(_loc3_, 'colorTransform', _loc2_);
        });
        _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'onRollOut', function () {
            var _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
            var _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(this);
            _set(_loc3_, 'colorTransform', _loc2_);
        });
        _set(_get(this, 'M_SaveTiao' + _get(_scope, 'i')), 'onReleaseOutside', function () {
            var _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
            var _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(this);
            _set(_loc3_, 'colorTransform', _loc2_);
        });
    }
    _update(_scope, 'i', 1, false);
}
},
// DefineSprite_781/frame_1/DoAction.as
function program333(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_781/frame_2/DoAction.as
function program334(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_781/frame_3/DoAction.as
function program335(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_787/frame_1/DoAction.as
function program336(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'play', []);
},
// DefineSprite_787/frame_59/DoAction.as
function program337(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_80_Mf_EditMess/frame_1/DoAction.as
function program338(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'B_Kong'), 'useHandCursor', false);
},
// DefineSprite_80_Mf_EditMess/frame_1/DoAction_2.as
function program339(_scope, _get, _set, _call, _update, _delete) {
_call(_get(_get(_scope, '_root'), 'S_Sound7'), 'stop', []);
_call(_get(_get(_scope, '_root'), 'S_Sound7'), 'attachSound', ['Sf_Sound105']);
_call(_get(_get(_scope, '_root'), 'S_Sound7'), 'start', [
    0,
    1
]);
},
// DefineSprite_810/frame_1/DoAction.as
function program340(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_810/frame_35/DoAction.as
function program341(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_810/frame_5/DoAction.as
function program342(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'play', []);
},
// DefineSprite_869/frame_1/DoAction.as
function program343(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 0);
_set(this, 'rSJMoney', _set(this, 'SJMoney', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 150 + (_get(this, 'Level') + 1 - 1) * 220])));
_set(this, 'rSJSenJiDian', _set(this, 'SJSenJiDian', 0));
_set(this, 'MessText', '\u3013 <b>锻造</b> \u3013<br>   加成弩箭塔和投石台的攻击力\uFF0C每升一级加成40%\u3002');
},
// DefineSprite_873/frame_1/DoAction.as
function program344(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 0);
_set(this, 'rSJMoney', _set(this, 'SJMoney', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 130 + (_get(this, 'Level') + 1 - 1) * 100])));
_set(this, 'rSJSenJiDian', _set(this, 'SJSenJiDian', 0));
_set(this, 'MessText', '\u3013 <b>抛射</b> \u3013<br>   加成弩箭塔和投石台的射程\uFF0C每升一级加成10%\u3002');
},
// DefineSprite_877/frame_1/DoAction.as
function program345(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 0);
_set(this, 'rSJMoney', _set(this, 'SJMoney', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 120 + (_get(this, 'Level') + 1 - 1) * 80])));
_set(this, 'rSJSenJiDian', _set(this, 'SJSenJiDian', 0));
_set(this, 'MessText', '\u3013 <b>土木</b> \u3013<br>   加成所有设施的最大耐久值\uFF0C每升一级加成30%\u3002');
},
// DefineSprite_881/frame_1/DoAction.as
function program346(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 0);
_set(this, 'rSJMoney', _set(this, 'SJMoney', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 500 + (_get(this, 'Level') + 1 - 1) * 66])));
_set(this, 'rSJSenJiDian', _set(this, 'SJSenJiDian', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 120 + (_get(this, 'Level') + 1 - 1) * 50])));
_set(this, 'MessText', '\u3013 <b>神恩</b> \u3013<br>   加成神电坛和神火坛的射程\uFF0C每升一级加成10%\u3002');
},
// DefineSprite_885/frame_1/DoAction.as
function program347(_scope, _get, _set, _call, _update, _delete) {
_set(this, 'Level', 0);
_set(this, 'rSJMoney', _set(this, 'SJMoney', _call(_get(_scope, 'Math'), 'round', [(_get(this, 'Level') + 1) * 99])));
_set(this, 'rSJSenJiDian', _set(this, 'SJSenJiDian', 0));
_set(this, 'MessText', '\u3013 <b>神算</b> \u3013<br>   在修建和升级设施时的费用可以获得打折\uFF0C在出售设施时可以卖出更好的价钱\uFF0C每升一级效果增加5%\u3002');
},
// DefineSprite_905/frame_1/DoAction.as
function program348(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_SoundClose'), '_visible', !_get(_get(_scope, '_root'), 'SoundOn'));
_set(_get(_scope, 'M_Show'), '_visible', false);
},
// DefineSprite_911/frame_1/DoAction.as
function program349(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', false);
},
// DefineSprite_915/frame_1/DoAction.as
function program350(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', false);
},
// DefineSprite_921/frame_1/DoAction.as
function program351(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_Show'), '_visible', false);
},
// DefineSprite_928/frame_1/DoAction.as
function program352(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'stop', []);
},
// DefineSprite_928/frame_6/DoAction.as
function program353(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'play', []);
},
// frame_1/DoAction.as
function program354(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'byteloaded', 0);
_set(_scope, 'bytetotal', 0);
_set(_scope, 'loaded', 0);
_set(_scope, 'speed', '0 K/s');
_set(_scope, 'loadedv', '0 %');
},
// frame_1/DoAction_2.as
function program355(_scope, _get, _set, _call, _update, _delete) {
_set(_get(_scope, 'M_ZeKuan'), '_yscale', 0);
if (_call(_get(_scope, '_root'), 'getBytesLoaded', []) >= _call(_get(_scope, '_root'), 'getBytesTotal', [])) {
    _set(_get(_scope, 'M_ZeKuan'), '_yscale', 100);
    _call(_scope, 'gotoAndStop', ['go']);
    _call(_scope, 'play', []);
}
_call(_scope, 'play', []);
},
// frame_1/PlaceObject3_5_847/CLIPACTIONRECORD on(release).as
function program356(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'getURL', [
    'http://www.9mine.com',
    '_blank'
]);
},
// frame_13/DoAction.as
function program357(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'play', []);
},
// frame_17/DoAction.as
function program358(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'gotoAndStop', [21]);
},
// frame_2/DoAction.as
function program359(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'play', []);
},
// frame_21/DoAction.as
function program360(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'GoNexSecne', function () {
    _call(_scope, 'gotoAndStop', [22]);
});
_set(_scope, 'PianTou', false);
_set(_get(_scope, 'M_HanZheng'), '_alpha', 0);
_set(_get(_scope, 'M_HanZheng'), 'GoToPD', false);
_set(_get(_scope, 'M_HanZheng'), 'GoPlay', false);
_set(_get(_scope, 'M_HanZheng'), 'GoSound', false);
_set(_get(_scope, 'M_HanZheng'), 'LSZsudu', 1);
_set(_scope, 'nowMicthis', this);
_set(_get(_scope, 'nowMicthis'), 'PianTou', true);
_set(_get(_get(_scope, 'nowMicthis'), 'M_LSZ'), 'StarPD', false);
_set(_get(_scope, 'M_HanZheng'), 'onEnterFrame', function () {
    var _loc2_;
    if (_get(_get(_scope, 'nowMicthis'), 'PianTou')) {
        if (_get(this, 'GoToPD') == false) {
            if (_get(this, '_alpha') < 100) {
                _set(this, '_alpha', _get(this, '_alpha') + 1);
            } else {
                _set(this, '_alpha', 100);
                _set(this, 'GoToPD', true);
            }
            if (_get(this, 'GoSound') == false && _get(this, '_alpha') >= 30) {
                _loc2_ = new (_get(_scope, 'Sound'))(this);
                _call(_loc2_, 'attachSound', ['S_Hanzheng']);
                _call(_loc2_, 'start', [
                    0,
                    1
                ]);
                _set(this, 'GoSound', true);
            }
            if (_get(this, 'GoPlay') == false && _get(this, '_alpha') >= 50) {
                _call(this, 'gotoAndPlay', ['a1']);
                _set(this, 'GoPlay', true);
            }
        } else if (_get(this, '_alpha') > 0) {
            _set(this, '_alpha', _get(this, '_alpha') - 2);
            _set(_get(_get(_scope, 'nowMicthis'), 'M_LSZ'), '_alpha', _get(_get(_get(_scope, 'nowMicthis'), 'M_LSZ'), '_alpha') - 2);
            _set(_get(_get(_scope, 'nowMicthis'), 'M_Back'), '_alpha', _get(_get(_get(_scope, 'nowMicthis'), 'M_Back'), '_alpha') - 2);
        } else {
            _set(this, '_alpha', 0);
            _call(_scope, 'gotoAndStop', [22]);
            _delete(this, 'onEnterFrame');
        }
    }
});
},
// frame_21/PlaceObject3_810_419/CLIPACTIONRECORD on(release).as
function program361(_scope, _get, _set, _call, _update, _delete) {
_call(_scope, 'getURL', [
    'http://www.9mine.com',
    '_blank'
]);
},
// frame_22/DoAction.as
function program362(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'MoneyStar', 80);
_set(_scope, 'Money', _get(_scope, 'MoneyStar'));
_set(_scope, 'SenJiDian', 0);
_set(_scope, 'RuanJiao', 0);
_set(_scope, 'BuyLuStar', 1);
_set(_scope, 'BuyLu', _get(_scope, 'BuyLuStar'));
_set(_scope, 'SellLuStar', 0.7);
_set(_scope, 'SellLu', _get(_scope, 'SellLuStar'));
_set(_scope, 'ADiRenName', '');
_set(_scope, 'LieRingCount', 0);
_set(_scope, 'NowGuanSu', 1);
_set(_scope, 'SDHPstr', '');
_set(_scope, 'All_Attack', 1);
_set(_scope, 'All_FanWei', 1);
_set(_scope, 'All_MaxHP', 1);
_set(_scope, 'AllSen_FanWei', 1);
_set(_scope, 'All_Money', 1);
_set(_scope, 'AllDeFen', 0);
_set(_scope, 'GuanEWDeFen', 0);
_set(_scope, 'AllEWDeFen', 0);
_set(_scope, 'MessText', '');
_set(_scope, 'AuMessText', '');
_set(_scope, 'NowDiTuID', -1);
_set(_scope, 'SumitUserS', '');
_set(_scope, 'SumitFen', true);
_set(_scope, 'GameStar', false);
_set(_scope, 'GamePause', false);
_set(_scope, 'SoundOn', true);
_set(_scope, 'SoundVol', 100);
_set(_scope, 'SoundVolTem', _get(_scope, 'SoundVol'));
_set(_scope, 'DiRenMaxZL', 0);
_set(_scope, 'M_Sound2Star', false);
_set(_scope, 'DiRenGoPD', false);
_set(_scope, 'MyDiTuArr', []);
_set(_scope, 'ButtonMess', '');
_set(_scope, 'MySellID', 1);
_set(_scope, 'NowTimeGO', 0);
_set(_scope, 'AllTimeGO', 8);
_set(_scope, 'NowTimeZL', new (_get(_scope, 'Date'))());
_set(_scope, 'SeSiHPmini', 3);
_set(_scope, 'ZuQiaoMax', 6);
},
// frame_22/DoAction_2.as
function program363(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'Arr_DiTu', []);
_set(_scope, 'DiTuCount', 10);
_set(_scope, 'i', 0);
while (_get(_scope, 'i') <= 10) {
    _set(_get(_scope, 'Arr_DiTu'), _get(_scope, 'i'), []);
    _update(_scope, 'i', 1, false);
}
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 0, [
    0,
    9,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 1, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 2, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 3, [
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 4, [
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 5, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 6, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 7, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 8, [
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 9, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 10, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 11, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 0), 12, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 0, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 1, [
    9,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 2, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 3, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 4, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 5, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 6, [
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 7, [
    0,
    1,
    0,
    1,
    0,
    2,
    1,
    1,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 8, [
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 9, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 10, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 11, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 1), 12, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 0, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 1, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    9
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 2, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 3, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 4, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 5, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 6, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 7, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 8, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 9, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 10, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 11, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 2), 12, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 0, [
    0,
    0,
    0,
    0,
    0,
    0,
    9,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 1, [
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 2, [
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 3, [
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 4, [
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 5, [
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 6, [
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 7, [
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 8, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 9, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 10, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 11, [
    0,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 3), 12, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 0, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 1, [
    0,
    1,
    1,
    2,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 2, [
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 3, [
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 4, [
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 5, [
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 6, [
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 7, [
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 8, [
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 9, [
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 10, [
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 11, [
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 4), 12, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    9,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 0, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 1, [
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 2, [
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 3, [
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 4, [
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 5, [
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    2,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 6, [
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 7, [
    0,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 8, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 9, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 10, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 11, [
    9,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 5), 12, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 0, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 1, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 2, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 3, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 4, [
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 5, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 6, [
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    9
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 7, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 8, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 9, [
    0,
    1,
    1,
    1,
    1,
    1,
    2,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 10, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 11, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 6), 12, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 0, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 1, [
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 2, [
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 3, [
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 4, [
    0,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 5, [
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 6, [
    9,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    2,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 7, [
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 8, [
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 9, [
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 10, [
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 11, [
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 7), 12, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 0, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 1, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 2, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 3, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 4, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 5, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 6, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 7, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 8, [
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 9, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 10, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 11, [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    9
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 8), 12, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 0, [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 1, [
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 2, [
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 3, [
    0,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 4, [
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 5, [
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    2,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 6, [
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 7, [
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 8, [
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 9, [
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 10, [
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 11, [
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0
]);
_set(_get(_get(_scope, 'Arr_DiTu'), 9), 12, [
    0,
    0,
    0,
    0,
    0,
    0,
    9,
    0,
    0,
    0,
    0,
    0,
    0
]);
},
// frame_22/DoAction_3.as
function program364(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'getAngle', function (dx, dy) {
    return (_call(_get(_scope, 'Math'), 'atan2', [
        dy,
        dx
    ]) * 180 / 3.141592653589793 + 450) % 360;
});
_set(_scope, 'refineAngle', function (angle) {
    return (angle + 360) % 360;
});
_set(_scope, 'F_NumShow', function (Miv, Num, N_x, N_y, Deph, Scale) {
    _call(Miv, 'attachMovie', [
        'Ma_Number',
        'M_Number' + Deph,
        Deph,
        {
            _x: N_x,
            _y: N_y,
            meNumber: Num,
            _xscale: Scale,
            _yscale: Scale
        }
    ]);
});
},
// frame_22/DoAction_4.as
function program365(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'DiRenStar_x', 0);
_set(_scope, 'DiRenStar_y', 0);
_set(_scope, 'DiRenLondCount', 0);
_set(_scope, 'LoadArr', []);
_set(_scope, 'TemSeSiShow', 0);
_set(_scope, 'SeSiDeph', 0);
_set(_scope, 'SeSiDephNext', 0);
_set(_scope, 'RuanQenDeph', 100);
_set(_scope, 'SenLongCount', 0);
_set(_scope, 'SumitMap', '');
_set(_scope, 'F_CreaDiTu', function () {
    var _loc22_ = 0;
    var _loc16_ = 0;
    _set(_get(_scope, '_root'), 'DiRenLondCount', 0);
    var _loc6_ = [];
    var _loc40_ = [];
    var _loc36_ = 0;
    if (_get(_get(_scope, '_root'), 'NowDiTuID') == 10) {
        _loc6_ = _call(_get(_get(_scope, '_root'), 'MyDiTuArr'), 'slice', []);
    } else {
        _loc6_ = _call(_get(_get(_get(_scope, '_root'), 'Arr_DiTu'), _get(_get(_scope, '_root'), 'NowDiTuID')), 'slice', []);
    }
    var _loc5_ = 0;
    var _loc4_;
    var _loc15_;
    var _loc12_;
    var _loc10_;
    var _loc13_;
    var _loc9_;
    var _loc24_;
    var _loc35_;
    var _loc3_;
    var _loc14_;
    while (_loc5_ <= 12) {
        _loc4_ = 0;
        while (_loc4_ <= 12) {
            _loc15_ = _get(_get(_loc6_, _loc5_), _loc4_);
            _loc12_ = 'Mf_CqoDi1';
            _loc10_ = 0;
            _loc13_ = 1;
            var DiTuTyle = 0;
            _loc9_ = '';
            var SeSiSetPD = true;
            _loc24_ = false;
            if (_loc15_ == 0) {
                _loc13_ = 1;
                DiTuTyle = 0;
                _loc22_ = _loc22_ + 1;
                _loc10_ = _loc22_;
                _loc9_ = 'DiTuKan' + _loc22_;
                if (_get(_get(_loc6_, _loc5_ - 1), _loc4_) != 2 && _get(_get(_loc6_, _loc5_ - 1), _loc4_) != 9 && _get(_get(_loc6_, _loc5_ + 1), _loc4_) != 2 && _get(_get(_loc6_, _loc5_ + 1), _loc4_) != 9 && _get(_get(_loc6_, _loc5_), _loc4_ - 1) != 2 && _get(_get(_loc6_, _loc5_), _loc4_ - 1) != 9 && _get(_get(_loc6_, _loc5_), _loc4_ + 1) != 2 && _get(_get(_loc6_, _loc5_), _loc4_ + 1) != 9 && _get(_get(_loc6_, _loc5_ - 1), _loc4_ - 1) != 2 && _get(_get(_loc6_, _loc5_ - 1), _loc4_ - 1) != 9 && _get(_get(_loc6_, _loc5_ + 1), _loc4_ + 1) != 2 && _get(_get(_loc6_, _loc5_ + 1), _loc4_ + 1) != 9 && _get(_get(_loc6_, _loc5_ + 1), _loc4_ - 1) != 2 && _get(_get(_loc6_, _loc5_ + 1), _loc4_ - 1) != 9 && _get(_get(_loc6_, _loc5_ - 1), _loc4_ + 1) != 2 && _get(_get(_loc6_, _loc5_ - 1), _loc4_ + 1) != 9) {
                    _loc24_ = true;
                    _call(_loc40_, 'push', [_loc9_]);
                    if (_loc36_ < _get(_get(_scope, '_root'), 'ZuQiaoMax')) {
                        SeSiSetPD = false;
                        _loc35_ = _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 6]) + 1;
                        _loc12_ = 'Mf_ZuCqoDi' + _loc35_;
                        _loc36_ = _loc36_ + 1;
                    }
                }
            } else if (_loc15_ == 1) {
                _loc12_ = 'Mf_NiLu1';
                _loc13_ = 2;
                DiTuTyle = 1;
                _loc16_ = _loc16_ + 1;
                _loc10_ = _loc16_;
                _loc9_ = 'DiTuKan' + _loc16_;
                _update(_get(_scope, '_root'), 'DiRenLondCount', 1, false);
                _call(_get(_get(_scope, '_root'), 'LoadArr'), 'push', [_loc9_]);
            } else if (_loc15_ == 2) {
                _loc12_ = 'Mf_GongDian1';
                _loc10_ = 200 + _loc22_;
                _loc13_ = 8;
                DiTuTyle = 2;
                _loc9_ = 'M_GongDian';
            } else if (_loc15_ == 9) {
                _loc12_ = 'Mf_RuKo1';
                _loc13_ = 2;
                DiTuTyle = 9;
                _loc16_ = _loc16_ + 1;
                _loc10_ = _loc16_;
                _loc9_ = 'M_RuKo';
                _set(_get(_scope, '_root'), 'DiRenStar_x', 6 + _loc4_ * 32);
                _set(_get(_scope, '_root'), 'DiRenStar_y', 6 + _loc5_ * 32);
                _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                    'Mf_RuKoRun',
                    'M_RuKoRun',
                    5,
                    {
                        _x: _get(_get(_scope, '_root'), 'DiRenStar_x'),
                        _y: _get(_get(_scope, '_root'), 'DiRenStar_y')
                    }
                ]);
                _set(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_RuKoRun'), 'Myix', _loc4_);
                _set(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_RuKoRun'), 'Myiy', _loc5_);
            }
            _loc3_ = _call(_get(_get(_scope, '_root'), 'M_DiTu' + _loc13_), 'attachMovie', [
                _loc12_,
                _loc9_,
                _loc10_
            ]);
            _set(_loc3_, '_x', 6 + _loc4_ * 32);
            _set(_loc3_, '_y', 6 + _loc5_ * 32);
            _set(_loc3_, 'Myix', _loc4_);
            _set(_loc3_, 'Myiy', _loc5_);
            _set(_loc3_, 'DiTuTyle', DiTuTyle);
            _set(_loc3_, 'SeSi', '');
            _set(_loc3_, 'SesiSet', false);
            _set(_loc3_, 'SeSiSetPD', SeSiSetPD);
            _set(_loc3_, 'ZuQiaoOK', _loc24_);
            if (SeSiSetPD == false) {
                _loc14_ = _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 4]) + 1;
                if (_loc14_ == 1) {
                    _set(_loc3_, '_xscale', 100);
                    _set(_loc3_, '_yscale', 100);
                } else if (_loc14_ == 2) {
                    _set(_loc3_, '_xscale', -100);
                    _set(_loc3_, '_yscale', 100);
                } else if (_loc14_ == 3) {
                    _set(_loc3_, '_xscale', 100);
                    _set(_loc3_, '_yscale', -100);
                } else if (_loc14_ == 4) {
                    _set(_loc3_, '_xscale', -100);
                    _set(_loc3_, '_yscale', -100);
                }
            }
            if (_get(_loc3_, 'DiTuTyle') == 2) {
                var NowMySenDan = _loc3_;
                _set(_get(_loc3_, 'B_Button'), 'onRelease', function () {
                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound119']);
                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                        0,
                        1
                    ]);
                    _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
                    _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'M_FanGiang'), 'gotoAndStop', ['a0']);
                    _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'M_Selled'), 'removeMovieClip', []);
                    _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
                        'Mf_DHKSuSing',
                        'M_DHKSuSing',
                        10,
                        {
                            _x: 522,
                            _y: 175
                        }
                    ]);
                    var _loc2_ = 2;
                    _call(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'gotoAndStop', ['a' + _loc2_]);
                    _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'Title', _get(NowMySenDan, 'Title'));
                    _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'TyleStr', _get(NowMySenDan, 'TyleStr'));
                    _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'Level', _get(NowMySenDan, 'Level'));
                    _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'HP', '<b>' + _get(NowMySenDan, 'HP') + '</b>');
                    _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MaxHP', '<b>' + _get(NowMySenDan, 'MaxHP') + '</b>');
                    _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'LevelB', _get(NowMySenDan, 'LevelB'));
                    _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'HPB', '<b>' + _get(NowMySenDan, 'HPB') + '</b>');
                    _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MaxHPB', '<b>' + _get(NowMySenDan, 'MaxHPB') + '</b>');
                    _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject', NowMySenDan);
                    _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'M_SenJiBan'), 'MivObject', NowMySenDan);
                    _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'M_SellBan'), '_visible', false);
                    _call(_get(NowMySenDan, 'M_FanGiang'), 'gotoAndStop', ['a1']);
                });
                false;
            } else {
                _set(_loc3_, 'onKillFocus', function () {
                    _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
                    _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
                });
                _set(_loc3_, 'onRollOver', function () {
                    var _loc3_;
                    var _loc5_;
                    var _loc4_;
                    var _loc8_;
                    var _loc7_;
                    var _loc12_;
                    var _loc13_;
                    var _loc14_;
                    var _loc10_;
                    var _loc6_;
                    var _loc11_;
                    var _loc9_;
                    var _loc16_;
                    if (_get(this, 'DiTuTyle') != 2) {
                        if (_get(_get(_scope, '_root'), 'TemSeSiShow') > 0 && (_get(_get(_scope, '_root'), 'Money') < _get(_get(_get(_scope, '_root'), 'M_ShowSeSi' + _get(_get(_scope, '_root'), 'TemSeSiShow')), 'Money') * _get(_get(_scope, '_root'), 'BuyLu') || _get(_get(_scope, '_root'), 'SenJiDian') < _get(_get(_get(_scope, '_root'), 'M_ShowSeSi' + _get(_get(_scope, '_root'), 'TemSeSiShow')), 'SenJiDian'))) {
                            _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
                        }
                        if (_get(_get(_scope, '_root'), 'TemSeSiShow') > 0 && _get(this, 'SeSi') == '' && _get(this, 'SeSiSetPD')) {
                            _set(this, 'useHandCursor', true);
                            _loc3_ = _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                                'Mf_SeSi' + _get(_get(_scope, '_root'), 'TemSeSiShow'),
                                'M_TemSeSi',
                                10,
                                { FanGiangV: true }
                            ]);
                            _set(_loc3_, '_alpha', 60);
                            _set(_loc3_, '_x', _get(this, '_x'));
                            _set(_loc3_, '_y', _get(this, '_y'));
                            _set(_loc3_, 'Star', false);
                            _loc5_ = 0;
                            _loc4_ = 1;
                            if (_get(_get(_scope, '_root'), 'TemSeSiShow') >= 100) {
                                _loc5_ = 1;
                                _loc4_ = 0;
                            }
                            if (_get(this, 'DiTuTyle') == _loc5_) {
                                _loc8_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), 'M_RuKo'), '_x') - _get(this, '_x');
                                _loc7_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), 'M_RuKo'), '_y') - _get(this, '_y');
                                _loc12_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                        _loc8_,
                                        2
                                    ]) + _call(_get(_scope, 'Math'), 'pow', [
                                        _loc7_,
                                        2
                                    ])]);
                                _loc13_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_x') - _get(this, '_x');
                                _loc14_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_y') - _get(this, '_y');
                                _loc10_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                        _loc13_,
                                        2
                                    ]) + _call(_get(_scope, 'Math'), 'pow', [
                                        _loc14_,
                                        2
                                    ])]);
                                if (_loc12_ < 58) {
                                    _loc6_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 125, 0, 0, 0);
                                    _loc11_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_loc3_);
                                    _set(_loc11_, 'colorTransform', _loc6_);
                                    _set(this, 'SesiSet', false);
                                    _set(_get(_scope, '_root'), 'MessText', '<font color=\'#FF0000\'>所有设施都不能修建在敌人入口附近\u3002</font>');
                                } else if (_loc10_ < 48) {
                                    _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
                                    _set(this, 'useHandCursor', false);
                                } else if ((_get(_get(_scope, '_root'), 'TemSeSiShow') == 3 || _get(_get(_scope, '_root'), 'TemSeSiShow') == 4) && _get(_get(_scope, '_root'), 'NowGuanSu') <= 30) {
                                    _loc8_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_x') - _get(this, '_x');
                                    _loc7_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_y') - _get(this, '_y');
                                    _loc12_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                            _loc8_,
                                            2
                                        ]) + _call(_get(_scope, 'Math'), 'pow', [
                                            _loc7_,
                                            2
                                        ])]);
                                    if (_loc12_ > _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'FanWei')) {
                                        _loc6_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 125, 0, 0, 0);
                                        _loc11_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_loc3_);
                                        _set(_loc11_, 'colorTransform', _loc6_);
                                        _set(this, 'SesiSet', false);
                                        _set(_get(_scope, '_root'), 'MessText', '<font color=\'#FF0000\'>神御塔必须修建在神殿附近神力覆盖范围之内\u3002</font>');
                                    } else {
                                        _loc6_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 125, 0, 0);
                                        _loc11_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_loc3_);
                                        _set(_loc11_, 'colorTransform', _loc6_);
                                        _set(this, 'SesiSet', true);
                                        _set(_get(_scope, '_root'), 'MessText', '<font color=\'#006F21\'>该地点可以修建该设施\uFF01</font>');
                                    }
                                } else if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 6) {
                                    _loc8_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_x') - _get(this, '_x');
                                    _loc7_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_y') - _get(this, '_y');
                                    _loc12_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                            _loc8_,
                                            2
                                        ]) + _call(_get(_scope, 'Math'), 'pow', [
                                            _loc7_,
                                            2
                                        ])]);
                                    if (_loc12_ > _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'FanWei')) {
                                        _loc6_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 125, 0, 0, 0);
                                        _loc11_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_loc3_);
                                        _set(_loc11_, 'colorTransform', _loc6_);
                                        _set(this, 'SesiSet', false);
                                        _set(_get(_scope, '_root'), 'MessText', '<font color=\'#FF0000\'>神龙像必须修建在神殿附近神力覆盖范围之内\u3002</font>');
                                    } else {
                                        _loc6_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 125, 0, 0);
                                        _loc11_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_loc3_);
                                        _set(_loc11_, 'colorTransform', _loc6_);
                                        _set(this, 'SesiSet', true);
                                        _set(_get(_scope, '_root'), 'MessText', '<font color=\'#006F21\'>该地点可以修建该设施\uFF01</font>');
                                    }
                                } else {
                                    _loc6_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 125, 0, 0);
                                    _loc11_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_loc3_);
                                    _set(_loc11_, 'colorTransform', _loc6_);
                                    _set(this, 'SesiSet', true);
                                    _set(_get(_scope, '_root'), 'MessText', '<font color=\'#006F21\'>该地点可以修建该设施\uFF01</font>');
                                }
                            } else if (_get(this, 'DiTuTyle') == _loc4_) {
                                _loc6_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 125, 0, 0, 0);
                                _loc11_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_loc3_);
                                _set(_loc11_, 'colorTransform', _loc6_);
                                _set(this, 'SesiSet', false);
                                if (_get(_get(_scope, '_root'), 'TemSeSiShow') >= 100) {
                                    _set(_get(_scope, '_root'), 'MessText', '<font color=\'#FF0000\'>该设施必须修建在道路上\uFF01</font>');
                                } else {
                                    _set(_get(_scope, '_root'), 'MessText', '<font color=\'#FF0000\'>该设施必须修建在草地上\uFF01</font>');
                                }
                            }
                            false;
                        } else {
                            _set(this, 'useHandCursor', false);
                        }
                        if (_get(this, 'SeSiSetPD') == false) {
                            _set(this, 'useHandCursor', true);
                            _loc8_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_x') - _get(this, '_x');
                            _loc7_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_y') - _get(this, '_y');
                            _loc12_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                    _loc8_,
                                    2
                                ]) + _call(_get(_scope, 'Math'), 'pow', [
                                    _loc7_,
                                    2
                                ])]);
                            _loc9_ = _call(_get(_scope, 'Math'), 'round', [(400 - _loc12_) / 40 * (_get(_get(_scope, '_root'), 'NowGuanSu') / 2)]);
                            _set(this, 'MoneyZ', 24 + (_get(_get(_scope, '_root'), 'NowGuanSu') - 1) * 3 + _loc9_);
                            _loc16_ = false;
                            if (_get(_get(_scope, '_root'), 'Money') < _get(this, 'MoneyZ')) {
                                _loc16_ = true;
                            }
                            _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                                'Mf_WaJe',
                                'M_WaJe',
                                20,
                                {
                                    _x: _get(this, '_x'),
                                    _y: _get(this, '_y'),
                                    Money: _get(this, 'MoneyZ'),
                                    NoMoney: _loc16_
                                }
                            ]);
                            if (_get(this, '_x') <= 35) {
                                _set(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'Nie_x', 13.1);
                            } else if (_get(this, '_x') >= 368) {
                                _set(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'Nie_x', -102.7);
                            } else {
                                _set(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'Nie_x', -45);
                            }
                            if (_get(this, '_y') >= 368) {
                                _set(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'Nie_y', -55);
                            } else if (_get(this, '_y') <= 35) {
                                _set(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'Nie_y', 17.5);
                            } else if (_get(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'Nie_x') == 13.1 || _get(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'Nie_x') == -102.7) {
                                _set(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'Nie_y', -19);
                            } else {
                                _set(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'Nie_y', 17.5);
                            }
                        } else {
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'removeMovieClip', []);
                        }
                    }
                });
                _set(_loc3_, 'onRollOut', function () {
                    if (_get(this, 'DiTuTyle') != 2) {
                        if (_get(_get(_scope, '_root'), 'TemSeSiShow') > 0) {
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
                        }
                        if (_get(this, 'SeSiSetPD') == false) {
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'removeMovieClip', []);
                        }
                        _set(this, 'useHandCursor', false);
                    }
                    _set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
                    _set(this, 'SesiSet', false);
                });
                _set(_loc3_, 'onReleaseOutside', function () {
                    if (_get(this, 'DiTuTyle') != 2) {
                        if (_get(_get(_scope, '_root'), 'TemSeSiShow') > 0) {
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
                        }
                        if (_get(this, 'SeSiSetPD') == false) {
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'removeMovieClip', []);
                        }
                        _set(this, 'useHandCursor', false);
                    }
                    _set(_get(_scope, '_root'), 'MessText', _get(_get(_scope, '_root'), 'AuMessText'));
                    _set(this, 'SesiSet', false);
                });
                _set(_loc3_, 'onRelease', function () {
                    _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'M_FanGiang'), 'gotoAndStop', ['a0']);
                    _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'M_Selled'), 'removeMovieClip', []);
                    var _loc11_;
                    var _loc12_;
                    var _loc4_;
                    var _loc10_;
                    var _loc3_;
                    if (_get(this, 'DiTuTyle') != 2) {
                        if (_get(this, 'SeSiSetPD') == false && _get(_get(_scope, '_root'), 'Money') >= _get(this, 'MoneyZ')) {
                            _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'stop', []);
                            _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'attachSound', ['Sf_Sound121']);
                            _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'start', [
                                0,
                                1
                            ]);
                            _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') - _get(this, 'MoneyZ'));
                            _call(this, 'gotoAndStop', ['a2']);
                            _set(this, 'SeSiSetPD', true);
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_WaJe'), 'removeMovieClip', []);
                            _set(this, 'useHandCursor', false);
                        }
                        if (_get(_get(_scope, '_root'), 'TemSeSiShow') > 0 && (_get(_get(_scope, '_root'), 'Money') < _get(_get(_get(_scope, '_root'), 'M_ShowSeSi' + _get(_get(_scope, '_root'), 'TemSeSiShow')), 'Money') * _get(_get(_scope, '_root'), 'BuyLu') || _get(_get(_scope, '_root'), 'SenJiDian') < _get(_get(_get(_scope, '_root'), 'M_ShowSeSi' + _get(_get(_scope, '_root'), 'TemSeSiShow')), 'SenJiDian'))) {
                            _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
                        }
                        _loc11_ = 0;
                        _loc12_ = 1;
                        if (_get(_get(_scope, '_root'), 'TemSeSiShow') >= 100) {
                            _loc11_ = 1;
                            _loc12_ = 0;
                        }
                        if (_get(this, 'DiTuTyle') == _loc11_ && _get(_get(_scope, '_root'), 'TemSeSiShow') > 0 && _get(this, 'SeSi') == '' && _get(this, 'SesiSet') && _get(this, 'SeSiSetPD')) {
                            _loc4_ = _get(_get(_scope, '_root'), 'M_SeSiQang');
                            if (_get(_get(_scope, '_root'), 'TemSeSiShow') >= 200 || _get(_get(_scope, '_root'), 'TemSeSiShow') == 101) {
                                _loc4_ = _get(_get(_scope, '_root'), 'M_SeSiQangB');
                            }
                            if (_get(_get(_scope, '_root'), 'SeSiDephNext') > 0 && _call(_loc4_, 'getInstanceAtDepth', [_get(_get(_scope, '_root'), 'SeSiDephNext')]) == undefined) {
                                _set(_get(_scope, '_root'), 'SeSiDeph', _get(_get(_scope, '_root'), 'SeSiDephNext'));
                                _set(_get(_scope, '_root'), 'SeSiDephNext', 0);
                            } else {
                                _update(_get(_scope, '_root'), 'SeSiDeph', 1, false);
                            }
                            if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 1) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound108']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 2) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound109']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 3) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound107']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 4) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound110']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 5) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound111']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 6) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound126']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 101) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound120']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 201) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound121']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 202) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound122']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 102) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound125']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                            }
                            _loc10_ = _call(_loc4_, 'getNextHighestDepth', []);
                            _loc3_ = _call(_loc4_, 'attachMovie', [
                                'Mf_SeSi' + _get(_get(_scope, '_root'), 'TemSeSiShow'),
                                'M_SeSi' + _loc10_,
                                _loc10_,
                                { FanGiangV: false }
                            ]);
                            _set(this, 'SeSi', _get(_loc3_, '_name'));
                            _set(_loc3_, '_x', _get(this, '_x'));
                            _set(_loc3_, '_y', _get(this, '_y'));
                            _set(_loc3_, 'Star', true);
                            _set(_loc3_, 'DiTuObject', this);
                            _set(_loc3_, 'UpdatePD', false);
                            _set(_loc3_, 'SeSiID', _get(_get(_scope, '_root'), 'TemSeSiShow'));
                            _set(_loc3_, 'HPcolor', 0);
                            _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') - _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_scope, '_root'), 'M_ShowSeSi' + _get(_get(_scope, '_root'), 'TemSeSiShow')), 'Money') * _get(_get(_scope, '_root'), 'BuyLu')]));
                            _set(_get(_scope, '_root'), 'SenJiDian', _get(_get(_scope, '_root'), 'SenJiDian') - _get(_get(_get(_scope, '_root'), 'M_ShowSeSi' + _get(_get(_scope, '_root'), 'TemSeSiShow')), 'SenJiDian'));
                            if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 5) {
                                _update(_get(_scope, '_root'), 'LieRingCount', 1, false);
                            }
                            if (_get(_get(_scope, '_root'), 'TemSeSiShow') == 6) {
                                _update(_get(_scope, '_root'), 'SenLongCount', 1, false);
                                if (_get(_get(_scope, '_root'), 'SenLongCount') >= 2) {
                                    _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
                                    _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
                                }
                            }
                            var MySeSiNow = _loc3_;
                            _set(_get(_loc3_, 'B_Button'), 'onRelease', function () {
                                if (_get(MySeSiNow, 'SeSiID') == 1) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound108']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                } else if (_get(MySeSiNow, 'SeSiID') == 2) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound109']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                } else if (_get(MySeSiNow, 'SeSiID') == 3) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound107']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                } else if (_get(MySeSiNow, 'SeSiID') == 4) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound110']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                } else if (_get(MySeSiNow, 'SeSiID') == 5) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound111']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                } else if (_get(MySeSiNow, 'SeSiID') == 6) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound126']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                } else if (_get(MySeSiNow, 'SeSiID') == 101) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound120']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                } else if (_get(MySeSiNow, 'SeSiID') == 201) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound121']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                } else if (_get(MySeSiNow, 'SeSiID') == 202) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound122']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                } else if (_get(MySeSiNow, 'SeSiID') == 102) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound125']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                }
                                _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
                                _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'M_FanGiang'), 'gotoAndStop', ['a0']);
                                _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'M_Selled'), 'removeMovieClip', []);
                                _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
                                    'Mf_DHKSuSing',
                                    'M_DHKSuSing',
                                    10,
                                    {
                                        _x: 522,
                                        _y: 175
                                    }
                                ]);
                                var _loc4_ = 1;
                                if (_get(MySeSiNow, 'Tyle') == 2 && _get(MySeSiNow, 'SJTyle') == 1) {
                                    _loc4_ = 2;
                                }
                                if (_get(MySeSiNow, 'Tyle') == 2 && (_get(MySeSiNow, 'SJTyle') == 2 || _get(MySeSiNow, 'SJTyle') == 3 || _get(MySeSiNow, 'SJTyle') == 4)) {
                                    _loc4_ = 3;
                                }
                                _call(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'gotoAndStop', ['a' + _loc4_]);
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'Title', _get(MySeSiNow, 'Title'));
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'TyleStr', _get(MySeSiNow, 'TyleStr'));
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'Level', _get(MySeSiNow, 'Level'));
                                var _loc5_ = '<b>' + _get(MySeSiNow, 'Attack') + '</b>';
                                var _loc6_ = '<b>' + _get(MySeSiNow, 'AttackB') + '</b>';
                                if (_get(MySeSiNow, 'TaTyle') == 1 || _get(MySeSiNow, 'TaTyle') == 2) {
                                    _loc5_ = '<b>' + _get(MySeSiNow, 'Attack') + '</b>';
                                    _loc5_ += ' [' + _get(MySeSiNow, 'rAttack') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']';
                                    _loc6_ = '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(MySeSiNow, 'AttackB') * _get(_get(_scope, '_root'), 'All_Attack')]) + '</b>';
                                    _loc6_ += ' [' + _get(MySeSiNow, 'AttackB') + '\xD7' + _get(_get(_scope, '_root'), 'All_Attack') + ']';
                                }
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'Attack', _loc5_);
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'AttackB', _loc6_);
                                var _loc3_ = '<b>' + _get(MySeSiNow, 'MaxHP') + '</b>';
                                var _loc2_ = '<b>' + _get(MySeSiNow, 'MaxHPB') + '</b>';
                                _loc3_ = '<b>' + _get(MySeSiNow, 'MaxHP') + '</b>';
                                _loc3_ += ' [' + _get(MySeSiNow, 'rMaxHP') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']';
                                _loc2_ = '<b>' + _call(_get(_scope, 'Math'), 'round', [_get(MySeSiNow, 'MaxHPB') * _get(_get(_scope, '_root'), 'All_MaxHP')]) + '</b>';
                                _loc2_ += ' [' + _get(MySeSiNow, 'MaxHPB') + '\xD7' + _get(_get(_scope, '_root'), 'All_MaxHP') + ']';
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MaxHP', _loc3_);
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MaxHPB', _loc2_);
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'HP', '<b>' + _get(MySeSiNow, 'HP') + '</b>');
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'HPB', '<b>' + _get(MySeSiNow, 'HPB') + '</b>');
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'FanWei', '<b>' + _get(MySeSiNow, 'FanWei') + '</b>');
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'FaSieJJ', '<b>' + _get(MySeSiNow, 'FaSieJJ') + '</b>');
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'JianSuDu', '<b>' + _get(MySeSiNow, 'JianSuDu') + '</b>');
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'LevelB', _get(MySeSiNow, 'LevelB'));
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'FanWeiB', '<b>' + _get(MySeSiNow, 'FanWeiB') + '</b>');
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'FaSieJJB', '<b>' + _get(MySeSiNow, 'FaSieJJB') + '</b>');
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'JianSuDuB', '<b>' + _get(MySeSiNow, 'JianSuDuB') + '</b>');
                                _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject', MySeSiNow);
                                _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'M_SenJiBan'), 'MivObject', _get(MySeSiNow, 'M_Ta'));
                                _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'M_SellBan'), 'MivObject', MySeSiNow);
                                _call(_get(MySeSiNow, 'M_FanGiang'), 'gotoAndStop', ['a1']);
                                _call(MySeSiNow, 'attachMovie', [
                                    'Mf_Selled',
                                    'M_Selled',
                                    999
                                ]);
                            });
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
                            false;
                            false;
                            false;
                        } else if (_get(this, 'SeSi') == '') {
                            _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
                            _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'M_FanGiang'), 'gotoAndStop', ['a0']);
                            _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'M_Selled'), 'removeMovieClip', []);
                            _call(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'removeMovieClip', []);
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
                        } else {
                            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
                            _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
                            _set(this, 'useHandCursor', false);
                        }
                    }
                });
            }
            false;
            _loc4_ = _loc4_ + 1;
        }
        _loc5_ = _loc5_ + 1;
    }
    _call(_get(_scope, '_root'), 'F_MapSumit', []);
    _call(_get(_scope, '_root'), 'F_MapSuSiRan', [_loc40_]);
});
_set(_scope, 'F_MapSuSiRan', function (ZuQiaoArr) {
    var _loc3_ = 0;
    var _loc4_;
    var _loc8_;
    var _loc7_;
    var _loc10_;
    var _loc9_;
    var _loc11_;
    var _loc6_;
    var _loc5_;
    while (_loc3_ < _get(ZuQiaoArr, 'length')) {
        _loc4_ = _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * _get(ZuQiaoArr, 'length')]);
        _loc8_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), '_x');
        _loc7_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), '_y');
        _loc10_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), 'Myix');
        _loc9_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), 'Myiy');
        _loc11_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), 'SeSiSetPD');
        _loc6_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), '_name');
        _loc5_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_)), '_name');
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), '_x', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_)), '_x'));
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), '_y', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_)), '_y'));
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), 'Myix', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_)), 'Myix'));
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), 'Myiy', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_)), 'Myiy'));
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_)), '_x', _loc8_);
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_)), '_y', _loc7_);
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_)), 'Myix', _loc10_);
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_)), 'Myiy', _loc9_);
        _call(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), 'swapDepths', [_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_))]);
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), '_name', 'TempMovePP');
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc4_)), '_name', _loc6_);
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _get(ZuQiaoArr, _loc3_)), '_name', _loc5_);
        _loc3_ = _loc3_ + 1;
    }
    _set(_get(_scope, '_root'), 'ZuQiaoArr', []);
    ZuQiaoArr = [];
});
_set(_scope, 'F_MapSumit', function () {
    _set(_get(_scope, '_root'), 'SumitMap', '');
    var _loc22_ = '';
    var _loc21_ = '';
    var _loc3_ = {
        x: 0,
        y: 0,
        Tong: 0
    };
    _set(_loc3_, 'x', _get(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_RuKoRun'), 'Myix'));
    _set(_loc3_, 'y', _get(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_RuKoRun'), 'Myiy'));
    var _loc11_ = {
        x: 0,
        y: 0
    };
    _set(_loc11_, 'x', _get(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_RuKoRun'), '_x'));
    _set(_loc11_, 'y', _get(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_RuKoRun'), '_y'));
    var _loc4_ = _call(_scope, 'String', [_get(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_RuKoRun'), 'Myix') + 1]);
    var _loc5_ = _call(_scope, 'String', [_get(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_RuKoRun'), 'Myiy') + 1]);
    if (_call(_scope, 'Number', [_loc4_]) > 9) {
        _loc4_ = _call(_scope, 'String', [_call(_scope, 'Number', [_call(_scope, 'Number', [_loc4_]) - 9 + 64])]);
        _loc4_ = _call(_get(_scope, 'String'), 'fromCharCode', [_call(_scope, 'Number', [_loc4_])]);
    }
    if (_call(_scope, 'Number', [_loc5_]) > 9) {
        _loc5_ = _call(_scope, 'String', [_call(_scope, 'Number', [_call(_scope, 'Number', [_loc5_]) - 9 + 64])]);
        _loc5_ = _call(_get(_scope, 'String'), 'fromCharCode', [_call(_scope, 'Number', [_loc5_])]);
    }
    _loc22_ = _loc4_ + _loc5_;
    _loc4_ = _call(_scope, 'String', [_get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'Myix') + 1]);
    _loc5_ = _call(_scope, 'String', [_get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'Myiy') + 1]);
    if (_call(_scope, 'Number', [_loc4_]) > 9) {
        _loc4_ = _call(_scope, 'String', [_call(_scope, 'Number', [_call(_scope, 'Number', [_loc4_]) - 9 + 64])]);
        _loc4_ = _call(_get(_scope, 'String'), 'fromCharCode', [_call(_scope, 'Number', [_loc4_])]);
    }
    if (_call(_scope, 'Number', [_loc5_]) > 9) {
        _loc5_ = _call(_scope, 'String', [_call(_scope, 'Number', [_call(_scope, 'Number', [_loc5_]) - 9 + 64])]);
        _loc5_ = _call(_get(_scope, 'String'), 'fromCharCode', [_call(_scope, 'Number', [_loc5_])]);
    }
    _loc21_ = _loc4_ + _loc5_;
    var _loc6_ = _call(_get(_get(_scope, '_root'), 'LoadArr'), 'slice', []);
    var _loc12_ = [];
    var _loc20_ = 0;
    var _loc2_;
    var _loc14_;
    var _loc13_;
    var _loc9_;
    var _loc10_;
    var _loc7_;
    var _loc19_;
    var _loc18_;
    var _loc17_;
    var _loc16_;
    var _loc15_;
    var _loc8_;
    while (_loc20_ <= _get(_loc6_, 'length')) {
        _loc2_ = 0;
        while (_loc2_ <= _get(_loc6_, 'length')) {
            if (_get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_loc6_, _loc2_)), 'DiTuTyle') == 1) {
                _loc14_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_loc6_, _loc2_)), '_x');
                _loc13_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_loc6_, _loc2_)), '_y');
                _loc9_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_loc6_, _loc2_)), '_name');
                _loc10_ = 0;
                _loc7_ = 0;
                while (_loc7_ <= _get(_loc12_, 'length')) {
                    if (_loc9_ == _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_loc12_, _loc7_)), '_name')) {
                        _loc10_ = _loc10_ + 1;
                    }
                    _loc7_ = _loc7_ + 1;
                }
                if (_loc10_ <= 0) {
                    _loc19_ = _loc14_ - _get(_loc11_, 'x');
                    _loc18_ = _loc13_ - _get(_loc11_, 'y');
                    _loc17_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                            _loc19_,
                            2
                        ]) + _call(_get(_scope, 'Math'), 'pow', [
                            _loc18_,
                            2
                        ])]);
                    if (_loc17_ < 40 && _loc17_ > 24) {
                        _loc16_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_loc6_, _loc2_)), 'Myix');
                        _loc15_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_loc6_, _loc2_)), 'Myiy');
                        _loc8_ = 0;
                        if (_loc16_ == _get(_loc3_, 'x')) {
                            _loc8_ = 1;
                        }
                        if (_loc15_ == _get(_loc3_, 'y')) {
                            _loc8_ = 2;
                        }
                        if (_loc8_ != _get(_loc3_, 'Tong')) {
                            _loc4_ = _call(_scope, 'String', [_get(_loc3_, 'x') + 1]);
                            _loc5_ = _call(_scope, 'String', [_get(_loc3_, 'y') + 1]);
                            if (_call(_scope, 'Number', [_loc4_]) > 9) {
                                _loc4_ = _call(_scope, 'String', [_call(_scope, 'Number', [_call(_scope, 'Number', [_loc4_]) - 9 + 64])]);
                                _loc4_ = _call(_get(_scope, 'String'), 'fromCharCode', [_call(_scope, 'Number', [_loc4_])]);
                            }
                            if (_call(_scope, 'Number', [_loc5_]) > 9) {
                                _loc5_ = _call(_scope, 'String', [_call(_scope, 'Number', [_call(_scope, 'Number', [_loc5_]) - 9 + 64])]);
                                _loc5_ = _call(_get(_scope, 'String'), 'fromCharCode', [_call(_scope, 'Number', [_loc5_])]);
                            }
                            _set(_get(_scope, '_root'), 'SumitMap', _get(_get(_scope, '_root'), 'SumitMap') + _loc4_);
                            _set(_get(_scope, '_root'), 'SumitMap', _get(_get(_scope, '_root'), 'SumitMap') + _loc5_);
                        }
                        _set(_loc3_, 'x', _loc16_);
                        _set(_loc3_, 'y', _loc15_);
                        _set(_loc3_, 'Tong', _loc8_);
                        _set(_loc11_, 'x', _loc14_);
                        _set(_loc11_, 'y', _loc13_);
                        _call(_loc12_, 'push', [_loc9_]);
                        break;
                    }
                }
            }
            _loc2_ = _loc2_ + 1;
        }
        _loc20_ = _loc20_ + 1;
    }
    _set(_get(_scope, '_root'), 'SumitMap', _get(_get(_scope, '_root'), 'SumitMap') + _loc21_);
});
_set(_scope, 'DiRenDeph', 0);
_set(_scope, 'DiRenMax', 7);
_set(_scope, 'CaoJiCount', 0);
_set(_scope, 'FaShiCount', 0);
_set(_scope, 'F_CreaDiRen', function () {
    var _loc44_ = _get(_get(_scope, '_root'), 'DiRenMax');
    _update(_get(_scope, '_root'), 'DiRenDeph', 1, false);
    if (_get(_get(_scope, '_root'), 'DiRenDeph') > 50) {
        _set(_get(_scope, '_root'), 'DiRenDeph', 1);
    }
    var NowDiRenID = _get(_get(_scope, '_root'), 'NowGuanSu');
    if (_get(_get(_scope, '_root'), 'NowGuanSu') > 15 && _get(_get(_scope, '_root'), 'NowGuanSu') < 31) {
        NowDiRenID = _get(_get(_scope, '_root'), 'NowGuanSu') - 15;
    } else if (_get(_get(_scope, '_root'), 'NowGuanSu') > 30 && _get(_get(_scope, '_root'), 'NowGuanSu') < 46) {
        NowDiRenID = _get(_get(_scope, '_root'), 'NowGuanSu') - 30;
    } else if (_get(_get(_scope, '_root'), 'NowGuanSu') > 45) {
        NowDiRenID = _get(_get(_scope, '_root'), 'NowGuanSu') - 45;
    }
    if (_get(_get(_scope, '_root'), 'NowGuanSu') > 5) {
        NowDiRenID += _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 3]) - 1;
    }
    if (NowDiRenID > 15 && _get(_get(_scope, '_root'), 'NowGuanSu') > 30 && _get(_get(_scope, '_root'), 'NowGuanSu') < 40) {
        NowDiRenID = 15;
    }
    if (NowDiRenID > 15) {
        NowDiRenID -= 15;
    }
    if (NowDiRenID < 1) {
        NowDiRenID = 15;
    }
    if (_get(_get(_scope, '_root'), 'NowGuanSu') == 16 && NowDiRenID > 13) {
        NowDiRenID = 1;
    }
    if (_get(_get(_scope, '_root'), 'NowGuanSu') == 31 && NowDiRenID > 13) {
        NowDiRenID = 1;
    }
    if (_get(_get(_scope, '_root'), 'DiRenDeph') >= _get(_get(_scope, '_root'), 'DiRenMax') && _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 5]) <= 1 && _get(_get(_scope, '_root'), 'CaoJiCount') == 0) {
        NowDiRenID = 9999;
        _update(_get(_scope, '_root'), 'CaoJiCount', 1, false);
    }
    var _loc32_;
    if (_get(_get(_scope, '_root'), 'NowGuanSu') > 30 && _get(_get(_scope, '_root'), 'DiRenDeph') >= _get(_get(_scope, '_root'), 'DiRenMax') - 4 && _get(_get(_scope, '_root'), 'FaShiCount') == 0) {
        _loc32_ = _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 5]);
        if (_loc32_ == 1 || _loc32_ == 2) {
            NowDiRenID = _call(_scope, 'Number', [100 + _loc32_]);
            _update(_get(_scope, '_root'), 'FaShiCount', 1, false);
        }
    }
    var _loc6_ = _call(_get(_get(_scope, '_root'), 'M_DiTu0'), 'attachMovie', [
        'Mf_DiRen' + NowDiRenID,
        'M_DiRen' + _get(_get(_scope, '_root'), 'DiRenDeph'),
        _get(_get(_scope, '_root'), 'DiRenDeph')
    ]);
    var _loc28_ = _call(_get(_get(_scope, '_root'), 'M_DiTu9'), 'attachMovie', [
        'Mf_DiRen' + NowDiRenID,
        'M_DiRen' + _get(_get(_scope, '_root'), 'DiRenDeph'),
        _get(_get(_scope, '_root'), 'DiRenDeph')
    ]);
    var _loc18_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0, 0, 0, 1, 0, 0, 0, 0);
    var _loc20_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_loc28_);
    _set(_loc20_, 'colorTransform', _loc18_);
    _set(_loc6_, 'cacheAsBitmap', true);
    _set(_loc28_, 'cacheAsBitmap', true);
    _set(_loc6_, 'ID', _get(_get(_scope, '_root'), 'DiRenDeph'));
    _set(_loc6_, '_x', _get(_get(_scope, '_root'), 'DiRenStar_x'));
    _set(_loc6_, '_y', _get(_get(_scope, '_root'), 'DiRenStar_y'));
    _set(_loc28_, '_x', _get(_loc6_, '_x') + 1);
    _set(_loc28_, '_y', _get(_loc6_, '_y') + 3);
    _set(_loc28_, '_rotation', _get(_loc6_, '_rotation'));
    _set(_loc6_, 'TemSudu', _get(_loc6_, 'Sudu'));
    _set(_loc6_, 'GoStar', false);
    _set(_loc6_, 'GoedArr', new (_get(_scope, 'Array'))());
    _set(_loc6_, 'BackArr', []);
    _set(_loc6_, 'BackPD', false);
    _set(_loc6_, 'GoedArr', _call(_get(_get(_scope, '_root'), 'LoadArr'), 'slice', []));
    _set(_loc6_, 'dx', 0);
    _set(_loc6_, 'dy', 0);
    _set(_loc6_, 'dr', 0);
    _set(_loc6_, '_rotation', 180);
    _set(_loc6_, 'NowTo_x', 0);
    _set(_loc6_, 'NowTo_y', 0);
    _set(_loc6_, 'ZhongDu', 0);
    _set(_loc6_, 'ZhongDuNum', 0);
    _set(_loc6_, 'ZhongDuPD', false);
    _set(_loc6_, 'NextGoNum', 0);
    _set(_loc6_, 'Die', true);
    _set(_loc6_, 'StarPD', false);
    _set(_loc6_, 'UpdateNPD', false);
    _set(_loc6_, 'HudunNum', 0);
    _set(_loc6_, 'HideNum', 0);
    _set(_loc6_, 'TuDunNum', false);
    _set(_loc6_, 'TuDunNumN', 0);
    _set(_loc6_, 'SenDianDa', false);
    _set(_loc6_, 'NowDiRenID', NowDiRenID);
    _set(_loc6_, 'FaFull', 0);
    if (_get(_get(_scope, '_root'), 'DiRenDeph') >= _loc44_) {
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu0'), 'M_DiRen1'), 'StarPD', true);
    }
    var NowDiRen = _loc6_;
    _set(_get(_loc6_, 'B_DiButton'), 'onRelease', function () {
        if (_get(NowDiRen, 'TyleStr') == '陆军') {
            _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'attachSound', ['Sf_Sound114']);
            _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'start', [
                0,
                1
            ]);
        } else {
            _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'attachSound', ['Sf_Sound115']);
            _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'start', [
                0,
                1
            ]);
        }
        _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
        _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'M_FanGiang'), 'gotoAndStop', ['a0']);
        _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'M_Selled'), 'removeMovieClip', []);
        _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
            'Mf_DHKSuSing',
            'M_DHKSuSing',
            10,
            {
                _x: 522,
                _y: 175
            }
        ]);
        _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'M_SenJiBan'), '_visible', false);
        _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'M_SellBan'), '_visible', false);
        _call(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'gotoAndStop', ['a4']);
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'Title', _get(NowDiRen, 'Title'));
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'TyleStr', _get(NowDiRen, 'TyleStr'));
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'Level', _get(NowDiRen, 'Level'));
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'Attack', '<b>' + _get(NowDiRen, 'Attack') + '</b>');
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'HP', '<b>' + _get(NowDiRen, 'HP') + '</b>');
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MaxHP', '<b>' + _get(NowDiRen, 'MaxHP') + '</b>');
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'Sudu', '<b>' + _get(NowDiRen, 'Sudu') + '</b>');
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'Money', '<b>' + _get(NowDiRen, 'Money') + '</b>');
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'SenJiDian', '<b>' + _get(NowDiRen, 'SenJiDian') + '</b>');
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'TeCang', _get(NowDiRen, 'TeCang'));
        if (_get(NowDiRen, 'ZhongDu') > 0) {
            _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'ZhongDu', '中毒\uFF1A<b>' + _get(NowDiRen, 'ZhongDu') + '</b>');
        } else {
            _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'ZhongDu', '-');
        }
        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject', NowDiRen);
        _call(NowDiRen, 'attachMovie', [
            'Mf_Selledd',
            'M_Selled',
            999
        ]);
    });
    false;
    _set(_loc6_, 'onEnterFrame', function () {
        if (_get(this, 'Tyle') != 9999 && _get(this, 'Tyle') != 101 && _get(this, 'Tyle') != 102) {
            if (_get(this, 'UpdateNPD') == false) {
                if (_get(_get(_scope, '_root'), 'NowGuanSu') > 15 && _get(_get(_scope, '_root'), 'NowGuanSu') <= 30) {
                    _set(this, 'Title', '银' + _get(this, 'Title'));
                    _call(_get(this, 'M_Jia'), 'gotoAndStop', ['a1']);
                    _call(_get(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), 'M_Jia'), 'gotoAndStop', ['a1']);
                } else if (_get(_get(_scope, '_root'), 'NowGuanSu') > 30) {
                    _set(this, 'Title', '金' + _get(this, 'Title'));
                    _call(_get(this, 'M_Jia'), 'gotoAndStop', ['a2']);
                    _call(_get(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), 'M_Jia'), 'gotoAndStop', ['a2']);
                }
                if (_get(this, 'NowDiRenID') < 5 && _get(_get(_scope, '_root'), 'NowGuanSu') > 10 && _get(_get(_scope, '_root'), 'NowGuanSu') < 16) {
                    _set(this, 'Title', '银' + _get(this, 'Title'));
                    _call(_get(this, 'M_Jia'), 'gotoAndStop', ['a1']);
                    _call(_get(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), 'M_Jia'), 'gotoAndStop', ['a1']);
                }
                _set(this, 'RL_Sudu', _get(this, 'Sudu'));
                _set(this, 'RL_Attack', _get(this, 'Attack'));
                if (_get(this, 'TyleStr') == '空军') {
                    _call(this, 'swapDepths', [_call(this, 'getDepth', []) + 200]);
                }
                if (_get(_get(_scope, '_root'), 'NowGuanSu') <= 15) {
                    _set(this, 'Title', _get(this, 'Title'));
                } else if (_get(_get(_scope, '_root'), 'NowGuanSu') > 15 && _get(_get(_scope, '_root'), 'NowGuanSu') <= 24) {
                    _set(this, 'MaxHP', 500 + _call(_get(_scope, 'Math'), 'round', [_get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'NowGuanSu') / 3]));
                    _set(this, 'Attack', _get(_get(_scope, '_root'), 'NowGuanSu'));
                    _set(this, 'Money', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'NowGuanSu') / 3]));
                    _set(this, 'SenJiDian', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'NowGuanSu') / 3]) - 1);
                    _set(this, 'Level', _get(_get(_scope, '_root'), 'NowGuanSu'));
                } else if (_get(_get(_scope, '_root'), 'NowGuanSu') > 24 && _get(_get(_scope, '_root'), 'NowGuanSu') <= 30) {
                    _set(this, 'MaxHP', 600 + _call(_get(_scope, 'Math'), 'round', [_get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'NowGuanSu') / 2]));
                } else if (_get(_get(_scope, '_root'), 'NowGuanSu') > 30 && _get(_get(_scope, '_root'), 'NowGuanSu') < 46) {
                    _set(this, 'MaxHP', 5000 + _call(_get(_scope, 'Math'), 'round', [_get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'NowGuanSu') / 2]));
                } else if (_get(_get(_scope, '_root'), 'NowGuanSu') > 45) {
                    _set(this, 'MaxHP', 16000 + _call(_get(_scope, 'Math'), 'round', [_get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'NowGuanSu') / 2]));
                }
                if (_get(_get(_scope, '_root'), 'NowGuanSu') > 24) {
                    _set(this, 'Attack', _get(_get(_scope, '_root'), 'NowGuanSu'));
                    _set(this, 'Money', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'NowGuanSu') / 3]));
                    _set(this, 'SenJiDian', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'NowGuanSu') / 3]) - 1);
                    _set(this, 'Level', _get(_get(_scope, '_root'), 'NowGuanSu'));
                    if (_call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 50]) <= 1 && _get(this, 'HudunNum') == 0 && _get(this, 'HideNum') == 0) {
                        _call(this, 'attachMovie', [
                            'Mf_Hudun',
                            'M_Hudun',
                            1
                        ]);
                        _set(this, 'HudunNum', 650);
                    }
                    if (_call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 50]) <= 1 && _get(this, 'HudunNum') == 0 && _get(this, 'HideNum') == 0) {
                        _set(this, 'HideNum', 350);
                        _set(this, '_alpha', 100 - _get(this, 'HideNum') / 8);
                        _set(this, 'Die', true);
                    }
                }
                _set(this, 'HP', _get(this, 'MaxHP'));
                _set(this, 'UpdateNPD', true);
            }
        } else if (_get(this, 'UpdateNPD') == false) {
            if (_get(this, 'Tyle') == 9999) {
                _set(this, 'Sudu', 1.8 + (_get(_get(_scope, '_root'), 'NowGuanSu') - 1) * 0.1);
                if (_get(this, 'Sudu') > 3.6) {
                    _set(this, 'Sudu', 3.6);
                }
                _set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
                _set(this, 'MaxHP', 60 * _get(_get(_scope, '_root'), 'NowGuanSu'));
                if (_get(_get(_scope, '_root'), 'NowGuanSu') > 15 && _get(_get(_scope, '_root'), 'NowGuanSu') < 31) {
                    _set(this, 'MaxHP', _get(this, 'MaxHP') + 500);
                } else if (_get(_get(_scope, '_root'), 'NowGuanSu') > 30) {
                    _set(this, 'MaxHP', _get(this, 'MaxHP') + 2000);
                }
                _set(this, 'HP', _get(this, 'MaxHP'));
                _set(this, 'Attack', 10 * _get(_get(_scope, '_root'), 'NowGuanSu'));
                _set(this, 'Money', _call(_get(_scope, 'Math'), 'round', [20 * (_get(_get(_scope, '_root'), 'NowGuanSu') * 0.5)]));
                _set(this, 'SenJiDian', _call(_get(_scope, 'Math'), 'round', [10 * (_get(_get(_scope, '_root'), 'NowGuanSu') * 0.5)]));
            } else if (_get(this, 'Tyle') == 101 || _get(this, 'Tyle') == 102) {
                _set(this, 'Sudu', 1.8 + (_get(_get(_scope, '_root'), 'NowGuanSu') - 1) * 0.1);
                if (_get(this, 'Sudu') > 2.8) {
                    _set(this, 'Sudu', 2.8);
                }
                _set(this, 'MAXAngle', _get(this, 'Sudu') * 10);
                _set(this, 'MaxHP', 5000 + _call(_get(_scope, 'Math'), 'round', [_get(this, 'MaxHP') * _get(_get(_scope, '_root'), 'NowGuanSu') / 2]));
                _set(this, 'HP', _get(this, 'MaxHP'));
                if (_get(this, 'Tyle') == 102) {
                    _set(this, 'Attack', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'NowGuanSu') / 1.5]));
                } else {
                    _set(this, 'Attack', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'NowGuanSu') * 3]));
                }
                _set(this, 'Money', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'NowGuanSu') / 2]));
                _set(this, 'SenJiDian', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'NowGuanSu') / 2]));
            }
            _set(this, 'UpdateNPD', true);
        }
        if (_get(_get(_scope, '_root'), 'FaShiCount') > 0) {
            _set(this, 'Sudu', 1.8 + (_get(_get(_scope, '_root'), 'NowGuanSu') - 1) * 0.1);
            if (_get(this, 'Sudu') > 2.8) {
                _set(this, 'Sudu', 2.8);
            }
        }
        var _loc35_;
        var _loc38_;
        var _loc43_;
        var _loc34_;
        var _loc22_;
        var _loc9_;
        var _loc6_;
        var _loc8_;
        var _loc7_;
        var _loc23_;
        var _loc32_;
        var _loc0_;
        var _loc45_;
        var _loc42_;
        var _loc30_;
        var _loc24_;
        var _loc29_;
        var _loc28_;
        var _loc39_;
        var _loc40_;
        var _loc41_;
        var _loc31_;
        var _loc11_;
        var _loc36_;
        var _loc44_;
        var _loc37_;
        var _loc33_;
        var _loc25_;
        var _loc27_;
        var _loc26_;
        var _loc5_;
        var _loc3_;
        var _loc13_;
        if (_get(_get(_scope, '_root'), 'GamePause') == false) {
            _set(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), '_x', _get(this, '_x') + 1);
            if (_get(this, 'TyleStr') == '陆军') {
                _set(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), '_y', _get(this, '_y') + 2);
            } else {
                _set(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), '_y', _get(this, '_y') + 7);
            }
            _set(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), '_rotation', _get(this, '_rotation'));
            _set(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), '_alpha', _get(this, '_alpha'));
            if (_get(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), '_alpha') < 0) {
                _set(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), '_alpha', 0);
            }
            _update(this, 'FaFull', 1, false);
            if (_get(this, 'FaFull') > 50) {
                _set(this, 'FaFull', 50);
            }
            if (_get(this, 'HudunNum') > 0) {
                _update(this, 'HudunNum', -1, false);
                _set(_get(this, 'M_Hudun'), '_alpha', _get(this, 'HudunNum') / 10);
            } else {
                _set(this, 'HudunNum', 0);
                _call(_get(this, 'M_Hudun'), 'removeMovieClip', []);
            }
            if (_get(this, 'HideNum') > 0) {
                _update(this, 'HideNum', -1, false);
            } else {
                _set(this, 'HideNum', 0);
                if (_get(this, 'TuDunNum') == false) {
                    _set(this, '_alpha', 100);
                }
            }
            if (_get(this, 'TeSing') == 6 && _get(this, 'HP') < _get(this, 'MaxHP')) {
                _loc35_ = _get(this, 'RL_Sudu') * 1.2;
                _loc38_ = _call(_get(_scope, 'Math'), 'floor', [_loc35_]);
                _loc43_ = _call(_get(_scope, 'Math'), 'round', [(_loc35_ - _loc38_) * 10]);
                _set(this, 'Sudu', _loc38_ + _loc43_ / 10);
            }
            if (_get(this, 'TeSing') == 8 && _get(this, 'HP') < _get(this, 'MaxHP')) {
                _set(this, 'Attack', _call(_get(_scope, 'Math'), 'round', [_get(this, 'RL_Attack') * 1.2]));
            }
            if (_get(this, 'HP') <= 0) {
                if (_get(this, 'TyleStr') == '陆军') {
                    _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'stop', []);
                    _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'attachSound', ['Sf_Sound114']);
                    _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'start', [
                        0,
                        1
                    ]);
                } else {
                    _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'stop', []);
                    _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'attachSound', ['Sf_Sound115']);
                    _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'start', [
                        0,
                        1
                    ]);
                }
                if (_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), '_name') == _get(this, '_name')) {
                    _call(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'removeMovieClip', []);
                }
                _set(this, 'HP', 0);
                _set(this, 'Die', true);
                _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') + _get(this, 'Money'));
                _loc34_ = _get(this, 'Money');
                _set(_get(_scope, '_root'), 'SenJiDian', _get(_get(_scope, '_root'), 'SenJiDian') + _get(this, 'SenJiDian'));
                if (_call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 50]) <= 1) {
                    _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') + _get(this, 'Money'));
                    _set(_get(_scope, '_root'), 'SenJiDian', _get(_get(_scope, '_root'), 'SenJiDian') + _get(this, 'SenJiDian'));
                    _loc34_ += _get(this, 'Money');
                }
                if (_get(this, 'SenDianDa')) {
                    _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') + _get(this, 'Money'));
                    _set(_get(_scope, '_root'), 'SenJiDian', _get(_get(_scope, '_root'), 'SenJiDian') + _get(this, 'SenJiDian'));
                    _loc34_ += _get(this, 'Money');
                }
                _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
                if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 500) {
                    _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
                }
                _loc22_ = _get(this, '_x');
                _loc9_ = _get(this, '_y') - 5;
                _loc6_ = _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                    'Mf_DeMoney',
                    'M_DeMoney' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
                    _get(_get(_scope, '_root'), 'RuanQenDeph'),
                    {
                        _x: _loc22_,
                        _y: _loc9_
                    }
                ]);
                _set(_loc6_, 'Star_Y', _loc9_);
                _set(_loc6_, 'Money', _loc34_);
                _set(_loc6_, 'onEnterFrame', function () {
                    if (_call(_get(_scope, 'Math'), 'abs', [_get(this, '_y') - _get(this, 'Star_Y')]) < 20) {
                        _set(this, '_y', _get(this, '_y') - 1.2);
                    } else {
                        _call(this, 'removeMovieClip', []);
                    }
                });
                false;
                if (_get(_get(_scope, '_root'), 'SenJiDian') < 0) {
                    _update(_get(_scope, '_root'), 'SenJiDian', 1, false);
                }
                _set(_get(_scope, '_root'), 'AllDeFen', _get(_get(_scope, '_root'), 'AllDeFen') + _call(_get(_scope, 'Math'), 'ceil', [_get(_get(_scope, '_root'), 'NowGuanSu') / 3]));
                _update(_get(_scope, '_root'), 'DiRenMaxZL', -1, false);
                _call(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), 'removeMovieClip', []);
                _call(this, 'removeMovieClip', []);
            }
            if (_call(this, 'hitTest', [_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_RuKoRun')])) {
                _set(this, 'Die', true);
            } else if (_get(this, 'Die') && _get(this, 'HideNum') <= 0 && _get(this, 'TuDunNum') == false) {
                _set(this, 'Die', false);
            }
            if (_get(this, 'StarPD')) {
                _loc8_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_x') - _get(this, '_x');
                _loc7_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_y') - _get(this, '_y');
                _loc23_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                        _loc8_,
                        2
                    ]) + _call(_get(_scope, 'Math'), 'pow', [
                        _loc7_,
                        2
                    ])]);
                if (_loc23_ < 100) {
                    _set(this, 'SenDianDa', true);
                }
                if (_loc23_ < 42) {
                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound124']);
                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                        0,
                        1
                    ]);
                    _set(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'HP') - _get(this, 'Attack'));
                    _update(_get(_scope, '_root'), 'SenJiDian', -1, false);
                    _set(_get(_scope, '_root'), 'GuanEWDeFen', _get(_get(_scope, '_root'), 'GuanEWDeFen') - _get(this, 'Attack'));
                    _set(_get(_scope, '_root'), 'SDHPstr', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'HP') + '/' + _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'MaxHP'));
                    if (_get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'HP') <= 0) {
                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                            0,
                            1
                        ]);
                        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'HP', 0);
                        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'Die', true);
                        _call(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'gotoAndStop', ['Die']);
                    }
                    _update(_get(_scope, '_root'), 'DiRenMaxZL', -1, false);
                    _call(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), 'removeMovieClip', []);
                    _call(this, 'removeMovieClip', []);
                }
                if (_get(this, 'TuDunNum') == false && _get(this, 'TeSing') == 9 && _loc23_ > 180 && _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 200]) == 1 && _get(this, 'HudunNum') <= 0 && _get(this, 'HideNum') <= 0) {
                    _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'stop', []);
                    _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'attachSound', ['Sf_Sound121']);
                    _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'start', [
                        0,
                        1
                    ]);
                    _set(this, 'TuDunNum', true);
                    _set(this, 'TuDunNumN', 0);
                    _set(this, 'Die', true);
                    _set(this, '_alpha', 0);
                    _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
                    if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 300) {
                        _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
                    }
                    _loc22_ = _get(this, '_x');
                    _loc9_ = _get(this, '_y');
                    _loc32_ = _call(_get(_get(_scope, '_root'), 'M_TemQangU'), 'attachMovie', [
                        'Mf_TuDun',
                        'M_RanQeng' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
                        _get(_get(_scope, '_root'), 'RuanQenDeph'),
                        {
                            _x: _loc22_,
                            _y: _loc9_
                        }
                    ]);
                    _set(_loc32_, 'ToDualpha', 100);
                    _set(_loc32_, 'onEnterFrame', function () {
                        _update(this, 'ToDualpha', -1, false);
                        _set(this, '_alpha', _get(this, 'ToDualpha'));
                        if (_get(this, 'ToDualpha') <= 0) {
                            _call(this, 'removeMovieClip', []);
                        }
                    });
                    false;
                }
                if (_get(this, 'TuDunNum')) {
                    _update(this, 'TuDunNumN', 1, false);
                    if (_loc23_ < 150 || _get(this, 'TuDunNumN') > 350) {
                        _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'stop', []);
                        _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'attachSound', ['Sf_Sound121']);
                        _call(_get(_get(_scope, '_root'), 'S_Sound6'), 'start', [
                            0,
                            1
                        ]);
                        _set(this, 'Die', false);
                        _set(this, '_alpha', 100);
                        _set(this, 'TuDunNum', false);
                        _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
                        if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 300) {
                            _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
                        }
                        _loc22_ = _get(this, '_x');
                        _loc9_ = _get(this, '_y');
                        _loc32_ = _call(_get(_get(_scope, '_root'), 'M_TemQangU'), 'attachMovie', [
                            'Mf_TuDun',
                            'M_RanQeng' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
                            _get(_get(_scope, '_root'), 'RuanQenDeph'),
                            {
                                _x: _loc22_,
                                _y: _loc9_
                            }
                        ]);
                        _set(_loc32_, 'ToDualpha', 100);
                        _set(_loc32_, 'onEnterFrame', function () {
                            _update(this, 'ToDualpha', -1, false);
                            _set(this, '_alpha', _get(this, 'ToDualpha'));
                            if (_get(this, 'ToDualpha') <= 0) {
                                _call(this, 'removeMovieClip', []);
                            }
                        });
                        false;
                    }
                }
                if (_get(this, 'PerStar') > 100 && _get(this, 'TuDunNum') == false) {
                    _loc45_ = _set(this, 'PerStar', _get(this, 'PerStar') - 10);
                    _set(this, 'c', new (_get(_scope, 'Color'))(this));
                    _set(this, 'ctrans', new (_get(_scope, 'Object'))());
                    _set(_get(this, 'ctrans'), 'ra', _loc45_);
                    _set(_get(this, 'ctrans'), 'ga', _loc45_);
                    _set(_get(this, 'ctrans'), 'ba', _loc45_);
                    _call(_get(this, 'c'), 'setTransform', [_get(this, 'ctrans')]);
                }
                _update(this, 'NextGoNum', 1, false);
                _loc42_ = _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 20]) + 10;
                if (_get(this, 'NextGoNum') > _loc42_ && _get(_get(_get(_get(_scope, '_root'), 'M_DiTu0'), 'M_DiRen' + _call(_scope, 'Number', [_get(this, 'ID') + 1])), 'StarPD') == false) {
                    _set(_get(_get(_get(_scope, '_root'), 'M_DiTu0'), 'M_DiRen' + _call(_scope, 'Number', [_get(this, 'ID') + 1])), 'StarPD', true);
                }
                if (_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), '_name') == _get(this, '_name')) {
                    _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'HP', '<b>' + _get(this, 'HP') + '</b>');
                    if (_get(this, 'ZhongDu') > 0) {
                        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'ZhongDu', '<font color=\'#581F72\'>中毒\uFF1A<b>' + _get(this, 'ZhongDu') + '</b></font>');
                    } else {
                        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'ZhongDu', '');
                    }
                    if (_get(this, 'HudunNum') > 0) {
                        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'ZhongDu', _get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'ZhongDu') + ('<font color=\'#0055D5\'>魔盾\uFF1A<b>' + _get(this, 'HudunNum') + '</b></font>'));
                    }
                    if (_get(this, 'HideNum') > 0) {
                        _set(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'ZhongDu', _get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'ZhongDu') + ('<font color=\'#0055D5\'>隐身\uFF1A<b>' + _get(this, 'HideNum') + '</b></font>'));
                    }
                    if (_get(_get(_scope, '_root'), 'LieRingCount') > 0) {
                        _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'B_JuiJi'), 'enabled', true);
                        _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'B_JuiJi'), '_alpha', 100);
                    } else {
                        _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'B_JuiJi'), 'enabled', false);
                        _set(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'B_JuiJi'), '_alpha', 45);
                    }
                }
                if (_get(this, 'HP') < _get(this, 'MaxHP') && _get(this, 'Tyle') == 9999 && _get(this, 'BackPD') == false) {
                    _set(this, 'GoedArr', _get(this, 'BackArr'));
                    _set(this, 'Sudu', _get(this, 'Sudu') * 1.5);
                    _set(this, 'BackPD', true);
                }
                if (_get(this, 'GoStar') == false) {
                    _loc30_ = 0;
                    while (_loc30_ < _get(_get(this, 'GoedArr'), 'length')) {
                        _set(this, 'NowTo_x', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), '_x'));
                        _set(this, 'NowTo_y', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), '_y'));
                        _set(this, 'NowToDiTu', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), '_name'));
                        _loc24_ = _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 6 - 3]);
                        _set(this, 'NowTo_x', _get(this, 'NowTo_x') + _loc24_);
                        _loc24_ = _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 6 - 3]);
                        _set(this, 'NowTo_y', _get(this, 'NowTo_y') + _loc24_);
                        if (_get(this, 'TyleStr') == '空军') {
                            _set(this, 'NowTo_y', _get(this, 'NowTo_y') - 5);
                        }
                        _set(this, 'dx', _get(this, 'NowTo_x') - _get(this, '_x'));
                        _set(this, 'dy', _get(this, 'NowTo_y') - _get(this, '_y'));
                        _set(this, 'dr', _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                _get(this, 'dx'),
                                2
                            ]) + _call(_get(_scope, 'Math'), 'pow', [
                                _get(this, 'dy'),
                                2
                            ])]));
                        if (_get(this, 'dr') <= 40 && _get(this, 'dr') >= 24) {
                            if (_get(this, 'TuDunNum') == false && _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi') != '' && _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'SJTyle') == 1 && _get(this, 'TyleStr') == '陆军') {
                                if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'Die') == false) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound120']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                    _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'HP') - 1);
                                    _update(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'Money', -1, false);
                                    if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'Money') < 0) {
                                        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'Money', 0);
                                    }
                                    if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'HP') <= 0) {
                                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
                                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                            0,
                                            1
                                        ]);
                                        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'HP', 0);
                                        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'Die', true);
                                        _call(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi')), 'removeMovieClip', []);
                                        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(_get(this, 'GoedArr'), _loc30_)), 'SeSi', '');
                                    }
                                    _set(this, 'GoStar', false);
                                }
                                break;
                            }
                            _set(this, 'TemSudu', _get(this, 'Sudu') + (_call(_get(_scope, 'Math'), 'random', []) - 0.5) / 2);
                            if (_get(this, 'Tyle') == 9999 && _get(this, 'BackPD') == false) {
                                _call(_get(this, 'BackArr'), 'push', [_get(_get(this, 'GoedArr'), _loc30_)]);
                            }
                            _call(_get(this, 'GoedArr'), 'splice', [
                                _loc30_,
                                1
                            ]);
                            _set(this, 'GoStar', true);
                            break;
                        }
                        _set(this, 'GoStar', false);
                        _loc30_ = _loc30_ + 1;
                    }
                    if (_get(this, 'BackPD') && _get(this, 'GoStar') == false) {
                        _set(this, 'NowTo_x', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), 'M_RuKo'), '_x'));
                        _set(this, 'NowTo_y', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), 'M_RuKo'), '_y'));
                        _set(this, 'dx', _get(this, 'NowTo_x') - _get(this, '_x'));
                        _set(this, 'dy', _get(this, 'NowTo_y') - _get(this, '_y'));
                        _set(this, 'dr', _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                _get(this, 'dx'),
                                2
                            ]) + _call(_get(_scope, 'Math'), 'pow', [
                                _get(this, 'dy'),
                                2
                            ])]));
                        if (_get(this, 'dr') <= 40 && _get(this, 'dr') >= 24) {
                            _set(this, 'NowToDiTu', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), 'M_RuKo'), '_name'));
                            _set(this, 'GoedArr', []);
                            _set(this, 'BackArr', []);
                            _set(this, 'GoStar', true);
                        }
                    }
                }
                if (_get(this, 'GoStar')) {
                    _loc29_ = _get(this, 'TemSudu') * _call(_get(_scope, 'Math'), 'cos', [_call(_get(_scope, 'Math'), 'atan2', [
                            _get(this, 'dy'),
                            _get(this, 'dx')
                        ])]);
                    _loc28_ = _get(this, 'TemSudu') * _call(_get(_scope, 'Math'), 'sin', [_call(_get(_scope, 'Math'), 'atan2', [
                            _get(this, 'dy'),
                            _get(this, 'dx')
                        ])]);
                    _loc39_ = _get(this, 'NowTo_x') - _get(this, '_x');
                    _loc40_ = _get(this, 'NowTo_y') - _get(this, '_y');
                    _loc41_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                            _loc39_,
                            2
                        ]) + _call(_get(_scope, 'Math'), 'pow', [
                            _loc40_,
                            2
                        ])]);
                    if (_call(_get(_scope, 'Math'), 'abs', [_loc39_]) > _loc29_ * 1.5) {
                        _set(this, '_x', _get(this, '_x') + _loc29_);
                    } else {
                        _set(this, '_x', _get(this, 'NowTo_x'));
                    }
                    if (_call(_get(_scope, 'Math'), 'abs', [_loc40_]) > _loc28_ * 1.5) {
                        _set(this, '_y', _get(this, '_y') + _loc28_);
                    } else {
                        _set(this, '_y', _get(this, 'NowTo_y'));
                    }
                    _loc31_ = _get(this, '_rotation');
                    _loc11_ = _call(_get(_scope, '_root'), 'getAngle', [
                        _get(this, 'dx'),
                        _get(this, 'dy')
                    ]);
                    _loc36_ = _call(_get(_scope, '_root'), 'refineAngle', [_loc31_ - _loc11_]);
                    _set(this, 'MAXAngle', _call(_get(_scope, 'Math'), 'abs', [_loc31_ - _loc11_]) / 6);
                    _loc44_ = _call(_get(_scope, '_root'), 'refineAngle', [_loc36_]) < 180 ? -1 : 1;
                    _set(this, '_rotation', _call(_get(_scope, 'Math'), 'abs', [_loc36_]) <= _get(this, 'MAXAngle') ? _loc11_ : _loc31_ + _get(this, 'MAXAngle') * _loc44_);
                    if (_loc41_ <= _get(this, 'TemSudu') * 1.5) {
                        _set(this, '_x', _get(this, 'NowTo_x'));
                        _set(this, '_y', _get(this, 'NowTo_y'));
                        _set(this, 'NowDDDiTu', _get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')));
                        if (_get(this, 'TuDunNum') == false && _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi') != '' && _get(this, 'TyleStr') == '陆军' && _get(this, 'Die') == false) {
                            if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'SJTyle') == 2) {
                                if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Die') == false) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound121']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                    _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP') - 1);
                                    _update(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Money', -1, false);
                                    if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Money') < 0) {
                                        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Money', 0);
                                    }
                                    if (_get(this, 'HudunNum') > 0) {
                                        _set(this, 'HudunNum', _get(this, 'HudunNum') - _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Attack'));
                                        if (_get(this, 'HudunNum') < 0) {
                                            _set(this, 'HP', _get(this, 'HP') + _get(this, 'HudunNum'));
                                        }
                                        if (_get(this, 'HudunNum') <= 0) {
                                            _call(_get(this, 'M_Hudun'), 'removeMovieClip', []);
                                        }
                                        _set(_get(this, 'M_Hudun'), '_alpha', _get(this, 'HudunNum') / 10);
                                    } else {
                                        _loc37_ = 1;
                                        if (_get(this, 'TeSing') == 4 && _get(this, 'DQHRtyle') == 1) {
                                            _loc37_ = 0.5;
                                        }
                                        if (_get(this, 'TeSing') == 2 && _get(this, 'DQHRtyle') == 2) {
                                            _loc37_ = 0.5;
                                        }
                                        _set(this, 'HP', _get(this, 'HP') - _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Attack') * _loc37_]));
                                    }
                                    if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP') <= 0) {
                                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
                                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                            0,
                                            1
                                        ]);
                                        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP', 0);
                                        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Die', true);
                                        _call(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'removeMovieClip', []);
                                        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi', '');
                                    }
                                    _loc45_ = _set(this, 'PerStar', 250);
                                    _set(this, 'c', new (_get(_scope, 'Color'))(this));
                                    _set(this, 'ctrans', new (_get(_scope, 'Object'))());
                                    _set(_get(this, 'ctrans'), 'ra', _loc45_);
                                    _set(_get(this, 'ctrans'), 'ga', _loc45_);
                                    _set(_get(this, 'ctrans'), 'ba', _loc45_);
                                    _call(_get(this, 'c'), 'setTransform', [_get(this, 'ctrans')]);
                                }
                            }
                            if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'SJTyle') == 3) {
                                if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Die') == false) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound122']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                    _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP') - 1);
                                    _update(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Money', -1, false);
                                    if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Money') < 0) {
                                        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Money', 0);
                                    }
                                    _loc37_ = 1;
                                    if (_get(this, 'TeSing') == 1) {
                                        _loc37_ = 0.5;
                                    }
                                    _set(this, 'ZhongDu', _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Attack') * _loc37_]));
                                    _set(this, 'ZhongDuNum', _get(this, 'ZhongDu') / 7);
                                    if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP') <= 0) {
                                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
                                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                            0,
                                            1
                                        ]);
                                        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP', 0);
                                        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Die', true);
                                        _call(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'removeMovieClip', []);
                                        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi', '');
                                    }
                                    _loc45_ = _set(this, 'PerStar', 100);
                                    _set(this, 'c', new (_get(_scope, 'Color'))(this));
                                    _set(this, 'ctrans', new (_get(_scope, 'Object'))());
                                    _set(_get(this, 'ctrans'), 'ra', 100);
                                    _set(_get(this, 'ctrans'), 'ga', 255);
                                    _set(_get(this, 'ctrans'), 'ba', 100);
                                    _call(_get(this, 'c'), 'setTransform', [_get(this, 'ctrans')]);
                                    _set(this, 'ZhongDuPD', true);
                                }
                            }
                        }
                        _loc33_ = true;
                        if (_get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi') != '' && _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'SJTyle') == 4 && _get(this, 'TyleStr') == '空军') {
                            if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Die') == false) {
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound125']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                    0,
                                    1
                                ]);
                                _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP') - 1);
                                _set(this, 'HP', _get(this, 'HP') - _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Level'));
                                _update(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Money', -1, false);
                                if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Money') < 0) {
                                    _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Money', 0);
                                }
                                if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP') <= 0) {
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
                                    _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                                        0,
                                        1
                                    ]);
                                    _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'HP', 0);
                                    _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Die', true);
                                    _call(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'removeMovieClip', []);
                                    _set(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi', '');
                                }
                                _set(this, '_x', _get(this, '_x') - _loc29_);
                                _set(this, '_y', _get(this, '_y') - _loc28_);
                                _loc33_ = false;
                                _loc45_ = _set(this, 'PerStar', 250);
                                _set(this, 'c', new (_get(_scope, 'Color'))(this));
                                _set(this, 'ctrans', new (_get(_scope, 'Object'))());
                                _set(_get(this, 'ctrans'), 'ra', _loc45_);
                                _set(_get(this, 'ctrans'), 'ga', _loc45_);
                                _set(_get(this, 'ctrans'), 'ba', _loc45_);
                                _call(_get(this, 'c'), 'setTransform', [_get(this, 'ctrans')]);
                            }
                        }
                        if (_get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi') != '' && _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'SJTyle') == 5) {
                            if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'SeSi')), 'Die') == false) {
                                _loc37_ = 1;
                                if (_get(this, 'TeSing') == 10) {
                                    _loc37_ = 0.5;
                                }
                                _set(this, 'HP', _get(this, 'HP') - 9 * _loc37_);
                                _set(this, '_x', _get(this, '_x') - _loc29_);
                                _set(this, '_y', _get(this, '_y') - _loc28_);
                                _loc33_ = false;
                                _loc45_ = _set(this, 'PerStar', 100);
                                _set(this, 'c', new (_get(_scope, 'Color'))(this));
                                _set(this, 'ctrans', new (_get(_scope, 'Object'))());
                                _set(_get(this, 'ctrans'), 'ra', 100);
                                _set(_get(this, 'ctrans'), 'ga', 100);
                                _set(_get(this, 'ctrans'), 'ba', 255);
                                _call(_get(this, 'c'), 'setTransform', [_get(this, 'ctrans')]);
                            }
                        }
                        if (_get(this, 'Tyle') == 101 && _get(this, 'FaFull') >= 30) {
                            _loc25_ = 120;
                            _loc27_ = _get(this, '_x');
                            _loc26_ = _get(this, '_y');
                            var DiRenName = '';
                            _loc30_ = 1;
                            while (_loc30_ <= _get(_get(_scope, '_root'), 'DiRenMax')) {
                                _loc5_ = _get(_get(_get(_scope, '_root'), 'M_DiTu0'), 'M_DiRen' + _loc30_);
                                if (_get(_loc5_, 'Die') == false && _get(_loc5_, 'HP') < _get(_loc5_, 'MaxHP') && _get(_loc5_, '_name') != _get(this, '_name')) {
                                    _loc8_ = _get(_loc5_, '_x') - _loc27_;
                                    _loc7_ = _get(_loc5_, '_y') - _loc26_;
                                    _loc23_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                            _loc8_,
                                            2
                                        ]) + _call(_get(_scope, 'Math'), 'pow', [
                                            _loc7_,
                                            2
                                        ])]);
                                    if (_loc23_ <= _loc25_) {
                                        DiRenName = _get(_loc5_, '_name');
                                        _loc11_ = _call(_get(_scope, '_root'), 'getAngle', [
                                            _loc8_,
                                            _loc7_
                                        ]);
                                        _update(_get(_scope, '_root'), 'JianDeph', 1, false);
                                        if (_get(_get(_scope, '_root'), 'JianDeph') > 100) {
                                            _set(_get(_scope, '_root'), 'JianDeph', 1);
                                        }
                                        _loc3_ = _call(_get(_get(_scope, '_root'), 'M_DanQang'), 'attachMovie', [
                                            'Mf_DiDan1',
                                            'M_Jian' + _get(_get(_scope, '_root'), 'JianDeph'),
                                            _get(_get(_scope, '_root'), 'JianDeph')
                                        ]);
                                        _set(_loc3_, '_x', _get(this, '_x') + 7);
                                        _set(_loc3_, '_y', _get(this, '_y') + 7);
                                        _set(_loc3_, '_rotation', _loc11_);
                                        _loc13_ = (_loc11_ - 90) / 57.29577951308232;
                                        _set(_loc3_, 'speedX', _call(_get(_scope, 'Math'), 'cos', [_loc13_]) * 10);
                                        _set(_loc3_, 'speedY', _call(_get(_scope, 'Math'), 'sin', [_loc13_]) * 10);
                                        _set(_loc3_, 'DiRenName', DiRenName);
                                        _set(_loc3_, 'MAXAngle', _get(this, 'MAXAngle'));
                                        _set(_loc3_, 'Attack', _get(this, 'Attack'));
                                        _set(_loc3_, 'onEnterFrame', function () {
                                            var _loc3_ = _get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(this, 'DiRenName'));
                                            if (_get(_loc3_, 'Die') || _get(this, '_x') < -10 || _get(this, '_y') < -10 || _get(this, '_x') > 480 || _get(this, '_y') > 480) {
                                                _call(this, 'removeMovieClip', []);
                                            }
                                            var _loc9_ = _get(_loc3_, '_x') + 7 - _get(this, '_x');
                                            var _loc10_ = _get(_loc3_, '_y') + 7 - _get(this, '_y');
                                            var _loc14_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                                    _loc9_,
                                                    2
                                                ]) + _call(_get(_scope, 'Math'), 'pow', [
                                                    _loc10_,
                                                    2
                                                ])]);
                                            var _loc11_ = _call(_get(_scope, '_root'), 'getAngle', [
                                                _loc9_,
                                                _loc10_
                                            ]);
                                            var _loc6_ = _get(this, '_rotation');
                                            var _loc8_ = _call(_get(_scope, '_root'), 'refineAngle', [_loc6_ - _loc11_]);
                                            var _loc12_ = _call(_get(_scope, '_root'), 'refineAngle', [_loc8_]) < 180 ? -1 : 1;
                                            _set(this, '_rotation', _call(_get(_scope, 'Math'), 'abs', [_loc8_]) <= _get(this, 'MAXAngle') ? _loc11_ : _loc6_ + _get(this, 'MAXAngle') * _loc12_);
                                            var _loc7_ = (_get(this, '_rotation') - 90) / 57.29577951308232;
                                            _set(this, 'speedX', _call(_get(_scope, 'Math'), 'cos', [_loc7_]) * 10);
                                            _set(this, 'speedY', _call(_get(_scope, 'Math'), 'sin', [_loc7_]) * 10);
                                            _set(this, '_x', _get(this, '_x') + _get(this, 'speedX'));
                                            _set(this, '_y', _get(this, '_y') + _get(this, 'speedY'));
                                            var _loc13_;
                                            var _loc5_;
                                            var _loc4_;
                                            if (_call(_loc3_, 'hitTest', [
                                                    _get(this, '_x'),
                                                    _get(this, '_y'),
                                                    true
                                                ])) {
                                                _set(_loc3_, 'HP', _get(_loc3_, 'HP') + _get(this, 'Attack'));
                                                if (_get(_loc3_, 'HP') > _get(_loc3_, 'MaxHP')) {
                                                    _set(_loc3_, 'HP', _get(_loc3_, 'MaxHP'));
                                                }
                                                _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
                                                if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 500) {
                                                    _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
                                                }
                                                _loc13_ = _get(this, '_x');
                                                _loc5_ = _get(this, '_y') - 5;
                                                _loc4_ = _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                                                    'Mf_AddHP',
                                                    'M_DeMoney' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
                                                    _get(_get(_scope, '_root'), 'RuanQenDeph'),
                                                    {
                                                        _x: _loc13_,
                                                        _y: _loc5_
                                                    }
                                                ]);
                                                _set(_loc4_, 'Star_Y', _loc5_);
                                                _set(_loc4_, 'MyDiRenName', _get(_loc3_, '_name'));
                                                _set(_loc4_, 'LzZs', 0);
                                                _set(_loc4_, 'onEnterFrame', function () {
                                                    _update(this, 'LzZs', 1, false);
                                                    if (_get(this, 'LzZs') < 20 && _get(_get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(this, 'MyDiRenName')), 'Die') == false) {
                                                        _set(this, '_x', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(this, 'MyDiRenName')), '_x'));
                                                        _set(this, '_y', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(this, 'MyDiRenName')), '_y'));
                                                        _set(this, '_rotation', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(this, 'MyDiRenName')), '_rotation'));
                                                    } else {
                                                        _call(this, 'removeMovieClip', []);
                                                    }
                                                });
                                                false;
                                                _call(this, 'removeMovieClip', []);
                                            }
                                            false;
                                        });
                                        false;
                                        _set(this, 'FaFull', _get(this, 'FaFull') - 30);
                                        break;
                                    }
                                }
                                false;
                                _loc30_ = _loc30_ + 1;
                            }
                        }
                        if (_get(this, 'Tyle') == 102 && _get(this, 'FaFull') >= 30) {
                            _loc25_ = 120;
                            DiRenName = '';
                            for (_loc30_ in _get(_get(_scope, '_root'), 'M_SeSiQang')) {
                                if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc30_), 'Tyle') == 1) {
                                    _loc5_ = _get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc30_);
                                    if (_get(_loc5_, 'HP') > 1) {
                                        _loc8_ = _get(_loc5_, '_x') - _get(this, '_x');
                                        _loc7_ = _get(_loc5_, '_y') - _get(this, '_y');
                                        _loc23_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                                _loc8_,
                                                2
                                            ]) + _call(_get(_scope, 'Math'), 'pow', [
                                                _loc7_,
                                                2
                                            ])]);
                                        if (_loc23_ <= _loc25_) {
                                            DiRenName = _get(_loc5_, '_name');
                                            _loc11_ = _call(_get(_scope, '_root'), 'getAngle', [
                                                _loc8_,
                                                _loc7_
                                            ]);
                                            _update(_get(_scope, '_root'), 'JianDeph', 1, false);
                                            if (_get(_get(_scope, '_root'), 'JianDeph') > 100) {
                                                _set(_get(_scope, '_root'), 'JianDeph', 1);
                                            }
                                            _loc3_ = _call(_get(_get(_scope, '_root'), 'M_DanQang'), 'attachMovie', [
                                                'Mf_DiDan2',
                                                'M_Jian' + _get(_get(_scope, '_root'), 'JianDeph'),
                                                _get(_get(_scope, '_root'), 'JianDeph')
                                            ]);
                                            _set(_loc3_, '_x', _get(this, '_x') + 7);
                                            _set(_loc3_, '_y', _get(this, '_y') + 7);
                                            _set(_loc3_, '_rotation', _loc11_);
                                            _loc13_ = (_loc11_ - 90) / 57.29577951308232;
                                            _set(_loc3_, 'speedX', _call(_get(_scope, 'Math'), 'cos', [_loc13_]) * 10);
                                            _set(_loc3_, 'speedY', _call(_get(_scope, 'Math'), 'sin', [_loc13_]) * 10);
                                            _set(_loc3_, 'DiRenName', DiRenName);
                                            _set(_loc3_, 'MAXAngle', _get(this, 'MAXAngle'));
                                            _set(_loc3_, 'Attack', _get(this, 'Attack'));
                                            _set(_loc3_, 'onEnterFrame', function () {
                                                var _loc3_ = _get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _get(this, 'DiRenName'));
                                                if (_get(_loc3_, 'HP') <= 1 || _get(this, '_x') < -20 || _get(this, '_y') < -20 || _get(this, '_x') > 670 || _get(this, '_y') > 520) {
                                                    _call(this, 'removeMovieClip', []);
                                                }
                                                var _loc7_ = _get(_loc3_, '_x') + 7 - _get(this, '_x');
                                                var _loc8_ = _get(_loc3_, '_y') + 7 - _get(this, '_y');
                                                var _loc12_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                                        _loc7_,
                                                        2
                                                    ]) + _call(_get(_scope, 'Math'), 'pow', [
                                                        _loc8_,
                                                        2
                                                    ])]);
                                                var _loc9_ = _call(_get(_scope, '_root'), 'getAngle', [
                                                    _loc7_,
                                                    _loc8_
                                                ]);
                                                var _loc4_ = _get(this, '_rotation');
                                                var _loc6_ = _call(_get(_scope, '_root'), 'refineAngle', [_loc4_ - _loc9_]);
                                                var _loc11_ = _call(_get(_scope, '_root'), 'refineAngle', [_loc6_]) < 180 ? -1 : 1;
                                                _set(this, '_rotation', _call(_get(_scope, 'Math'), 'abs', [_loc6_]) <= _get(this, 'MAXAngle') ? _loc9_ : _loc4_ + _get(this, 'MAXAngle') * _loc11_);
                                                var _loc5_ = (_get(this, '_rotation') - 90) / 57.29577951308232;
                                                _set(this, 'speedX', _call(_get(_scope, 'Math'), 'cos', [_loc5_]) * 10);
                                                _set(this, 'speedY', _call(_get(_scope, 'Math'), 'sin', [_loc5_]) * 10);
                                                _set(this, '_x', _get(this, '_x') + _get(this, 'speedX'));
                                                _set(this, '_y', _get(this, '_y') + _get(this, 'speedY'));
                                                var _loc10_;
                                                var _loc13_;
                                                if (_loc12_ < 20) {
                                                    _set(_loc3_, 'HP', _get(_loc3_, 'HP') - _get(this, 'Attack'));
                                                    if (_get(_loc3_, 'HP') < 0) {
                                                        _set(_loc3_, 'HP', 0);
                                                    }
                                                    _set(_loc3_, 'HPcolor', 125);
                                                    _loc10_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, _get(_loc3_, 'HPcolor'), 0, 0, 0);
                                                    _loc13_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_loc3_);
                                                    _set(_loc13_, 'colorTransform', _loc10_);
                                                    _call(this, 'removeMovieClip', []);
                                                }
                                                false;
                                            });
                                            false;
                                            _set(this, 'FaFull', _get(this, 'FaFull') - 30);
                                            break;
                                        }
                                    }
                                    false;
                                }
                            }
                        }
                        if (_get(this, 'TeSing') == 7 && _get(this, 'HP') < _get(this, 'MaxHP')) {
                            _set(this, 'HP', _get(this, 'HP') + _call(_get(_scope, 'Math'), 'round', [_get(this, 'MaxHP') / 20]));
                            if (_get(this, 'HP') > _get(this, 'MaxHP')) {
                                _set(this, 'HP', _get(this, 'MaxHP'));
                            }
                        }
                        if (_get(this, 'ZhongDu') > 0) {
                            _set(this, 'ZhongDu', _get(this, 'ZhongDu') - _get(this, 'ZhongDuNum'));
                            _set(this, 'HP', _get(this, 'HP') - _get(this, 'ZhongDuNum'));
                            _set(this, 'ZhongDu', _call(_get(_scope, 'Math'), 'round', [_get(this, 'ZhongDu')]));
                            _set(this, 'HP', _call(_get(_scope, 'Math'), 'round', [_get(this, 'HP')]));
                        } else if (_get(this, 'ZhongDuPD')) {
                            _set(this, 'ZhongDu', 0);
                            _set(this, 'ZhongDuPD', false);
                            _loc45_ = _set(this, 'PerStar', 100);
                            _set(this, 'c', new (_get(_scope, 'Color'))(this));
                            _set(this, 'ctrans', new (_get(_scope, 'Object'))());
                            _set(_get(this, 'ctrans'), 'ra', 100);
                            _set(_get(this, 'ctrans'), 'ga', 100);
                            _set(_get(this, 'ctrans'), 'ba', 100);
                            _call(_get(this, 'c'), 'setTransform', [_get(this, 'ctrans')]);
                        }
                        if (_get(this, 'BackPD') && _get(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _get(this, 'NowToDiTu')), 'DiTuTyle') == 9) {
                            if (_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), '_name') == _get(this, '_name')) {
                                _call(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'removeMovieClip', []);
                            }
                            _update(_get(_scope, '_root'), 'DiRenMaxZL', -1, false);
                            _call(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _get(this, '_name')), 'removeMovieClip', []);
                            _call(this, 'removeMovieClip', []);
                        }
                        if (_loc33_) {
                            _set(this, 'GoStar', false);
                        }
                    }
                }
            }
        }
    });
    false;
    false;
});
_set(_scope, 'F_CreaDiRenS', function () {
    var _loc2_ = 1;
    while (_loc2_ <= _get(_get(_scope, '_root'), 'DiRenMax')) {
        _call(_get(_scope, '_root'), 'F_CreaDiRen', []);
        _loc2_ = _loc2_ + 1;
    }
});
_set(_scope, 'F_FaiDiRen', function (FanWei, My_x, My_y) {
    _set(_scope, 'DiRenName', '');
    var _loc3_ = 1;
    var _loc2_;
    var _loc5_;
    var _loc4_;
    var _loc6_;
    while (_loc3_ <= _get(_get(_scope, '_root'), 'DiRenMax')) {
        _loc2_ = _get(_get(_get(_scope, '_root'), 'M_DiTu0'), 'M_DiRen' + _loc3_);
        if (_get(_loc2_, 'Die') == false) {
            _loc5_ = _get(_loc2_, '_x') - My_x;
            _loc4_ = _get(_loc2_, '_y') - My_y;
            _loc6_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                    _loc5_,
                    2
                ]) + _call(_get(_scope, 'Math'), 'pow', [
                    _loc4_,
                    2
                ])]);
            if (_loc6_ <= FanWei) {
                _set(_scope, 'DiRenName', _get(_loc2_, '_name'));
                if (_get(_loc2_, 'Die') == false) {
                    _set(_get(_scope, '_root'), 'ButtonMess', '<font color=\'#FF0000\'>' + _get(_loc2_, 'Title') + '</font>[' + _get(_loc2_, 'TyleStr') + '] <font color=\'#666666\'>等级:<b>' + _get(_loc2_, 'Level') + '</b></font> <font color=\'#EE00A7\'>总生命值:<b>' + _get(_loc2_, 'MaxHP') + '</b></font> <font color=\'#EE5F00\'>金钱:<b>' + _get(_loc2_, 'Money') + '</b></font> <font color=\'#B509FF\'>神迹:<b>' + _get(_loc2_, 'SenJiDian') + '</b></font> <font color=\'#0000FF\'>特长:' + _get(_loc2_, 'TeCang') + '</font>');
                }
                break;
            }
        }
        false;
        _loc3_ = _loc3_ + 1;
    }
    return _get(_scope, 'DiRenName');
});
_set(_scope, 'F_JianTaRot', function () {
    var _loc12_;
    var _loc11_;
    var _loc7_;
    var _loc9_;
    var _loc6_;
    var _loc10_;
    var _loc8_;
    var _loc4_;
    var _loc3_;
    var _loc5_;
    var _loc13_;
    if (_get(_get(_scope, '_root'), 'DiRenGoPD')) {
        if (_get(this, 'HP') <= 1) {
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                0,
                1
            ]);
            _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
            if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 300) {
                _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
            }
            _loc12_ = _get(this, '_x');
            _loc11_ = _get(this, '_y');
            _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                'Mf_RanQeng2',
                'M_RanQeng' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
                _get(_get(_scope, '_root'), 'RuanQenDeph'),
                {
                    _x: _loc12_,
                    _y: _loc11_
                }
            ]);
            _set(_get(this, 'DiTuObject'), 'SeSi', '');
            _call(this, 'removeMovieClip', []);
        }
        if (_get(this, 'HPcolor') > 0) {
            _set(this, 'HPcolor', _get(this, 'HPcolor') - 5);
            if (_get(this, 'HPcolor') < 0) {
                _set(this, 'HPcolor', 0);
            }
            _loc7_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, _get(this, 'HPcolor'), 0, 0, 0);
            _loc9_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(this);
            _set(_loc9_, 'colorTransform', _loc7_);
        }
        if (_get(_get(_scope, '_root'), 'GamePause') == false && _get(this, '_name') != 'M_ShowSeSi5') {
            if (_get(this, 'Star')) {
                _set(this, 'RotionedPD', false);
                if (_get(this, 'TaTyle') != 5) {
                    _set(this, 'DiRenName', _call(_get(_scope, '_root'), 'F_FaiDiRen', [
                        _get(this, 'FanWei'),
                        _get(this, '_x'),
                        _get(this, '_y')
                    ]));
                }
                if (_get(this, 'DiRenName') != '') {
                    _loc6_ = {
                        x: _get(this, '_x'),
                        y: _get(this, '_y')
                    };
                    _loc10_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(this, 'DiRenName')), '_x') - _get(_loc6_, 'x');
                    _loc8_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(this, 'DiRenName')), '_y') - _get(_loc6_, 'y');
                    _loc4_ = _call(_get(_scope, '_root'), 'getAngle', [
                        _loc10_,
                        _loc8_
                    ]);
                    _loc3_ = _get(_get(this, 'M_Gong'), '_rotation');
                    _loc5_ = _call(_get(_scope, '_root'), 'refineAngle', [_loc3_ - _loc4_]);
                    _loc13_ = _call(_get(_scope, '_root'), 'refineAngle', [_loc5_]) < 180 ? -1 : 1;
                    _set(_get(this, 'M_Gong'), '_rotation', _call(_get(_scope, 'Math'), 'abs', [_loc5_]) <= _get(this, 'MAXAngle') ? _loc4_ : _loc3_ + _get(this, 'MAXAngle') * _loc13_);
                    if (_call(_get(_scope, 'Math'), 'abs', [_call(_get(_scope, '_root'), 'refineAngle', [_loc3_ - _loc4_])]) <= _get(this, 'MAXAngle') * 2) {
                        _set(this, 'RotionedPD', true);
                    }
                }
            }
        }
    }
});
_set(_scope, 'F_DanFanWeiArr', function (Mythis) {
    var _loc11_ = _get(Mythis, 'FanWei');
    var _loc13_ = _get(Mythis, 'Di_x') - 7;
    var _loc12_ = _get(Mythis, 'Di_y') - 7;
    _set(_scope, 'DiRenName', '');
    var _loc5_ = 1;
    var _loc2_;
    var _loc9_;
    var _loc8_;
    var _loc10_;
    var _loc0_;
    var _loc3_;
    var _loc4_;
    var _loc7_;
    while (_loc5_ <= _get(_get(_scope, '_root'), 'DiRenMax')) {
        _loc2_ = _get(_get(_get(_scope, '_root'), 'M_DiTu0'), 'M_DiRen' + _loc5_);
        if (_get(_loc2_, 'Die') == false) {
            _loc9_ = _get(_loc2_, '_x') - _loc13_;
            _loc8_ = _get(_loc2_, '_y') - _loc12_;
            _loc10_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                    _loc9_,
                    2
                ]) + _call(_get(_scope, 'Math'), 'pow', [
                    _loc8_,
                    2
                ])]);
            if (_loc10_ <= _loc11_) {
                _set(_scope, 'DiRenName', _get(_loc2_, '_name'));
                _loc2_ = _get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(_scope, 'DiRenName'));
                _loc3_ = _set(_loc2_, 'PerStar', 150);
                _set(_loc2_, 'c', new (_get(_scope, 'Color'))(_loc2_));
                _set(_loc2_, 'ctrans', new (_get(_scope, 'Object'))());
                _set(_get(_loc2_, 'ctrans'), 'ra', _loc3_);
                _set(_get(_loc2_, 'ctrans'), 'ga', _loc3_);
                _set(_get(_loc2_, 'ctrans'), 'ba', _loc3_);
                _call(_get(_loc2_, 'c'), 'setTransform', [_get(_loc2_, 'ctrans')]);
                _loc4_ = 1;
                _loc7_ = 1;
                if (_get(Mythis, 'JianName') == 'Mf_Jian2') {
                    _loc7_ = _get(_get(_scope, '_root'), 'All_Attack');
                }
                if (_get(_loc2_, 'TeSing') == 4 && _get(Mythis, 'JianName') == 'Mf_Jian2') {
                    _loc4_ = 0.5;
                }
                if (_get(_loc2_, 'TeSing') == 2 && _get(Mythis, 'JianName') == 'Mf_Jian3') {
                    _loc4_ = 0.5;
                }
                _set(_loc2_, 'HP', _get(_loc2_, 'HP') - _call(_get(_scope, 'Math'), 'round', [_get(Mythis, 'Attack') / 3 * _loc7_ * _loc4_]));
                false;
            }
        }
        false;
        _loc5_ = _loc5_ + 1;
    }
});
_set(_scope, 'JianDeph', 0);
_set(_scope, 'F_SeiJian', function (DiRenName, Attack, JianName, FanWei, JianSuDu, Jianrotation, Jian_x, Jian_y, TaTyle, PreMiv) {
    var _loc13_;
    var _loc11_;
    var _loc4_;
    var _loc19_;
    if (DiRenName != '') {
        _update(_get(_scope, '_root'), 'JianDeph', 1, false);
        if (_get(_get(_scope, '_root'), 'JianDeph') > 100) {
            _set(_get(_scope, '_root'), 'JianDeph', 1);
        }
        _loc13_ = _get(_get(_scope, '_root'), 'M_DanQang');
        _loc11_ = _get(_get(_scope, '_root'), 'JianDeph');
        if (JianName == 'Mf_Jian4') {
            _loc13_ = _get(_get(_scope, '_root'), 'M_GuDanQang');
            _loc11_ = _call(_get(_get(_scope, '_root'), 'M_GuDanQang'), 'getNextHighestDepth', []);
        }
        if (JianName == 'Mf_Jian1') {
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound108']);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                0,
                1
            ]);
        } else if (JianName == 'Mf_Jian2') {
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound109']);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                0,
                1
            ]);
        } else if (JianName == 'Mf_Jian3') {
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound110']);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                0,
                1
            ]);
        } else if (JianName == 'Mf_Jian4') {
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound111']);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                0,
                1
            ]);
        } else if (JianName == 'Mf_Jian5') {
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound126']);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                0,
                1
            ]);
        }
        _loc4_ = _call(_loc13_, 'attachMovie', [
            JianName,
            'M_Jian' + _loc11_,
            _loc11_
        ]);
        _set(_loc4_, '_x', Jian_x);
        _set(_loc4_, '_y', Jian_y);
        _set(_loc4_, '_rotation', Jianrotation);
        _loc19_ = (Jianrotation - 90) / 57.29577951308232;
        _set(_loc4_, 'speedX', _call(_get(_scope, 'Math'), 'cos', [_loc19_]) * JianSuDu);
        _set(_loc4_, 'speedY', _call(_get(_scope, 'Math'), 'sin', [_loc19_]) * JianSuDu);
        _set(_loc4_, 'DiRenName', DiRenName);
        _set(_loc4_, 'Attack', Attack);
        _set(_loc4_, 'JianSuDu', JianSuDu);
        _set(_loc4_, 'JianSuDuB', JianSuDu);
        _set(_loc4_, 'StarNum', 0);
        _set(_loc4_, 'MAXAngle', 8);
        _set(_loc4_, 'MovePD', true);
        _set(_loc4_, 'JianName', JianName);
        _set(_loc4_, 'StarArr', true);
        _set(_loc4_, 'ArrFinish', false);
        _set(_loc4_, 'onEnterFrame', function () {
            var _loc22_;
            var _loc23_;
            var _loc16_;
            var _loc20_;
            var _loc19_;
            var _loc3_;
            var _loc6_;
            var _loc5_;
            var _loc13_;
            var _loc10_;
            var _loc14_;
            var _loc11_;
            var _loc24_;
            var _loc15_;
            var _loc18_;
            var _loc17_;
            var _loc21_;
            var _loc0_;
            var _loc9_;
            var _loc7_;
            var _loc8_;
            var _loc12_;
            var _loc4_;
            if (_get(_get(_scope, '_root'), 'GamePause') == false) {
                if (_get(this, 'MovePD')) {
                    _set(this, '_x', _get(this, '_x') + _get(this, 'speedX'));
                    _set(this, '_y', _get(this, '_y') + _get(this, 'speedY'));
                }
                _loc22_ = Jian_x - _get(this, '_x');
                _loc23_ = Jian_y - _get(this, '_y');
                _loc16_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                        _loc22_,
                        2
                    ]) + _call(_get(_scope, 'Math'), 'pow', [
                        _loc23_,
                        2
                    ])]);
                if (_loc16_ > FanWei && TaTyle != 5) {
                    if (TaTyle == 2 || TaTyle == 4) {
                        _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
                        if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 500) {
                            _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
                        }
                        _loc20_ = _get(this, '_x') - 7;
                        _loc19_ = _get(this, '_y') - 7;
                        _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                            'Mf_RanQeng' + TaTyle,
                            'M_RanQeng' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
                            _get(_get(_scope, '_root'), 'RuanQenDeph'),
                            {
                                _x: _loc20_,
                                _y: _loc19_
                            }
                        ]);
                    }
                    _call(this, 'removeMovieClip', []);
                }
                if (_get(this, 'DiRenName') != '' || TaTyle == 5) {
                    _loc3_ = _get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(this, 'DiRenName'));
                    if (_get(_loc3_, 'Die') == false && _get(_loc3_, 'NowJian') != _get(this, '_name') || TaTyle == 5) {
                        if (TaTyle == 5) {
                            _update(this, 'StarNum', 1, false);
                            _loc6_ = 0;
                            _loc5_ = 0;
                            if (_get(this, 'DiRenName') == '' || _get(_loc3_, '_visible') != true || _get(_loc3_, 'Die') || _get(this, 'StarArr') == false) {
                                _loc6_ = Jian_x - _get(this, '_x');
                                _loc5_ = Jian_y - _get(this, '_y');
                                if (_call(_get(_scope, 'Math'), 'abs', [_loc6_]) <= _get(this, 'JianSuDu') * 2 && _call(_get(_scope, 'Math'), 'abs', [_loc5_]) <= _get(this, 'JianSuDu') * 2) {
                                    _set(this, '_x', Jian_x);
                                    _set(this, '_y', Jian_y);
                                    if (_get(this, 'DiRenName') != '' && _get(_loc3_, '_visible') && _get(_loc3_, 'Die') == false) {
                                        _set(this, 'ArrFinish', false);
                                        _set(this, 'StarArr', true);
                                    } else {
                                        _set(this, 'StarArr', false);
                                        _set(this, '_xscale', _set(this, '_yscale', 100));
                                        _call(PreMiv, 'gotoAndPlay', ['a2']);
                                        _call(this, 'removeMovieClip', []);
                                    }
                                }
                                if (_get(this, 'JianSuDu') > _get(this, 'JianSuDuB')) {
                                    _set(this, 'JianSuDu', _get(this, 'JianSuDu') - 0.2);
                                } else {
                                    _set(this, 'JianSuDu', _get(this, 'JianSuDuB'));
                                }
                                if (_get(this, '_xscale') < 100) {
                                    _set(this, '_xscale', _set(this, '_yscale', _get(this, '_yscale') + 5));
                                } else {
                                    _set(this, '_xscale', _set(this, '_yscale', 100));
                                }
                            } else {
                                _loc6_ = _get(_loc3_, '_x') + 7 - _get(this, '_x');
                                _loc5_ = _get(_loc3_, '_y') + 7 - _get(this, '_y');
                            }
                            _loc13_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                    _loc6_,
                                    2
                                ]) + _call(_get(_scope, 'Math'), 'pow', [
                                    _loc5_,
                                    2
                                ])]);
                            if (_get(this, 'StarArr') == false && _get(this, 'DiRenName') != '' && _get(_loc3_, 'Die') == false) {
                                _set(_scope, 'GoToDi_xB', _get(_loc3_, '_x') + 7 - _get(this, '_x'));
                                _set(_scope, 'GoToDi_yB', _get(_loc3_, '_y') + 7 - _get(this, '_y'));
                                _set(_scope, 'GoToDi_rB', _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                        _get(_scope, 'GoToDi_xB'),
                                        2
                                    ]) + _call(_get(_scope, 'Math'), 'pow', [
                                        _get(_scope, 'GoToDi_yB'),
                                        2
                                    ])]));
                                if (_get(_scope, 'GoToDi_rB') > 100) {
                                    _set(this, 'ArrFinish', false);
                                    _set(this, 'StarArr', true);
                                }
                            }
                            _loc10_ = _call(_get(_scope, '_root'), 'getAngle', [
                                _loc6_,
                                _loc5_
                            ]);
                            _loc14_ = _get(this, '_rotation');
                            _loc11_ = _call(_get(_scope, '_root'), 'refineAngle', [_loc14_ - _loc10_]);
                            _loc24_ = _call(_get(_scope, '_root'), 'refineAngle', [_loc11_]) < 180 ? -1 : 1;
                            _set(this, '_rotation', _call(_get(_scope, 'Math'), 'abs', [_loc11_]) <= _get(this, 'MAXAngle') ? _loc10_ : _loc14_ + _get(this, 'MAXAngle') * _loc24_);
                            if (_call(_get(_scope, 'Math'), 'abs', [_loc13_ < 50 && _call(_get(_scope, '_root'), 'refineAngle', [_get(this, '_rotation') - _loc10_])]) > _get(this, 'MAXAngle')) {
                                _set(this, 'MovePD', false);
                            } else {
                                _set(this, 'MovePD', true);
                            }
                            _loc15_ = (_get(this, '_rotation') - 90) / 57.29577951308232;
                            _set(this, 'speedX', _call(_get(_scope, 'Math'), 'cos', [_loc15_]) * _get(this, 'JianSuDu'));
                            _set(this, 'speedY', _call(_get(_scope, 'Math'), 'sin', [_loc15_]) * _get(this, 'JianSuDu'));
                            if (_loc13_ < 100 && _get(this, '_xscale') > 45) {
                                _set(this, '_xscale', _set(this, '_yscale', _get(this, '_yscale') - 5));
                                if (_get(this, 'JianSuDu') > _get(this, 'JianSuDuB') / 2) {
                                    _set(this, 'JianSuDu', _get(this, 'JianSuDu') + 0.2);
                                }
                            }
                        }
                        _loc18_ = _get(_loc3_, '_x') - _get(this, '_x');
                        _loc17_ = _get(_loc3_, '_y') - _get(this, '_y');
                        _loc21_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                _loc18_,
                                2
                            ]) + _call(_get(_scope, 'Math'), 'pow', [
                                _loc17_,
                                2
                            ])]);
                        if (_loc21_ <= 16 && _get(this, 'ArrFinish') == false) {
                            if (_get(this, 'JianName') == 'Mf_Jian2') {
                                _call(_get(_get(_scope, '_root'), 'S_Sound5'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound5'), 'attachSound', ['Sf_Sound112']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound5'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(this, 'JianName') == 'Mf_Jian3') {
                                _call(_get(_get(_scope, '_root'), 'S_Sound5'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound5'), 'attachSound', ['Sf_Sound113']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound5'), 'start', [
                                    0,
                                    1
                                ]);
                            } else if (_get(this, 'JianName') == 'Mf_Jian4') {
                                _call(_get(_get(_scope, '_root'), 'S_Sound5'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound5'), 'attachSound', ['Sf_Sound111']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound5'), 'start', [
                                    0,
                                    1
                                ]);
                            }
                            if (_get(_loc3_, 'Title') == '肥牛车') {
                                _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'stop', []);
                                _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'attachSound', ['Sf_Sound116']);
                                _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'start', [
                                    0,
                                    1
                                ]);
                            }
                            _set(this, 'Di_x', _get(this, '_x'));
                            _set(this, 'Di_y', _get(this, '_y'));
                            _set(_loc3_, 'NowJian', _get(this, '_name'));
                            _loc9_ = _set(_loc3_, 'PerStar', 250);
                            _set(_loc3_, 'c', new (_get(_scope, 'Color'))(_loc3_));
                            _set(_loc3_, 'ctrans', new (_get(_scope, 'Object'))());
                            _set(_get(_loc3_, 'ctrans'), 'ra', _loc9_);
                            _set(_get(_loc3_, 'ctrans'), 'ga', _loc9_);
                            _set(_get(_loc3_, 'ctrans'), 'ba', _loc9_);
                            _call(_get(_loc3_, 'c'), 'setTransform', [_get(_loc3_, 'ctrans')]);
                            _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
                            if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 300) {
                                _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
                            }
                            _loc20_ = _get(_loc3_, '_x');
                            _loc19_ = _get(_loc3_, '_y');
                            _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                                'Mf_RanQeng' + TaTyle,
                                'M_RanQeng' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
                                _get(_get(_scope, '_root'), 'RuanQenDeph'),
                                {
                                    _x: _loc20_,
                                    _y: _loc19_
                                }
                            ]);
                            _loc7_ = 1;
                            if (_get(_loc3_, 'TeSing') == 4 && _get(this, 'JianName') == 'Mf_Jian2') {
                                _loc7_ = 0.5;
                            }
                            if (_get(_loc3_, 'TeSing') == 2 && _get(this, 'JianName') == 'Mf_Jian3') {
                                _loc7_ = 0.5;
                            }
                            if (_get(_loc3_, 'TeSing') == 10 && _get(this, 'JianName') == 'Mf_Jian5') {
                                _loc7_ = 0.5;
                            }
                            if (_get(this, 'FanWei') > 0) {
                                if (TaTyle == 1 || TaTyle == 2) {
                                    _set(_loc3_, 'HP', _get(_loc3_, 'HP') - _call(_get(_scope, 'Math'), 'round', [_get(this, 'Attack') * 0.6666666666666666 * _get(_get(_scope, '_root'), 'All_Attack') * _loc7_]));
                                } else {
                                    _set(_loc3_, 'HP', _get(_loc3_, 'HP') - _call(_get(_scope, 'Math'), 'round', [_get(this, 'Attack') * 0.6666666666666666]));
                                }
                                _call(_scope, 'F_DanFanWeiArr', [this]);
                            } else if (TaTyle == 1 || TaTyle == 2) {
                                _set(_loc3_, 'HP', _get(_loc3_, 'HP') - _call(_get(_scope, 'Math'), 'round', [_get(this, 'Attack') * _get(_get(_scope, '_root'), 'All_Attack') * _loc7_]));
                            } else {
                                _set(_loc3_, 'HP', _get(_loc3_, 'HP') - _get(this, 'Attack'));
                            }
                            if (TaTyle == 4 && _get(_get(_loc3_, 'NowDDDiTu'), 'SeSi') == '') {
                                if (_get(_get(_scope, '_root'), 'SeSiDephNext') > 0 && _call(_get(_get(_scope, '_root'), 'M_SeSiQangB'), 'getInstanceAtDepth', [_get(_get(_scope, '_root'), 'SeSiDephNext')]) == undefined) {
                                    _set(_get(_scope, '_root'), 'SeSiDeph', _get(_get(_scope, '_root'), 'SeSiDephNext'));
                                    _set(_get(_scope, '_root'), 'SeSiDephNext', 0);
                                } else {
                                    _set(_get(_scope, '_root'), 'SeSiDephNext', 0);
                                    _update(_get(_scope, '_root'), 'SeSiDeph', 1, false);
                                }
                                _loc8_ = _get(_get(_scope, '_root'), 'M_SeSiQangB');
                                _loc12_ = _call(_loc8_, 'getNextHighestDepth', []);
                                _loc4_ = _call(_loc8_, 'attachMovie', [
                                    'Mf_SeSi203',
                                    'M_SeSi' + _loc12_,
                                    _loc12_,
                                    { FanGiangV: false }
                                ]);
                                _set(_get(_loc3_, 'NowDDDiTu'), 'SeSi', _get(_loc4_, '_name'));
                                _set(_loc4_, '_x', _get(_get(_loc3_, 'NowDDDiTu'), '_x'));
                                _set(_loc4_, '_y', _get(_get(_loc3_, 'NowDDDiTu'), '_y'));
                                _set(_loc4_, 'Star', true);
                                _set(_loc4_, 'DiTuObject', _get(_loc3_, 'NowDDDiTu'));
                                _set(_loc4_, 'NumStar', 0);
                                _set(_loc4_, 'onEnterFrame', function () {
                                    if (_get(_get(_scope, '_root'), 'GamePause') == false) {
                                        _update(this, 'NumStar', 1, false);
                                        if (_get(this, 'NumStar') >= 70) {
                                            if (_get(this, '_alpha') > 0) {
                                                _set(this, '_alpha', _get(this, '_alpha') - 2);
                                            } else {
                                                _set(_get(_scope, '_root'), 'SeSiDephNext', _call(this, 'getDepth', []));
                                                _set(_get(this, 'DiTuObject'), 'SeSi', '');
                                                _call(this, 'removeMovieClip', []);
                                            }
                                        }
                                    }
                                });
                                false;
                                false;
                            }
                            if (TaTyle == 6 && _get(_get(_loc3_, 'NowDDDiTu'), 'SeSi') == '') {
                                if (_get(_get(_scope, '_root'), 'SeSiDephNext') > 0 && _call(_get(_get(_scope, '_root'), 'M_SeSiQangB'), 'getInstanceAtDepth', [_get(_get(_scope, '_root'), 'SeSiDephNext')]) == undefined) {
                                    _set(_get(_scope, '_root'), 'SeSiDeph', _get(_get(_scope, '_root'), 'SeSiDephNext'));
                                    _set(_get(_scope, '_root'), 'SeSiDephNext', 0);
                                } else {
                                    _set(_get(_scope, '_root'), 'SeSiDephNext', 0);
                                    _update(_get(_scope, '_root'), 'SeSiDeph', 1, false);
                                }
                                _loc8_ = _get(_get(_scope, '_root'), 'M_SeSiQang');
                                _loc12_ = _call(_loc8_, 'getNextHighestDepth', []);
                                _loc4_ = _call(_loc8_, 'attachMovie', [
                                    'Mf_SeSi103',
                                    'M_SeSi' + _loc12_,
                                    _loc12_,
                                    { FanGiangV: false }
                                ]);
                                _set(_get(_loc3_, 'NowDDDiTu'), 'SeSi', _get(_loc4_, '_name'));
                                _set(_loc4_, '_x', _get(_get(_loc3_, 'NowDDDiTu'), '_x'));
                                _set(_loc4_, '_y', _get(_get(_loc3_, 'NowDDDiTu'), '_y'));
                                _set(_loc4_, 'Star', true);
                                _set(_loc4_, 'DiTuObject', _get(_loc3_, 'NowDDDiTu'));
                                _set(_loc4_, 'NumStar', 0);
                                _set(_loc4_, 'onEnterFrame', function () {
                                    if (_get(_get(_scope, '_root'), 'GamePause') == false) {
                                        _update(this, 'NumStar', 1, false);
                                        if (_get(this, 'NumStar') >= 100) {
                                            if (_get(this, '_alpha') > 0) {
                                                _set(this, '_alpha', _get(this, '_alpha') - 0.7);
                                            } else {
                                                _set(_get(_scope, '_root'), 'SeSiDephNext', _call(this, 'getDepth', []));
                                                _set(_get(this, 'DiTuObject'), 'SeSi', '');
                                                _call(this, 'removeMovieClip', []);
                                            }
                                        }
                                    }
                                });
                                false;
                                false;
                            }
                            _set(this, 'StarArr', false);
                            if (TaTyle != 5) {
                                _set(this, 'DiRenName', '');
                                _call(this, 'removeMovieClip', []);
                            } else {
                                _set(this, 'ArrFinish', true);
                            }
                        }
                    }
                    false;
                }
            }
        });
        false;
        false;
    }
});
_set(_scope, 'F_SenDianArr', function () {
    var _loc19_;
    var _loc18_;
    var _loc16_;
    var _loc17_;
    var _loc11_;
    var _loc20_;
    var _loc4_;
    var _loc8_;
    var _loc14_;
    var _loc6_;
    var _loc5_;
    var _loc7_;
    var _loc3_;
    var _loc0_;
    var _loc13_;
    var _loc15_;
    if (_get(_get(_scope, '_root'), 'DiRenGoPD')) {
        if (_get(this, 'HP') <= 1) {
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound123']);
            _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                0,
                1
            ]);
            _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
            if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 300) {
                _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
            }
            _loc19_ = _get(this, '_x');
            _loc18_ = _get(this, '_y');
            _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                'Mf_RanQeng2',
                'M_RanQeng' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
                _get(_get(_scope, '_root'), 'RuanQenDeph'),
                {
                    _x: _loc19_,
                    _y: _loc18_
                }
            ]);
            _set(_get(this, 'DiTuObject'), 'SeSi', '');
            _call(this, 'removeMovieClip', []);
        }
        if (_get(this, 'HPcolor') > 0) {
            _set(this, 'HPcolor', _get(this, 'HPcolor') - 5);
            if (_get(this, 'HPcolor') < 0) {
                _set(this, 'HPcolor', 0);
            }
            _loc16_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, _get(this, 'HPcolor'), 0, 0, 0);
            _loc17_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(this);
            _set(_loc17_, 'colorTransform', _loc16_);
        }
        if (_get(_get(_scope, '_root'), 'GamePause') == false) {
            if (_get(this, 'Star')) {
                if (_get(this, 'TemFaSieJJ') > _get(this, 'FaSieJJ')) {
                    _set(this, 'RotionedPD', false);
                    _set(this, 'DiRenName', _call(_get(_scope, '_root'), 'F_FaiDiRen', [
                        _get(this, 'FanWei'),
                        _get(this, '_x'),
                        _get(this, '_y')
                    ]));
                    if (_get(this, 'DiRenName') != '') {
                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound107']);
                        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
                            0,
                            1
                        ]);
                        _loc11_ = _get(this, 'Attack');
                        _loc20_ = _call(this, 'getDepth', []);
                        _call(this, 'swapDepths', [_call(_get(_get(_scope, '_root'), 'M_SeSiQang'), 'getNextHighestDepth', [])]);
                        _loc4_ = _get(_get(_get(_scope, '_root'), 'M_DiTu0'), _get(this, 'DiRenName'));
                        _call(_get(_get(this, 'M_Gong'), 'M_DianSan'), 'gotoAndPlay', ['a1']);
                        _loc8_ = {
                            x: _get(this, '_x'),
                            y: _get(this, '_y')
                        };
                        _call(this, 'globalToLocal', [_loc8_]);
                        _loc14_ = {
                            x: _get(_loc4_, '_x'),
                            y: _get(_loc4_, '_y')
                        };
                        _call(this, 'globalToLocal', [_loc14_]);
                        _call(this, 'createEmptyMovieClip', [
                            'triangle_mc',
                            1
                        ]);
                        _call(_get(this, 'triangle_mc'), 'lineStyle', [
                            1,
                            16777215,
                            100
                        ]);
                        for (var _loc12_ in _get(_get(_scope, '_root'), 'M_SeSiQang')) {
                            if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc12_), 'TaTyle') == 3) {
                                _loc6_ = _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc12_), '_x') - _get(this, '_x');
                                _loc5_ = _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc12_), '_y') - _get(this, '_y');
                                _loc7_ = _call(_get(_scope, 'Math'), 'sqrt', [_call(_get(_scope, 'Math'), 'pow', [
                                        _loc6_,
                                        2
                                    ]) + _call(_get(_scope, 'Math'), 'pow', [
                                        _loc5_,
                                        2
                                    ])]);
                                if (_loc7_ < _get(this, 'FanWei')) {
                                    _loc3_ = {
                                        x: _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc12_), '_x'),
                                        y: _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc12_), '_y')
                                    };
                                    _call(this, 'globalToLocal', [_loc3_]);
                                    _call(_get(this, 'triangle_mc'), 'moveTo', [
                                        _get(_loc8_, 'x') + 7,
                                        _get(_loc8_, 'y') + 7
                                    ]);
                                    _call(_get(this, 'triangle_mc'), 'lineTo', [
                                        _get(_loc3_, 'x') + 7,
                                        _get(_loc3_, 'y') + 7
                                    ]);
                                    _loc11_ += _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc12_), 'Attack') / 3]);
                                    _call(_get(_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc12_), 'M_Gong'), 'M_DianSan'), 'gotoAndPlay', ['a1']);
                                }
                            }
                        }
                        _call(_get(this, 'triangle_mc'), 'moveTo', [
                            _get(_loc8_, 'x') + 7,
                            _get(_loc8_, 'y') + 7
                        ]);
                        _call(_get(this, 'triangle_mc'), 'lineTo', [
                            _get(_loc14_, 'x') + 7,
                            _get(_loc14_, 'y') + 7
                        ]);
                        _set(_loc4_, 'NowJian', _get(this, '_name'));
                        _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
                        if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 300) {
                            _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
                        }
                        _loc19_ = _get(_loc4_, '_x');
                        _loc18_ = _get(_loc4_, '_y');
                        _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                            'Mf_RanQeng3',
                            'M_RanQeng' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
                            _get(_get(_scope, '_root'), 'RuanQenDeph'),
                            {
                                _x: _loc19_,
                                _y: _loc18_
                            }
                        ]);
                        _loc13_ = _set(_loc4_, 'PerStar', 250);
                        _set(_loc4_, 'c', new (_get(_scope, 'Color'))(_loc4_));
                        _set(_loc4_, 'ctrans', new (_get(_scope, 'Object'))());
                        _set(_get(_loc4_, 'ctrans'), 'ra', _loc13_);
                        _set(_get(_loc4_, 'ctrans'), 'ga', _loc13_);
                        _set(_get(_loc4_, 'ctrans'), 'ba', _loc13_);
                        _call(_get(_loc4_, 'c'), 'setTransform', [_get(_loc4_, 'ctrans')]);
                        _loc15_ = 1;
                        if (_get(this, 'TeSing') == 3) {
                            _loc15_ = 0.5;
                        }
                        _set(_loc4_, 'HP', _get(_loc4_, 'HP') - _loc11_ * _loc15_);
                        _set(this, 'TemFaSieJJ', 0);
                        _set(_get(this, 'triangle_mc'), 'TimeStar', 0);
                        _set(_get(this, 'triangle_mc'), 'PerMiv', this);
                        if (_get(_get(_scope, '_root'), 'MySellID') == 3) {
                            _update(this, 'HPmini', -1, false);
                            _set(this, 'HP', _call(_get(_scope, 'Math'), 'round', [_get(this, 'HPmini') / _get(_get(_scope, '_root'), 'SeSiHPmini')]));
                            _update(this, 'Money', -1, false);
                            if (_get(this, 'Money') < 0) {
                                _set(this, 'Money', 0);
                            }
                        }
                        _set(_get(this, 'triangle_mc'), 'onEnterFrame', function () {
                            _update(this, 'TimeStar', 1, false);
                            if (_get(this, 'TimeStar') > 5) {
                                _call(_get(this, 'PerMiv'), 'swapDepths', [_get(_get(this, 'PerMiv'), 'MyTemDeph')]);
                                _call(this, 'removeMovieClip', []);
                            }
                        });
                        false;
                    }
                } else {
                    _update(this, 'TemFaSieJJ', 1, false);
                }
            }
        }
    }
});
_set(_scope, 'F_UpdateSeSi', function (SJHpAdd) {
    var _loc2_;
    var _loc3_;
    for (var _loc4_ in _get(_get(_scope, '_root'), 'M_SeSiQang')) {
        if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'TaTyle') == 1 || _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'TaTyle') == 2) {
            _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'FanWei', _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'rFanWei') * _get(_get(_scope, '_root'), 'All_FanWei')]));
            _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'Attack', _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'rAttack') * _get(_get(_scope, '_root'), 'All_Attack')]));
            _set(_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'M_FanGiang'), '_width', _set(_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'M_FanGiang'), '_height', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'FanWei') * 2));
        }
        if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'TaTyle') == 3 || _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'TaTyle') == 4) {
            _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'FanWei', _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'rFanWei') * _get(_get(_scope, '_root'), 'AllSen_FanWei')]));
            _set(_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'M_FanGiang'), '_width', _set(_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'M_FanGiang'), '_height', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'FanWei') * 2));
        }
        _loc2_ = _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'rMaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')]);
        _loc3_ = _loc2_ - _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'MaxHP');
        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'MaxHP', _loc2_);
        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'HP') + _loc3_);
        if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'HP') > _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'MaxHP')) {
            _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc4_), 'MaxHP'));
        }
    }
    for (_loc4_ in _get(_get(_scope, '_root'), 'M_SeSiQangB')) {
        _loc2_ = _call(_get(_scope, 'Math'), 'round', [_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _loc4_), 'rMaxHP') * _get(_get(_scope, '_root'), 'All_MaxHP')]);
        _loc3_ = _loc2_ - _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _loc4_), 'MaxHP');
        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _loc4_), 'MaxHP', _loc2_);
        _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _loc4_), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _loc4_), 'HP') + _loc3_);
        if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _loc4_), 'HP') > _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _loc4_), 'MaxHP')) {
            _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _loc4_), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _loc4_), 'MaxHP'));
        }
    }
});
_set(_scope, 'F_UpdateButton', function () {
    var _loc2_ = 1;
    var _loc3_;
    var _loc4_;
    while (_loc2_ <= 6) {
        if (_get(_get(_scope, '_root'), 'Money') >= _get(_get(_get(_scope, '_root'), 'M_ShowSeSi' + _loc2_), 'Money') * _get(_get(_scope, '_root'), 'BuyLu') && _get(_get(_scope, '_root'), 'SenJiDian') >= _get(_get(_get(_scope, '_root'), 'M_ShowSeSi' + _loc2_), 'SenJiDian')) {
            if (_loc2_ == 6 && (_get(_get(_scope, '_root'), 'SenLongCount') >= 2 || _get(_get(_scope, '_root'), 'NowGuanSu') < 31)) {
                _set(_get(_get(_scope, '_root'), 'B_ShowSeSi' + _loc2_), 'enabled', false);
                _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi' + _loc2_), '_visible', true);
                _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 0, 0, 0);
                _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi' + _loc2_));
                _set(_loc4_, 'colorTransform', _loc3_);
            } else {
                _set(_get(_get(_scope, '_root'), 'B_ShowSeSi' + _loc2_), 'enabled', true);
                _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi' + _loc2_), '_visible', false);
                _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
                _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi' + _loc2_));
                _set(_loc4_, 'colorTransform', _loc3_);
            }
        } else {
            _set(_get(_get(_scope, '_root'), 'B_ShowSeSi' + _loc2_), 'enabled', false);
            _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi' + _loc2_), '_visible', true);
            _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 0, 0, 0);
            _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi' + _loc2_));
            _set(_loc4_, 'colorTransform', _loc3_);
        }
        _loc2_ = _loc2_ + 1;
    }
    if (_get(_get(_scope, '_root'), 'Money') >= _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu') && _get(_get(_scope, '_root'), 'SenJiDian') >= _get(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'SenJiDian')) {
        _set(_get(_get(_scope, '_root'), 'B_ShowSeSi101'), 'enabled', true);
        _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi101'), '_visible', false);
        _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
        _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi101'));
        _set(_loc4_, 'colorTransform', _loc3_);
    } else {
        _set(_get(_get(_scope, '_root'), 'B_ShowSeSi101'), 'enabled', false);
        _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi101'), '_visible', true);
        _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 0, 0, 0);
        _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi101'));
        _set(_loc4_, 'colorTransform', _loc3_);
    }
    if (_get(_get(_scope, '_root'), 'Money') >= _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu') && _get(_get(_scope, '_root'), 'SenJiDian') >= _get(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'SenJiDian')) {
        _set(_get(_get(_scope, '_root'), 'B_ShowSeSi201'), 'enabled', true);
        _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi201'), '_visible', false);
        _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
        _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi201'));
        _set(_loc4_, 'colorTransform', _loc3_);
    } else {
        _set(_get(_get(_scope, '_root'), 'B_ShowSeSi201'), 'enabled', false);
        _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi201'), '_visible', true);
        _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 0, 0, 0);
        _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi201'));
        _set(_loc4_, 'colorTransform', _loc3_);
    }
    if (_get(_get(_scope, '_root'), 'Money') >= _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu') && _get(_get(_scope, '_root'), 'SenJiDian') >= _get(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'SenJiDian')) {
        _set(_get(_get(_scope, '_root'), 'B_ShowSeSi202'), 'enabled', true);
        _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi202'), '_visible', false);
        _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
        _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi202'));
        _set(_loc4_, 'colorTransform', _loc3_);
    } else {
        _set(_get(_get(_scope, '_root'), 'B_ShowSeSi202'), 'enabled', false);
        _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi202'), '_visible', true);
        _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 0, 0, 0);
        _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi202'));
        _set(_loc4_, 'colorTransform', _loc3_);
    }
    if (_get(_get(_scope, '_root'), 'Money') >= _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'Money') * _get(_get(_scope, '_root'), 'BuyLu') && _get(_get(_scope, '_root'), 'SenJiDian') >= _get(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'SenJiDian')) {
        _set(_get(_get(_scope, '_root'), 'B_ShowSeSi102'), 'enabled', true);
        _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi102'), '_visible', false);
        _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
        _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi102'));
        _set(_loc4_, 'colorTransform', _loc3_);
    } else {
        _set(_get(_get(_scope, '_root'), 'B_ShowSeSi102'), 'enabled', false);
        _set(_get(_get(_scope, '_root'), 'B2_ShowSeSi102'), '_visible', true);
        _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 0, 0, 0);
        _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_ShowSeSi102'));
        _set(_loc4_, 'colorTransform', _loc3_);
    }
    _loc2_ = 1;
    while (_loc2_ <= 5) {
        if (_get(_get(_scope, '_root'), 'Money') >= _get(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'SJMoney') && _get(_get(_scope, '_root'), 'SenJiDian') >= _get(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'SJSenJiDian')) {
            if (_get(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'Level') < 6) {
                _set(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'Benabled', true);
                _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
                _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_));
                _set(_loc4_, 'colorTransform', _loc3_);
            } else {
                _set(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'Level', 6);
                _set(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'Benabled', false);
                _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 0.5, 0.5, 1, 125, 0, 0, 0);
                _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_));
                _set(_loc4_, 'colorTransform', _loc3_);
            }
        } else if (_get(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'Level') < 6) {
            _set(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'Benabled', false);
            _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 0, 0, 0);
            _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_));
            _set(_loc4_, 'colorTransform', _loc3_);
        } else {
            _set(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'Level', 6);
            _set(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'Benabled', false);
            _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 0.5, 0.5, 1, 125, 0, 0, 0);
            _loc4_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_));
            _set(_loc4_, 'colorTransform', _loc3_);
        }
        _loc2_ = _loc2_ + 1;
    }
    _call(_get(_scope, '_root'), 'F_NumShow', [
        _get(_get(_scope, '_root'), 'M_ShowCang'),
        _get(_get(_scope, '_root'), 'NowGuanSu'),
        452,
        65,
        1,
        82
    ]);
    _call(_get(_scope, '_root'), 'F_NumShow', [
        _get(_get(_scope, '_root'), 'M_ShowCang'),
        _get(_get(_scope, '_root'), 'AllDeFen'),
        530,
        65,
        2,
        82
    ]);
});
_set(_scope, 'F_UpdateVar', function (Tyle) {
    _set(_get(_scope, '_root'), 'DiRenLondCount', 0);
    _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
    _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
    _set(_get(_scope, '_root'), 'DiRenDeph', 0);
    _set(_get(_scope, '_root'), 'CaoJiCount', 0);
    _set(_get(_scope, '_root'), 'FaShiCount', 0);
    _set(_get(_scope, '_root'), 'JianDeph', 0);
    _set(_get(_scope, '_root'), 'ADiRenName', '');
    _set(_get(_scope, '_root'), 'GuanEWDeFen', 0);
    _set(_get(_scope, '_root'), 'DiRenMax', 7);
    if (_get(_get(_scope, '_root'), 'NowGuanSu') > 30) {
        _set(_get(_scope, '_root'), 'DiRenMax', 7 + (_get(_get(_scope, '_root'), 'NowGuanSu') - 30));
    }
    _set(_get(_scope, '_root'), 'DiRenMaxZL', _get(_get(_scope, '_root'), 'DiRenMax'));
    _set(_get(_scope, '_root'), 'ButtonMess', '');
    _set(_get(_scope, '_root'), 'NowTimeGO', 0);
    _set(_get(_scope, '_root'), 'ZCfinish', 0);
    _set(_get(_scope, '_root'), 'NowTimeZL', new (_get(_scope, 'Date'))());
    _set(_get(_get(_get(_scope, '_root'), 'M_NowTimeGO'), 'M_TimeScal'), 'StarSound', false);
    var _loc2_;
    if (Tyle == 1) {
        _set(_get(_scope, '_root'), 'SDHPstr', '');
        _set(_get(_scope, '_root'), 'LoadArr', []);
        _set(_get(_scope, '_root'), 'DiRenStar_x', 0);
        _set(_get(_scope, '_root'), 'DiRenStar_y', 0);
        _set(_get(_scope, '_root'), 'SeSiDeph', 0);
        _set(_get(_scope, '_root'), 'SeSiDephNext', 0);
        _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'MoneyStar'));
        _set(_get(_scope, '_root'), 'SenJiDian', 0);
        _set(_get(_scope, '_root'), 'RuanJiao', 0);
        _set(_get(_scope, '_root'), 'BuyLu', _get(_get(_scope, '_root'), 'BuyLuStar'));
        _set(_get(_scope, '_root'), 'SellLu', _get(_get(_scope, '_root'), 'SellLuStar'));
        _set(_get(_scope, '_root'), 'LieRingCount', 0);
        _set(_get(_scope, '_root'), 'SenLongCount', 0);
        _set(_get(_scope, '_root'), 'NowGuanSu', 1);
        _set(_get(_scope, '_root'), 'All_Attack', 1);
        _set(_get(_scope, '_root'), 'All_FanWei', 1);
        _set(_get(_scope, '_root'), 'All_MaxHP', 1);
        _set(_get(_scope, '_root'), 'AllSen_FanWei', 1);
        _set(_get(_scope, '_root'), 'All_Money', 1);
        _set(_get(_scope, '_root'), 'AllEWDeFen', 0);
        _set(_get(_scope, '_root'), 'AllDeFen', 0);
        _set(_get(_scope, '_root'), 'MessText', '');
        _set(_get(_scope, '_root'), 'AuMessText', '');
        _set(_get(_scope, '_root'), 'NowDiTuID', -1);
        _set(_get(_scope, '_root'), 'MySellID', 1);
        _set(_get(_scope, '_root'), 'GameStar', false);
        _set(_get(_scope, '_root'), 'GamePause', false);
        _loc2_ = 1;
        while (_loc2_ <= 5) {
            _set(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'Level', 0);
            _set(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'SJMoney', _get(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'rSJMoney'));
            _set(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'SJSenJiDian', _get(_get(_get(_scope, '_root'), 'M_RuanJiao' + _loc2_), 'rSJSenJiDian'));
            _loc2_ = _loc2_ + 1;
        }
    }
});
_set(_scope, 'F_UpdateCang', function (Tyle) {
    for (var _loc2_ in _get(_get(_scope, '_root'), 'M_TemQang')) {
        if (_get(_get(_get(_get(_scope, '_root'), 'M_TemQang'), _loc2_), '_name') != 'M_RuKoRun') {
            _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), _loc2_), 'removeMovieClip', []);
        }
    }
    for (_loc2_ in _get(_get(_scope, '_root'), 'M_TemQangU')) {
        _call(_get(_get(_get(_scope, '_root'), 'M_TemQangU'), _loc2_), 'removeMovieClip', []);
    }
    for (_loc2_ in _get(_get(_scope, '_root'), 'M_DanQang')) {
        _call(_get(_get(_get(_scope, '_root'), 'M_DanQang'), _loc2_), 'removeMovieClip', []);
    }
    for (_loc2_ in _get(_get(_scope, '_root'), 'M_DiTu0')) {
        _call(_get(_get(_get(_scope, '_root'), 'M_DiTu0'), _loc2_), 'removeMovieClip', []);
    }
    for (_loc2_ in _get(_get(_scope, '_root'), 'M_DiTu9')) {
        _call(_get(_get(_get(_scope, '_root'), 'M_DiTu9'), _loc2_), 'removeMovieClip', []);
    }
    if (Tyle == 1) {
        for (_loc2_ in _get(_get(_scope, '_root'), 'M_SeSiQang')) {
            _call(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc2_), 'removeMovieClip', []);
        }
        for (_loc2_ in _get(_get(_scope, '_root'), 'M_DiTu1')) {
            _call(_get(_get(_get(_scope, '_root'), 'M_DiTu1'), _loc2_), 'removeMovieClip', []);
        }
        for (_loc2_ in _get(_get(_scope, '_root'), 'M_SeSiQangB')) {
            _call(_get(_get(_get(_scope, '_root'), 'M_SeSiQangB'), _loc2_), 'removeMovieClip', []);
        }
        for (_loc2_ in _get(_get(_scope, '_root'), 'M_DiTu2')) {
            _call(_get(_get(_get(_scope, '_root'), 'M_DiTu2'), _loc2_), 'removeMovieClip', []);
        }
        for (_loc2_ in _get(_get(_scope, '_root'), 'M_ShowCang')) {
            _call(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), _loc2_), 'removeMovieClip', []);
        }
        _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_RuKoRun'), 'removeMovieClip', []);
        _call(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'removeMovieClip', []);
    }
});
_set(_scope, 'ZCfinish', 0);
_set(_scope, 'F_GuanPass', function () {
    var _loc4_;
    var _loc3_;
    var _loc2_;
    if (_get(_get(_scope, '_root'), 'SenJiDian') >= 500 && _get(_get(_scope, '_root'), 'NowGuanSu') > 30 && _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * 3800]) == 1) {
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'attachSound', ['Sf_Sound119']);
        _call(_get(_get(_scope, '_root'), 'S_Sound4'), 'start', [
            0,
            1
        ]);
        _set(_get(_scope, '_root'), 'SenJiDian', _get(_get(_scope, '_root'), 'SenJiDian') - 10);
        _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
        if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 500) {
            _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
        }
        _loc4_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_x');
        _loc3_ = _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), '_y');
        _loc2_ = _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
            'Mf_SenEn',
            'M_DeMoney' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
            _get(_get(_scope, '_root'), 'RuanQenDeph'),
            {
                _x: _loc4_,
                _y: _loc3_
            }
        ]);
        _set(_loc2_, '_xscale', _set(_loc2_, '_yscale', 200));
        _set(_loc2_, '_alpha', 60);
        _set(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'MaxHP'));
        for (var _loc5_ in _get(_get(_scope, '_root'), 'M_SeSiQang')) {
            if (_get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc5_), 'Tyle') == 1 && _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc5_), 'HP') < _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc5_), 'MaxHP')) {
                _set(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc5_), 'HP', _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc5_), 'MaxHP'));
                _update(_get(_scope, '_root'), 'RuanQenDeph', 1, false);
                if (_get(_get(_scope, '_root'), 'RuanQenDeph') > 500) {
                    _set(_get(_scope, '_root'), 'RuanQenDeph', 100);
                }
                _loc4_ = _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc5_), '_x');
                _loc3_ = _get(_get(_get(_get(_scope, '_root'), 'M_SeSiQang'), _loc5_), '_y');
                _loc2_ = _call(_get(_get(_scope, '_root'), 'M_TemQang'), 'attachMovie', [
                    'Mf_SenEn',
                    'M_DeMoney' + _get(_get(_scope, '_root'), 'RuanQenDeph'),
                    _get(_get(_scope, '_root'), 'RuanQenDeph'),
                    {
                        _x: _loc4_,
                        _y: _loc3_
                    }
                ]);
                _set(_loc2_, '_alpha', 60);
                false;
            }
        }
        false;
    }
    var _loc7_;
    var _loc6_;
    var _loc8_;
    if (_get(_get(_scope, '_root'), 'DiRenMaxZL') <= 0) {
        _update(_get(_scope, '_root'), 'ZCfinish', 1, false);
        if (_get(_get(_scope, '_root'), 'ZCfinish') > 60) {
            _set(_get(_scope, '_root'), 'GamePause', true);
            _loc7_ = _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'Money') / 16]);
            _set(_get(_scope, '_root'), 'GuanEWDeFen', _get(_get(_scope, '_root'), 'GuanEWDeFen') + _loc7_);
            if (_get(_get(_scope, '_root'), 'GuanEWDeFen') > 0) {
                _loc6_ = _call(_get(_scope, 'Math'), 'round', [_loc7_ * 3.5 * _get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'Level')]);
                if (_loc6_ < _get(_get(_scope, '_root'), 'NowGuanSu') * 50) {
                    _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') + _loc6_);
                } else {
                    _set(_get(_scope, '_root'), 'Money', _get(_get(_scope, '_root'), 'Money') + _get(_get(_scope, '_root'), 'NowGuanSu') * 50);
                }
                _call(_get(_get(_scope, '_root'), 'M_MoneyBan'), 'gotoAndPlay', ['a1']);
            } else {
                _set(_get(_scope, '_root'), 'GuanEWDeFen', 0);
            }
            _set(_get(_scope, '_root'), 'AllEWDeFen', _get(_get(_scope, '_root'), 'AllEWDeFen') + _get(_get(_scope, '_root'), 'GuanEWDeFen'));
            if (_get(_get(_scope, '_root'), 'AllEWDeFen') < 0) {
                _set(_get(_scope, '_root'), 'AllEWDeFen', 0);
            }
            _set(_get(_scope, '_root'), 'AllDeFen', _get(_get(_scope, '_root'), 'AllDeFen') + _get(_get(_scope, '_root'), 'GuanEWDeFen'));
            if (_get(_get(_scope, '_root'), 'AllDeFen') < 0) {
                _set(_get(_scope, '_root'), 'AllDeFen', 0);
            }
            if (_get(_get(_scope, '_root'), 'MySellID') == 2) {
                _set(_get(_scope, '_root'), 'AllDeFen', _get(_get(_scope, '_root'), 'AllDeFen') + _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'GuanEWDeFen') * 1.2]));
            }
            if (_get(_get(_scope, '_root'), 'MySellID') == 3) {
                _set(_get(_scope, '_root'), 'AllDeFen', _get(_get(_scope, '_root'), 'AllDeFen') + _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'GuanEWDeFen') * 1.8]));
            }
            if (_get(_get(_scope, '_root'), 'AllDeFen') < 0) {
                _set(_get(_scope, '_root'), 'AllDeFen', 0);
            }
            _loc8_ = 1;
            if (_get(_get(_scope, '_root'), 'NowGuanSu') == 30) {
                _loc8_ = 2;
            }
            if (_get(_get(_scope, '_root'), 'NowGuanSu') == 50) {
                _loc8_ = 4;
            }
            _set(_scope, '_quality', 'HIGH');
            _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
                'Mf_DHKOver',
                'M_DHKOver',
                1000,
                {
                    _x: 325,
                    _y: 250,
                    GoToID: _loc8_
                }
            ]);
            _set(_get(_scope, '_root'), 'DiRenGoPD', false);
        }
    }
    if (_get(_get(_get(_get(_scope, '_root'), 'M_DiTu8'), 'M_GongDian'), 'HP') <= 0) {
        _update(_get(_scope, '_root'), 'ZCfinish', 1, false);
        if (_get(_get(_scope, '_root'), 'ZCfinish') > 50) {
            _set(_get(_scope, '_root'), 'GamePause', true);
            _loc7_ = _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'Money') / 16]);
            _set(_get(_scope, '_root'), 'GuanEWDeFen', _get(_get(_scope, '_root'), 'GuanEWDeFen') + _call(_get(_scope, 'Math'), 'round', [_loc7_ / 5]));
            if (_get(_get(_scope, '_root'), 'GuanEWDeFen') < 0) {
                _set(_get(_scope, '_root'), 'GuanEWDeFen', 0);
            }
            _set(_get(_scope, '_root'), 'AllEWDeFen', _get(_get(_scope, '_root'), 'AllEWDeFen') + _get(_get(_scope, '_root'), 'GuanEWDeFen'));
            if (_get(_get(_scope, '_root'), 'AllEWDeFen') < 0) {
                _set(_get(_scope, '_root'), 'AllEWDeFen', 0);
            }
            _set(_get(_scope, '_root'), 'AllDeFen', _get(_get(_scope, '_root'), 'AllDeFen') + _get(_get(_scope, '_root'), 'GuanEWDeFen'));
            if (_get(_get(_scope, '_root'), 'AllDeFen') < 0) {
                _set(_get(_scope, '_root'), 'AllDeFen', 0);
            }
            _set(_scope, '_quality', 'HIGH');
            _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
                'Mf_DHKOver',
                'M_DHKOver',
                1000,
                {
                    _x: 325,
                    _y: 250,
                    GoToID: 3
                }
            ]);
            _set(_get(_scope, '_root'), 'DiRenGoPD', false);
        }
    }
});
_set(_scope, 'F_GameStar', function () {
    _set(_get(_scope, '_root'), 'DiRenMaxZL', _get(_get(_scope, '_root'), 'DiRenMax'));
    if (_get(_get(_scope, '_root'), 'NowDiTuID') < 0) {
        _set(_get(_scope, '_root'), 'NowDiTuID', _call(_get(_scope, 'Math'), 'floor', [_call(_get(_scope, 'Math'), 'random', []) * _get(_get(_scope, '_root'), 'DiTuCount')]));
    }
    _call(_get(_scope, '_root'), 'F_CreaDiTu', []);
    _set(_get(_scope, '_root'), 'GameStar', true);
    _set(_get(_get(_scope, '_root'), 'B_GuanStar'), 'enabled', true);
    var _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
    var _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_GuanStar'));
    _set(_loc3_, 'colorTransform', _loc2_);
    _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'attachSound', ['Sf_Sound125']);
    _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'start', [
        0,
        1
    ]);
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound101']);
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'start', [
        0,
        99999
    ]);
    _set(_get(_scope, '_root'), 'DiRenGoPD', false);
});
_set(_scope, 'F_GuanStar', function () {
    var _loc2_;
    var _loc3_;
    if (_get(_get(_scope, '_root'), 'NowGuanSu') < 50) {
        _call(_get(_scope, '_root'), 'F_UpdateVar', [0]);
        _call(_get(_scope, '_root'), 'F_UpdateCang', [0]);
        _update(_get(_scope, '_root'), 'NowGuanSu', 1, false);
        _set(_get(_scope, '_root'), 'GamePause', false);
        _set(_get(_get(_scope, '_root'), 'B_GuanStar'), 'enabled', true);
        _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(1, 1, 1, 1, 0, 0, 0, 0);
        _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_GuanStar'));
        _set(_loc3_, 'colorTransform', _loc2_);
        _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'attachSound', ['Sf_Sound125']);
        _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'start', [
            0,
            1
        ]);
        _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound101']);
        _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'start', [
            0,
            99999
        ]);
        _set(_get(_scope, '_root'), 'DiRenGoPD', false);
    }
});
_set(_scope, 'F_BackMenu', function () {
    _set(_get(_scope, '_root'), 'GameStar', false);
    _call(_get(_scope, '_root'), 'F_UpdateVar', [1]);
    _call(_get(_scope, '_root'), 'F_UpdateCang', [1]);
    _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
        'Mf_DHKStar',
        'M_DHKStar',
        1000,
        {
            _x: 325,
            _y: 250
        }
    ]);
});
_set(_scope, 'F_StarArrFun', function () {
    _set(_get(_scope, '_root'), 'TemSeSiShow', 0);
    _call(_get(_get(_get(_scope, '_root'), 'M_TemQang'), 'M_TemSeSi'), 'removeMovieClip', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
    _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
        0,
        1
    ]);
    _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'attachSound', ['Sf_Sound118']);
    _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'start', [
        0,
        1
    ]);
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'stop', []);
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'attachSound', ['Sf_Sound117']);
    _call(_get(_get(_scope, '_root'), 'S_Sound1'), 'start', [
        0,
        99999
    ]);
    _call(_get(_scope, '_root'), 'F_CreaDiRenS', []);
    _set(_get(_scope, '_root'), 'DiRenGoPD', true);
    _set(_get(_get(_scope, '_root'), 'B_GuanStar'), 'enabled', false);
    var _loc2_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'ColorTransform'))(0.5, 0.5, 0.5, 1, 0, 0, 0, 0);
    var _loc3_ = new (_get(_get(_get(_scope, 'flash'), 'geom'), 'Transform'))(_get(_get(_scope, '_root'), 'B_GuanStar'));
    _set(_loc3_, 'colorTransform', _loc2_);
    if (_get(_get(_scope, '_root'), 'NowGuanSu') > 30) {
        _set(_scope, '_quality', 'MEDIUM');
    }
});
},
// frame_22/DoAction_5.as
function program366(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'S_Sound1', new (_get(_scope, 'Sound'))(_get(_get(_scope, '_root'), 'M_Sound1')));
_set(_scope, 'S_Sound2', new (_get(_scope, 'Sound'))(_get(_get(_scope, '_root'), 'M_Sound2')));
_set(_scope, 'S_Sound3', new (_get(_scope, 'Sound'))(_get(_get(_scope, '_root'), 'M_Sound3')));
_set(_scope, 'S_Sound4', new (_get(_scope, 'Sound'))(_get(_get(_scope, '_root'), 'M_Sound4')));
_set(_scope, 'S_Sound5', new (_get(_scope, 'Sound'))(_get(_get(_scope, '_root'), 'M_Sound5')));
_set(_scope, 'S_Sound6', new (_get(_scope, 'Sound'))(_get(_get(_scope, '_root'), 'M_Sound6')));
_set(_scope, 'S_Sound7', new (_get(_scope, 'Sound'))(_get(_get(_scope, '_root'), 'M_Sound7')));
_set(_get(_scope, 'S_Sound2'), 'onSoundComplete', function () {
    _set(_get(_scope, '_root'), 'M_Sound2Star', false);
});
_set(_scope, 'i', 1);
while (_get(_scope, 'i') <= 7) {
    _set(_scope, 'NowSetVol', _get(_get(_scope, '_root'), 'SoundVol'));
    if ((_get(_scope, 'i') == 1 || _get(_scope, 'i') == 2) && _get(_get(_scope, '_root'), 'SoundVol') > 0) {
        _set(_scope, 'NowSetVol', _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'SoundVol') / 1.1]));
    }
    _call(_get(_get(_scope, '_root'), 'S_Sound' + _get(_scope, 'i')), 'setVolume', [_get(_scope, 'NowSetVol')]);
    _update(_scope, 'i', 1, false);
}
_set(_get(_get(_scope, '_root'), 'B2_ShowSeSi1'), '_visible', false);
_set(_get(_get(_scope, '_root'), 'B2_ShowSeSi2'), '_visible', false);
_set(_get(_get(_scope, '_root'), 'B2_ShowSeSi3'), '_visible', false);
_set(_get(_get(_scope, '_root'), 'B2_ShowSeSi4'), '_visible', false);
_set(_get(_get(_scope, '_root'), 'B2_ShowSeSi5'), '_visible', false);
_set(_get(_get(_scope, '_root'), 'B2_ShowSeSi6'), '_visible', false);
_set(_get(_get(_scope, '_root'), 'B2_ShowSeSi101'), '_visible', false);
_set(_get(_get(_scope, '_root'), 'B2_ShowSeSi201'), '_visible', false);
_set(_get(_get(_scope, '_root'), 'B2_ShowSeSi202'), '_visible', false);
_set(_get(_get(_scope, '_root'), 'B2_ShowSeSi102'), '_visible', false);
_set(_get(_get(_scope, '_root'), 'M_ShowSeSi1'), 'Star', false);
_set(_get(_get(_scope, '_root'), 'M_ShowSeSi2'), 'Star', false);
_set(_get(_get(_scope, '_root'), 'M_ShowSeSi3'), 'Star', false);
_set(_get(_get(_scope, '_root'), 'M_ShowSeSi4'), 'Star', false);
_set(_get(_get(_scope, '_root'), 'M_ShowSeSi5'), 'Star', false);
_set(_get(_get(_scope, '_root'), 'M_ShowSeSi6'), 'Star', false);
_set(_get(_get(_scope, '_root'), 'M_ShowSeSi101'), 'Star', false);
_set(_get(_get(_scope, '_root'), 'M_ShowSeSi201'), 'Star', false);
_set(_get(_get(_scope, '_root'), 'M_ShowSeSi202'), 'Star', false);
_set(_get(_get(_scope, '_root'), 'M_ShowSeSi102'), 'Star', false);
_set(_get(_get(_get(_scope, '_root'), 'M_NowTimeGO'), 'M_TimeScal'), 'StarSound', false);
_set(_get(_scope, '_root'), 'onEnterFrame', function () {
    var _loc3_;
    var _loc2_;
    if (_get(_get(_scope, '_root'), 'GameStar') && _get(_get(_scope, '_root'), 'GamePause') == false) {
        _call(_get(_scope, '_root'), 'F_UpdateButton', []);
        if (_get(_get(_get(_scope, '_root'), 'B_GuanStar'), 'enabled') && (_get(_get(_scope, '_root'), 'MySellID') == 2 || _get(_get(_scope, '_root'), 'MySellID') == 3)) {
            _update(_get(_scope, '_root'), 'NowTimeGO', 1, false);
            _loc3_ = new (_get(_scope, 'Date'))();
            _loc2_ = (_loc3_ - _get(_get(_scope, '_root'), 'NowTimeZL')) / 1000;
            _set(_get(_get(_get(_scope, '_root'), 'M_NowTimeGO'), 'M_TimeScal'), '_yscale', 100 - _loc2_ * (100 / _get(_get(_scope, '_root'), 'AllTimeGO')));
            if (_get(_get(_get(_get(_scope, '_root'), 'M_NowTimeGO'), 'M_TimeScal'), '_yscale') < 25 && _get(_get(_get(_get(_scope, '_root'), 'M_NowTimeGO'), 'M_TimeScal'), 'StarSound') == false) {
                _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'stop', []);
                _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'attachSound', ['Sf_Sound105']);
                _call(_get(_get(_scope, '_root'), 'S_Sound7'), 'start', [
                    0,
                    1
                ]);
                _set(_get(_get(_get(_scope, '_root'), 'M_NowTimeGO'), 'M_TimeScal'), 'StarSound', true);
            }
            if (_loc2_ >= _get(_get(_scope, '_root'), 'AllTimeGO')) {
                _call(_get(_scope, '_root'), 'F_StarArrFun', []);
            }
        }
        if (_get(_get(_get(_scope, '_root'), 'B_GuanStar'), 'enabled') == false) {
            _call(_get(_scope, '_root'), 'F_GuanPass', []);
        }
    }
});
_call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
    'Mf_DHKStar',
    'M_DHKStar',
    1000,
    {
        _x: 325,
        _y: 250
    }
]);
_set(_get(_scope, '_root'), 'onKeyDown', function () {
    if (_call(_get(_scope, 'Key'), 'isDown', [80]) && _get(_get(_scope, '_root'), 'GameStar') && _get(_get(_scope, '_root'), 'GamePause') == false) {
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
            0,
            1
        ]);
        _set(_get(_scope, '_root'), 'GamePause', true);
        _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
            'Mf_GamePause',
            'M_GamePause',
            999,
            {
                _x: 325,
                _y: 250
            }
        ]);
    }
    var _loc2_;
    var _loc3_;
    if (_call(_get(_scope, 'Key'), 'isDown', [83]) && _get(_get(_scope, '_root'), 'GameStar') && _get(_get(_scope, '_root'), 'GamePause') == false) {
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
            0,
            1
        ]);
        _set(_get(_scope, '_root'), 'SoundOn', !_get(_get(_scope, '_root'), 'SoundOn'));
        _set(_get(_get(_get(_scope, '_root'), 'M_ToolB4'), 'M_SoundClose'), '_visible', !_get(_get(_scope, '_root'), 'SoundOn'));
        if (_get(_get(_scope, '_root'), 'SoundOn')) {
            _set(_get(_scope, '_root'), 'SoundVol', _get(_get(_scope, '_root'), 'SoundVolTem'));
        } else {
            _set(_get(_scope, '_root'), 'SoundVolTem', _get(_get(_scope, '_root'), 'SoundVol'));
            _set(_get(_scope, '_root'), 'SoundVol', 0);
        }
        _loc2_ = 1;
        while (_loc2_ <= 7) {
            _loc3_ = _get(_get(_scope, '_root'), 'SoundVol');
            if ((_loc2_ == 1 || _loc2_ == 2) && _get(_get(_scope, '_root'), 'SoundVol') > 0) {
                _loc3_ = _call(_get(_scope, 'Math'), 'round', [_get(_get(_scope, '_root'), 'SoundVol') / 1.2]);
            }
            _call(_get(_get(_scope, '_root'), 'S_Sound' + _loc2_), 'setVolume', [_loc3_]);
            _loc2_ = _loc2_ + 1;
        }
    }
    if (_call(_get(_scope, 'Key'), 'isDown', [72]) && _get(_get(_scope, '_root'), 'GameStar') && _get(_get(_scope, '_root'), 'GamePause') == false) {
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
            0,
            1
        ]);
        _set(_get(_scope, '_root'), 'GamePause', true);
        _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
            'Mf_DHKStar',
            'M_DHKStar',
            1000,
            {
                _x: 325,
                _y: 250
            }
        ]);
    }
    if (_call(_get(_scope, 'Key'), 'isDown', [81]) && _get(_get(_scope, '_root'), 'GameStar') && _get(_get(_scope, '_root'), 'GamePause') == false) {
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
        _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
            0,
            1
        ]);
        _set(_get(_scope, '_root'), 'GamePause', true);
        _call(_get(_get(_scope, '_root'), 'M_ShowCang'), 'attachMovie', [
            'Mf_DHKSunWen',
            'M_DHKSunWen',
            999,
            {
                _x: 325,
                _y: 250
            }
        ]);
    }
    if (_call(_get(_scope, 'Key'), 'isDown', [32]) && _get(_get(_scope, '_root'), 'GameStar') && _get(_get(_get(_scope, '_root'), 'B_GuanStar'), 'enabled')) {
        _call(_get(_scope, '_root'), 'F_StarArrFun', []);
    }
    if (_call(_get(_scope, 'Key'), 'isDown', [65]) && _get(_get(_scope, '_root'), 'GameStar') && _get(_get(_scope, '_root'), 'GamePause') == false) {
        if (_get(_get(_scope, '_root'), 'LieRingCount') > 0 && _get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'Die') == false && (_get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'TyleStr') == '陆军' || _get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), 'TyleStr') == '空军')) {
            _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'stop', []);
            _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'attachSound', ['Sf_Sound131']);
            _call(_get(_get(_scope, '_root'), 'S_Sound3'), 'start', [
                1,
                1
            ]);
            _set(_get(_scope, '_root'), 'ADiRenName', _get(_get(_get(_get(_get(_scope, '_root'), 'M_ShowCang'), 'M_DHKSuSing'), 'MivObject'), '_name'));
        }
    }
});
_call(_get(_scope, 'Key'), 'addListener', [_get(_scope, '_root')]);
},
// frame_4/DoAction.as
function program367(_scope, _get, _set, _call, _update, _delete) {
_set(_scope, 'classesFrame', 15);
_set(_scope, 'loaded', _call(_get(_scope, 'Math'), 'round', [_call(_get(_scope, '_root'), 'getBytesLoaded', []) / _call(_get(_scope, '_root'), 'getBytesTotal', []) * 100]));
_set(_scope, 't', _call(_scope, 'getTimer', []));
_set(_scope, 'speed', _call(_get(_scope, 'Math'), 'round', [_call(_get(_scope, '_root'), 'getBytesLoaded', []) / _get(_scope, 't') * 100 / 100]) + ' K/s');
_set(_scope, 'loadedv', _get(_scope, 'loaded') + ' %');
_set(_get(_scope, 'M_ZeKuan'), '_yscale', _get(_scope, 'loaded'));
if (_call(_get(_scope, '_root'), 'getBytesLoaded', []) >= _call(_get(_scope, '_root'), 'getBytesTotal', [])) {
    _call(_scope, 'gotoAndStop', ['go']);
    _call(_scope, 'play', []);
} else {
    _call(_scope, 'gotoAndStop', ['Load']);
    _call(_scope, 'play', []);
}
_call(_scope, 'stop', []);
},
];
