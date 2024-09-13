SHELL = /bin/bash

.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help

setup-docs:
	cd docs && yarn

setup: setup-docs		## setup local environment

build-docs:
	cd docs && yarn build

dev:		## start dev server
	cd docs && yarn dev
