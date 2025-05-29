function loadCommits() {
    // Try it with Fetch API
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;          

    fetch(url)
        .then(onResponse)
        .then(onData)
        .catch(onError)

    function onResponse(res) {
        if (!res.ok) {
            throw new Error(`${res.status} (Not Found)`);
        }

        return res.json();
    }

    function onData(data) {
        console.log(data);
        const list = document.getElementById('commits');

        for (let commit of data) {
            const item = document.createElement('li');
            const entry = `${commit.commit.author.name}: ${commit.commit.message}`;

            item.textContent = entry;
            list.appendChild(item);
        }

    }

    function onError(err) {
        const list = document.getElementById('commits');
        const item = document.createElement('li');

        list.textContent = '';
        item.textContent = err;
        list.appendChild(item);

    }
}