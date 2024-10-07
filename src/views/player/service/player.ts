import hyRequest from "@/service";

export function getSongDetail(id: number) {
    return hyRequest.get({
        url: '/song/detail',
        params: {
            ids: id
        }
    })
}

export function getSongLyric(id: number) {
    return hyRequest.get({
        url: '/lyric',
        params: {
            id
        }
    })
}