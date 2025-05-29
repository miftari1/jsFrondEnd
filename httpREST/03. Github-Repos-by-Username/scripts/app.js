function loadRepos() {

	let username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(onResponse)
		.then(onData)
		.catch(onError);

	function onResponse(res) {
		if (!res.ok) {
			throw new Error(res.json());
		}

		return res.json();
	}

	function onData(data) {
		const list = document.getElementById('repos');
		list.textContent = '';
		
		for (let repo of data) {
			const item = document.createElement('li');
			const link = document.createElement('a');
			const repoName = repo.full_name;
			const repoUrl = repo.html_url;

			link.href = repoUrl;
			link.textContent = repoName;

			item.appendChild(link);

			list.appendChild(item);
		}

	}

	function onError(err) {
		const list = document.getElementById('repos');

		list.textContent = '';

		const item = document.createElement('li');
		
		item.textContent = err.message;

		list.appendChild(item);
	}
}