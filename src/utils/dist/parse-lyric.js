"use strict";
exports.__esModule = true;
exports.parseLyric = void 0;
// 【00:00.000】 作曲 : 林俊杰
var timeRegExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/;
function parseLyric(lyricString) {
    //1. 拿到一行行的歌词
    var lines = lyricString.split('\n');
    //2. 解析歌词
    var lyrics = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        // 1.匹配结果
        var result = timeRegExp.exec(line);
        if (!result)
            continue;
        // 2.获取每一组的数据
        var time1 = Number(result[1]) * 60 * 1000;
        var time2 = Number(result[2]) * 1000;
        var time3 = result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10;
        var time = time1 + time2 + time3;
        // 3.获取歌词文本
        var text = line.replace(timeRegExp, '').trim();
        lyrics.push({ time: time, text: text });
    }
    return lyrics;
}
exports.parseLyric = parseLyric;
