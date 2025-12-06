export class Saver {
    static KEY_LIKES = "likes";

    static saveKey(key, data) {
        window.localStorage.setItem(key, data);
    }
    static getKey(key) {
        return window.localStorage.getItem(key);

    }

    static resetLikes() {
        window.localStorage.removeItem(Saver.KEY_LIKES);
    }
    static getLikes() {
        let data_likes = this.getKey(this.KEY_LIKES);
        let likes = [];
        if (data_likes != null) {
            likes = JSON.parse(data_likes);
        }
        return likes;
    }

    static saveLike(type, id) {
        let likes = this.getLikes();
        likes.push({ "type": type, "id": id });
        this.saveKey(this.KEY_LIKES, JSON.stringify(likes));
    }
}