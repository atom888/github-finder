class Github {
    constructor() {
        this.client_id = '4ff86311094b3d378900';
        this.client_secret = '0ca88c20e55a0c124a04d026051fe2bfb749fe86';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}