


cli:
	docker-compose run --rm wpcli bash

install-webpack:
	npm init
	npm install --save-dev --legacy-peer-deps postcss-loader autoprefixer webpack webpack-cli webpack-mode mini-css-extract-plugin babel-loader @babel/core @babel/preset-env mini-css-extract-plugin css-loader sass-loader sass file-loader clean-webpack-plugin webpack-dev-server \
	npm install --save-dev --legacy-peer-deps @babel/core
	npm install --save-dev --legacy-peer-deps @babel/preset-env