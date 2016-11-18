SRC := $(wildcard src/*.js)

test: node_modules
	node_modules/.bin/ava

lint: node_modules
	node_modules/.bin/standard

lib: $(SRC) node_modules
	node_modules/.bin/babel src --out-dir $@ --source-maps inline

clean:
	rm -rf lib

.PHONY: test lint clean
